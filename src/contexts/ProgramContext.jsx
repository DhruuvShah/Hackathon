import { createContext, useState, useMemo, useContext, useEffect } from 'react';
import { fetchPrograms } from '../utils/api';

export const ProgramContext = createContext(null);

export function ProgramProvider({ children }) {
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    fetchPrograms().then(setPrograms);
  }, []);

  const value = useMemo(() => ({ programs, setPrograms }), [programs]);

  return (
    <ProgramContext.Provider value={value}>{children}</ProgramContext.Provider>
  );
}

export function useProgramContext() {
  return useContext(ProgramContext);
}

