import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client.js";
const connectionString = `${process.env.DATABASE_URL}`;
const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });
// Forma antiga de usar o PrismaClient, mas agora é necessário passar o adapter como parâmetro para a conexão com o banco de dados
// const prisma = new PrismaClient();
export { prisma };

export async function connection() {
  try {
    await prisma.$connect();
    console.log("Conexão com o banco de dados estabelecida com sucesso!");
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
}
