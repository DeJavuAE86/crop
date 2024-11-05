import {FC} from "react";
import { Metadata } from "next";
import Hero from "@/app/components/hero";
import reliabilitySrc from '/public/reliability.jpg';

export const metadata:Metadata = {
  title: 'Reliability',
}

const ReliabilityPage:FC = () => {
  return (
    <Hero imageSrc={reliabilitySrc} altText="reliability image" content="reliability..."/>
  )
}

export default ReliabilityPage;
