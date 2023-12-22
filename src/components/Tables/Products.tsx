import { FaEdit } from "react-icons/fa";
import Product from "@/models/Product";
import Link from "next/link";

interface ProductsTableProps {
  head: string[];
  body: Product[];
}

export default async function ProductsTable(props: ProductsTableProps) {
  let keyTh = 1;
  let keyTr = 1;
  let keyTd = 1;

  //Array para armazenar elementos <th> - HEAD
  let thHead: JSX.Element[] = [];
  props.head.forEach((value: string) => {
    thHead.push(
      <th
        key={keyTh++}
        className="text-[11px] sm:text-sm p-2 border border-white bg-[#333333]"
      >
        {value}
      </th>
    );
  });
  thHead.push(
    <th
      key={keyTh++}
      className="text-[11px] sm:text-sm p-2 border border-white bg-[#333333] w-16"
    >
      EDITAR
    </th>
  )

  //Arrays para armazenar elementos <tr> e <td> - BODY
  let trElements: JSX.Element[] = [];
  let tdElements: JSX.Element[] = [];
  props.body.forEach((product: Product) => {
    //Coluna NOME do produto
    const newName = (
      <td
        className="text-[10px] sm:text-sm align-middle text-center p-2 border border-white bg-[#1b1c1b]"
        key={`td${keyTd++}`}
      >
        {product.nome}
      </td>
    );
    tdElements.push(newName);

    //Coluna CATEGORIA do produto
    const newCategory = (
      <td
        className="text-[10px] sm:text-sm align-middle text-center p-2 border border-white bg-[#1b1c1b]"
        key={`td${keyTd++}`}
      >
        {product.tipo}
      </td>
    );
    tdElements.push(newCategory);
    //Coluna PREÇO do produto
    const newPrice = (
      <td
        className="text-[10px] sm:text-sm align-middle text-center p-2 border border-white bg-[#1b1c1b]"
        key={`td${keyTd++}`}
      >
        R$ {product.preco}
      </td>
    );
    tdElements.push(newPrice);
    //Coluna EDITAR do produto
    const newEdit = (
      <td
        className="align-middle text-center p-2 border border-white bg-[#1b1c1b] w-16"
        key={`td${keyTd++}`}
      >
        <button>
          <Link href={`/product/${product.id}`}>
            <FaEdit size="18px"></FaEdit>
          </Link>
        </button>
      </td>
    );
    tdElements.push(newEdit);

    //Adicionar colunas em linha
    const newTr = <tr key={`tr${keyTr++}`}>{tdElements}</tr>;
    trElements.push(newTr);
    tdElements = [];
  });

  return (
    <table className="w-full">
      <thead>
        <tr>{thHead}</tr>
      </thead>
      <tbody>{trElements}</tbody>
    </table>
  );
}