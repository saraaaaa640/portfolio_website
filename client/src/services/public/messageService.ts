import type { Message } from '../../types';
import api from './../api';

export const messageService = {
  getAll:   (params?: { read?: boolean }) => api.get<{ data: Message[] }>('/messages', { params }),

  sendMessage: async (data: any) => {
    console.log("📦 Service: sending message", data);
    return api.post("/messages", data).then(res => res.data);
  },


  markRead: (id: string)  => api.patch(`/messages/${id}/read`),
  archive:  (id: string)  => api.patch(`/messages/${id}/archive`),
  delete:   (id: string)  => api.delete(`/messages/${id}`),
};

