'use client'

import { useState } from 'react'
import { ProfileSidebar } from '@/components/profile-sidebar'
import { AboutSection } from '@/components/about-section'
import { ResumeSection } from '@/components/resume-section'
import { PortfolioSection } from '@/components/portfolio-section'
import { BlogSection } from '@/components/blog-section'
import { ContactSection } from '@/components/contact-section-new'
import { ThemeToggle } from '@/components/theme-toggle'
import { LanguageToggle } from '@/components/language-toggle'
import {
  profileData,
  aboutData,
  resumeData,
  portfolioData,
  contactData,
  translations,
} from '@/lib/portfolio-data'

export default function Home() {
  const [activeSection, setActiveSection] = useState('about')
  const [lang, setLang] = useState<'en' | 'es'>('es')
  const t = translations[lang]

  const navItems = ['about', 'resume', 'portfolio', 'blog', 'contact']

  // Pre-process data with translations
  const profileTranslated = { ...profileData, ...t.profile }
  const resumeTranslated = { ...resumeData, ...t.resume }

  // Merge portfolio projects with translations to keep images and tech stack
  const portfolioTranslated = {
    ...portfolioData,
    ...t.portfolio,
    projects: portfolioData.projects.map((p, i) => ({
      ...p,
      ...(t.portfolio.projects[i] || {})
    }))
  }

  const contactTranslated = { ...contactData, ...t.contact }

  // Merge about data with translations
  const aboutTranslated = {
    ...aboutData,
    ...t.about,
    services: aboutData.services.map((s, i) => ({ ...s, ...t.about.services[i] })),
    // Preserve full objects for experience
    experiencia: aboutData.experiencia.map((e, i) => ({
      ...e,
      ...(t.about.experiencia?.[i] || {})
    })),
    projects: portfolioTranslated.projects,
    portfolioLabels: portfolioTranslated
  }

  return (
    <div className="min-h-screen bg-background p-3 sm:p-4 md:p-6 lg:p-12">
      <div className="fixed top-4 right-4 md:top-6 md:right-6 z-50 flex items-center gap-2">
        <LanguageToggle currentLang={lang} onToggle={setLang} />
        <ThemeToggle />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-3 sm:gap-4 md:gap-6">
          <ProfileSidebar data={profileTranslated as any} lang={lang} />

          {/* Main Content */}
          <main className="flex-1 bg-card rounded-xl md:rounded-2xl border border-border overflow-hidden">
            {/* Navigation */}
            <nav className="flex gap-1 sm:gap-2 md:gap-4 p-3 sm:p-4 md:p-6 border-b border-border overflow-x-auto scrollbar-hide">
              {navItems.filter(i => i !== 'blog').map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium capitalize transition-colors whitespace-nowrap flex-shrink-0 ${activeSection === section
                    ? 'text-foreground bg-accent/10'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                    }`}
                >
                  {t.nav[section as keyof typeof t.nav] || section}
                </button>
              ))}
            </nav>

            <div className="p-4 sm:p-5 md:p-6 lg:p-8">
              {activeSection === 'about' && (
                <AboutSection data={aboutTranslated as any} />
              )}
              {activeSection === 'resume' && (
                <ResumeSection data={resumeTranslated as any} />
              )}
              {activeSection === 'portfolio' && (
                <PortfolioSection data={portfolioTranslated as any} />
              )}
              {activeSection === 'contact' && (
                <ContactSection data={contactTranslated as any} />
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
