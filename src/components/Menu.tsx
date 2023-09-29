import {
  FaUser,
  FaShoppingCart,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
//https://react-icons.github.io/react-icons/icons?name=fa
//npm install react-icons --save

import Image from "next/image";
import logo from "../images/logo.png";
import MenuItem from "./MenuItem";
import Link from "next/link";

export default function Menu() {
  return (
    <aside
      className="flex flex-col bg-[#1b1b1b] items-center p-3 w-full lg:w-64 lg:fixed lg:h-full lg:overflow-y-auto"
      id="sideMenu"
    >
      <div className="flex flex-row lg:flex-col justify-between lg:justify-center w-full items-center gap-4 lg:p-3">
        <Link href="/" className="flex w-[20%] lg:w-full justify-center">
          <Image src={logo.src} alt="Logo Loja" height={150} width={150} />
        </Link>

        <div className="hidden lg:block w-full">
          <span className="text-xs font-semibold opacity-50 mb-2 text-white">
            REDES SOCIAIS
          </span>
          <div className="flex flex-col w-full gap-3 p-3">
            <a
              href="https://www.instagram.com/o_californiaa/"
              className="flex flex-row gap-2"
            >
              <FaInstagram size="20px" color="white" />
              <span className="text-sm font-semibold opacity-80 text-white">
                Instagram
              </span>
            </a>
            <a href="" className="flex flex-row gap-2">
              <FaWhatsapp size="20px" color="white" />
              <span className="text-sm font-semibold opacity-80 text-white">
                WhatsApp
              </span>
            </a>
          </div>
        </div>

        <div className="lg:hidden flex flex-row w-full justify-between">
          <div className="w-[72%] sm:w-[48%] mx-2">
            <input
              className="text-black text-[10px] sm:text-sm rounded-lg p-2 bg-white w-full"
              placeholder="O que você procura?"
            ></input>
          </div>

          <div className="flex flex-row gap-6 mx-4">
            <Link
              href=""
              className="flex flex-row font-semibold gap-2 items-center"
            >
              <label className="hidden sm:block text-sm text-white hover:cursor-pointer">
                Login
              </label>
              <FaUser size="18px" />
            </Link>

            <Link
              href="/carrinho"
              className="flex flex-row font-semibold gap-2 items-center"
            >
              <label className="hidden sm:block text-sm text-white hover:cursor-pointer">
                Visualizar
              </label>
              <FaShoppingCart size="22px" />
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full gap-4 lg:p-4">
        <span className="hidden lg:block text-xs font-semibold opacity-50 mb-2 text-white">
          CATEGORIAS
        </span>
        <div className="grid grid-cols-2 sm:flex lg:flex-col w-full gap-2 sm:gap-4 p-3">
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
          <MenuItem name="Discos Compactos" href="#" />
          <MenuItem name="Quadros Decorativos" href="#" />
        </div>
      </div>
    </aside>
  );
}
