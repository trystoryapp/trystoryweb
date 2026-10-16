import Icon from "@/components/ui/icon";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { EMAIL, SUPPORT_URL } from "./Header";

const faq = [
  {
    q: "Как подключиться?",
    a: "Открой бота @vpntrystorybot, выбери тариф и оплати. Бот пришлёт ключ — вставь его в приложение и нажми «Подключить». Всё занимает пару минут.",
  },
  {
    q: "Как активировать промокод SUB1000?",
    a: "В боте выбери пункт с промокодом и введи SUB1000. Тебе начислится 7 дней бесплатного доступа.",
  },
  {
    q: "Вы храните мои данные?",
    a: "Нет. Мы не ведём логи подключений и не храним историю посещённых сайтов.",
  },
  {
    q: "На скольких устройствах можно пользоваться?",
    a: "Один ключ можно использовать на телефоне, компьютере и планшете одновременно.",
  },
  {
    q: "Что если VPN перестал работать?",
    a: "Проверь статус в канале @trystoryvpn или напиши в поддержку @vpntrystorysupport — поможем разобраться.",
  },
];

const Support = () => {
  return (
    <section id="support" className="relative overflow-hidden py-24 lg:py-32">
      <div className="beam left-[-10%] top-[20%] h-20 w-[120%] -rotate-[3deg] opacity-60" />
      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">
        <div className="reveal">
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-primary">05 / Поддержка</p>
          <h2 className="mb-10 font-head text-[clamp(40px,6vw,80px)] font-bold uppercase leading-[0.9] tracking-[-0.04em]">
            Есть
            <br />
            вопрос?
          </h2>
          <Accordion type="single" collapsible defaultValue="0" className="border-t border-border">
            {faq.map((f, i) => (
              <AccordionItem key={f.q} value={String(i)} className="border-border">
                <AccordionTrigger className="py-5 text-left font-head text-base uppercase hover:text-primary hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="reveal lg:pt-24">
          <div className="neon-border bg-card p-8 lg:p-10">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="font-head text-xl font-bold uppercase">Напиши в поддержку</h3>
              <span className="flex items-center gap-2 text-xs uppercase text-muted-foreground">
                <span className="dot-ok" /> на связи
              </span>
            </div>
            <p className="text-muted-foreground">
              Все вопросы решаем в Telegram — живые люди, отвечаем быстро. Опиши проблему, и мы поможем.
            </p>
            <a
              href={SUPPORT_URL}
              target="_blank"
              rel="noreferrer"
              className="glow-btn mt-8 flex items-center justify-center gap-2 bg-primary py-4 uppercase text-primary-foreground"
            >
              Написать в поддержку
              <Icon name="Send" size={16} />
            </a>
            <div className="mt-8 grid gap-3 border-t border-border pt-6 text-sm">
              <a href={SUPPORT_URL} target="_blank" rel="noreferrer" className="flex items-center gap-3 transition-colors hover:text-primary">
                <Icon name="Send" size={16} className="text-primary" /> @vpntrystorysupport
              </a>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 break-all transition-colors hover:text-primary">
                <Icon name="Mail" size={16} className="text-primary" /> {EMAIL}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;