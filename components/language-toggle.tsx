'use client'

import { Globe } from 'lucide-react'

interface LanguageToggleProps {
  currentLang: 'en' | 'es'
  onToggle: (lang: 'en' | 'es') => void
}

export function LanguageToggle({ currentLang, onToggle }: LanguageToggleProps) {
  return (
    <button
      onClick={() => onToggle(currentLang === 'en' ? 'es' : 'en')}
      className="flex items-center gap-2 px-3 py-2 rounded-xl bg-card border border-border text-foreground hover:bg-secondary transition-colors"
      title={currentLang === 'en' ? 'Cambiar a Español' : 'Switch to English'}
    >
      <Globe className="w-4 h-4 text-accent" />
      <span className="text-sm font-medium uppercase">{currentLang}</span>
    </button>
  )
}
