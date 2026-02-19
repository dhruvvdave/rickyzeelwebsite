import { createContext, useContext, useState, useEffect } from 'react'

const GuestContext = createContext(null)

export function GuestProvider({ children }) {
  const [currentFamily, setCurrentFamilyState] = useState(null)

  useEffect(() => {
    const stored = localStorage.getItem('rz_family')
    if (stored) {
      try {
        setCurrentFamilyState(JSON.parse(stored))
      } catch {
        localStorage.removeItem('rz_family')
      }
    }
  }, [])

  function setCurrentFamily(family) {
    setCurrentFamilyState(family)
    if (family) {
      localStorage.setItem('rz_family', JSON.stringify(family))
    } else {
      localStorage.removeItem('rz_family')
    }
  }

  function logout() {
    setCurrentFamily(null)
  }

  return (
    <GuestContext.Provider value={{
      currentFamily,
      setCurrentFamily,
      isAuthenticated: !!currentFamily,
      logout,
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
