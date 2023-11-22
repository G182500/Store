import Image from "next/image";
import Product from "@/models/Product";

interface ProdutoProps {
  produto: Product;
}

export default function Produto(props: ProdutoProps) {
  const produto = props.produto;
  const imagePath = `/images/${produto.img}`;

  return (
    <div className="flex flex-col border border-zine-600  rounded-lg bg-[#181818] p-2">
      <Image
        className="rounded-md"
        src={imagePath}
        alt={`Imagem de ${produto.nome}`}
        height={240}
        width={240}
      />
      <div className="flex flex-col p-1 gap-1">
        <div className="text-[15px] font-light text-white truncate">
          {produto.nome}
        </div>
        <div className="text-[12px] font-extralight text-white line-clamp-1">
          {produto.descricao}
        </div>
        <div className="text-[19px] text-green-500">R$ {produto.preco}</div>
        <button className="flex justify-center p-1 mt-1 text-[14px] bg-cyan-600">
          Visualizar produto
        </button>
      </div>
    </div>
  );
}
