import React from 'react';
import styles from "./styles";
import Logo from "../../images/Instaverse.png";
import {Header} from "antd/es/layout/layout";
import {Avatar, Button, Image, Typography} from "antd";
import {Link} from "react-router-dom";
const {Title} = Typography;

const AppBar = () => {
  const user = null;

  return (
    <Header style={styles.header}>
      <Link to="/">
        <div style={styles.homeLink}>
          <Image  style={styles.image} preview={false} src={Logo} width={45} />
          &nbsp;
          <Title  style={styles.title}>Instaverse</Title>
        </div>
      </Link>
      { !user ? (
        <Link to="authform">
          <Button htmlType={'button'} style={styles.login}>
            Log In
          </Button>
        </Link>
      ) : (
        <div style={styles.userInfo}>
          <Avatar style={styles.avatar} alt={'username'} size={'large'}>
            U
          </Avatar>
          <Title style={styles.title} level={4}>
            John Doe
          </Title>
          <Button htmlType={'button'}>
            Log Out
          </Button>
        </div>
      )
      }
    </Header>
  );
};

export default AppBar;