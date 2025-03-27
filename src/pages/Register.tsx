
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingContact from '@/components/ui-custom/FloatingContact';
import RegisterForm from '@/components/ui-custom/RegisterForm';

const Register = () => {
  return (
    <>
      <Navbar />
      
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
                <span className="text-primary">PenpAI</span> 서비스 신청하기
              </h1>
              <p className="text-muted-foreground animate-fade-in" style={{ animationDelay: '150ms' }}>
                아래 정보를 입력하여 AI 펜팔 친구를 만나보세요
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-soft border border-muted/50">
              <RegisterForm />
            </div>
            
            <div className="mt-8 text-center text-sm text-muted-foreground">
              <p className="animate-fade-in" style={{ animationDelay: '300ms' }}>
                이미 계정이 있으신가요? <a href="/login" className="text-primary font-medium hover:underline">로그인하기</a>
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

export default Register;
