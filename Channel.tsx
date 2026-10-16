import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/icon";
import { SOCIALS } from "./Header";

const Counter = ({ to }: { to: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(0);
  const [seen, setSeen] = useState(false);
  const fromRef = useRef(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setSeen(true);
        io.disconnect();
      }
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!seen) return;
    const from = fromRef.current;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const k = Math.min(1, (t - start) / 1600);
      const v = Math.round(from + (to - from) * (1 - Math.pow(1 - k, 3)));
      setVal(v);
      fromRef.current = v;
      if (k < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to, seen]);

  return <span ref={ref}>{val.toLocaleString("ru-RU")}</span>;
};

const socials = SOCIALS;

const Channel = () => {
  return (
  <section id="channel" className="relative overflow-hidden py-24 lg:py-32">
    <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[140px]" />
    <div className="relative mx-auto max-w-7xl px-6">
      <div className="reveal grid items-end gap-10 lg:grid-cols-2">
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-primary">04 / Канал и соцсети</p>
          <h2 className="font-head text-[clamp(40px,6.5vw,88px)] font-bold uppercase leading-[0.9] tracking-[-0.04em]">
            Нас уже
          </h2>
          <div className="font-head text-[clamp(90px,18vw,240px)] font-bold leading-[0.85] tracking-[-0.06em] text-primary [text-shadow:0_0_60px_hsl(var(--primary)/.6)]">
            <Counter to={5780} />
          </div>
          <div className="mt-4 inline-flex items-center gap-2 border border-border bg-card/60 px-3 py-1.5 text-xs uppercase tracking-widest text-muted-foreground">
            <span className="dot-ok" />
            подписчиков с нами
          </div>
        </div>
        <p className="max-w-md text-lg text-muted-foreground lg:justify-self-end">
          Подписывайся на канал — там первыми появляются промокоды, новости о серверах и розыгрыши бесплатных месяцев.
        </p>
      </div>

      <div className="mt-16 grid gap-4 md:grid-cols-3">
        {socials.map((s, i) => (
          <a
            key={s.title}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            className="reveal group relative flex flex-col overflow-hidden border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-2 hover:border-primary hover:shadow-[0_0_60px_hsl(var(--primary)/0.3)]"
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <span className="absolute inset-x-0 bottom-0 h-0 bg-primary transition-all duration-500 group-hover:h-1" />
            <div className="mb-12 flex items-center justify-between">
              <img src={s.avatar} alt={s.title} loading="lazy" className="h-14 w-14 rounded-full object-cover ring-2 ring-primary/40 transition-all duration-500 group-hover:scale-110 group-hover:ring-primary group-hover:shadow-[0_0_30px_hsl(var(--primary)/0.6)]" />
              <Icon
                name="ArrowUpRight"
                size={22}
                className="text-muted-foreground transition-all duration-500 group-hover:rotate-45 group-hover:text-foreground"
              />
            </div>
            <span className="text-xs uppercase tracking-widest text-muted-foreground">{s.title}</span>
            <span className="mt-2 break-all font-head text-xl font-bold">{s.handle}</span>
            <span className="mt-3 text-sm text-muted-foreground">{s.text}</span>
          </a>
        ))}
      </div>
    </div>
  </section>
  );
};

export default Channel;