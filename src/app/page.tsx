import Card from "@/components/Card";
import Link from "next/link";
import { FaUser, FaShoppingCart } from "react-icons/fa";
//https://react-icons.github.io/react-icons/icons?name=fa
//npm install react-icons --save

import sehnsucht from "../images/sehnsucht.jpg";
import herzeleid from "../images/herzeleid.jpg";
import grayChapter from "../images/grayChapter.jpg";
import skills from "../images/SkillsPills.jpg";
import theNumber from "../images/numberBeast.jpg";
import atonement from "../images/atonement.jpg";
import zeit from "../images/zeit.jpg";
import stones from "../images/camisetaStones.jpg";
import guns from "../images/camisetaGuns.jpg";

export default function Home() {
  const cds = [
    {
      id: 1,
      nome: "The Number Of The Beast (1982)",
      banda: "Iron Maiden",
      tipo: "Discos Compactos",
      preco: 79.99,
      img: theNumber.src,
      descricao: "Terceiro álbum de estúdio da banda 'Iron Maiden'.",
    },
    {
      id: 2,
      nome: "Herzeleid (1995)",
      banda: "Rammstein",
      tipo: "Discos Compactos",
      preco: 79.99,
      img: herzeleid.src,
      descricao: "Primeiro álbum de estúdio da banda 'Rammstein'.",
    },
    {
      id: 3,
      nome: "Sehnsucht (1997)",
      banda: "Rammstein",
      tipo: "Discos Compactos",
      preco: 79.99,
      img: sehnsucht.src,
      descricao: "Segundo álbum de estúdio da banda 'Rammstein'.",
    },
    {
      id: 4,
      nome: ".5: The Gray Chapter (2014)",
      banda: "Slipknot",
      tipo: "Discos Compactos",
      preco: 79.99,
      img: grayChapter.src,
      descricao: "Quarto álbum de estúdio da banda 'Slipknot'.",
    },
    {
      id: 5,
      nome: "Skills In Pills (2015)",
      banda: "Lindemann",
      tipo: "Discos Compactos",
      preco: 79.99,
      img: skills.src,
      descricao: "Primeiro álbum de estúdio do projeto 'Lindemann'.",
    },
    {
      id: 6,
      nome: "Atonement (2019)",
      banda: "Killswitch Engage",
      tipo: "Discos Compactos",
      preco: 79.99,
      img: atonement.src,
      descricao: "Oitavo álbum de estúdio da banda 'Killswitch Engage'.",
    },
    {
      id: 7,
      nome: "Zeit (2022)",
      banda: "Rammstein",
      tipo: "Discos Compactos",
      preco: 79.99,
      img: zeit.src,
      descricao: "Oitavo álbum de estúdio da banda 'Rammstein'.",
    },
  ];

  const camisetas = [
    {
      id: 8,
      nome: "The Rolling Stones",
      banda: "The Rolling Stones",
      tipo: "Camiseta",
      preco: 59.99,
      img: stones.src,
      descricao: "Produto de algodão com logo da banda 'The Rolling Stones'.",
    },
    {
      id: 9,
      nome: "Guns N' Roses",
      banda: "Guns N' Roses",
      tipo: "Camiseta",
      preco: 59.99,
      img: guns.src,
      descricao: "Produto de algodão com logo da banda 'Guns N' Roses'.",
    },
  ];

  return (
    <div className="flex flex-col lg:ml-64 p-4 lg:p-6 gap-6">
      <div className="hidden lg:flex justify-between">
        <div className="w-[48%]">
          <input
            className="text-black text-[10px] sm:text-sm rounded-lg p-2 bg-white w-full"
            placeholder="O que você procura?"
          ></input>
        </div>
        <div className="flex flex-row gap-10 mx-4">
          <Link
            href=""
            className="flex flex-row font-semibold gap-2 items-center"
          >
            <label className="text-white hover:cursor-pointer">Login</label>
            <FaUser size="18px" />
          </Link>

          <Link
            href="/carrinho"
            className="flex flex-row font-semibold gap-2 items-center"
          >
            <label className="text-white hover:cursor-pointer">
              Visualizar
            </label>
            <FaShoppingCart size="22px" />
          </Link>
        </div>
      </div>

      <Card titulo="Camisetas" produtos={camisetas} preview={true} />
      <Card titulo="Discos Compactos" produtos={cds} preview={true} />
    </div>
  );
}
