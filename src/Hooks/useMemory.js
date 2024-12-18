import { useState, useEffect } from "react";
import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL;

export const useMemory = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);
  const [loading, setLoading] = useState(true);

  const getAllData = (key) => {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return null;
    }
  };

  const setData = (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error saving localStorage key "${key}":`, error);
    }
  };

  const removeData = (key) => {
    localStorage.removeItem(key);
  };

  const clearAllData = () => {
    localStorage.clear();
  };

  const createAccount = async (data) => {
    try {
      const response = await axios.post(`${baseURL}/register/`, data);
      return response.data;
    } catch (error) {
      console.error("Error creating account:", error);
      throw error;
    }
  };

  const login = (accessToken, refreshToken) => {
    setIsAuthenticated(true);
    setToken(accessToken);
    setRefreshToken(refreshToken);
    setData("ar", { access: accessToken, refresh: refreshToken });
  };

  const checkAuth = () => {
    const authData = getAllData("ar");
    if (authData?.access && authData?.refresh) {
      setIsAuthenticated(true);
      setToken(authData.access);
      setRefreshToken(authData.refresh);
    } else {
      setIsAuthenticated(false);
      setToken(null);
      setRefreshToken(null);
    }
    setLoading(false);
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return {
    getAllData,
    setData,
    removeData,
    clearAllData,
    createAccount,
    isAuthenticated,
    token,
    loading,
    login,
    checkAuth,
  };
};
