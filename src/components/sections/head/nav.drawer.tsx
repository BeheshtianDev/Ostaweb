"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  Collapse,
} from "@mui/material";
import { motion } from "framer-motion";

const OpenDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => setIsOpen(open);
  const toggleServices = () => setIsServicesOpen((prev) => !prev);

  return (
    <>
      <Image
        onClick={toggleDrawer(true)}
        src="/images/menu.svg"
        alt="Menu"
        width={32}
        height={32}
        className="cursor-pointer"
      />

      <Drawer
        anchor="right"
        open={isOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            backdropFilter: "blur(10px)",
            backgroundColor: "rgba(0,0,0,0.0)",
            width: { xs: "80%", sm: 400 },
            paddingTop: "30px",
          },
        }}
      >
        {/* Close button */}
        <div className="w-4/5 flex justify-between mr-10">
          <Link href="/" className="pt-1.5">
            <Image src="/home-icon.svg" alt="Icon" width={30} height={66} />
          </Link>
          <IconButton onClick={toggleDrawer(false)}>
            <Image src="/close-icon.svg" alt="Close" width={30} height={30} />
          </IconButton>
        </div>

        <List className="flex flex-col items-center space-y-4 !mt-10">
          {/* Services dropdown */}
          <ListItemButton
            onClick={toggleServices}
            className="w-[80%] !bg-[#B5964D]/40 !h-[60px] gap-3 !flex !mb-4 !justify-start !rounded-2xl"
          >
            <Image src="/menu-icon.svg" alt="Logo" width={50} height={66} />
            <span className=" text-xl text-white ">خدمات اوستاوب</span>

            {/* Custom arrow with smooth rotation */}
            <motion.div
              animate={{ rotate: isServicesOpen ? 0 : 180 }}
              transition={{ duration: 0.3 }}
              className="ml-auto mr-10"
            >
              <Image src="/arrow-menu.svg" alt="Arrow" width={16} height={16} />
            </motion.div>
          </ListItemButton>

          {/* Animated dropdown */}
          <Collapse
            in={isServicesOpen}
            timeout="auto"
            unmountOnExit
            className="w-full"
          >
            <List
              component="div"
              className="w-full flex flex-col items-center gap-12 !py-8 "
            >
              {[
                { href: "/custom-website", label: "طراحی وبسایت اختصاصی" },
                { href: "/wordpress", label: "طراحی وبسایت وردپرس" },
                { href: "/ui-ux", label: "طراحی UI / UX" },
                { href: "/seo", label: "سئو" },
                { href: "/content", label: "تولید محتوا" },
              ].map((item) => (
                <div key={item.href} className="w-4/5 ">
                  <Link
                    href={item.href}
                    className="w-full text-white hover:bg-white/10 py-2 px-4 text-lg !rounded-xl mr-10  font-extralight transition-all duration-200"
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
              <div className="h-[50px] w-[15px] border-r-1 border-b-1 rounded-br-xl border-white/80 absolute right-14 top-0"></div>
              <div className="h-[85px] w-[15px] border-r-1 border-b-1 rounded-br-xl border-white/80 absolute right-14 top-10"></div>
              <div className="h-[85px] w-[15px] border-r-1 border-b-1 rounded-br-xl border-white/80 absolute right-14 top-[117px]"></div>
              <div className="h-[85px] w-[15px] border-r-1 border-b-1 rounded-br-xl border-white/80 absolute right-14 top-[193px]"></div>
              <div className="h-[85px] w-[15px] border-r-1 border-b-1 rounded-br-xl border-white/80 absolute right-14 top-[270px]"></div>
            </List>
          </Collapse>

          {/* Main links */}
          {[
            {
              href: "/seo",
              label: "خدمات پس از فروش",
              icon: "/menu-icon-2.svg",
            },
            { href: "/about", label: "درباره ما", icon: "/menu-icon-3.svg" },
            { href: "/contact", label: "تماس با ما", icon: "/menu-icon-4.svg" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="w-[80%] bg-[#B5964D]/40  text-white h-[60px] !rounded-2xl flex items-center gap-3 pr-3 text-xl"
            >
              <Image src={item.icon} alt="Icon" width={50} height={66} />
              {item.label}
            </Link>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default OpenDrawer;
