'use client'
import Header from '@/components/Header/Header'
import React, { useRef } from 'react'
import Container from '@/components/Container/Container'
import Contact from '@/components/Contact/Contact'

const Projects = ({ children }: { children: React.ReactNode }) => {
  const contactRef = useRef<HTMLDivElement>(null)

  const scrollToContactRef = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <Header scrollToContactRef={scrollToContactRef} />
      <Container>{children}</Container>
      <footer ref={contactRef}>
        <Contact />
      </footer>
    </>
  )
}

export default Projects
