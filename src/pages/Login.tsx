
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingContact from '@/components/ui-custom/FloatingContact';
import LoginForm from '@/components/ui-custom/LoginForm';

const Login = () => {
  return (
    <>
      <Navbar />
      
      <main className="min-h-screen pt-32 pb-16 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-4 animate-fade-in">
                <span className="text-primary">로그인</span>
              </h1>
              <p className="text-muted-foreground animate-fade-in" style={{ animationDelay: '150ms' }}>
                계정 정보를 입력하여 자녀의 감정 리포트를 확인하세요
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-soft border border-muted/50">
              <LoginForm />
            </div>
            
            <div className="mt-8 text-center text-sm text-muted-foreground">
              <p className="animate-fade-in" style={{ animationDelay: '300ms' }}>
                계정이 없으신가요? <a href="/register" className="text-primary font-medium hover:underline">신청하기</a>
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      <FloatingContact />
    </>
  );
};

export default Login;
