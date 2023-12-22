import {
  FaInstagram,
  FaWhatsapp,
  FaUsers,
  FaList,
  FaPlusSquare,
  FaCogs,
} from "react-icons/fa";
import Link from "next/link";
import Category from "./Category";
import Image from "next/image";

export default function Menu() {
  return (
    <aside className="flex flex-col items-center gap-4 lg:w-80 lg:h-full lg:fixed lg:overflow-y-auto">
      {/*Primeiro Bloco*/}
      <div className="flex flex-col bg-[#1b1b1b] rounded-lg w-full py-3 px-6 gap-6">
        {/*Imagem Logo + Barra de Pesquisa*/}
        <div className="flex flex-row lg:flex-col gap-6 items-center">
          {/*Imagem Logo*/}
          <Link href="/">
            <Image
              src={"/images/Spotify-Logo.png"}
              alt="Logo Loja"
              height={70}
              width={140}
            />
          </Link>
          {/*Barra de Pesquisa*/}
          <input
            className="text-black text-sm sm:text-base rounded-lg bg-white p-2 w-[75%] sm:w-96 lg:w-64"
            placeholder="O que você procura?"> 
          </input>
        </div>
        {/*Categorias*/}
        <div className="flex flex-col">
          <span className="hidden lg:block text-xs font-semibold opacity-50 mb-2 text-white">
            CATEGORIAS
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-1 w-full gap-2 lg:p-3">
            <Category
              name="Acessórios"
              subItens={[
                {name: "Colares", href: "#"},
                {name: "Pulseiras", href: "#"}
              ]}
            />
            <Category
              name="Camisetas"
              subItens={[
                {name: "Masculinas", href: "#"},
                {name: "Femininas", href: "#"}
              ]}
            />
            <Category name="Discos Compactos" href="view-all/Discos Compactos" />
            <Category name="Quadros" href="#" />
          </div>
        </div>
      </div>

      {/*Segundo Bloco - TELA GRANDE*/}
      <div className="hidden lg:block flex-col bg-[#1b1b1b] rounded-lg w-full py-3 px-6 gap-2">
        <span className="text-xs font-semibold opacity-50 text-white">
          ADMINISTRADOR
        </span>
        <div className="grid grid-cols-2 gap-5 p-3">
          <Link
            href="/product/new"
            className="flex flex-row font-semibold gap-1 items-center justify-center"
          >
            <FaPlusSquare size="18px" />
            <label className="text-white text-sm sm:text-base hover:cursor-pointer">
              Produto
            </label>
          </Link>

          <Link
            href="/stock-edit"
            className="flex flex-row font-semibold gap-1 items-center justify-center"
          >
            <FaList size="17px" />
            <label className="text-white text-sm sm:text-base hover:cursor-pointer">
              Estoque
            </label>
          </Link>

          <Link
            href=""
            className="flex flex-row font-semibold gap-1 items-center justify-center"
          >
            <FaUsers size="22px" />
            <label className="text-white text-sm sm:text-base hover:cursor-pointer">
              Contas
            </label>
          </Link>

          <Link
            href=""
            className="flex flex-row font-semibold gap-1 items-center justify-center"
          >
            <FaCogs size="20px" />
            <label className="text-white text-sm sm:text-base hover:cursor-pointer">
              Config.
            </label>
          </Link>
        </div>
      </div>

      {/*Terceiro Bloco - TELA GRANDE*/}
      <div className="hidden lg:block flex-col bg-[#1b1b1b] py-3 px-6 rounded-lg w-full">
        <span className="text-xs font-semibold opacity-50 text-white">
          REDES SOCIAIS
        </span>
        <div className="flex flex-col gap-5 p-3">
          <a
            href="https://www.instagram.com/o_californiaa/"
            className="flex flex-row gap-1 items-center"
          >
            <FaInstagram size="20px" color="white" />
            <span className="text-white text-sm sm:text-base hover:cursor-pointer font-semibold opacity-80">
              Instagram
            </span>
          </a>
          <a href="" className="flex flex-row gap-1 items-center">
            <FaWhatsapp size="20px" color="white" />
            <span className="text-white text-sm sm:text-base hover:cursor-pointer font-semibold opacity-80">
              WhatsApp
            </span>
          </a>
        </div>
      </div>
    </aside>
  );
}
