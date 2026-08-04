import { useState } from "react";
import CardPedido from "../components/CardPedido";

const Pedidos = () => {
  const [category, setCategory] = useState("Pendente");

  const handleChangeCategory = (newCategory: string) => {
    setCategory(newCategory);
  };
  const getCategoryClass = (categoryName: string) => {
    const elementoSelecionado =
      "md:text-md flex h-7 w-24 cursor-pointer items-center justify-center rounded-md border-1 border-[#F2DAAC] bg-[#F2DAAC] text-sm font-bold text-[#161410] md:h-9 md:w-32";
    const elementoNaoSelecionado =
      "md:text-md flex h-7 w-24 cursor-pointer items-center justify-center rounded-md border-1 border-[#F2DAAC] bg-[#161410] text-sm font-bold text-[#F2DAAC] hover:bg-[#F2DAAC] hover:text-[#161410] md:h-9 md:w-32";

    if (category === categoryName) {
      return elementoSelecionado;
    } else {
      return elementoNaoSelecionado;
    }
  };

  return (
    <div className="mx-auto w-full px-3 text-white md:w-[737px] md:px-0">
      <div className="mt-1 mb-2 flex gap-4 md:my-4">
        <div
          onClick={() => handleChangeCategory("Pendente")}
          className={getCategoryClass("Pendente")}
        >
          Pendente
        </div>
        <div
          onClick={() => handleChangeCategory("Retirado")}
          className={getCategoryClass("Retirado")}
        >
          Retirado
        </div>
        <div
          onClick={() => handleChangeCategory("Cancelado")}
          className={getCategoryClass("Cancelado")}
        >
          Cancelado
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3">
        <CardPedido
          id={2}
          name="Matheus Couto"
          date="03/08/2026"
          orderTime="17:00"
          total={124.55}
        />
      </div>
    </div>
  );
};

export default Pedidos;
