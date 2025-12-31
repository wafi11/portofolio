import { Button } from "@/components/ui/button/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navItems } from "@/data/DataNav";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { ButtonBox } from "../ui/button/ButtonBox";

export const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur w-full flex justify-center supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:h-20 max-w-7xl">
        {/* Logo */}
        <Link
          href="#"
          className="text-2xl font-bold tracking-tight transition-colors hover:text-primary md:text-3xl"
        >
          <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
            PORTOFOLIO
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative text-sm font-medium text-muted-foreground transition-colors hover:text-primary after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-2">
          {/* CTA Button - Desktop */}
          <ButtonBox className="hidden md:inline-flex bebas" asChild>
            <Link href="#contact">Get in Touch</Link>
          </ButtonBox>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="mt-4 flex flex-col gap-3">
                  <ButtonBox className="w-full bebas text-lg" asChild>
                    <Link href="#contact">Get in Touch</Link>
                  </ButtonBox>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
