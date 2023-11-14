export async function getProductById(id: number) {
  try {
    const data = await fetch("http://localhost:3000/api/crud/read", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ database: "products", id: id }),
    });
    return data.json();
  } catch (error) {
    return error;
  }
}
