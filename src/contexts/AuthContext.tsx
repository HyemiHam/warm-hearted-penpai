
import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

// Check if we're using placeholder Supabase credentials
const isUsingMockSupabase = 
  supabase.supabaseUrl === 'https://placeholder-url.supabase.co' || 
  supabase.supabaseKey === 'placeholder-key';

type AuthContextType = {
  user: any | null;
  loading: boolean;
  signUp: (email: string, password: string, fullName: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  isAuthenticated: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        if (isUsingMockSupabase) {
          // Check localStorage for mock auth state when not using real Supabase
          const mockIsLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
          const mockUserEmail = localStorage.getItem('userEmail');
          
          if (mockIsLoggedIn && mockUserEmail) {
            setUser({ email: mockUserEmail });
            setIsAuthenticated(true);
          }
          setLoading(false);
          return;
        }

        const { data } = await supabase.auth.getSession();
        setUser(data.session?.user || null);
        setIsAuthenticated(!!data.session?.user);
      } catch (error) {
        console.error('Error fetching user:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();

    // Only set up the auth listener if we're using real Supabase
    if (!isUsingMockSupabase) {
      const { data: authListener } = supabase.auth.onAuthStateChange(async (event, session) => {
        setUser(session?.user || null);
        setIsAuthenticated(!!session?.user);
        setLoading(false);
      });

      return () => {
        authListener.subscription.unsubscribe();
      };
    }
  }, []);

  const signUp = async (email: string, password: string, fullName: string) => {
    try {
      setLoading(true);
      
      if (isUsingMockSupabase) {
        // Simulate signup for demo purposes
        console.log('Mock signup with:', { email, password, fullName });
        await new Promise(resolve => setTimeout(resolve, 1000));
        toast.success('회원가입이 완료되었습니다.');
        navigate('/login');
        return;
      }

      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) throw error;

      if (data.user) {
        // Create a new user record in our custom users table
        const { error: profileError } = await supabase
          .from('users')
          .insert([
            {
              id: data.user.id,
              email: email,
              full_name: fullName,
              created_at: new Date().toISOString(),
              updated_at: new Date().toISOString(),
            },
          ]);

        if (profileError) throw profileError;
        
        toast.success('회원가입이 완료되었습니다.');
        navigate('/login');
      }
    } catch (error: any) {
      toast.error(error.message || '회원가입 중 오류가 발생했습니다.');
      console.error('Error during sign up:', error);
    } finally {
      setLoading(false);
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      setLoading(true);
      
      if (isUsingMockSupabase) {
        // Simulate login for demo purposes
        console.log('Mock login with:', { email, password });
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userEmail', email);
        
        setUser({ email });
        setIsAuthenticated(true);
        
        toast.success('로그인 되었습니다.');
        navigate('/dashboard');
        return;
      }

      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      if (data.user) {
        setUser(data.user);
        setIsAuthenticated(true);
        toast.success('로그인 되었습니다.');
        navigate('/dashboard');
      }
    } catch (error: any) {
      toast.error(error.message || '로그인 중 오류가 발생했습니다.');
      console.error('Error during sign in:', error);
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    try {
      setLoading(true);
      
      if (isUsingMockSupabase) {
        // Simulate logout for demo purposes
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('userEmail');
        
        setUser(null);
        setIsAuthenticated(false);
        
        toast.success('로그아웃 되었습니다.');
        navigate('/');
        return;
      }

      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      
      setUser(null);
      setIsAuthenticated(false);
      toast.success('로그아웃 되었습니다.');
      navigate('/');
    } catch (error: any) {
      toast.error(error.message || '로그아웃 중 오류가 발생했습니다.');
      console.error('Error during sign out:', error);
    } finally {
      setLoading(false);
    }
  };

  const value = {
    user,
    loading,
    signUp,
    signIn,
    signOut,
    isAuthenticated,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
