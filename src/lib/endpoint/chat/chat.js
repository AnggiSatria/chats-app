import api from "@/config/axios";
import { removeEmptyAttributes } from "@/utils";
import QueryString from "qs";

const handlers = `/chat-app/chats`;

export const getUserChatList = (activeFilter) => {
  const queryString = QueryString.parse(removeEmptyAttributes(activeFilter));
  return api.get(`${handlers}`, { params: { ...queryString } });
};

export const getAvailableUser = (activeFilter) => {
  const queryString = QueryString.parse(removeEmptyAttributes(activeFilter));
  return api.get(`${handlers}/users`, { params: { ...queryString } });
};

export const postOrGetOneOnOneChat = (payload, id) => {
  return api.post(`${handlers}/c/${id}`, payload);
};

export const deleteOneOnOneChat = (payload, id) => {
  return api.delete(`${handlers}/remove/${id}`, payload);
};

export const postGroupChat = (payload) => {
  return api.post(`${handlers}/group`, payload);
};

export const getGroupChatDetail = (activeFilter, id) => {
  const queryString = QueryString.parse(removeEmptyAttributes(activeFilter));
  return api.get(`${handlers}/group/${id}`, { params: { ...queryString } });
};

export const deleteGroupChat = (payload, id) => {
  return api.delete(`${handlers}/group/${id}`, payload);
};

export const patchGroupChatName = (payload, id) => {
  return api.patch(`${handlers}/group/${id}`, payload);
};

export const createParticipantInGroupChat = (
  payload,
  chatId,
  participantId
) => {
  return api.post(`${handlers}/group/${chatId}/${participantId}`, payload);
};

export const deleteParticipantFromGroupChat = (
  payload,
  chatId,
  participantId
) => {
  return api.delete(`${handlers}/group/${chatId}/${participantId}`, payload);
};

export const deleteLeaveGroupChat = (payload, chatId) => {
  return api.delete(`${handlers}/leave/group/${chatId}`, payload);
};
