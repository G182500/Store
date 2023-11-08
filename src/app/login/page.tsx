import Header from "@/components/Header";

export default async function Login() {
  return (
    <div className="flex flex-col gap-4 lg:p-4 w-full lg:ml-80">
      <Header />
      <div className="rounded-md border-8 border-[#1b1b1b] bg-[#1b1b1b] w-full">
        <div className="flex flex-wrap justify-between items-center p-2 w-full">
          <label className="text-xl font-semibold pl-2 text-white">
            Bem vindo
          </label>
        </div>
        <div className="grid grid-cols-2 justify-start p-4 gap-6 w-full sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"></div>
      </div>
    </div>
  );
}
