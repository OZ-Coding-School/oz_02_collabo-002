'use client';
import Input from '@/components/admin/inputField/Input';
import { useRouter } from 'next/navigation';

import React from 'react';

function SignupForm() {
  const router = useRouter();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // signup 폼 제출
    router.push('/admin');
  }

  return (
    <div className="mt-[9.9375rem] flex flex-col justify-center items-center text-center">
      <h2 className="text-[2.5rem] mb-[3.5rem] w-min-[3.75rem]">관리자 로그인</h2>
      <div className="w-[32.8125rem] border-t-[1px] border-black  pt-[5.0625rem] pb-[22.0625rem]">
        <form onSubmit={handleSubmit}>
          <div className="mb-[4rem]">
            <Input title={'이메일 주소'} type={'email'} placeholder={'이메일 형식 입력'} />
            <Input title={'비밀번호'} type={'password'} placeholder={'8글자 이상, 영문 및 숫자 혼합'} />
            <Input title={'비밀번호 확인'} type={'password'} placeholder={'8글자 이상, 영문 및 숫자 혼합'} />
            <Input title={'이름'} type={'text'} placeholder={'한글 입력'} />
            <Input title={'연락처'} type={'number'} placeholder={'연락처'} />
          </div>

          <div>
            <button
              className="w-full h-[4.3125rem] text-[1.875rem] border-btn_border text-center items-center border-[1px] rounded-[0.875rem] bg-main_active"
              type="submit">
              가입하기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignupForm;
