import React from 'react';
import { Layout, Image, Typography } from 'antd';
import Logo from './images/Instaverse.png';
import {Footer} from "antd/es/layout/layout";
import Home from "./components/Home";
const { Header } = Layout;
const { Title } = Typography;

const App = () => {
  return (
    <Layout>
      <Header>
        <Image width={90} preview={false} src={Logo} />
        <Title style={{ color: 'black' }}>Instaverse</Title>
      </Header>
      <Home/>
      <Footer>2025 Instaverse</Footer>
    </Layout>
  );
};

export default App;