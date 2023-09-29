import Product from "@/model/Product";

let products: Product[] = [];

export function cadastro(product: Product) {
  const productExist = products.find((item) => item.nome === product.nome);

  if (productExist) {
    throw new Error("Produto já cadastrado.");
  } else {
    products.push(product);
    return "Cadastrado com sucesso.";
  }
}
