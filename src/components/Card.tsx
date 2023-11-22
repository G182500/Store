"use client";
import Product from "@/models/Product";
import ProductItem from "@/components/ProductItem";
import { useEffect, useState } from "react";
import Link from "next/link";

interface CardProps {
  titulo: string;
  produtos: Product[];
  preview: boolean;
}

//REFATORAR ESSE CARA
export default function Card(props: CardProps) {
  const [maxItens, setMaxItens] = useState(1);

  useEffect(() => {
    function handleResize() {
      const screenWidth = window.innerWidth;

      if (screenWidth < 640) setMaxItens(2); //xs
      else if (screenWidth >= 640 && screenWidth < 768) setMaxItens(3); //sm
      else if (screenWidth >= 768 && screenWidth < 1025) setMaxItens(4); //md
      else if (screenWidth >= 1025 && screenWidth < 1280) setMaxItens(4); //lg
      else if (screenWidth >= 1280 && screenWidth < 1535) setMaxItens(5); //xl
      else setMaxItens(6); //2xl
    }

    //Adicionar ouvinte de redimensionamento
    window.addEventListener("resize", handleResize);

    //Chamar handleResize inicialmente para definir os valores iniciais
    handleResize();

    //Remover ouvinte de redimensionamento ao desmontar o componente
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let showAll = "";
  let produtosExibidos = [];

  if (props.preview == true) {
    for (let i = 0; i < props.produtos.length; i++) {
      const produto = props.produtos[i];
      if (props.titulo.includes(produto.tipo)) {
        if (produtosExibidos.length < maxItens) {
          produtosExibidos.push(produto);
        } else {
          showAll = "Mostrar tudo";
          break;
        }
      }
    }
  } else {
    produtosExibidos = props.produtos;
  }

  return (
    <div className="rounded-md border-8 border-[#1b1b1b] bg-[#1b1b1b] w-full">
      <div className="flex flex-wrap justify-between items-center p-2 w-full">
        <div className="text-lg font-semibold pl-2 text-white">
          {props.titulo.toUpperCase()}
        </div>
        {/*Rota dinâmica: view-all/[tipo]/page.tsx */}
        <Link href={`/view-all/${props.titulo}`}>
          <label className="text-xs font-semibold text-[#8f9290] hover:text-white hover:underline underline-offset-4 hover:cursor-pointer">
            {showAll}
          </label>
        </Link>
      </div>
      <div className="grid grid-cols-2 justify-start p-4 gap-4 w-full sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {produtosExibidos.map((produto) => {
          return <ProductItem produto={produto} key={produto.id} />;
        })}
      </div>
    </div>
  );
}

/*
"use client";
import Product from "@/model/Product";
import ProductItem from "@/components/ProductItem";
import { useEffect, useState } from "react";
import Link from "next/link";

interface CardProps {
  titulo: string;
  produtos: Product[];
  preview: boolean;
}

export default function Card(props: CardProps) {
  const [maxItens, setMaxItens] = useState(1);

  useEffect(() => {
    function handleResize() {
      const screenWidth = window.innerWidth;

      if (screenWidth < 640) setMaxItens(2); //xs
      else if (screenWidth >= 640 && screenWidth < 768) setMaxItens(3); //sm
      else if (screenWidth >= 768 && screenWidth < 1025) setMaxItens(4); //md
      else if (screenWidth >= 1025 && screenWidth < 1280) setMaxItens(4); //lg
      else if (screenWidth >= 1280 && screenWidth < 1535) setMaxItens(5); //xl
      else setMaxItens(6); //2xl
    }

    //Adicionar ouvinte de redimensionamento
    window.addEventListener("resize", handleResize);

    //Chamar handleResize inicialmente para definir os valores iniciais
    handleResize();

    //Remover ouvinte de redimensionamento ao desmontar o componente
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let showAll = "";
  let produtosExibidos = [];

  if (props.preview == true) {
    for (let i = 0; i < props.produtos.length; i++) {
      const produto = props.produtos[i];
      if (props.titulo.includes(produto.tipo)) {
        if (produtosExibidos.length < maxItens) {
          produtosExibidos.push(produto);
        } else {
          showAll = "Mostrar tudo";
          break; //For é usado para otimizar o carregamento, ao invés de um .map()
        }
      }
    }
  } else {
    produtosExibidos = props.produtos;
  }

  return (
    <div className="rounded-md border-8 border-[#1b1b1b] bg-[#1b1b1b] w-full">
      <div className="flex flex-wrap justify-between items-center p-2 w-full">
        <div className="text-xl font-semibold pl-2 text-white">
          {props.titulo}
        </div>
        <Link href={`/${props.titulo}`}>
          <label className="text-xs font-semibold text-[#8f9290] hover:text-white hover:underline underline-offset-4 hover:cursor-pointer">
            {showAll}
          </label>
        </Link>
      </div>
      <div className="grid grid-cols-2 justify-start p-4 gap-6 w-full sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {produtosExibidos.map((produto) => {
          return <ProductItem produto={produto} key={produto.id} />;
        })}
      </div>
    </div>
  );
} */
