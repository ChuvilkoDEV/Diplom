import React from 'react'
import { HomePage } from '@pages/HomePage'
import { Header } from '@widgets/Header'

export const App: React.FC = () => {
  return (
    <div>
      <Header />
      <HomePage />
    </div>
  )
}
