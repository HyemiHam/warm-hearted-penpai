
import { createClient } from '@supabase/supabase-js';

// Use the provided URL and Anonymous key
const supabaseUrl = 'https://uogrkkmzkaivpynlizml.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVvZ3Jra216a2FpdnB5bmxpem1sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMwODQ3OTEsImV4cCI6MjA1ODY2MDc5MX0.BhIZ0-HLElRyRzQunQ_B7z5EWWo4pLlq4QwW53_wmkA';

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

// Function to create tables in Supabase (only run this when needed)
export const createDatabaseTables = async () => {
  try {
    // Create users table
    await supabase.rpc('create_table_if_not_exists', {
      table_name: 'users',
      columns: `
        id uuid primary key default uuid_generate_v4(),
        email text unique not null,
        full_name text not null,
        created_at timestamp with time zone default now(),
        updated_at timestamp with time zone default now()
      `
    });
    
    // Create children table
    await supabase.rpc('create_table_if_not_exists', {
      table_name: 'children',
      columns: `
        id uuid primary key default uuid_generate_v4(),
        parent_id uuid not null references users(id),
        name text not null,
        gender text not null,
        age integer not null,
        birthday date not null,
        email text not null,
        interests text not null,
        mbti text,
        created_at timestamp with time zone default now(),
        updated_at timestamp with time zone default now()
      `
    });
    
    // Create conversations table
    await supabase.rpc('create_table_if_not_exists', {
      table_name: 'conversations',
      columns: `
        id uuid primary key default uuid_generate_v4(),
        child_id uuid not null references children(id),
        sender text not null,
        content text not null,
        created_at timestamp with time zone default now()
      `
    });
    
    // Create emotional_reports table
    await supabase.rpc('create_table_if_not_exists', {
      table_name: 'emotional_reports',
      columns: `
        id uuid primary key default uuid_generate_v4(),
        child_id uuid not null references children(id),
        report_date date not null,
        emotions jsonb not null,
        summary text not null,
        keywords text[] not null,
        recommendations text,
        created_at timestamp with time zone default now()
      `
    });
    
    // Create inquiries table
    await supabase.rpc('create_table_if_not_exists', {
      table_name: 'inquiries',
      columns: `
        id uuid primary key default uuid_generate_v4(),
        user_id uuid references users(id),
        name text not null,
        email text not null,
        message text not null,
        status text not null default 'pending',
        created_at timestamp with time zone default now(),
        updated_at timestamp with time zone default now()
      `
    });
    
    console.log('All tables created successfully');
    return { success: true };
  } catch (error) {
    console.error('Error creating tables:', error);
    return { success: false, error };
  }
};
