import Icon from "@/components/ui/icon";
import Sticker, { type StickerName } from "./Sticker";
import { BOT_URL, CHANNEL_URL, EMAIL, SUPPORT_URL, SOCIALS } from "./Header";

const contacts = [
  { label: "Бот", value: "@vpntrystorybot", href: BOT_URL, icon: "Bot", sticker: "robot" as StickerName, avatar: "https://cdn.poehali.dev/projects/0b4d137c-98fb-463e-87bb-519c6e390872/bucket/edf4098c-f0b5-4ac2-b8f1-6a65eb06138f.jpg" },
  { label: "Канал", value: "@trystoryvpn", href: CHANNEL_URL, icon: "Megaphone", sticker: "megaphone" as StickerName, avatar: "https://cdn.poehali.dev/projects/0b4d137c-98fb-463e-87bb-519c6e390872/bucket/170e2f3e-e257-4078-a25b-3d154bf7928d.jpg" },
  { label: "Поддержка", value: "@vpntrystorysupport", href: SUPPORT_URL, icon: "Headphones", sticker: "wave" as StickerName, avatar: "https://cdn.poehali.dev/projects/0b4d137c-98fb-463e-87bb-519c6e390872/bucket/90f7a6ac-e6e9-488f-8f6b-c4ec3c63c406.jpg" },
  { label: "Почта", value: EMAIL, href: `mailto:${EMAIL}`, icon: "Mail", sticker: "letter" as StickerName },
];

const Footer = () => (
  <footer id="contacts" className="relative overflow-hidden border-t border-border pt-24">
    <div className="grid-bg pointer-events-none absolute inset-0 opacity-30 [mask-image:linear-gradient(to_top,black,transparent)]" />
    <div className="relative mx-auto max-w-7xl px-6">
      <div className="reveal flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-primary">06 / Контакты</p>
          <h2 className="font-head text-[clamp(30px,8.5vw,72px)] font-bold uppercase leading-[1] tracking-[-0.03em] lg:text-[clamp(36px,5.5vw,72px)]">
            <span className="block">Подключайся</span>
            <span className="block text-primary [text-shadow:0_0_40px_hsl(var(--primary)/.5)]">сейчас</span>
          </h2>
        </div>
        <a
          href={BOT_URL}
          target="_blank"
          rel="noreferrer"
          className="glow-btn inline-flex items-center justify-center gap-3 self-start bg-primary px-10 py-5 font-head text-sm uppercase text-primary-foreground lg:self-auto"
        >
          Открыть бота
          <Icon name="Send" size={18} />
        </a>
      </div>

      <div className="mt-16 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
        {contacts.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target={c.href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            className="group flex items-start gap-4 bg-background p-6 transition-colors hover:bg-card"
          >
            {"avatar" in c && c.avatar ? (
              <img src={c.avatar} alt="" loading="lazy" className="h-8 w-8 shrink-0 rounded-full object-cover transition-transform group-hover:scale-125" />
            ) : (
              <Sticker name={c.sticker} size={28} className="transition-transform group-hover:scale-125" />
            )}
            <span className="min-w-0">
              <span className="block text-xs uppercase tracking-widest text-muted-foreground">{c.label}</span>
              <span className="mt-1 block break-all">{c.value}</span>
            </span>
          </a>
        ))}
      </div>

      <div className="mt-px flex flex-wrap gap-px bg-border">
        {SOCIALS.filter((s) => s.href !== CHANNEL_URL).map((s) => (
          <a
            key={s.title}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-1 basis-[180px] items-center gap-3 bg-background px-6 py-4 text-sm transition-colors hover:bg-card"
          >
            <img src={s.avatar} alt="" loading="lazy" className="h-7 w-7 rounded-full object-cover transition-transform group-hover:scale-125" />
            {s.title}
          </a>
        ))}
      </div>

      <div className="pointer-events-none mt-16 select-none overflow-hidden">
        <div className="whitespace-nowrap text-center font-head text-[min(13vw,170px)] font-bold uppercase leading-[0.8] tracking-[-0.06em] text-foreground/[0.06]">
          Try Story
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-4 border-t border-border py-6 text-xs uppercase tracking-wider text-muted-foreground sm:flex-row">
        <span>© {new Date().getFullYear()} Try Story VPN</span>
        <span className="flex items-center gap-2">
          <span className="dot-ok" /> Сервис работает
        </span>
        <a href="#top" className="flex items-center gap-2 transition-colors hover:text-foreground">
          Наверх <Icon name="ArrowUp" size={14} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;