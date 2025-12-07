# ⚡ FunnelForge Quick Start Guide

## 🎯 Goal: Get Your SaaS Live in 10 Minutes

### Prerequisites Checklist

- ✅ GitHub account (you have this!)
- ✅ Vercel account (free tier)
- ✅ Supabase account (you have this!)
- ⏳ Vercel Project ID: `PJFs6rWrsq1W5pTclXH1RYsS`

---

## Step 1: Get Supabase Database Password

1. Go to your Supabase project: https://supabase.com/dashboard/project/cqmwwohnjwasjzigwpck
2. Click **Settings** → **Database**
3. Find your database password (or reset it)
4. Copy the **Connection String** (URI format)

It should look like:
```
postgresql://postgres.cqmwwohnjwasjzigwpck:[YOUR-PASSWORD]@aws-0-us-east-1.pooler.supabase.com:6543/postgres
```

---

## Step 2: Generate NextAuth Secret

Run this command in your terminal:

```bash
openssl rand -base64 32
```

Copy the output (you'll need it for Vercel).

---

## Step 3: Deploy to Vercel

### Option A: One-Click Deploy (Easiest)

1. Click this button:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/itskiranbabu/funnelforge)

2. Connect your GitHub account
3. Add environment variables (see below)
4. Click **Deploy**

### Option B: Manual Deploy

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **"Add New Project"**
3. Import `itskiranbabu/funnelforge`
4. Add environment variables
5. Click **Deploy**

---

## Step 4: Add Environment Variables in Vercel

In Vercel project settings → Environment Variables, add:

### Minimum Required Variables (to get started)

```bash
# Database
DATABASE_URL
postgresql://postgres.cqmwwohnjwasjzigwpck:[YOUR-PASSWORD]@aws-0-us-east-1.pooler.supabase.com:6543/postgres?pgbouncer=true

DIRECT_URL
postgresql://postgres.cqmwwohnjwasjzigwpck:[YOUR-PASSWORD]@aws-0-us-east-1.pooler.supabase.com:5432/postgres

# NextAuth
NEXTAUTH_URL
https://your-project-name.vercel.app

NEXTAUTH_SECRET
[paste-your-generated-secret]

# App Config
NEXT_PUBLIC_APP_URL
https://your-project-name.vercel.app

# Supabase
NEXT_PUBLIC_SUPABASE_URL
https://cqmwwohnjwasjzigwpck.supabase.co

NEXT_PUBLIC_SUPABASE_ANON_KEY
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNxbXd3b2huandhc2p6aWd3cGNrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUxMDc0MzUsImV4cCI6MjA4MDY4MzQzNX0.yOP_OtbRxJ8oektotuOJw6SZYpbh-V2WDnB-wezCrkM

# Integration Encryption
INTEGRATION_ENCRYPTION_KEY
funnelforge-secret-key-2024!!
```

**Important:** Replace `[YOUR-PASSWORD]` with your actual Supabase password!

---

## Step 5: Setup Database Schema

After deployment completes:

### Option A: Using Vercel CLI (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Link to your project
vercel link

# Pull environment variables
vercel env pull .env.local

# Run database migrations
npx prisma migrate deploy

# Seed database with demo data
npx prisma db seed
```

### Option B: Using Supabase SQL Editor

1. Go to Supabase Dashboard → SQL Editor
2. Run the schema from `prisma/schema.prisma`
3. Create demo user manually

---

## Step 6: Access Your Live App! 🎉

Your app is now live at:
```
https://your-project-name.vercel.app
```

### Test Login

**Demo Account:**
- Email: `demo@funnelforge.com`
- Password: `demo123`

---

## Next Steps

### 1. Add More Services (Optional)

#### Redis (Upstash) - For Caching
1. Go to https://upstash.com
2. Create Redis database
3. Add `REDIS_URL` to Vercel

#### Stripe - For Payments
1. Go to https://stripe.com
2. Get API keys
3. Add Stripe variables to Vercel

#### OpenAI - For AI Features
1. Go to https://platform.openai.com
2. Create API key
3. Add `OPENAI_API_KEY` to Vercel

### 2. Custom Domain

1. Vercel → Settings → Domains
2. Add your domain
3. Update DNS records
4. Update `NEXTAUTH_URL` and `NEXT_PUBLIC_APP_URL`

### 3. Enable Features

As you add more environment variables, more features unlock:
- ✅ Basic app (working now!)
- ⏳ Redis caching (add REDIS_URL)
- ⏳ File uploads (add AWS S3 credentials)
- ⏳ Payments (add Stripe keys)
- ⏳ AI generation (add OpenAI key)
- ⏳ Email sending (add SendGrid key)

---

## Troubleshooting

### Build Failed?

**Check:**
1. All environment variables are set correctly
2. Database password is correct
3. No typos in connection strings

**Fix:**
```bash
# Redeploy
vercel --prod --force
```

### Can't Login?

**Check:**
1. Database migrations ran successfully
2. Demo user was seeded
3. `NEXTAUTH_URL` matches your Vercel URL

**Fix:**
```bash
# Re-run migrations
npx prisma migrate deploy
npx prisma db seed
```

### Database Connection Error?

**Check:**
1. Supabase project is active
2. Connection pooling is enabled
3. Both `DATABASE_URL` and `DIRECT_URL` are set

---

## Support

- 📖 Full Documentation: [DEPLOYMENT.md](./DEPLOYMENT.md)
- 🐛 Issues: https://github.com/itskiranbabu/funnelforge/issues
- 💬 Discussions: https://github.com/itskiranbabu/funnelforge/discussions

---

## Summary

✅ Repository created: `itskiranbabu/funnelforge`
✅ Code pushed to GitHub
✅ Ready for Vercel deployment
✅ Database schema ready
✅ Demo data included

**Total Time:** ~10 minutes
**Cost:** $0 (using free tiers)

---

**🚀 You're ready to launch your SaaS!**