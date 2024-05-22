'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import useValidation from '@/hooks/useValidation';
import { useAppDispatch } from '@/hooks/reduxHooks';
import { setUserEmail } from '@/states/emailSlice';
import { RiErrorWarningLine } from 'react-icons/ri';
import Cookies from 'js-cookie';

interface InputAlertProps {
  onClose: () => void;
}

const InputAlert: React.FC<InputAlertProps> = ({ onClose }) => {
  const router = useRouter();
  const [email, setEmail] = useState<string>('');
  const [isValid, setIsValid] = useState(false);
  const [isFirstTry, setIsFirstTry] = useState(true);
  const dispatch = useAppDispatch();

  useEffect(() => {
    // 쿠키 리셋
    Cookies.remove('access_token');
  }, []);
  const { mutateAsync } = useValidation();
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isValid = await mutateAsync({ email });
    setIsFirstTry(false);
    setIsValid(isValid);
    if (isValid) {
      dispatch(setUserEmail(email));
      onClose();
    }
  };

  const handleClose = () => {
    router.push('/');
  };
  return (
    <div className="max-w-[43.75rem] w-[90%] min-h-[21.25rem] h-fit border border-black rounded-[16px] shadow-xl bg-white">
      <div className="relative">
        <button className="absolute top-4 right-4" onClick={handleClose}>
          <Image src="/icons/close.svg" alt="clear" width={21} height={21} className="xm:w-4 xm:h-4" />
        </button>
      </div>

      <div className="w-[90%] flex flex-col justify-center items-center mx-auto mt-11 mb-10 text-center">
        <p className="bg-main_active text-[28px] font-bold px-2 mb-4 sm:text-xl">이메일 주소를 입력해주세요.</p>
        <p className="w-full text-xl mb-3 xm:text-lg">
          <span className="font-bold">이메일주소</span> 등록 시 이미지를&nbsp;
          <span className="font-bold">최대 8개 무료로 생성</span>할 수 있습니다.
        </p>

        <form onSubmit={handleSubmit} className="w-full flex flex-col justify-center items-center">
          <div className="w-full flex flex-col justify-start">
            <p className="text-base text-btn_text xm:text-sm">
              &bull; 이메일 주소를 입력하면 AI이미지와 티셔츠 이미지를 다운로드할 수 있습니다.
            </p>
            <p className="text-base text-btn_text mb-3 relative xm:text-sm">
              &bull; 개인정보 이용에 동의하십니까? (미동의시 서비스 이용에 제한이 있습니다)&nbsp;
              <input
                type="checkbox"
                required
                className="h-[1.2rem] w-[1.2rem] appearance-none border-[2px] border-form_color rounded-md active:border-black checked:border-black checked:bg-black checked:bg-[url('/icons/checked_icon.svg')] bg-center absolute bottom-0.5 xm:w-[1.1rem] xm:h-[1.1rem]"
              />
            </p>
          </div>

          <input
            type="email"
            onChange={handleEmailChange}
            placeholder="이메일주소를 입력해주세요."
            className="p-2 bg-gray-100 placeholder-[#79DDCB] rounded-md max-w-[24.625rem] w-full h-[2.5rem] text-[15px] xm:text-sm"
            required
            value={email}
          />
          <div className="flex items-center w-[23.625rem] text-[0.9rem] h-[2.5rem]">
            <p className={`flex justify-start items-center text-red-600 ${(isFirstTry || isValid) && 'hidden'}`}>
              <RiErrorWarningLine />
              &nbsp;유효한 이메일을 입력해주세요.
            </p>
          </div>
          <button type="submit" className="bg-main_active w-[15rem] h-[2.5rem] rounded-md font-medium">
            디자인 시작하기
          </button>
        </form>
      </div>
    </div>
  );
};

export default InputAlert;
