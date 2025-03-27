
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingContact from '@/components/ui-custom/FloatingContact';
import ContactForm from '@/components/ui-custom/ContactForm';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { MessageSquare, BarChart, Mail, Heart, Shield } from 'lucide-react';

const About = () => {
  return (
    <>
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-hero-pattern">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary/90 text-sm font-medium mb-4 animate-fade-in">
                PenpAI 서비스 소개
              </span>
              
              <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight animate-fade-in" style={{ animationDelay: '150ms' }}>
                <span className="text-primary">AI 펜팔 친구</span>를 통한<br />
                감정 성장 솔루션
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mt-4 animate-fade-in" style={{ animationDelay: '300ms' }}>
                PenpAI는 아이들이 AI 펜팔 친구와 소통하며 감정을 자연스럽게 표현하고, 부모님은 아이의 감정 발달 상태를 체계적으로 관찰할 수 있는 서비스입니다.
              </p>
            </div>
          </div>
        </section>
        
        {/* Service Features */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 animate-fade-in">
                <span className="text-primary">PenpAI</span>만의 특별함
              </h2>
              <p className="text-muted-foreground animate-fade-in" style={{ animationDelay: '150ms' }}>
                우리 서비스가 제공하는 차별화된 가치를 확인하세요
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-muted/30 rounded-xl p-6 animate-fade-in" style={{ animationDelay: '150ms' }}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">AI 펜팔 친구</h3>
                    <p className="text-muted-foreground">
                      아이가 언제든지 편지를 보내고 답장을 받을 수 있는 AI 친구가 있습니다. 아이의 관심사와 성격에 맞춘 대화로 자연스러운 소통을 유도합니다.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-muted/30 rounded-xl p-6 animate-fade-in" style={{ animationDelay: '300ms' }}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <BarChart size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">감정 분석 리포트</h3>
                    <p className="text-muted-foreground">
                      AI가 아이의 메시지를 분석하여 월별 감정 상태와 변화를 시각화된 리포트로 제공합니다. 아이의 심리 상태를 한눈에 파악하세요.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-muted/30 rounded-xl p-6 animate-fade-in" style={{ animationDelay: '450ms' }}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Heart size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">정서 발달 지원</h3>
                    <p className="text-muted-foreground">
                      아이가 자신의 감정을 인식하고 표현하는 과정을 통해 정서 지능이 향상됩니다. AI 친구는 아이의 감정에 공감하고 적절한 반응을 보여줍니다.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-muted/30 rounded-xl p-6 animate-fade-in" style={{ animationDelay: '600ms' }}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Shield size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">안전한 환경</h3>
                    <p className="text-muted-foreground">
                      모든 대화는 철저히 모니터링되어 안전한 환경을 제공합니다. 부적절한 내용은 필터링되며, 부모님이 원할 경우 대화 내용을 확인할 수 있습니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* How It Works Detail */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 animate-fade-in">
                <span className="text-primary">어떻게</span> 작동하나요?
              </h2>
              <p className="text-muted-foreground animate-fade-in" style={{ animationDelay: '150ms' }}>
                PenpAI의 서비스 이용 과정을 알아보세요
              </p>
            </div>
            
            <div className="space-y-16 max-w-4xl mx-auto">
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row items-center gap-8 animate-fade-in" style={{ animationDelay: '150ms' }}>
                <div className="md:w-1/2 relative">
                  <div className="w-16 h-16 bg-primary text-background rounded-full flex items-center justify-center text-xl font-bold absolute -top-8 -left-8 z-10">01</div>
                  <div className="aspect-video rounded-lg overflow-hidden bg-white shadow-soft border border-muted/50 flex items-center justify-center p-6">
                    <div className="text-center">
                      <h3 className="text-xl font-semibold mb-4">간단한 등록 과정</h3>
                      <p className="text-muted-foreground">자녀와 부모님의 기본 정보 입력으로 서비스 이용을 시작합니다.</p>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-semibold mb-4">간편한 시작</h3>
                  <p className="text-muted-foreground mb-4">
                    아이의 이름, 나이, 관심사 등 간단한 정보를 입력하면 AI 펜팔 친구가 준비됩니다. 아이의 성격과 관심사에 맞춘 맞춤형 친구가 만들어집니다.
                  </p>
                  <Button asChild className="bg-primary hover:bg-primary/90 text-foreground">
                    <Link to="/register">등록하기</Link>
                  </Button>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="flex flex-col md:flex-row-reverse items-center gap-8 animate-fade-in" style={{ animationDelay: '300ms' }}>
                <div className="md:w-1/2 relative">
                  <div className="w-16 h-16 bg-primary text-background rounded-full flex items-center justify-center text-xl font-bold absolute -top-8 -right-8 z-10">02</div>
                  <div className="aspect-video rounded-lg overflow-hidden bg-white shadow-soft border border-muted/50 flex items-center justify-center p-6">
                    <div className="text-center">
                      <h3 className="text-xl font-semibold mb-4">AI 친구와의 대화</h3>
                      <p className="text-muted-foreground">아이가 AI 친구와 편지를 주고받으며 감정을 표현합니다.</p>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-semibold mb-4">자연스러운 감정 표현</h3>
                  <p className="text-muted-foreground mb-4">
                    아이는 자신만의 이메일을 통해 AI 친구에게 자유롭게 메시지를 보내고 답장을 받습니다. 일상 이야기, 고민, 기쁨 등 다양한 감정을 자연스럽게 표현할 수 있습니다.
                  </p>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="flex flex-col md:flex-row items-center gap-8 animate-fade-in" style={{ animationDelay: '450ms' }}>
                <div className="md:w-1/2 relative">
                  <div className="w-16 h-16 bg-primary text-background rounded-full flex items-center justify-center text-xl font-bold absolute -top-8 -left-8 z-10">03</div>
                  <div className="aspect-video rounded-lg overflow-hidden bg-white shadow-soft border border-muted/50 flex items-center justify-center p-6">
                    <div className="text-center">
                      <h3 className="text-xl font-semibold mb-4">감정 리포트 확인</h3>
                      <p className="text-muted-foreground">월별 감정 분석 리포트로 아이의 심리 상태를 파악합니다.</p>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-semibold mb-4">체계적인 감정 관찰</h3>
                  <p className="text-muted-foreground mb-4">
                    부모님은 로그인 후 대시보드에서 자녀의 월별 감정 리포트를 확인할 수 있습니다. 감정 분포, 키워드, 변화 추이 등을 통해 자녀의 정서 발달을 체계적으로 관찰할 수 있습니다.
                  </p>
                  <Button asChild className="bg-primary hover:bg-primary/90 text-foreground">
                    <Link to="/login">로그인하기</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 animate-fade-in">
                  <span className="text-primary">문의하기</span>
                </h2>
                <p className="text-muted-foreground animate-fade-in" style={{ animationDelay: '150ms' }}>
                  서비스에 대한 궁금한 점이 있으신가요? 언제든지 문의해주세요.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-soft border border-muted/50">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <FloatingContact />
    </>
  );
};

export default About;
