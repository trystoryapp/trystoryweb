import { useState } from "react";
import Icon from "@/components/ui/icon";
import { BOT_URL } from "./Header";

const platforms = [
  { id: "ios", label: "iPhone", icon: "Smartphone", app: "Streisand / V2Box", store: "App Store" },
  { id: "android", label: "Android", icon: "Smartphone", app: "v2rayNG / Hiddify", store: "Google Play" },
  { id: "win", label: "Windows", icon: "Monitor", app: "Hiddify", store: "сайт приложения" },
  { id: "mac", label: "macOS", icon: "Laptop", app: "V2Box / Hiddify", store: "App Store" },
];

const steps = [
  { title: "Открой бота", text: "Перейди в @vpntrystorybot и нажми «Старт»." },
  { title: "Выбери тариф", text: "Оплати подходящий срок или введи промокод SUB1000." },
  { title: "Получи ключ", text: "Бот пришлёт персональную ссылку-ключ для подключения." },
  { title: "Вставь в приложение", text: "Импортируй ключ в приложение и нажми «Подключить»." },
];

const AppSection = () => {
  const [tab, setTab] = useState("ios");
  const [step, setStep] = useState(0);
  const p = platforms.find((x) => x.id === tab)!;

  return (
    <section id="app" className="relative overflow-hidden py-24 lg:py-32">
      <div className="beam left-[70%] top-[-10%] h-[130%] w-[60px] rotate-[4deg] opacity-60" />
      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <div className="reveal mb-10">
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-primary">03 / Приложение</p>
            <h2 className="font-head text-[clamp(40px,6.5vw,88px)] font-bold uppercase leading-[0.9] tracking-[-0.04em]">
              4 шага
              <br />
              <span className="text-stroke">до свободы</span>
            </h2>
          </div>

          <ol className="reveal grid gap-px bg-border">
            {steps.map((s, i) => {
              const on = i === step;
              return (
                <li key={s.title}>
                  <button
                    onClick={() => setStep(i)}
                    onMouseEnter={() => setStep(i)}
                    className={`flex w-full items-start gap-6 p-5 text-left transition-colors duration-300 ${
                      on ? "bg-card" : "bg-background hover:bg-card/50"
                    }`}
                  >
                    <span
                      className={`font-head text-3xl font-bold transition-colors ${
                        on ? "text-primary" : "text-muted-foreground/40"
                      }`}
                    >
                      0{i + 1}
                    </span>
                    <span className="flex-1">
                      <span className="block font-head text-lg font-bold uppercase">{s.title}</span>
                      <span
                        className={`grid transition-all duration-500 ${
                          on ? "mt-2 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <span className="overflow-hidden text-muted-foreground">{s.text}</span>
                      </span>
                    </span>
                    <Icon
                      name="ArrowRight"
                      size={18}
                      className={`mt-2 transition-all ${on ? "translate-x-0 text-primary" : "-translate-x-2 opacity-0"}`}
                    />
                  </button>
                </li>
              );
            })}
          </ol>
        </div>

        {/* мок телефона */}
        <div className="reveal flex flex-col items-center">
          <div className="mb-8 flex w-full flex-wrap justify-center gap-2">
            {platforms.map((x) => (
              <button
                key={x.id}
                onClick={() => setTab(x.id)}
                className={`flex items-center gap-2 border px-4 py-2 text-xs uppercase tracking-wider transition-all ${
                  tab === x.id
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                }`}
              >
                <Icon name={x.icon} size={14} />
                {x.label}
              </button>
            ))}
          </div>

          <div className="relative w-[280px] rotate-[-3deg] transition-transform duration-700 hover:rotate-0">
            <div className="pointer-events-none absolute inset-0 -z-10 scale-110 rounded-[48px] bg-primary/40 blur-[70px]" />
            <div className="rounded-[40px] border border-border bg-card p-3 shadow-[0_0_80px_hsl(var(--primary)/0.35)]">
              <div className="relative overflow-hidden rounded-[30px] bg-background px-5 pb-6 pt-10">
                <div className="absolute left-1/2 top-3 h-5 w-20 -translate-x-1/2 rounded-full bg-card" />
                <div className="flex items-center justify-between text-[11px] uppercase text-muted-foreground">
                  <span>{p.label}</span>
                  <span className="flex items-center gap-2">
                    <span className="dot-ok" /> онлайн
                  </span>
                </div>

                <div key={`${tab}-${step}`} className="animate-scale-in">
                  <div className="relative mx-auto my-8 flex h-36 w-36 items-center justify-center">
                    <span className="absolute inset-0 animate-ping rounded-full border border-primary/40 [animation-duration:2.5s]" />
                    <span className="absolute inset-3 rounded-full border border-primary/60" />
                    <span className="relative flex h-24 w-24 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_0_50px_hsl(var(--primary)/0.8)]">
                      <Icon name={step === 3 ? "Power" : step === 2 ? "KeyRound" : step === 1 ? "CreditCard" : "Send"} size={36} />
                    </span>
                  </div>
                  <p className="text-center font-head text-sm font-bold uppercase">{steps[step].title}</p>
                  <p className="mt-2 text-center text-xs text-muted-foreground">
                    {step === 3 ? `Приложение: ${p.app}` : steps[step].text}
                  </p>
                </div>

                <div className="mt-6 flex justify-center gap-1.5">
                  {steps.map((_, i) => (
                    <span
                      key={i}
                      className={`h-1 transition-all duration-500 ${i === step ? "w-6 bg-primary" : "w-2 bg-border"}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <p className="mt-10 max-w-xs text-center text-sm text-muted-foreground">
            Для {p.label} подойдёт <span className="text-foreground">{p.app}</span> — скачай в {p.store}.
          </p>
          <a
            href={BOT_URL}
            target="_blank"
            rel="noreferrer"
            className="glow-btn mt-6 inline-flex items-center gap-2 bg-primary px-6 py-3 uppercase text-primary-foreground"
          >
            Получить ключ
            <Icon name="Send" size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AppSection;
