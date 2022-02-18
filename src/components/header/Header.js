import {
  HeaderSection,
  Section,
  Nav,
  Logo,
  Button,
  HeroSection,
  Image,
} from "./HeaderElement";
import LogoImg from '../../images/logo.svg'
import Img2 from '../../images/screen-mockups.svg'

export default function Header() {
  return (
    <HeaderSection>
      <Section>
        <Nav>
          <Logo src={LogoImg} alt="" />
          <Button>Try It Free</Button>
        </Nav>

        <HeroSection>
          <div>
            <h1>Build The Community Your Fans Will Love</h1>

            <p>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>

            <Button bg="#ff0099" color="#fff">
              Get Started For Free
            </Button>
          </div>

          <Image src={Img2} alt="" />
        </HeroSection>
      </Section>
    </HeaderSection>
  );
}
