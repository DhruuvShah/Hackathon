import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout, updateProfile, clearError } from "../features/auth/authSlice";
import RevealOnScroll from "../components/RevealOnScroll";
import { toast } from "react-toastify";
import { useCart } from "../context/CartContext";
import { motion } from "framer-motion";

// Utility to get user plan history from localStorage
function getWorkoutHistory(email) {
  if (!email) return [];
  try {
    const stored = localStorage.getItem(`workoutHistory_${email}`);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartItems, clearCart } = useCart();

  const { userInfo, status, error } = useSelector((state) => state.auth);

  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [planHistory, setPlanHistory] = useState([]);

  const prevStatusRef = useRef(status);

  // Load user info and plan history
  useEffect(() => {
    if (userInfo) {
      setName(userInfo.name || "");
      setEmail(userInfo.email || "");
      setPlanHistory(getWorkoutHistory(userInfo.email));
    } else {
      setName("");
      setEmail("");
      setPlanHistory([]);
    }
    dispatch(clearError());
  }, [userInfo, dispatch]);

  // Refresh plan history if user changes or after a plan is generated
  useEffect(() => {
    if (userInfo) {
      setPlanHistory(getWorkoutHistory(userInfo.email));
    }
  }, [userInfo, status]);

  useEffect(() => {
    if (prevStatusRef.current === "loading" && status !== "loading") {
      if (status === "succeeded") {
        setIsEditing(false);
        toast.success("Username Changed Successfully");
      }
    }
    prevStatusRef.current = status;
  }, [status]);

  const handleLogout = () => {
    dispatch(logout());
    clearCart();
    toast.success("Logged Out Successfully");
    navigate("/login");
  };

  const handleSaveChanges = (e) => {
    e.preventDefault();
    dispatch(updateProfile({ name }));
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    if (userInfo) {
      setName(userInfo.name);
      setEmail(userInfo.email);
    }
    dispatch(clearError());
  };

  // Animation config
  const avatarVariants = {
    initial: { scale: 0.95, opacity: 0, y: 16 },
    animate: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, type: "spring", bounce: 0.3 },
    },
  };

  return (
    <section className="py-20 sm:py-24 pt-32 flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-950/70 via-black/90 to-purple-950/60">
      <div className="max-w-2xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-purple-400 drop-shadow-lg">
              My Profile
            </h1>
            <p className="mt-4 text-lg text-gray-300">
              View and manage your account details.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.16 }}
            className="glass-effect backdrop-blur-2xl rounded-3xl p-10 shadow-2xl border border-white/10"
          >
            {isEditing ? (
              <form onSubmit={handleSaveChanges}>
                <div className="space-y-6">
                  <div>
                    <label className="block text-gray-300 mb-2" htmlFor="name">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-gray-900/60 border border-gray-700 text-white rounded-xl p-3 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
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
                  <motion.div
                    className="flex-shrink-0 mb-6 sm:mb-0 sm:mr-8"
                    variants={avatarVariants}
                    initial="initial"
                    animate="animate"
                  >
                    <div className="w-28 h-28 rounded-full bg-gradient-to-br from-blue-900 via-gray-900 to-purple-900 border-4 border-white/30 flex items-center justify-center shadow-lg">
                      <span className="text-5xl font-bold text-white drop-shadow-md">
                        {userInfo?.name
                          ? userInfo.name.charAt(0).toUpperCase()
                          : "U"}
                      </span>
                    </div>
                  </motion.div>
                  <div className="flex-grow">
                    <h2 className="text-2xl font-bold text-white tracking-tight">
                      {userInfo?.name || "User Name"}
                    </h2>
                    <p className="text-md text-gray-300 mt-1">
                      {userInfo?.email || "user@example.com"}
                    </p>
                  </div>
                </div>
                <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-4">
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
                {/* Cart Preview */}
                {cartItems.length > 0 && (
                  <div className="mt-8 bg-black/30 rounded-2xl p-5 text-gray-200 border border-white/5">
                    <div className="mb-3 font-semibold text-white/90">
                      Items in Cart{" "}
                      <span className="text-blue-300">
                        ({cartItems.length})
                      </span>
                    </div>
                    <ul className="divide-y divide-white/10 text-sm">
                      {cartItems.slice(0, 3).map((item, idx) => (
                        <li
                          key={item.id || idx}
                          className="flex items-center gap-3 py-2"
                        >
                          <img
                            src={item.imgPrimary || item.img}
                            alt={item.name}
                            className="w-8 h-8 rounded object-cover border border-white/10"
                          />
                          <span className="flex-1">{item.name}</span>
                          <span className="text-xs text-gray-400">
                            x{item.quantity || 1}
                          </span>
                        </li>
                      ))}
                      {cartItems.length > 3 && (
                        <li className="pt-2 text-xs text-gray-400">
                          ...and {cartItems.length - 3} more
                        </li>
                      )}
                    </ul>
                  </div>
                )}

                {/* --- WORKOUT PLAN HISTORY --- */}
                {userInfo && planHistory && planHistory.length > 0 && (
                  <div className="mt-8 glass-effect p-6 rounded-2xl border border-white/10 shadow-xl">
                    <div className="text-lg font-bold text-white mb-3">
                      Your Recent Workout Plans
                    </div>
                    <div className="overflow-x-auto">
                      <table className="min-w-full text-sm text-left">
                        <thead>
                          <tr>
                            <th className="px-3 py-2 text-blue-400">Goal</th>
                            <th className="px-3 py-2 text-blue-400">Style</th>
                            <th className="px-3 py-2 text-blue-400">
                              Duration
                            </th>
                            <th className="px-3 py-2 text-blue-400">
                              Generated
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {planHistory.map((plan, idx) => (
                            <tr
                              key={idx}
                              className="odd:bg-white/0 even:bg-white/5"
                            >
                              <td className="px-3 py-2">{plan.goal}</td>
                              <td className="px-3 py-2">{plan.style}</td>
                              <td className="px-3 py-2">{plan.duration} min</td>
                              <td className="px-3 py-2">
                                {new Date(plan.date).toLocaleString("en-IN", {
                                  dateStyle: "medium",
                                  timeStyle: "short",
                                })}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
                {/* --- END HISTORY --- */}
              </>
            )}
          </motion.div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default Profile;
