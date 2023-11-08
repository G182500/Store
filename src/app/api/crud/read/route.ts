import { promises as fs } from "fs"; //read a JSON file
import Product from "@/model/Product";
import User from "@/model/User";

/*Alterações Pendentes - Model
- Mudar 'id' de user e produto para 'string';
- Deixar 'senha' de 'user' criptografada;*/

export async function POST(req: Request) {
  if (req.body) {
    const reader = req.body.getReader(); //método do objeto 'ReadableStream'
    const { value } = await reader.read();
    const text = new TextDecoder().decode(value);

    const obj = JSON.parse(text);
    console.log(obj.database);
    return obj;

    /*try {
      const obj = JSON.parse(text);

      //Return the content of JSON as string
      const file = await fs.readFile(
        process.cwd() + `/src/database-simulation/${obj.database}.json`,
        "utf8"
      );
      //Convert the string to object
      const data: Product[] | User[] = JSON.parse(file);
      return Response.json({ status: 200, data: data });
    } catch (error) {
      return Response.json({ status: 500 });
    }*/
  }
}

/*
async function fileAcess(database: string) {
  //Return the content of JSON as a string
  const file = await fs.readFile(
    process.cwd() + `/src/database-simulation/${database}.json`,
    "utf8"
  );
  //Convert the string to object
  const data: Product[] | User[] = ([] = JSON.parse(file));
  return data;
}

export function create(item: Product, database: string) {}

export async function read(condition: string, database: string) {
  const data = await fileAcess(database);

  if (condition === "get all") {
    return data;
  } else if (condition.includes("get product with type:")) {
    const split = condition.split(":");
    const type = split[1];

    let products: Product[] = [];

    data.forEach((item) => {
      if ("tipo" in item && item.tipo === type) {
        products.push(item);
      }
    });

    return products;
  } else if (condition.includes("get users with acess:")) {
    const split = condition.split(":");
    const acess = split[1];

    let users: User[] = [];

    data.forEach((user) => {
      if ("acesso" in user && user.acesso === acess) {
        users.push(user);
      }
    });

    return users;
  }
}

export function update() {}

export function deletee() {}*/
