"use client";
import { ReactNode, createContext, useContext, useState } from "react";

interface searchContextType {
  search?: any;
  setSearch?: any;
}
const SearchContext = createContext<searchContextType | undefined>(undefined);

export const useSearchContext = () => {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error("useSearchContext must be used within an Listing Provider");
  }
  return context;
};

interface childrenType {
  children: ReactNode;
}

export const SearchProvider = ({ children }: childrenType) => {
  const [search, setSearch] = useState({
    page: "",
    name: "",
    isActive: false,
    triggerMobileSearch: false,
    category: {
      name: "",
      isActive: "",
    },
  });

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
};
