
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden bg-hero-pattern">
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-block animate-fade-in">
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary/90 text-sm font-medium mb-4">
              아이들의 감정 성장을 위한 AI 펜팔 서비스
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight animate-fade-in" style={{ animationDelay: '150ms' }}>
            <span className="text-primary">AI 친구</span>와 함께하는<br />
            <span className="text-primary">감정 성장</span> 여정
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '300ms' }}>
            아이들이 AI 펜팔 친구와 편지를 주고받으며 자신의 감정을 표현하고 이해하는 능력을 키울 수 있도록 도와드립니다.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-in" style={{ animationDelay: '450ms' }}>
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
        
        {/* Hero Image */}
        <div className="max-w-4xl mx-auto mt-20 animate-fade-in" style={{ animationDelay: '600ms' }}>
          <div className="relative">
            {/* Placeholder for hero image - in production, replace with an actual image */}
            <div className="aspect-video rounded-2xl overflow-hidden shadow-medium bg-gradient-to-br from-warm-100 to-sky-100 flex items-center justify-center p-8">
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-4">AI 펜팔 친구와 감정 표현하기</h3>
                <p className="text-muted-foreground">아이들이 펜팔 친구와 주고받는 감성적인 대화로 정서 발달을 도와줍니다.</p>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -right-12 -top-12 w-24 h-24 rounded-full bg-primary/10 animate-float" style={{ animationDelay: '0s' }}></div>
            <div className="absolute -left-8 -bottom-8 w-16 h-16 rounded-full bg-warm-200/30 animate-float" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
      
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-background z-0"></div>
    </section>
  );
};

export default Hero;
