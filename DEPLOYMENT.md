# 🚀 FunnelForge Deployment Guide

## Quick Deploy to Vercel (5 Minutes)

### Step 1: Connect to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **"Add New Project"**
3. Import `itskiranbabu/funnelforge` from GitHub
4. Configure project:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./`
   - **Build Command**: `prisma generate && next build`
   - **Output Directory**: `.next`

### Step 2: Add Environment Variables

In Vercel project settings, add these environment variables:

#### Required Variables

```bash
# Database (Supabase)
DATABASE_URL=postgresql://postgres.cqmwwohnjwasjzigwpck:[YOUR-PASSWORD]@aws-0-us-east-1.pooler.supabase.com:6543/postgres?pgbouncer=true
DIRECT_URL=postgresql://postgres.cqmwwohnjwasjzigwpck:[YOUR-PASSWORD]@aws-0-us-east-1.pooler.supabase.com:5432/postgres

# NextAuth
NEXTAUTH_URL=https://your-app.vercel.app
NEXTAUTH_SECRET=your-generated-secret

# App Config
NEXT_PUBLIC_APP_URL=https://your-app.vercel.app

# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://cqmwwohnjwasjzigwpck.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNxbXd3b2huandhc2p6aWd3cGNrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUxMDc0MzUsImV4cCI6MjA4MDY4MzQzNX0.yOP_OtbRxJ8oektotuOJw6SZYpbh-V2WDnB-wezCrkM

# Integration Encryption
INTEGRATION_ENCRYPTION_KEY=funnelforge-secret-key-2024!!
```

#### Optional Variables (Add Later)

```bash
# Redis (Upstash)
REDIS_URL=redis://default:xxx@xxx.upstash.io:6379

# AWS S3 / Cloudflare R2
AWS_ACCESS_KEY_ID=your_key
AWS_SECRET_ACCESS_KEY=your_secret
AWS_REGION=auto
AWS_S3_BUCKET=funnelforge-media
AWS_ENDPOINT=https://xxx.r2.cloudflarestorage.com

# Stripe
STRIPE_SECRET_KEY=sk_live_xxx
STRIPE_WEBHOOK_SECRET=whsec_xxx
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_xxx

# OpenAI
OPENAI_API_KEY=sk-xxx

# Email
EMAIL_FROM=noreply@yourdomain.com
SENDGRID_API_KEY=SG.xxx
```

### Step 3: Deploy

Click **"Deploy"** and wait for build to complete.

### Step 4: Setup Database

After deployment, run migrations:

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Link project
vercel link

# Run migrations
vercel env pull .env.local
npx prisma migrate deploy
npx prisma db seed
```

### Step 5: Access Your App

Your app is now live at: `https://your-app.vercel.app`

**Demo Login:**
- Email: `demo@funnelforge.com`
- Password: `demo123`

---

## Setup Additional Services

### 1. Setup Redis (Upstash)

1. Go to [Upstash](https://upstash.com)
2. Create Redis database
3. Copy connection string
4. Add to Vercel environment variables:
   ```
   REDIS_URL=redis://default:xxx@xxx.upstash.io:6379
   ```

### 2. Setup Storage (Cloudflare R2)

1. Go to [Cloudflare R2](https://cloudflare.com/products/r2/)
2. Create bucket: `funnelforge-media`
3. Create API token
4. Add to Vercel:
   ```
   AWS_ACCESS_KEY_ID=your_key
   AWS_SECRET_ACCESS_KEY=your_secret
   AWS_REGION=auto
   AWS_S3_BUCKET=funnelforge-media
   AWS_ENDPOINT=https://xxx.r2.cloudflarestorage.com
   ```

### 3. Setup Stripe

1. Go to [Stripe Dashboard](https://dashboard.stripe.com)
2. Get API keys
3. Setup webhook: `https://your-app.vercel.app/api/webhooks/stripe`
4. Add to Vercel:
   ```
   STRIPE_SECRET_KEY=sk_live_xxx
   STRIPE_WEBHOOK_SECRET=whsec_xxx
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_xxx
   ```

### 4. Setup OpenAI

1. Go to [OpenAI Platform](https://platform.openai.com)
2. Create API key
3. Add to Vercel:
   ```
   OPENAI_API_KEY=sk-xxx
   ```

---

## Automated Deployment

Every push to `main` branch automatically deploys to Vercel.

### Setup GitHub Actions (Optional)

1. Get Vercel token: https://vercel.com/account/tokens
2. Add GitHub secrets:
   - `VERCEL_TOKEN`
   - `VERCEL_ORG_ID`
   - `VERCEL_PROJECT_ID`
   - `DATABASE_URL`
   - `DIRECT_URL`

---

## Custom Domain

1. Go to Vercel project → Settings → Domains
2. Add your domain
3. Update DNS records
4. Update environment variables:
   ```
   NEXTAUTH_URL=https://yourdomain.com
   NEXT_PUBLIC_APP_URL=https://yourdomain.com
   ```

---

## Monitoring

- **Vercel Analytics**: Automatically enabled
- **Error Tracking**: Add Sentry
- **Uptime Monitoring**: Use Better Uptime

---

## Troubleshooting

### Build Fails

```bash
# Check build logs in Vercel dashboard
# Common issues:
# 1. Missing environment variables
# 2. Database connection issues
# 3. Prisma generation errors
```

### Database Connection Issues

```bash
# Verify connection string
# Check Supabase dashboard for connection pooling settings
# Ensure DIRECT_URL is set for migrations
```

### Deployment Not Updating

```bash
# Force redeploy
vercel --prod --force
```

---

## Support

- GitHub Issues: https://github.com/itskiranbabu/funnelforge/issues
- Email: support@funnelforge.com

---

**🎉 Congratulations! Your SaaS is now live!**