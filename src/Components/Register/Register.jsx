import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Mentions,
  Segmented,
  Select,
  TreeSelect,
} from 'antd';
import Password from 'antd/es/input/Password';
import axios from 'axios';
import { useState } from 'react';
const { RangePicker } = DatePicker;
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};
const Register = () => {


  
const body ={
  name:name,
  email:email,
  phone:phone,
  Password:Password,
  role:role
};
 const    handlesubmit = (values)=> {
setLoading(true) 

    axios.post('https://proxstream.online/public/register',values)
  .then(response=> {
    alert("registration successfull");
  })
  .catch(error =>{
    alert("something went wrong",error);
  }
  )
  .finally(()=>{
    setLoading(false);
  }
  );
}


const[loading,setLoading]=useState(false);
  const [form] = Form.useForm();
  const variant = Form.useWatch('variant', form);
  return (
    <>
  
    <h1>Registration page</h1>
    <Form
      {...formItemLayout}
      form={form}
      onFinish={handlesubmit}
      variant={variant || 'filled'}
      style={{ maxWidth: 600 }}
      initialValues={{ variant: 'filled' }}
    >
   
      <Form.Item label="Full Name"     name="name" rules={[{ required: true, message: 'Please enter full name!' }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Email"    name="email" rules={[{ required: true, message: 'Please enter Email!' }]}>
        <Input />
      </Form.Item>
      <Form.Item label="role"    name="role" rules={[{ required: true, message: 'Please enter role!' }]}>
        <Input />
      </Form.Item>

      <Form.Item
        label="phone"
        
        name="phone"
        rules={[{ required: true, message: 'Please enter Mobile Number!' }]}
      >
        <InputNumber style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item
        label="password"
        name="password"
       
        rules={[{ required: true, message: 'Please Enter Address!' }]}
      >
        <Input.TextArea />
      </Form.Item>
      <Form.Item label={null}>
        <Button type="primary" htmlType="register" { ...loading ? {disabled:true}:{}}>
          {loading ? 'registering...' : 'register'}
          
        </Button>
      </Form.Item>
    </Form>

      </>
  );
};
export default Register;