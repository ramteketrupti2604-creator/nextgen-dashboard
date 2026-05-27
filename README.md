# 🚀 Next-Gen Learning Dashboard

A futuristic student learning dashboard built using Next.js App Router, Supabase, Tailwind CSS, and Framer Motion.

This project was developed as part of a Frontend Intern Challenge focused on modern UI architecture, server-rendered data fetching, smooth animations, responsive Bento Grid layouts, and performance-focused frontend engineering.

---

# ✨ Features

- ✅ Next.js App Router architecture
- ✅ Supabase PostgreSQL integration
- ✅ Server Component data fetching
- ✅ Bento Grid dashboard layout
- ✅ Framer Motion animations
- ✅ Animated course progress bars
- ✅ Responsive sidebar + mobile navigation
- ✅ Loading skeletons
- ✅ Hover glow effects
- ✅ Dark futuristic UI
- ✅ TypeScript interfaces
- ✅ Error handling for Supabase fetch failures
- ✅ Dynamic Lucide React icons
- ✅ Mobile responsive design
- ✅ Smooth staggered animations

---

# 🛠 Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Supabase
- Tailwind CSS
- Framer Motion
- Lucide React Icons

---

# 📁 Project Structure

```bash
app/
 ├── dashboard/
 │    ├── page.tsx
 │    ├── loading.tsx
 │    ├── error.tsx
 │
 ├── components/
 │    ├── dashboard/
 │    │     ├── dashboard-content.tsx
 │    │     ├── hero-tile.tsx
 │    │     ├── activity-tile.tsx
 │    │     └── course-card.tsx
 │    │
 │    └── sidebar/
 │          ├── sidebar.tsx
 │          └── mobile-navbar.tsx
 │
 ├── lib/
 │    └── supabase.ts
 │
 └── types/
      └── course.ts
```

---

# 🧠 Architecture Decisions

## Server + Client Component Split

The dashboard follows a hybrid architecture using both Server Components and Client Components.

---

## ✅ Server Components

Used for:

- Secure Supabase data fetching
- Faster initial render
- Reduced client-side bundle size
- Better performance and SEO

Example:

```tsx
app/dashboard/page.tsx
```

This component fetches course data directly from Supabase on the server.

---

## ✅ Client Components

Used for:

- Framer Motion animations
- Hover interactions
- Layout transitions
- Progress bar animations
- Sidebar micro-interactions

Examples:

```tsx
dashboard-content.tsx
course-card.tsx
sidebar.tsx
```

This separation ensures proper Next.js architecture while avoiding Framer Motion rendering issues inside Server Components.

---

# 🗄 Supabase Setup

## Courses Table Schema

```sql
create table courses (
  id uuid primary key default gen_random_uuid(),
  title text,
  progress integer,
  icon_name text,
  created_at timestamp default now()
);
```

---

## Seed Data

```sql
insert into courses (title, progress, icon_name)
values
('Advanced React Patterns', 75, 'Code2'),
('Next.js Mastery', 60, 'Globe'),
('TypeScript Pro', 90, 'FileCode'),
('Framer Motion UI', 40, 'Sparkles');
```

---

# 🔐 Row Level Security (RLS)

Enabled public read access for demo purposes.

```sql
ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access"
ON public.courses
FOR SELECT
TO anon
USING (true);
```

---

# ⚡ Animations

Implemented using Framer Motion.

## Included Animations

- Staggered Bento Grid entrance animations
- Spring-based hover interactions
- Animated progress bars
- Sidebar active indicator using `layoutId`
- Smooth scale and glow hover effects

---

# 🎨 UI Design

- Dark futuristic theme
- Bento Grid layout
- Gradient glow accents
- Hardware-accelerated animations
- Minimal and premium SaaS-style design

---

# 📱 Responsive Design

## Desktop (>1024px)

- Full sidebar visible
- 3-column Bento Grid layout

## Tablet (768px - 1024px)

- Compact sidebar with icons
- 2-column Bento layout

## Mobile (<768px)

- Bottom navigation bar
- Single-column stacked layout

---

# ⌛ Loading States

Implemented using:

```tsx
app/dashboard/loading.tsx
```

Includes:

- Animated skeleton cards
- Pulsing placeholders
- Sidebar skeletons

---

# 🚨 Error Handling

Graceful fallback UI is shown if Supabase fetch fails.

Example:

```tsx
if (error) {
  return <p>Failed to load courses</p>
}
```

---

# 🎯 Performance Considerations

- Used only `transform` and `opacity` animations
- Avoided layout shifts
- Server-side data fetching
- Modular reusable components
- Reduced unnecessary client-side rendering
- Optimized animation performance using Framer Motion spring physics

---

# ⚙️ Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

---

# 📦 Installation

```bash
npm install
npm run dev
```

---

# 🚀 Deployment

Deployed using:

- Vercel
- Supabase

---

# 🧩 Challenges Faced

## 1. Framer Motion inside Server Components

Initially encountered rendering issues because motion components cannot run inside Server Components.

### Solution

Separated animation logic into dedicated Client Components.

---

## 2. Supabase RLS Permissions

Encountered database permission issues while fetching course data.

### Solution

Enabled Row Level Security and added public SELECT policies.

---

## 3. Dynamic Icon Rendering

Handled dynamic Lucide icons safely using a typed icon mapping system.

---

# 🏆 Final Outcome

The final dashboard delivers:

- Modern SaaS-style UI
- Smooth user interactions
- High-performance animations
- Secure server-rendered Supabase integration
- Fully responsive experience
- Modular scalable architecture

---

# 👨‍💻 Author

Built by Trupti Ramteke

---

# 🔗 Submission Links

## GitHub Repository

https://github.com/ramteketrupti2604-creator/nextgen-dashboard
```

## Live Deployment

https://nextgen-dashboard-fj5z.vercel.app/dashboard