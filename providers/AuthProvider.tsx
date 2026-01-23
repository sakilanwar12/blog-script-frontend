"use client";

import { getMe, IUser } from "@/lib/api/auth.api";
import QUERY_KEYS from "@/lib/api/query-keys";
import { useQuery } from "@tanstack/react-query";
import React, { createContext, useContext } from "react";

interface AuthContextType {
  user: IUser | null;
  isLoading: boolean;
  error: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  
const  {data,isLoading,isError} = useQuery({ queryKey: QUERY_KEYS.AUTH.ME, queryFn: getMe });

const value: AuthContextType = {
 user: data || null,
 isLoading,
 error: isError,
};

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

export default AuthProvider;
