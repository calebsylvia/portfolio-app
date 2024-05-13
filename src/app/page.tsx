"use client";
import { useRef } from "react";
import Image from "next/image";
import DesktopNav from "./Components/DesktopNav";
import { useInView } from "framer-motion";
import Headshot from "./Components/Headshot";
import Divide from "./Components/Divide";
import proptrac from "@/app/assets/proptracthumbnail.png";
import dantes from "@/app/assets/dantsthumbnail.png";
import weather from "@/app/assets/weathersprintthumbnail.png";
import azure from "@/app/icons/azure.svg";
import {
  DiscordLogo,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";
import MobileNav from "./Components/MobileNav";

function Section({ children }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </span>
    </section>
  );
}

function SectionRight({ children }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </span>
    </section>
  );
}

function SectionUp({ children }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateY(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </span>
    </section>
  );
}

function SectionDelay({ children }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
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
        <div className="hidden md:block">
        <DesktopNav />
        </div>
        <div className="block md:hidden">
          <MobileNav/>
        </div>

        <div
          id="Top"
          className="w-full min-h-[600px] lg:min-h-[800px] flex max-md:flex-col md:justify-between px-10 lg:px-16 xl:px-60 2xl:px-72"
        >
          <Section>
            <div className="mt-16 md:mt-28">
              <p className="lato text-3xl md:text-8xl lg:text-9xl font-bold text-wrap w-1/2">
                Caleb Sylvia
              </p>
              <p className="late text-2xl font-bold pt-3">
                Junior Web Developer
              </p>
              <p className="pt-2 w-1/2 text-[#495464]">
                I am an aspiring Software Engineer currently studying at
                Codestack Academy.
              </p>
            </div>
          </Section>
          <div className="max-md:ml-8">
            <Headshot />
          </div>
        </div>
        <Divide />
        <div
          id="AboutMe"
          className="w-full min-h-[500px] bg-[#495464] lg:flex justify-evenly px-10 md:px-20 xl:px-56"
        >
          <div className="flex">
            <Section>
              <p className="lato text-5xl md:text-7xl font-semibold text-[#E8E8E8] pt-12 lg:pt-20 w-1/3 max-lg:text-center">
                ABOUT <em className="text-[#B3C8CF]">CALEB</em>
              </p>
            </Section>
          </div>
          <div className="lg:pt-16 2xl:pt-28 lg:pl-20 xl:pl-72">
            <SectionRight>
              <p className="text-[#E8E8E8] w-full mt-5 lg:mt-0">
                Hello, my name is Caleb Sylvia. I am 23 years old, located in
                Stockton, California. I have lived in Stockton almost my entire
                life except for the few years I lived in Washington when I was
                younger. I am currently a student at Codestack Academy located
                here in Stockton aspiring to become a software engineer one day.
                On the side I enjoy playing video games with my friends, being
                active in the gym, and listening to music. Some of my favorite
                artists are Bryson Tiller, MarQ, Malcom Todd, Omar Apollo, and
                many more. Fun fact I used to work to work at Dutch Bros Coffee for 3 years which made me into a
                social butterfly and excellent at communicating although I was
                incredibly socially awkward before then.
              </p>
              <br />
              <p className="text-[#E8E8E8] pb-10 2xl:pb-0">
                Regarding Software Development I am very invested into my
                studies and am looking forward into what the future holds for
                myself. I am available for hire, for any questions regarding
                work or general questions feel free to reach out -{" "}
                <a href="#ContactMe" className="underline text-[#B9F3FC]">
                  Contact Me
                </a>
              </p>
            </SectionRight>
          </div>
        </div>
        <div id="Projects" className="min-h-[750px]">
          <div className="space-y-12 lg:space-y-8 my-8">
            <p className="text-5xl font-semibold text-black text-center py-5">
              Projects
            </p>
            <div className="flex max-lg:flex-col lg:justify-evenly">
              <div className="max-lg:mx-auto">
                <a href="https://proptrac-app.vercel.app/" target="_blank">
                  <Image
                    src={proptrac}
                    alt="PropTrac Thumbnail"
                    className="w-[350px] md:w-[450px] xl:w-[500px] bg-[#BBBFCA] p-2 rounded-xl"
                  />
                </a>
              </div>
              <div className="w-5/6 md:w-1/2 my-auto max-lg:mx-auto max-lg:pt-5">
                <SectionRight>
                  <p className="lato font-semibold text-2xl xl:text-3xl text-[#495464]">
                    PropTrac (In Progress)
                  </p>
                  <p className="roboto max-xl:text-sm">
                    PropTrac is an all in one property management tool allowing
                    Property Managers to have full control of all their
                    properties no matter where they are listed. The site allows
                    a Property Manager or a Tenant. The property manager has
                    their dashboard allowing them to see data of their
                    properties. This application will help managers keep track
                    of their properties and make it easy to pick what properties
                    to prioritize. This application is also aiming to allow
                    users to take payment from their respective Tenants. On the
                    Tenant dashboard they can keep track of their payments and
                    are able to send requests in the event that maintenance is
                    required.
                  </p>
                  <SectionDelay>
                    <div className="flex space-x-3 pt-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 128 128"
                        width={"50px"}
                      >
                        <circle cx="64" cy="64" r="64" />
                        <path
                          fill="url(#a)"
                          d="M106.317 112.014 49.167 38.4H38.4v51.179h8.614v-40.24l52.54 67.884a64.216 64.216 0 0 0 6.763-5.209z"
                        />
                        <path
                          fill="url(#b)"
                          d="M81.778 38.4h8.533v51.2h-8.533z"
                        />
                        <defs>
                          <linearGradient
                            id="a"
                            x1="109"
                            x2="144.5"
                            y1="116.5"
                            y2="160.5"
                            gradientTransform="scale(.71111)"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#fff" />
                            <stop
                              offset="1"
                              stop-color="#fff"
                              stop-opacity="0"
                            />
                          </linearGradient>
                          <linearGradient
                            id="b"
                            x1="121"
                            x2="120.799"
                            y1="54"
                            y2="106.875"
                            gradientTransform="scale(.71111)"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#fff" />
                            <stop
                              offset="1"
                              stop-color="#fff"
                              stop-opacity="0"
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 128 128"
                        width={"50px"}
                      >
                        <path
                          d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0"
                          fill="#38bdf8"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 128 128"
                        width={"50px"}
                      >
                        <path fill="#fff" d="M22.67 47h99.67v73.67H22.67z" />
                        <path
                          data-name="original"
                          fill="#007acc"
                          d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73L82 101l3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51 59h21.83z"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 128 128"
                        width={"50px"}
                      >
                        <path
                          fill="#9B4F96"
                          d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z"
                        />
                        <path
                          fill="#68217A"
                          d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z"
                        />
                        <path
                          fill="#fff"
                          d="M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6zM97 66.2l.9-4.3h-4.2v-4.7h5.1L100 51h4.9l-1.2 6.1h3.8l1.2-6.1h4.8l-1.2 6.1h2.4v4.7h-3.3l-.9 4.3h4.2v4.7h-5.1l-1.2 6h-4.9l1.2-6h-3.8l-1.2 6h-4.8l1.2-6h-2.4v-4.7H97zm4.8 0h3.8l.9-4.3h-3.8l-.9 4.3z"
                        />
                      </svg>
                      <svg
                        viewBox="0 0 128 128"
                        width={"50px"}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <defs>
                          <linearGradient
                            id="azure-original-a"
                            x1="60.919"
                            y1="9.602"
                            x2="18.667"
                            y2="134.423"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#114A8B" />
                            <stop offset="1" stop-color="#0669BC" />
                          </linearGradient>
                          <linearGradient
                            id="azure-original-b"
                            x1="74.117"
                            y1="67.772"
                            x2="64.344"
                            y2="71.076"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-opacity=".3" />
                            <stop offset=".071" stop-opacity=".2" />
                            <stop offset=".321" stop-opacity=".1" />
                            <stop offset=".623" stop-opacity=".05" />
                            <stop offset="1" stop-opacity="0" />
                          </linearGradient>
                          <linearGradient
                            id="azure-original-c"
                            x1="68.742"
                            y1="5.961"
                            x2="115.122"
                            y2="129.525"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#3CCBF4" />
                            <stop offset="1" stop-color="#2892DF" />
                          </linearGradient>
                        </defs>
                        <path
                          d="M46.09.002h40.685L44.541 125.137a6.485 6.485 0 01-6.146 4.413H6.733a6.482 6.482 0 01-5.262-2.699 6.474 6.474 0 01-.876-5.848L39.944 4.414A6.488 6.488 0 0146.09 0z"
                          fill="url(#azure-original-a)"
                          transform="translate(.587 4.468) scale(.91904)"
                        />
                        <path
                          d="M97.28 81.607H37.987a2.743 2.743 0 00-1.874 4.751l38.1 35.562a5.991 5.991 0 004.087 1.61h33.574z"
                          fill="#0078d4"
                        />
                        <path
                          d="M46.09.002A6.434 6.434 0 0039.93 4.5L.644 120.897a6.469 6.469 0 006.106 8.653h32.48a6.942 6.942 0 005.328-4.531l7.834-23.089 27.985 26.101a6.618 6.618 0 004.165 1.519h36.396l-15.963-45.616-46.533.011L86.922.002z"
                          fill="url(#azure-original-b)"
                          transform="translate(.587 4.468) scale(.91904)"
                        />
                        <path
                          d="M98.055 4.408A6.476 6.476 0 0091.917.002H46.575a6.478 6.478 0 016.137 4.406l39.35 116.594a6.476 6.476 0 01-6.137 8.55h45.344a6.48 6.48 0 006.136-8.55z"
                          fill="url(#azure-original-c)"
                          transform="translate(.587 4.468) scale(.91904)"
                        />
                      </svg>
                    </div>
                  </SectionDelay>
                </SectionRight>
              </div>
            </div>
            <div className="flex max-lg:flex-col lg:justify-evenly">
              <div className="max-lg:mx-auto">
                <a href="https://business-redesign.vercel.app/" target="_blank">
                  <Image
                    src={dantes}
                    alt="Dante's Pizza Thumbnail"
                    className="w-[350px] md:w-[450px] xl:w-[500px] bg-[#BBBFCA] p-2 rounded-xl"
                  />
                </a>
              </div>
              <div className="w-5/6 md:w-1/2 max-lg:mx-auto my-auto">
                <SectionRight>
                  <p className="lato font-semibold text-2xl xl:text-3xl text-[#495464] max-lg:pt-5">
                    Business Redesign
                  </p>
                  <p className="roboto max-xl:text-sm">
                    Business Redesign was a project assigned to me and my
                    partner to find a local business and try and revamp their
                    website. We had come to the conclusion that a local business
                    called Dante&apos;s Pizza could you a little more love on
                    their website. We had built this site in standard HTML, CSS,
                    and Javascript but further down the line we would like to
                    rebuild it in Next.JS. This site was one of the top in our
                    class for how well put together and designed it was. As of
                    right now this webpage is strictly front end development but
                    is scaleable to become full stack.
                  </p>
                  <SectionDelay>
                    <div className="flex space-x-3 pt-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 128 128"
                        width={"50px"}
                      >
                        <path
                          fill="#E44D26"
                          d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"
                        />
                        <path
                          fill="#F16529"
                          d="M64 116.8l36.378-10.086 8.559-95.878H64z"
                        />
                        <path
                          fill="#EBEBEB"
                          d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"
                        />
                        <path
                          fill="#fff"
                          d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 128 128"
                        width={"50px"}
                      >
                        <path
                          fill="#1572B6"
                          d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"
                        />
                        <path
                          fill="#33A9DC"
                          d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z"
                        />
                        <path
                          fill="#fff"
                          d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711-3.4 38.114h-30.95V51.429z"
                        />
                        <path
                          fill="#EBEBEB"
                          d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031H33.752l1.937 21.717 28.331 7.863.063-.018v-14.39z"
                        />
                        <path
                          fill="#fff"
                          d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881H81.127z"
                        />
                        <path
                          fill="#EBEBEB"
                          d="M64.048 23.435v13.831H30.64l-.277-3.108-.63-7.012-.331-3.711h34.646zm-.047 27.996v13.831H48.792l-.277-3.108-.631-7.012-.33-3.711h16.447z"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 128 128"
                        width={"50px"}
                      >
                        <path
                          fill="#F0DB4F"
                          d="M1.408 1.408h125.184v125.185H1.408z"
                        />
                        <path
                          fill="#323330"
                          d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"
                        />
                      </svg>
                    </div>
                  </SectionDelay>
                </SectionRight>
              </div>
            </div>
            <div className="flex max-lg:flex-col lg:justify-evenly">
              <div className="max-lg:mx-auto">
                <a href="https://vercel.com/caleb-sylvias-projects/weather-sprint-x6mm" target="_blank">
                  <Image
                    src={weather}
                    alt="Weather App Thumbnail"
                    className="w-[350px] md:w-[450px] lg:w-[500px] bg-[#BBBFCA] p-2 rounded-xl"
                  />
                </a>
              </div>
              <div className="w-5/6 md:w-1/2 max-lg:mx-auto my-auto">
                <SectionRight>
                  <p className="lato font-semibold text-2xl lg:text-3xl text-[#495464] max-lg:pt-5">
                    Weather App (React Build)
                  </p>
                  <p className="roboto max-lg:text-sm">
                    PropTrac is an all in one property management tool allowing
                    Property Managers to have full control of all their
                    properties no matter where they are listed. The site allows
                    a Property Manager or a Tenant. The property manager has
                    their dashboard allowing them to see data of their
                    properties. This application will help managers keep track
                    of their properties and make it easy to pick what properties
                    to prioritize. This application is also aiming to allow
                    users to take payment from their respective Tenants. On the
                    Tenant dashboard they can keep track of their payments and
                    are able to send requests in the event that maintenance is
                    required.
                  </p>
                  <SectionDelay>
                    <div className="flex space-x-3 pt-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 128 128"
                        width={"50px"}
                      >
                        <g fill="#61DAFB">
                          <circle cx="64" cy="64" r="11.4" />
                          <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z" />
                        </g>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 128 128"
                        width={"50px"}
                      >
                        <path
                          d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0"
                          fill="#38bdf8"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 128 128"
                        width={"50px"}
                      >
                        <path
                          fill="#F0DB4F"
                          d="M1.408 1.408h125.184v125.185H1.408z"
                        />
                        <path
                          fill="#323330"
                          d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"
                        />
                      </svg>
                    </div>
                  </SectionDelay>
                </SectionRight>
              </div>
            </div>
          </div>
        </div>
        <div id="Skills" className="min-h-[450px] bg-[#495464]">
          <p className="text-5xl text-[#BBBFCA] font-semibold pt-8 md:pt-5 md:ml-20 max-md:text-center">
            Skills
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 grid-flow-row mx-10 md:mx-20 pt-8 text-white">
            <div className="col-span-1">
              <p className="text-center text-2xl md:text-4xl font-semibold">Front-End</p>
              <Section>
              <div className="flex justify-center space-x-5 my-24">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 128 128"
                  width={"50px"}
                >
                  <path
                    fill="#E44D26"
                    d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"
                  />
                  <path
                    fill="#F16529"
                    d="M64 116.8l36.378-10.086 8.559-95.878H64z"
                  />
                  <path
                    fill="#EBEBEB"
                    d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"
                  />
                  <path
                    fill="#fff"
                    d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 128 128"
                  width={"50px"}
                >
                  <path
                    fill="#1572B6"
                    d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"
                  />
                  <path
                    fill="#33A9DC"
                    d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z"
                  />
                  <path
                    fill="#fff"
                    d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711-3.4 38.114h-30.95V51.429z"
                  />
                  <path
                    fill="#EBEBEB"
                    d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031H33.752l1.937 21.717 28.331 7.863.063-.018v-14.39z"
                  />
                  <path
                    fill="#fff"
                    d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881H81.127z"
                  />
                  <path
                    fill="#EBEBEB"
                    d="M64.048 23.435v13.831H30.64l-.277-3.108-.63-7.012-.331-3.711h34.646zm-.047 27.996v13.831H48.792l-.277-3.108-.631-7.012-.33-3.711h16.447z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 128 128"
                  width={"50px"}
                >
                  <path fill="#fff" d="M22.67 47h99.67v73.67H22.67z" />
                  <path
                    data-name="original"
                    fill="#007acc"
                    d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73L82 101l3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51 59h21.83z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 128 128"
                  width={"50px"}
                >
                  <circle cx="64" cy="64" r="64" />
                  <path
                    fill="url(#a)"
                    d="M106.317 112.014 49.167 38.4H38.4v51.179h8.614v-40.24l52.54 67.884a64.216 64.216 0 0 0 6.763-5.209z"
                  />
                  <path fill="url(#b)" d="M81.778 38.4h8.533v51.2h-8.533z" />
                  <defs>
                    <linearGradient
                      id="a"
                      x1="109"
                      x2="144.5"
                      y1="116.5"
                      y2="160.5"
                      gradientTransform="scale(.71111)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#fff" />
                      <stop offset="1" stop-color="#fff" stop-opacity="0" />
                    </linearGradient>
                    <linearGradient
                      id="b"
                      x1="121"
                      x2="120.799"
                      y1="54"
                      y2="106.875"
                      gradientTransform="scale(.71111)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#fff" />
                      <stop offset="1" stop-color="#fff" stop-opacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 128 128"
                  width={"50px"}
                >
                  <path
                    d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0"
                    fill="#38bdf8"
                  />
                </svg>
                <svg
                  viewBox="0 0 128 128"
                  width={"50px"}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M22.684 0h84.253v42.667H64.81L22.684 0Zm0 42.667H64.81l42.127 42.666H64.81V128L22.684 85.333V42.667Z" />
                </svg>
              </div>
              </Section>
            </div>
            <div className="col-span-1">
              <p className="text-center text-2xl md:text-4xl font-semibold">Back-End</p>
              <SectionUp>
              <div className="flex justify-center space-x-5 my-24">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 128 128"
                  width={"50px"}
                >
                  <path
                    fill="#9B4F96"
                    d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z"
                  />
                  <path
                    fill="#68217A"
                    d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z"
                  />
                  <path
                    fill="#fff"
                    d="M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6zM97 66.2l.9-4.3h-4.2v-4.7h5.1L100 51h4.9l-1.2 6.1h3.8l1.2-6.1h4.8l-1.2 6.1h2.4v4.7h-3.3l-.9 4.3h4.2v4.7h-5.1l-1.2 6h-4.9l1.2-6h-3.8l-1.2 6h-4.8l1.2-6h-2.4v-4.7H97zm4.8 0h3.8l.9-4.3h-3.8l-.9 4.3z"
                  />
                </svg>
                <svg
                  viewBox="0 0 128 128"
                  width={"50px"}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient
                      id="azure-original-a"
                      x1="60.919"
                      y1="9.602"
                      x2="18.667"
                      y2="134.423"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#114A8B" />
                      <stop offset="1" stop-color="#0669BC" />
                    </linearGradient>
                    <linearGradient
                      id="azure-original-b"
                      x1="74.117"
                      y1="67.772"
                      x2="64.344"
                      y2="71.076"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-opacity=".3" />
                      <stop offset=".071" stop-opacity=".2" />
                      <stop offset=".321" stop-opacity=".1" />
                      <stop offset=".623" stop-opacity=".05" />
                      <stop offset="1" stop-opacity="0" />
                    </linearGradient>
                    <linearGradient
                      id="azure-original-c"
                      x1="68.742"
                      y1="5.961"
                      x2="115.122"
                      y2="129.525"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#3CCBF4" />
                      <stop offset="1" stop-color="#2892DF" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M46.09.002h40.685L44.541 125.137a6.485 6.485 0 01-6.146 4.413H6.733a6.482 6.482 0 01-5.262-2.699 6.474 6.474 0 01-.876-5.848L39.944 4.414A6.488 6.488 0 0146.09 0z"
                    fill="url(#azure-original-a)"
                    transform="translate(.587 4.468) scale(.91904)"
                  />
                  <path
                    d="M97.28 81.607H37.987a2.743 2.743 0 00-1.874 4.751l38.1 35.562a5.991 5.991 0 004.087 1.61h33.574z"
                    fill="#0078d4"
                  />
                  <path
                    d="M46.09.002A6.434 6.434 0 0039.93 4.5L.644 120.897a6.469 6.469 0 006.106 8.653h32.48a6.942 6.942 0 005.328-4.531l7.834-23.089 27.985 26.101a6.618 6.618 0 004.165 1.519h36.396l-15.963-45.616-46.533.011L86.922.002z"
                    fill="url(#azure-original-b)"
                    transform="translate(.587 4.468) scale(.91904)"
                  />
                  <path
                    d="M98.055 4.408A6.476 6.476 0 0091.917.002H46.575a6.478 6.478 0 016.137 4.406l39.35 116.594a6.476 6.476 0 01-6.137 8.55h45.344a6.48 6.48 0 006.136-8.55z"
                    fill="url(#azure-original-c)"
                    transform="translate(.587 4.468) scale(.91904)"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 128 128"
                  width={"50px"}
                >
                  <path
                    fill="url(#a)"
                    d="M66.958.825a6.07 6.07 0 0 0-6.035 0L11.103 29.76c-1.895 1.072-2.96 3.095-2.96 5.24v57.988c0 2.143 1.183 4.167 2.958 5.24l49.82 28.934a6.07 6.07 0 0 0 6.036 0l49.82-28.935c1.894-1.072 2.958-3.096 2.958-5.24V35c0-2.144-1.183-4.167-2.958-5.24z"
                  />
                  <path
                    fill="url(#b)"
                    d="M116.897 29.76 66.841.825A8.161 8.161 0 0 0 65.302.23L9.21 96.798a6.251 6.251 0 0 0 1.657 1.43l50.057 28.934c1.42.833 3.076 1.072 4.615.595l52.66-96.925a3.702 3.702 0 0 0-1.302-1.072z"
                  />
                  <path
                    fill="url(#c)"
                    d="M116.898 98.225c1.42-.833 2.485-2.262 2.958-3.81L65.066.108c-1.42-.238-2.959-.119-4.26.715L11.104 29.639l53.606 98.355c.71-.12 1.54-.358 2.25-.715z"
                  />
                  <defs>
                    <linearGradient
                      id="a"
                      x1="34.513"
                      x2="27.157"
                      y1="15.535"
                      y2="30.448"
                      gradientTransform="translate(-129.242 -73.715) scale(6.18523)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#3F873F" />
                      <stop offset=".33" stop-color="#3F8B3D" />
                      <stop offset=".637" stop-color="#3E9638" />
                      <stop offset=".934" stop-color="#3DA92E" />
                      <stop offset="1" stop-color="#3DAE2B" />
                    </linearGradient>
                    <linearGradient
                      id="b"
                      x1="30.009"
                      x2="50.533"
                      y1="23.359"
                      y2="8.288"
                      gradientTransform="translate(-129.242 -73.715) scale(6.18523)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset=".138" stop-color="#3F873F" />
                      <stop offset=".402" stop-color="#52A044" />
                      <stop offset=".713" stop-color="#64B749" />
                      <stop offset=".908" stop-color="#6ABF4B" />
                    </linearGradient>
                    <linearGradient
                      id="c"
                      x1="21.917"
                      x2="40.555"
                      y1="22.261"
                      y2="22.261"
                      gradientTransform="translate(-129.242 -73.715) scale(6.18523)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset=".092" stop-color="#6ABF4B" />
                      <stop offset=".287" stop-color="#64B749" />
                      <stop offset=".598" stop-color="#52A044" />
                      <stop offset=".862" stop-color="#3F873F" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              </SectionUp>
            </div>
            <div className="col-span-1">
              <p className="text-center text-2xl md:text-4xl font-semibold">Other</p>
              <SectionRight>
              <div className="flex justify-center space-x-5 my-24">
                <svg viewBox="0 0 128 128" width={"50px"}>
                  <path
                    fill="#0acf83"
                    d="M45.5 129c11.9 0 21.5-9.6 21.5-21.5V86H45.5C33.6 86 24 95.6 24 107.5S33.6 129 45.5 129zm0 0"
                  ></path>
                  <path
                    fill="#a259ff"
                    d="M24 64.5C24 52.6 33.6 43 45.5 43H67v43H45.5C33.6 86 24 76.4 24 64.5zm0 0"
                  ></path>
                  <path
                    fill="#f24e1e"
                    d="M24 21.5C24 9.6 33.6 0 45.5 0H67v43H45.5C33.6 43 24 33.4 24 21.5zm0 0"
                  ></path>
                  <path
                    fill="#ff7262"
                    d="M67 0h21.5C100.4 0 110 9.6 110 21.5S100.4 43 88.5 43H67zm0 0"
                  ></path>
                  <path
                    fill="#1abcfe"
                    d="M110 64.5c0 11.9-9.6 21.5-21.5 21.5S67 76.4 67 64.5 76.6 43 88.5 43 110 52.6 110 64.5zm0 0"
                  ></path>
                </svg>
                <svg viewBox="0 0 128 128" width={"50px"}>
                  <g fill="#181616">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"
                    ></path>
                    <path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path>
                  </g>
                </svg>

                <svg viewBox="0 0 128 128" width={"50px"}>
                  <path
                    fill="#b75cff"
                    d="M34.94 85.111c-.946.403-2.27.948-3.337 1.284-2.26.712-4.073 1-5.931 1.282 2.234 7.163 10.986 14.197 21.192 13.533 9.621 0 16.282-4.743 19.826-11.622-10.05-.142-24.69 4.042-31.75-4.477zm91.835 1.181c-3.514.419-6.024-.288-11.782 1.56-13.939 5.741-27.734.872-32.126-.08-1.442-.15-2.103-2.26-5.062 1.231l-1.443 1.701c6.812 6.703 16.15 10.55 25.82 10.55 13.02 0 21.823-6.288 24.748-14.829z"
                  ></path>
                  <path
                    fill="#5c6cff"
                    d="M127.514 75.106c-7.656-5.317-9.187-1.473-13.026 2.677.355.908.547 1.94.547 3.14 0 5.604-4.504 9.231-12.524 9.231-6.703 0-13.624-3.296-18.787-8.131l-5.92 6.98c8.016.36 16.13 2.43 24.246 2.11 8.882-.352 20.615-3.164 24.725-4.82l.156.132a20.019 20.019 0 0 0 1.069-6.49c0-1.747-.17-3.35-.486-4.829zm-57.826.116c-4.338-3.309-8.496-2.182-12.483 2.493v.8c0 6.335-5.119 11.47-11.433 11.47a11.419 11.419 0 0 1-9.687-5.37s-.499.22-1.145.495c2.988 3.766 6.66 5.713 13.947 6.003 5.935.235 11.87-.805 17.805-1.525 1.983-3.846 2.996-8.358 2.996-13.089z"
                  ></path>
                  <path
                    fill="#5cff9d"
                    d="M69.688 61.638c-4.052-3.565-8.177-4.284-12.483 1.156v14.921c4.175-.972 8.34-1.96 12.483-2.493zm48.311 1.084c-6.232-2.728-24.892.001-28.191 1.251a33.684 33.684 0 0 0 4.243 2.114l9.779 4.286c5.259 2.192 9.255 3.827 10.658 7.41 4.037-.586 7.518-1.39 9.835-1.923l3.19-.754c-1.223-5.711-4.689-9.545-9.514-12.384z"
                  ></path>
                  <path
                    fill="#ffdb5c"
                    d="M79.565 47.88c.328 7.924 4.916 12.934 10.267 16.103 4.084.806 8.168 1.505 12.252 1.505 5.701 0 11.396-1.358 15.92-2.764a38.238 38.238 0 0 0-4.506-2.24l-9.668-4.066c-4.776-1.946-9.265-3.68-10.835-7.205-9.634-4.892-3.172-7.979-13.428-1.332Zm-9.877.96c-3.664-2.528-7.798-1.771-12.484 2.289l.001 11.673c4.16-.417 8.322-.971 12.483-1.164z"
                  ></path>
                  <path
                    fill="#f79454"
                    d="M83.868 35.077c-2.75 3.305-4.32 7.392-4.32 11.89 0 .308.007.612.019.912 4.454-.044 8.935.45 13.428 1.335a7.034 7.034 0 0 1-.591-2.906c0-5.275 4.394-8.462 11.207-8.462 6.151 0 11.096 2.308 15.6 6.153l4.783-5.897c-13.977-4.32-26.47-7.037-40.124-3.026Zm-14.18 2.824c-5.156-4.528-9.114-1.188-12.484 5.13v8.098c4.162-.645 8.322-1.587 12.484-2.29z"
                  ></path>
                  <path
                    fill="#ff5c5c"
                    d="M57.204 26.748v16.284c4.162-1.405 8.322-3.483 12.484-5.132V26.748Zm46.405 0c-8.459 0-15.501 3.235-19.74 8.326 6.033.023 12.106 1.242 18.18 1.967 8.689 1.038 17.348 1.06 21.943 1.06l1.812-2.233c-5.604-5.605-13.735-9.121-22.195-9.121z"
                  ></path>
                  <path
                    fill="#5865f2"
                    d="M0 26.748V81.75h20.823c5.458 0 9.638-.865 13.52-2.823-.007-.135-.007-.273-.007-.41 0-6.335 5.12-11.468 11.436-11.468.187 0 .372.004.557.014 1.981-4.033 2.78-8.032 2.78-13.286 0-5.421-1.02-10.139-3.064-14.223-2.121-4.007-5.186-7.15-9.27-9.43-4.088-2.277-9.037-3.376-14.931-3.376Zm13.2 11.785h7.937c4.637 0 8.172 1.337 10.53 4.087 2.357 2.749 3.535 6.52 3.535 11.392 0 4.95-1.259 8.802-3.694 11.63-2.435 2.907-6.05 4.321-10.844 4.321h-7.463zm32.605 32.76a7.226 7.226 0 1 0 0 14.449 7.226 7.226 0 0 0 0-14.45z"
                  ></path>
                </svg>

                <svg viewBox="0 0 128 128" width={"50px"}>
                  <defs>
                    <linearGradient
                      id="jira-original-a"
                      gradientUnits="userSpaceOnUse"
                      x1="22.034"
                      y1="9.773"
                      x2="17.118"
                      y2="14.842"
                      gradientTransform="scale(4)"
                    >
                      <stop offset=".176" stop-color="#0052cc"></stop>
                      <stop offset="1" stop-color="#2684ff"></stop>
                    </linearGradient>
                    <linearGradient
                      id="jira-original-b"
                      gradientUnits="userSpaceOnUse"
                      x1="16.641"
                      y1="15.564"
                      x2="10.957"
                      y2="21.094"
                      gradientTransform="scale(4)"
                    >
                      <stop offset=".176" stop-color="#0052cc"></stop>
                      <stop offset="1" stop-color="#2684ff"></stop>
                    </linearGradient>
                  </defs>
                  <path
                    d="M108.023 16H61.805c0 11.52 9.324 20.848 20.847 20.848h8.5v8.226c0 11.52 9.328 20.848 20.848 20.848V19.977A3.98 3.98 0 00108.023 16zm0 0"
                    fill="#2684ff"
                  ></path>
                  <path
                    d="M85.121 39.04H38.902c0 11.519 9.325 20.847 20.844 20.847h8.504v8.226c0 11.52 9.328 20.848 20.848 20.848V43.016a3.983 3.983 0 00-3.977-3.977zm0 0"
                    fill="url(#jira-original-a)"
                  ></path>
                  <path
                    d="M62.219 62.078H16c0 11.524 9.324 20.848 20.848 20.848h8.5v8.23c0 11.52 9.328 20.844 20.847 20.844V66.059a3.984 3.984 0 00-3.976-3.98zm0 0"
                    fill="url(#jira-original-b)"
                  ></path>
                </svg>

                <svg viewBox="0 0 128 128" width={"50px"}>
                  <path d="m63.991 128 51.702-29.855-19.817-11.461-20.26 11.704a1.151 1.151 0 0 1-1.125-.009 1.145 1.145 0 0 1-.568-.975V69.608c0-.819.424-1.56 1.133-1.968L99.13 53.737a1.119 1.119 0 0 1 1.124.009c.352.195.572.564.576.966V78.11l19.83 11.454V29.855L63.99 62.566Zm0 0"></path>
                  <path
                    fill="#4d4d4d"
                    d="m52.397 98.401-20.27-11.718-19.832 11.46L63.991 128V62.566L7.34 29.854V89.56l19.825-11.45V54.714c.009-.401.225-.77.572-.966a1.13 1.13 0 0 1 1.13-.009L52.953 67.64a2.275 2.275 0 0 1 1.133 1.97v27.8a1.156 1.156 0 0 1-.565.98 1.131 1.131 0 0 1-1.124.012"
                  ></path>
                  <path
                    fill="gray"
                    d="M68.959 0v22.9L89.22 34.597c.348.203.555.576.555.984 0 .403-.212.772-.555.975L65.137 50.468a2.302 2.302 0 0 1-2.27 0L38.791 36.556a1.122 1.122 0 0 1-.56-.975 1.127 1.127 0 0 1 .56-.984L59.048 22.9V0L7.339 29.855l56.652 32.711 56.665-32.71Zm0 0"
                  ></path>
                </svg>
              </div>
              </SectionRight>
            </div>
          </div>
        </div>
        <div id="ContactMe" className="min-h-[200px]">
          <div className="md:mx-20 flex justify-between">
            <div className="text-base md:text-lg space-y-2 roboto my-6">
              <p className="text-2xl font-semibold">Caleb Sylvia</p>
              <p>Stockton, CA</p>
              <p>
                <a className="underline" href="tel:2096452068">
                  (209) 645-2068
                </a>
              </p>
              <p>calebjsylvia@gmail.com</p>
            </div>
            <div className="space-y-2 roboto my-6">
              <a
                href="https://github.com/calebsylvia"
                target="_blank"
                className="flex space-x-2 hover:cursor-pointer"
              >
                <GithubLogo className="my-auto" size={36} />
                <p className="my-auto text-lg">Github</p>
              </a>
              <a
                href="https://www.linkedin.com/in/calebsylvia/"
                target="_blank"
                className="flex space-x-2 hover:cursor-pointer"
              >
                <LinkedinLogo size={36} />
                <p className="my-auto text-lg">LinkedIn</p>
              </a>
              <a
                href="https://www.instagram.com/thecalebsylvia/"
                target="_blank"
                className="flex space-x-2 hover:cursor-pointer"
              >
                <InstagramLogo size={36} />
                <p className="my-auto text-lg">Instagram</p>
              </a>
              <a
                href="https://discordapp.com/users/394978977871167490/"
                target="_blank"
                className="flex space-x-2 hover:cursor-pointer"
              >
                <DiscordLogo size={32} />
                <p className="my-auto text-lg">Discord</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
