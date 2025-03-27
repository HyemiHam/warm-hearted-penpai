
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Loader2 } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';

const LoginForm = () => {
  const { signIn } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast("이메일과 비밀번호를 입력해주세요.", {
        description: "모든 필드를 채워주세요.",
        dismissible: true
      });
      return;
    }
    
    try {
      await signIn(email, password);
    } catch (error) {
      console.error('Login error:', error);
      // Error is handled in the signIn function
    }
  };
  
  return (
    <form onSubmit={handleLogin} className="space-y-6 animate-fade-in">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">이메일</Label>
          <Input
            id="email"
            type="email"
            placeholder="이메일을 입력하세요"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">비밀번호</Label>
            <Button 
              type="button" 
              variant="link" 
              className="text-sm font-medium text-primary px-0 h-auto"
              onClick={() => toast("비밀번호 찾기", {
                description: "이메일로 비밀번호 재설정 링크를 발송했습니다.",
              })}
            >
              비밀번호 찾기
            </Button>
          </div>
          <Input
            id="password"
            type="password"
            placeholder="비밀번호를 입력하세요"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="remember" 
            checked={rememberMe}
            onCheckedChange={(checked) => setRememberMe(checked as boolean)}
          />
          <Label htmlFor="remember" className="text-sm cursor-pointer">로그인 상태 유지</Label>
        </div>
      </div>
      
      <Button 
        type="submit" 
        className="w-full bg-primary hover:bg-primary/90 text-foreground py-6"
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> 로그인 중...
          </>
        ) : '로그인'}
      </Button>
    </form>
  );
};

export default LoginForm;
