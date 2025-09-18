import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface AppState {
  // Theme state
  theme: 'light' | 'dark' | 'system'
  setTheme: (theme: 'light' | 'dark' | 'system') => void
  
  // Navigation state
  mobileMenuOpen: boolean
  setMobileMenuOpen: (open: boolean) => void
  
  // Loading states
  isLoading: boolean
  setIsLoading: (loading: boolean) => void
  
  // Contact form state
  contactForm: {
    name: string
    email: string
    subject: string
    message: string
  }
  setContactForm: (form: Partial<AppState['contactForm']>) => void
  resetContactForm: () => void
  
  // Portfolio data
  selectedProject: string | null
  setSelectedProject: (projectId: string | null) => void
  
  // Three.js scene state
  sceneLoaded: boolean
  setSceneLoaded: (loaded: boolean) => void
}

const initialContactForm = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      // Theme
      theme: 'system',
      setTheme: (theme) => set({ theme }),
      
      // Navigation
      mobileMenuOpen: false,
      setMobileMenuOpen: (mobileMenuOpen) => set({ mobileMenuOpen }),
      
      // Loading
      isLoading: false,
      setIsLoading: (isLoading) => set({ isLoading }),
      
      // Contact form
      contactForm: initialContactForm,
      setContactForm: (form) => 
        set((state) => ({ 
          contactForm: { ...state.contactForm, ...form } 
        })),
      resetContactForm: () => set({ contactForm: initialContactForm }),
      
      // Portfolio
      selectedProject: null,
      setSelectedProject: (selectedProject) => set({ selectedProject }),
      
      // Three.js
      sceneLoaded: false,
      setSceneLoaded: (sceneLoaded) => set({ sceneLoaded }),
    }),
    {
      name: 'portfolio-store',
      partialize: (state) => ({
        theme: state.theme,
        contactForm: state.contactForm,
      }),
    }
  )
)
