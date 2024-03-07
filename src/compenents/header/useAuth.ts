import { getTokens } from "@/$api/tokens.api";
import { useAppSelector } from "@/hook/useActions";
import { useMemo } from "react";

export const useAuth = (): boolean => {
  const { user } = useAppSelector((state) => state.user);
  const { refreshToken } = getTokens();
  return useMemo(() => {
    return !!refreshToken;
  }, [user]);
};
