import { useState, useCallback } from 'react';
import * as doctorService from '../services/doctor.service';

/**
 * Custom hook for searching and fetching doctors.
 * Encapsulates loading/error state and exposes a clean API.
 */
export const useDoctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [doctor, setDoctor] = useState(null);
  const [calendar, setCalendar] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchDoctors = useCallback(async (filters = {}) => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await doctorService.searchDoctors(filters);
      setDoctors(data);
    } catch (err) {
      setError(err.response?.data?.message || 'Search failed');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const getDoctorById = useCallback(async (docId) => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await doctorService.getDoctorById(docId);
      setDoctor(data);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch doctor');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const getDoctorCalendar = useCallback(async (docId) => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await doctorService.getDoctorCalendar(docId);
      setCalendar(data.dateTime || []);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch calendar');
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    doctors, doctor, calendar,
    isLoading, error,
    searchDoctors, getDoctorById, getDoctorCalendar,
  };
};
