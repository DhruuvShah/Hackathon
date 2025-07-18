import { motion } from 'framer-motion';
import { HeartHandshake, Dumbbell, Activity } from 'lucide-react';

const coreValues = [
  {
    icon: <HeartHandshake className="w-8 h-8 text-primary mx-auto mb-2" />,
    title: 'Discipline',
    desc: 'Stay committed to your goals.',
  },
  {
    icon: <Activity className="w-8 h-8 text-primary mx-auto mb-2" />,
    title: 'Performance',
    desc: 'Progress, not perfection.',
  },
  {
    icon: <Dumbbell className="w-8 h-8 text-primary mx-auto mb-2" />,
    title: 'Balance',
    desc: 'Physical, mental, and nutritional health.',
  },
];

export default function About() {
  return (
    <motion.section
      className="about-section max-w-3xl mx-auto mt-10 text-center"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold mb-4">About Centr</h2>
      <p className="mb-6 text-zinc-300">
        Centr is a holistic fitness platform founded by Chris Hemsworth. We combine expert coaching, science-backed programs, and a supportive global community to help you reach your fitness and wellness goals.
      </p>
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.5 }}
      >
        <h3 className="text-xl font-semibold mb-2">Our Journey</h3>
        <ul className="text-zinc-400 mb-2">
          <li>2019: Brand Launch</li>
          <li>2021: HYROX Partnership</li>
          <li>2023: 1M Members</li>
        </ul>
      </motion.div>
      <h3 className="text-xl font-semibold mb-4">Core Values</h3>
      <div className="flex flex-col md:flex-row gap-6 justify-center mb-6">
        {coreValues.map((v) => (
          <motion.div
            key={v.title}
            whileHover={{ scale: 1.08, boxShadow: '0 8px 32px #00FFA355' }}
            className="value-card bg-zinc-900/80 rounded-2xl px-6 py-7 flex-1 border border-zinc-700"
          >
            {v.icon}
            <h4 className="font-bold mb-1 text-primary">{v.title}</h4>
            <p className="text-zinc-300">{v.desc}</p>
          </motion.div>
        ))}
      </div>
      <motion.button
        whileHover={{ scale: 1.08, backgroundColor: '#00FFA3', color: '#1B1B1B' }}
        transition={{ type: 'spring', stiffness: 300 }}
        className="trial-button px-7 py-3 rounded-xl bg-primary font-semibold text-lg shadow-lg"
      >
        Start Your 7-Day Free Trial
      </motion.button>
    </motion.section>
  );
}
