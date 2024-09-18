import EmailRequest from './types/emailRequest'

const sendEmail = async (data: EmailRequest) => {
  try {
    const result = await fetch(
      'https://api.postmarkapp.com/email/withTemplate',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'X-Postmark-Server-Token': process.env.POSTMARK_KEY!,
        },
        body: JSON.stringify({
          TemplateId: 37250157,
          TemplateModel: data,
          From: 'mail@jochemdobber.nl',
          To: 'mail@jochemdobber.nl',
          MessageStream: 'outbound',
        }),
      },
    )
    return await result.json()
  } catch (error: any) {
    throw error
  }
}

export default sendEmail
