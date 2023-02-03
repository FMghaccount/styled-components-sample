import SocialIcons from './SocialIcons'
import { Container } from './styles/Container.styled'
import { Flex } from './styles/Flex.styled'
import { StyledFooter } from './styles/Footer.styled'

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <img src='./images/logo_white.svg' alt='' />

        <Flex>
          <ul>
            <li>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
            </li>
            <li>+۹۸-۱۲۳-۴۵۶۷۸۹۱</li>
            <li>example@huddle.com</li>
          </ul>
          <ul>
            <li>درباره ما</li>
            <li>فعالیت های ما</li>
            <li>سؤالات پر تکرار</li>
          </ul>

          <ul>
            <li>صفحه اصلی</li>
            <li>بلاگ</li>
            <li>تماس با ما</li>
          </ul>

          <SocialIcons />
        </Flex>

        <p>&copy; 2023 Huddle. All rights reserved</p>
      </Container>
    </StyledFooter>
  )
}
