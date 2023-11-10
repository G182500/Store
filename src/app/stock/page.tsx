import Product from "@/models/Product";
import { getProducts } from "@/functions/crud/getProducts";
import { FaEdit } from "react-icons/fa";
import Link from "next/link";

export default async function StockView() {
  const resp = await getProducts();

  //Arrays para armazenarem elementos <tr> e <td>
  const trElements: JSX.Element[] = [];
  let tdElements: JSX.Element[] = [];

  if (resp.status == 200) {
    const products = resp.data;
    let keyTr = 1;
    let keyTd = 1;

    //Gerar o conteúdo da tabela baseado no retorno do Backend
    products.map((product: Product) => {
      //Criar coluna ID do produto
      const newID = (
        <td
          className="text-[12px] sm:text-sm align-middle text-center p-1 border border-white bg-[#1b1c1b]"
          key={`td${keyTd++}`}
        >
          {product.id}
        </td>
      );
      tdElements.push(newID);
      //Criar coluna NOME do produto
      const newName = (
        <td
          className="text-[12px] sm:text-sm align-middle text-center p-1 border border-white bg-[#1b1c1b]"
          key={`td${keyTd++}`}
        >
          {product.nome}
        </td>
      );
      tdElements.push(newName);
      //Criar coluna CATEGORIA do produto
      const newCategory = (
        <td
          className="text-[12px] sm:text-sm align-middle text-center p-1 text-xs border border-white bg-[#1b1c1b]"
          key={`td${keyTd++}`}
        >
          {product.tipo}
        </td>
      );
      tdElements.push(newCategory);
      //Criar coluna EDIÇÃO do produto
      const newEdit = (
        <td
          className="text-[12px] sm:text-sm align-middle text-center p-1 text-xs border border-white bg-[#1b1c1b]"
          key={`td${keyTd++}`}
        >
          <button>
            {/*Rota dinâmica: product/[id]/page.tsx */}
            <Link
              href={`/product/${product.id}`}
              className="flex items-center justify-center"
            >
              <FaEdit size="16px" />
            </Link>
          </button>
        </td>
      );
      tdElements.push(newEdit);

      //Adicionar colunas do produto
      const newTr = <tr key={`tr${keyTr++}`}>{tdElements}</tr>;
      trElements.push(newTr);
      tdElements = [];
    });
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
      <div className="p-4">
        <table className="table w-full">
          <thead>
            <tr>
              <th className="text-[15px] sm:text-sm align-middle text-center p-1 text-xs border border-white bg-[#333333]">
                ID
              </th>
              <th className="text-[15px] sm:text-sm align-middle text-center p-1 text-xs border border-white bg-[#333333]">
                NOME
              </th>
              <th className="text-[15px] sm:text-sm align-middle text-center p-1 text-xs border border-white bg-[#333333]">
                CATEGORIA
              </th>
              <th className="text-[15px] sm:text-sm align-middle text-center p-1 text-xs border border-white bg-[#333333]">
                EDITAR
              </th>
            </tr>
          </thead>
          <tbody id={"products"}>{trElements}</tbody>
        </table>
      </div>
    </div>
  );
}
