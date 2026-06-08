# 🎓 Smart CSE — Department Management Platform

A comprehensive academic management system for the **CSE Department**, built with **Next.js 16**. Students, teachers, and admins each get a dedicated portal to manage all department activities in one place.

---

## 🌐 Live URL

>[https://smart-cse-three.vercel.app](https://smart-cse-three.vercel.app)

---

## ✨ Features by Role

### 👨‍🎓 Student (`/dashboard`)
- View class schedules, results, and notices
- Submit assignments and track deadlines
- Access course materials and resources
- View attendance records
- Rate teachers and give feedback
- Download transcripts and reports (PDF)

### 👨‍🏫 Teacher (`/teacher`)
- Manage courses and class schedules
- Upload assignments and study materials
- Mark and manage student attendance
- Publish results and grades
- View student feedback and ratings
- Post notices and announcements

### 🛡️ Admin (`/admin`)
- Manage all students and teacher accounts
- Oversee department-wide schedules and events
- Monitor and publish results
- Handle notices and announcements
- View analytics and department statistics
- Upload and manage gallery/media via Cloudinary

---

## 🔐 Role-Based Access Control

Access is enforced at the middleware level using **NextAuth.js**:

| Role | Home Route | Access |
|---|---|---|
| `student` | `/dashboard` | Student portal only |
| `teacher` | `/teacher` | Teacher portal only |
| `admin` | `/admin` | Admin panel only |

Unauthenticated users are redirected to `/login`. Authenticated users are redirected to their role-specific home if they attempt to access an unauthorized route.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 + tailwind-merge |
| UI Components | shadcn/ui (Radix UI primitives) |
| Auth | NextAuth.js |
| Forms | React Hook Form + Zod |
| Data Fetching | Axios (with auto sign-out on 401/403) |
| Charts | Recharts |
| Animations | Framer Motion |
| File Storage | Cloudinary + next-cloudinary |
| PDF Export | jsPDF + jsPDF-AutoTable |
| Email | EmailJS |
| Date Handling | date-fns, react-day-picker |
| Notifications | React Hot Toast, Sonner, SweetAlert2 |
| Ratings | react-simple-star-rating |
| Analytics | Vercel Analytics |
| Theme | next-themes (dark/light mode) |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18+
- **npm** / yarn / pnpm

### Installation

```bash
git clone https://github.com/your-username/smart-cse.git
cd smart-cse
npm install
```

### Environment Variables

Create a `.env.local` file in the project root:

```env
# App
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret

# Backend API
NEXT_PUBLIC_API_URL=https://your-backend-api.com/api/v1

# Cloudinary
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# EmailJS
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

> ⚠️ **Never commit `.env.local` to version control.**

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
smart-cse/
├── app/
│   ├── (auth)/               # Login, register pages
│   ├── admin/                # Admin panel (protected)
│   ├── teacher/              # Teacher portal (protected)
│   ├── dashboard/            # Student dashboard (protected)
│   └── api/                  # Next.js API routes
├── components/
│   ├── ui/                   # shadcn/ui base components
│   └── ...                   # Shared feature components
├── lib/
│   ├── axiosInstance.ts      # Axios with auto sign-out interceptor
│   └── utils.ts              # Utility functions
├── middleware.ts              # Role-based route protection
├── types/                    # TypeScript type definitions
└── public/                   # Static assets
```

---

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

---

## 🔌 API Integration

All API calls go through a shared **Axios instance** (`lib/axiosInstance.ts`) that:

- Points to `NEXT_PUBLIC_API_URL` as the base URL
- Automatically calls `signOut()` and redirects to `/login` on any `401` or `403` response

---

## 🚢 Deployment

### Deploy on Vercel (Recommended)

1. Push your repository to GitHub
2. Import the project on [Vercel](https://vercel.com/new)
3. Add all environment variables in the Vercel dashboard
4. Deploy

---

## 🔐 Security Notes

- All protected routes (`/admin`, `/teacher`, `/dashboard`) are guarded by `middleware.ts`
- Role mismatch redirects users to their correct home route — no unauthorized access
- Expired or invalid sessions auto-sign-out via the Axios interceptor
- Keep `NEXTAUTH_SECRET` long, random, and never committed to git

---

## 📄 License

This project is private and proprietary. All rights reserved.

---

> Built for the **CSE Department** · Powered by [Next.js](https://nextjs.org)
