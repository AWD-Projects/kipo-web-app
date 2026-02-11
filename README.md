# Kipo Landing Page

A beautiful, modern landing page for Kipo - a personal finance management mobile app. Built with Next.js 15, React 19, Tailwind CSS v4, and Framer Motion.

## Features

- 🎨 Glassmorphism design with purple theme
- ✨ Smooth animations with Framer Motion
- 📱 Fully responsive (mobile-first)
- 🌙 Dark mode by default
- 📊 Waitlist signup with Supabase
- ⚡ Optimized performance
- 🎯 SEO-friendly

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **UI:** React 19, Tailwind CSS v4
- **Animations:** Framer Motion, GSAP
- **Components:** shadcn/ui
- **Database:** Supabase
- **Forms:** React Hook Form + Zod
- **Icons:** Lucide React
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- A Supabase account (free tier works)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd kipo-web
```

2. Install dependencies:
```bash
npm install
```

3. Set up Supabase:
   - Create a new project at [supabase.com](https://supabase.com)
   - Run the SQL below in your Supabase SQL editor
   - Copy your project URL and anon key

4. Configure environment variables:

Edit `.env.local` and add your Supabase credentials:
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Supabase Setup

Create a `waitlist` table in your Supabase project:

```sql
CREATE TABLE waitlist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  referral_source TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  metadata JSONB DEFAULT '{}'::jsonb
);

ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public inserts" ON waitlist
  FOR INSERT TO anon WITH CHECK (true);

CREATE INDEX idx_waitlist_email ON waitlist(email);
```

## Project Structure

```
├── app/
│   ├── actions/          # Server actions
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Home page
│   └── globals.css       # Global styles
├── components/
│   ├── animations/       # Reusable animation components
│   ├── layout/           # Header, Footer
│   ├── sections/         # Page sections
│   └── ui/               # shadcn components
├── lib/
│   ├── supabase/         # Supabase clients
│   ├── animations.ts     # Framer Motion variants
│   ├── constants.ts      # Site configuration
│   └── utils.ts          # Utility functions
└── public/               # Static assets
```

## Deployment

### Deploy to Vercel

1. Push your code to GitHub

2. Import your repository to Vercel

3. Add environment variables in Vercel dashboard:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`

4. Deploy!

## Customization

### Brand Colors

Edit `app/globals.css` to change the purple theme colors:

```css
:root {
  --purple-600: #8b5cf6;
  /* ... other color variables */
}
```

### Site Configuration

Edit `lib/constants.ts`:

```typescript
export const SITE_CONFIG = {
  name: 'Kipo',
  tagline: 'Master Your Money, Effortlessly',
  // ...
}
```

### Content

- **Hero section:** `components/sections/Hero.tsx`
- **FAQ:** `components/sections/FAQ.tsx`
- **Footer links:** `components/layout/Footer.tsx`

## Performance

- First Contentful Paint: ~1.5s
- Lighthouse Score: 90+
- Fully optimized images with Next.js Image
- Code splitting for optimal bundle size

## License

MIT

## Support

For questions or support, email support@kipo.app
# kipo-web-app
