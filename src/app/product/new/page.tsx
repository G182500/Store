"use client"
import GenericCard from "@/components/Cards/GenericCard";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import InputMask from "react-input-mask";

type FormProps = {
  name: string,
  category: string,
  price: string,
  description: string
}

export default function NewProduct() {
  const { handleSubmit, getValues, register } = useForm<FormProps>();
  const [missingInput, setMissingInput] = useState<boolean>(true);

  const validateForm = () => {
    //Check if the form has any null inputs
    const data = getValues();
    if (Object.values(data).every(value => value)) {
      setMissingInput(false); //Submit button enabled
    } 
    else setMissingInput(true);
  }

  const onSubmit: SubmitHandler<FormProps> = (data) => {
    console.log(data);
  }

  return (
    <GenericCard title="Novo Produto">
      <form className="flex flex-col gap-4" onChange={validateForm} onSubmit={handleSubmit(onSubmit)}>
        {/*Linha 1*/}
        <div className="flex flex-col gap-2">
          <label>Nome</label>
          <input {...register("name")} className="bg-white p-2 rounded-lg text-black text-sm w-52" placeholder="Ex: Guns N' Roses" />
        </div>
        {/*Linha 2*/}
        <div className="flex gap-6 w-full">
          {/*Coluna 1*/}
          <div className="flex flex-col gap-2">
            <label>Preço</label>
            <input {...register("price")} className="bg-white p-2 rounded-lg text-black text-sm w-20" placeholder="Ex: 45,00" />
          </div>
          {/*Coluna 2*/}
          <div className="flex flex-col gap-2">
            <label>Categoria</label>
            <input {...register("category")} className="bg-white p-2 rounded-lg text-black text-sm w-40" placeholder="Ex: Guns N' Roses" />
          </div>
        </div>



        <div className="flex flex-col justify-start w-full">
            <label className="font-bold text-[20px]">Mensagem</label>
            <textarea {...register("description")} className="border border-[#BFE2FF] font-bold p-2 rounded-3xl text-[20px]" rows={4} />
        </div>
        <input className="bg-cyan-600 p-1 mt-1 text-[14px]" type="submit" value="Adicionar" /> 
      </form>
    </GenericCard>
  );
}