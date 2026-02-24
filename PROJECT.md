# United Refuah HealthShare - Website Rebuild Project

## Client
**United Refuah HealthShare**
- Jewish health sharing ministry based in Cleveland, OH
- Founded 2018 by Cleveland Jewish community business leaders
- Torah-aligned alternative to health insurance
- Website: https://unitedrefuahhs.org
- Phone: (440) 772-0700

## Project Scope

### Phase 1: Website Redesign ✅ COMPLETE
- Modern, premium homepage design
- Hero section with stats
- How It Works (4-step explainer)
- Compare & Save table (vs traditional insurance)
- Pricing cards (Individual $175, Couple $395, Family $495)
- About section with team photos
- Testimonials
- FAQ accordion
- CTA section
- Full footer with sitemap

### Phase 2: Application System ✅ COMPLETE
- 9-step application wizard
  1. Plan Selection
  2. Personal Information
  3. Address
  4. Health Information
  5. Spouse (for couple/family)
  6. Dependents (for family)
  7. Additional Info
  8. Agreement & E-Signature
  9. Review & Submit
- AI Analysis Engine
  - Scores applications 0-100
  - Flags: info, warning, critical
  - Checks: age, BMI, tobacco, pre-existing conditions, medications
  - Auto-assigns: APPROVED / NEEDS_REVIEW / DENIED
- Admin Dashboard
  - Stats overview
  - Filter by status
  - Quick approve/deny
  - Detailed application view with AI analysis
  - Review notes & timeline

### Phase 3: Member Portal PWA ✅ MOCKUP COMPLETE
- **Home Dashboard**
  - Digital member ID card
  - PreShare progress tracker
  - Quick actions (Submit Claim, TeleRefuah, Documents, Help)
  - Recent activity feed
- **Claims/Sharing Requests**
  - Status filters
  - Claim cards with provider, amount, your cost
- **Submit Claim**
  - 3-step wizard
  - File upload
  - Service type selection
- **AI Chat Assistant**
  - Suggested questions
  - Answers about PreShare, claims, guidelines
- **Profile**
  - Member info
  - Plan details
  - Settings menu

## Tech Stack
- **Framework**: Next.js 16 + TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Database**: SQLite (better-sqlite3) - upgrade to Postgres for production
- **State**: Zustand (application form)
- **AI**: Custom rules engine (upgrade to Azure OpenAI for chat)

## File Structure
```
united-refuah/
├── src/
│   ├── app/
│   │   ├── page.tsx           # Homepage
│   │   ├── apply/             # Application wizard
│   │   ├── admin/             # Admin dashboard
│   │   └── member/            # Member portal PWA
│   ├── components/
│   │   ├── ui/                # shadcn components
│   │   ├── apply/             # Application step components
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Pricing.tsx
│   │   ├── Comparison.tsx
│   │   ├── About.tsx
│   │   ├── Testimonials.tsx
│   │   ├── FAQ.tsx
│   │   ├── CTA.tsx
│   │   └── Footer.tsx
│   └── lib/
│       ├── db.ts              # Database operations
│       ├── aiAnalysis.ts      # AI scoring logic
│       ├── applicationStore.ts # Zustand store
│       └── utils.ts
├── public/
│   └── images/                # Scraped client images
├── prisma/                    # (removed, using better-sqlite3)
└── PROJECT.md                 # This file
```

## Pricing Estimate

### Delivered (Phase 1-3 Mockups)
| Component | Estimate |
|-----------|----------|
| Website Redesign | $8,000 - $12,000 |
| Application System + AI | $8,000 - $12,000 |
| Member Portal PWA | $10,000 - $15,000 |
| **Total** | **$26,000 - $39,000** |

### Production-Ready Additions
| Component | Estimate |
|-----------|----------|
| Authentication (Clerk/Auth0) | $3,000 - $5,000 |
| Email notifications | $2,000 - $3,000 |
| Payment integration (Stripe) | $3,000 - $5,000 |
| Production database (Postgres) | $2,000 - $3,000 |
| AI Chat (Azure OpenAI + RAG) | $5,000 - $8,000 |
| Security hardening | $3,000 - $5,000 |
| **Additional Total** | **$18,000 - $29,000** |

### Full Project Total: $44,000 - $68,000

