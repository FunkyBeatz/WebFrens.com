import React from 'react';
import { SiX, SiDiscord } from "react-icons/si";
import { Button } from "../components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";

export default function About() {
  return (
    <div className="min-h-[calc(100vh-4rem)] py-24">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-5xl font-bold tracking-tight mb-4">About Me</h1>
          <p className="text-muted-foreground text-lg">
            Transforming Discord communities through professional solutions
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-primary/40 shadow-[0_0_15px_rgba(167,139,250,0.1)]">
            <CardHeader>
              <CardTitle>My Story</CardTitle>
              <CardDescription>
                From car mechanic to Discord community specialist
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mt-8">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                  <Avatar className="h-24 w-24 border-2 border-primary/20">
                    <AvatarImage src="/assets/aaaaa.png" alt="Profile" />
                    <AvatarFallback>FB</AvatarFallback>
                  </Avatar>
                  <div className="text-center sm:text-left">
                    <h2 className="text-2xl font-bold mb-3">FunkyBeatz</h2>
                    <div className="flex gap-2 justify-center sm:justify-start mb-4">
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
                    <p className="text-muted-foreground leading-relaxed space-y-6">
                      <span className="block text-xl font-medium text-foreground mb-8">
                        Hey, I'm Joakim, but most people online know me as FunkyBeatz.
                      </span>

                      <span className="block">
                        Before all this, I spent over 8 years working as a car mechanic. I loved solving problems, but eventually I felt like it was time for something new. That's when I made the switch into tech. I'm now studying to become a Cyber Security Analyst, but honestly, my real deep dive into Discord started way before my studies.
                      </span>

                      <span className="block">
                        I've been building and managing Discord servers for years, organizing communities, setting up custom bots, automating roles, adding security, and just making sure everything feels smooth and fun for users. Whether it's for NFT projects, gaming communities, or creative groups, I like making servers that actually work and feel alive.
                      </span>

                      <span className="block">
                        I'm not some big company, just someone who enjoys helping people build better Discord communities. If you're looking for someone who's down to earth, gets the tech stuff, and cares about details, I've got you!
                      </span>

                      <span className="block text-lg font-medium text-primary mt-8">
                        Let's make something cool. Together.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}