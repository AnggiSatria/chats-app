import api from "@/config/axios";
import { removeEmptyAttributes } from "@/utils";
import QueryString from "qs";

const handlers = `/users/google`;

export const getGoogleAuth = (activeFilter) => {
  const queryString = QueryString.parse(removeEmptyAttributes(activeFilter));
  return api.get(`${handlers}`, { params: { ...queryString } });
};

export const getGoogleAuthCallback = (activeFilter) => {
  const queryString = QueryString.parse(removeEmptyAttributes(activeFilter));
  return api.get(`${handlers}/callback`, { params: { ...queryString } });
};
