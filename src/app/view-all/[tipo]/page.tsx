import Card from "@/components/Cards/ProductsCard";
import { promises as fs } from "fs";

export default async function ViewAll({
  params,
}: {
  params: { tipo: string };
}) {
  //Return the content as a string
  const file = await fs.readFile(
    process.cwd() + "/src/database-simulation/products.json",
    "utf8"
  );
  //Convert the string to JSON
  const data = JSON.parse(file);

  return (
    <Card
      titulo={params.tipo.replace("%20", " ")}
      produtos={data}
      preview={false}
    />
  );
}
