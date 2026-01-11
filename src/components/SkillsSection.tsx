import { 
  Smartphone, 
  Code2, 
  Layers, 
  Zap, 
  Database, 
  GitBranch 
} from 'lucide-react';

const skills = [
  {
    category: 'Languages',
    items: [
      { name: 'Swift', level: 95, icon: Code2 },
      { name: 'Objective-C', level: 90, icon: Code2 },
      { name: 'Dart', level: 85, icon: Code2 },
      { name: 'JavaScript/TypeScript', level: 80, icon: Code2 },
    ],
  },
  {
    category: 'Frameworks',
    items: [
      { name: 'iOS SDK', level: 95, icon: Smartphone },
      { name: 'Flutter', level: 88, icon: Layers },
      { name: 'React Native', level: 82, icon: Layers },
      { name: 'SwiftUI', level: 85, icon: Smartphone },
    ],
  },
  {
    category: 'Tools & Practices',
    items: [
      { name: 'Xcode & Instruments', level: 95, icon: Zap },
      { name: 'Git & CI/CD', level: 90, icon: GitBranch },
      { name: 'REST APIs & GraphQL', level: 88, icon: Database },
      { name: 'Firebase & Analytics', level: 85, icon: Database },
    ],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="section-padding">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit refined over 13+ years of mobile development
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((category, categoryIdx) => (
            <div 
              key={category.category}
              className="glass-card rounded-2xl p-6 card-hover"
              style={{ animationDelay: `${categoryIdx * 0.1}s` }}
            >
              <h3 className="text-lg font-semibold text-foreground mb-6">
                {category.category}
              </h3>
              <div className="space-y-5">
                {category.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <skill.icon className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className="h-full rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${skill.level}%`,
                          background: 'var(--gradient-primary)',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional skills badges */}
        <div className="mt-12 text-center">
          <h4 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">
            Also experienced with
          </h4>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Core Data', 'Realm', 'SQLite', 'Push Notifications', 'In-App Purchases',
              'ARKit', 'Core Animation', 'Auto Layout', 'Combine', 'RxSwift',
              'Alamofire', 'SnapKit', 'CocoaPods', 'SPM', 'TestFlight'
            ].map((skill) => (
              <span 
                key={skill}
                className="px-4 py-2 bg-secondary/50 text-foreground/80 text-sm rounded-full hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
