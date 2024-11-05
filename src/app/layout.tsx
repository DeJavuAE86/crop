import { Comforter } from "next/font/google";
import "./globals.css";
import { FC } from "react";

const comforter = Comforter({
  subsets: ["latin"],
  weight: "400",
});

const RootLayout: FC<Readonly<{
  children: React.ReactNode;
}>> = ({
  children,
}) => {
    return (
      <html lang="en">
        <body
          className={comforter.className}
        >
          {children}
        </body>
      </html>
    );
  }

export default RootLayout;
