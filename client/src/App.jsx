import React from 'react';
import { Layout, Image, Typography } from 'antd';
import Logo from './images/Instaverse.png';
import {Footer} from "antd/es/layout/layout";
import Home from "./components/Home";
import styles from './styles';

const { Header } = Layout;
const { Title } = Typography;

const App = () => {
  return (
    <Layout style={styles.layout}>
      <Header style={styles.header}>
        <Image style={styles.image} width={90} preview={false} src={Logo} />
        <Title style={styles.title}>Instaverse</Title>
      </Header>
      <Home/>
      <Footer style={styles.footer}>2025 Instaverse</Footer>
    </Layout>
  );
};

export default App;