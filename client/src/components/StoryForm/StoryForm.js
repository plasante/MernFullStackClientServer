import React from 'react';
import styles from './styles';
import { Card, Form, Input, Typography } from "antd";

const { Title } = Typography;

const StoryForm = () => {
  const [form] = Form.useForm();

  const onSubmit = (e) => {

  }

  return (
    <Card
      style={styles.formCard}
      title={
        <Title level={4} style={styles.formTitle}>
        </Title>
      }
    >
      <Form
        form={form}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 16 }}
        layout="horizontal"
        size="middle"
        onFinish={onSubmit}
      >
        <Form.Item label="Username" name="username" roles={[{required: true}]}>
          <Input allowClear={true} />
        </Form.Item>
        <Form.Item label="Caption" name="caption" roles={[{required: true}]}>
          <Input.TextArea allowClear={true} autosize={{minRow: 2, maxRows: 6}} />
        </Form.Item>
        <Form.Item label="Tags" name="tags">
          <Input.TextArea allowClear={true} autosize={{minRow: 2, maxRows: 6}} />
        </Form.Item>
      </Form>
    </Card>
  );
};

export default StoryForm;