import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Login() {
  return (
    <>
      <Header />
      <h1>Log In Components!</h1>

      <Link to="/register">Register</Link>
      <Footer />
    </>
  );
}
export default Login;
