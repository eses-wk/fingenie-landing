import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import { MiddleBlockSection, Content, ContentWrapper } from "./styles";
import PngImg from "../../common/PngImg";
import ImageBlock from '../../common/ImageBlock';


interface MiddleBlockProps {
  title: string;
  content: string;
  content2: string;
  img1:string;
  img2:string;
  img3:string;
  img4:string;
  img5:string;
  // button: string;
  t: TFunction;
}
// const MiddleBlock = ({ title, content, button, t }: MiddleBlockProps) => {
const MiddleBlock = ({ title, content,content2, img1, img2, img3, img4, img5, t }: MiddleBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <MiddleBlockSection>
      <Slide direction="up" triggerOnce>
        <Row justify="center" align="middle">
          <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <h6>{t(title)}</h6>
              <Content>{t(content)}</Content>
              {/* {button && (
                <Button name="submit" onClick={() => scrollTo("mission")}>
                  {t(button)}
                </Button>
              )} */}
              <ImageBlock width="100%" height="100%" >
                <PngImg src={img1} width="80px" height="80px" />
                <PngImg src={img2} width="80px" height="80px" />
                <PngImg src={img3} width="80px" height="80px" />
                <PngImg src={img4} width="80px" height="80px" />
               </ImageBlock>
              <Content>{t(content2)}</Content>
              <PngImg src={img5} width="100%" height="100%" />
            </Col>
          </ContentWrapper>
        </Row>
      </Slide>
    </MiddleBlockSection>
  );
};

export default withTranslation()(MiddleBlock);
