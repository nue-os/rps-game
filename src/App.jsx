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
    if (isPlaying) return

    // 이전 기록 초기화
    setUserChoice(null)
    setComputerChoice(null)
    setResult('?')

    setIsPlaying(true)
    setUserChoice(userSelected)
    setCount(3)
  }

  useEffect(() => {
    if (count === null) return
    if (count === 0) {
      const computerSelected = generateComputerChoice(choice)
      setComputerChoice(computerSelected)

      const gameResult = determineWinner(userChoice, computerSelected)
      setResult(gameResult)

      setIsPlaying(false) // 플레이 상태 리셋
      setCount(null) // 카운트 리셋
      return
    }

    const timer = setTimeout(() => {
      setCount(prev => prev - 1)
    }, 1000)

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
