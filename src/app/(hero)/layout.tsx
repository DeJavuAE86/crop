import { FC } from "react";
import Header from "../components/header";
const HeroLayout: FC<Readonly<{
  children: React.ReactNode;
}>> = ({
  children,
}) => {
    return (
      <>
          <Header/>
          {children}
      </>
    );
  }

export default HeroLayout;
