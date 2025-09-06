import { useState } from "react";

export default function Forgotpassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleReset = async (e) => {
    e.preventDefault();

    // Mock API request (since ReqRes doesn’t support password reset)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setMessage("Password reset link has been sent to your email!");
  };

  return (
    <div className="forgot-password">
      <h2 >Forgot Password</h2>
      <form onSubmit={handleReset}>
        <label for="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button >
          Reset Password
        </button>
      </form>
      {message && <p className="text-green-600 mt-2">{message}</p>}
    </div>
  );
}
