
import React from 'react';
import { useLocation, Navigate, Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingContact from '@/components/ui-custom/FloatingContact';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

const RegisterComplete = () => {
  const location = useLocation();
  const { success, email } = location.state || {};
  
  // 직접 URL 접근 방지
  if (!success) {
    return <Navigate to="/register" replace />;
  }
  
  return (
    <>
      <Navbar />
      
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-8 flex justify-center">
              <div className="rounded-full bg-primary/20 p-3">
                <CheckCircle className="h-12 w-12 text-primary" />
              </div>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
              <span className="text-primary">신청이 완료</span>되었습니다
            </h1>
            
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-soft border border-muted/50 mb-8">
              <p className="text-muted-foreground mb-6 animate-fade-in" style={{ animationDelay: '150ms' }}>
                {email}로 추가 안내 메일을 발송했습니다.<br />
                빠른 시일 내에 담당자가 연락을 드릴 예정입니다.
              </p>
              
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <Button asChild variant="outline">
                  <Link to="/">홈으로 이동</Link>
                </Button>
                <Button asChild>
                  <Link to="/about">서비스 더 알아보기</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      <FloatingContact />
    </>
  );
};

export default RegisterComplete;
