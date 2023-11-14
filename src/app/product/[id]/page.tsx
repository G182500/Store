import { getProductById } from "@/functions/crud/read/getProductById";

export default async function ProductEdit({
  params,
}: {
  params: { id: number };
}) {
  const resp = await getProductById(params.id);
  console.log(resp.data);

  return (
    <div className="rounded-md border-8 border-[#1b1b1b] bg-[#1b1b1b]">
      PRODUTO {params.id}
    </div>
  );
}
