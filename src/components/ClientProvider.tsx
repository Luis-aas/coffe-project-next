'use client' // Declara que este é um Client Component
import { Provider } from 'react-redux'
import store from '@/redux/store' // Ajuste o caminho se necessário

interface ClientProviderProps {
  children: React.ReactNode
}

export default function ClientProvider({ children }: ClientProviderProps) {
  return <Provider store={store}>{children}</Provider>
}
