
import React from 'react';
import Hero from '@/components/ui-custom/Hero';
import FeatureSection from '@/components/ui-custom/FeatureSection';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingContact from '@/components/ui-custom/FloatingContact';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ChevronRight, MessageSquare, BarChart, Mail } from 'lucide-react';

const Index = () => {
  return (
    <>
      <Navbar />
      
      <main>
        <Hero />
        
        <FeatureSection />
        
        {/* How It Works Section */}
        <section className="section-padding">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary/90 text-sm font-medium mb-4 animate-fade-in">
                서비스 이용 방법
              </span>
              <h2 className="text-3xl font-bold mb-4 animate-fade-in" style={{ animationDelay: '150ms' }}>
                <span className="text-primary">PenpAI</span>는 이렇게 활용하세요
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '300ms' }}>
                간단한 3단계로 아이의 감정 성장을 도와주세요.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-soft border border-muted/50 text-center animate-fade-in" style={{ animationDelay: '150ms' }}>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto text-primary">
                  <Mail size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-2">1. 등록하기</h3>
                <p className="text-muted-foreground mb-4">
                  간단한 정보 입력으로 자녀를 등록하고 AI 펜팔 친구를 만나보세요.
                </p>
                <Button asChild variant="outline" className="mt-2 border-primary text-primary hover:bg-primary/5">
                  <Link to="/register" className="flex items-center justify-center gap-1">
                    시작하기 <ChevronRight size={16} />
                  </Link>
                </Button>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-soft border border-muted/50 text-center animate-fade-in" style={{ animationDelay: '300ms' }}>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto text-primary">
                  <MessageSquare size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-2">2. 대화하기</h3>
                <p className="text-muted-foreground mb-4">
                  AI 펜팔 친구와 메일을 주고받으며 자연스럽게 감정을 표현하고 소통하세요.
                </p>
                <Button asChild variant="outline" className="mt-2 border-primary text-primary hover:bg-primary/5">
                  <Link to="/about" className="flex items-center justify-center gap-1">
                    더 알아보기 <ChevronRight size={16} />
                  </Link>
                </Button>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-soft border border-muted/50 text-center animate-fade-in" style={{ animationDelay: '450ms' }}>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto text-primary">
                  <BarChart size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-2">3. 리포트 확인하기</h3>
                <p className="text-muted-foreground mb-4">
                  월별 감정 리포트를 통해 아이의 감정 발달과 변화를 체계적으로 관찰하세요.
                </p>
                <Button asChild variant="outline" className="mt-2 border-primary text-primary hover:bg-primary/5">
                  <Link to="/login" className="flex items-center justify-center gap-1">
                    로그인하기 <ChevronRight size={16} />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-warm-gradient">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
              지금 바로 자녀의 감정 성장을 도와주세요
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: '150ms' }}>
              PenpAI와 함께라면 아이의 감정 표현이 더욱 풍부해지고, 정서 지능이 향상됩니다.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '300ms' }}>
              <Button asChild className="bg-primary hover:bg-primary/90 text-foreground rounded-full px-8 py-6 text-base">
                <Link to="/register">지금 시작하기</Link>
              </Button>
              
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/5 rounded-full px-8 py-6 text-base">
                <Link to="/about" className="flex items-center gap-2">
                  더 알아보기
                  <ChevronRight size={16} />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <FloatingContact />
    </>
  );
};

export default Index;
