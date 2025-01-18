import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import styles from './styles';
import {Button, Card, Form, Input, Typography} from "antd";
import FileBase64 from "react-file-base64";
import {createStory, updateStory} from "../../actions/stories";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";


const {Title} = Typography;

const StoryForm = ({selectedId, setSelectedId}) => {
  const story = useSelector(state => selectedId ? state.stories.find(story => story._id === selectedId) : null);

  const dispatch = useDispatch();

  const [form] = Form.useForm();

  // We get the username from the localStorage
  const user = JSON.parse(localStorage.getItem("profile"));
  const username = user?.result?.username;

  const onSubmit = async (formValues) => {
    if (selectedId === null) {
      await dispatch(createStory({ ...formValues, username }));
    } else {
      await dispatch(updateStory(selectedId, { ...formValues, username }));
      setSelectedId(null);
    }
    form.resetFields();
  }

  useEffect(() => {
    if (story) {
      form.setFieldsValue(story)
    } else {
      form.resetFields();
    }
  }, [story, form]);

  const reset = () => {
    form.resetFields();
    setSelectedId(null);
  }

  if (!user) {
    return (
      <Card style={styles.formCard}>
        <Title level={4}>
          <span style={styles.formTitle}>
            Welcome to Instaverse
          </span><br/>
          Please <Link to={"/authform"}>login</Link> or {" "}
          <Link to={"/authform"}>Register</Link> for sharing instant moment or ideas.
        </Title>
      </Card>
    )
  }

  return (
    <Card
      style={styles.formCard}
      title={
        <Title level={4} style={styles.formTitle}>
          {selectedId ? "Editing a story" : "Share a story"}
        </Title>
      }
    >
      <Form
        form={form}
        labelCol={{span: 6}}
        wrapperCol={{span: 16}}
        layout="horizontal"
        size="middle"
        onFinish={onSubmit}
      >
        <Form.Item label="Caption" name="caption" rules={[{required: true}]}>
          <Input.TextArea allowClear={true} autosize={{minRow: 2, maxRows: 6}}/>
        </Form.Item>
        <Form.Item label="Tags" name="tags">
          <Input.TextArea allowClear={true} autosize={{minRow: 2, maxRows: 6}}/>
        </Form.Item>
        <Form.Item label="Image" name="image" rules={[{required: true}]}>
          <FileBase64
            type={"file"}
            multiple={false}
            onDone={(e) => {
              form.setFieldsValue({
                image: e.base64
              })
            }}
          />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            span: 16,
            offset: 6
          }}
        >
          <Button
            type="primary"
            block
            htmlType="submit"
          >
            Share
          </Button>
        </Form.Item>
        { !selectedId ? null :
          <Form.Item
            wrapperCol={{
              span: 16,
              offset: 6
            }}
          >
            <Button
              type="primary"
              block
              htmlType="button"
              danger
              onClick={reset}
            >
              Discard
            </Button>
          </Form.Item>
        }
      </Form>
    </Card>
  );
};

export default StoryForm;