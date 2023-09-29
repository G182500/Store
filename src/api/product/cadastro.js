import { cadastro } from "../../../services/product";

export default function handler(req, res) {
  try {
    const newProduct = cadastro(req.body);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json(error.message);
  }
}
