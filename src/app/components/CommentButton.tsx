"use client";

import Link from "next/link";
import React from "react";

const CommentButton = () => {
  return (
    <Link
      href="/comment"
      className="w-[480px] h-[60px] gold rounded-lg fc tracking-wider hover:tracking-tight t	group relative overflow-hidden"
    >
      <div className="w-[250px] h-[60px] rounded-full bg-[#312505]  blur-2xl absolute opacity-0 group-hover:opacity-50 t"></div>

      <h4 className="z-10">نظرات مشتریان</h4>
    </Link>
  );
};

export default CommentButton;
