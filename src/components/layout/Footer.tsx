
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-muted/50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">PenpAI</h3>
            <p className="text-muted-foreground">
              PenpAI는 AI 기술을 활용한 아이들의 감정 성장을 돕는 펜팔 서비스입니다.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">바로가기</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">홈</Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">서비스 소개</Link>
              </li>
              <li>
                <Link to="/register" className="text-muted-foreground hover:text-primary transition-colors">신청하기</Link>
              </li>
              <li>
                <Link to="/login" className="text-muted-foreground hover:text-primary transition-colors">로그인</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">문의하기</h4>
            <p className="text-muted-foreground mb-2">
              이메일: contact@penpai.kr
            </p>
            <p className="text-muted-foreground">
              운영시간: 평일 10:00 - 18:00
            </p>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© 2023 PenpAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
