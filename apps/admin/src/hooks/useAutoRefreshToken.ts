import { useEffect } from 'react';
import dayjs from 'dayjs';
import { getTokenExpiration, setToken } from "@utils";
import { api } from "@api";

export const useAutoRefreshToken = () => {

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
          setToken(data.token, data.expires_at);
        } catch (e) {
        }
      }
    };

    const interval = setInterval(checkAndRefresh, 60 * 1000);
    return () => clearInterval(interval);
  }, []);
};
