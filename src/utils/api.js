export const MOCK_PROGRAMS = [
  { id: '1', title: 'Hybrid Strong', duration: '8 Weeks', difficulty: 'Intermediate' },
  { id: '2', title: 'Power Shred', duration: '6 Weeks', difficulty: 'Advanced' },
  { id: '3', title: 'Bodyweight HIIT', duration: '4 Weeks', difficulty: 'Beginner' },
];

export function fetchPrograms() {
  return new Promise((resolve) => setTimeout(() => resolve(MOCK_PROGRAMS), 500));
}

export function fetchProgramById(id) {
  return new Promise((resolve) =>
    setTimeout(() => resolve(MOCK_PROGRAMS.find((p) => p.id === id)), 500)
  );
}
