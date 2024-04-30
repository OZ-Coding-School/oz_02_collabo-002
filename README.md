🪄 Code Convention

< eslint 사용 > / < pritter 사용 >
Interface, Type
파스칼 표기법 : UserListView
접두사를 붙이지 않는다
Enum
파스칼 표기법 : UserListView
Function
카멜 표기법
Variables
변수명은 너무 많이 함축 X , 소문자: com X, computer O
카멜 표기법
Component
파스칼 표기법
상수
스네이크 케이스 + 대문자: const THIS_IS_CONSTANT = ‘string’;Boolean
Boolean
is, has, can 접두사를 사용: const isBoolean = true;
주석
수정 요청, 수정을 한 경우 날짜, 이름 쓰기 ex) 04.20 이름 수정

❗️ Issue 규칙

Issue 설정
할 일들을 issue 로 생성합니다.
Issue 제목
이슈타입: 제목 간단히
이슈타입은 커밋타입과 같음 (이모티콘 제외)
Description
이슈 개요: 이슈에 대한 간단한 내용
todo
[] 할일 1
[] 할일 2

Assignees & Labels 설정
Assignees : 확인 해야 할 사람 선택
Label : 관련있는 라벨 선택

Project 설정
oz_02_collabo-002 선택

💡 Git Branch 전략

feature/이름/#이슈번호로 생성

새로운 이슈 개발 작업 시작
feature 브랜치 생성 시 꼭 develop가서 브랜치 생성!
-> git switch develop
브랜치 업데이트를 위해 꼭 pull 한번 받기!
-> git pull origin develop  
develop에서 feature브랜치 생성 및 이동
-> git checkout -b feature/이름/#이슈번호

feature 브랜치 작업이 끝난 후
작업한 내용 add 후 커밋 작성
원격 브랜치로 push
-> git push origin feature/이름/#이슈번호
github으로 이동 후 해당 기능개발 develop으로 PR 요청

feature 개발이 끝난 후 로컬 브랜치 삭제(권장)
develop 브랜치로 이동
update된 develop 브랜치 pull
작업 끝난 로컬 브랜치 삭제
-> git branch -D feature/이름/#이슈번호

개발 시 주의 사항
❗개발이 끝나지 않았을 경우, 바로 merge하지 않도록 할 것
팀과 논의 후, merge 진행하기
작업 시작 및 작업 끝난 후 develop 업데이트 필수

Pull request & Merge 규칙
`feature/이름/#이슈번호` → `develop` 브랜치로 PR 요청
PR merge방식은 Squash Merge로 할 것!
Pull request와 Merge는 팀장이 함
Merge하기 전에 Pull request코드 확인하고 리뷰 남기기
기능 개발이 끝난 브랜치의 경우 삭제 권장

🧵 Commit Convention <https://gitmoji.dev/>

Commit Title Type

- ✨(:sparkles:) feat : 새로운 기능 추가
- 🐛(:bug:) fix : 기능 수정, 버그 수정
- 💡(:bulb:) chore : 오타 수정 및 새로운 기능이 추가되지 않고, 코드가 변경 된 경우 (주석 추가 및 수정 포함)
- 📝(:memo:) docs : 문서 수정 (readme 수정 시)
- 🚚(:truck:) build : 빌드 관련 파일 수정 및 삭제한 경우
- ✅(:white_check_mark:) test : 테스트 코드, 리팩터링 테스트 코드 추가(프로덕션 코드 변경 X)
- ♻️(:recycle:) refactor : 코드 리팩터링
- 🚑(:ambulance:) hotfix : 긴급 수정

Subject
커밋타입: 간단한 제목
커밋 타입은 소문자로 시작

Body
작업한 내용

Footer
유형: #이슈 번호
Fixes: 이슈 수정중 (아직 해결되지 않은 경우)
Resolves : 이슈를 해결했을 때 사용

Commit 예시

✨feat: "회원 가입 기능 구현"
SMS, 이메일 중복확인 API 개발
Fixes: #48

📏 PR 규칙

PR Title
pr 타입: 제목 간단히
pr 타입은 커밋 타입과 같음 (이모티콘은 제외)
PR description

## #️⃣연관된 이슈

> ex) #이슈번호, #이슈번호

## 📝작업 내용

> 이번 PR에서 작업한 내용을 간략히 설명해주세요(이미지 첨부 가능)

### 스크린샷 (선택)

## 리뷰 요구사항(선택)

> 리뷰어가 특별히 봐주었으면 하는 부분이 있다면 작성해주세요
>
> ex) 메서드 XXX의 이름을 더 잘 짓고 싶은데 혹시 좋은 명칭이 있을까요?
