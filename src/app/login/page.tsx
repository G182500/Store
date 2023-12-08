import GenericCard from "@/components/Cards/GenericCard";

export default async function Login() {
  return (
    <GenericCard title="Bem-vindo">
      <div className="flex flex-row gap-2">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <label>Usuário</label>
            <input className="text-black text-xs rounded-lg bg-white p-2 w-60" />
          </div>
          <div className="flex flex-col gap-2">
            <label>Senha</label>
            <input className="text-black text-xs rounded-lg bg-white p-2 w-60" />
            <label className="text-sm">Esqueci minha senha</label>
          </div>
        </div>
        
      </div>
    </GenericCard>
  );
}
