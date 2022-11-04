import { useState } from "react";
import { Link } from "react-router-dom"

import { useAuth } from "../hooks/auth";

import Button from "../components/Button";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {signIn} = useAuth()


  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleFormSubmit(e){
    e.preventDefault()
    signIn({email,password})
  }

  return (
    <div className="bg-blue-50 h-screen">
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="email">
          E-mail
          <input
            type="email"
            value={email}
            id="email"
            name="email"
            onChange={handleEmailChange}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            value={password}
            id="password"
            name="password"
            onChange={handlePasswordChange}
          />
        </label>
        <Button><input className="hover:cursor-pointer" type="submit"/></Button>
      </form>
      <Link to="/signup">SignUp</Link>
    </div>
  );
}
