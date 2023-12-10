import { Card } from "app/components/Card";

const gift = [
  {
    title: "iPhone 15 rose 128GB",
    src: "/iphone15.png",
  },
  {
    title: "Casque Shoei Jaune",
    src: "/shoei.png",
  },
  {
    title: "FURYGAN - Chaussures femme Janis Lady D3O® Noir",
    src: "/shoes.png",
  },
  {
    title: "SAC BANDOULIÈRE M BOX-TROT",
    src: "/sac.png",
  },
  {
    title: "BRIMNES Lit banquette 2 places blanc + 2 tiroirs + matelas",
    src: "/lit.png",
  },
  {
    title: "VESTE DE MOTO CYCLONE GTX POUR FEMMES GORE-TEX®",
    src: "/veste.png",
  },
];

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="font-primary font-extrabold text-4xl text-red-600 mt-4 py-2 sm:py-4 leading-relaxed">
          Catalogue de Noël !
        </h1>
      </div>

      <div className="py-12 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
        {gift.map((item) => (
          <Card key={item.src} {...item} />
        ))}
      </div>
    </div>
  );
}
