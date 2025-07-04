import { useEffect } from "react";
import dayjs from 'dayjs';
import { getTokenExpiration } from "@clientUtils";
import { api } from "@clientApi";
import { useAuth } from "./useAuth";

export const useAutoRefreshToken = () => {

  const {refresh, logout} = useAuth();

  useEffect(() => {
    const checkAndRefresh = async () => {
      const expiration = getTokenExpiration();
      if (!expiration) return;

      const now = dayjs();
      const expiresAt = dayjs(expiration);

      const diffInMin = expiresAt.diff(now, 'minute');

      if (diffInMin <= 4) {
        try {
          const data = await api.auth.refreshToken();
          const authUser = await refresh(data);
          if (!authUser) {
            logout();
            return
          }
        } catch (e) {
          logout()
        }
      }
    };

    const interval = setInterval(checkAndRefresh, 60 * 1000);
    return () => clearInterval(interval);
  }, []);
};
