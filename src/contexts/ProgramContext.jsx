import { createContext, useState, useMemo, useContext } from 'react';

export const ProgramContext = createContext(null);

export function ProgramProvider({ children }) {
  const [programs, setPrograms] = useState([]);

  const value = useMemo(() => ({ programs, setPrograms }), [programs]);

  return (
    <ProgramContext.Provider value={value}>{children}</ProgramContext.Provider>
  );
}

export function useProgramContext() {
  return useContext(ProgramContext);
}

