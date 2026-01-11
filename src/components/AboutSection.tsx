import { GraduationCap, Building2 } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A technology enthusiast with a passion for building elegant mobile solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Bio */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">
              Kedar Sharad Desai
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Technology enthusiast currently working at <strong className="text-foreground">Credence Consultancy Services</strong> as an iPhone Developer. I bring over 13 years of hands-on experience in mobile application development.
              </p>
              <p>
                My expertise spans iOS development using Objective-C and Swift, along with cross-platform development using Flutter and React Native. I've successfully delivered applications across diverse domains including Healthcare, Mental Care, Automobile Showcase, Education, and e-Learning.
              </p>
              <p>
                I'm passionate about creating intuitive, high-performance mobile experiences that make a real difference in users' lives. Whether it's building secure healthcare messaging platforms or offline-first event management apps, I bring the same level of dedication and technical excellence to every project.
              </p>
            </div>
          </div>

          {/* Education Timeline */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-primary" />
              Education
            </h3>
            
            <div className="space-y-6">
              <div className="relative pl-8 pb-6 border-l-2 border-primary/20">
                <div className="absolute left-0 top-0 w-4 h-4 -translate-x-1/2 rounded-full bg-primary shadow-lg shadow-primary/30" />
                <div className="glass-card rounded-xl p-5">
                  <div className="text-sm text-primary font-medium mb-1">2013</div>
                  <h4 className="font-semibold text-foreground mb-1">
                    Master in Computer Application (MCA)
                  </h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    <Building2 className="w-4 h-4 inline mr-1" />
                    Lokmanya Tilak College of Engineering
                  </p>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                    66% Score
                  </div>
                </div>
              </div>

              <div className="relative pl-8 border-l-2 border-primary/20">
                <div className="absolute left-0 top-0 w-4 h-4 -translate-x-1/2 rounded-full bg-primary/60 shadow-lg shadow-primary/20" />
                <div className="glass-card rounded-xl p-5">
                  <div className="text-sm text-primary font-medium mb-1">2009</div>
                  <h4 className="font-semibold text-foreground mb-1">
                    Bachelor of Science in Information Technology (B.Sc IT)
                  </h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    <Building2 className="w-4 h-4 inline mr-1" />
                    Lokmanya Tilak College of Science and Commerce
                  </p>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                    66% Score
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
