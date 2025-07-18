import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { motion } from 'framer-motion';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';

export default function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div className="login-page flex items-center justify-center min-h-[80vh] bg-gradient-to-br from-[#181e24] via-[#232c36] to-[#16161a]">
      <motion.form
        className="login-form bg-black/70 rounded-2xl shadow-2xl p-10 flex flex-col gap-5 backdrop-blur-md border border-zinc-800 min-w-[340px] max-w-[90vw]"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: 'spring' }}
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-4 text-primary">Log In</h2>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          autoFocus
          required
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <Button className="w-full" type="submit">
          Log In
        </Button>
      </motion.form>
    </div>
  );
}
