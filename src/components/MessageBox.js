import { CallToAction, StyledMessageBox } from "./styles/MessageBox.styled"
import { Button } from "./styles/Button.styled"

const MessageBox = () => {
  return (
    <StyledMessageBox>
      <CallToAction>
        <h2 class="subtitle">آماده هستی تا جامعه خودت رو بسازی؟</h2>
        <Button bg='#ff0099' color='#fff'>
          شروع رایگان است !
        </Button>
      </CallToAction>
    </StyledMessageBox>
  )
}

export default MessageBox