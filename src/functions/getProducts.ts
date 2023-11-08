export async function getProducts() {
  try {
    const data = await fetch("/api/crud/read", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ database: "products" }),
    });
    /*
    if (data.status == 200) {
      return data.json();
    }*/
  } catch (error) {
    return error;
  }
}
