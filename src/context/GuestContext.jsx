import { createContext, useContext, useState } from 'react'

const GuestContext = createContext(null)

export function GuestProvider({ children }) {
  const [currentFamily] = useState({
    familyName: 'Our Guests',
    guests: [
      { name: 'Guest', events: ['mehndi', 'pithi', 'sangeet', 'wedding'] },
    ],
    rsvps: [],
  })

  // Login gate is disabled — all visitors can see the full site
  return (
    <GuestContext.Provider value={{
      currentFamily,
      setCurrentFamily: () => {},
      isAuthenticated: true,
      logout: () => {},
    }}>
      {children}
    </GuestContext.Provider>
  )
}

export function useGuest() {
  const ctx = useContext(GuestContext)
  if (!ctx) throw new Error('useGuest must be used within GuestProvider')
  return ctx
}