import { useEffect, useState } from "react";
import axios from "axios";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./styles.css";

interface Comment {
  id: number;
  name: string;
  comment: string;
  rating: number;
}

const MobileCardSlider = () => {
  // 1. Local default data
  const defaultComments: Comment[] = [
    {
      id: 1,
      name: "سارا احمدی",
      comment: "واقعا تجربه خوبی بود، ممنون از تیم شما.",
      rating: 5,
    },
    {
      id: 2,
      name: "علی رضایی",
      comment: "پشتیبانی سریع و برخورد حرفه‌ای داشتند.",
      rating: 4,
    },
    {
      id: 3,
      name: "زهرا کاظمی",
      comment: "خدمات معمولی بود ولی به موقع انجام شد.",
      rating: 3,
    },
  ];

  const [comments, setComments] = useState<Comment[]>(defaultComments);

  // 2. Fetch from API on mount
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await axios.get("https://your-api.com/comments"); // 🔁 Replace with real URL
        if (res.status === 200 && Array.isArray(res.data)) {
          setComments(res.data);
        }
      } catch (err) {
        console.warn("Using default comments. Error fetching:", err);
        // fallback stays on defaultComments
      }
    };

    fetchComments();
  }, []);

  return (
    <div className="de:hidden">
      <Swiper
        slidesPerView={1.5}
        initialSlide={0}
        spaceBetween={34}
        freeMode={true}
        pagination={{ clickable: true }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {comments.map((c) => (
          <SwiperSlide key={c.id} className="w-[300px]">
            <div className="w-[300px] h-[200px]  rounded-xl p-4 text-white  text-right">
              <p className="text-lg font-semibold mb-2">{c.name}</p>
              <p className="text-sm  mb-3 line-clamp-3">{c.comment}</p>
              <p className="text-yellow-500 text-sm">⭐ {c.rating} / 5</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MobileCardSlider;
