import React, {
  useState,
  type ChangeEvent,
  type FC,
  type FormEvent,
} from "react";
import { Button, Form, Input } from "antd";
import type { IElectronics } from "../../shared/types";
import Home from "../home/Home";

export const initialState: IElectronics = {
  id: null,
  product_name: "",
  price: 0,
  image: "",
};

const Create: FC = () => {
  const [formData, setFormData] = useState<IElectronics>(initialState);
  const [data, setdata] = useState<IElectronics[]>([]);

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
    setdata((p) => [...p, formData]);

    setFormData(initialState);
  };

  return (
    <div className="flex flex-col items-center pt-20">
      <div className="max-w-[450px] w-full border-gray-300 rounded-lg p-4">
        <Form
          name="basic"
          autoComplete="off"
          layout="vertical"
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
      {<Home data={data} />}
    </div>
  );
};

export default React.memo(Create);
