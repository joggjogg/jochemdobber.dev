import Header from '@/components/Header/Header'
import React from 'react'
import Container from '@/components/Container/Container'
import Footer from '@/components/Footer/Footer'

const Projects = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </>
  )
}

export default Projects
