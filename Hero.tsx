import { useEffect, useRef } from "react";
import { BOT_URL, EMAIL } from "./Header";
import { stickerUrl } from "./Sticker";

const prices = [
  { name: "1 месяц", price: "100 ₽", sub: "для старта", hot: false },
  { name: "3 месяца", price: "250 ₽", sub: "≈83 ₽ в месяц", hot: false },
  { name: "Год", price: "890 ₽", sub: "≈74 ₽ в месяц", hot: true },
  { name: "Навсегда", price: "3490 ₽", sub: "один платёж", hot: false },
];

const Hero = () => {
  const screenRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = screenRef.current;
    if (!el || window.matchMedia("(pointer: coarse)").matches) return;
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      el.style.setProperty("--px", `${x * 10}px`);
      el.style.setProperty("--py", `${y * 8}px`);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      id="top"
      className="relative flex min-h-screen w-full flex-col overflow-hidden bg-background pb-28 pt-20 text-[13px] uppercase tracking-[0.02em] lg:block lg:h-screen lg:max-h-[960px] lg:min-h-[680px] lg:p-0"
    >
      {/* лучи */}
      <div className="beam left-[-10%] top-[30%] h-[90px] w-[120%] -rotate-[4deg]" />
      <div className="beam left-[8%] top-[-10%] h-[130%] w-[70px] rotate-[3deg] opacity-60" />
      <div className="beam right-[9%] top-[-10%] h-[130%] w-[50px] -rotate-[2deg] opacity-50" />


      {/* экран с маскотом */}
      <div
        ref={screenRef}
        className="hero-screen relative order-3 mx-6 mt-10 aspect-[4/3] max-h-[380px] rotate-[3deg] skew-x-[-2deg] overflow-hidden sm:mx-auto sm:w-[70%] lg:absolute lg:left-[30%] lg:top-[47%] lg:m-0 lg:aspect-auto lg:h-[36%] lg:max-h-none lg:w-[42%]"
      >
        <div className="scanline" />
        <img
          src="/mascot.webp"
          alt="Маскот TRY STORY"
          className="absolute bottom-[6%] left-1/2 h-[86%] w-auto"
          style={{
            transform:
              "translateX(calc(-50% + var(--px, 0px))) translateY(var(--py, 0px)) rotate(-3deg)",
            transition: "transform .4s ease-out",
          }}
        />
      </div>
      <div className="pointer-events-none absolute left-[30.5%] top-[86%] hidden h-[20%] w-[41%] rotate-[3deg] bg-gradient-to-b from-primary to-transparent opacity-25 lg:block" />

      {/* заголовок */}
      <h1 className="relative order-1 px-4 font-head text-[clamp(52px,11.2vw,143px)] font-bold leading-none tracking-[-0.04em] animate-rise lg:absolute lg:left-[24px] lg:top-[14px] lg:p-0">
        TRY STORY
      </h1>
      <div className="relative order-2 mt-2 self-end px-6 font-head text-[clamp(40px,7.8vw,100px)] font-bold leading-none tracking-[-0.04em] text-primary animate-rise [animation-delay:.2s] [text-shadow:0_0_40px_hsl(var(--primary)/.6)] lg:absolute lg:right-[32px] lg:top-[265px] lg:mt-0 lg:p-0">
        VPN
      </div>

      <p className="relative order-2 mt-6 px-6 leading-[1.25] animate-rise [animation-delay:.3s] lg:absolute lg:left-[30px] lg:top-[180px] lg:mt-0 lg:p-0">
        Свой VPN в Telegram.
        <br />
        Без рекламы, без логов{" "}
        <img src={stickerUrl("sparkles")} alt="" className="ml-1 inline-block h-[18px] w-[18px] align-[-3px]" />
      </p>

      {/* тарифы */}
      <div className="relative order-4 mx-6 mt-10 animate-rise [animation-delay:.4s] lg:absolute lg:left-[30px] lg:top-[240px] lg:m-0 lg:w-[300px]">
        <div className="mb-3 flex items-center gap-3 text-[11px] tracking-[0.2em] text-muted-foreground">
          <span className="h-px w-6 bg-primary" />
          Тарифы
        </div>
        <ul className="grid grid-cols-2 gap-2">
          {prices.map((p) => {
            const hot = p.hot;
            return (
              <li key={p.name}>
                <a
                  href="#tariffs"
                  className={`group relative block overflow-hidden border px-3 py-2.5 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 ${
                    hot
                      ? "neon-border border-transparent bg-primary/15 shadow-[0_0_30px_hsl(var(--primary)/0.35)]"
                      : "border-border bg-card/60 hover:border-primary hover:shadow-[0_0_24px_hsl(var(--primary)/0.3)]"
                  }`}
                >
                  <span className="pointer-events-none absolute -right-6 -top-6 h-14 w-14 rounded-full bg-primary/30 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="relative flex items-center justify-between text-[10px] tracking-[0.12em] text-muted-foreground">
                    {p.name}
                    {hot && <span className="bg-primary px-1.5 py-px text-[9px] text-primary-foreground">хит</span>}
                  </span>
                  <span className="relative mt-1 block font-head text-[22px] font-bold leading-none tracking-tight text-foreground transition-colors group-hover:text-accent">
                    {p.price}
                  </span>
                  <span className="relative mt-1 block text-[10px] normal-case text-muted-foreground">{p.sub}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <p className="relative order-5 mx-6 mt-6 leading-[1.6] text-muted-foreground lg:absolute lg:left-[30px] lg:top-[500px] lg:m-0">
        Скорость ·<br />
        Без рекламы ·<br />
        Без логов
      </p>

      <div className="absolute right-[34px] top-[520px] hidden gap-1 lg:grid">
        <i className="block h-7 w-[2px] bg-foreground" />
        <i className="block h-1 w-[2px] bg-muted-foreground" />
        <i className="block h-1 w-[2px] bg-muted-foreground" />
        <i className="block h-1 w-[2px] bg-muted-foreground" />
        <i className="block h-1 w-[2px] bg-muted-foreground" />
      </div>

      <div className="absolute bottom-[30px] left-1/2 z-10 -translate-x-1/2">
        <a
          href={BOT_URL}
          target="_blank"
          rel="noreferrer"
          className="glow-btn block whitespace-nowrap bg-primary px-[22px] py-3 text-primary-foreground"
        >
          Подключить в боте ▸
        </a>
      </div>

      <div className="absolute bottom-[34px] left-[30px] hidden gap-6 md:flex">
        <a href={`mailto:${EMAIL}`} className="transition-colors hover:text-primary">
          Почта
        </a>
        <a href={BOT_URL} target="_blank" rel="noreferrer" className="transition-colors hover:text-primary">
          @vpntrystorybot
        </a>
      </div>
      <div className="absolute bottom-[34px] right-[30px] hidden items-center gap-[10px] md:flex">
        <span className="dot-ok" />
        Сервис работает
      </div>
    </section>
  );
};

export default Hero;