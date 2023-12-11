import GenericCard from "@/components/Cards/GenericCard";
//import { useForm, SubmitHandler } from "react-hook-form";

type IFormInput = {
  user: string,
  password: string
}

export default async function Login() {
  /*const { handleSubmit, register } = useForm<IFormInput>();

  const submit: SubmitHandler<IFormInput> = (data) => {
    console.log(data.user);
  }*/

  /*
  <form onSubmit={handleSubmit(submit)}>
    <input {...register("user")} />
    <input {...register("password")} />
    <input type="submit" value="Submeter"/>
  </form> 
  */

  return (
    <GenericCard title="Bem-vindo">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-0">
        <form className="flex flex-col gap-4">
          <div className="grid grid-rows-2">
            <label>Usuário</label>
            <input className="text-black text-xs rounded-lg bg-white p-2 w-56" />
          </div>
          <div className="grid grid-rows-2">
            <label>Senha</label>
            <input className="text-black text-xs rounded-lg bg-white p-2 w-56" />
          </div>
          <input type="submit" value="Submeter" className="bg-cyan-600 p-1 w-56"/>
        </form>
        <p>TESTE</p>
      </div>
    </GenericCard>
  );
}
