import { useEffect, useState } from "react";
import Card from "@/components/Card";

import sehnsucht from "../../images/sehnsucht.jpg";
import herzeleid from "../../images/herzeleid.jpg";
import grayChapter from "../../images/grayChapter.jpg";
import skills from "../../images/SkillsPills.jpg";
import theNumber from "../../images/numberBeast.jpg";
import atonement from "../../images/atonement.jpg";
import zeit from "../../images/zeit.jpg";

export default function ShowAll() {
  const cds = [
    {
      id: 1,
      nome: "The Number Of The Beast (1982)",
      banda: "Iron Maiden",
      tipo: "Discos Compactos",
      preco: 79.99,
      img: theNumber.src,
      descricao: "Terceiro álbum de estúdio da banda 'Iron Maiden'.",
    },
    {
      id: 2,
      nome: "Herzeleid (1995)",
      banda: "Rammstein",
      tipo: "Discos Compactos",
      preco: 79.99,
      img: herzeleid.src,
      descricao: "Primeiro álbum de estúdio da banda 'Rammstein'.",
    },
    {
      id: 3,
      nome: "Sehnsucht (1997)",
      banda: "Rammstein",
      tipo: "Discos Compactos",
      preco: 79.99,
      img: sehnsucht.src,
      descricao: "Segundo álbum de estúdio da banda 'Rammstein'.",
    },
    {
      id: 4,
      nome: ".5: The Gray Chapter (2014)",
      banda: "Slipknot",
      tipo: "Discos Compactos",
      preco: 79.99,
      img: grayChapter.src,
      descricao: "Quarto álbum de estúdio da banda 'Slipknot'.",
    },
    {
      id: 5,
      nome: "Skills In Pills (2015)",
      banda: "Lindemann",
      tipo: "Discos Compactos",
      preco: 79.99,
      img: skills.src,
      descricao: "Primeiro álbum de estúdio do projeto 'Lindemann'.",
    },
    {
      id: 6,
      nome: "Atonement (2019)",
      banda: "Killswitch Engage",
      tipo: "Discos Compactos",
      preco: 79.99,
      img: atonement.src,
      descricao: "Oitavo álbum de estúdio da banda 'Killswitch Engage'.",
    },
    {
      id: 7,
      nome: "Zeit (2022)",
      banda: "Rammstein",
      tipo: "Discos Compactos",
      preco: 79.99,
      img: zeit.src,
      descricao: "Oitavo álbum de estúdio da banda 'Rammstein'.",
    },
  ];

  useEffect(() => {
    async function getPageData() {
      const apiUrlEndpoint = `http://localhost:3000/api/products/getProduct`;
      const response = await fetch(apiUrlEndpoint);
      const res = await response.json();
      console.log(res);
    }
    getPageData();
  }, []);

  return (
    <div className="flex flex-col lg:ml-64 p-4 lg:p-6 gap-6">
      <Card titulo="Discos Compactos" produtos={cds} preview={false} />
      Deixar que a URL informe qual a categoria(titulo) que deve ser exibida
    </div>
  );
}
