import { FC } from "react";
import { Metadata } from "next";
import homeSrc from "/public/home.jpg";
import Hero from "../components/hero";

export const metadata: Metadata = {
  title: 'Home',
}

const HomePage: FC = () => {
  return (
    <Hero imageSrc={homeSrc} altText="home image" content="Professional Cloud Hosting"/>
  )
}

export default HomePage;
