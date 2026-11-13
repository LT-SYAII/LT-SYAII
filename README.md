<div align="center">

# Hi, I'm Syaiful Rohman 👋

<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPrUax5ak4ulsFEE8HWGpCFHU3KDMLocY_q3FAkglDCA&s=10" width="220" alt="Anime illustration">

**Full Stack Developer & System Architect** dari Indonesia.  
Biasa dipanggil **Bang Syaii**.

[![Telegram](https://img.shields.io/badge/Telegram-@bang__syaii-26A5E4?style=flat&logo=telegram&logoColor=white)](https://t.me/bang_syaii)
[![Website](https://img.shields.io/badge/Portfolio-bang.syaii.sbs-EB8E05?style=flat&logo=firefox-browser&logoColor=white)](https://bang.syaii.sbs)
[![GitHub](https://img.shields.io/badge/GitHub-LT--SYAII-181717?style=flat&logo=github&logoColor=white)](https://github.com/LT-SYAII)

</div>

---

## Tentang Saya

Halo! Saya Syaiful, seorang developer yang suka membangun produk web dari ujung ke ujung — mulai dari tampilan yang cepat dan rapi, API yang solid, sampai deployment di server sendiri.

Saya sudah ngoding lebih dari 3 tahun, dan belakangan ini banyak fokus membantu **UMKM dan personal brand** punya website yang cepat, SEO-friendly, dan mudah dikelola. Di luar web, saya juga sering ngulik backend service, otomasi, dan bot WhatsApp.

- 🔭 **Saat ini fokus:** website bisnis UMKM, backend/API, dan otomasi.
- ⚡ **Framework favorit:** Astro — simpel, cepat, dan pas untuk banyak kebutuhan.
- 🛠️ **Suka ngerjain:** web apps, dashboard, REST API, WhatsApp bot, sampai setup VPS.
- 🌱 **Selalu eksplor:** bahasa dan tools baru (belakangan sempat main-main dengan Go, Kotlin, Flutter, dan Zig).
- 💬 **Terbuka untuk:** proyek freelance, kolaborasi, atau sekadar ngobrol soal tech.

## `$ cat about.ts`

<table>
<tr>
<td width="240" align="center"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU5uQi10KpXGl8VTMStG_aCzqyGgOQ5bdB8q4r79Oasg&s=10" width="220" alt="Anime illustration"></td>
<td>

```typescript
const syaii = {
  name: "Syaiful Rohman",
  alias: "Bang Syaii",
  roles: ["Full Stack Developer", "System Architect"],
  location: "Indonesia",
  experience: "3+ years",
  freelance: { focus: "UMKM websites", open: true },
  favorite: "Astro",
  interests: ["Web performance", "Clean APIs", "Automation", "Self-hosting"],
  stack: {
    frontend: ["Astro", "React", "Next.js", "Svelte", "Tailwind CSS"],
    backend: ["Node.js", "NestJS", "Bun"],
    database: ["PostgreSQL", "MongoDB", "Prisma"],
    infra: ["Linux VPS", "PM2", "Cloudflare"],
    also: ["Go", "Kotlin", "Dart/Flutter", "Zig", "Baileys"],
  },
} as const;
```

</td>
</tr>
</table>

## `$ ls ~/stack`

**frontend/**

![Astro](https://img.shields.io/badge/Astro-BC52EE?style=for-the-badge&logo=astro&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![Svelte](https://img.shields.io/badge/Svelte-FF3E00?style=for-the-badge&logo=svelte&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

**backend/**

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)
![Bun](https://img.shields.io/badge/Bun-000000?style=for-the-badge&logo=bun&logoColor=white)

**database/**

![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)

**infra/**

![Linux](https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black)
![PM2](https://img.shields.io/badge/PM2-2B037A?style=for-the-badge&logo=pm2&logoColor=white)
![Cloudflare](https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)

**lainnya**

![Go](https://img.shields.io/badge/Go-00ADD8?style=for-the-badge&logo=go&logoColor=white)
![Kotlin](https://img.shields.io/badge/Kotlin-7F52FF?style=for-the-badge&logo=kotlin&logoColor=white)
![Flutter](https://img.shields.io/badge/Flutter-02569B?style=for-the-badge&logo=flutter&logoColor=white)
![Dart](https://img.shields.io/badge/Dart-0175C2?style=for-the-badge&logo=dart&logoColor=white)
![Zig](https://img.shields.io/badge/Zig-F7A41D?style=for-the-badge&logo=zig&logoColor=white)

## `$ how-i-build --typical`

Biasanya begini cara saya merangkai sebuah project, dari browser sampai server:

```mermaid
flowchart LR
  U([Visitor]) --> CF[Cloudflare]
  CF --> VPS[Linux VPS]
  VPS --> FE["Frontend<br/>Astro / Next.js / Svelte"]
  VPS --> API["API<br/>NestJS / Node.js / Bun"]
  VPS --> BOT["WhatsApp Bot<br/>Baileys + TypeScript"]
  FE --> API
  API --> ORM[Prisma]
  BOT --> ORM
  ORM --> DB[("PostgreSQL / MongoDB")]
  PM2{{PM2}} -. manages .-> API
  PM2 -. manages .-> FE
  PM2 -. manages .-> BOT
```

## `$ cat services.txt`

Hal-hal yang biasa saya kerjakan:

| Service | Details |
| --- | --- |
| Website bisnis | Website cepat & SEO-friendly untuk UMKM dan personal brand |
| Backend & API | REST API dengan Node.js, NestJS, dan Prisma |
| Dashboard | Admin panel dan internal tools |
| WhatsApp bot | Bot custom dengan Baileys — command, automation, integrasi |
| Server setup | Konfigurasi VPS, deployment, dan process management |

<div align="center">

<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcH1jEFR_5wF-f1qJYcdllJi0_bjgt6ylaVkSvDNHldA&s=10" width="260" alt="Anime illustration">

</div>

## `$ ./contact.sh`

Punya ide project atau butuh diskusi? Feel free to reach out.

```bash
telegram="t.me/bang_syaii"
github="github.com/LT-SYAII"
website="bang.syaii.sbs"
```

<div align="center">

<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu4pxPcC4wjZxz1lTB4humHmtJ6HHx4e_Ia10VLSMnXA&s=10" width="240" alt="Anime illustration">

```bash
syaii@bang:~$ echo "Got a project in mind? Let's build it."
```

</div>
