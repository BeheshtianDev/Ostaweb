import Image from "next/image";

interface Props {
  children: string;
  width?: string;
  height?: string;
}

const SubmitButton = ({ ...items }: Props) => {
  const { children, width = "214px", height = "57px" } = items;
  return (
    <button
      style={{
        width: width,
        height: height,
      }}
      className="bg-[#6F5D32] hover:bg-transparent  hover:border border-[#6F5D32] transition-all relative duration-300 group
            hover:text-[#6F5D32]
             rounded-lg text-white  h-[65px]  inline-flex items-center  "
    >
      <span className={"mx-auto  transition-all duration-300"}>{children}</span>
      <div className="bg-[#0c0c0c] absolute -left-4 w-8 h-8 rounded-full fc">
        <Image
          src="./arrow-up.svg"
          width="20"
          height="10"
          alt="arrow"
          className="group-hover:-translate-x-4 transition-all duration-300"
        />
      </div>
    </button>
  );
};

export default SubmitButton;
