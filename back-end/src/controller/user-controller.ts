import type { Request, Response } from "express";
import { prisma } from "../db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json({ message: "Email and password are required" });
      return;
    }
    const user = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const match = await bcrypt.compare(password, user?.password);

    if (!match) {
      res.status(401).json({ message: "Usuário não encontrado" });
      return;
    }
    const userInfos = {
      id: user.id,
      name: user.name,
      email: user.email,
      cep: user.cep,
      admin: user.admin,
    };
    const secret = process.env.JWT_SECRET;
    if (!secret) {
      res.status(500).json({ message: "Erro no servidor" });
      return;
    }

    const token = jwt.sign(userInfos, secret, {
      expiresIn: "7d",
    });

    res.cookie("user", token, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 dias
    });

    res.status(200).json(userInfos);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
    return;
  }
};

export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password, cep } = req.body;
    if (!name || !email || !password || !cep) {
      res.status(400).json({ message: "All fields are required" });
      return;
    }

    const hash = await bcrypt.hash(password, 10);

    const userExists = await prisma.user.findFirst({
      where: { email: email },
    });
    if (userExists?.email) {
      res.status(409).json({ message: "User already exists" });
      return;
    }
    const newUser = await prisma.user.create({
      data: {
        name: name,
        email: email,
        password: hash,
        cep: cep,
      },
      select: { id: true, name: true, email: true, cep: true },
    });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
    return;
  }
};

export const auth = async (req: Request, res: Response) => {
  try {
    const { user } = req;
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
    return;
  }
};

export const logout = async (req: Request, res: Response) => {
  try {
    const { user } = req.cookies;
    if (user) {
      res.clearCookie("user");
      res.json({ message: "Logout successful" });
    }
    console.log(user);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};
