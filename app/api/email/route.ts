export const runtime = 'edge'
export const dynamic = 'force-dynamic'

import EmailRequest from '@/util/types/emailRequest'
import { NextResponse } from 'next/server'
import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'
import sendEmail from '@/util/email'

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

  console.debug(response)

  try {
    if (!success) {
      return NextResponse.json(
        { message: 'Request rate limited' },
        { status: 429 },
      )
    }
    await sendEmail(data)
    return NextResponse.json(
      {
        message: 'Message sent succesfully',
      },
      { status: 200 },
    )
  } catch (error: any) {
    return NextResponse.json(
      {
        message: error.message,
      },
      { status: 500 },
    )
  }
}
