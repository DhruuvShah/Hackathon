import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { generateWorkout } from '../features/workout/workoutSlice';
import RevealOnScroll from './RevealOnScroll';
import WorkoutResult from './WorkoutResult';
const AiPlanner = () => {
    const dispatch = useDispatch();
    const { status, error, plan } = useSelector((state) => state.workout);
    const [goal, setGoal] = useState('Build Muscle');
    const [duration, setDuration] = useState(45);
    const [style, setStyle] = useState('Bodyweight Only');
    const [formError, setFormError] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!duration || duration <= 0) {
            setFormError('Please enter a valid workout duration.');
            return;
        }
        setFormError('');
        dispatch(generateWorkout({ goal, duration, style }));
    };
    return (
        <section id="ai-planner" className="py-20 sm:py-24 bg-black/20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <RevealOnScroll>
                    <h2 className="text-3xl md:text-4xl font-bold text-white"> ✨ Your Personal <span className="gradient-text">AI Trainer</span></h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">Describe your fitness goals and let our AI craft a unique workout plan just for you.</p>
                </RevealOnScroll>
                <RevealOnScroll delay={200}>
                    <form onSubmit={handleSubmit} className="mt-12">
                        <div className="glass-effect rounded-3xl p-6 sm:p-8">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                                <div>
                                    <label htmlFor="fitness-goal" className="block text-sm font-medium text-gray-300 text-left mb-2">Primary Goal</label>
                                    <select id="fitness-goal" value={goal} onChange={(e) => setGoal(e.target.value)} className="w-full bg-gray-900/50 border border-gray-700 text-white rounded-xl p-3 focus:ring-blue-500 focus:border-blue-500">
                                        <option>Build Muscle</option><option>Lose Weight</option><option>Improve Cardio</option><option>Increase Flexibility</option><option>General Fitness</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="workout-duration" className="block text-sm font-medium text-gray-300 text-left mb-2">Time Available (mins)</label>
                                    <input type="number" id="workout-duration" value={duration} onChange={(e) => setDuration(e.target.value)} className="w-full bg-gray-900/50 border border-gray-700 text-white rounded-xl p-3 focus:ring-blue-500 focus:border-blue-500" />
                                </div>
                                <div>
                                    <label htmlFor="workout-style" className="block text-sm font-medium text-gray-300 text-left mb-2">Workout Style</label>
                                    <select id="workout-style" value={style} onChange={(e) => setStyle(e.target.value)} className="w-full bg-gray-900/50 border border-gray-700 text-white rounded-xl p-3 focus:ring-blue-500 focus:border-blue-500">
                                        <option>Bodyweight Only</option><option>Dumbbells</option><option>Full Gym Access</option><option>Kettlebells</option>
                                    </select>
                                </div>
                            </div>
                             {formError && <p className="text-red-400 mb-4">{formError}</p>}
                            <button type="submit" disabled={status === 'loading'} className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-600/30 disabled:opacity-50 disabled:cursor-not-allowed">
                                {status === 'loading' ? 'Generating...' : 'Generate My Workout'}
                            </button>
                        </div>
                    </form>
                </RevealOnScroll>
                <div className="mt-8 text-left min-h-[100px]">
                    {status === 'loading' && <div className="loader"></div>}
                    {status === 'failed' && <div className="glass-effect rounded-3xl p-6"><p className="text-red-400 text-center">Error: {error}</p></div>}
                    {status === 'succeeded' && plan && <WorkoutResult plan={plan} />}
                </div>
            </div>
        </section>
    );
};
export default AiPlanner;