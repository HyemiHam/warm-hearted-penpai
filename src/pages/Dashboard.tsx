
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingContact from '@/components/ui-custom/FloatingContact';
import EmotionReport from '@/components/ui-custom/EmotionReport';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, LogOut, User, Calendar } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const mockMessages = [
  {
    id: 1,
    date: '2023-05-28',
    subject: '안녕하세요! 오늘 학교에서 있었던 일이에요',
    preview: '오늘 학교에서 친구들과 재미있게 놀았어요. 그런데 수학 시험이 어려웠어요...',
    unread: false,
  },
  {
    id: 2,
    date: '2023-05-25',
    subject: '주말 계획에 대해 이야기할게요',
    preview: '이번 주말에 가족들과 놀이공원에 가기로 했어요! 너무 기대돼요...',
    unread: false,
  },
  {
    id: 3,
    date: '2023-05-22',
    subject: '오늘은 기분이 안 좋았어요',
    preview: '친구랑 작은 다툼이 있었는데, 마음이 안 좋아요. 어떻게 해야 할까요?',
    unread: false,
  },
  {
    id: 4,
    date: '2023-05-20',
    subject: '새로운 취미를 시작했어요!',
    preview: '요즘 그림 그리기를 시작했는데 정말 재미있어요. 제가 그린 그림을 보여드리고 싶어요...',
    unread: false,
  },
  {
    id: 5,
    date: '2023-05-17',
    subject: '학교 발표회 소식',
    preview: '다음 달에 학교 발표회가 있어요. 저는 피아노 연주를 하기로 했어요. 너무 떨려요...',
    unread: false,
  },
];

const Dashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [childName, setChildName] = useState('민준');
  const [loading, setLoading] = useState(true);
  
  // Check login status on component mount
  useEffect(() => {
    const checkLoginStatus = () => {
      const loginStatus = localStorage.getItem('isLoggedIn');
      if (loginStatus === 'true') {
        setIsLoggedIn(true);
      } else {
        navigate('/login');
      }
      setLoading(false);
    };
    
    // Add a small delay to simulate checking login status
    setTimeout(checkLoginStatus, 500);
  }, [navigate]);
  
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    toast({
      title: "로그아웃 되었습니다",
      description: "안전하게 로그아웃 되었습니다.",
    });
    navigate('/login');
  };
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-12 w-12 rounded-full bg-primary/20 mb-4"></div>
          <div className="h-4 w-32 bg-muted rounded"></div>
        </div>
      </div>
    );
  }
  
  return (
    <>
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Dashboard Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold animate-fade-in">
                <span className="text-primary">{childName}</span>님의 대시보드
              </h1>
              <p className="text-muted-foreground animate-fade-in" style={{ animationDelay: '150ms' }}>
                감정 리포트와 메시지를 확인하세요
              </p>
            </div>
            
            <Button 
              variant="outline" 
              className="flex items-center gap-2" 
              onClick={handleLogout}
            >
              <LogOut size={16} /> 로그아웃
            </Button>
          </div>
          
          {/* Dashboard Content */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* User Profile Card */}
              <Card className="animate-fade-in">
                <CardHeader className="pb-2">
                  <CardTitle>프로필 정보</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                      <User size={36} />
                    </div>
                    <h3 className="text-lg font-semibold">{childName}</h3>
                    <p className="text-muted-foreground text-sm">10세 / 남자</p>
                    <p className="text-muted-foreground text-sm mt-1">ISFJ</p>
                    <div className="w-full border-t border-border mt-4 pt-4">
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                          <p className="text-muted-foreground text-xs">가입일</p>
                          <p className="font-medium">2023.05.01</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground text-xs">총 메일 수</p>
                          <p className="font-medium">32</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Quick Stats Card */}
              <Card className="animate-fade-in" style={{ animationDelay: '150ms' }}>
                <CardHeader className="pb-2">
                  <CardTitle>주요 통계</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        <Mail size={20} />
                      </div>
                      <div>
                        <p className="text-sm font-medium">이번 달 편지</p>
                        <p className="text-2xl font-semibold">12</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-warm-100 flex items-center justify-center text-warm-600 shrink-0">
                        <Calendar size={20} />
                      </div>
                      <div>
                        <p className="text-sm font-medium">연속 일수</p>
                        <p className="text-2xl font-semibold">7일</p>
                      </div>
                    </div>
                    
                    <div className="bg-muted/30 rounded-lg p-3 mt-2">
                      <p className="text-sm">
                        <span className="font-medium">이번 달 주요 감정:</span> 기쁨 (75%)
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Main Content */}
            <div className="lg:col-span-3 space-y-6">
              <Tabs defaultValue="emotions" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="emotions">감정 리포트</TabsTrigger>
                  <TabsTrigger value="messages">메시지 내역</TabsTrigger>
                </TabsList>
                
                <TabsContent value="emotions" className="space-y-6">
                  <EmotionReport />
                </TabsContent>
                
                <TabsContent value="messages" className="space-y-6">
                  <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center mb-6">
                    <div>
                      <h2 className="text-2xl font-bold">메시지 내역</h2>
                      <p className="text-muted-foreground">
                        AI 펜팔 친구와 주고받은 메시지를 확인하세요
                      </p>
                    </div>
                    
                    <Button className="bg-primary hover:bg-primary/90 text-foreground">
                      <Mail className="mr-2 h-4 w-4" /> 새 메시지 보내기
                    </Button>
                  </div>
                  
                  <Card className="animate-fade-in">
                    <CardContent className="p-0">
                      <div className="divide-y divide-border">
                        {mockMessages.map((message) => (
                          <div 
                            key={message.id} 
                            className="p-4 hover:bg-muted/20 transition-colors cursor-pointer flex flex-col md:flex-row md:items-center gap-2 md:gap-4"
                          >
                            <div className="md:w-32 text-sm text-muted-foreground shrink-0">
                              {message.date}
                            </div>
                            <div className="flex-grow">
                              <h4 className={`text-base font-medium ${message.unread ? 'text-primary' : ''}`}>
                                {message.subject}
                              </h4>
                              <p className="text-sm text-muted-foreground line-clamp-1">
                                {message.preview}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      <FloatingContact />
    </>
  );
};

export default Dashboard;
