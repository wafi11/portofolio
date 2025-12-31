import { SectionContainer } from "@/components/layouts/SectionContainer";
import { TitleComponent } from "@/components/layouts/TitleComponent";
import { Button } from "@/components/ui/button";
import { dataStats, dataTechStack } from "@/data/DataNav";
import { Code2, Download, GraduationCap } from "lucide-react";

export function AboutMe() {
  return (
    <SectionContainer
      id="about"
      className="relative w-full overflow-hidden py-20 lg:py-32"
    >
      {/* Background Elements */}
      <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-20 left-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <span className="inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              Get to Know Me
            </span>
            <TitleComponent
              text="About Me"
              className="text-4xl font-bold lg:text-5xl"
            />
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              <GraduationCap className="mr-2 inline-block h-5 w-5 text-primary" />
              <strong className="text-foreground">
                Information Engineering Student
              </strong>{" "}
              with a proven track record in leading website development projects
              and active involvement in organizational initiatives.
            </p>
            <p>
              Skilled in{" "}
              <strong className="text-foreground">team leadership</strong>,{" "}
              <strong className="text-foreground">web development</strong>{" "}
              (Golang & JavaScript frameworks). Passionate about leveraging
              technical expertise to drive innovative projects.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 rounded-xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm">
            {dataStats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <stat.icon className="mx-auto mb-2 h-6 w-6 text-primary" />
                <p className="text-2xl font-bold text-foreground">
                  {stat.value}
                </p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Download Resume Button */}
          <Button size="lg" className="w-full group lg:w-auto">
            <Download className="mr-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
            Download Resume
          </Button>
        </div>

        {/* Right Content - Tech Stack */}
        <div className="space-y-6">
          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-2xl font-bold text-foreground">
              <Code2 className="h-6 w-6 text-primary" />
              Tech Stack
            </h3>
          </div>

          {/* Tech Stack Grid */}
          <div className="grid grid-cols-2 gap-4">
            {dataTechStack.map((tech, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-lg border border-border/50 bg-card/30 p-6 backdrop-blur-sm transition-all hover:scale-105 hover:border-primary/50 hover:bg-card/50 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative flex items-center gap-3">
                  <div>
                    <p className="font-semibold text-foreground">{tech}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-muted-foreground">
              Other Skills
            </h4>
            <div className="flex flex-wrap gap-2">
              {["Git", "Docker", "REST API", "Linux", "Tailwind CSS"].map(
                (skill, idx) => (
                  <span
                    key={idx}
                    className="rounded-full border border-border/50 bg-card/30 px-3 py-1 text-sm text-muted-foreground backdrop-blur-sm transition-all hover:border-primary/50 hover:text-primary"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
