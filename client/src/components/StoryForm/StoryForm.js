import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import styles from './styles';
import {Button, Card, Form, Input, Typography} from "antd";
import FileBase64 from "react-file-base64";
import {createStory, updateStory} from "../../actions/stories";
import {useSelector} from "react-redux";


const {Title} = Typography;

const StoryForm = ({selectedId, setSelectedId}) => {
  const story = useSelector(state => selectedId ? state.stories.find(story => story._id === selectedId) : null);

  const dispatch = useDispatch();

  const [form] = Form.useForm();

  const onSubmit = async (formValues) => {
    if (selectedId === null) {
      await dispatch(createStory(formValues));
    } else {
      await dispatch(updateStory(selectedId, formValues));
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
        <Form.Item label="Username" name="username" rules={[{required: true}]}>
          <Input allowClear={true}/>
        </Form.Item>
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