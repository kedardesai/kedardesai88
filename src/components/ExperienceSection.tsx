import { Briefcase, MapPin, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'Software Engineer',
    company: 'Credence Consultancy Services',
    location: 'Mumbai, India',
    period: 'Aug 2016 – Present',
    type: 'Service-based',
    description: 'Primary iOS developer handling enterprise-level mobile applications. Key client: MPCS. Successfully delivered apps including MAPP by MPCS, PocketSchool, MEvents, and more.',
    highlights: [
      'Lead iOS developer for DOT compliance and fleet management solutions',
      'Explored and implemented React Native and Flutter for cross-platform projects',
      'Mentored junior developers and conducted code reviews',
      'Integrated complex features like DocuSign, offline-first sync, and biometric authentication',
    ],
    current: true,
  },
  {
    title: 'Software Developer',
    company: 'Automotive Exchange Pvt. Ltd. (CarWale)',
    location: 'Mumbai, India',
    period: 'Sep 2014 – Jul 2016',
    type: 'Product-based',
    description: 'Worked on CarWale iOS application, one of India\'s leading auto research platforms with over 1 million downloads.',
    highlights: [
      'Developed new features and maintained the CarWale iOS app',
      'Implemented performance optimizations reducing app load time by 40%',
      'Integrated analytics and A/B testing frameworks',
      'Collaborated with design team on UI/UX improvements',
    ],
    current: false,
  },
  {
    title: 'iOS Developer',
    company: 'V2 Solutions Pvt. Ltd.',
    location: 'Mumbai, India',
    period: 'Dec 2012 – Aug 2014',
    type: 'Service-based',
    description: 'Started as Trainee iPhone Developer and was promoted to Associate Software Engineer. Worked on multiple enterprise and consumer applications.',
    highlights: [
      'Built healthcare messaging app (Medigram) with HIPAA compliance',
      'Developed school communication platforms (Edukonnect series)',
      'Created enterprise task management solutions (ClearSteps)',
      'Gained deep expertise in Objective-C and iOS frameworks',
    ],
    current: false,
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="section-padding bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Work Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A journey through leading tech companies and innovative projects
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div 
                key={exp.company}
                className={`relative md:grid md:grid-cols-2 md:gap-8 ${
                  idx % 2 === 0 ? '' : 'md:direction-rtl'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 -translate-x-1/2 rounded-full bg-primary shadow-lg shadow-primary/30 hidden md:block" />
                
                {/* Content */}
                <div className={`${idx % 2 === 0 ? 'md:text-right md:pr-12' : 'md:col-start-2 md:pl-12'}`}>
                  <div className="glass-card rounded-2xl p-6 card-hover md:direction-ltr">
                    <div className="flex items-center gap-2 mb-3">
                      {exp.current && (
                        <span className="px-2.5 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded-full">
                          Current
                        </span>
                      )}
                      <span className="px-2.5 py-0.5 bg-secondary text-muted-foreground text-xs font-medium rounded-full">
                        {exp.type}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      {exp.title}
                    </h3>
                    <h4 className="text-lg text-primary font-medium mb-3">
                      {exp.company}
                    </h4>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, hIdx) => (
                        <li 
                          key={hIdx}
                          className="flex items-start gap-2 text-sm text-foreground/80"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
