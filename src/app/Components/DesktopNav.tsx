"use client";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { GithubLogo, LinkedinLogo, ReadCvLogo } from "@phosphor-icons/react";

const DesktopNav = () => {
  return (
    <>
    <div className="sticky">
      <div className="flex justify-between min-h-24 px-10">
        <div className="flex">
          <a href="#Top" className="roboto font-medium my-auto text-xl text-black hover:cursor-pointer">
            @calebsylvia
          </a>
        </div>
        <div className="my-auto">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="#AboutMe" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    About Me
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#Projects" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Projects
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#Skills" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Skills
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>More</NavigationMenuTrigger>
                <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[375px] lg:w-[375px] grid-cols-3">
                  <li className="row-span-1">
                    <NavigationMenuLink asChild>
                      <a href="https://www.linkedin.com/in/calebsylvia/" target="_blank" className="flex h-full w-full select-none flex-row justify-end bg-gray-100 rounded-md p-2 no-underline outline-none hover:shadow-md space-x-1">
                        <LinkedinLogo size={32} />
                        <p className="my-auto">LinkedIn</p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li className="row-span-1">
                    <NavigationMenuLink asChild>
                      <a href="https://github.com/calebsylvia" target="_blank" className="flex h-full w-full select-none flex-row justify-end rounded-md bg-gray-100 p-2 no-underline outline-none hover:shadow-md space-x-1">
                        <GithubLogo className="my-auto" size={24} />
                        <p className="my-auto">Github</p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li className="row-span-1">
                    <NavigationMenuLink asChild>
                      <a href="https://docs.google.com/document/d/1cQ3dT7GNNyXL4ghbEp2HaJrVMviac1wYM2Kxd9YVqbk/edit?usp=sharing" target="_blank" className="flex h-full w-full select-none bg-gray-100 flex-row justify-end rounded-md p-2 no-underline outline-none hover:shadow-md space-x-1">
                        <ReadCvLogo size={32} />
                        <p className="my-auto">Resume</p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#ContactMe" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Contact Me
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
      </div>
    </>
  );
};

export default DesktopNav;
