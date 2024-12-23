import { login, logout, register } from "@/supabase/auth";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const useHandleRegister = () => {
  return useMutation({
    mutationKey: ["register"],
    mutationFn: register,
  });
};
export const useHandleLogIn = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationKey: ["login"],
    mutationFn: login,
    onSuccess: () => {
      navigate("/");
    },
  });
};
export const useHandleLogOut = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationKey: ["logout"],
    mutationFn: logout,
    onSuccess: () => navigate("/login"),
  });
};
