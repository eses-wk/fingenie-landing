import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import { MiddleBlockSection, Content, ContentWrapper } from "./styles";
import PngImg from "../../common/PngImg";
import ImageBlock from '../../common/ImageBlock';
import React from 'react';
import ReactPlayer from 'react-player/lazy';

interface MiddleBlockProps {
  title: string;
  content?: string;
  t: TFunction;
}
// const MiddleTitle = ({ title, content, button, t }: MiddleBlockProps) => {
const MiddleTitle = ({ title, content, t }: MiddleBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <MiddleBlockSection>
      <Slide direction="left" triggerOnce>
        <Row justify="center" align="middle">
          <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <h6>{t(title)}</h6>
              {content && <Content>{t(content)}</Content>}
              <ReactPlayer url='https://youtu.be/KKtmzRJ44rE' controls={true} width="100%"/>
              {/* {button && (
                <Button name="submit" onClick={() => scrollTo("mission")}>
                  {t(button)}
                </Button>
              )} */}
            </Col>
          </ContentWrapper>
        </Row>
      </Slide>
    </MiddleBlockSection>
  );
};

export default withTranslation()(MiddleTitle);
