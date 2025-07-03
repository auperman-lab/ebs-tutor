import { jwtDecode } from "jwt-decode";

import { DecodedToken, User } from "@clientTypes";

export const isExpiredToken = (token: string): boolean => {
  try {
    const { exp } = jwtDecode<DecodedToken>(token);
    if (!exp) return false;
    return exp < Date.now() / 1000;
  } catch {
    return true;
  }
};

export const getUserByToken = (): User | null => {
  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");

  return accessToken && refreshToken && !isExpiredToken(accessToken) ? getUser() : null;
};

export const setTokens = (accessToken: string, refreshToken: string) => {
  try {
    localStorage.setItem("refreshToken", refreshToken);
    localStorage.setItem("accessToken", accessToken);
  } catch (error) {
    console.error("Error setting tokens in local storage:", error);
  }
};

export const setUser = (user: User) => {
  try {
    localStorage.setItem("user", JSON.stringify(user));
  } catch (error) {
    console.error("Error setting user in local storage:", error);
  }
};

export const getUser = (): User | null => {
  try {
    const user = localStorage.getItem("user");
    if (!user) return null;
    return JSON.parse(user);
  } catch (error) {
    console.error("Error getting user from local storage:", error);
    return null;
  }
};

export const removeUser = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  localStorage.removeItem("user");
};
