import {
  useState,
  memo,
  type ChangeEvent,
  type FC,
  type FormEvent,
} from "react";
import { Button, Form, Input } from "antd";
import type { IElectronics } from "../../shared/types";
import { Typography } from "antd";

const { Title } = Typography;

export const initialState: IElectronics = {
  id: null,
  product_name: "",
  price: 0,
  image: "",
};

const Create: FC = () => {
  const [formData, setFormData] = useState<IElectronics>(initialState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "price" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    formData.id = new Date().getTime();

    setFormData(initialState);
  };

  return (
    <div className="flex flex-col items-center pt-20">
      <div className="max-w-[450px] w-full border border-gray-400 rounded-lg p-4">
        <Title className="text-center" level={3}>Create Electronics</Title>
        <Form
          name="basic"
          autoComplete="off"
          layout="vertical"
          style={{marginTop: "30px"}}
          onSubmitCapture={handleSubmit}>
          <Form.Item<IElectronics>
            label="Product Name"
            name="product_name"
            rules={[{ required: true, message: "Please enter product name!" }]}>
            <Input
              name="product_name"
              value={formData.product_name}
              onChange={handleChange}
            />
          </Form.Item>

          <Form.Item<IElectronics>
            label="Product Price"
            name="price"
            rules={[
              { required: true, message: "Please enter product price!" },
            ]}>
            <Input
              name="price"
              type="number"
              value={formData.price}
              onChange={handleChange}
            />
          </Form.Item>

          <Form.Item<IElectronics>
            label="Product Image"
            name="image"
            rules={[
              { required: true, message: "Please choose the product image!" },
            ]}>
            <Input
              name="image"
              type="file"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  const imageUrl = URL.createObjectURL(file);
                  setFormData((prev) => ({ ...prev, image: imageUrl }));
                }
              }}
            />
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

export default memo(Create);
