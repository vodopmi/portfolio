import * as React from "react";
import Link from "next/link";
 
import { cn } from "@/lib/utils";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { buttonVariants } from "./ui/button";
import { Menu } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import VariableFontHoverByLetter from "./fancy/variable-font-hover-by-letter";
import LetterSwapForward from "./fancy/letter-swap-forward-anim";


interface ContactLinksProps {
  name: string;
  url: string;
}

  const contactLinks: ContactLinksProps[] = [
      {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/mikhail-vodopianov-b9506723a/",
      },
      {
      name: "Email Me",
      url: "mailto:vodopmi@icloud.com",
      },
      {
      name: "Telegram",
      url: "https://t.me/vodopmi",
      },
      {
      name: "Pinterest",
      url: "https://www.pinterest.com/vodopmi/",
      },
      {
      name: "Instagram",
      url: "https://www.instagram.com/vodopmi/",
      },
  ];


interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: "/#hero",
    label: "Hero",
  },
  {
    href: "/#message",
    label: "Message",
  },
  {
    href: "/#projects",
    label: "Projects",
  },
  {
    href: "/#track-record",
    label: "Track Record",
  },
  {
    href: "/#coworkers-thoughts",
    label: "Coworkers Thoughts",
  },
  {
    href: "/#contact",
    label: "Contact",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header className="fixed top-0 z-40 w-full">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between ">
          <NavigationMenuItem>
            <a
              rel="noreferrer noopener"
              href="#hero"
              className="text-lg flex gap-2 items-center bg-background rounded-full px-1 h-10 pr-4 border border-muted hover:bg-muted transition-all">
              <Avatar className="w-8 h-8">
                <AvatarImage src="https://cdn4.cdn-telegram.org/file/uiXTGVCvbjFTgZg-lceVrh_vJ1PB5abOHvCmbqETFNxtb_zj2mUNI9Ut72ZB9FXxAK4X209dOfS0trBo_VEfnOwdqFa5vKFq1UsgcJ2mGAANauBATMsR1_DzYchEdpMSrv8oLsnwKyDY_WbyNmUhwT-UnxLT33FNMpRPnPTDF0K1fSDE8h0ga1zb6aEKl-vGCk5C7sxKeZm4aST6Tk--VzTWUo5kr_y7IsqTyJEzc9o4pzudtrWeAnMFqy2H5Cwu7ajgIQkwbggIl0cY8Jo3SUkpeXehDZNcVxiGLZg_ScXf1p4Omja3QesUkRzjEMVu7MCa23he58l8aoNW0FVSOA.jpg" />
                <AvatarFallback className="text-sm">M</AvatarFallback>
              </Avatar>
              Mikhail Vodopianov
            </a>
          </NavigationMenuItem>


          <span className="flex bg-background rounded-full border border-muted">
            <a
              rel="noreferrer noopener"
              href="mailto:vodopmi@icloud.com">
            <Button variant="ghost" className="hover:bg-primary-foreground hover:text-primary rounded-full text-sm text-primary hidden sm:block">Email Me</Button>
            </a>
            <ModeToggle />

            <Sheet
              open={isOpen}
              onOpenChange={setIsOpen}
            >
              <SheetTrigger className="px-2.5 rounded-full hover:bg-muted transition-all">
                <Menu
                  className="flex h-5 w-5"
                  onClick={() => setIsOpen(true)}
                >
                  <span className="sr-only">Menu Icon</span>
                </Menu>
              </SheetTrigger>

              <SheetContent side={"top"} className="w-screen">
                {/* <SheetHeader>
                  <SheetTitle className="font-semibold text-2xl text-left pb-5">
                    Mikhail Vodopianov
                  </SheetTitle>
                </SheetHeader> */}
                <nav className="flex flex-col justify-start items-le gap-5 my-4 text-4xl lg:text-8xl font-semibold children:w-full children:text-left ">
                {routeList.map(({ href, label }: RouteProps) => (
                  <a className="hover:text-primary transition-all"
                      rel="noreferrer noopener"
                      key={label}
                      href={href}
                      onClick={() => setIsOpen(false)}>{label}
                  </a>
                  ))}
                  {/* <div className="flex gap-8 w-full">
                  {contactLinks.map(({ name, url }: ContactLinksProps) => (
                  <a className="text-xl font-medium hover:text-primary transition-all"
                      rel="noreferrer noopener"
                      target=""
                      href={url}>
                        {name}
                  </a>
                  ))}
                  </div> */}
                </nav>
              </SheetContent>
            </Sheet>
          </span>

        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
