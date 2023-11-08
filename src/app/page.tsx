import { promises as fs } from "fs"; //read a JSON file
import Card from "@/components/Card";
import Header from "@/components/Header";
import Link from "next/link";
import { FaPlusSquare, FaEdit, FaUsers, FaCogs } from "react-icons/fa";
//npm install react-icons --save

export default async function Home() {
  //Return the content as a string
  const file = await fs.readFile(
    process.cwd() + "/src/database-simulation/products.json",
    "utf8"
  );
  //Convert the string to JSON
  const data = JSON.parse(file);

  return (
    <div className="flex flex-col gap-4 lg:p-4 w-full lg:ml-80">
      <Header />
      {/*Produtos*/}
      <Card titulo="Discos Compactos" produtos={data} preview={true} />
      {/*Footer*/}
      <div className="grid grid-cols-4 lg:hidden bg-[#1b1b1b] rounded-lg gap-5 py-4 px-6">
        <Link
          href=""
          className="flex flex-row font-semibold gap-1 items-center justify-center"
        >
          <FaPlusSquare size="20px" />
          <label className="text-white text-xs sm:text-sm hover:cursor-pointer">
            Produto
          </label>
        </Link>

        <Link
          href="/stock-edit"
          className="flex flex-row font-semibold gap-1 items-center justify-center"
        >
          <FaEdit size="20px" />
          <label className="text-white text-xs sm:text-sm hover:cursor-pointer">
            Estoque
          </label>
        </Link>

        <Link
          href=""
          className="flex flex-row font-semibold gap-1 items-center justify-center"
        >
          <FaUsers size="22px" />
          <label className="text-white text-xs sm:text-sm hover:cursor-pointer">
            Contas
          </label>
        </Link>

        <Link
          href=""
          className="flex flex-row font-semibold gap-1 items-center justify-center"
        >
          <FaCogs size="20px" />
          <label className="text-white text-xs sm:text-sm hover:cursor-pointer">
            Config.
          </label>
        </Link>
      </div>
    </div>
  );
}
