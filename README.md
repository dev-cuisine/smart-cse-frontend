# 🎓 Smart CSE — Department Management Platform

A comprehensive academic management system for the **CSE Department**, built with **Next.js 16**. Students, teachers, and admins each get a dedicated portal to manage all department activities in one place.

---

## 📋 Description

Smart CSE is a full-stack academic management platform for the CSE department. It provides role-based portals for students, teachers, and admins — covering everything from attendance and results to class schedules, notices, and analytics. Access is enforced at the middleware level using NextAuth.js.

---

## ✨ Features

### 👨‍🎓 Student

- View class schedules, results, and notices
- View attendance records and track progress
- Rate teachers and give course feedback
- Download transcripts and reports (PDF)

### 👨‍🏫 Teacher

- Manage courses and class schedules
- Mark and manage student attendance
- Publish results and grades
- Post notices and announcements

### 🛡️ Admin

- Manage all student and teacher accounts
- Oversee department-wide schedules and events
- Monitor and publish results
- View analytics and department statistics
- Upload and manage media via Cloudinary

---

## 🌐 Live URL

> [https://smart-cse-three.vercel.app](https://smart-cse-three.vercel.app)

---

## 🔑 Credentials

| Role    | Email                  | Password |
| ------- | ---------------------- | -------- |
| Student | `student@smartcse.com` | `123456` |
| Teacher | `teacher@smartcse.com` | `123456` |
| Admin   | `admin@smartcse.com`   | `123456` |

> Update with your real credentials before sharing.

---

## 🚀 Installation & Setup

### Prerequisites

- **Node.js** v18+
- **npm** / yarn / pnpm

### Steps

```bash
git clone https://github.com/imamhossenbu/smart-cse.git
cd smart-cse
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔐 Environment Variables

Create a `.env.local` file in the project root:

```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret

NEXT_PUBLIC_API_URL=https://smart-cse-server-eta.vercel.app

NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

> ⚠️ **Never commit `.env.local` to version control.**

---

## 🛠️ Tech Stack

| Layer         | Technology                           |
| ------------- | ------------------------------------ |
| Framework     | Next.js 16 (App Router)              |
| Language      | TypeScript                           |
| Styling       | Tailwind CSS v4 + tailwind-merge     |
| UI Components | shadcn/ui (Radix UI primitives)      |
| Auth          | NextAuth.js                          |
| Forms         | React Hook Form + Zod                |
| Data Fetching | Axios (auto sign-out on 401/403)     |
| Charts        | Recharts                             |
| Animations    | Framer Motion                        |
| File Storage  | Cloudinary + next-cloudinary         |
| PDF Export    | jsPDF + jsPDF-AutoTable              |
| Email         | EmailJS                              |
| Date Handling | date-fns, react-day-picker           |
| Notifications | React Hot Toast, Sonner, SweetAlert2 |
| Ratings       | react-simple-star-rating             |
| Theme         | next-themes (dark/light mode)        |

---

## 📄 License

This project is private and proprietary. All rights reserved.

---

> Built for the **CSE Department** · Powered by [Next.js](https://nextjs.org)
