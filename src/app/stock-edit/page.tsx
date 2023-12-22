import GenericCard from "@/components/Cards/GenericCard";
import ProductsTable from "@/components/Tables/Products";
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
    <GenericCard title="Estoque">
      <div className="flex flex-col justify-start p-4 gap-4 w-full">
        {/*Tabela de Produtos*/}
        <ProductsTable
          head={["NOME", "CATEGORIA", "PREÇO"]}
          body={products}
        />
        <div className="flex flex-row gap-3">
          {/*Modal para filtrar conteúdo*/}
          <button className="flex flex-row items-center p-2 gap-1 text-[12px] sm:text-sm rounded-md bg-cyan-600">
            <FaSlidersH size="16px" /> Filtrar tabela
          </button>
          {/*Modal para exportar conteúdo como planilha ou pdf*/}
          <button className="flex flex-row items-center p-2 gap-1 text-[12px] sm:text-sm rounded-md bg-cyan-600">
            <FaShare size="16px" /> Exportar arquivo
          </button>
        </div>
      </div>
    </GenericCard>
  );
}
