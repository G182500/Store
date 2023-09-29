import Image from "next/image";
import Product from "@/model/Product";

interface ProdutoProps {
  produto: Product;
}

export default function Produto(props: ProdutoProps) {
  const produto = props.produto;
  return (
    <div className="flex flex-col rounded-lg border border-zine-600 p-1 bg-[#181818] h-auto w-auto">
      <Image
        className="rounded-md w-full h-full"
        src={produto.img}
        alt={`Imagem de ${produto.nome}`}
        height={240}
        width={240}
      />
      <div className="flex flex-col p-2 gap-2">
        <div className="text-sm text-white font-extralight truncate">
          {produto.nome}
        </div>
        <div className="text-xl text-green-500 font-extralight">
          R$ {produto.preco}
        </div>
        <button className="flex justify-center w-full bg-cyan-600 p-1">
          Comprar
        </button>
      </div>
    </div>
  );
}
