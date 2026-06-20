import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 55%, #0f3460 100%)',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          padding: '80px',
          position: 'relative',
        }}
      >
        {/* Decorative accent */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '6px',
            background: 'linear-gradient(90deg, #7c3aed, #a78bfa, #c084fc)',
          }}
        />

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '16px',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              color: '#a78bfa',
              fontSize: '18px',
              fontWeight: 600,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
            }}
          >
            mpho-moipolai.co.za
          </div>

          <h1
            style={{
              color: '#ffffff',
              fontSize: '80px',
              fontWeight: 800,
              margin: 0,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
            }}
          >
            Mpho Moipolai
          </h1>

          <p
            style={{
              color: '#c4b5fd',
              fontSize: '34px',
              margin: 0,
              fontWeight: 400,
            }}
          >
            Web Design &amp; SEO Specialist
          </p>

          <p
            style={{
              color: '#6b7280',
              fontSize: '22px',
              margin: '8px 0 0',
            }}
          >
            Midrand, South Africa
          </p>
        </div>

        {/* Bottom accent */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(90deg, #c084fc, #a78bfa, #7c3aed)',
          }}
        />
      </div>
    ),
    { ...size }
  )
}
