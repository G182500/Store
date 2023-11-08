import Card from "@/components/Card";
import Header from "@/components/Header";
import { promises as fs } from "fs";

export default async function ShowAll({
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
    <div className="flex flex-col gap-4 lg:p-4 w-full lg:ml-80">
      <Header />
      <Card
        titulo={params.tipo.replace("%20", " ")}
        produtos={data}
        preview={false}
      />
    </div>
  );
}
