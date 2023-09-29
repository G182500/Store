import Image from "next/image";
import Carousel from "@/components/Carousel/Carousel";

import rio from "../../images/rio.jpg";

export default function Ca() {
  const carrinho = [
    {
      id: 8,
      nome: "Rio (1982)",
      banda: "Duran Duran",
      tipo: "Discos Compactos",
      preco: 69.99,
      img: rio.src,
      descricao: "Segundo álbum de estúdio da banda 'Duran Duran'.",
    },
    {
      id: 9,
      nome: "Rio (1982)",
      banda: "Duran Duran",
      tipo: "Discos Compactos",
      preco: 69.99,
      img: rio.src,
      descricao: "Segundo álbum de estúdio da banda 'Duran Duran'.",
    },
    {
      id: 10,
      nome: "Rio (1982)",
      banda: "Duran Duran",
      tipo: "Discos Compactos",
      preco: 69.99,
      img: rio.src,
      descricao: "Segundo álbum de estúdio da banda 'Duran Duran'.",
    },
    {
      id: 11,
      nome: "Rio (1982)",
      banda: "Duran Duran",
      tipo: "Discos Compactos",
      preco: 69.99,
      img: rio.src,
      descricao: "Segundo álbum de estúdio da banda 'Duran Duran'.",
    },
    {
      id: 12,
      nome: "Rio (1982)",
      banda: "Duran Duran",
      tipo: "Discos Compactos",
      preco: 69.99,
      img: rio.src,
      descricao: "Segundo álbum de estúdio da banda 'Duran Duran'.",
    },
    {
      id: 13,
      nome: "Rio (1982)",
      banda: "Duran Duran",
      tipo: "Discos Compactos",
      preco: 69.99,
      img: rio.src,
      descricao: "Segundo álbum de estúdio da banda 'Duran Duran'.",
    },
  ];

  return (
    <div className="lg:ml-64 p-4 lg:p-6">
      <div className="rounded-md border-8 border-[#2b2e2d]">
        <div className="flex flex-row font-semibold gap-3 items-center p-2 bg-[#2b2e2d]">
          <label className="text-white text-xl font-semibold">
            Carrinho de Compras
          </label>
        </div>
        <div className="p-4">
          <Carousel>
            {carrinho.map((produto) => {
              return (
                <div
                  className="flex flex-col rounded-lg border border-zine-600 p-1 bg-[#181818] h-auto w-auto"
                  key={produto.id}
                >
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
                      Remover
                    </button>
                  </div>
                </div>
              );
            })}
          </Carousel>
          ARRUMAR
        </div>
      </div>
    </div>
  );
}
