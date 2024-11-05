import { FC } from "react";
import Image, { StaticImageData } from "next/image";

interface IProps {
  imageSrc: StaticImageData,
  altText: string,
  content: string,
}

const Hero: FC<IProps> = ({
  imageSrc,
  altText,
  content,
}) => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 -z-10">
        <Image src={imageSrc} fill style={{ objectFit: 'cover' }} alt={altText} />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800"></div>
      </div>
      <div className="flex justify-center pt-48">
        <h1 className="text-6xl text-white">{content}</h1>
      </div>
    </div>
  )
}

export default Hero;
