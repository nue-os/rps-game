# 가위바위보 게임 ✌🏻👊🏻✋🏻

가위바위보 게임은 사용자와 컴퓨터가 각각 가위 / 바위 / 보를 선택해 승패를 겨루는 간단한 React 기반 게임입니다.

<img src="https://github.com/user-attachments/assets/6a95718c-6140-45dc-80f2-c547c2440ada" alt="가위바위보 게임" />

https://rps-game-dun.vercel.app/

<br />

## 📁 프로젝트 구조

```
/public
  └── vite.svg
/src
  ├── /assets
  │   ├── scissors.png      # 가위 이미지
  │   ├── rock.png          # 바위 이미지
  │   ├── paper.png         # 보 이미지
  │   └── questionmark.png  # 선택 전 물음표 이미지
  │
  ├── /components
  │   ├── Button.jsx        # 가위/바위/보 버튼 컴포넌트
  │   └── Card.jsx          # 유저/컴퓨터 선택 카드 컴포넌트
  │
  ├── /css
  │   ├── App.module.css    # App 컴포넌트 스타일
  │   ├── Button.module.css # Button 컴포넌트 스타일
  │   └── Card.module.css   # Card 컴포넌트 스타일
  │
  ├── /utils
  │   ├── game.js           # 승패 결정 및 컴퓨터 선택 유틸 함수
  │   └── result.js			# 결과 뒤집는 유틸 함수
  ├── App.jsx               # 메인 App 컴포넌트
  ├── index.css				# 전역 스타일
  └── main.jsx

indx.html
package.json
README.md
vite.config.js
...
```

<br />

## 🎮 주요 기능

- 사용자와 컴퓨터가 각각 가위/바위/보를 선택
- 카운트다운(3초) 후 컴퓨터 자동 선택
- 승패(이겼다/졌다/비겼다) 결과 표시
- 다시하기 버튼을 통한 초기화

<br />

## ⚙️ 핵심 로직

## 상태 관리

| 상태             | 설명                             |
| ---------------- | -------------------------------- |
| `userChoice`     | 사용자가 선택한 값               |
| `computerChoice` | 컴퓨터가 랜덤하게 선택한 값      |
| `result`         | 게임 결과 (이겼다, 졌다, 비겼다) |
| `isPlaying`      | 게임이 진행 중인지 여부          |
| `count`          | 카운트다운 숫자 (3 → 2 → 1 → 0)  |

### 주요 함수

- **`generateComputerChoice(choice)`**  
  → 컴퓨터가 랜덤으로 가위/바위/보 중 하나를 선택

- **`determineWinner(userChoice, computerChoice)`**  
  → 사용자의 선택과 컴퓨터의 선택을 비교해 승패를 결정

- **`reverseResult(result)`**  
  → 결과를 컴퓨터 관점으로 반전

- **`handleRetry()`**  
  → 게임을 초기 상태로 리셋 (사용자/컴퓨터 선택 및 결과 초기화)

<br />

## 🛠️ 기술 스택

- React v19 (Vite)
- CSS Modules
- Vercel
