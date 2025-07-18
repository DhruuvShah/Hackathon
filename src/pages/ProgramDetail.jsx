import { useParams } from 'react-router-dom';
import { usePrograms } from '../hooks/usePrograms';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';

export default function ProgramDetail() {
  const { programs } = usePrograms();
  const { id } = useParams();
  const program = programs.find((p) => p.id === id);

  if (!program) return <div className="text-center mt-10 text-zinc-400">Program not found.</div>;

  return (
    <motion.section
      className="detail-section max-w-xl mx-auto mt-12 bg-zinc-900/80 rounded-2xl p-8 shadow-xl"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, type: 'spring' }}
    >
      <h2 className="text-2xl font-bold mb-2 text-primary">{program.title}</h2>
      <p className="mb-1 text-zinc-300"><strong>Duration:</strong> {program.duration}</p>
      <p className="mb-4 text-zinc-300"><strong>Difficulty:</strong> {program.difficulty}</p>
      <Button className="detail-button w-full py-3 rounded-xl mt-2 font-bold text-lg" size="lg">
        Start Program
      </Button>
    </motion.section>
  );
}
