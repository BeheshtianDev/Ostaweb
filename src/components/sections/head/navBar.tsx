import Image from "next/image";
import Logo from "../../../../public/images/13.svg";
import Login from "../../../../public/images/Login.svg";
// import Menu from '../../../../public/images/menu.svg'
import OpenDrawer from "@/components/sections/head/nav.drawer";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav
      className={
        "flex fixed w-full items-center justify-between px-8  pt-4 z-50"
      }
    >
      <div>
        <OpenDrawer />
      </div>
      <Link href="/">
        <Image src={Logo.src} alt={"Logo"} width={50} height={66} />
      </Link>
      <Link href="/login">
        <Image src={Login.src} alt={"Logo"} width={32} height={32} />
      </Link>
    </nav>
  );
};
export default NavBar;
