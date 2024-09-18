var postmark = require('postmark')
import EmailRequest from './types/emailRequest'

const postmarkClient = new postmark.ServerClient(process.env.POSTMARK_KEY!)

const sendEmail = async (data: EmailRequest) => {
  try {
    const result = await postmarkClient.sendEmailWithTemplate({
      TemplateId: 37250157,
      From: 'mail@jochemdobber.nl',
      To: 'mail@jochemdobber.nl',
      TemplateModel: data,
      MessageStream: 'outbound',
    })
    console.debug(result)
  } catch (error: any) {
    console.debug(error)
    throw error
  }
}

export default sendEmail
