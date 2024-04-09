"use client";
import axios from "axios";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface ListingContextType {
  listings: any[]; // Change 'any' to the appropriate type for listings
  data?: any[];
}

//creating context
const ListingContext = createContext<ListingContextType | undefined>(undefined);

export const useListingContext = () => {
  const context = useContext(ListingContext);

  if (!context) {
    throw new Error(
      "useListingContext must be used within an Listing Provider"
    );
  }
  return context;
};

interface childrenType {
  children: ReactNode;
}

interface valueType {
  listings: [{}];
}
export const ListingProvider = ({ children }: childrenType) => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await axios.get(
          `https://msny-backend-deepansh.vercel.app/api/v1/listings`
        );
        // const response = await axios.get(
        //   `http://localhost:9000/api/v1/listings`
        // );
        const listing_response = response.data;
        // console.log("listing response", response.data);

        setListings(listing_response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchListings();
  }, []);

  return (
    <ListingContext.Provider value={{ listings }}>
      {children}
    </ListingContext.Provider>
  );
};
