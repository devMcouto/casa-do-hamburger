import Input from "../components/input.tsx";
import { useState } from "react";
import { Link } from "react-router";
import Button from "../components/Button.tsx";

const Register = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [cep, setCep] = useState("");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log({ nome, email, password, confirmPassword, cep });
  }

  return (
    <form
      className="flex h-screen items-center justify-center bg-[#161410]"
      onSubmit={onSubmit}
    >
      <div className="flex flex-col items-center justify-center gap-2">
        <Link to="/">
          <img src="./logo.png" alt="logo" className="mb-4" />
        </Link>
        <Input placeholder="Nome" onChange={(e) => setNome(e.target.value)} />
        <Input
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />
        <Input
          placeholder="Senha"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          placeholder="Confirmar Senha"
          type="password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Input
          placeholder="CEP"
          type="text"
          onChange={(e) => setCep(e.target.value)}
        />

        <Button title="Criar conta" />
        <Link to="/login" className="w-full">
          <Button title="Já tenho uma conta" variant="outline" />
        </Link>
      </div>
    </form>
  );
};

export default Register;
