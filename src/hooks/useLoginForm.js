import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useAuthStore from '../../stores/useAuthStore';

/**
 * Encapsulates login form logic:
 * - Email/password validation
 * - Password toggle visibility
 * - Submit via Zustand auth store
 * - reCAPTCHA state
 */
export const useLoginForm = () => {
  const navigate = useNavigate();
  const { login, isLoading } = useAuthStore();

  // Form fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null);

  // Password reset section
  const [showResetSection, setShowResetSection] = useState(false);
  const [resetForm, setResetForm] = useState({
    email: '', code: '', newPassword: '', confirmPassword: '',
  });

  const handleEmailChange = useCallback((e) => {
    const { value } = e.target;
    setEmail(value);
    setIsValidEmail(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));
  }, []);

  const handlePasswordChange = useCallback((e) => {
    const { value } = e.target;
    setPassword(value);
    setIsValidPassword(value.length >= 8);
  }, []);

  const toggleShowPassword = useCallback(() => {
    setShowPassword((prev) => !prev);
  }, []);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    if (!isValidEmail || !isValidPassword) return;

    try {
      await login(email, password);
      navigate('/');
    } catch {
      toast.error('Mot de passe incorrect');
    }
  }, [email, password, isValidEmail, isValidPassword, login, navigate]);

  const handleResetChange = useCallback((e) => {
    const { name, value } = e.target;
    setResetForm((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleResetSubmit = useCallback((e) => {
    e.preventDefault();
    console.log('Reset password:', resetForm);
  }, [resetForm]);

  const toggleResetSection = useCallback(() => {
    setShowResetSection((prev) => !prev);
  }, []);

  return {
    // Field state
    email, password, isValidEmail, isValidPassword, showPassword, captchaValue,
    // Reset section
    showResetSection, resetForm,
    // Handlers
    handleEmailChange, handlePasswordChange, toggleShowPassword,
    handleSubmit, setCaptchaValue,
    handleResetChange, handleResetSubmit, toggleResetSection,
    // Loading
    isLoading,
  };
};
