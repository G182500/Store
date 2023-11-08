import Header from "@/components/Header";
import { getProducts } from "@/functions/getProducts";

export default async function ProductsEdit() {
  //Gerar conteúdo da tabela
  const trElements: JSX.Element[] = []; //Array para armazenar elementos <tr>
  let tdElements: JSX.Element[] = [];
  let keyTr = 1;
  let keyTd = 1;

  const resp = await getProducts();
  console.log(resp);

  return (
    <div className="flex flex-col gap-4 lg:p-4 w-full lg:ml-80">
      <Header />
      <div className="rounded-md border-8 border-[#1b1b1b]">
        <div className="flex flex-row font-semibold gap-3 items-center p-2 bg-[#1b1b1b]">
          <label className="text-white text-xl font-semibold">
            Editar produtos em estoque
          </label>
        </div>
        <div className="p-4"></div>
      </div>
    </div>
  );
}

/*
  if (typeof resp !== "string") {
    const products: Product[] = resp.data;

    for (const product of products) {
      //Coluna do nome
      const newName = (
        <td
          className="align-middle text-center p-1 text-xs border border-black bg-[#FFEFD5]"
          key={`td${keyTd++}`}
        >
          {product.nome}
        </td>
      );
      tdElements.push(newName);

      //Coluna do tipo
      const newType = (
        <td
          className="align-middle text-center p-1 text-xs border border-black bg-[#FFEFD5]"
          key={`td${keyTd++}`}
        >
          {product.tipo}
        </td>
      );
      tdElements.push(newType);

      const newTr = <tr key={`tr${keyTr++}`}>{tdElements}</tr>;
      trElements.push(newTr);
      tdElements = [];
    }
  }

  return (
    <div className="flex flex-col gap-4 lg:p-4 w-full lg:ml-80">
      <Header />
      <div className="rounded-md border-8 border-[#1b1b1b]">
        <div className="flex flex-row font-semibold gap-3 items-center p-2 bg-[#1b1b1b]">
          <label className="text-white text-xl font-semibold">
            Editar produtos em estoque
          </label>
        </div>
        <div className="p-4">
          <table></table>
        </div>
      </div>
    </div>
  );
}*/
