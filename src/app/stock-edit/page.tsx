import Header from "@/components/Header";
import Product from "@/model/Product";
import { getProducts } from "@/functions/getProducts";
import { FaEdit } from "react-icons/fa";

export default async function ProductsEdit() {
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
          className="text-[12px] sm:text-sm align-middle text-center p-1 border border-white"
          key={`td${keyTd++}`}
        >
          {product.id}
        </td>
      );
      tdElements.push(newID);
      //Criar coluna NOME do produto
      const newName = (
        <td
          className="text-[12px] sm:text-sm align-middle text-center p-1 border border-white"
          key={`td${keyTd++}`}
        >
          {product.nome}
        </td>
      );
      tdElements.push(newName);
      //Criar coluna CATEGORIA do produto
      const newCategory = (
        <td
          className="text-[12px] sm:text-sm align-middle text-center p-1 text-xs border border-white"
          key={`td${keyTd++}`}
        >
          {product.tipo}
        </td>
      );
      tdElements.push(newCategory);
      //Criar coluna EDIÇÃO do produto
      const newEdit = (
        <td
          className="text-[12px] sm:text-sm align-middle text-center p-1 text-xs border border-white"
          key={`td${keyTd++}`}
        >
          <button>
            <FaEdit size="16px" />
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
  }

  return (
    <div className="flex flex-col gap-4 lg:p-4 w-full lg:ml-80">
      <Header />
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
                <th className="text-[14px] sm:text-sm align-middle text-center p-1 text-xs border border-white bg-[#2b2e2d]">
                  Código
                </th>
                <th className="text-[14px] sm:text-sm align-middle text-center p-1 text-xs border border-white bg-[#2b2e2d]">
                  Nome
                </th>
                <th className="text-[14px] sm:text-sm align-middle text-center p-1 text-xs border border-white bg-[#2b2e2d]">
                  Categoria
                </th>
                <th className="text-[14px] sm:text-sm align-middle text-center p-1 text-xs border border-white bg-[#2b2e2d]">
                  Editar
                </th>
              </tr>
            </thead>
            <tbody id={"products"}>{trElements}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
