'use client'

import { PenTool, Code, Smartphone, Zap, Eye, ExternalLink, X, Briefcase, BookOpen } from 'lucide-react'
import { useState } from 'react'

interface AboutSectionProps {
  data: any
}

export function AboutSection({ data }: AboutSectionProps) {
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const portfolioLabels = data.portfolioLabels || {}

  const iconMap: any = {
    Code,
    Zap,
    Smartphone,
    PenTool,
  }

  return (
    <div className="space-y-8 md:space-y-10">
      {/* About Me */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{data.title || "Sobre mí"}</h2>
        <div className="w-10 h-1 bg-accent rounded-full mb-6" />
        <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
          {data.description.map((paragraph: string, index: number) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>

      {/* What I'm Doing */}
      <div>
        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">{data.servicesTitle || "Lo que hago"}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          {data.services.map((service: any, index: number) => {
            const IconComponent = iconMap[service.icon] || Code
            return (
              <div
                key={index}
                className="flex gap-3 md:gap-4 p-4 md:p-6 bg-secondary/50 rounded-xl md:rounded-2xl border border-border hover:border-accent transition-colors"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0">
                  <IconComponent className="w-full h-full text-accent" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-base md:text-lg font-semibold text-foreground mb-2">{service.title}</h4>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      
      {/* Experiencia Laboral Marquee */}
      <div>
        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">{data.experienciaTitle || "Experiencia Laboral"}</h3>
        <div className="relative overflow-hidden mb-8">
          <div className="flex gap-3 md:gap-4 animate-marquee">
            {[...(data.experiencia || []), ...(data.experiencia || [])].map((item: any, index: number) => (
              <div key={index} className="flex-shrink-0 w-72 md:w-80 p-4 md:p-6 bg-secondary rounded-xl md:rounded-2xl border border-border hover:border-accent/30 transition-all">
                <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                  <img
                    src={item.avatar || "/placeholder.svg"}
                    alt={item.name}
                    className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl object-cover"
                  />
                  <div className="flex flex-col">
                    <h4 className="text-base md:text-lg font-semibold text-foreground leading-tight">{item.name}</h4>
                    {item.role && (
                      <span className="text-xs text-accent font-medium mt-0.5">{item.role}</span>
                    )}
                  </div>
                </div>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Portfolio Projects Marquee */}
      <div>
        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">{portfolioLabels.title || "Proyectos del Portafolio"}</h3>
        <div className="relative overflow-hidden">
          <div className="flex gap-4 animate-marquee-slow hover:pause">
            {[...(data.projects || []), ...(data.projects || [])].map((project: any, index: number) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-72 md:w-80 group relative rounded-xl md:rounded-2xl overflow-hidden border border-border bg-secondary/30 transition-all hover:border-accent"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4">
                    <h4 className="text-white text-sm font-bold mb-3 text-center">
                      {project.title}
                    </h4>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="flex items-center gap-1 px-2.5 py-1.5 bg-accent text-accent-foreground rounded-lg text-xs font-medium hover:opacity-90"
                      >
                        <Eye className="w-3 h-3" />
                        {portfolioLabels.previewLabel || "Más info"}
                      </button>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-2.5 py-1.5 bg-secondary border border-border text-white rounded-lg text-xs font-medium hover:bg-accent transition-colors"
                      >
                        <ExternalLink className="w-3 h-3" />
                        {portfolioLabels.visitLabel || "Visitar"}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-3">
                  <h4 className="text-sm font-bold text-foreground truncate">{project.title}</h4>
                  <p className="text-[10px] text-accent font-medium mt-1">{project.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-card border border-border rounded-2xl md:rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 relative">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 rounded-xl bg-secondary hover:bg-destructive hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-video relative rounded-xl overflow-hidden mb-6">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{selectedProject.title}</h3>
            <div className="w-12 h-1 bg-accent rounded-full mb-6" />

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-accent" />
                  {portfolioLabels.descriptionTitle || "Descripción"}
                </h4>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-accent" />
                  {portfolioLabels.techTitle || "Tecnologías Usadas"}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t: string, i: number) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-secondary rounded-lg text-xs md:text-sm font-medium text-foreground border border-border"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex justify-end gap-3">
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 bg-accent text-accent-foreground rounded-xl font-bold flex items-center gap-2 hover:opacity-90 transition-opacity"
                >
                  <ExternalLink className="w-4 h-4" />
                  {portfolioLabels.visitLabel || "Visitar Proyecto"}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
