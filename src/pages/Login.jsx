import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login({ setIsAuthenticated }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleLogin = (e) => {

    e.preventDefault();

    if (!email || !password) {
      toast.error("Fill all inputs");
      return;
    }

    toast.success("Logged in Successfully");
    setTimeout(() => {
      setIsAuthenticated(true);
    }, 1000);
   }

  return (
    <div>

      <ToastContainer />

      <h1 className="welcome-btn">
        Welcome
      </h1>

      <div className="form-container">

        <h1>Login</h1>

        <form onSubmit={handleLogin}>

          <input
            className="email-box"
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="password-box"
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="login-btn"
          >
            Login
          </button>

        </form>
        
      </div>

    </div>
    
  );
}

export default Login;