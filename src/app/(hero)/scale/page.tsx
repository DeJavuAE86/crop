import {FC} from "react";
import { Metadata } from "next";
import Hero from "@/app/components/hero";
import scaleSrc from '/public/scale.jpg';

export const metadata:Metadata = {
  title: 'Scale',
}

const ScalePage:FC = () => {
  return (
    <Hero imageSrc={scaleSrc} altText="scale image" content="scale..."/>
  )
}

export default ScalePage;
