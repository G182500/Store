type CardProps = {
  title: string;
  children: React.ReactNode;
}

export default function GenericCard(props: CardProps) {
  return (
    <div className="rounded-md border-8 border-[#1b1b1b] bg-[#1b1b1b] w-full">
      <div className="flex flex-wrap justify-between items-center p-2 w-full">
        <label className="text-lg font-semibold pl-2 text-white">
          {props.title.toUpperCase()}
        </label>
      </div>
      {props.children}
    </div>
  );
}