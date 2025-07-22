import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout, updateProfile, clearError } from "../features/auth/authSlice";
import RevealOnScroll from "../components/RevealOnScroll";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userInfo, status, error } = useSelector((state) => state.auth);

  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const prevStatusRef = useRef(status);

  // Populate form with user info when loaded
  useEffect(() => {
    if (userInfo) {
      setName(userInfo.name || "");
      setEmail(userInfo.email || "");
    }
    dispatch(clearError());
  }, [userInfo, dispatch]);

  // Handle status changes to exit edit mode or re-enable buttons
  useEffect(() => {
    if (prevStatusRef.current === "loading" && status !== "loading") {
      if (status === "succeeded") {
        setIsEditing(false);
      }
    }
    prevStatusRef.current = status;
  }, [status]);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const handleSaveChanges = (e) => {
    e.preventDefault();
    dispatch(updateProfile({ name })); // Only updating name, as requested
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    if (userInfo) {
      setName(userInfo.name);
      setEmail(userInfo.email);
    }
    dispatch(clearError());
  };

  return (
    <section className="py-20 sm:py-24 pt-32 flex items-center justify-center min-h-screen">
      <div className="max-w-2xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">
              My Profile
            </h1>
            <p className="mt-4 text-lg text-gray-400">
              View and manage your account details.
            </p>
          </div>

          <div className="glass-effect rounded-3xl p-8">
            {isEditing ? (
              <form onSubmit={handleSaveChanges}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-300 mb-2" htmlFor="name">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-gray-900/50 border border-gray-700 text-white rounded-xl p-3 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  {/* Email input is commented out as per original design */}
                  {/* <div>
                    <label className="block text-gray-300 mb-2" htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-gray-900/50 border border-gray-700 text-white rounded-xl p-3 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div> */}
                </div>
                {error && (
                  <p className="bg-red-500/20 text-red-400 p-3 rounded-lg mt-4 text-center capitalize">
                    {error}
                  </p>
                )}
                <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-4">
                  <button
                    type="button"
                    onClick={handleCancelEdit}
                    className="w-full bg-gray-600/80 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 disabled:opacity-50"
                  >
                    {status === "loading" ? "Saving..." : "Save Changes"}
                  </button>
                </div>
              </form>
            ) : (
              <>
                <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
                  <div className="flex-shrink-0 mb-6 sm:mb-0 sm:mr-8">
                    <div className="w-24 h-24 rounded-full bg-gray-800 border-2 border-gray-700 flex items-center justify-center">
                      <span className="text-4xl font-bold text-white">
                        {userInfo?.name
                          ? userInfo.name.charAt(0).toUpperCase()
                          : "U"}
                      </span>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-2xl font-bold text-white">
                      {userInfo?.name || "User Name"}
                    </h2>
                    <p className="text-md text-gray-400 mt-1">
                      {userInfo?.email || "user@example.com"}
                    </p>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => setIsEditing(true)}
                    className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300"
                  >
                    Edit Profile
                  </button>
                  <button
                    onClick={handleLogout}
                    className="w-full bg-red-600/80 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300"
                  >
                    Logout
                  </button>
                </div>
              </>
            )}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default Profile;
