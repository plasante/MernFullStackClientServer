import React from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Form, Input, Button, Card, Layout, Typography} from "antd";
import { login, signup } from '../../actions/authentication';
import styles from './styles';
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";

const { Title } = Typography;

const AuthForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isLogin, setIsLogin] = React.useState(false);

  const [form] = Form.useForm();

  const onSubmit = (formValues) => {
    if (isLogin) {
      console.log("Login values: ", formValues);
      dispatch(login(formValues, navigate));
    } else {
      console.log("Register values: ", formValues);
      dispatch(signup(formValues, navigate));
    }
  }

  const switchMode = () => {
    setIsLogin(!isLogin);
  }

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
                name="name"
                rules={[{required: true},{message: 'Username is required'}]}
              >
                <Input prefix={<UserOutlined/>} placeholder="Username" />
              </Form.Item>

            </>
          )}
          <Form.Item
            name="email"
            rules={[{required: true},{message: 'Valid Email is required'}]}
          >
            <Input prefix={<MailOutlined/>} placeholder="email@example.com" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{required: true},{message: 'Please input your password'}]}
          >
            <Input.Password type={'password'} prefix={<LockOutlined/>} placeholder="password" />
          </Form.Item>
          {isLogin || (
            <Form.Item
              name="confirmPassword"
              rules={[{required: true},{message: 'Please repeat your password'}]}
            >
              <Input.Password type={'password'} prefix={<LockOutlined/>} placeholder="ConfirmPassword" />
            </Form.Item>
          )}
          <Form.Item>
            <Button htmlType={'submit'} type={'primary'}>
              {isLogin ? "Login" : "Register"}
            </Button>
            <span style={{ margin: "0px 10px 20px 0px"}}></span>
            <Button type={'link'} onClick={switchMode}>
              {isLogin ? "Register" : "Have an account"}
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Layout>
  );
};

export default AuthForm;