import { useState } from 'react';
import { usePrograms } from '../hooks/usePrograms';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../components/ui/button';

const categories = ['All', 'Intermediate', 'Advanced', 'Beginner'];

export default function Programs() {
  const { programs } = usePrograms();
  const [filter, setFilter] = useState('All');

  const filteredPrograms =
    filter === 'All'
      ? programs
      : programs.filter((p) => p.difficulty === filter);

  return (
    <section className="programs-section max-w-5xl mx-auto">
      <motion.h2
        className="text-3xl font-bold mb-7 text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Explore Our Programs
      </motion.h2>
      <div className="filter-bar flex justify-center gap-4 mb-10">
        {categories.map((cat) => (
          <Button
            key={cat}
            variant={filter === cat ? 'default' : 'outline'}
            className={`pill ${filter === cat ? 'pill-active' : ''} capitalize`}
            onClick={() => setFilter(cat)}
            whileTap={{ scale: 0.94 }}
            asChild={false}
          >
            {cat}
          </Button>
        ))}
      </div>
      <div className="grid">
        <AnimatePresence>
          {filteredPrograms.length === 0 && (
            <motion.p
              className="col-span-full text-center text-zinc-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              No programs found.
            </motion.p>
          )}
          {filteredPrograms.map((program) => (
            <motion.div
              key={program.id}
              className="card bg-zinc-900/80 rounded-2xl p-6 text-center shadow-lg"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.45, type: 'spring' }}
            >
              <h3 className="font-bold text-lg text-primary mb-2">{program.title}</h3>
              <p className="mb-4 text-zinc-300">
                {program.duration} &bull; {program.difficulty}
              </p>
              <Link to={`/programs/${program.id}`}>
                <Button variant="secondary" className="w-full">View Details</Button>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}

