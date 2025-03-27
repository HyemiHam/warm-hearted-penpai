import { createClient } from '@supabase/supabase-js';

// Use environment variables or fallback to empty strings to prevent crashes
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder-url.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder-key';

// Create a Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Export the Database type definitions
export type Database = {
  public: {
    Tables: {
      users: {
        Row: {
          id: string;
          email: string;
          full_name: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          email: string;
          full_name: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          full_name?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
      children: {
        Row: {
          id: string;
          parent_id: string;
          name: string;
          gender: string;
          age: number;
          birthday: string;
          email: string;
          interests: string;
          mbti: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          parent_id: string;
          name: string;
          gender: string;
          age: number;
          birthday: string;
          email: string;
          interests: string;
          mbti?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          parent_id?: string;
          name?: string;
          gender?: string;
          age?: number;
          birthday?: string;
          email?: string;
          interests?: string;
          mbti?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      conversations: {
        Row: {
          id: string;
          child_id: string;
          sender: string;
          content: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          child_id: string;
          sender: string;
          content: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          child_id?: string;
          sender?: string;
          content?: string;
          created_at?: string;
        };
      };
      emotional_reports: {
        Row: {
          id: string;
          child_id: string;
          report_date: string;
          emotions: { [key: string]: number };
          summary: string;
          keywords: string[];
          recommendations: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          child_id: string;
          report_date: string;
          emotions: { [key: string]: number };
          summary: string;
          keywords: string[];
          recommendations?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          child_id?: string;
          report_date?: string;
          emotions?: { [key: string]: number };
          summary?: string;
          keywords?: string[];
          recommendations?: string | null;
          created_at?: string;
        };
      };
      inquiries: {
        Row: {
          id: string;
          user_id: string | null;
          name: string;
          email: string;
          message: string;
          status: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id?: string | null;
          name: string;
          email: string;
          message: string;
          status?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string | null;
          name?: string;
          email?: string;
          message?: string;
          status?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
    };
  };
};
