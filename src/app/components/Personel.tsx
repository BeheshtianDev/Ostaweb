import React from "react";

const Personel = () => {
  return (
    <div className="w-[300px] h-[320px] border rounded-2xl relative fc p-5">
      <div className="w-[120px] h-[35px] fc gold top-[-15px] absolute rounded-sm border">
        <h5>طراح سایت</h5>
      </div>
      <div className="w-full h-full relative fc">
        <div className="bg-[url('/images/sold.png')] w-full h-full bg-no-repeat mt-[30px] bg-top"></div>
        <div className="w-[200px] h-[50px] bg-white fc rounded-[10px] absolute bottom-2 text-black">
          <h4>مهدی کریمی</h4>
        </div>
      </div>
    </div>
  );
};

export default Personel;
