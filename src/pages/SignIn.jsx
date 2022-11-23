import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../hooks/auth";

import Button from "../components/Button";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { signIn } = useAuth();

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    signIn({ email, password });
    navigate("/");
  }

  return (
    <div className="bg-slate-100 h-screen">
      <h1 className="w-full text-2xl lg:text-3xl ml-2 text-pink-500 ">Albumzinho brabo</h1>
      <form className="w-4/6 flex flex-col justify-end items-start" onSubmit={handleFormSubmit}>
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
        <label className="m-5"  htmlFor="password">
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
          <input className="hover:cursor-pointer bg-pink-500 hover:bg-pink-600 rounded px-4 py-1 text-white w-72 m-5" type="submit" />
      </form>
      <Link className="m-5 text-slate-600 hover:text-slate-900" to="/signup">SignUp</Link>
    </div>
  );
}
