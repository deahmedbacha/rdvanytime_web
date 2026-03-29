import { useState, useCallback } from 'react';
import * as appointmentService from '../services/appointment.service';

/**
 * Custom hook for appointment CRUD operations.
 */
export const useAppointments = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const addAppointment = useCallback(async (appointmentData) => {
    setIsLoading(true);
    setError(null);
    setSuccess(null);
    try {
      const result = await appointmentService.addAppointment(appointmentData);
      setSuccess(result.msg);
      return result;
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to book appointment');
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const cancelAppointment = useCallback(async (appointmentId, userId) => {
    setIsLoading(true);
    setError(null);
    setSuccess(null);
    try {
      const result = await appointmentService.cancelAppointment(appointmentId, userId);
      setSuccess(result.msg);
      return result;
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to cancel appointment');
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const removeAppointment = useCallback(async (appointmentId) => {
    setIsLoading(true);
    setError(null);
    setSuccess(null);
    try {
      const result = await appointmentService.removeAppointment(appointmentId);
      setSuccess(result.msg);
      return result;
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to remove appointment');
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const clearMessages = useCallback(() => {
    setError(null);
    setSuccess(null);
  }, []);

  return {
    isLoading, error, success,
    addAppointment, cancelAppointment, removeAppointment, clearMessages,
  };
};
