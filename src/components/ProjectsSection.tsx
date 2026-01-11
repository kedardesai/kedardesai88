import { useState } from 'react';
import { ExternalLink, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const categories = ['All', 'iOS (Swift)', 'iOS (Objective-C)', 'Flutter'];

const projects = [
  {
    name: 'MAPP by MPCS',
    description: 'DOT compliance app with document capture, DocuSign integration, and fleet management features for trucking companies.',
    domain: 'Transportation / Compliance',
    platform: 'iOS',
    category: 'iOS (Swift)',
    technologies: ['Swift', 'DocuSign SDK', 'Core Data', 'Push Notifications', 'Biometric Auth'],
    featured: true,
  },
  {
    name: 'PocketSchool',
    description: 'School-parent communication platform enabling real-time updates, attendance tracking, and academic progress monitoring.',
    domain: 'Education',
    platform: 'iOS',
    category: 'iOS (Swift)',
    technologies: ['Swift', 'Firebase', 'Push Notifications', 'REST APIs'],
    featured: true,
  },
  {
    name: 'MEvents',
    description: 'Offline-first Flutter app for social organizations to manage events, member communications, and community activities.',
    domain: 'Social / Events',
    platform: 'iOS & Android',
    category: 'Flutter',
    technologies: ['Flutter', 'Dart', 'SQLite', 'Offline Sync', 'Firebase'],
    featured: true,
  },
  {
    name: 'CarWale',
    description: 'India\'s leading auto research app with 1M+ downloads. Features include car comparisons, reviews, price listings, and dealer locator.',
    domain: 'Automobile',
    platform: 'iOS',
    category: 'iOS (Objective-C)',
    technologies: ['Objective-C', 'Core Location', 'Analytics', 'A/B Testing'],
    featured: true,
  },
  {
    name: 'Medigram',
    description: 'HIPAA-compliant secure healthcare messaging app enabling doctors and medical staff to communicate patient information safely.',
    domain: 'Healthcare',
    platform: 'iOS',
    category: 'iOS (Objective-C)',
    technologies: ['Objective-C', 'End-to-End Encryption', 'HIPAA Compliance', 'Push Notifications'],
    featured: false,
  },
  {
    name: 'VidyaNiketan Online',
    description: 'School admission and enrollment management application streamlining the admission process for parents and schools.',
    domain: 'Education',
    platform: 'iOS',
    category: 'iOS (Swift)',
    technologies: ['Swift', 'Document Upload', 'Payment Gateway', 'Push Notifications'],
    featured: false,
  },
  {
    name: 'ClearSteps',
    description: 'Enterprise task management solution with workflow automation, team collaboration, and progress tracking features.',
    domain: 'Enterprise / Productivity',
    platform: 'iOS',
    category: 'iOS (Objective-C)',
    technologies: ['Objective-C', 'Core Data', 'Sync Engine', 'Calendar Integration'],
    featured: false,
  },
  {
    name: 'Edukonnect Pro',
    description: 'Advanced child safety and school communication app with GPS tracking, attendance alerts, and parent-teacher messaging.',
    domain: 'Education / Safety',
    platform: 'iOS',
    category: 'iOS (Objective-C)',
    technologies: ['Objective-C', 'Core Location', 'Geofencing', 'Push Notifications'],
    featured: false,
  },
  {
    name: 'Edukonnect Basic',
    description: 'Simplified school communication app for smaller institutions with essential features for parent-school connectivity.',
    domain: 'Education',
    platform: 'iOS',
    category: 'iOS (Objective-C)',
    technologies: ['Objective-C', 'REST APIs', 'Push Notifications'],
    featured: false,
  },
];

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="section-padding">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of mobile applications delivered across various industries
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25'
                  : 'bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.name}
              className="glass-card rounded-2xl overflow-hidden card-hover group"
              style={{ animationDelay: `${idx * 0.05}s` }}
            >
              {/* Card Header with gradient */}
              <div 
                className="h-32 relative flex items-center justify-center"
                style={{ background: 'var(--gradient-primary)' }}
              >
                <Smartphone className="w-12 h-12 text-primary-foreground/50" />
                {project.featured && (
                  <span className="absolute top-3 right-3 px-2.5 py-0.5 bg-background/20 backdrop-blur-sm text-primary-foreground text-xs font-medium rounded-full">
                    Featured
                  </span>
                )}
              </div>

              {/* Card Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2.5 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                    {project.domain}
                  </span>
                  <span className="px-2.5 py-1 bg-secondary text-muted-foreground text-xs font-medium rounded-full">
                    {project.platform}
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-0.5 bg-foreground/5 text-foreground/70 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-0.5 text-muted-foreground text-xs">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
