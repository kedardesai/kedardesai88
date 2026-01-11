import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronDown } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.jpg';
import appMockup1 from '@/assets/app-mockup-1.png';
import appMockup2 from '@/assets/app-mockup-2.png';

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 -z-10"
        style={{ background: 'var(--gradient-hero)' }}
      />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 -z-10 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="section-container w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 opacity-0 animate-fade-up">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Available for new projects
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 opacity-0 animate-fade-up stagger-1">
              Senior iOS &<br />
              <span className="gradient-text">Cross-Platform</span><br />
              Mobile Developer
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 opacity-0 animate-fade-up stagger-2">
              13+ years of experience crafting scalable, high-performance mobile applications for Healthcare, Education, Enterprise & more.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start opacity-0 animate-fade-up stagger-3">
              <Button variant="hero" size="xl" asChild>
                <a href="#projects">
                  View Projects <ArrowRight className="ml-2" />
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-border/50 opacity-0 animate-fade-up stagger-4">
              <div>
                <div className="text-3xl font-bold text-foreground">13+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">50+</div>
                <div className="text-sm text-muted-foreground">Apps Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">1M+</div>
                <div className="text-sm text-muted-foreground">App Downloads</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="order-1 lg:order-2 relative flex justify-center">
            {/* Profile Image */}
            <div className="relative z-10 opacity-0 animate-fade-up">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-background shadow-xl shadow-primary/10">
                <img 
                  src={profilePhoto} 
                  alt="Kedar Sharad Desai - Senior Mobile Developer"
                  className="w-full h-full object-cover object-top scale-110"
                />
              </div>
              {/* Decorative ring */}
              <div className="absolute inset-0 -m-4 rounded-full border-2 border-dashed border-primary/20 animate-spin" style={{ animationDuration: '30s' }} />
            </div>

            {/* Floating mockups */}
            <img 
              src={appMockup1} 
              alt="App mockup"
              className="absolute -left-8 top-0 w-32 sm:w-40 opacity-0 animate-fade-up stagger-2 animate-float hidden sm:block"
              style={{ animationDelay: '0.3s' }}
            />
            <img 
              src={appMockup2} 
              alt="App mockup"
              className="absolute -right-8 bottom-0 w-32 sm:w-40 opacity-0 animate-fade-up stagger-3 animate-float hidden sm:block"
              style={{ animationDelay: '0.5s' }}
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
      >
        <span className="text-xs font-medium">Scroll to explore</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </a>
    </section>
  );
}
