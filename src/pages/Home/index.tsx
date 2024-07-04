import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import DemoContent1 from "../../content/Demo1.json";
import DemoContent2 from "../../content/Demo2.json";
import DemoContent3 from "../../content/Demo3.json";
import DemoTitle from "../../content/DemoTitle.json";
import { Row, Col } from "antd";
import styled from "styled-components";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const DemoBlock = lazy(() => import("../../components/DemoBlock"));
const MiddleTitle = lazy(() => import("../../components/MiddleTitle"));


const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        direction="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="developer.svg"
        id="intro"
      />
      <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        content2={MiddleBlockContent.text2}
        img1={MiddleBlockContent.img1}
        img2={MiddleBlockContent.img2}
        img3={MiddleBlockContent.img3}
        img4={MiddleBlockContent.img4}
        img5={MiddleBlockContent.img5}
        // button={MiddleBlockContent.button}
      />
      {/* <Col lg={11} md={11} sm={12} xs={13}>
        <ContentWrapper>
              <h6>{'What if there is a better way!'}</h6>
             
        </ContentWrapper>
      </Col> */}
      <MiddleTitle
        title={DemoTitle.title}
        // button={MiddleBlockContent.button}
      />


      <DemoBlock
        direction="left"
        title={DemoContent1.title}
        content={DemoContent1.text}
        // section={DemoContent1.section}
        icon={DemoContent1.icon}
        id="demo1"
      />
      <DemoBlock
        direction="right"
        title={DemoContent2.title}
        content={DemoContent2.text}
        // section={DemoContent1.section}
        icon="demo2.png"
        id="demo2"
      />
      <DemoBlock
        direction="left"
        title={DemoContent3.title}
        content={DemoContent3.text}
        // section={DemoContent1.section}
        icon={DemoContent3.icon}
        id="demo3"
      />
      

      {/* <ContentBlock
        direction="right"
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        icon="graphs.svg"
        id="about"
      />
      <ContentBlock
        direction="left"
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        icon="graphs.svg"
        id="about"
      /> */}
      <ContentBlock
        direction="right"
        title={MissionContent.title}
        content={MissionContent.text}
        button={MissionContent.button}
        icon="product-launch.svg"
        id="mission"
      />
      {/* <ContentBlock
        direction="left"
        title={ProductContent.title}
        content={ProductContent.text}
        button={ProductContent.button}
        icon="waving.svg"
        id="product"
      /> */}
       {/*
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
       */}
    </Container>
  );
};

export default Home;
