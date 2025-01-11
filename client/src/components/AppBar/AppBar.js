import React from 'react';
import styles from "./styles";
import Logo from "../../images/Instaverse.png";
import Title from "antd/es/skeleton/Title";
import {Header} from "antd/es/layout/layout";
import { Layout, Image, Avatar, Typography, Button } from "antd";

const AppBar = () => {
  return (
    <Header style={styles.header}>
      <Image style={styles.image} preview={false} src={Logo} width={45}/>
      &nbsp;
      <Title style={styles.title}>Instaverse</Title>
    </Header>
  );
};

export default AppBar;