## HIPAA Considerations
- Health sharing ministries are NOT covered entities under HIPAA
- However, best practice is to treat member health data securely
- Recommended: "HIPAA-ready" security without full compliance overhead
- Use encryption, MFA, audit logs

## Key URLs (Development)
- Homepage: http://localhost:3000
- Apply: http://localhost:3000/apply
- Admin: http://localhost:3000/admin
- Member Portal: http://localhost:3000/member

## Preview Links
Use cloudflared for sharing:
```bash
/opt/homebrew/opt/cloudflared/bin/cloudflared tunnel --url http://localhost:3000
```

## API Integration Options

### Option 1: Direct Integration (Simpler)
- Developer hardcodes API connections
- API keys in environment variables
- Cost: +$3-5K
- Best for: Stable systems that won't change

### Option 2: Super Admin API Dashboard (Recommended)
- Admin UI for configuring 5-7 APIs
- Encrypted credential storage
- Field mapping interface
- Connection testing
- No code changes when swapping vendors

**Expected APIs (5-7):**
1. Member Database - member info, plan details
2. Claims/Sharing System - submit & track claims
3. Payment Processor - Stripe/billing
4. Telemedicine - TeleRefuah integration
5. Document Storage - tax forms, ID cards
6. Email Service - SendGrid/notifications
7. Phone/SMS - Twilio for alerts

**Cost for API Dashboard: +$10,000 - $15,000**

---

## Final Pricing Options

### Option A: Essentials Package - $35,000 - $45,000
- Website redesign (all sections)
- 9-step application wizard
- AI analysis engine
- Admin dashboard
- Member portal PWA
- Basic auth (login/password)
- Standard security
- Deployment

**Timeline: 6-8 weeks**

### Option B: Full Production Package - $55,000 - $70,000
Everything in Option A, PLUS:
- AI Chat assistant (real AI)
- Email notifications
- Payment integration (Stripe)
- Multi-factor auth
- API Configuration Dashboard (5-7 APIs)
- Training & documentation
- 90-day support

**Timeline: 10-12 weeks**

### Ongoing (Optional)
- Hosting & maintenance: $500-1,000/mo
- Feature updates: $150/hr as needed

---

## HIPAA / Security Notes

**Health sharing ministries are NOT covered entities under HIPAA**

What's NOT PHI:
- Plan benefits, copays, deductibles (generic plan info)

What IS health-related (but not legally PHI for health shares):
- Individual claims with provider names + services
- Member spending/usage data

**Recommendation:** Standard web security (not full HIPAA compliance)
- HTTPS encryption ✅
- Login required ✅
- Password hashing ✅
- Session timeouts ✅
- Secure cookies ✅

Cost difference:
- Standard security: +$3-5K
- Full HIPAA compliance: +$15-25K (not recommended)

---

## Preview Links

**Use cloudflared for sharing:**
```bash
/opt/homebrew/opt/cloudflared/bin/cloudflared tunnel --url http://localhost:3000
```

**Recent preview URLs generated:**
- `https://partnerships-suppose-thehun-sugar.trycloudflare.com`
- `https://indiana-ict-brown-sides.trycloudflare.com`
- `https://choose-stopping-bizarre-situation.trycloudflare.com`

(Note: These are temporary URLs, regenerate as needed)

**Pages to demo:**
- `/` - Homepage
- `/apply` - Application wizard
- `/admin` - Admin dashboard
- `/member` - Member portal home
- `/member/claims` - Claims list
- `/member/chat` - AI chat assistant
- `/member/profile` - Profile settings

---

## Next Steps
1. Client review of mockups
2. Gather feedback on design/features
3. Discuss production requirements
4. Get access to their existing member data API
5. Finalize scope and pricing
6. Begin production build

## Questions to Ask Client
1. What system stores your member data? (Software name)
2. Does it have an API? (Or CSV exports?)
3. What about claims/sharing requests? (Same or different system?)
4. Who manages this currently? (In-house IT? Vendor?)
5. How many separate systems/APIs total?

## Assets Downloaded
From their current site:
- UnitedRefuahLogo.svg
- UnitedRefuahLogoHands-2.svg
- Team headshots (6)
- Family/healthcare images (15+)

## Created
- **Date**: February 23, 2026
- **Developer**: Ted (AI Web Developer)
- **Client Contact**: Chris Guiher
