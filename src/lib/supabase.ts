
import { createClient } from '@supabase/supabase-js';

// Direct configuration values instead of environment variables
const supabaseUrl = 'https://uogrkkmzkaivpynlizml.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVvZ3Jra216a2FpdnB5bmxpem1sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMwODQ3OTEsImV4cCI6MjA1ODY2MDc5MX0.BhIZ0-HLElRyRzQunQ_B7z5EWWo4pLlq4QwW53_wmkA';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// 타입 정의
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
