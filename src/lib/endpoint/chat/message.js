import api from "@/config/axios";
import { removeEmptyAttributes } from "@/utils";
import QueryString from "qs";

const handlers = `/chat-app/messages`;

export const getAllMessages = (activeFilter, id) => {
  const queryString = QueryString.parse(removeEmptyAttributes(activeFilter));
  return api.get(`${handlers}/${id}`, { params: { ...queryString } });
};

export const postMessage = (payload, id) => {
  return api.post(`${handlers}/${id}`, payload);
};

export const deleteChatMessage = (payload, chatId, messageId) => {
  return api.delete(`${handlers}/${chatId}/${messageId}`, payload);
};
