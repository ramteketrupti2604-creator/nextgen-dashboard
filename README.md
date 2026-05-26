# README.md

````md
# 🚀 Next-Gen Learning Dashboard

A futuristic student learning dashboard built with Next.js App Router, Supabase, Tailwind CSS, and Framer Motion.

This project was developed as part of a frontend intern challenge focused on modern UI architecture, server-rendered data fetching, smooth animations, and responsive Bento Grid layouts.

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
 │    └── loading.tsx
 │
 ├── components/
 │    ├── dashboard/
 │    │     ├── dashboard-content.tsx
 │    │     ├── hero-tile.tsx
 │    │     ├── activity-tile.tsx
 │    │     └── course-card.tsx
 │    │
 │    └── sidebar/
 │          └── sidebar.tsx
 │
 ├── lib/
 │    └── supabase.ts
 │
 └── types/
      └── course.ts
````

---

# 🧠 Architecture Decisions

## Server + Client Component Split

The dashboard follows a hybrid architecture using both:

### Server Components

Used for:

* Secure Supabase data fetching
* Faster initial render
* Reduced client bundle size

Example:

```tsx
app/dashboard/page.tsx
```

This component fetches course data directly from Supabase on the server.

---

### Client Components

Used for:

* Framer Motion animations
* Hover interactions
* Layout animations
* Progress bar animations

Example:

```tsx
dashboard-content.tsx
course-card.tsx
sidebar.tsx
```

This split ensures proper Next.js architecture and avoids rendering issues with Framer Motion inside Server Components.

---

# 🗄 Supabase Setup

## Table Schema

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

## Seed Data Example

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

* Staggered Bento Grid entrance
* Spring hover animations
* Animated progress bars
* Sidebar active indicator using `layoutId`
* Smooth scale + glow hover effects

---

# 📱 Responsive Design

## Desktop

* Full sidebar
* 3-column Bento Grid

## Tablet

* Compact sidebar with icons only
* 2-column layout

## Mobile

* Bottom navigation bar
* Single-column stacked layout

---

# ⌛ Loading States

Implemented using:

```tsx
app/dashboard/loading.tsx
```

Includes:

* Animated skeleton cards
* Pulsing placeholders
* Sidebar skeletons

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

* Used only `transform` and `opacity` animations
* Avoided layout shifts
* Server-side data fetching
* Modular reusable components
* Minimal client-side JavaScript

---

# ⚙️ Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=https://zphkgcvoidilorsvsjrh.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpwaGtnY3ZvaWRpbG9yc3ZzanJoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk2MjcyNDQsImV4cCI6MjA5NTIwMzI0NH0.UOGDWaUs2UxfeWnLwn-Zs7ZhVrvMzY9srpIfN__ubCE
```

---

# 📦 Installation

```bash
npm install
npm run dev
```

---

# 🚀 Deployment

Deploy easily using:

* Vercel
* Supabase

---

# 🧩 Challenges Faced

## 1. Framer Motion in Server Components

Initially, Framer Motion caused runtime errors because motion components cannot run inside Server Components.

### Solution

Moved animations into separate Client Components.

---

## 2. Supabase RLS Permissions

Encountered:

```bash
permission denied for table courses
```

### Solution

Added RLS policy and granted SELECT access.

---

## 3. Dynamic Icon Rendering

Handled dynamic Lucide icons safely using a typed icon map.

---

# 🏆 Final Outcome

The final dashboard delivers:

* Modern SaaS-style UI
* Smooth interactions
* High-performance animations
* Secure server-rendered Supabase integration
* Fully responsive experience

---

# 👨‍💻 Author

Built by Trupti Ramteke

```
```
