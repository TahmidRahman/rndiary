import { create } from 'zustand';

type NoteEntry = {
  date: string;
  title: string;
  description: string;
};

const useNoteStore = create<{
  entries: NoteEntry[];
  add: (title: string, description: string, date: string) => void;
}>(set => ({
  entries: [],
  add: (title: string, description: string, date: string) =>
    set(state => ({
      entries: [...state.entries, { title, description, date }],
    })),
}));

export const useNoteEntries = () => useNoteStore(state => state.entries);
export const useAddNoteEntry = () => useNoteStore(state => state.add);
export const useNoteByDate = (date: string) =>
  useNoteStore(state => state.entries.find(e => e.date === date));
