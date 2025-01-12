import React from 'react';
import { Form, Input, Button, Card, Layout, Typography} from "antd";

import styles from './styles';
import {UserOutlined, LockOutlined, MailOutlined} from "@ant-design/icons";

const {Title} = Typography;

const AuthForm = () => {
  const user = null;

  const [form] = Form.useForm();

  const onSubmit = (e) => {

  }

  const isLogin = null;

  return (
    <Layout style={styles.container}>
      <Card
        style={styles.card}
        title={
          <Title level={4} style={{ textAlign: "center"}}>
            { isLogin ? "Login to" : "Join" }
          </Title>
        }
      >
        <Form
          name={'authForm'}
          form={form}
          size={'large'}
          wrapperCol={{span: 20, offset: 2}}
          onFinish={onSubmit}
        >
          {isLogin || (
            <>
              <Form.Item
                name="username"
                rules={[{required: true},{message: 'Username is required'}]}
              >
                <Input prefix={<UserOutlined/>} placeholder="Username" />
              </Form.Item>

            </>
          )
          }
        </Form>
      </Card>
    </Layout>
  );
};

export default AuthForm;