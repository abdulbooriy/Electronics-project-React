import { memo, type FC } from "react";
import type { IElectronics } from "../../shared/types";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Card } from "antd";

const { Meta } = Card;

interface IProps {
  data?: IElectronics[];
}

const Home: FC<IProps> = ({ data }) => {
  return (
    <div className="flex flex-wrap gap-5 justify-center mb-10">
      {data?.map((product) => (
        <Card
          key={product.id}
          style={{ width: 350 }}
          cover={
            <img
              className="h-[250px] object-cover"
              src={product?.image}
              alt={product?.product_name}
            />
          }
          actions={[
            <EditOutlined key="edit" style={{ fontSize: "20px" }} />,
            <DeleteOutlined key="delete" style={{ fontSize: "20px" }} />,
          ]}>
          <Meta
            className="text-center"
            title={
              <div className="text-2xl font-[Inter]">
                {product.product_name}
              </div>
            }
            description={
              <div className="text-[18px] font-medium font-[Inter] flex justify-center">
                <span className="flex gap-1 text-black">
                  Product price:{" "}
                  {<p className="text-gray-600">{product?.price}.000</p>}
                </span>
              </div>
            }
          />
        </Card>
      ))}
    </div>
  );
};

export default memo(Home);
