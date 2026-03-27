'use client'

import { useState } from 'react'
import { Mail, MapPin, Send } from 'lucide-react'

interface ContactSectionProps {
  data: any
}

export function ContactSection({ data }: ContactSectionProps) {
  const labels = data.labels || {
    name: 'Full Name',
    email: 'Email Address',
    message: 'Your Message',
    send: 'Send Message',
  }
  
  const placeholders = data.placeholders || {
    name: 'Eduardo Castillo',
    email: 'edcastilloblanco@gmail.com',
    message: 'Write your message here...',
  }

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    
    try {
      const response = await fetch(`https://formspree.io/f/${data.formId || 'xpwajolv'}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        setStatus('error')
      }
    } catch (err) {
      console.error('Submission error:', err)
      setStatus('error')
    }
  }

  return (
    <div className="space-y-6 md:space-y-8">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{data.title || "Contact"}</h2>
        <div className="w-10 h-1 bg-accent rounded-full mb-6" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
        <div className="flex items-center gap-3 md:gap-4 p-4 md:p-5 bg-secondary rounded-xl md:rounded-2xl border border-border hover:border-accent transition-colors group">
          <div className="w-12 h-12 md:w-14 md:h-14 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
            <Mail className="w-5 h-5 md:w-6 md:h-6 text-accent" />
          </div>
          <div className="min-w-0">
            <h3 className="text-xs md:text-sm font-medium text-muted-foreground mb-1">Email</h3>
            <a
              href={`mailto:${data.email}`}
              className="text-sm md:text-base text-foreground hover:text-accent transition-colors font-medium truncate block"
            >
              {data.email}
            </a>
          </div>
        </div>

        <div className="flex items-center gap-3 md:gap-4 p-4 md:p-5 bg-secondary rounded-xl md:rounded-2xl border border-border hover:border-accent transition-colors group">
          <div className="w-12 h-12 md:w-14 md:h-14 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
            <MapPin className="w-5 h-5 md:w-6 md:h-6 text-accent" />
          </div>
          <div>
            <h3 className="text-xs md:text-sm font-medium text-muted-foreground mb-1">Location</h3>
            <p className="text-sm md:text-base text-foreground font-medium">{data.location}</p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
              {labels.name}
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 md:px-5 py-3 md:py-3.5 bg-secondary border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none transition-all text-sm md:text-base"
              placeholder={placeholders.name}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
              {labels.email}
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 md:px-5 py-3 md:py-3.5 bg-secondary border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none transition-all text-sm md:text-base"
              placeholder={placeholders.email}
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
            {labels.message}
          </label>
          <textarea
            id="message"
            rows={6}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-4 md:px-5 py-3 md:py-3.5 bg-secondary border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none transition-all resize-none text-sm md:text-base"
            placeholder={placeholders.message}
            required
          />
        </div>

        <button
          type="submit"
          disabled={status === 'submitting'}
          className={`flex items-center justify-center gap-2 w-full md:w-auto px-6 md:px-8 py-3 md:py-3.5 rounded-xl font-medium transition-all text-sm md:text-base ${
            status === 'submitting' ? 'bg-accent/50 cursor-not-allowed' : 
            status === 'success' ? 'bg-green-500 text-white' : 
            status === 'error' ? 'bg-destructive text-white' : 
            'bg-accent text-accent-foreground hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-0.5'
          }`}
        >
          {status === 'submitting' ? (
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : status === 'success' ? (
            <Send className="w-4 h-4" />
          ) : (
            <Send className="w-4 h-4" />
          )}
          {status === 'submitting' ? (data.sendingLabel || 'Enviando...') : 
           status === 'success' ? (data.successLabel || '¡Mensaje Enviado!') : 
           status === 'error' ? (data.errorLabel || 'Error al enviar') : 
           labels.send}
        </button>

        {status === 'success' && (
          <p className="text-sm text-green-500 mt-2 font-medium animate-in fade-in slide-in-from-top-2">
            {data.successMessage || 'Gracias por tu mensaje. Te responderé pronto.'}
          </p>
        )}
        {status === 'error' && (
          <p className="text-sm text-destructive mt-2 font-medium">
            {data.errorMessage || 'Hubo un problema. Por favor intenta de nuevo.'}
          </p>
        )}
      </form>
    </div>
  )
}
