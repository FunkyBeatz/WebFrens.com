import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SiDiscord, SiX } from "react-icons/si";
import { useToast } from "@/hooks/use-toast";
import { Card } from "@/components/ui/card";
import { Mail, Clock, Shield } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(50),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) throw new Error("Failed to send message");

      toast({
        title: "Message sent!",
        description: "We'll get back to you soon.",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  }

  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex items-center">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary opacity-20 blur-[100px]"></div>
      </div>

      <div className="container max-w-screen-xl mx-auto px-4 py-24 relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="relative overflow-hidden rounded-lg border border-primary/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 p-8 shadow-[0_0_15px_rgba(167,139,250,0.1)]">
            <div 
              className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,hsl(270,95%,75%,0.2)_0%,transparent_70%)] pointer-events-none" 
              aria-hidden="true"
            />

            <div className="relative">
              <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>

              <div className="flex justify-center gap-4 mb-8">
                <Button variant="outline" size="lg" className="gap-2" asChild>
                  <a href="#discord" target="_blank" rel="noopener noreferrer">
                    <SiDiscord className="h-5 w-5" />
                    Join Discord
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="gap-2" asChild>
                  <a href="#twitter" target="_blank" rel="noopener noreferrer">
                    <SiX className="h-5 w-5" />
                    Follow on X
                  </a>
                </Button>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="after:content-['*'] after:ml-0.5 after:text-red-500">Name</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="Your name" required />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="after:content-['*'] after:ml-0.5 after:text-red-500">Email</FormLabel>
                        <FormControl>
                          <Input {...field} type="email" placeholder="your@email.com" required />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea {...field} placeholder="Tell us about your project or ask any questions..." rows={6} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </Form>

              <div className="mt-12 space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <Card className="p-6">
                    <div className="flex items-start space-x-4">
                      <Mail className="h-6 w-6 text-primary flex-none" />
                      <div>
                        <h3 className="font-medium mb-1">Email Us</h3>
                        <p className="text-sm text-muted-foreground mb-2">Get in touch for custom solutions and pricing</p>
                        <a href="mailto:info@webfrens.com" className="text-primary hover:underline">info@webfrens.com</a>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6">
                    <div className="flex items-start space-x-4">
                      <Clock className="h-6 w-6 text-primary flex-none" />
                      <div>
                        <h3 className="font-medium mb-1">Response Time</h3>
                        <p className="text-sm text-muted-foreground">We typically respond within 12-24 hours, maximum 48 hours</p>
                      </div>
                    </div>
                  </Card>
                </div>

                <div className="flex items-center justify-center gap-4 mt-8">
                  <Button variant="outline" size="sm" asChild className="text-sm">
                    <a href="/privacy-policy">Privacy Policy</a>
                  </Button>
                  <Button variant="outline" size="sm" asChild className="text-sm">
                    <a href="/terms-of-service">Terms of Service</a>
                  </Button>
                </div>

                <div className="text-center text-sm text-muted-foreground mt-4">
                  <div className="flex items-center justify-center gap-2">
                    <Shield className="h-4 w-4" />
                    <span>Your data is protected and never shared with third parties</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}