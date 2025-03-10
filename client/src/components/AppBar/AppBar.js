import React, {useCallback, useEffect, useState} from 'react';
import styles from "./styles";
import Logo from "../../images/Instaverse.png";
import {Header} from "antd/es/layout/layout";
import {Avatar, Button, Image, Typography} from "antd";
import {Link , useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LOGOUT } from "../../constants/actionTypes";
import decode from 'jwt-decode';

const {Title} = Typography;

const AppBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const token = user?.token;

  const logout = useCallback(() => {
    dispatch({ type: LOGOUT });
    navigate("/authform");
    setUser(null);
  }, [dispatch, navigate]);

  useEffect(() => {

    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        logout();
      }
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location, token, logout ]);



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
            {user?.result?.name?.charAt(0).toUpperCase()}
          </Avatar>
          <Title style={styles.title} level={4}>
            {user?.result?.name}
          </Title>
          <Button onClick={logout} htmlType={'button'}>
            Log Out
          </Button>
        </div>
      )
      }
    </Header>
  );
};

export default AppBar;