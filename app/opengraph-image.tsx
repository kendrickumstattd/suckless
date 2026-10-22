import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';

export const alt = 'Make Things Suck Less. Better websites for places people love.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Rendered once at build time and used as the link preview on social sites and messaging apps.
export default async function OpengraphImage() {
  const [medium, black] = await Promise.all([
    readFile(join(process.cwd(), 'app/fonts/DMSans-Medium.ttf')),
    readFile(join(process.cwd(), 'app/fonts/DMSans-Black.ttf')),
  ]);
  return new ImageResponse(
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '72px 80px', background: '#faf9f5', color: '#101115', fontFamily: 'DM Sans', fontWeight: 500 }}>
      <div style={{ display: 'flex', fontSize: 26, fontWeight: 800, letterSpacing: 4, color: '#073dff' }}>WEBSITES FOR PLACES THAT MATTER.</div>
      <div style={{ display: 'flex', flexDirection: 'column', fontSize: 136, fontWeight: 900, lineHeight: 0.92, letterSpacing: -7 }}>
        <span>Make Things</span>
        <span style={{ display: 'flex' }}>Suck&nbsp;<span style={{ color: '#073dff' }}>Less.</span></span>
      </div>
      <div style={{ display: 'flex', fontSize: 30, color: '#64666c' }}>Design, accessibility, performance, and practical security.</div>
    </div>,
    {
      ...size,
      fonts: [
        { name: 'DM Sans', data: medium, weight: 500, style: 'normal' },
        { name: 'DM Sans', data: black, weight: 900, style: 'normal' },
      ],
    },
  );
}
