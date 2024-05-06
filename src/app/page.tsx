'use client'
import { useRef } from "react";
import Image from "next/image";
import DesktopNav from "./Components/DesktopNav";
import { useInView } from "framer-motion";
import Headshot from "./Components/Headshot";




function Section({children}: any) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
      >
        {children}
      </span>
    </section>
  );
}

export default function Home() {




  return (
    <>
      <div>
          <DesktopNav />

        <Section>
          <div id="Top" className="w-full min-h-[600px] flex justify-between px-72">
              <div className="mt-28">
                  <p className="lato text-9xl font-bold text-wrap w-1/2">Caleb Sylvia</p>
                  <p className="pt-8 w-1/2">I am an aspiring Software Engineer currently studying at Codestack Academy.</p>
              </div>
              <div className="">
                  <Headshot/>
              </div>
          </div>
          </Section>
          
          <div id="AboutMe" className="w-full min-h-[500px] bg-[#495464]">

          </div>
          <div id="Projects">

          </div>
          <div id="Skills">

          </div>
      </div>
    </>
  );
}
