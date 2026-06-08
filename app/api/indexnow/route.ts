import { NextResponse } from 'next/server'

const INDEXNOW_KEY = 'c724a23bcd40426dbaa1cb32c3af6363'
const BASE_URL = 'https://www.mpho-moipolai.co.za'

const urls = [
  BASE_URL,
  `${BASE_URL}/about`,
  `${BASE_URL}/web-design-midrand`,
  `${BASE_URL}/seo-services-midrand`,
  `${BASE_URL}/nextjs-website-design`,
  `${BASE_URL}/ecommerce-website-development`,
  `${BASE_URL}/ux-ui-design`,
  `${BASE_URL}/branding-design`,
  `${BASE_URL}/social-media-ads`,
  `${BASE_URL}/social-media-marketing`,
  `${BASE_URL}/web-hosting`,
  `${BASE_URL}/web-maintenance`,
  `${BASE_URL}/privacy`,
  `${BASE_URL}/terms`,
]

export async function GET() {
  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        host: 'www.mpho-moipolai.co.za',
        key: INDEXNOW_KEY,
        keyLocation: `${BASE_URL}/${INDEXNOW_KEY}.txt`,
        urlList: urls,
      }),
    })

    return NextResponse.json(
      { success: response.ok, status: response.status },
      { status: response.ok ? 200 : 502 }
    )
  } catch {
    return NextResponse.json(
      { success: false, error: 'Failed to submit to IndexNow' },
      { status: 502 }
    )
  }
}
