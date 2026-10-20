import React, { createContext, useContext, useState, useEffect } from 'react';
import axiosClient from '../api/axiosClient';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [loading, setLoading] = useState(true);

  // Initialize user from token or localStorage
  useEffect(() => {
    async function initAuth() {
      const storedToken = localStorage.getItem('token');
      if (storedToken) {
        try {
          const res = await axiosClient.get('/auth/me');
          if (res.data?.user) {
            setUser(res.data.user);
            localStorage.setItem('user', JSON.stringify(res.data.user));
          }
        } catch (err) {
          console.warn("Session restore failed, falling back to cached user:", err.message);
          const storedUser = localStorage.getItem('user');
          if (storedUser) {
            try {
              setUser(JSON.parse(storedUser));
            } catch (e) {
              localStorage.removeItem('user');
              localStorage.removeItem('token');
              setToken(null);
            }
          }
        }
      } else {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
          try {
            setUser(JSON.parse(storedUser));
          } catch (e) {
            localStorage.removeItem('user');
          }
        }
      }
      setLoading(false);
    }

    initAuth();
  }, []);

  // Register
  const register = async (username, email, password, role = 'user') => {
    const res = await axiosClient.post('/auth/register', {
      username,
      email,
      password,
      role
    });

    // If requiresLogin is true, do not store token yet
    const { token: receivedToken, user: receivedUser } = res.data;
    if (receivedToken) {
      localStorage.setItem('token', receivedToken);
      localStorage.removeItem('aura_guest_play_count');
      setToken(receivedToken);
      if (receivedUser) {
        localStorage.setItem('user', JSON.stringify(receivedUser));
        setUser(receivedUser);
      }
    }
    return res.data;
  };

  // Update Profile
  const updateProfile = async (profileData) => {
    const res = await axiosClient.put('/auth/profile', profileData);
    if (res.data?.user) {
      setUser(res.data.user);
      localStorage.setItem('user', JSON.stringify(res.data.user));
    }
    return res.data;
  };

  // Login
  const login = async (usernameOrEmail, password) => {
    const payload = usernameOrEmail.includes('@')
      ? { email: usernameOrEmail, password }
      : { username: usernameOrEmail, password };

    const res = await axiosClient.post('/auth/login', payload);
    const { token: receivedToken, user: receivedUser } = res.data;

    if (receivedToken) {
      localStorage.setItem('token', receivedToken);
      localStorage.removeItem('aura_guest_play_count'); // Clear guest playback count for full access
      setToken(receivedToken);
    }
    if (receivedUser) {
      localStorage.setItem('user', JSON.stringify(receivedUser));
      setUser(receivedUser);
    }
    return res.data;
  };

  // Logout
  const logout = async () => {
    try {
      await axiosClient.post('/auth/logout');
    } catch (err) {
      console.error("Logout API call error:", err);
    } finally {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      setToken(null);
      setUser(null);
    }
  };

  const isArtist = user?.role === 'artist';
  const isAdmin = user?.role === 'admin' || user?.email === 'ankitrayh6475@gmail.com';
  const isAuthenticated = !!token && !!user;

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        isAuthenticated,
        isArtist,
        isAdmin,
        login,
        register,
        updateProfile,
        logout,
        setUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
