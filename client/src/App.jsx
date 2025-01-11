import React from 'react';
import { Layout } from "antd";
import Home from './components/Home';
import styles from './styles';
import AppBar from "./components/AppBar";
const {Footer } = Layout;

const App = () => {
  return (
    <Layout style={styles.layout}>
      <AppBar/>
      <Home />
      <Footer  style={styles.footer}>2021 Instaverse</Footer>
    </Layout>
  )
}

export default App;