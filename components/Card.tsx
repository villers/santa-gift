import Image from "next/legacy/image";
type CardProps = {
  src: string;
  title: string;
};

export const Card = ({ src, title }: CardProps) => (
  <a
    href="#"
    className="h-120 w-72 rounded shadow-lg mx-auto border border-palette-lighter group  bg-white"
  >
    <div className="h-72 border-b-2 border-palette-lighter relative">
      <Image
        src={src}
        alt={title}
        layout="fill"
        className="transform duration-500 ease-in-out group-hover:scale-105"
      />
    </div>
    <div className="relative h-48">
      <div className="font-primary text-2xl text-green-700 pt-4 px-4 font-semibold">
        {title}
      </div>
    </div>
  </a>
);
