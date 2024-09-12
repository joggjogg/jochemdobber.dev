import Header from '@/components/Header/Header'
import React from 'react'
import Container from '@/components/Container/Container'

const Projects = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
    </>
  )
}

export default Projects
