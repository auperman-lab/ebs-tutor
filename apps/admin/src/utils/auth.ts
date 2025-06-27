import { jwtDecode } from "jwt-decode";

import { AuthUser, DecodedToken, User } from "@types";
import { api } from "@api";

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
  const token = localStorage.getItem("token");
  return token && !isExpiredToken(token) ? getUser() : null;
};

export const decodeToken = async (token: string): Promise<AuthUser | null> => {
  try {
    const decoded = jwtDecode<DecodedToken>(token);

    if (!decoded.exp || decoded.exp < Date.now() / 1000) {
      return null;
    }
    const data = await api.user.get(decoded.sub);

    const user = {
      id: data.id,
      name: data.name,
      avatar: data.avatar,
      email: data.email,
      roles: data.roles,
    }

    return {
      user,
      token,
    };
  } catch (e) {
    return null;
  }
};

export const setTokens = (token: string) => {
  try {
    localStorage.setItem("token", token);
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
