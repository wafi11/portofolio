import { SectionContainer } from "@/components/layouts/SectionContainer";
import { TitleComponent } from "@/components/layouts/TitleComponent";
import { workExperiences } from "@/data/DataWorks";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export function WorkExperienceComponent() {
  return (
    <SectionContainer
      id="works"
      minFullscreen={true}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 py-20"
    >
      <TitleComponent
        text="Work Experience"
        className="text-4xl font-bold lg:text-5xl"
      />

      <div className="w-full max-w-4xl">
        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-purple-500 to-primary transform -translate-x-1/2" />

          {/* Experience Items */}
          {workExperiences.map((exp, idx) => (
            <div
              key={idx}
              className={`relative mb-12 ${
                idx % 2 === 0
                  ? "md:pr-1/2 md:text-right"
                  : "md:pl-1/2 md:ml-auto md:text-left"
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background transform -translate-x-1/2 z-10 shadow-lg shadow-primary/50">
                <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
              </div>

              {/* Content Card */}
              <div
                className={`ml-8 md:ml-0 ${
                  idx % 2 === 0 ? "md:mr-8" : "md:ml-8"
                } group`}
              >
                <div className="relative overflow-hidden rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm p-6 transition-all duration-300 hover:scale-[1.02] hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10">
                  {/* Background Gradient Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-500/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Content */}
                  <div className="relative">
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {exp.position}
                        </h3>
                        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 flex-wrap text-sm">
                        {exp.company && (
                          <div className="flex items-center gap-1.5 text-primary font-medium">
                            <Briefcase className="h-4 w-4" />
                            <span>{exp.company}</span>
                          </div>
                        )}
                        {exp.location && (
                          <div className="flex items-center gap-1.5 text-muted-foreground">
                            <MapPin className="h-4 w-4" />
                            <span>{exp.location}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-start text-muted-foreground mb-4">
                      {exp.description}
                    </p>

                    {/* Responsibilities */}
                    <div className="mb-4">
                      <h4 className="text-sm text-start font-semibold text-foreground mb-2">
                        Key Responsibilities:
                      </h4>
                      <ul className="space-y-1.5 text-sm text-muted-foreground">
                        {exp.responsibilities.map((resp, respIdx) => (
                          <li key={respIdx} className="flex items-start gap-2">
                            <span className="text-primary mt-1.5 flex-shrink-0">
                              •
                            </span>
                            <span className="text-start">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {exp.techStack.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-2.5 py-1 text-xs font-medium rounded-md bg-primary/10 text-primary border border-primary/20 transition-colors group-hover:bg-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Border Animation */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-purple-600 transition-all duration-300 group-hover:w-full" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
