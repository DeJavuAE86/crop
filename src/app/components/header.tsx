import Link from "next/link";
import { FC } from "react"

const linkData = [
  { name: "Performance", href: "/performance" },
  { name: "Reliability", href: "/reliability" },
  { name: "Scale", href: "/scale" },
]
const Header: FC = () => {

  return (
    <div className="absolute w-full z-10">
      <div className="flex justify-between container mx-auto p-8 text-white">
        <Link className="font-bold text-3xl" href={"/"}>Home</Link>
        <div className="flex space-x-4 text-xl">
          {linkData.map((link) => {
            return (
              <Link key={link.name} href={link.href}>{link.name}</Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Header;