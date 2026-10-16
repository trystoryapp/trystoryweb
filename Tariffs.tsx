import { useState } from "react";
import Icon from "@/components/ui/icon";
import { BOT_URL } from "./Header";

const plans = [
  { id: "m1", name: "1 месяц", price: 100, months: 1, note: "Попробовать", tag: "" },
  { id: "m3", name: "3 месяца", price: 250, months: 3, note: "Экономия 17%", tag: "" },
  { id: "y1", name: "Год", price: 890, months: 12, note: "Экономия 26%", tag: "Выбор большинства" },
  { id: "inf", name: "Навсегда", price: 3490, months: 0, note: "Один платёж", tag: "Без продлений" },
];

const features = ["Безлимитный трафик", "Все серверы", "До 3 устройств", "Без рекламы и логов"];

const Tariffs = () => {
  const [active, setActive] = useState("y1");
  const current = plans.find((p) => p.id === active)!;

  return (
    <section id="tariffs" className="relative overflow-hidden py-24 lg:py-32">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="beam left-[-10%] top-[55%] h-16 w-[120%] rotate-[3deg] opacity-70" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="reveal mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-primary">01 / Тарифы</p>
            <h2 className="font-head text-[clamp(40px,7vw,96px)] font-bold uppercase leading-[0.9] tracking-[-0.04em]">
              Плати
              <br />
              <span className="text-stroke">меньше</span>
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground">
            Выбери срок — оплата и подключение проходят прямо в Telegram-боте. Ключ приходит через минуту.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((p, i) => {
            const isActive = p.id === active;
            const perMonth = p.months ? Math.round(p.price / p.months) : null;
            return (
              <button
                key={p.id}
                onClick={() => setActive(p.id)}
                className={`reveal group relative flex flex-col bg-card p-6 text-left transition-all duration-500 hover:-translate-y-2 ${
                  isActive ? "neon-border shadow-[0_0_60px_hsl(var(--primary)/0.35)]" : "border border-border"
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {p.tag && (
                  <span
                    className={`absolute -top-3 left-6 px-2 py-1 text-[10px] uppercase tracking-widest ${
                      p.id === "y1" ? "bg-primary text-primary-foreground" : "bg-foreground text-background"
                    }`}
                  >
                    {p.tag}
                  </span>
                )}
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">0{i + 1}</span>
                  <span
                    className={`flex h-5 w-5 items-center justify-center rounded-full border transition-colors ${
                      isActive ? "border-primary bg-primary" : "border-muted-foreground"
                    }`}
                  >
                    {isActive && <Icon name="Check" size={12} className="text-primary-foreground" />}
                  </span>
                </div>
                <h3 className="font-head text-xl font-bold uppercase">{p.name}</h3>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="font-head text-5xl font-bold tracking-tight">{p.price}</span>
                  <span className="text-lg">₽</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {perMonth ? `${perMonth} ₽ / мес · ${p.note}` : p.note}
                </p>
                <div className="mt-8 h-px w-full bg-border" />
                <span
                  className={`mt-6 inline-flex items-center gap-2 text-sm uppercase transition-colors ${
                    isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                  }`}
                >
                  {isActive ? "Выбран" : "Выбрать"}
                  <Icon name="ArrowRight" size={14} className="transition-transform group-hover:translate-x-1" />
                </span>
              </button>
            );
          })}
        </div>

        <div className="reveal mt-6 flex flex-col items-stretch gap-6 border border-border bg-card/60 p-6 backdrop-blur md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            {features.map((f) => (
              <span key={f} className="inline-flex items-center gap-2">
                <Icon name="Check" size={14} className="text-primary" />
                {f}
              </span>
            ))}
          </div>
          <a
            href={BOT_URL}
            target="_blank"
            rel="noreferrer"
            className="glow-btn flex shrink-0 items-center justify-center gap-3 bg-primary px-8 py-4 uppercase text-primary-foreground"
          >
            Подключить «{current.name}» за {current.price} ₽
            <Icon name="Send" size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Tariffs;