import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../service/api";

import Button from "../components/Button";
import { ErrorResponse } from "@remix-run/router";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const navigate = useNavigate();

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handlePassword2Change(e) {
    setPassword2(e.target.value);
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    if (!name || !email || !password || !password2) {
      return alert("Prencha todos os campos");
    }

    if (password !== password2) {
      return alert("Senhas diferentes");
    }

    api
      .post("/users", { name, email, password })
      .then(() => {
        alert("Cadastro efetuado com sucesso");
        navigate("/");
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possivel cadastrar");
        }
      });
  }

  return (
    <div className="bg-slate-100 h-screen">
      <form
        className="w-4/6 flex flex-col justify-end items-start"
        onSubmit={handleFormSubmit}
      >
        <label className="m-5" htmlFor="name">
          Name
          <input
            type="text"
            value={name}
            id="name"
            name="name"
            onChange={handleNameChange}
            className="ml-2"

          />
        </label>
        <label className="m-5" htmlFor="email">
          E-mail
          <input
            type="email"
            value={email}
            id="email"
            name="email"
            onChange={handleEmailChange}
            className="ml-2"

          />
        </label>
        <label className="m-5" htmlFor="password">
          Password
          <input
            type="password"
            value={password}
            id="password"
            name="password"
            onChange={handlePasswordChange}
            className="ml-2"

          />
        </label>
        <label className="m-5" htmlFor="password2">
          Confirm password
          <input
            type="password"
            value={password2}
            id="password2"
            name="password2"
            onChange={handlePassword2Change}
            className="ml-2"

          />
        </label>
        <input
          className="hover:cursor-pointer bg-pink-500 hover:bg-pink-600 rounded px-4 py-1 text-white w-72 m-5"
          type="submit"
        />
      </form>
      <Link className="m-5 text-slate-600 hover:text-slate-900" to="/">
        SignIn
      </Link>
    </div>
  );
}
