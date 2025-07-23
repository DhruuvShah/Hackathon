import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { generateWorkout } from "../features/workout/workoutSlice";
import RevealOnScroll from "./RevealOnScroll";
import WorkoutResult from "./WorkoutResult";

const AiPlanner = () => {
  const dispatch = useDispatch();
  const { status, error, plan } = useSelector((state) => state.workout);
  const { userInfo } = useSelector((state) => state.auth);

  const [goal, setGoal] = useState("Build Muscle");
  const [duration, setDuration] = useState(45);
  const [style, setStyle] = useState("Bodyweight Only");
  const [formError, setFormError] = useState("");

  // Save workout plan metadata to localStorage when generated
  useEffect(() => {
    if (
      status === "succeeded" &&
      userInfo &&
      plan
    ) {
      const entry = {
        goal,
        duration,
        style,
        date: new Date().toISOString(),
      };
      let history = [];
      try {
        const existing = localStorage.getItem(`workoutHistory_${userInfo.email}`);
        history = existing ? JSON.parse(existing) : [];
      } catch {
        history = [];
      }
      history.unshift(entry);
      history = history.slice(0, 10); // Limit to 10 entries
      localStorage.setItem(`workoutHistory_${userInfo.email}`, JSON.stringify(history));
    }
    // eslint-disable-next-line
  }, [status, plan, userInfo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userInfo) {
      setFormError("Please log in to generate a workout plan.");
      return;
    }
    if (!duration || duration <= 0) {
      setFormError("Please enter a valid workout duration.");
      return;
    }
    setFormError("");
    dispatch(generateWorkout({ goal, duration, style }));
  };

  return (
    <section id="ai-planner" className="py-10 sm:py-16 md:py-20 bg-black/20">
      <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8 text-center">
        <RevealOnScroll>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            ✨ Your Personal <span className="gradient-text">AI Trainer</span>
          </h2>
          <p className="mt-4 max-w-xl sm:max-w-2xl mx-auto text-base sm:text-lg text-gray-400">
            Describe your fitness goals and let our AI craft a unique workout plan just for you.
          </p>
        </RevealOnScroll>
        <RevealOnScroll delay={200}>
          {!userInfo && (
            <div className="mb-8 text-red-400 text-base sm:text-lg font-semibold">
              Please <span className="text-blue-400">log in</span> to generate a workout plan.
            </div>
          )}
          <form onSubmit={handleSubmit} className="mt-8 sm:mt-12" autoComplete="off">
            <div className="glass-effect rounded-3xl p-4 xs:p-5 sm:p-8 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-6">
                {/* Goal */}
                <div className="flex flex-col min-w-0">
                  <label
                    htmlFor="fitness-goal"
                    className="block text-xs sm:text-sm font-medium text-gray-300 text-left mb-2"
                  >
                    Primary Goal
                  </label>
                  <select
                    id="fitness-goal"
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                    className="w-full bg-gray-900/50 border border-gray-700 text-white rounded-xl p-2 sm:p-3 focus:ring-blue-500 focus:border-blue-500 min-w-0"
                    disabled={!userInfo}
                  >
                    <option>Build Muscle</option>
                    <option>Lose Weight</option>
                    <option>Improve Cardio</option>
                    <option>Increase Flexibility</option>
                    <option>General Fitness</option>
                  </select>
                </div>
                {/* Duration */}
                <div className="flex flex-col min-w-0">
                  <label
                    htmlFor="workout-duration"
                    className="block text-xs sm:text-sm font-medium text-gray-300 text-left mb-2"
                  >
                    Time Available (mins)
                  </label>
                  <input
                    type="number"
                    id="workout-duration"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="w-full bg-gray-900/50 border border-gray-700 text-white rounded-xl p-2 sm:p-3 focus:ring-blue-500 focus:border-blue-500 min-w-0"
                    disabled={!userInfo}
                  />
                </div>
                {/* Style */}
                <div className="flex flex-col min-w-0">
                  <label
                    htmlFor="workout-style"
                    className="block text-xs sm:text-sm font-medium text-gray-300 text-left mb-2"
                  >
                    Workout Style
                  </label>
                  <select
                    id="workout-style"
                    value={style}
                    onChange={(e) => setStyle(e.target.value)}
                    className="w-full bg-gray-900/50 border border-gray-700 text-white rounded-xl p-2 sm:p-3 focus:ring-blue-500 focus:border-blue-500 min-w-0"
                    disabled={!userInfo}
                  >
                    <option>Bodyweight Only</option>
                    <option>Dumbbells</option>
                    <option>Full Gym Access</option>
                    <option>Kettlebells</option>
                  </select>
                </div>
              </div>
              {formError && <p className="text-red-400 mb-4">{formError}</p>}
              <button
                type="submit"
                disabled={status === "loading" || !userInfo}
                className="w-full bg-blue-600 hover:cursor-pointer hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-xl text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-600/30 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "loading"
                  ? "Generating..."
                  : !userInfo
                  ? "Login to Generate"
                  : "Generate My Workout"}
              </button>
            </div>
          </form>
        </RevealOnScroll>
        <div className="mt-6 sm:mt-8 text-left min-h-[80px] xs:min-h-[100px]">
          {status === "loading" && (
            <div className="flex justify-center items-center min-h-[48px]">
              <div className="loader" />
            </div>
          )}
          {status === "failed" && (
            <div className="glass-effect rounded-3xl p-4 sm:p-6">
              <p className="text-red-400 text-center">Error: {error}</p>
            </div>
          )}
          {status === "succeeded" && plan && <WorkoutResult plan={plan} />}
        </div>
      </div>
    </section>
  );
};

export default AiPlanner;
