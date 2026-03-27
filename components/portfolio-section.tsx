'use client'

import { useState } from 'react'
import { Eye, ExternalLink, X, Briefcase, BookOpen } from 'lucide-react'
import { portfolioData } from '@/lib/portfolio-data'

interface PortfolioSectionProps {
  data: any
}

export function PortfolioSection({ data }: PortfolioSectionProps) {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedProject, setSelectedProject] = useState<any>(null)

  const filteredProjects =
    activeCategory === 'all'
      ? data.projects
      : data.projects.filter((project: any) => project.category === activeCategory)

  return (
    <div className="space-y-8 md:space-y-10">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{data.title || "Portfolio"}</h2>
        <div className="w-10 h-1 bg-accent rounded-full mb-6" />
      </div>

      {/* Categories Filter */}
      <div className="flex flex-wrap gap-2 md:gap-4 overflow-x-auto pb-2 scrollbar-hide">
        {data.categories.map((category: string) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-xl text-xs md:text-sm font-medium transition-colors whitespace-nowrap ${
              activeCategory === category
                ? 'text-accent bg-accent/10'
                : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
            }`}
          >
            {data.categoriesTrans[category] || category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {filteredProjects.map((project: any, index: number) => (
          <div key={index} className="group relative rounded-xl md:rounded-2xl overflow-hidden border border-border bg-secondary/30">
            <div className="aspect-video relative overflow-hidden">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-base md:text-lg font-bold mb-4 transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {project.title}
                </h3>

                {/* Action Buttons */}
                <div className="flex justify-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-accent text-accent-foreground rounded-lg text-xs font-medium hover:opacity-90 transition-opacity"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    {data.previewLabel || "More Info"}
                  </button>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-secondary border border-border text-white rounded-lg text-xs font-medium hover:bg-accent hover:text-accent-foreground hover:border-accent transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    {data.visitLabel || "Visit"}
                  </a>
                </div>
              </div>
            </div>
            <div className="p-4">
              <span className="text-[10px] md:text-xs text-accent uppercase font-bold tracking-wider">{project.category}</span>
              <h3 className="text-sm md:text-base font-bold text-foreground mt-1">{project.title}</h3>
            </div>
          </div>
        ))}
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
                  {data.descriptionTitle || "Description"}
                </h4>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-accent" />
                  {data.techTitle || "Technologies Used"}
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
                  {data.visitLabel || "Visit Project"}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
