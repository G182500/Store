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
        <form className="flex flex-col gap-4 items-center sm:items-start">
          <div className="grid grid-rows-2">
            <label htmlFor="userName">Usuário</label>
            <input className="text-black text-sm rounded-lg bg-white p-2 w-60" id="userName"/>
          </div>
          <div className="grid grid-rows-2">
            <label htmlFor="userPassword">Senha</label>
            <input className="text-black text-sm rounded-lg bg-white p-2 w-60" id="userPassword"/>
          </div>
          <input type="submit" value="Submeter" className="bg-cyan-600 p-1 w-60"/>
          <p className="font-semibold opacity-50">Não tem uma conta? Cadastre-se aqui</p>
        </form>
      </div>
    </GenericCard>
  );
}
