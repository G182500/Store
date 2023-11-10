import { promises as fs } from "fs"; //read a JSON file
import Card from "@/components/Card";
import Link from "next/link";
import { FaPlusSquare, FaUsers, FaCogs, FaCubes } from "react-icons/fa";
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
    <>
      {/*Produtos*/}
      <Card titulo="Discos Compactos" produtos={data} preview={true} />
    </>
  );
}
