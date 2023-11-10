import Link from "next/link";
import { FaUser, FaShoppingCart } from "react-icons/fa";
//npm install react-icons --save

export default async function Header() {
  return (
    <div className="flex flex-cols gap-9 px-3 justify-end items-center">
      <Link
        href="/login"
        className="flex flex-row font-semibold gap-1 items-center"
      >
        <FaUser size="18px" />
        <label className="text-white text-sm sm:text-base hover:cursor-pointer">
          Entrar
        </label>
      </Link>

      <Link
        href="/carrinho"
        className="flex flex-row font-semibold gap-1 items-center"
      >
        <FaShoppingCart size="18px" />
        <label className="text-white text-sm md:text-base hover:cursor-pointer">
          Carrinho
        </label>
      </Link>
    </div>
  );
}
