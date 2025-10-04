"use client";

import Link from "next/link";
import React from "react";

const AboutUsButton = () => {
  return (
    <Link
      href="/test"
      className="w-[210px] h-[60px] gold rounded-lg fc tracking-wider hover:tracking-tight t group relative overflow-hidden"
    >
      <div className="w-[120px] h-[35px] rounded-full bg-[#312505]  blur-xl absolute opacity-0 group-hover:opacity-50 t"></div>
      <h4 className="z-10">درباره ما</h4>
    </Link>
  );
};

export default AboutUsButton;
