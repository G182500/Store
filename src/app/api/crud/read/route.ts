import { promises as fs } from "fs"; //read a JSON file
import Product from "@/models/Product";
import User from "@/models/User";

export async function POST(req: Request) {
  if (req.body) {
    try {
      const reader = req.body.getReader(); //método do objeto 'ReadableStream'
      const { value } = await reader.read();
      const text = new TextDecoder().decode(value);

      const obj = JSON.parse(text);
      //return `/src/database-simulation/${obj.database}.json`;

      //Return the content of JSON as string
      const file = await fs.readFile(
        process.cwd() + `/src/database-simulation/${obj.database}.json`,
        "utf8"
      );
      //Convert the string to object
      const data: Product[] | User[] = JSON.parse(file);
      return Response.json({
        status: 200,
        msg: "Todos os produtos retornados com sucesso.",
        data: data,
      });
    } catch (error) {
      return Response.json({ status: 400, msg: "Erro " + error + "." });
    }
  }
  return Response.json({ status: 400, msg: "Requisição inválida." });
}
