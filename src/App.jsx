import React, { useEffect, useMemo, useState } from 'react'
import styles from './css/App.module.css'
import Card from './components/Card'
import Button from './components/Button'
import scissors from './assets/scissors.png'
import rock from './assets/rock.png'
import paper from './assets/paper.png'
import { determineWinner, generateComputerChoice } from './utils/game'
import { reverseResult } from './utils/result'

const App = () => {
  const choice = useMemo(
    () => [
      { name: '가위', imgUrl: scissors, type: 'scissors' },
      { name: '바위', imgUrl: rock, type: 'rock' },
      { name: '보', imgUrl: paper, type: 'paper' },
    ],
    []
  )
  const [userChoice, setUserChoice] = useState(null)
  const [computerChoice, setComputerChoice] = useState(null)
  const [result, setResult] = useState('?')
  const [isPlaying, setIsPlaying] = useState(false) // 플레이 상태
  const [count, setCount] = useState(null) // 카운트

  const handleUserChoice = userSelected => {
    if (isPlaying) return // 이미 게임이 진행 중이면 무시

    // 이전 기록 초기화
    setUserChoice(null)
    setComputerChoice(null)
    setResult('?')

    setIsPlaying(true) // 게임 진행 중으로 변경
    setUserChoice(userSelected) // 사용자 선택 저장
    setCount(3) // 카운트다운 시작 (3초)
  }

  useEffect(() => {
    if (count === null) return
    // 카운트가 0이 되면
    if (count === 0) {
      const computerSelected = generateComputerChoice(choice) // 컴퓨터 선택 생성
      setComputerChoice(computerSelected) // 컴퓨터 선택 저장

      const gameResult = determineWinner(userChoice, computerSelected) // 승부 결과 계산
      setResult(gameResult) // 결과 저장

      setIsPlaying(false) // 게임 종료 상태로 변경
      setCount(null) // 카운트 리셋
      return
    }

    // 타이머 (카운트가 0이 아닐 때, 1초마다 count를 1 감소)
    const timer = setTimeout(() => {
      setCount(prev => prev - 1)
    }, 1000)

    // 클린업 함수 (타이머 정리)
    return () => clearTimeout(timer)
  }, [count, userChoice, choice])

  const handleRetry = () => {
    setUserChoice(null)
    setComputerChoice(null)
    setResult('?')
  }

  return (
    <div className={styles.app}>
      <h1>가위바위보 게임</h1>
      <div className={styles.main}>
        <Card
          title="너님"
          choice={userChoice}
          type="user"
          result={result}
          isPlaying={isPlaying}
          count={count}
        />
        <div className={styles.btn__con}>
          {choice.map(c => (
            <Button
              key={c.type}
              name={c.name}
              imgUrl={c.imgUrl}
              type={c.type}
              onClick={() => handleUserChoice(c)}
              disabled={isPlaying}
            />
          ))}
          <span className={styles['btn__con--common']}>{result}</span>
          {(userChoice || computerChoice) && (
            <button
              className={`${styles['btn--retry']} ${styles['btn__con--common']}`}
              onClick={handleRetry}
              disabled={isPlaying}
            >
              다시하기
            </button>
          )}
        </div>
        <Card
          title="상대선수"
          choice={computerChoice}
          type="computer"
          result={reverseResult(result)}
          isPlaying={isPlaying}
          count={count}
        />
      </div>
      <div className={styles.description}>
        버튼을 클릭하여 가위, 바위, 보 중 하나를 선택하세요.
        <br />
        컴퓨터는 랜덤으로 선택합니다.
      </div>
    </div>
  )
}

export default App
