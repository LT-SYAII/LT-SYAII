<div align="center">

# Syaiful Rohman

<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPrUax5ak4ulsFEE8HWGpCFHU3KDMLocY_q3FAkglDCA&s=10" width="220" alt="Anime illustration">

[![Telegram](https://img.shields.io/badge/Telegram-@bang__syaii-26A5E4?style=flat&logo=telegram&logoColor=white)](https://t.me/bang_syaii)
[![Website](https://img.shields.io/badge/Portfolio-bang.syaii.sbs-EB8E05?style=flat&logo=firefox-browser&logoColor=white)](https://bang.syaii.sbs)
[![GitHub](https://img.shields.io/badge/GitHub-LT--SYAII-181717?style=flat&logo=github&logoColor=white)](https://github.com/LT-SYAII)

```bash
syaii@bang:~$ whoami
> Full Stack Developer & System Architect — Indonesia
```

</div>

---

## `$ neofetch`

```
.-------------------.    syaii@bang
| $ bun run dev     |    ----------
|                   |    Name      : Syaiful Rohman (Bang Syaii)
| > ready           |    Role      : Full Stack Developer & System Architect
| > localhost:4321  |    Location  : Indonesia
|                   |    Uptime    : 3+ years coding
| $ _               |    Framework : Astro (go-to), React, Next.js, Svelte
'-------------------'    Styling   : Tailwind CSS
                         Language  : TypeScript, JavaScript
                         Backend   : Node.js, NestJS, Bun
                         Database  : PostgreSQL, MongoDB, Prisma
                         Infra     : Linux VPS, PM2, Cloudflare
                         Focus     : Web apps, APIs, WhatsApp bots
                         Status    : Freelance, open for UMKM website projects
                         Contact   : t.me/bang_syaii
```

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

**lainnya/**

![Go](https://img.shields.io/badge/Go-00ADD8?style=for-the-badge&logo=go&logoColor=white)
![Kotlin](https://img.shields.io/badge/Kotlin-7F52FF?style=for-the-badge&logo=kotlin&logoColor=white)
![Flutter](https://img.shields.io/badge/Flutter-02569B?style=for-the-badge&logo=flutter&logoColor=white)
![Dart](https://img.shields.io/badge/Dart-0175C2?style=for-the-badge&logo=dart&logoColor=white)
![Zig](https://img.shields.io/badge/Zig-F7A41D?style=for-the-badge&logo=zig&logoColor=white)

## `$ how-i-build --typical`

How a typical project fits together, from the browser down to the server:

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

## `$ cat code-samples/*`

A few snippets in the languages I write most. Open the ones you want to read.

<details>
<summary><b>Astro</b>: pages and components (my default for sites)</summary>

```astro
---
// src/pages/index.astro
import Layout from "../layouts/Layout.astro";
import ServiceCard from "../components/ServiceCard.astro";

const services = [
  { title: "Business Website", desc: "Fast and SEO-friendly" },
  { title: "Dashboard", desc: "Admin panels and internal tools" },
];
---

<Layout title="Studio">
  <section class="grid gap-6 md:grid-cols-2">
    {services.map((service) => <ServiceCard {...service} />)}
  </section>
</Layout>
```

</details>

<details>
<summary><b>TypeScript + NestJS</b>: controllers and DTOs</summary>

```typescript
@Controller("projects")
export class ProjectsController {
  constructor(private readonly projects: ProjectsService) {}

  @Get()
  findAll(@Query("take") take = "10") {
    return this.projects.findAll(Number(take));
  }

  @Post()
  create(@Body() dto: CreateProjectDto) {
    return this.projects.create(dto);
  }
}
```

</details>

<details>
<summary><b>TypeScript + Baileys</b>: WhatsApp bot command handler</summary>

```typescript
import makeWASocket, { useMultiFileAuthState } from "@whiskeysockets/baileys";

const { state, saveCreds } = await useMultiFileAuthState("session");
const sock = makeWASocket({ auth: state });

const commands = new Map<string, (jid: string, text: string) => Promise<void>>();
commands.set("ping", async (jid) => {
  await sock.sendMessage(jid, { text: "pong!" });
});

sock.ev.on("messages.upsert", async ({ messages }) => {
  for (const msg of messages) {
    const text = msg.message?.conversation ?? "";
    const jid = msg.key.remoteJid;
    if (!jid || !text.startsWith("!")) continue;

    const [cmd, ...args] = text.slice(1).trim().split(/\s+/);
    const handler = commands.get(cmd);
    if (handler) await handler(jid, args.join(" "));
  }
});

sock.ev.on("creds.update", saveCreds);
```

</details>

<details>
<summary><b>Prisma</b>: schema design</summary>

```prisma
model Client {
  id        String    @id @default(cuid())
  name      String
  projects  Project[]
  createdAt DateTime  @default(now())
}

model Project {
  id       String @id @default(cuid())
  title    String
  clientId String
  client   Client @relation(fields: [clientId], references: [id])
}
```

</details>

<details>
<summary><b>Svelte</b>: reactive components</summary>

```svelte
<script lang="ts">
  let count = $state(0);
  let doubled = $derived(count * 2);
</script>

<button onclick={() => count++}>
  Clicked {count} times (doubled: {doubled})
</button>
```

</details>

<details>
<summary><b>Bun</b>: a tiny HTTP server</summary>

```typescript
Bun.serve({
  port: 3000,
  fetch(req) {
    const { pathname } = new URL(req.url);
    if (pathname === "/health") return Response.json({ status: "ok" });
    return new Response("Not found", { status: 404 });
  },
});
```

</details>

<details>
<summary><b>Bash + PM2</b>: deploying to my VPS</summary>

```bash
#!/usr/bin/env bash
set -euo pipefail

git pull --ff-only
bun install --frozen-lockfile
bun run build

pm2 startOrReload ecosystem.config.cjs --env production
pm2 save
```

</details>

## `$ cat services.txt`

| Service | Details |
| --- | --- |
| Business websites | Fast, SEO-friendly sites for UMKM and personal brands |
| Backend & APIs | REST APIs with Node.js, NestJS, and Prisma |
| Dashboards | Admin panels and internal tools |
| WhatsApp bots | Custom bots with Baileys — command, automation, integrasi |
| Server setup | VPS configuration, deployment, and process management |

<div align="center">

<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcH1jEFR_5wF-f1qJYcdllJi0_bjgt6ylaVkSvDNHldA&s=10" width="260" alt="Anime illustration">

</div>

## `$ ./contact.sh`

```bash
telegram="t.me/bang_syaii"
github="github.com/LT-SYAII"
website="bang.syaii.sbs"
```

<div align="center">

<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu4pxPcC4wjZxz1lTB4humHmtJ6HHx4e_Ia10VLSMnXA&s=10" width="240" alt="Anime illustration">

</div>

<div align="center">

```bash
syaii@bang:~$ echo "Got a project in mind? Let's build it."
```

</div>
