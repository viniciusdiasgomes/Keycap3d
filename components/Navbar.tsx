"use client";

import { useState, createContext, useContext } from "react";
import Link from "next/link";
import { LuChevronRight, LuMenu, LuX } from "react-icons/lu";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
  DialogTrigger,
  DialogPortal,
  DialogOverlay,
} from "@radix-ui/react-dialog";


const DialogContext = createContext<
  [open: boolean, setOpen: (open: boolean) => void]
>([false, () => {}]);

export function Navbar() {
  const state = useState(false);
  const [open, setOpen] = state;


  return (
    <header className="fixed top-0 right-0 left-0 z-50 flex items-center justify-between p-3 md:p-6">
      <Link
        href="/"
        className="shrink-0 hover:scale-105 motion-safe:transition"
      >
      </Link>
      <div className="flex gap-3 md:gap-4">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger className="flex size-12 cursor-pointer items-center justify-center rounded bg-gray-300 hover:bg-gray-300/80 hover:shadow-lg hover:shadow-black/10 motion-safe:transition">
            <LuMenu className="size-5" />
            <span className="sr-only">Toggle menu</span>
          </DialogTrigger>
          <DialogPortal>
            <DialogOverlay className="motion-safe:data-[state=open]:animate-in motion-safe:data-[state=closed]:animate-out motion-safe:data-[state=closed]:fade-out-0 motion-safe:data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50" />
            <DialogContent className="motion-safe:data-[state=open]:animate-in motion-safe:data-[state=closed]:animate-out motion-safe:data-[state=closed]:slide-out-to-right motion-safe:data-[state=open]:slide-in-from-right fixed inset-y-0 right-0 z-50 h-full w-3/4 bg-white p-4 shadow-lg ease-in-out motion-safe:transition motion-safe:data-[state=closed]:duration-300 motion-safe:data-[state=open]:duration-500 sm:max-w-sm">
              <DialogTitle className="sr-only" />
              <DialogDescription className="sr-only" />
              <DialogClose className="ml-auto flex size-10 shrink-0 cursor-pointer items-center justify-center rounded-full text-gray-400 hover:text-black motion-safe:transition">
                <LuX className="size-5" />
                <span className="sr-only">Close menu</span>
              </DialogClose>
              <DialogContext.Provider value={state}>
                <nav>
                  <ul>
                    <NavbarLink
                      href="#features"
                      title="Features"
                      description="Learn more about our features"
                    />
                    <NavbarLink
                      href="#switch-playground"
                      title="Switch Playground"
                      description="Choose your perfect switch"
                    />
                    <NavbarLink
                      href="#keycap-changer"
                      title="Keycaps"
                      description="Choose your perfect keycap set"
                    />
                    <NavbarLink
                      href="https://www.linkedin.com/in/vinicius-dias-019859310/"
                      title="Purchase"
                      description="Order your Vapor75 now!"
                    />
                  </ul>
                </nav>
              </DialogContext.Provider>
            </DialogContent>
          </DialogPortal>
        </Dialog>
      </div>
    </header>
  );
}

type NavbarLinkProps = {
  href: string;
  title: string;
  description: string;
};

function NavbarLink({ href, title, description }: NavbarLinkProps) {
  const [, setOpen] = useContext(DialogContext);

  return (
    <li>
      <Link
        href={href}
        onClick={() => setOpen(false)}
        className="group flex items-center rounded-xl p-4 hover:bg-[#01A7E1]/10 motion-safe:transition"
      >
        <div className="flex grow flex-col gap-1">
          <span className="text-xl font-semibold text-gray-900 group-hover:text-[#01A7E1] motion-safe:transition">
            {title}
          </span>
          <span className="text-sm text-gray-500">{description}</span>
        </div>
        <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-400 group-hover:bg-[#01A7E1] group-hover:text-white motion-safe:transition">
          <LuChevronRight className="size-5 translate-x-px" />
        </div>
      </Link>
    </li>
  );
}
