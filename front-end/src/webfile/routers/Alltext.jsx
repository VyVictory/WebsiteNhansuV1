
// AllContext.js
import { createContext, useState } from 'react';

const AllContext = createContext();
export const AllProvider = ({ children }) => {
  const [all, setAll] = useState('1');

  return (
    <AllContext.Provider value={{ all, setAll }}>
      {children}
    </AllContext.Provider>
  );
};

export default AllContext;
