export const runtime = 'edge'
export const dynamic = 'force-dynamic'

import EmailRequest from '@/app/types/emailRequest'
import { NextResponse } from 'next/server'
import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'
var postmark = require('postmark')

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(10, '10 s'),
  prefix: '@upstash/ratelimit',
  analytics: true,
})

export async function POST(req: Request) {
  const identifier = 'api'
  const { success, limit, remaining } = await ratelimit.limit(identifier)
  const response = {
    success: success,
    limit: limit,
    remaining: remaining,
  }
  const data = (await req.json()) as EmailRequest

  try {
    await sendEmail(data)
    if (!success) {
      return new NextResponse(JSON.stringify(response), { status: 429 })
    }
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

const sendEmail = async (data: EmailRequest) => {
  var client = new postmark.ServerClient(process.env.POSTMARK_KEY)

  client.sendEmailWithTemplate({
    TemplateId: 37250157,
    From: 'mail@jochemdobber.nl',
    To: 'mail@jochemdobber.nl',
    TemplateModel: data,
    MessageStream: 'outbound',
  })
}
