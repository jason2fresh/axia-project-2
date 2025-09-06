import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (userAction) => {
    userAction.preventDefault();

    try {
      const response = await fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Invalid email and password");
      } else {
        const data = await response.json();
        console.log("Login successful:", data);
        setError("");
        alert("Login successfull//!");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <div className="fulllogincontainer">
        <div className="loginDiv">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <div className="emailcontainer">
              <label for="email">Email: </label>
              <input
                id="email"
                type="email"
                // placeholder="Email"
                value={email}
                onChange={(userAction) => setEmail(userAction.target.value)}
              />
            </div>

            <div className="passwordcontainer">
              <label for="password"> Password: </label>
              <input
                id="password"
                type="password"
                // placeholder="Password"
                value={password}
                onChange={(userAction) => setPassword(userAction.target.value)}
              />
            </div>
            <button>Login</button>
            {error && <p className="text-red-500">{error}</p>}
          </form>

          <a href="/forgot-password">Forgot Password?</a>
        </div>
        <div className="signuplink-container">
          <a href="/signup">
            <button className="signuplink">Sign up</button>
          </a>
        </div>
      </div>
    </>
  );
}
