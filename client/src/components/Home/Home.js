import React from 'react';
import StoryList from '../StoryList';
import StoryForm from '../StoryForm';
import { Layout } from 'antd';

const { Sider, Content } = Layout;

const Home = () => {
  return (
    <div>
      <Layout>
        <Sider width={400}>
          <StoryForm/>
        </Sider>
        <Content>
          <StoryList/>
        </Content>
      </Layout>
    </div>
  );
};

export default Home;