import React from "react";
import { Button, Input, Select } from "antd";
import Form from "../../other/Form/HooksForm";
import FormItem from "../../other/Form/HooksForm/formItem";

const OtherPage: React.FC = () => {
  return (
    <>
      <Form
        initialValues={{ card: "A" }}
        onFinish={(data: any) => {
          console.log("表单数据:", data);
        }}
        onReset={() => {
          console.log("重制表单成功");
        }}
      >
        <FormItem label="姓名" name="name">
          <Input></Input>
        </FormItem>
        <FormItem label="选择卡片-单选" name="Method">
          <Select
            defaultValue={"C"}
            style={{ width: "50px" }}
            options={[
              { value: "A", label: "A" },
              { value: "B", label: "B" },
              { value: "C", label: "C" },
            ]}
            onChange={(e: any) => {
              console.log(e);
            }}
          />
        </FormItem>

        <FormItem>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
          <Button style={{ marginLeft: 4 }} htmlType="reset">
            重置
          </Button>
        </FormItem>
      </Form>
    </>
  );
};

export default OtherPage;
