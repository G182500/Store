import {
  FaSearch,
  FaInstagram,
  FaWhatsapp,
  FaUsers,
  FaEdit,
  FaPlusSquare,
  FaCogs,
} from "react-icons/fa";
import Link from "next/link";
import MenuItem from "./MenuItem";
import Image from "next/image";
import LogoImage from "../../public/images/Spotify-Logo.png";

export default function Menu() {
  return (
    <aside className="flex flex-col items-center gap-4 lg:w-80 lg:h-full lg:fixed lg:overflow-y-auto">
      {/*Primeiro Bloco*/}
      <div className="flex flex-col bg-[#1b1b1b] rounded-lg w-full py-3 px-6 gap-6">
        {/*Imagem Logo + Barra de Pesquisa*/}
        <div className="flex flex-col sm:flex-row lg:flex-col gap-4">
          {/*Imagem Logo*/}
          <Link href="/" className="flex justify-center">
            <Image
              src={LogoImage.src}
              alt="Logo Loja"
              height={70}
              width={140}
            />
          </Link>
          {/*Barra de Pesquisa*/}
          <div className="flex flex-row gap-3 justify-center">
            <input
              className="text-black text-sm p-2 rounded-lg bg-white w-[75%] sm:w-96 lg:w-72"
              placeholder="O que você procura?"
            ></input>
            <button>
              <FaSearch size="22px" />
            </button>
          </div>
        </div>
        {/*Categorias*/}
        <div className="flex flex-col">
          <span className="hidden lg:block text-xs font-semibold opacity-50 mb-2 text-white">
            CATEGORIAS
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-1 w-full gap-2 lg:p-3">
            <MenuItem
              name="Acessórios"
              subItens={[
                ["Colares", "#"],
                ["Pulseiras", "#"],
              ]}
            />
            <MenuItem
              name="Camisetas"
              subItens={[
                ["Masculinas", "#"],
                ["Femininas", "#"],
              ]}
            />
            <MenuItem name="Discos Compactos" href="/Discos Compactos" />
            <MenuItem name="Quadros" href="#" />
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
            href="/shopping-cart"
            className="flex flex-row font-semibold gap-1 items-center"
          >
            <FaPlusSquare size="20px" />
            <label className="text-white text-sm hover:cursor-pointer">
              Produto
            </label>
          </Link>

          <Link
            href="/stock-edit"
            className="flex flex-row font-semibold gap-1 items-center"
          >
            <FaEdit size="20px" />
            <label className="text-white text-sm hover:cursor-pointer">
              Estoque
            </label>
          </Link>

          <Link
            href=""
            className="flex flex-row font-semibold gap-1 items-center"
          >
            <FaUsers size="22px" />
            <label className="text-white text-sm hover:cursor-pointer">
              Contas
            </label>
          </Link>

          <Link
            href=""
            className="flex flex-row font-semibold gap-1 items-center"
          >
            <FaCogs size="20px" />
            <label className="text-white text-sm hover:cursor-pointer">
              Config.
            </label>
          </Link>
        </div>
      </div>

      {/*Terceiro Bloco*/}
      <div className="hidden lg:block flex-col bg-[#1b1b1b] py-3 px-6 rounded-lg w-full">
        <span className="text-xs font-semibold opacity-50 text-white">
          REDES SOCIAIS
        </span>
        <div className="grid grid-cols-2 p-3">
          <a
            href="https://www.instagram.com/o_californiaa/"
            className="flex flex-row gap-1"
          >
            <FaInstagram size="20px" color="white" />
            <span className="text-sm font-semibold opacity-80 text-white">
              Instagram
            </span>
          </a>
          <a href="" className="flex flex-row gap-1">
            <FaWhatsapp size="20px" color="white" />
            <span className="text-sm font-semibold opacity-80 text-white">
              WhatsApp
            </span>
          </a>
        </div>
      </div>
    </aside>
  );
}
