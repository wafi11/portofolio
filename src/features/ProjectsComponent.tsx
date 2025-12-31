import { SectionContainer } from "@/components/layouts/SectionContainer";
import { TitleComponent } from "@/components/layouts/TitleComponent";
import { DataProjects } from "@/data/DataProjects";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function ProjectsComponent() {
  return (
    <SectionContainer
      id="projects"
      minFullscreen={true}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4"
    >
      <TitleComponent
        text="Projects"
        className="text-4xl font-bold lg:text-5xl"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {DataProjects.map((item, idx) => (
          <Link
            key={idx}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20"
          >
            {/* Background Gradient Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            {/* Shimmer Effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            {/* Image Container */}
            <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/20 to-purple-600/20">
              {item.image ? (
                <Image
                  width={500}
                  height={500}
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              ) : (
                <div className="h-full w-full flex items-center justify-center">
                  <div className="text-6xl font-bold text-primary/30">
                    {item.name.charAt(0).toUpperCase()}
                  </div>
                </div>
              )}

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/20 to-transparent" />
            </div>

            <div className="relative p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-sm text-muted-foreground flex items-center gap-1">
                    <span className="truncate">
                      {item.link.replace("https://", "")}
                    </span>
                  </p>
                </div>

                {/* Icon */}
                <div className="ml-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110">
                  <ExternalLink className="h-5 w-5" />
                </div>
              </div>

              {/* Description */}
              {item.description && (
                <p className="text-sm text-muted-foreground/80 mb-4 line-clamp-2">
                  {item.description}
                </p>
              )}

              {/* Tech Stack */}
              {item.techStack && item.techStack.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {item.techStack.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-primary/10 text-primary border border-primary/20 transition-colors group-hover:bg-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </SectionContainer>
  );
}
