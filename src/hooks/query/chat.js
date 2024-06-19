import {
  createParticipantInGroupChat,
  deleteChatMessage,
  deleteGroupChat,
  deleteLeaveGroupChat,
  deleteOneOnOneChat,
  deleteParticipantFromGroupChat,
  deleteProduct,
  getAllMessages,
  getAvailableUser,
  getGroupChatDetail,
  getUserChatList,
  patchGroupChatName,
  postMessage,
  postOrGetOneOnOneChat,
} from "@/lib";
import { useMutation, useQuery } from "@tanstack/react-query";

export const readChatList = (activeFilter) => {
  return useQuery({
    queryKey: ["chat-list", activeFilter],
    queryFn: async () => await getUserChatList(activeFilter),
    refetchOnWindowFocus: false,
    refetchOnmount: false,
    refetchOnReconnect: false,
    retry: false,
  });
};

export const readAvailableUsers = (activeFilter) => {
  return useQuery({
    queryKey: ["available-user-chat", activeFilter],
    queryFn: async () => await getAvailableUser(activeFilter),
    refetchOnWindowFocus: false,
    refetchOnmount: false,
    refetchOnReconnect: false,
    retry: false,
  });
};

export const createOrGetOneChat = () => {
  const mutations = useMutation({
    mutationFn: async (payload) => postOrGetOneOnOneChat(payload),
    mutationKey: ["create-one-chat"],
  });

  return { mutations };
};

export const destroyOrGetOneChat = () => {
  const mutations = useMutation({
    mutationFn: async (payload) => deleteOneOnOneChat(payload),
    mutationKey: ["delete-one-chat"],
  });

  return { mutations };
};

export const createGroupChat = () => {
  const mutations = useMutation({
    mutationFn: async (payload) => postOrGetOneOnOneChat(payload),
    mutationKey: ["create-group-chat"],
  });

  return { mutations };
};

export const readGroupChatDetails = (activeFilter, id) => {
  return useQuery({
    queryKey: ["get-group-chat-details", id],
    queryFn: async () => await getGroupChatDetail(activeFilter, id),
    refetchOnWindowFocus: false,
    refetchOnmount: false,
    refetchOnReconnect: false,
    retry: false,
  });
};

export const destroyGroupChat = () => {
  const mutations = useMutation({
    mutationFn: async (payload) => deleteGroupChat(payload),
    mutationKey: ["create-group-chat"],
  });

  return { mutations };
};

export const updatedGroupChatName = () => {
  const mutations = useMutation({
    mutationFn: async (payload) => patchGroupChatName(payload),
    mutationKey: ["patch-group-chat-name"],
  });

  return { mutations };
};

export const postParticipantInGroupChat = () => {
  const mutations = useMutation({
    mutationFn: async (payload) => createParticipantInGroupChat(payload),
    mutationKey: ["post-participant-in-group-chat"],
  });

  return { mutations };
};

export const deletedParticipantInGroupChat = () => {
  const mutations = useMutation({
    mutationFn: async (payload) => deleteParticipantFromGroupChat(payload),
    mutationKey: ["deleted-participant-in-group-chat"],
  });

  return { mutations };
};

export const deletedLeaveGroupChat = () => {
  const mutations = useMutation({
    mutationFn: async (payload) => deleteLeaveGroupChat(payload),
    mutationKey: ["deleted-in-group-chat"],
  });

  return { mutations };
};

export const readAllMessages = (activeFilter, id) => {
  return useQuery({
    queryKey: ["get-all-message", id],
    queryFn: async () => await getAllMessages(activeFilter, id),
    refetchOnWindowFocus: false,
    refetchOnmount: false,
    refetchOnReconnect: false,
    retry: false,
  });
};

export const createMessage = () => {
  const mutations = useMutation({
    mutationFn: async (payload) => postMessage(payload),
    mutationKey: ["post-message"],
  });

  return { mutations };
};

export const deletedChatMessage = () => {
  const mutations = useMutation({
    mutationFn: async (payload) => deleteChatMessage(payload),
    mutationKey: ["deleted-chat-message"],
  });

  return { mutations };
};
