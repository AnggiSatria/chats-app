import {
  getGithubAuth,
  getGithubAuthCallback,
  getGoogleAuth,
  getGoogleAuthCallback,
} from "@/lib";
import { useMutation, useQuery } from "@tanstack/react-query";

export const readCheckAuthGoogle = (activeFilter) => {
  return useQuery({
    queryKey: ["check-auth", activeFilter],
    queryFn: async () => await getGoogleAuth(activeFilter),
    refetchOnWindowFocus: false,
    refetchOnmount: false,
    refetchOnReconnect: false,
    retry: false,
  });
};

export const readCheckAuthGoogleCallback = (activeFilter) => {
  return useQuery({
    queryKey: ["check-auth", activeFilter],
    queryFn: async () => await getGoogleAuthCallback(activeFilter),
    refetchOnWindowFocus: false,
    refetchOnmount: false,
    refetchOnReconnect: false,
    retry: false,
  });
};

export const readCheckAuthGithub = (activeFilter) => {
  return useQuery({
    queryKey: ["check-auth", activeFilter],
    queryFn: async () => await getGithubAuth(activeFilter),
    refetchOnWindowFocus: false,
    refetchOnmount: false,
    refetchOnReconnect: false,
    retry: false,
  });
};

export const readCheckAuthGithubCallback = (activeFilter) => {
  return useQuery({
    queryKey: ["check-auth", activeFilter],
    queryFn: async () => await getGithubAuthCallback(activeFilter),
    refetchOnWindowFocus: false,
    refetchOnmount: false,
    refetchOnReconnect: false,
    retry: false,
  });
};

// export const createRegister = () => {
//   const mutations = useMutation({
//     mutationFn: async (payload) => postRegister(payload),
//     mutationKey: ["register"],
//   });

//   return { mutations };
// };

// export const createLogin = () => {
//   const mutations = useMutation({
//     mutationFn: async (payload) => postLogin(payload),
//     mutationKey: ["login"],
//   });

//   return { mutations };
// };
