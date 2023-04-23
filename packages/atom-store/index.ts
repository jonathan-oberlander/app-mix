import { atom, useAtom } from "jotai";

const mangaAtom = atom<Record<string, number>>({
  "Dragon Ball": 1984,
  "One Piece": 1997,
  Naruto: 1999,
});

const mangas = atom(
  (get) => get(mangaAtom),
  (get, _, _arg: string) => get(mangaAtom)[_arg]
);

const countAtom = atom(0);

export const useCount = () => useAtom(countAtom);
export const useMangas = () => useAtom(mangas);
