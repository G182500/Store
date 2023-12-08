import { promises as fs } from "fs"; //read a JSON file
import ProductsCard from "@/components/Cards/ProductsCard";

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
      <ProductsCard titulo="Discos Compactos" produtos={data} preview={true} />
    </>
  );
}
