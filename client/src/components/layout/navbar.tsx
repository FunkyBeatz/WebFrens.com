import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="w-full px-4 md:px-6 flex h-16 items-center justify-between">
        <div className="flex items-center gap-4 group cursor-pointer">
          <Avatar className="h-10 w-10 border-2 border-primary/20 transition-transform duration-300 group-hover:scale-110 group-hover:border-primary/40">
            <AvatarImage src="/assets/aaaaa.png" alt="Logo" />
            <AvatarFallback>WF</AvatarFallback>
          </Avatar>
          <Link href="/">
            <span className="text-xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent transition-all duration-300 group-hover:from-purple-400 group-hover:to-blue-400">
              WebFrens
            </span>
          </Link>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <NavigationMenu>
            <NavigationMenuList className="gap-2">
              <NavigationMenuItem>
                <Link href="/services">
                  <Button variant="ghost" className="text-lg font-medium px-6 transition-all duration-300 hover:scale-105 hover:bg-primary/10">Services</Button>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/resources">
                  <Button variant="ghost" className="text-lg font-medium px-6 transition-all duration-300 hover:scale-105 hover:bg-primary/10">Resources</Button>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about">
                  <Button variant="ghost" className="text-lg font-medium px-6 transition-all duration-300 hover:scale-105 hover:bg-primary/10">About</Button>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact">
                  <Button variant="ghost" className="text-lg font-medium px-6 transition-all duration-300 hover:scale-105 hover:bg-primary/10">Contact</Button>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center">
          <Button 
            asChild 
            className="relative bg-primary/20 text-primary hidden md:inline-flex overflow-hidden transition-all duration-300 hover:bg-primary/30 hover:scale-105 group"
          >
            <Link href="/contact">
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-purple-500/20 via-primary/20 to-blue-500/20 blur-lg" />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}