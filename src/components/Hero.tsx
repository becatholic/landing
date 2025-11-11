import { Button } from "@/components/ui/button";
import appLogo from "@/assets/app-logo.png";
import appStoreIcon from "@/assets/appstore.svg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-brand-navy-dark via-brand-navy to-brand-navy-dark">
      {/* Radial glow effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,hsl(35_42%_62%/0.15),transparent_50%)]" />
      
      <div className="container relative z-10 px-4 py-20 mx-auto text-center">
        <div className="flex flex-col items-center gap-8 max-w-4xl mx-auto">
          {/* App Logo */}
          <div className="relative">
            <div className="absolute inset-0 blur-3xl opacity-30 bg-primary rounded-full" />
            <img 
              src={appLogo} 
              alt="Be Catholic App Logo" 
              className="relative w-32 h-32 md:w-40 md:h-40 rounded-3xl border-2 border-primary/20 drop-shadow-[0_8px_32px_rgba(212,165,116,0.4)]"
            />
          </div>

          {/* Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
              Be Catholic
            </h1>
            <p className="text-xl md:text-2xl text-primary font-medium tracking-wide">
              FAITH EVERY DAY
            </p>
          </div>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
            Join thousands of Catholics building a life of deeper faith and peace
          </p>

          {/* CTA Button */}
          <a 
            href="https://apps.apple.com/app/be-catholic" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition-transform hover:scale-105 active:scale-95"
          >
            <img 
              src={appStoreIcon} 
              alt="Download on the App Store" 
              className="h-14 drop-shadow-lg"
            />
          </a>

          {/* Badge */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-white/80">Available on iOS</span>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
