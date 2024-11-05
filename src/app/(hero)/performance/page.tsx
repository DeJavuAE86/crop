import {FC} from "react";
import { Metadata } from "next";
import Hero from "@/app/components/hero";
import performanceSrc from '/public/performance.jpg';

export const metadata:Metadata = {
  title: 'Performance',
}

const PerformancePage:FC = () => {
  return (
    <Hero imageSrc={performanceSrc} altText="performance image" content="performance..."/>
  )
}

export default PerformancePage;
