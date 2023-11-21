import Link from "next/link";
import { FaPlusSquare, FaUsers, FaCogs, FaList } from "react-icons/fa";
//npm install react-icons --save

export default function Admin() {
  return (
    <div className="grid grid-cols-4 lg:hidden bg-[#1b1b1b] rounded-lg gap-5 py-4 px-6">
      <Link
        href=""
        className="flex flex-row font-semibold gap-1 items-center justify-center"
      >
        <FaPlusSquare size="18px" />
        <label className="text-white text-sm sm:text-base hover:cursor-pointer">
          Produto
        </label>
      </Link>

      <Link
        href="/stock"
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
  );
}
