import Image from "next/image";

const Page = () => {
  return (
    <div className="w-full de:h-screen mo:h-auto de:overflow-hidden mo:overflow-y-scroll  de:gap-[80px] flex justify-start items-center  flex-col ">
      <div className="w-full pb-[30px] text-wrap de:fixed mo:block de:top-[95px] mo:mt-[120px] de:mt-0   fss flex-col pr-[16%]">
        <Image src="/star.svg" alt={'star'} width={65} height={23}/>

        <h2 className="!font-bold">سئو</h2>
        <h3 className="w-4/5">با اوستاوب، به اوج دیده شدن در گوگل برسید</h3>
      </div>
      <div className="de:w-[60%] mo:w-full gap-[20px] mo:pt-[100px] de:pt-0 mo:h-screen de:h-auto de:mt-[250px] mo:mt-0 flex-col fs   ">
        <div className="w-full fb mo:flex-col-reverse de:flex-row   de:h-[100px] mo:h-[130px]">
          <div className="de:w-[80%] mo:w-[95%] de:h-[60px] mo:h-[50px] fb px-[20px] bg-white rounded-full relative">
            <Image
              src="/images/mic.png"
              alt="Description"
              width={18}
              height={30}
              className="cursor-pointer"
            />
            <h4 className="w-full text-black pr-[50px] !font-light">
              کلمه کلیدی مد نظر
            </h4>
            <Image
                src="/Searchicon.svg"
                alt="Hero"
                width={21}
                height={100}
                className="absolute right-12"
            />
            {/*<svg*/}
            {/*  xmlns="http://www.w3.org/2000/svg"*/}
            {/*  width="22"*/}
            {/*  height="25"*/}
            {/*  viewBox="0 0 22 25"*/}
            {/*  fill="none"*/}
            {/*>*/}
            {/*  <ellipse*/}
            {/*    cx="10.3153"*/}
            {/*    cy="11.4584"*/}
            {/*    rx="6.02722"*/}
            {/*    ry="7.29167"*/}
            {/*    stroke="#4285F4"*/}
            {/*    stroke-width="2"*/}
            {/*  />*/}
            {/*  <path*/}
            {/*    d="M20.4748 23.75L15.3086 17.5"*/}
            {/*    stroke="#4285F4"*/}
            {/*    stroke-width="2"*/}
            {/*    stroke-linecap="round"*/}
            {/*  />*/}
            {/*</svg>*/}
          </div>
          <Image
            src="/images/google.png"
            alt="Description"
            width={140}
            height={40}
            className="cursor-pointer"
          />
        </div>
        <div className="de:w-full mo:w-[90%] h-[40px] text-nowrap flex justify-center items-end de:gap-[80px] mo:gap-[20px]   border-b border-white/30">
          <h5 className="!font-extralight pb-[10px] !text-white/40 mo:hidden de:block">
            کلمه کلیدی مد نظر
          </h5>
          <h5 className="!font-extralight pb-[10px] !text-white/40  ">
            کلمه کلیدی مد نظر
          </h5>
          <h5 className="!font-extralight pb-[10px] !text-white/40  ">
            کلمه کلیدی مد نظر
          </h5>
          <h5 className=" !font-extralight pb-[10px] !text-white/60  border-b border-white/50 ">
            کلمه کلیدی مد نظر
          </h5>
        </div>
        <div className="de:w-3/5 mo:w-4/5 h-[650px] overflow-y-scroll  flex-col fs gap-[30px] pb-[150px]">
          <div className="w-full flex-col fc pt-[30px]">
            <div className="w-full flex items-center justify-end gap-[50px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4"
                height="15"
                viewBox="0 0 4 15"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4ZM2 5.5C0.9 5.5 0 6.4 0 7.5C0 8.6 0.9 9.5 2 9.5C3.1 9.5 4 8.6 4 7.5C4 6.4 3.1 5.5 2 5.5ZM2 11C0.9 11 0 11.9 0 13C0 14.1 0.9 15 2 15C3.1 15 4 14.1 4 13C4 11.9 3.1 11 2 11Z"
                  fill="white"
                />
              </svg>
              <h5 className="golden !text-[17px] !font-normal">
                https://in.linkedin.com › hemendra-mali-37a706184
              </h5>
            </div>
            <div className="w-full flex justify-end items-center">
              <h3>قیمت و مشخصات طراحی وبسایت اختصاصی</h3>
            </div>
            <div>
              <h5 className="text-justify !font-extralight">
                مشتریان عزیز ما با ارسال پیام‌های رضایتمندی، از کیفیت بالای
                خدمات طراحی وبسایت اوستاوب ابراز خشنودی کرده‌اند. آنها به طور
                ویژه به طراحی زیبا، کاربری آسان و همچنین پشتیبانی حرفه‌ای تیم ما
                اشاره کرده‌اند. این نظرات ارزشمند، انگیزه ما را برای ارائه خدمات
                بهتر و نوآورانه‌تر دوچندان می‌کند. ما مفتخریم که توانسته‌ایم
                اعتماد و رضایت مشتریان خود را جلب کنیم
              </h5>
            </div>
          </div>
          <div className="w-full flex-col fc pt-[30px]">
            <div className="w-full flex items-center justify-end gap-[50px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4"
                height="15"
                viewBox="0 0 4 15"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4ZM2 5.5C0.9 5.5 0 6.4 0 7.5C0 8.6 0.9 9.5 2 9.5C3.1 9.5 4 8.6 4 7.5C4 6.4 3.1 5.5 2 5.5ZM2 11C0.9 11 0 11.9 0 13C0 14.1 0.9 15 2 15C3.1 15 4 14.1 4 13C4 11.9 3.1 11 2 11Z"
                  fill="white"
                />
              </svg>
              <h5 className="golden !text-[17px] !font-normal">
                https://in.linkedin.com › hemendra-mali-37a706184
              </h5>
            </div>
            <div className="w-full flex justify-end items-center">
              <h3>قیمت و مشخصات طراحی وبسایت اختصاصی</h3>
            </div>
            <div>
              <h5 className="text-justify !font-extralight">
                مشتریان عزیز ما با ارسال پیام‌های رضایتمندی، از کیفیت بالای
                خدمات طراحی وبسایت اوستاوب ابراز خشنودی کرده‌اند. آنها به طور
                ویژه به طراحی زیبا، کاربری آسان و همچنین پشتیبانی حرفه‌ای تیم ما
                اشاره کرده‌اند. این نظرات ارزشمند، انگیزه ما را برای ارائه خدمات
                بهتر و نوآورانه‌تر دوچندان می‌کند. ما مفتخریم که توانسته‌ایم
                اعتماد و رضایت مشتریان خود را جلب کنیم
              </h5>
            </div>
          </div>
          <div className="w-full flex-col fc pt-[30px]">
            <div className="w-full flex items-center justify-end gap-[50px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4"
                height="15"
                viewBox="0 0 4 15"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4ZM2 5.5C0.9 5.5 0 6.4 0 7.5C0 8.6 0.9 9.5 2 9.5C3.1 9.5 4 8.6 4 7.5C4 6.4 3.1 5.5 2 5.5ZM2 11C0.9 11 0 11.9 0 13C0 14.1 0.9 15 2 15C3.1 15 4 14.1 4 13C4 11.9 3.1 11 2 11Z"
                  fill="white"
                />
              </svg>
              <h5 className="golden !text-[17px] !font-normal">
                https://in.linkedin.com › hemendra-mali-37a706184
              </h5>
            </div>
            <div className="w-full flex justify-end items-center">
              <h3>قیمت و مشخصات طراحی وبسایت اختصاصی</h3>
            </div>
            <div>
              <h5 className="text-justify !font-extralight">
                مشتریان عزیز ما با ارسال پیام‌های رضایتمندی، از کیفیت بالای
                خدمات طراحی وبسایت اوستاوب ابراز خشنودی کرده‌اند. آنها به طور
                ویژه به طراحی زیبا، کاربری آسان و همچنین پشتیبانی حرفه‌ای تیم ما
                اشاره کرده‌اند. این نظرات ارزشمند، انگیزه ما را برای ارائه خدمات
                بهتر و نوآورانه‌تر دوچندان می‌کند. ما مفتخریم که توانسته‌ایم
                اعتماد و رضایت مشتریان خود را جلب کنیم
              </h5>
            </div>
          </div>
          <div className="w-full flex-col fc pt-[30px]">
            <div className="w-full flex items-center justify-end gap-[50px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4"
                height="15"
                viewBox="0 0 4 15"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4ZM2 5.5C0.9 5.5 0 6.4 0 7.5C0 8.6 0.9 9.5 2 9.5C3.1 9.5 4 8.6 4 7.5C4 6.4 3.1 5.5 2 5.5ZM2 11C0.9 11 0 11.9 0 13C0 14.1 0.9 15 2 15C3.1 15 4 14.1 4 13C4 11.9 3.1 11 2 11Z"
                  fill="white"
                />
              </svg>
              <h5 className="golden !text-[17px] !font-normal">
                https://in.linkedin.com › hemendra-mali-37a706184
              </h5>
            </div>
            <div className="w-full flex justify-end items-center">
              <h3>قیمت و مشخصات طراحی وبسایت اختصاصی</h3>
            </div>
            <div>
              <h5 className="text-justify !font-extralight">
                مشتریان عزیز ما با ارسال پیام‌های رضایتمندی، از کیفیت بالای
                خدمات طراحی وبسایت اوستاوب ابراز خشنودی کرده‌اند. آنها به طور
                ویژه به طراحی زیبا، کاربری آسان و همچنین پشتیبانی حرفه‌ای تیم ما
                اشاره کرده‌اند. این نظرات ارزشمند، انگیزه ما را برای ارائه خدمات
                بهتر و نوآورانه‌تر دوچندان می‌کند. ما مفتخریم که توانسته‌ایم
                اعتماد و رضایت مشتریان خود را جلب کنیم
              </h5>
            </div>
          </div>
          <div className="w-full flex-col fc pt-[30px]">
            <div className="w-full flex items-center justify-end gap-[50px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4"
                height="15"
                viewBox="0 0 4 15"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4ZM2 5.5C0.9 5.5 0 6.4 0 7.5C0 8.6 0.9 9.5 2 9.5C3.1 9.5 4 8.6 4 7.5C4 6.4 3.1 5.5 2 5.5ZM2 11C0.9 11 0 11.9 0 13C0 14.1 0.9 15 2 15C3.1 15 4 14.1 4 13C4 11.9 3.1 11 2 11Z"
                  fill="white"
                />
              </svg>
              <h5 className="golden !text-[17px] !font-normal">
                https://in.linkedin.com › hemendra-mali-37a706184
              </h5>
            </div>
            <div className="w-full flex justify-end items-center">
              <h3>قیمت و مشخصات طراحی وبسایت اختصاصی</h3>
            </div>
            <div>
              <h5 className="text-justify !font-extralight">
                مشتریان عزیز ما با ارسال پیام‌های رضایتمندی، از کیفیت بالای
                خدمات طراحی وبسایت اوستاوب ابراز خشنودی کرده‌اند. آنها به طور
                ویژه به طراحی زیبا، کاربری آسان و همچنین پشتیبانی حرفه‌ای تیم ما
                اشاره کرده‌اند. این نظرات ارزشمند، انگیزه ما را برای ارائه خدمات
                بهتر و نوآورانه‌تر دوچندان می‌کند. ما مفتخریم که توانسته‌ایم
                اعتماد و رضایت مشتریان خود را جلب کنیم
              </h5>
            </div>
          </div>
          <div className="w-full flex-col fc pt-[30px]">
            <div className="w-full flex items-center justify-end gap-[50px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4"
                height="15"
                viewBox="0 0 4 15"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4ZM2 5.5C0.9 5.5 0 6.4 0 7.5C0 8.6 0.9 9.5 2 9.5C3.1 9.5 4 8.6 4 7.5C4 6.4 3.1 5.5 2 5.5ZM2 11C0.9 11 0 11.9 0 13C0 14.1 0.9 15 2 15C3.1 15 4 14.1 4 13C4 11.9 3.1 11 2 11Z"
                  fill="white"
                />
              </svg>
              <h5 className="golden !text-[17px] !font-normal">
                https://in.linkedin.com › hemendra-mali-37a706184
              </h5>
            </div>
            <div className="w-full flex justify-end items-center">
              <h3>قیمت و مشخصات طراحی وبسایت اختصاصی</h3>
            </div>
            <div>
              <h5 className="text-justify !font-extralight">
                مشتریان عزیز ما با ارسال پیام‌های رضایتمندی، از کیفیت بالای
                خدمات طراحی وبسایت اوستاوب ابراز خشنودی کرده‌اند. آنها به طور
                ویژه به طراحی زیبا، کاربری آسان و همچنین پشتیبانی حرفه‌ای تیم ما
                اشاره کرده‌اند. این نظرات ارزشمند، انگیزه ما را برای ارائه خدمات
                بهتر و نوآورانه‌تر دوچندان می‌کند. ما مفتخریم که توانسته‌ایم
                اعتماد و رضایت مشتریان خود را جلب کنیم
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
