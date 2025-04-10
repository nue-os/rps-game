const generateComputerChoice = choice => {
  const randomIdx = Math.floor(Math.random() * choice.length)
  return choice[randomIdx]
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice.type === computerChoice.type) return '비겼다'
  if (
    (userChoice.type === 'scissors' && computerChoice.type === 'paper') ||
    (userChoice.type === 'rock' && computerChoice.type === 'scissors') ||
    (userChoice.type === 'paper' && computerChoice.type === 'rock')
  ) {
    return '이겼다'
  } else {
    return '졌다'
  }
}

export { generateComputerChoice, determineWinner }
