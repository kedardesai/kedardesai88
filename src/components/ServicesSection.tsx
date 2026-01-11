import { 
  Smartphone, 
  Layers, 
  Settings, 
  MessageSquare,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Smartphone,
    title: 'iOS App Development',
    description: 'Native iOS applications built with Swift and Objective-C. From concept to App Store deployment, with focus on performance and user experience.',
    features: ['Swift & SwiftUI', 'UIKit', 'Core Data', 'Push Notifications'],
  },
  {
    icon: Layers,
    title: 'Cross-Platform Development',
    description: 'Build once, deploy everywhere. Flutter and React Native solutions that maintain native performance across iOS and Android.',
    features: ['Flutter', 'React Native', 'Shared Codebase', 'Platform-Specific Features'],
  },
  {
    icon: Settings,
    title: 'App Maintenance & Upgrades',
    description: 'Keep your apps running smoothly with regular updates, bug fixes, performance optimization, and iOS version compatibility.',
    features: ['Bug Fixes', 'Performance Tuning', 'iOS Updates', 'Feature Enhancements'],
  },
  {
    icon: MessageSquare,
    title: 'Consulting & Architecture',
    description: 'Technical guidance for your mobile strategy. Architecture reviews, technology selection, and best practices consultation.',
    features: ['Architecture Design', 'Code Review', 'Tech Stack Selection', 'Team Training'],
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            End-to-end mobile development solutions tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <div 
              key={service.title}
              className="glass-card rounded-2xl p-8 card-hover group"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div 
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                style={{ background: 'var(--gradient-primary)' }}
              >
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <span 
                    key={feature}
                    className="px-3 py-1.5 bg-primary/5 text-primary text-sm rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="hero" size="lg" asChild>
            <a href="#contact">
              Let's Discuss Your Project <ArrowRight className="ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
