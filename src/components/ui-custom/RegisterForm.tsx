
import React, { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Loader2 } from 'lucide-react';

const RegisterForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    // 자녀 정보
    childName: '',
    childGender: '',
    childAge: '',
    childInterests: '',
    childEmail: '',
    childBirthday: '',
    childMbti: '',
    
    // 부모 정보
    parentName: '',
    parentEmail: '',
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // 필수 항목 검증
    const requiredFields = [
      'childName', 'childGender', 'childAge', 'childInterests',
      'childEmail', 'childBirthday', 'parentName', 'parentEmail'
    ];
    
    const missingFields = requiredFields.filter(field => !formData[field as keyof typeof formData]);
    if (missingFields.length > 0) {
      toast({
        title: "필수 정보를 입력해주세요",
        description: "모든 필수 항목을 채워주세요.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Here you would connect to your n8n workflow
      console.log('Sending registration data to n8n:', formData);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "등록이 완료되었습니다!",
        description: "입력하신 이메일로 추가 안내를 보내드렸습니다.",
      });
      
      // Reset form after successful submission
      setFormData({
        childName: '',
        childGender: '',
        childAge: '',
        childInterests: '',
        childEmail: '',
        childBirthday: '',
        childMbti: '',
        parentName: '',
        parentEmail: '',
      });
      
    } catch (error) {
      console.error('Registration error:', error);
      toast({
        title: "등록 중 오류가 발생했습니다",
        description: "잠시 후 다시 시도해주세요.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-8 animate-fade-in">
      {/* 자녀 정보 섹션 */}
      <div className="space-y-6">
        <div className="inline-flex items-center justify-center w-full">
          <hr className="w-full border-border" />
          <span className="absolute px-3 bg-background text-lg font-medium text-foreground">자녀 정보</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="childName">자녀 이름 <span className="text-red-500">*</span></Label>
            <Input
              id="childName"
              name="childName"
              value={formData.childName}
              onChange={handleChange}
              placeholder="자녀의 이름을 입력해주세요"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label>성별 <span className="text-red-500">*</span></Label>
            <RadioGroup
              value={formData.childGender}
              onValueChange={(value) => handleSelectChange('childGender', value)}
              className="flex space-x-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="male" id="male" />
                <Label htmlFor="male" className="cursor-pointer">남자</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="female" id="female" />
                <Label htmlFor="female" className="cursor-pointer">여자</Label>
              </div>
            </RadioGroup>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="childAge">나이 <span className="text-red-500">*</span></Label>
            <Input
              id="childAge"
              name="childAge"
              type="number"
              min="1"
              max="19"
              value={formData.childAge}
              onChange={handleChange}
              placeholder="자녀의 나이를 입력해주세요"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="childBirthday">생일 <span className="text-red-500">*</span></Label>
            <Input
              id="childBirthday"
              name="childBirthday"
              type="date"
              value={formData.childBirthday}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="childEmail">이메일 주소 <span className="text-red-500">*</span></Label>
            <Input
              id="childEmail"
              name="childEmail"
              type="email"
              value={formData.childEmail}
              onChange={handleChange}
              placeholder="자녀의 이메일 주소를 입력해주세요"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="childMbti">MBTI (선택사항)</Label>
            <Select
              value={formData.childMbti}
              onValueChange={(value) => handleSelectChange('childMbti', value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="MBTI를 선택해주세요 (선택)" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ISTJ">ISTJ</SelectItem>
                <SelectItem value="ISFJ">ISFJ</SelectItem>
                <SelectItem value="INFJ">INFJ</SelectItem>
                <SelectItem value="INTJ">INTJ</SelectItem>
                <SelectItem value="ISTP">ISTP</SelectItem>
                <SelectItem value="ISFP">ISFP</SelectItem>
                <SelectItem value="INFP">INFP</SelectItem>
                <SelectItem value="INTP">INTP</SelectItem>
                <SelectItem value="ESTP">ESTP</SelectItem>
                <SelectItem value="ESFP">ESFP</SelectItem>
                <SelectItem value="ENFP">ENFP</SelectItem>
                <SelectItem value="ENTP">ENTP</SelectItem>
                <SelectItem value="ESTJ">ESTJ</SelectItem>
                <SelectItem value="ESFJ">ESFJ</SelectItem>
                <SelectItem value="ENFJ">ENFJ</SelectItem>
                <SelectItem value="ENTJ">ENTJ</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="childInterests">관심사 <span className="text-red-500">*</span></Label>
          <Textarea
            id="childInterests"
            name="childInterests"
            value={formData.childInterests}
            onChange={handleChange}
            placeholder="자녀의 관심사를 입력해주세요 (예: 동물, 우주, 스포츠, 음악 등)"
            className="min-h-[100px]"
            required
          />
        </div>
      </div>
      
      {/* 부모 정보 섹션 */}
      <div className="space-y-6">
        <div className="inline-flex items-center justify-center w-full">
          <hr className="w-full border-border" />
          <span className="absolute px-3 bg-background text-lg font-medium text-foreground">부모 정보</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="parentName">부모 이름 <span className="text-red-500">*</span></Label>
            <Input
              id="parentName"
              name="parentName"
              value={formData.parentName}
              onChange={handleChange}
              placeholder="부모님 이름을 입력해주세요"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="parentEmail">이메일 <span className="text-red-500">*</span></Label>
            <Input
              id="parentEmail"
              name="parentEmail"
              type="email"
              value={formData.parentEmail}
              onChange={handleChange}
              placeholder="부모님 이메일을 입력해주세요"
              required
            />
          </div>
        </div>
      </div>
      
      <div className="pt-4">
        <Button 
          type="submit" 
          className="w-full bg-primary hover:bg-primary/90 text-foreground py-6 text-base font-medium"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> 신청 중...
            </>
          ) : '신청하기'}
        </Button>
      </div>
    </form>
  );
};

export default RegisterForm;
