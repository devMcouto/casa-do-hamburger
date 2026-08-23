import { X, ChevronLeft, Trash2 } from "lucide-react";
import { formatterPrice } from "../utils/formatterPrice";

type cartItemType = {
  title: string;
  price: number;
  img: string;
  id: string;
};

const CartItem = ({ title, price, img, id }: cartItemType) => {
  return (
    <div className="flex items-center gap-3">
      <img src={`./${img}`} alt="" className="w-[100px] rounded-md" />

      <div className="flex-1">
        <p className="text-sm font-bold uppercase">{title}</p>
        <p className="text-sm font-bold text-[#848484]">
          {formatterPrice(price)}
        </p>
        <div className="mt-1 flex items-center gap-4">
          <ChevronLeft
            className="cursor-pointer rounded-md bg-[#C92A0E] p-1 text-[#F2DAAC]"
            size={25}
          />
          <p className="text-sm font-bold">1</p>
          <ChevronLeft
            className="rotate-180 cursor-pointer rounded-md bg-[#C92A0E] p-1 text-[#F2DAAC]"
            size={25}
          />
        </div>
      </div>

      <Trash2 size={18} className="cursor-pointer" onClick={() => alert(id)} />
    </div>
  );
};

export default CartItem;
