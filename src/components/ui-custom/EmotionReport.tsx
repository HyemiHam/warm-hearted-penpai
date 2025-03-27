
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, LineChart, PieChart, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, Line, Pie, Cell } from 'recharts';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Mock data for emotion reports
const monthlyEmotionData = [
  { month: '1월', 기쁨: 65, 슬픔: 15, 분노: 10, 불안: 5, 기타: 5 },
  { month: '2월', 기쁨: 55, 슬픔: 20, 분노: 15, 불안: 8, 기타: 2 },
  { month: '3월', 기쁨: 60, 슬픔: 10, 분노: 5, 불안: 20, 기타: 5 },
  { month: '4월', 기쁨: 70, 슬픔: 5, 분노: 8, 불안: 12, 기타: 5 },
  { month: '5월', 기쁨: 75, 슬픔: 8, 분노: 7, 불안: 6, 기타: 4 },
  { month: '6월', 기쁨: 72, 슬픔: 10, 분노: 5, 불안: 10, 기타: 3 },
];

const emotionTrendData = [
  { date: '5/1', 기쁨: 75, 슬픔: 25, 불안: 15 },
  { date: '5/5', 기쁨: 70, 슬픔: 30, 불안: 20 },
  { date: '5/10', 기쁨: 65, 슬픔: 35, 불안: 25 },
  { date: '5/15', 기쁨: 80, 슬픔: 20, 불안: 10 },
  { date: '5/20', 기쁨: 85, 슬픔: 15, 불안: 5 },
  { date: '5/25', 기쁨: 90, 슬픔: 10, 불안: 5 },
  { date: '5/30', 기쁨: 85, 슬픔: 15, 불안: 10 },
];

const currentMonthData = [
  { name: '기쁨', value: 75, color: '#EDB64D' },
  { name: '슬픔', value: 8, color: '#0EA5E9' },
  { name: '분노', value: 7, color: '#F39972' },
  { name: '불안', value: 6, color: '#6D4C0F' },
  { name: '기타', value: 4, color: '#BAE6FD' },
];

const wordCloudData = [
  { text: '학교', value: 100 },
  { text: '친구', value: 90 },
  { text: '좋아요', value: 80 },
  { text: '재미있어요', value: 75 },
  { text: '가족', value: 70 },
  { text: '여행', value: 65 },
  { text: '음식', value: 60 },
  { text: '동물', value: 55 },
  { text: '게임', value: 50 },
  { text: '슬퍼요', value: 45 },
  { text: '걱정', value: 40 },
  { text: '행복', value: 85 },
];

const EmotionReport = () => {
  const [selectedMonth, setSelectedMonth] = useState('5');

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        <div>
          <h2 className="text-2xl font-bold">감정 리포트</h2>
          <p className="text-muted-foreground">
            자녀의 감정 변화와 발달 상태를 확인하세요
          </p>
        </div>
        
        <div className="flex items-center gap-2">
          <Label htmlFor="month-select">월 선택:</Label>
          <Select
            value={selectedMonth}
            onValueChange={setSelectedMonth}
          >
            <SelectTrigger id="month-select" className="w-36">
              <SelectValue placeholder="월 선택" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1월</SelectItem>
              <SelectItem value="2">2월</SelectItem>
              <SelectItem value="3">3월</SelectItem>
              <SelectItem value="4">4월</SelectItem>
              <SelectItem value="5">5월</SelectItem>
              <SelectItem value="6">6월</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid grid-cols-3 max-w-md mb-4">
          <TabsTrigger value="overview">개요</TabsTrigger>
          <TabsTrigger value="trends">추이</TabsTrigger>
          <TabsTrigger value="keywords">키워드</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-6">
          {/* Monthly Emotion Distribution Card */}
          <Card>
            <CardHeader>
              <CardTitle>감정 분포</CardTitle>
              <CardDescription>
                5월 자녀의 감정 분포 현황
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={currentMonthData}
                      cx="50%"
                      cy="50%"
                      labelLine={true}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {currentMonthData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          {/* Emotion Summary Card */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>감정 키워드</CardTitle>
                <CardDescription>
                  자주 표현된 감정 키워드
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {wordCloudData.slice(0, 5).map((word, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-full bg-muted rounded-full overflow-hidden">
                        <div 
                          className="bg-primary h-2 rounded-full" 
                          style={{ width: `${word.value}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium min-w-20">{word.text}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>월간 비교</CardTitle>
                <CardDescription>
                  이전 달과의 감정 변화
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-60">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={monthlyEmotionData.slice(-2)}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="기쁨" fill="#EDB64D" />
                      <Bar dataKey="슬픔" fill="#0EA5E9" />
                      <Bar dataKey="분노" fill="#F39972" />
                      <Bar dataKey="불안" fill="#6D4C0F" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="trends">
          <Card>
            <CardHeader>
              <CardTitle>감정 추이</CardTitle>
              <CardDescription>
                한 달 동안의 감정 변화 추이
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={emotionTrendData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="기쁨" stroke="#EDB64D" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="슬픔" stroke="#0EA5E9" />
                    <Line type="monotone" dataKey="불안" stroke="#6D4C0F" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="keywords">
          <Card>
            <CardHeader>
              <CardTitle>자주 사용한 단어</CardTitle>
              <CardDescription>
                자녀가 대화에서 자주 사용한 단어와 표현
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 py-4">
                {wordCloudData.map((word, index) => (
                  <div
                    key={index}
                    className="rounded-lg bg-muted/50 px-3 py-2 text-center"
                    style={{
                      fontSize: `${Math.max(14, Math.min(24, word.value / 4))}px`,
                      fontWeight: word.value > 70 ? 'bold' : 'normal',
                    }}
                  >
                    {word.text}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default EmotionReport;
