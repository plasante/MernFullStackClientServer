import React from 'react';
import { Layout, Image, Typography } from 'antd';
import Logo from './images/Instaverse.png';

const { Header } = Layout;
const { Title } = Typography;

const App = () => {
  return (
    <Layout>
      <Header>
        <Image width={45} preview={false} src={Logo} />
        <Title style={{ color: 'black' }}>Instaverse</Title>
      </Header>
    </Layout>
  );
};

export default App;