import ProductsTable from "@/components/ProductsTable";
import { getProducts } from "@/functions/crud/read/getProducts";
import { FaSlidersH, FaShare } from "react-icons/fa";

export default async function StockView() {
  let products = [];
  const resp = await getProducts();

  if (resp.status == 200) {
    products = resp.data;
  } else {
    console.log("ERRO");
    //FAZER ALGO AQUI
  }

  return (
    <div className="rounded-md border-8 border-[#1b1b1b] bg-[#1b1b1b]">
      <div className="flex flex-row font-semibold gap-3 items-center p-2">
        <label className="text-white text-lg font-semibold pl-2">
          PRODUTOS EM ESTOQUE
        </label>
      </div>
      <div className="flex flex-col p-4 gap-4">
        <div className="flex flex-row gap-3">
          {/*Modal para filtrar conteúdo*/}
          <button className="flex flex-row items-center p-2 gap-1 text-[12px] sm:text-sm rounded-md bg-cyan-600">
            <FaSlidersH size="16px" /> Filtrar tabela
          </button>
          {/*Modal para exportar conteúdo como planilha ou pdf*/}
          <button className="flex flex-row items-center p-2 gap-1 text-[12px] sm:text-sm rounded-md bg-cyan-600">
            <FaShare size="16px" /> Exportar conteúdo
          </button>
        </div>
        {/*Tabela de Produtos*/}
        <ProductsTable
          head={["NOME", "PREÇO", "CATEGORIA"]}
          body={products}
        ></ProductsTable>
      </div>
    </div>
  );
}
