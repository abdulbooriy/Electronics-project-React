import React, {
  useState,
  type ChangeEvent,
  type FC,
  type FormEvent,
} from "react";
import { Button, Form, Input } from "antd";
import type { IElectronics } from "../../shared/types";

type FieldType = {
  product_name: string;
  price: number;
  image: string;
};

export const initialState: IElectronics = {
  id: 0,
  product_name: "",
  price: 0,
  image: "",
};

const Create: FC = () => {
  const [formData, setFormData] = useState<IElectronics>(initialState);
  const [data, setdata] = useState<IElectronics[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(name);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col items-center pt-20">
      <div className="max-w-[450px] w-full border-gray-300 rounded-lg p-4">
        <Form
          name="basic"
          autoComplete="off"
          layout="vertical"
          onSubmitCapture={handleSubmit}>
          <Form.Item<FieldType>
            label="Product Name"
            name="product_name"
            rules={[{ required: true, message: "Please enter product name!" }]}>
            <Input value={formData.product_name} onChange={handleChange} />
          </Form.Item>

          <Form.Item<FieldType>
            label="Product Price"
            name="price"
            rules={[
              { required: true, message: "Please enter product price!" },
            ]}>
            <Input type="number" />
          </Form.Item>

          <Form.Item<FieldType>
            label="Product Image"
            name="image"
            rules={[
              { required: true, message: "Please choose the product image!" },
            ]}>
            <Input type="file" />
          </Form.Item>

          <Form.Item label={null}>
            <Button className="w-full" type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default React.memo(Create);
