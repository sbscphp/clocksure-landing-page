"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import { loginLink, registerLink } from "@/lib/constants";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center ">
            <Image
              src="/logo.png"
              alt="Clocksure"
              width={36}
              height={36}
              className="size-full object-contain"
            />
          </div>
          <span className="text-xl font-bold text-gray-charcoal">
            Clocksure
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname?.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isActive
                    ? "text-orange-primary"
                    : "text-gray-medium hover:text-orange-primary"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-3 md:flex">
          <Button
            variant="outline"
            className="bg-transparent text-gray-medium hover:text-gray-charcoal hover:bg-transparent"
          >
            <Link href={loginLink} target="_blank" rel="noopener noreferrer">
              Sign In
            </Link>
          </Button>
          <Button className="bg-orange-primary text-white hover:bg-orange-dark">
            <Link href={registerLink} target="_blank" rel="noopener noreferrer">
              Sign Up
            </Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="size-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[80%] p-6">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <div className="flex flex-col gap-6 pt-8 justify-between h-full">
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => {
                  const isActive =
                    pathname === link.href ||
                    (link.href !== "/" && pathname?.startsWith(link.href));
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-lg font-medium transition-colors ${
                        isActive
                          ? "text-orange-primary"
                          : "text-gray-charcoal hover:text-orange-primary"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>
              <div className="flex flex-col gap-3 pt-4">
                <Button
                  variant="outline"
                  className="w-full bg-transparent"
                  asChild
                >
                  <Link
                    href={loginLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Sign In
                  </Link>
                </Button>
                <Button
                  className="w-full bg-orange-primary text-white hover:bg-orange-dark"
                  asChild
                >
                  <Link
                    href={registerLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Sign Up
                  </Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
