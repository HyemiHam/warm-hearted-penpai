
import { useState } from 'react';
import { createDatabaseTables } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';

const DatabaseSetup = () => {
  const [isCreating, setIsCreating] = useState(false);

  const handleCreateTables = async () => {
    setIsCreating(true);
    try {
      const result = await createDatabaseTables();
      
      if (result.success) {
        toast.success('데이터베이스 테이블이 생성되었습니다', {
          description: '모든 테이블이 성공적으로 생성되었습니다.'
        });
      } else {
        toast.error('테이블 생성 중 오류가 발생했습니다', {
          description: '자세한 정보는 콘솔을 확인해주세요.'
        });
      }
    } catch (error) {
      console.error('Error creating tables:', error);
      toast.error('테이블 생성 중 오류가 발생했습니다', {
        description: '자세한 정보는 콘솔을 확인해주세요.'
      });
    } finally {
      setIsCreating(false);
    }
  };

  return (
    <div className="p-6 border rounded-lg shadow-sm bg-white">
      <h2 className="text-xl font-semibold mb-4">데이터베이스 설정</h2>
      <p className="mb-4 text-gray-600">
        Supabase에 필요한 데이터베이스 테이블을 생성합니다. 이 작업은 처음 한 번만 필요합니다.
      </p>
      <Button
        onClick={handleCreateTables}
        disabled={isCreating}
        className="w-full"
      >
        {isCreating ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> 테이블 생성 중...
          </>
        ) : '데이터베이스 테이블 생성하기'}
      </Button>
    </div>
  );
};

export default DatabaseSetup;
