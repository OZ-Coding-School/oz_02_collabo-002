'use client';
import Input from '@/components/admin/inputField/Input';
import useValidation from '@/hooks/useValidation';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { FaGalacticSenate } from 'react-icons/fa6';
import { RiErrorWarningLine } from 'react-icons/ri';

function LoginForm() {
  const { mutateAsync } = useValidation();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  function handleSignUpButtonClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    router.push('/admin/signup');
  }
  async function handleLoginButtonClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    // login 검증 로직...
    console.log(email, password);
    const isValid = await mutateAsync({ email, status: 'staff', password });
    if (isValid) {
      setIsEmailValid(true);
      router.push('admin/manage/manager');
    } else setIsEmailValid(false);
  }
  function handleChangeEmail(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }
  function handleChangePassword(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }

  return (
    <div className="mt-[9.9375rem] flex flex-col justify-center items-center text-center">
      <h2 className="text-[2.5rem] mb-[3.5rem] w-min-[3.75rem]">관리자 로그인</h2>
      <div className="w-[32.8125rem] border-t-[1px] border-black  pt-[5.0625rem] pb-[22.0625rem]">
        <form>
          <div className="mb-[4rem]">
            <Input title={'이메일 주소'} type={'email'} placeholder={'이메일 형식 입력'} onChange={handleChangeEmail} />

            <div className="mb-[1.125rem] h-[1.5rem] pl-[10rem]">
              <p className={`text-red-600 justify-start items-center flex ${isEmailValid && 'hidden'}`}>
                <RiErrorWarningLine />
                &nbsp;유효한 이메일을 입력해주세요.
              </p>
            </div>
            <Input
              title={'비밀번호'}
              type={'password'}
              placeholder={'8글자 이상, 영문 및 숫자 혼합'}
              onChange={handleChangePassword}
            />
          </div>

          <div>
            <button
              className="w-[15.875rem] h-[4.3125rem] text-[1.875rem] border-btn_border text-center items-center border-[1px] rounded-[0.875rem] bg-white mr-[1.0625rem] hover:"
              onClick={handleSignUpButtonClick}>
              관리자 가입
            </button>
            <button
              className="w-[15.875rem] h-[4.3125rem] text-[1.875rem] border-btn_border text-center items-center border-[1px] rounded-[0.875rem] bg-main_active"
              onClick={handleLoginButtonClick}>
              로그인
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
