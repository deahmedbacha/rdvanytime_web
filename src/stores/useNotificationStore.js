import { create } from 'zustand';
import * as notificationService from '../services/notification.service';

/**
 * Global notification store.
 * Tracks unread count and notification list for both doctor and patient views.
 */
const useNotificationStore = create((set) => ({
  // ── State ──
  notifications: [],
  unreadCount: 0,
  isLoading: false,

  // ── Actions ──
  fetchDoctorNotifications: async (doctorId) => {
    set({ isLoading: true });
    try {
      const data = await notificationService.getDoctorNotifications(doctorId);
      set({ notifications: data, unreadCount: data.length, isLoading: false });
    } catch {
      set({ isLoading: false });
    }
  },

  fetchPatientNotifications: async (patientId) => {
    set({ isLoading: true });
    try {
      const data = await notificationService.getPatientNotifications(patientId);
      set({ notifications: data, unreadCount: data.length, isLoading: false });
    } catch {
      set({ isLoading: false });
    }
  },

  clearNotifications: () => set({ notifications: [], unreadCount: 0 }),
}));

export default useNotificationStore;
