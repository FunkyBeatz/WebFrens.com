import { SiX, SiDiscord } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function Team() {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex items-center">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary opacity-20 blur-[100px]"></div>
      </div>

      <div className="container max-w-screen-xl mx-auto px-4 py-24">
        <div className="max-w-3xl mx-auto">
          <Card className="relative overflow-hidden border-primary/20">
            <div 
              className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,hsl(270,95%,75%,0.2)_0%,transparent_70%)]" 
              aria-hidden="true"
            />
            <CardHeader className="pb-6">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <Avatar className="h-24 w-24 border-2 border-primary/20">
                  <AvatarImage src="/assets/aaaaa.png" alt="Profile" />
                  <AvatarFallback>FB</AvatarFallback>
                </Avatar>
                <div className="text-center sm:text-left">
                  <h1 className="text-2xl font-bold mb-3">FunkyBeatz</h1>
                  <div className="flex gap-2 justify-center sm:justify-start">
                    <Button variant="ghost" size="sm" className="gap-2" asChild>
                      <a href="https://x.com/FunkyxBeatz" target="_blank" rel="noopener noreferrer">
                        <SiX className="h-4 w-4" />
                        Follow me
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" className="gap-2" asChild>
                      <a href="https://discord.gg/gVEEv8Yswu" target="_blank" rel="noopener noreferrer">
                        <SiDiscord className="h-4 w-4" />
                        Join Discord
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                With years of experience in Discord community management and server setup,
                I'm passionate about helping projects and communities create secure,
                well-structured spaces for their members to connect and grow.
                My focus is on implementing robust security measures and creating
                intuitive server structures that enhance user engagement while
                maintaining professional standards.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}