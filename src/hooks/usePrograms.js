import { useContext } from 'react';
import { ProgramContext } from '../contexts/ProgramContext';

export function usePrograms() {
  return useContext(ProgramContext);
}

