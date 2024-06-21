import { atom, selector } from 'recoil';

export const countAtom = atom({
    key: "countAtom",       // Unique way to identify the atom
    default: 0,             // Default value of this specific atom to be
});

//Defining a selector
export const evenSelector = selector({
    key: 'count/evenSelector',

    // it gets a function 'get' as argument
    get: ({ get }) => {
      const count = get(countAtom);
      return count % 2; 
    },
  });