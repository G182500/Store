//npm install --save mysql2
import mysql from "mysql2/promise";

export default async function handler(req, res) {
  const conection = await mysql.createConnection({
    host: "sql10.freesqldatabase.com",
    database: "sql10650696",
    port: 3306,
    user: "sql10650696",
    password: "4FLzWXEB62",
  });

  try {
    const query = "SELECT * FROM Produto";
    const values = [];
    const [data] = await conection.execute(query, values);
    conection.end();
    res.status(200).json({ results: data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
