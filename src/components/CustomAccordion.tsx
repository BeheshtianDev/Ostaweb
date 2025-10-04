import { useState } from "react";

const accordionItems = [
  {
    id: "1",
    title: "فرایند تولید محتوا چگونه است؟",
    content:
      "در دنیای امروز، شبکه‌های اجتماعی به یکی از مهم‌ترین کانال‌های ارتباطی کسب‌وکارها با مخاطبان تبدیل شده‌اند... در دنیای امروز، شبکه‌های اجتماعی به یکی از مهم‌ترین کانال‌های ارتباطی کسب‌وکارها با مخاطبان تبدیل شده‌اند. برای موفقیت در این فضا، تولید محتوای جذاب و هدفمند امری ضروری است.",
  },
  {
    id: "2",
    title: "چگونه از کیفیت محتوای تولید شده اطمینان حاصل کنم؟",
    content: "در دنیای امروز، شبکه‌های اجتماعی به یکی از مهم‌ترین کانال‌های ارتباطی کسب‌وکارها با مخاطبان تبدیل شده‌اند... در دنیای امروز، شبکه‌های اجتماعی به یکی از مهم‌ترین کانال‌های ارتباطی کسب‌وکارها با مخاطبان تبدیل شده‌اند. برای موفقیت در این فضا، تولید محتوای جذاب و هدفمند امری ضروری است.npm       ",
  },
  {
    id: "3",
    title: "چه عواملی بر روی هزینه تولید محتوا تاثیرگذار است؟",
    content: "در دنیای امروز، شبکه‌های اجتماعی به یکی از مهم‌ترین کانال‌های ارتباطی کسب‌وکارها با مخاطبان تبدیل شده‌اند... در دنیای امروز، شبکه‌های اجتماعی به یکی از مهم‌ترین کانال‌های ارتباطی کسب‌وکارها با مخاطبان تبدیل شده‌اند. برای موفقیت در این فضا، تولید محتوای جذاب و هدفمند امری ضروری است.npm       ",
  },
  {
    id: "4",
    title: "آیا می‌توانید محتوای متناسب با هر پلتفرمی تولید کنید؟",
    content: "در دنیای امروز، شبکه‌های اجتماعی به یکی از مهم‌ترین کانال‌های ارتباطی کسب‌وکارها با مخاطبان تبدیل شده‌اند... در دنیای امروز، شبکه‌های اجتماعی به یکی از مهم‌ترین کانال‌های ارتباطی کسب‌وکارها با مخاطبان تبدیل شده‌اند. برای موفقیت در این فضا، تولید محتوای جذاب و هدفمند امری ضروری است.npm       ",
  },
];

export default function CustomAccordion() {
  const [openKey, setOpenKey] = useState("1");

  const toggleItem = (id: string) => {
    setOpenKey((prev) => (prev === id ? "" : id));
  };

  return (
    <div className="de:w-1/2 mo:w-4/5 flex flex-col gap-[50px]">
      {accordionItems.map((item) => {
        const isOpen = openKey === item.id;
        return (
          <div
            key={item.id}
            className="mo:bg-neutral-800/80 de:bg-transparent mo:py-5 de:py-0 px-2.5  de:border-none mo:border border-white/10 rounded-lg"
          >
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full flex justify-between items-start text-[#B5964D] text-[18px] font-normal py-2 cursor-pointer"
            >
              <span className="text-right  w-full text-wrap">{item.title}</span>
              <svg
                className={`w-4 h-4 ml-2 transition-transform duration-500   ${
                  isOpen ? "rotate-0" : "rotate-90"
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-700 ${
                isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-white text-sm font-extralight leading-7 pt-3 pr-1">
                {item.content}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
