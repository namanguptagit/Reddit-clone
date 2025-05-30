"use client";

import { SignedIn,SignedOut,SignInButton,UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import reddishLogoOnly from "@/images/Reddish Logo Only.png";
import reddishLogo from "@/images/Reddish Full.png";
import Image from "next/image";
import { ChevronLeftIcon, MenuIcon } from "lucide-react";
import { useSidebar } from "@/components/ui/sidebar";

const Header = () => {
  const { isMobile, toggleSidebar , open } = useSidebar();
  return (
    <header className="flex justify-between items-center p-4 border-b border-gray-200">
      <div className="flex items-center gap-2">
        {open && !isMobile ? (<ChevronLeftIcon className="w-6 h-6" onClick={toggleSidebar} />): (
          <div className="flex items-center gap-2">
        <MenuIcon className="w-6 h-6" onClick={toggleSidebar} />
        <Image src={reddishLogo} alt="Reddish Logo" width={150} height={150} className="hidden md:block" />
        <Image src={reddishLogoOnly} alt="Reddish Logo" width={40} height={40} className="block md:hidden" />
      </div>
        )}
        </div>
      <div>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <Button asChild variant="outline">
            <SignInButton mode="modal" />
          </Button>
        </SignedOut>
      </div>
    </header>
  );
}

export default Header