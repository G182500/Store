import ProductsTable from "@/components/ProductsTable";
import { getProducts } from "@/functions/crud/read/getProducts";
import { FaSlidersH, FaShare } from "react-icons/fa";

export default async function StockView() {
  const resp = await getProducts();
  let products = [];

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
          head={["ID", "NOME", "PREÇO", "CATEGORIA"]}
          body={products}
        ></ProductsTable>
      </div>
    </div>
  );
}

//Criar coluna EDIÇÃO do produto
/*const newEdit = (
        <td
          className="text-[10px] sm:text-sm text-center p-2 text-xs border border-white bg-[#1b1c1b]"
          key={`td${keyTd++}`}
        >
          <button>
            <Link
              href={`/product/${product.id}`}
              className="flex items-center justify-center"
            >
              <FaEdit size="16px" />
            </Link>
          </button>
        </td>
      );
      tdElements.push(newEdit);*/
