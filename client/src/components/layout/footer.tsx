import { SiDiscord, SiX } from "react-icons/si";
import { Button } from "@/components/ui/button";
import FAQ from "@/components/sections/faq";

export default function Footer() {
  return (
    <footer className="border-t border-border/40">
      <div className="container max-w-screen-xl mx-auto px-4 py-24">
        <FAQ />

        <div className="mt-24 flex flex-col items-center justify-center gap-6">
          <div className="flex gap-4">
            <Button variant="ghost" size="icon" asChild>
              <a href="#discord" target="_blank" rel="noopener noreferrer">
                <SiDiscord className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="#twitter" target="_blank" rel="noopener noreferrer">
                <SiX className="h-5 w-5" />
              </a>
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} WebFrens. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}