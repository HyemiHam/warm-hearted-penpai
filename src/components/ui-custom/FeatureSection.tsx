
import React from 'react';
import { Mail, BarChart, Heart, Shield } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay }) => (
  <div 
    className="bg-white rounded-xl p-6 shadow-soft border border-muted/50 hover:shadow-medium transition-all duration-300 animate-fade-in"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
      {icon}
    </div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

const FeatureSection = () => {
  const features = [
    {
      icon: <Mail size={24} />,
      title: "AI 펜팔 친구",
      description: "아이들이 AI 펜팔 친구와 편지를 주고받으며 자연스럽게 글쓰기와 감정 표현 능력을 발전시킵니다.",
      delay: 150
    },
    {
      icon: <BarChart size={24} />,
      title: "감정 리포트",
      description: "월별 감정 분석 리포트를 통해 아이의 심리 상태와 감정 발달을 체계적으로 관찰할 수 있습니다.",
      delay: 300
    },
    {
      icon: <Heart size={24} />,
      title: "정서 발달 지원",
      description: "아이들이 자신의 감정을 인식하고 표현하는 방법을 배우며 정서 지능을 향상시킵니다.",
      delay: 450
    },
    {
      icon: <Shield size={24} />,
      title: "안전한 환경",
      description: "모든 대화는 철저하게 모니터링되어 아이들에게 안전하고 유익한 환경을 제공합니다.",
      delay: 600
    }
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4 animate-fade-in">
            우리 서비스의 <span className="text-primary">주요 기능</span>
          </h2>
          <p className="text-muted-foreground animate-fade-in" style={{ animationDelay: '150ms' }}>
            아이들의 감정 성장과 표현력 향상을 위한 다양한 기능을 제공합니다.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
