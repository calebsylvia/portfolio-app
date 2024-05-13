import Image from "next/image";
import React from "react";
import caleb from "@/app/assets/Caleb_Sylvia_02_CSAS6_Headshots.jpg";

const Headshot = () => {
  return (
    <>
    <div className="md:pt-20">
        <div className="animate-[spin_5s_linear_infinite] bg-gradient-to-r from-[#495464] from-50% to-[rgb(244,244,242)] p-0  md:p-36 lg:p-48 rounded-[250px] md:rounded-[50%] relative"></div>
        <Image src={caleb} alt="Caleb Sylvia Headshot" className="w-56 md:w-72 lg:w-96 rounded-[50%] p-2 absolute top-[425px] md:top-[175px]"/>
    </div>
    </>
  );
};

export default Headshot;
