import { useEffect, useState } from "react";
import Icon from "@/components/ui/icon";

export const BOT_URL = "https://t.me/vpntrystorybot";
export const CHANNEL_URL = "https://t.me/trystoryvpn";
export const SUPPORT_URL = "https://t.me/vpntrystorysupport";
export const EMAIL = "trystoryhelp@outlook.com";

export const SOCIALS: { icon: string; avatar: string; title: string; handle: string; text: string; href: string }[] = [
  { icon: "Megaphone", avatar: "https://cdn.poehali.dev/projects/0b4d137c-98fb-463e-87bb-519c6e390872/bucket/170e2f3e-e257-4078-a25b-3d154bf7928d.jpg", title: "Канал VPN", handle: "@trystoryvpn", text: "Акции, промокоды и статус серверов", href: CHANNEL_URL },
  { icon: "Newspaper", avatar: "https://cdn.poehali.dev/projects/0b4d137c-98fb-463e-87bb-519c6e390872/bucket/74621232-ebf0-4b66-b081-94a85ee77f85.jpg", title: "Новости", handle: "TRYSTORY NEWS", text: "Свежие новости проекта", href: "https://t.me/trystorynews" },
  { icon: "BadgeCheck", avatar: "https://cdn.poehali.dev/projects/0b4d137c-98fb-463e-87bb-519c6e390872/bucket/f1e17894-6580-425a-adf7-d8a4506f80d6.jpg", title: "Официальный канал", handle: "@trystoryofficial", text: "Главный канал Try Story", href: "https://t.me/trystoryofficial" },
  { icon: "Instagram", avatar: "/icons/instagram.webp", title: "Instagram", handle: "@trystoryvpn", text: "Сторис, розыгрыши и закулисье", href: "https://www.instagram.com/trystoryvpn" },
  { icon: "Twitter", avatar: "/icons/x.webp", title: "X", handle: "@trystoryvpn", text: "Короткие апдейты и анонсы", href: "https://x.com/trystoryvpn" },
  { icon: "Lightbulb", avatar: "https://cdn.poehali.dev/projects/0b4d137c-98fb-463e-87bb-519c6e390872/bucket/e9ba82d3-45d2-4200-ad5a-6fcb3814fdeb.jpg", title: "Предложка", handle: "Предложить идею", text: "Пришли идею, новость или пожелание", href: "https://t.me/+nH2HfnNBikIyOTMy" },
];

const links = [
  { href: "#tariffs", label: "Тарифы" },
  { href: "#perks", label: "Преимущества" },
  { href: "#app", label: "Приложение" },
  { href: "#channel", label: "Канал" },
  { href: "#support", label: "Поддержка" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 120);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/80 backdrop-blur-md border-b border-border"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="flex h-16 items-center justify-between px-6 lg:px-[30px]">
          <a
            href="#top"
            className={`font-head text-sm font-bold uppercase tracking-tight transition-all duration-500 ${
              scrolled ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 -translate-y-3"
            }`}
          >
            Try Story <span className="text-primary">VPN</span>
          </a>
          <nav className="hidden items-center gap-7 text-[13px] uppercase tracking-wide lg:flex">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="nav-dot transition-colors hover:text-primary">
                {l.label}
              </a>
            ))}
            {scrolled && (
              <a
                href={BOT_URL}
                target="_blank"
                rel="noreferrer"
                className="glow-btn animate-fade-in bg-primary px-4 py-2 text-primary-foreground"
              >
                Подключить
              </a>
            )}
          </nav>
          <button
            aria-label="Меню"
            onClick={() => setOpen(true)}
            className="flex h-10 w-10 items-center justify-center border border-border bg-background/60 backdrop-blur lg:hidden"
          >
            <Icon name="Menu" size={20} />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[60] flex flex-col bg-background transition-all duration-500 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="beam left-[-10%] top-[40%] h-20 w-[120%] -rotate-6" />
        <div className="relative flex h-16 items-center justify-between px-6">
          <span className="font-head text-sm font-bold uppercase">
            Try Story <span className="text-primary">VPN</span>
          </span>
          <button
            aria-label="Закрыть"
            onClick={() => setOpen(false)}
            className="flex h-10 w-10 items-center justify-center border border-border"
          >
            <Icon name="X" size={20} />
          </button>
        </div>
        <nav className="relative flex flex-1 flex-col justify-center gap-5 px-6">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-head text-3xl font-bold uppercase tracking-tight transition-all duration-500 hover:text-primary"
              style={{
                transform: open ? "none" : "translateX(-30px)",
                opacity: open ? 1 : 0,
                transitionDelay: `${i * 60 + 100}ms`,
              }}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href={BOT_URL}
          target="_blank"
          rel="noreferrer"
          className="glow-btn relative m-6 bg-primary py-4 text-center uppercase text-primary-foreground"
        >
          Подключить в боте
        </a>
      </div>
    </>
  );
};

export default Header;