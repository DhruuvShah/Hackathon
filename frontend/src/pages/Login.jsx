import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearError, signInWithGoogle } from "../features/auth/authSlice";
import RevealOnScroll from "../components/RevealOnScroll";
import logo from "../assets/images/Logo_-_Horizontal.png.webp";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userInfo, status, error } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(clearError());
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo, dispatch]);

  const handleGoogleSignIn = () => {
    dispatch(signInWithGoogle())
      .unwrap()
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.error("Google Sign-In Failed:", err);
      });
  };

  return (
    <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-black text-white">
      {/* Left Column: Login Form */}
      <div className="flex flex-col justify-center items-center p-8">
        <div className="w-full max-w-sm">
          <RevealOnScroll>
            <Link to="/">
              <img className="mb-5 h-8" src={logo} alt="Centr Logo" />{" "}
              {/* Added a class for sizing */}
            </Link>
            <h2 className="text-3xl font-bold text-white mb-2">
              Welcome back!
            </h2>
            <p className="text-gray-400 mb-8">
              Sign in to continue your journey.
            </p>

            {error && (
              <p className="bg-red-500/20 text-red-400 p-3 rounded-lg mb-6 text-center capitalize">
                {error}
              </p>
            )}

            <div className="space-y-4">
              <button
                onClick={handleGoogleSignIn}
                disabled={status === "loading"}
                className="w-full flex items-center justify-center gap-3 bg-gray-800 hover:bg-gray-700 font-semibold py-3 px-6 rounded-lg transition-all duration-300 disabled:opacity-50"
              >
                <svg className="w-6 h-6" viewBox="0 0 48 48">
                  <path
                    fill="#FFC107"
                    d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
                  ></path>
                  <path
                    fill="#FF3D00"
                    d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"
                  ></path>
                  <path
                    fill="#4CAF50"
                    d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-6.08 0-11.029-3.912-12.657-9.203l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
                  ></path>
                  <path
                    fill="#1976D2"
                    d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l6.19 5.238C42.012 36.49 44 30.638 44 24c0-1.341-.138-2.65-.389-3.917z"
                  ></path>
                </svg>
                {status === "loading" ? "Signing In..." : "Sign in with Google"}
              </button>
            </div>
          </RevealOnScroll>
        </div>
      </div>

      {/* Right Column: Image */}
      <div className="hidden lg:block">
        <img
          src="https://prod-cdn.centr.com/deploy/static/images/login/login-desktop.jpg?v=3"
          alt="Fitness motivation"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};
export default Login;
