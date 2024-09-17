'use client'
import React, { useState } from 'react'
import { Group, Textarea, TextInput } from '@mantine/core'
import styles from './Footer.module.css'
import { useForm } from '@mantine/form'
import Container from '../Container/Container'
import Button from '../Button/Button'
import Socials from '../Socials/Socials'

const Footer = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      name: '',
      email: '',
      message: '',
    },

    validate: {
      email: value => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  })

  const submitForm = form.onSubmit(async values => {
    try {
      setIsLoading(true)
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })

      if (response.ok) {
        setSuccess(
          "Thank your for sending me a message. I'll get in touch with you soon!",
        )
        form.reset()
        return
      }

      throw new Error(await response.json())
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message)
      }
    } finally {
      setIsLoading(false)
    }
  })

  return (
    <div className={styles.footer}>
      <Container>
        <div className={styles.title}>Get in touch with me</div>
        <form className={styles.form} onSubmit={submitForm}>
          <Group
            h={'97px'}
            align="flex-start"
            mb={'md'}
            grow
            justify="space-between"
          >
            <TextInput
              label="Name"
              placeholder="Your name"
              key={form.key('name')}
              {...form.getInputProps('name')}
            />
            <TextInput
              label="Email"
              placeholder="Your email"
              key={form.key('email')}
              {...form.getInputProps('email')}
            />
          </Group>

          <Textarea
            autosize
            minRows={4}
            label="Message"
            placeholder="Ask away"
            key={form.key('message')}
            {...form.getInputProps('message')}
          />

          <Group justify="flex-end" mt="md">
            <Button type="submit" loading={isLoading}>
              Send
            </Button>
          </Group>
        </form>
        {success && <div className={styles.success}>{success}</div>}
        <Socials />
      </Container>
    </div>
  )
}

export default Footer
