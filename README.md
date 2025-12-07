# 🚀 FunnelForge - Production-Ready SaaS Platform

A complete multi-tenant SaaS platform for building high-converting funnels, hosting courses, and growing online businesses.

## ✨ Features

- **Visual Page Builder**: Drag-and-drop editor with pre-built blocks
- **Funnel Management**: Create multi-step funnels with upsells/downsells
- **Checkout System**: Integrated payments with Stripe & Razorpay
- **LMS Platform**: Host courses with drip content, quizzes, and certificates
- **AI Content Generation**: Generate pages, emails, and marketing copy
- **Analytics Dashboard**: Track conversions, revenue, and performance
- **Growth Tools**: Social proof, countdown timers, exit-intent popups
- **Integrations**: Webhooks, email providers, payment gateways
- **Multi-tenancy**: Workspace-based isolation with RBAC

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, tRPC
- **Database**: PostgreSQL (Supabase) with Prisma ORM
- **Cache**: Redis (Upstash)
- **Storage**: AWS S3 / Cloudflare R2
- **Auth**: NextAuth.js
- **Payments**: Stripe, Razorpay
- **AI**: OpenAI GPT-4

## 📋 Prerequisites

- Node.js 20+
- PostgreSQL (Supabase account)
- Redis (Upstash account)
- AWS S3 or Cloudflare R2
- Stripe account
- OpenAI API key

## 🚀 Quick Start

### 1. Clone Repository

```bash
git clone https://github.com/itskiranbabu/funnelforge.git
cd funnelforge
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment

```bash
cp .env.example .env.local
```

Edit `.env.local` with your credentials.

### 4. Setup Database

```bash
# Push schema to database
npx prisma db push

# Seed database with demo data
npx prisma db seed
```

### 5. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:3000`

**Demo Login:**
- Email: `demo@funnelforge.com`
- Password: `demo123`

## 📦 Deployment

### Deploy to Vercel

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Deploy to VPS

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

## 🔐 Environment Variables

See `.env.example` for all required environment variables.

## 📚 Documentation

- [API Documentation](./docs/API.md)
- [Deployment Guide](./docs/DEPLOYMENT.md)
- [Contributing Guide](./CONTRIBUTING.md)

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guide](./CONTRIBUTING.md).

## 📄 License

MIT License - see [LICENSE](./LICENSE) for details.

## 🆘 Support

- Email: support@funnelforge.com
- Documentation: [docs.funnelforge.com](https://docs.funnelforge.com)

## 🎯 Roadmap

- [ ] A/B testing for pages and funnels
- [ ] Advanced email automation
- [ ] Mobile app (React Native)
- [ ] White-label options
- [ ] Affiliate management system

---

Built with ❤️ by [Kiran Babu](https://github.com/itskiranbabu)