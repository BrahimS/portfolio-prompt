// src/store/chatStore.ts
import { create } from 'zustand';
import { matchQueryToResponse } from '../lib/utils/matchQuery';

export type MessageRole = 'user' | 'assistant';

export interface Message {
  id: string;
  role: MessageRole;
  content: string;
  timestamp: Date;
}

interface ChatState {
  messages: Message[];
  isProcessing: boolean;
  addMessage: (message: Message) => void;
  sendMessage: (content: string) => Promise<void>;
  clearMessages: () => void;
}

export const useChatStore = create<ChatState>((set) => ({
  messages: [],
  isProcessing: false,

  addMessage: (message) => {
    set((state) => ({
      messages: [...state.messages, message],
    }));
  },

  sendMessage: async (content) => {
    // Add user message
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: 'user',
      content,
      timestamp: new Date(),
    };

    set((state) => ({
      messages: [...state.messages, userMessage],
      isProcessing: true,
    }));

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Generate response based on user message
    const response = await matchQueryToResponse(content);

    const assistantMessage: Message = {
      id: `assistant-${Date.now()}`,
      role: 'assistant',
      content: response,
      timestamp: new Date(),
    };

    set((state) => ({
      messages: [...state.messages, assistantMessage],
      isProcessing: false,
    }));
  },

  clearMessages: () => {
    set({ messages: [] });
  },
}));
