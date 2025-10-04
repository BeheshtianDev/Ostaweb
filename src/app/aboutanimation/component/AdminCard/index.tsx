"use client"; // Next.js App Router

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules"; // 👈 import module
import "swiper/css";
import "swiper/css/pagination"; // 👈 import pagination styles
const teamMembers = [
  { role: "طراح سایت", name: "امید جابری", img: "/images/team/Seyf.png" },
  { role: "طراح سایت", name: "امید جابری", img: "/images/team/Mohammadi.png" },
  { role: "طراح سایت", name: "امید جابری", img: "/images/team/Beheshtian.png" },
  { role: "طراح سایت", name: "امید جابری", img: "/images/team/Jaberi.png" },
  { role: "طراح سایت", name: "امید جابری", img: "/images/team/Mosavi.png" },
  { role: "طراح سایت", name: "امید جابری", img: "/images/team/Novin.png" },
  { role: "طراح سایت", name: "امید جابری", img: "/images/team/Modaresi.png" },
  { role: "طراح سایت", name: "امید جابری", img: "/images/team/Hoshmand.png" },
];

const AdminCard = () => {
  return (
    <div className="w-[80%] mx-auto">
      <Swiper
        className="!h-[500px] !pt-10 mt-20"
        spaceBetween={20}
        modules={[Pagination]}
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
      >
        {teamMembers.map((member, index) => (
          <SwiperSlide key={index} className="!overflow-visible">
            <div className="w-[300px] h-[320px] border flex relative flex-col justify-center items-center rounded-2xl mx-auto">
              {/* Role */}
              <div className="w-1/3 h-8 border absolute top-[-16px] rounded-md bg-[#6f5d32] flex justify-center items-center text-sm font-light">
                {member.role}
              </div>

              {/* Image */}
              <img
                src={member.img}
                alt={member.name}
                className="w-4/5 rounded-xl bg-gradient-to-t from-black via-black/70 to-transparent"
              />

              {/* Name */}
              <div className="w-4/6 h-12 bg-white rounded-lg absolute bottom-5 text-lg text-black flex justify-center items-center">
                {member.name}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AdminCard;
