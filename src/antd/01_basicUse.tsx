import React, { useEffect } from "react";
import {
  Button,
  Checkbox,
  DatePicker,
  Divider,
  Form,
  Input,
  Select,
  Space,
  Typography,
} from "antd";
import FormFiledSet from "../compony/form/FormFiledSet";

const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

// type FieldType = {
//   username?: string;
//   password?: string;
//   remember?: string;
// };

/**
 * 基本的表单数据域控制展示，包含布局、初始化、验证、提交。
 *
 * @returns
 */
const BasicUse: React.FC = () => {
  const [form] = Form.useForm();
  const watchEmail: string =
    Form.useWatch("email", form) ?? "2332545@Gmail.com";

  useEffect(() => {
    console.log("useWatch email", watchEmail);
  }, [watchEmail]);
  return (
    <>
      <Form
        name="basic"
        form={form}
        // layout="inline"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <FormFiledSet cols={3} title="Basick😊">
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Age"
            name="age"
            rules={[{ required: false, message: "Please input your age!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name={["FormData", "password"]}
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>
        </FormFiledSet>

        <FormFiledSet cols={3} title="FormData🤔">
          <Form.Item
            label="Address"
            name={["FormData", "address"]}
            rules={[{ required: true, message: "Please input your address!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Phone"
            name="phone"
            rules={[{ required: false, message: "Please input your phone!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
        </FormFiledSet>

        <FormFiledSet cols={2} title="其他表达控件其他表达控件🐤">
          <Form.Item name="demo" label="Demo">
            <Select
              options={[
                { value: "jack", label: "Jack" },
                { value: "lucy", label: "Lucy" },
                { value: "Yiminghe", label: "yiminghe" },
                { value: "disabled", label: "Disabled", disabled: true },
              ]}
            />
          </Form.Item>
          <Form.Item name="currentTime">
            <DatePicker />
          </Form.Item>
        </FormFiledSet>

        <FormFiledSet cols={2} title="Form.useWatch">
          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, message: "Please input your Email!" }]}
          >
            <Input defaultValue={watchEmail} />
          </Form.Item>
          <Form.Item style={{ marginTop: -16 }}>
            <Typography style={{ width: "150%" }}>
              <pre>Name Value: {watchEmail}</pre>
            </Typography>
          </Form.Item>
        </FormFiledSet>

        <Space>
          <Button type="primary" style={{ height: 50 }} htmlType="submit">
            Submit
            <br />
            htmlType为submit，onFinish只在Form内有效
          </Button>

          <Button
            type="primary"
            style={{ height: 50 }}
            onClick={() => {
              form.setFieldsValue({ username: "morning" });
            }}
          >
            填充用户名
            <br />
            setFieldsValue
          </Button>
          <Button
            type="primary"
            style={{ height: 50 }}
            onClick={() => {
              form.setFieldValue("age", 23);
            }}
          >
            填充年龄
            <br />
            setFieldValue
          </Button>
        </Space>
      </Form>
    </>
  );
};

export default BasicUse;
