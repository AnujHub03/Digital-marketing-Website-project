import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/Context";

function AuthPage() {
  const { login } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleSubmit = async () => {
  try {
    const url = isLogin
      ? "http://localhost:5000/api/auth/login"
      : "http://localhost:5000/api/auth/signup";

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.message);
      return;
    }

    // 🔥 LOGIN FLOW
    if (isLogin) {
      login(data.token);   // ✅ context update
      navigate("/dashboard");
    } 
    
    // 🔥 SIGNUP FLOW
    else {
      alert("Signup successful! Please login");
      setIsLogin(true);
    }

  } catch (error) {
    alert("Something went wrong");
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500">

      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-[350px] text-white border border-white/20">

        <h2 className="text-2xl font-bold text-center mb-6">
          {isLogin ? "Welcome Back 👋" : "Create Account 🚀"}
        </h2>

        {!isLogin && (
          <input
            className="w-full p-3 mb-3 rounded-lg bg-white/20 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
            placeholder="Full Name"
            onChange={e => setForm({ ...form, name: e.target.value })}
          />
        )}

        <input
          className="w-full p-3 mb-3 rounded-lg bg-white/20 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
          placeholder="Email"
          onChange={e => setForm({ ...form, email: e.target.value })}
        />

        <input
          type="password"
          className="w-full p-3 mb-4 rounded-lg bg-white/20 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
          placeholder="Password"
          onChange={e => setForm({ ...form, password: e.target.value })}
        />

        <button
          onClick={handleSubmit}
          className="w-full py-3 rounded-lg bg-white text-indigo-600 font-semibold hover:bg-gray-200 transition duration-300"
        >
          {isLogin ? "Login" : "Signup"}
        </button>

        <p className="text-center text-sm mt-4">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <span
            className="ml-1 font-semibold cursor-pointer underline"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Signup" : "Login"}
          </span>
        </p>

      </div>
    </div>
  );
}

export default AuthPage;