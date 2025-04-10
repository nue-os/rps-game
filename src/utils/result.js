const reverseResult = result => {
  if (result === '이겼다') return '졌다'
  if (result === '졌다') return '이겼다'
  if (result === '비겼다') return '비겼다'
  return ''
}

export { reverseResult }
