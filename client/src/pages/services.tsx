import Pricing from "@/components/sections/pricing";

export default function Services() {
  return (
    <div className="min-h-[calc(100vh-4rem)] py-24">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-5xl font-bold tracking-tight mb-4">Our Services</h1>
          <p className="text-muted-foreground text-lg">
            Professional Discord server setup and audit services to help your community thrive
          </p>
        </div>
        <Pricing />
      </div>
    </div>
  );
}