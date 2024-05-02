// 메인페이지 이미지
interface Member {
  image: string[];
}

//디자인 생성 페이지
// 이메일
interface EmailInput {
  email: string;
  // 세션관리
}

// 키워드 >> 프롬프트
interface DesignCreate {
  image: string[];
  apiCount: number;
}

// 디자인 선택하기 버튼 post
interface SelectDesign {
  image: File;
}

//설문 폼
interface Servey {}

// 관리자 페이지
// 회원가입
interface SignupForm {}
// 로그인 jwt
