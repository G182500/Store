export default function WarningAddProductTable() {
    return (
        <table className="border border-white h-fit p-4 rounded-sm w-full sm:w-fit xl:w-96">
            <thead>
                <tr>
                    <th className="bg-[#333333] text-sm p-2">IMPORTANTE</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="align-middle text-center text-sm p-3 border border-white bg-[#1b1c1b]">
                        Preencha as informações no formato dos exemplos fornecidos.
                    </td>
                </tr>
                <tr>
                    <td className="align-middle text-center text-sm p-3 border border-white bg-[#1b1c1b]">
                        Todos os campos são obrigatórios, portanto, devem ser preenchidos.
                    </td>
                </tr>
            </tbody>
        </table>
    );
}
