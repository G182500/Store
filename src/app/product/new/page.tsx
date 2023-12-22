"use client"
import GenericCard from "@/components/Cards/GenericCard";
import WarningTable from "@/components/Tables/WarningAddProduct";
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
      <div className="flex flex-col md:flex-row justify-start p-4 gap-8">
        <form className="flex flex-col gap-4" onChange={validateForm} onSubmit={handleSubmit(onSubmit)}>
          {/*Linha 1*/}
          <div className="flex gap-6 w-full">
            {/*Coluna 1*/}
            <div className="flex flex-col gap-2">
              <label className="text-sm sm:text-base" htmlFor="name">Nome</label>
              <input
                id="name"
                type="text"
                className="bg-white p-2 rounded-xl text-black text-sm sm:text-base w-44"
                {...register("name")}  
                placeholder="Ex: Guns N' Roses" 
              />
            </div>
            {/*Coluna 2*/}
            <div className="flex flex-col gap-2">
              <label className="text-sm sm:text-base" htmlFor="price">Preço</label>
              <input
                id="price"
                type="number" 
                className="bg-white p-2 rounded-xl text-black text-sm sm:text-base w-20 sm:w-24"
                {...register("price")}  
                placeholder="Ex: 45.00"
              />
            </div>
          </div>
          {/*Linha 2*/}
          <div className="flex gap-6 w-full">
            {/*Coluna 1*/}
            <div className="flex flex-col gap-2">
              <label className="text-sm sm:text-base w-28" htmlFor="category">Categoria</label>
              <select
                id="category"
                className="bg-white p-2 rounded-lg text-black text-sm sm:text-base w-44"
                {...register("category")}
              >
                <option className="ALTERAR OPACIDADE" value="" selected disabled hidden>
                  Selecione uma opção
                </option>
                <option value="Camiseta">Camiseta</option>
                <option value="male">male</option>
              </select>
            </div>
            {/*Coluna 2*/}
            <div className="flex flex-col gap-2">
              <label className="text-sm sm:text-base" htmlFor="quantity">Quantidade</label>
              <input
                id="quantity"
                type="number" 
                className="bg-white p-2 rounded-xl text-black text-sm sm:text-base w-20 sm:w-24"
                {...register("price")}  
                placeholder="Ex: 10"
              />
            </div>
          </div>
          {/*Linha 3*/}
          <div className="flex flex-col gap-2">
            <label className="text-sm sm:text-base">Descrição</label>
            <textarea
              className="p-2 rounded-xl text-black text-sm sm:text-base w-full sm:w-96"
              {...register("description")}
              rows={6} />
          </div>
          {/*Linha 4*/}
          <input className="bg-cyan-600 sm:w-96 p-2 mt-1 text-[14px] justify-self-end" type="submit" value="Adicionar ao estoque" /> 
        </form>
        <WarningTable />
      </div>
    </GenericCard>
  );
}