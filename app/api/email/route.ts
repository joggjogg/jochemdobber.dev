import EmailRequest from '@/app/types/emailRequest'
import arcjet, { protectSignup, shield } from '@arcjet/next'
import { NextResponse } from 'next/server'
var postmark = require('postmark')

const aj = arcjet({
  key: process.env.ARCJET_KEY!,
  rules: [
    shield({
      mode: 'DRY_RUN',
    }),
    protectSignup({
      email: {
        mode: 'LIVE',
        block: ['DISPOSABLE', 'INVALID', 'NO_MX_RECORDS'],
      },
      bots: {
        mode: 'LIVE',
        allow: [],
      },
      rateLimit: {
        mode: 'LIVE',
        interval: '10m',
        max: 10,
      },
    }),
  ],
})

export async function POST(req: Request) {
  const data = (await req.json()) as EmailRequest

  const badRequestResponse = (parameter: string) =>
    NextResponse.json(
      { message: `Missing parameter: ${parameter}` },
      { status: 400 },
    )

  if (data.email == '' || data.email == undefined) {
    return badRequestResponse(data.email)
  }

  if (data.name == '' || data.name == undefined) {
    return badRequestResponse(data.name)
  }

  if (data.message == '' || data.message == undefined) {
    return badRequestResponse(data.message)
  }

  const decision = await aj.protect(req, { email: data.email })

  if (decision.isDenied()) {
    if (decision.reason.isEmail()) {
      return NextResponse.json(
        {
          message: 'Invalid email',
          reason: decision.reason,
        },
        { status: 400 },
      )
    } else {
      return NextResponse.json({ message: 'Forbidden' }, { status: 403 })
    }
  } else {
    try {
      sendEmail(data)
      return NextResponse.json(
        {
          message: 'Message sent succesfully',
        },
        { status: 200 },
      )
    } catch (error) {
      if (error instanceof Error) {
        return NextResponse.json(
          {
            message: error.message,
          },
          { status: 500 },
        )
      }
    }
  }
}

const sendEmail = (data: EmailRequest) => {
  var client = new postmark.ServerClient(process.env.POSTMARK_KEY)

  client.sendEmailWithTemplate({
    TemplateId: 37250157,
    From: 'mail@jochemdobber.nl',
    To: 'mail@jochemdobber.nl',
    TemplateModel: data,
    MessageStream: 'outbound',
  })
}

export const runtime = 'edge'
