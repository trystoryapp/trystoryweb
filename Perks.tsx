import { useState } from "react";
import Icon from "@/components/ui/icon";
import { useToast } from "@/hooks/use-toast";
import { BOT_URL } from "./Header";
import Sticker, { type StickerName } from "./Sticker";

const perks = [
  {
    icon: "zap" as StickerName,
    title: "Скорость",
    text: "Быстрые серверы без ограничений трафика. Видео в 4K, игры и звонки без задержек.",
    stat: "1 Гбит/с",
  },
  {
    icon: "monkey" as StickerName,
    title: "Без рекламы",
    text: "Никаких баннеров, всплывающих окон и навязчивых предложений. Только чистое соединение.",
    stat: "0 баннеров",
  },
  {
    icon: "lock" as StickerName,
    title: "Без логов",
    text: "Мы не храним историю подключений и не знаем, какие сайты ты открываешь.",
    stat: "0 записей",
  },
];

const ticker = ["Скорость", "Без рекламы", "Без логов", "Telegram-бот", "Сервис работает", "Промокод SUB1000"];

const Perks = () => {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText("SUB1000");
    } catch {
      /* noop */
    }
    setCopied(true);
    toast({ title: "Промокод скопирован", description: "Вставь SUB1000 в боте — получишь 7 дней доступа." });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="perks" className="relative overflow-hidden py-24 lg:py-32">
      {/* бегущая строка */}
      <div className="-rotate-2 border-y border-border bg-primary py-4 text-primary-foreground">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap font-head text-2xl font-bold uppercase">
          {[...ticker, ...ticker, ...ticker, ...ticker].map((t, i) => (
            <span key={i} className="flex items-center gap-10">
              {t}
              <span className="inline-block h-3 w-3 rotate-45 bg-primary-foreground" />
            </span>
          ))}
        </div>
      </div>

      <div className="relative mx-auto mt-24 max-w-7xl px-6">
        <div className="reveal relative mb-14">
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-primary">02 / Преимущества</p>
          <h2 className="font-head text-[clamp(40px,7vw,96px)] font-bold uppercase leading-[0.9] tracking-[-0.04em]">
            Три
            <span className="text-primary"> причины</span>
          </h2>
        </div>

        <div className="grid gap-px bg-border lg:grid-cols-3">
          {perks.map((p, i) => (
            <div
              key={p.title}
              className="reveal group relative overflow-hidden bg-background p-8 transition-colors duration-500 hover:bg-card lg:p-10"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <span className="pointer-events-none absolute -right-4 -top-6 font-head text-[140px] font-bold leading-none text-foreground/[0.04] transition-all duration-700 group-hover:-translate-y-2 group-hover:text-primary/10">
                0{i + 1}
              </span>
              <div className="relative mb-10 flex h-16 w-16 items-center justify-center border border-primary/60 bg-primary/10 transition-all duration-500 group-hover:scale-110 group-hover:border-primary group-hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)]">
                <Sticker name={p.icon} size={40} />
              </div>
              <h3 className="relative font-head text-2xl font-bold uppercase">{p.title}</h3>
              <p className="relative mt-4 leading-relaxed text-muted-foreground">{p.text}</p>
              <p className="relative mt-8 font-head text-sm uppercase text-primary">{p.stat}</p>
            </div>
          ))}
        </div>

        {/* промокод */}
        <div className="reveal neon-border relative mt-16 overflow-hidden bg-card p-8 lg:p-12">
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/30 blur-[100px]" />
          <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 border border-border bg-background/50 px-3 py-1 text-xs uppercase tracking-widest">
                <span className="dot-ok" />
                Всё починили · нас уже 5 780
              </div>
              <h3 className="font-head text-3xl font-bold uppercase leading-tight lg:text-5xl">
                7 дней доступа
                <br />
                <span className="text-muted-foreground">для всех</span>
              </h3>
              <p className="mt-4 max-w-md text-muted-foreground">
                Нас уже больше 5 780 — активируй промокод в боте и пользуйся VPN бесплатно неделю.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <button
                onClick={copy}
                className="group relative flex items-center justify-between gap-6 border-2 border-dashed border-primary bg-background px-6 py-5 transition-all hover:bg-primary/10"
              >
                <span className="font-head text-4xl font-bold tracking-tight text-accent [text-shadow:0_0_30px_hsl(var(--primary)/.8)] lg:text-5xl">
                  SUB1000
                </span>
                <Icon name={copied ? "Check" : "Copy"} size={22} className="text-primary" />
              </button>
              <a
                href={BOT_URL}
                target="_blank"
                rel="noreferrer"
                className="glow-btn flex items-center justify-center gap-2 bg-primary px-6 py-4 uppercase text-primary-foreground"
              >
                Активировать в боте
                <Icon name="ArrowUpRight" size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Perks;