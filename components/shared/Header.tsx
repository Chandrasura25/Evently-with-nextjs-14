import Image from "next/image";
import Link from "next/link";
import { SignedOut, SignedIn, UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import NavItems from "./NavItems";
const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex justify-between items-center">
        <Link href="/" className="w-36">
          <Image
            src={"/assets/images/logo.svg"}
            alt="Evently logo"
            width={128}
            height={38}
          />
        </Link>

        <SignedIn>
          <nav className="md:flex-between hidden w-full max-w-xs">
            <NavItems />
          </nav>
        </SignedIn>

        <div className="flex w-32 justify-end gap-3">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
            <NavItems />
          </SignedIn>
          <SignedOut>
            <Button asChild className="rounded-full" size="lg">
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
          S
        </div>
      </div>
    </header>
  );
};
export default Header;
