// Write your code here
import {useState} from 'react'
import {MainContainer, ImageTag, TextPart, Button} from './styledComponents'

const Unlock = () => {
  const [lock, setLock] = useState(true)

  const setLockFnc = () => {
    setLock(prevState => !prevState)
  }

  const imageUrl = lock
    ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'

  return (
    <MainContainer>
      <ImageTag src={imageUrl} alt={lock ? 'lock' : 'unlock'} />
      <TextPart>Your Device is {lock ? 'Locked' : 'Unlocked'}</TextPart>
      <Button onClick={setLockFnc}>{lock ? 'Unlock' : 'Lock'}</Button>
    </MainContainer>
  )
}

export default Unlock
