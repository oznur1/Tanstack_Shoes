import type{ IUserResponse, ILoginValues, IRegisterValues,} from "../types";
import api from "./axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";

//auth ile alakalı bütün api istekleri
export const authService={
  register: (data: IRegisterValues) =>
    api.post<IUserResponse>("/auth/register", data),
  login: (data: ILoginValues) => api.post<IUserResponse>("/auth/login", data),
  getMe: () => api.get("/auth/me"),
  refresh: () => api.post("/auth/refresh"),
  logout: () => api.post("/auth/logout"),

}



// authService ile alakalı bütün api isteklerini custom hook ile yaz
const useAuth = () => {
  const navigate = useNavigate();

  const login = useMutation({
    mutationKey: ["login"],
    mutationFn: (data: ILoginValues) => authService.login(data),
    onSuccess: () => {
      navigate("/");
      toast.success("Giriş başarılı");
    },
    onError: (error: Error) => {
      console.log(error);
      toast.error("Bir hata oluştu");
    },
  });

  const register = useMutation({
    mutationKey: ["register"],
    mutationFn: (data: IRegisterValues) => authService.register(data),
    onSuccess: () => {
      navigate("/");
      toast.success("Kayıt başarılı");
    },
    onError: (error: Error) => {
      console.log(error);
      toast.error("Bir hata oluştu");
    },
  });

  const logout = useMutation({
    mutationKey: ["logout"],
    mutationFn: () => authService.logout(),
    onSuccess: () => {
      navigate("/login");
      toast.success("Çıkış başarılı");
    },
    onError: (error: Error) => {
      console.log(error);
      toast.error("Bir hata oluştu");
    },
  });

  return { login, register, logout };
};

export default useAuth;