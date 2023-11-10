export default async function ProductEdit({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div className="rounded-md border-8 border-[#1b1b1b] bg-[#1b1b1b]">
      PRODUTO {params.id}
    </div>
  );
}
