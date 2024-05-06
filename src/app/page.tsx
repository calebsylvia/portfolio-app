'use client'
import { useRef } from "react";
import Image from "next/image";
import DesktopNav from "./Components/DesktopNav";
import { useInView } from "framer-motion";
import Headshot from "./Components/Headshot";
import Divide from "./Components/Divide";
import proptrac from "@/app/assets/proptracthumbnail.png"
import dantes from "@/app/assets/dantsthumbnail.png"
import weather from "@/app/assets/weathersprintthumbnail.png"
import azure from "@/app/icons/azure.svg"




function Section({children}: any) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
      >
        {children}
      </span>
    </section>
  );
}

function SectionRight({children}: any) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
      >
        {children}
      </span>
    </section>
  );
}

function SectionDelay({children}: any) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 1.5s"
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

        
          <div id="Top" className="w-full min-h-[800px] flex justify-between px-72">
             <Section>
              <div className="mt-28">
                  <p className="lato text-9xl font-bold text-wrap w-1/2">Caleb Sylvia</p>
                  <p className="late text-2xl font-bold pt-3">Junior Web Developer</p>
                  <p className="pt-2 w-1/2 text-[#495464]">I am an aspiring Software Engineer currently studying at Codestack Academy.</p>
              </div>
              </Section>
              <div>
                  <Headshot/>
              </div>
          </div>
          <Divide/>
          <div id="AboutMe" className="w-full min-h-[500px] bg-[#495464] flex justify-evenly px-56">
              <div className="flex">
                  <Section>
                      <p className="lato text-7xl font-semibold text-[#E8E8E8] pt-20 w-1/3">ABOUT <em className="text-[#B3C8CF]">CALEB</em></p>
                  </Section>
              </div>
              <div className="pt-28 pl-72">
                  <SectionRight>
                    <p className="text-[#E8E8E8] w-full">Hello, my name is Caleb Sylvia. I am 23 years old, located in Stockton, California. I have lived in Stockton almost my entire life except for the few years I lived in Washington when I was younger. I am currently a student at Codestack Academy located here in Stockton aspiring to become a software engineer one day. On the side I enjoy playing video games with my friends, being active in the gym, and listening to music. Some of my favorite artists are Bryson Tiller, MarQ, Malcom Todd, Omar Apollo, and many more. I love to go to concerts, one year I saw Omar Apollo 4 times within two months, concerts allow me to fully indulge and experience the beauty of music. Fun fact I used to work to work at Dutch Bros Coffee for 3 years which made me into a social butterfly and excellent at communicating although I was incredibly socially awkward before then.</p>
                    <br />
                    <p className="text-[#E8E8E8]">
                      Regarding Software Development I am very invested into my studies and am looking forward into what the future holds for myself. I am available for hire, for any questions regarding work or general questions feel free to reach out - <a href="#ContactMe" className="underline text-[#B9F3FC]">Contact Me</a>
                    </p>
                  </SectionRight>
              </div>
          </div>
          <div id="Projects" className="min-h-[750px]">
            <div className="space-y-8 my-6">
              <div className="flex justify-evenly">
                  <div className="">
                    <a href="https://proptrac-app.vercel.app/" target="_blank">
                      <Image src={proptrac} alt="PropTrac Thumbnail" className="w-[500px] bg-[#BBBFCA] p-2 rounded-xl"/>
                      </a>
                  </div>
                  <div className="w-1/2 my-auto">
                  <SectionRight>
                      <p className="lato font-semibold text-3xl text-[#495464]">PropTrac (In Progress)</p>
                      <p className="roboto">PropTrac is an all in one property management tool allowing Property Managers to have full control of all their properties no matter where they are listed. The site allows a Property Manager or a Tenant. The property manager has their dashboard allowing them to see data of their properties. This application will help managers keep track of their properties and make it easy to pick what properties to prioritize. This application is also aiming to allow users to take payment from their respective Tenants. On the Tenant dashboard they can keep track of their payments and are able to send requests in the event that maintenance is required.</p>
                      <SectionDelay>
                      <svg viewBox="0 0 128 128" width={"50px"} xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="azure-original-a" x1="60.919" y1="9.602" x2="18.667" y2="134.423" gradientUnits="userSpaceOnUse"><stop stop-color="#114A8B"/><stop offset="1" stop-color="#0669BC"/></linearGradient><linearGradient id="azure-original-b" x1="74.117" y1="67.772" x2="64.344" y2="71.076" gradientUnits="userSpaceOnUse"><stop stop-opacity=".3"/><stop offset=".071" stop-opacity=".2"/><stop offset=".321" stop-opacity=".1"/><stop offset=".623" stop-opacity=".05"/><stop offset="1" stop-opacity="0"/></linearGradient><linearGradient id="azure-original-c" x1="68.742" y1="5.961" x2="115.122" y2="129.525" gradientUnits="userSpaceOnUse"><stop stop-color="#3CCBF4"/><stop offset="1" stop-color="#2892DF"/></linearGradient></defs><path d="M46.09.002h40.685L44.541 125.137a6.485 6.485 0 01-6.146 4.413H6.733a6.482 6.482 0 01-5.262-2.699 6.474 6.474 0 01-.876-5.848L39.944 4.414A6.488 6.488 0 0146.09 0z" fill="url(#azure-original-a)" transform="translate(.587 4.468) scale(.91904)"/><path d="M97.28 81.607H37.987a2.743 2.743 0 00-1.874 4.751l38.1 35.562a5.991 5.991 0 004.087 1.61h33.574z" fill="#0078d4"/><path d="M46.09.002A6.434 6.434 0 0039.93 4.5L.644 120.897a6.469 6.469 0 006.106 8.653h32.48a6.942 6.942 0 005.328-4.531l7.834-23.089 27.985 26.101a6.618 6.618 0 004.165 1.519h36.396l-15.963-45.616-46.533.011L86.922.002z" fill="url(#azure-original-b)" transform="translate(.587 4.468) scale(.91904)"/><path d="M98.055 4.408A6.476 6.476 0 0091.917.002H46.575a6.478 6.478 0 016.137 4.406l39.35 116.594a6.476 6.476 0 01-6.137 8.55h45.344a6.48 6.48 0 006.136-8.55z" fill="url(#azure-original-c)" transform="translate(.587 4.468) scale(.91904)"/></svg>
                      <Image src={azure} alt={""}/>
                      </SectionDelay>
                      </SectionRight>
                  </div>
              </div>
              <div className="flex justify-evenly">
                  <div className="">
                    <a href="https://proptrac-app.vercel.app/" target="_blank">
                      <Image src={dantes} alt="Dante's Pizza Thumbnail" className="w-[500px] bg-[#BBBFCA] p-2 rounded-xl"/>
                      </a>
                  </div>
                  <div className="w-1/2 my-auto">
                  <SectionRight>
                      <p className="lato font-semibold text-3xl text-[#495464]">Business Redesign</p>
                      <p className="roboto">Business Redesign was a project assigned to me and my partner to find a local business and try and revamp their website. We had come to the conclusion that a local business called Dante's Pizza could you a little more love on their website. We had built this site in standard HTML, CSS, and Javascript but further down the line we would like to rebuild it in Next.JS. This site was one of the top in our class for how well put together and designed it was. As of right now this webpage is strictly front end development but is scaleable to become full stack.</p>
                      </SectionRight>
                  </div>
              </div>
              <div className="flex justify-evenly">
                  <div className="">
                    <a href="https://proptrac-app.vercel.app/" target="_blank">
                      <Image src={weather} alt="Weather App Thumbnail" className="w-[500px] bg-[#BBBFCA] p-2 rounded-xl"/>
                      </a>
                  </div>
                  <div className="w-1/2 my-auto">
                  <SectionRight>
                      <p className="lato font-semibold text-3xl text-[#495464]">Weather App (React Build)</p>
                      <p className="roboto">PropTrac is an all in one property management tool allowing Property Managers to have full control of all their properties no matter where they are listed. The site allows a Property Manager or a Tenant. The property manager has their dashboard allowing them to see data of their properties. This application will help managers keep track of their properties and make it easy to pick what properties to prioritize. This application is also aiming to allow users to take payment from their respective Tenants. On the Tenant dashboard they can keep track of their payments and are able to send requests in the event that maintenance is required.</p>
                      </SectionRight>
                  </div>
              </div>
            </div>
          </div>
          <div id="Skills" className="min-h-[450px] bg-[#495464]">

          </div>
          <div id="ContactMe" className="min-h-[300px]">

          </div>
      </div>
    </>
  );
}
