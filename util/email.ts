import EmailRequest from './types/emailRequest'

const sendEmail = async (data: EmailRequest) => {
  try {
    return await fetch('https://api.postmarkapp.com/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Postmark-Server-Token': process.env.POSTMARK_KEY!,
      },
      body: JSON.stringify({
        TemplateId: 37250157,
        From: 'mail@jochemdobber.nl',
        To: 'mail@jochemdobber.nl',
        TemplateModel: data,
        MessageStream: 'outbound',
      }),
    })
  } catch (error: any) {
    console.debug(error)
    throw error
  }
}

export default sendEmail
