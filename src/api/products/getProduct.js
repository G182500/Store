//npm install --save mysql2
import mysql from "mysql2/promise";

export default async function handler(req, res) {
  const conection = await mysql.createConnection({
    host: "localhost",
    database: "sistemaloja",
    port: 3306,
    user: "root",
    password: "senhaforte",
    socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
  });

  try {
    const query = "SELECT * FROM produtos";
    const values = [];
    const [data] = await conection.execute(query, values);
    conection.end();
    res.status(200).json({ results: data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }

  //res.status(200).json({ name: "John Doe" });
}
