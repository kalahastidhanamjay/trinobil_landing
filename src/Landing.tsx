import { ArrowRight, ArrowUpRight, Check, CloudOff, Plus, ScanLine, WifiOff } from 'lucide-react';
import { Logo } from './components/Logo';
import { useState, type ReactNode } from 'react';

/** Where the buttons lead: set these in .env for production. */
const APP_URL = import.meta.env.VITE_APP_URL ?? 'http://localhost:3000';
const APK_URL = import.meta.env.VITE_APK_URL ?? '#download';
const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL ?? 'hello@trinobil.com';

export function Landing() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Proof />
        <Showcase />
        <Restaurants />
        <LanguagesBand />
        <Plans />
        <Faq />
        <Closing />
      </main>
      <Footer />
    </>
  );
}

// ------------------------------------------------------------------ pieces

function Wordmark() {
  return (
    <a href="#top" className="flex items-center gap-2.5">
      <Logo size={28} />
    </a>
  );
}

function GoldButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="gold-fill group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-void shadow-[0_10px_40px_-10px_rgba(214,182,118,0.6)] transition hover:brightness-110"
    >
      {children}
      <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
    </a>
  );
}

function GhostButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-sm font-medium text-pearl/90 transition hover:border-gold/60 hover:text-champagne">
      {children}
    </a>
  );
}

function Kicker({ children }: { children: ReactNode }) {
  return <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.35em] text-gold">{children}</p>;
}

function Headline({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <h2 className={`text-4xl font-medium leading-[1.05] tracking-[-0.03em] sm:text-6xl ${className}`}>{children}</h2>;
}

/** An italic serif word in gold, for emphasis. */
function Accent({ children }: { children: ReactNode }) {
  return <em className="gold-text pr-1 font-serif font-normal italic">{children}</em>;
}

// ------------------------------------------------------------------ devices

function Laptop({ children }: { children: ReactNode }) {
  return (
    <div className="relative">
      <div className="rounded-t-[18px] border border-white/10 bg-[#0a0a0a] p-2.5 shadow-[0_40px_120px_-30px_rgba(0,0,0,0.9)]">
        <div className="mx-auto mb-1.5 size-1.5 rounded-full bg-white/15" />
        <div className="aspect-[16/10] overflow-hidden rounded-md bg-slate-100">{children}</div>
      </div>
      <div className="relative mx-[-6%] h-4 rounded-b-[14px] bg-gradient-to-b from-[#2a2a2c] to-[#111] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.8)]">
        <div className="mx-auto h-1.5 w-24 rounded-b-md bg-[#0a0a0a]" />
      </div>
    </div>
  );
}

function Phone({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-[42px] border border-white/15 bg-[#0b0b0b] p-2 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.95)] ${className}`}>
      <div className="relative aspect-[9/19] overflow-hidden rounded-[34px] bg-white">
        <div className="absolute left-1/2 top-2 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-black" />
        {children}
      </div>
    </div>
  );
}

/** A miniature of the web app's billing counter. */
function CounterScreen() {
  const rows: [string, string, string][] = [
    ['Rice 5 kg', '3', '1,935.00'],
    ['Toor dal 1 kg', '1', '159.00'],
    ['Groundnut oil 1 L', '1', '210.00'],
    ['Tea powder 250 g', '1', '140.00'],
    ['Sugar 1 kg', '2', '92.00'],
    ['Butter 100 g', '1', '58.00'],
    ['Biscuits 250 g', '4', '100.00'],
  ];
  return (
    <div className="flex size-full text-[7px] text-slate-800 sm:text-[9px]">
      <div className="w-[17%] bg-[#0b1220] p-[3%] text-slate-400">
        <p className="mb-[14%] font-semibold text-white">Trinobil</p>
        {['Dashboard', 'New bill', 'Sales', 'Customers', 'Items', 'Purchases', 'Reports', 'Settings'].map((n, i) => (
          <p key={n} className={`mb-[6%] rounded px-[6%] py-[3%] ${i === 1 ? 'bg-[#1b2740] text-white' : ''}`}>{n}</p>
        ))}
      </div>
      <div className="flex flex-1 flex-col">
        <div className="flex h-[7%] items-center justify-between bg-[#111a2e] px-[2.5%] text-white">
          <span className="font-semibold">Your Store</span>
          <span className="font-mono text-slate-400">06:26 pm</span>
        </div>
        <div className="flex flex-1 gap-[2%] p-[2%]">
          <div className="flex flex-1 flex-col gap-[3%]">
            <div className="rounded border-2 border-teal-600 bg-white px-[3%] py-[2%] text-slate-400">Type item name, code or scan barcode…</div>
            <div className="flex-1 overflow-hidden rounded border border-slate-200 bg-white">
              <div className="flex justify-between bg-[#0b1220] px-[3%] py-[2%] font-semibold uppercase text-slate-400">
                <span>Item</span>
                <span>Amount</span>
              </div>
              {rows.map(([n, q, a]) => (
                <div key={n} className="flex justify-between border-b border-slate-100 px-[3%] py-[2.4%]">
                  <span>
                    {n} <span className="text-slate-400">×{q}</span>
                  </span>
                  <span className="font-mono font-semibold">₹{a}</span>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-4 gap-[1.5%]">
              {['Salt 1 kg', 'Milk 500 ml', 'Coffee', 'Cookies', 'Sunflower oil', 'Toor dal', 'Rice', 'Tea powder'].map((n, i) => (
                <div key={n} className={`rounded border px-[6%] py-[4%] ${i === 6 || i === 5 ? 'border-teal-500 bg-teal-50' : 'border-slate-200 bg-white'}`}>
                  <p className="truncate">{n}</p>
                  <p className="font-mono font-semibold text-teal-700">₹{[28, 30, 185, 35, 155, 159, 645, 140][i]}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex w-[34%] flex-col gap-[4%]">
            <div className="rounded bg-[#0b1220] p-[6%] text-right">
              <p className="text-left font-semibold uppercase tracking-widest text-slate-500">Bill total</p>
              <p className="mt-[4%] font-mono text-[14px] font-bold text-teal-200 sm:text-[22px]">₹2,594.00</p>
            </div>
            <div className="grid grid-cols-4 gap-[4%]">
              {['Cash', 'UPI', 'Card', 'Credit'].map((m, i) => (
                <span key={m} className={`rounded py-[8%] text-center font-semibold ${i === 0 ? 'bg-teal-600 text-white' : 'border border-slate-300 bg-white'}`}>{m}</span>
              ))}
            </div>
            <div className="space-y-[6%] rounded border border-slate-200 bg-white p-[6%]">
              <p className="text-slate-400">CUSTOMER</p>
              <p className="rounded border border-slate-300 px-[5%] py-[4%]">Walk-in customer</p>
              <div className="flex justify-between">
                <span className="text-slate-400">Received</span>
                <span className="font-mono">₹2,700</span>
              </div>
              <div className="flex justify-between rounded bg-emerald-50 px-[5%] py-[3%] text-emerald-700">
                <span>Return</span>
                <span className="font-mono font-semibold">₹106.00</span>
              </div>
            </div>
            <div className="rounded bg-teal-600 py-[8%] text-center font-semibold text-white">Charge ₹2,594.00 · F9</div>
          </div>
        </div>
      </div>
    </div>
  );
}

/** A miniature of the Android app. */
function PhoneScreen() {
  return (
    <div className="flex size-full flex-col bg-[#f6f7fb] pt-9 text-[9px] text-slate-800">
      <div className="px-4">
        <p className="text-[8px] uppercase tracking-widest text-slate-400">Today</p>
        <p className="font-mono text-[22px] font-bold tracking-tight">₹48,250</p>
        <p className="text-emerald-600">▲ 12% vs yesterday</p>
      </div>
      <div className="mx-3 mt-3 flex h-20 items-end gap-1 rounded-xl bg-white p-2 shadow-sm">
        {[40, 62, 55, 70, 48, 80, 66, 92, 74, 100].map((h, i) => (
          <span key={i} className="flex-1 rounded-sm bg-teal-500" style={{ height: `${h}%`, opacity: 0.45 + i * 0.055 }} />
        ))}
      </div>
      <div className="mx-3 mt-3 space-y-1.5">
        {[
          ['INV-1042', 'Cash', '₹2,444'],
          ['INV-1041', 'UPI', '₹318'],
          ['INV-1040', 'UPI', '₹1,120'],
          ['INV-1039', 'Card', '₹645'],
        ].map(([n, m, a]) => (
          <div key={n} className="flex items-center justify-between rounded-lg bg-white px-2.5 py-2 shadow-sm">
            <span>
              <span className="font-semibold">{n}</span> <span className="text-slate-400">· {m}</span>
            </span>
            <span className="font-mono font-semibold">{a}</span>
          </div>
        ))}
      </div>
      <div className="mt-auto flex justify-center pb-4">
        <span className="rounded-full bg-[#0b1220] px-5 py-2 font-semibold text-white">+ New bill</span>
      </div>
    </div>
  );
}

function ReceiptCard() {
  return (
    <div className="w-44 rounded-sm bg-[#fbf8f1] px-4 py-5 font-mono text-[9px] text-neutral-800 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.9)]">
      <p className="text-center text-[11px] font-bold">YOUR STORE NAME</p>
      <p className="text-center text-neutral-500">GSTIN XXXXXXXXXXXXXXX</p>
      <p className="my-2 border-t border-dashed border-neutral-400" />
      {[
        ['Rice 5kg', '3', '1935.00'],
        ['Toor dal', '1', '159.00'],
        ['Gnut oil', '1', '210.00'],
        ['Tea pwdr', '1', '140.00'],
      ].map(([n, q, a]) => (
        <p key={n} className="flex justify-between">
          <span>
            {n} x{q}
          </span>
          <span>{a}</span>
        </p>
      ))}
      <p className="my-2 border-t border-dashed border-neutral-400" />
      <p className="flex justify-between text-[11px] font-bold">
        <span>TOTAL</span>
        <span>₹2444.00</span>
      </p>
      <p className="mt-2 text-center text-neutral-500">Thank you · visit again</p>
    </div>
  );
}

// ------------------------------------------------------------------ nav + hero

function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/5 bg-void/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Wordmark />
        <nav className="hidden items-center gap-9 text-sm text-pearl/60 md:flex">
          <a href="#features" className="transition hover:text-pearl">Features</a>
          <a href="#restaurants" className="transition hover:text-pearl">Restaurants</a>
          <a href="#plans" className="transition hover:text-pearl">Plans</a>
          <a href="#faq" className="transition hover:text-pearl">FAQ</a>
        </nav>
        <div className="flex items-center gap-5">
          <a href={APP_URL} className="hidden text-sm text-pearl/70 transition hover:text-pearl sm:block">Sign in</a>
          <a href={APK_URL} className="rounded-full border border-gold/50 px-4 py-2 text-xs font-semibold text-champagne transition hover:bg-gold hover:text-void">Get the app</a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-x-clip pt-36">
      <div className="glow pointer-events-none absolute left-1/2 top-[38%] h-[900px] w-[1200px] -translate-x-1/2" />
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <p className="rise mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs text-pearl/70">
          <span className="blink size-1.5 rounded-full bg-gold" /> Billing for shops & restaurants · Made in India
        </p>
        <h1 className="rise-2 text-[3.4rem] font-medium leading-[0.95] tracking-[-0.045em] sm:text-8xl lg:text-[8.5rem]">
          Billing,
          <br />
          <Accent>perfected.</Accent>
        </h1>
        <p className="rise-2 mx-auto mt-8 max-w-xl text-lg font-light text-pearl/60">
          GST bills in seconds. Stock that counts itself. Works offline, in your language.
        </p>
        <div className="rise-3 mt-10 flex flex-wrap justify-center gap-3">
          <GoldButton href={APP_URL}>Start billing</GoldButton>
          <GhostButton href={APK_URL}>Download for Android</GhostButton>
        </div>
      </div>

      <div className="rise-3 relative mx-auto mt-20 max-w-6xl px-6 pb-24">
        <div className="relative mx-auto w-[88%] sm:w-[78%]">
          <Laptop>
            <CounterScreen />
          </Laptop>
          <div className="float absolute -left-[9%] top-[18%] hidden -rotate-6 md:block">
            <ReceiptCard />
          </div>
          <div className="float-late absolute -right-[7%] -top-[8%] hidden w-[22%] sm:block">
            <Phone>
              <PhoneScreen />
            </Phone>
          </div>
        </div>
        <div className="hairline mx-auto mt-24 max-w-3xl" />
      </div>
    </section>
  );
}

function Proof() {
  const facts: [string, string][] = [
    ['2 sec', 'to ring up a bill'],
    ['10', 'Indian languages'],
    ['0', 'internet needed to bill'],
    ['100%', 'GST-ready invoices'],
  ];
  return (
    <section className="mx-auto grid max-w-6xl grid-cols-2 gap-y-12 px-6 pb-28 md:grid-cols-4">
      {facts.map(([n, t]) => (
        <div key={t} className="text-center">
          <p className="gold-text text-5xl font-light tracking-tight sm:text-6xl">{n}</p>
          <p className="mt-3 text-xs uppercase tracking-[0.25em] text-pearl/45">{t}</p>
        </div>
      ))}
    </section>
  );
}

// ------------------------------------------------------------------ showcase

function Tile({ title, text, children, className = '' }: { title: string; text: string; children: ReactNode; className?: string }) {
  return (
    <div className={`gold-border group relative flex flex-col overflow-hidden rounded-[28px] ${className}`}>
      <div className="relative flex min-h-56 flex-1 items-center justify-center overflow-hidden p-8">{children}</div>
      <div className="relative px-8 pb-8">
        <h3 className="text-xl font-medium tracking-tight">{title}</h3>
        <p className="mt-1.5 text-sm font-light text-pearl/55">{text}</p>
      </div>
    </div>
  );
}

function Showcase() {
  return (
    <section id="features" className="mx-auto max-w-7xl px-6 py-28">
      <div className="mx-auto mb-20 max-w-3xl text-center">
        <Kicker>Everything, beautifully done</Kicker>
        <Headline>
          One app. <Accent>Every</Accent> counter.
        </Headline>
      </div>

      <div className="grid gap-5 lg:grid-cols-6">
        <Tile className="lg:col-span-4" title="Reads supplier bills" text="Photograph a printed bill. Items, quantities and rates land in your purchase.">
          <div className="relative w-full max-w-md">
            <div className="relative mx-auto w-56 -rotate-2 rounded-sm bg-[#fbf8f1] p-5 font-mono text-[10px] text-neutral-700 shadow-2xl">
              <p className="text-center font-bold">WHOLESALE SUPPLIER</p>
              <p className="mb-2 text-center text-neutral-400">Bill No 7781 · 09/10/2026</p>
              {[
                ['Sugar 50kg', '2', '4,300'],
                ['Toor dal 25kg', '1', '3,725'],
                ['Oil 15L tin', '3', '6,450'],
                ['Salt 1kg x25', '4', '700'],
              ].map(([n, q, a]) => (
                <p key={n} className="flex justify-between border-b border-dotted border-neutral-300 py-1">
                  <span>{n}</span>
                  <span>
                    {q} · {a}
                  </span>
                </p>
              ))}
              <div className="scan-line absolute inset-x-0 h-0.5 bg-gold shadow-[0_0_24px_6px_rgba(214,182,118,0.55)]" />
            </div>
            <div className="absolute -bottom-2 right-0 hidden items-center gap-2 rounded-full border border-gold/30 bg-onyx/90 px-4 py-2 text-xs text-champagne backdrop-blur sm:flex">
              <ScanLine className="size-4" /> 4 items matched
            </div>
          </div>
        </Tile>

        <Tile className="lg:col-span-2" title="Works offline" text="No signal? Keep billing. Everything syncs the moment you're back.">
          <div className="relative flex flex-col items-center">
            <div className="flex size-24 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
              <WifiOff className="size-9 text-gold" strokeWidth={1.25} />
            </div>
            <div className="mt-6 space-y-2">
              {['Bill #OFF-12 · saved', 'Bill #OFF-13 · saved'].map((t) => (
                <p key={t} className="flex items-center gap-2 rounded-full bg-white/[0.04] px-4 py-1.5 font-mono text-[11px] text-pearl/70">
                  <CloudOff className="size-3.5 text-gold/80" /> {t}
                </p>
              ))}
            </div>
          </div>
        </Tile>

        <Tile className="lg:col-span-2" title="Your logo, your bill" text="Neat receipts on any Bluetooth printer. GST invoices emailed in a tap.">
          <div className="-rotate-3 scale-90">
            <ReceiptCard />
          </div>
        </Tile>

        <Tile className="lg:col-span-2" title="Reports at a glance" text="Today's sales, profit, top items and GST — ready for your accountant.">
          <div className="flex h-36 w-full max-w-60 items-end gap-2">
            {[38, 52, 46, 64, 58, 76, 70, 92].map((h, i) => (
              <span key={i} className="flex-1 rounded-t bg-gradient-to-t from-gold-deep/30 to-gold" style={{ height: `${h}%`, opacity: 0.35 + i * 0.09 }} />
            ))}
          </div>
        </Tile>

        <Tile className="lg:col-span-2" title="Every action, on record" text="Who printed, who emailed, who changed a price — and when.">
          <ol className="w-full max-w-64 space-y-3 border-l border-gold/30 pl-5 text-xs">
            {[
              ['Cashier', 'printed INV-1042', '6:24 pm'],
              ['Manager', 'emailed INV-1041', '6:11 pm'],
              ['Owner', 'changed price · Sugar', '5:58 pm'],
            ].map(([who, what, at]) => (
              <li key={what} className="relative">
                <span className="absolute -left-[23.5px] top-1 size-2 rounded-full bg-gold" />
                <span className="text-champagne">{who}</span> <span className="text-pearl/60">{what}</span>
                <span className="block font-mono text-[10px] text-pearl/35">{at}</span>
              </li>
            ))}
          </ol>
        </Tile>
      </div>
    </section>
  );
}

// ------------------------------------------------------------------ restaurants

function Restaurants() {
  const tables: [string, 'free' | 'busy' | 'bill'][] = [
    ['T1', 'busy'],
    ['T2', 'free'],
    ['T3', 'bill'],
    ['T4', 'busy'],
    ['T5', 'free'],
    ['T6', 'busy'],
    ['T7', 'free'],
    ['T8', 'bill'],
    ['T9', 'busy'],
  ];
  const tone = { free: 'border-white/10 text-pearl/40', busy: 'border-gold/60 bg-gold/10 text-champagne', bill: 'border-teal/60 bg-teal/10 text-teal' };
  return (
    <section id="restaurants" className="relative overflow-hidden border-y border-white/5 bg-onyx">
      <div className="glow pointer-events-none absolute -right-60 top-0 h-[700px] w-[700px]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-20 px-6 py-32 lg:grid-cols-2">
        <div>
          <Kicker>For restaurants</Kicker>
          <Headline>
            The floor, <Accent>in sync.</Accent>
          </Headline>
          <p className="mt-8 max-w-md text-lg font-light text-pearl/55">
            Orders reach the kitchen instantly. The bill reaches the table before the payment does — the way restaurants really work.
          </p>
          <div className="mt-12 grid max-w-md grid-cols-2 gap-8">
            {[
              ['Table service', 'Order · KOT · Bill · Pay later'],
              ['Token counter', 'Pay first · Token · Ready · Collect'],
            ].map(([t, s]) => (
              <div key={t}>
                <p className="font-medium text-champagne">{t}</p>
                <p className="mt-2 text-sm font-light leading-relaxed text-pearl/50">{s}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="gold-border rounded-[32px] p-8">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-sm font-medium">Main floor</p>
              <div className="flex gap-4 text-[11px] text-pearl/50">
                <span className="flex items-center gap-1.5"><span className="size-2 rounded-full bg-gold" /> Dining</span>
                <span className="flex items-center gap-1.5"><span className="size-2 rounded-full bg-teal" /> Bill printed</span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {tables.map(([t, s]) => (
                <div key={t} className={`flex aspect-square flex-col items-center justify-center rounded-2xl border ${tone[s]}`}>
                  <span className="text-2xl font-light">{t}</span>
                  <span className="mt-1 text-[10px] uppercase tracking-widest opacity-70">{s === 'free' ? 'Free' : s === 'busy' ? '4 guests' : '₹1,840'}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="float absolute -bottom-10 -left-6 hidden w-52 rounded-2xl border border-white/10 bg-graphite/95 p-4 font-mono text-[11px] shadow-2xl backdrop-blur sm:block">
            <p className="mb-2 flex justify-between text-gold">
              <span>KOT #58</span>
              <span>T4</span>
            </p>
            <p className="text-pearl/80">2 × Paneer tikka</p>
            <p className="text-pearl/80">3 × Butter naan</p>
            <p className="text-pearl/80">1 × Dal makhani</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ------------------------------------------------------------------ languages

function LanguagesBand() {
  const words = ['English', 'हिन्दी', 'తెలుగు', 'தமிழ்', 'ಕನ್ನಡ', 'മലയാളം', 'मराठी', 'বাংলা', 'ਪੰਜਾਬੀ', 'ગુજરાતી'];
  const row = [...words, ...words];
  return (
    <section className="overflow-hidden py-32">
      <div className="mx-auto mb-16 max-w-3xl px-6 text-center">
        <Kicker>Speaks your language</Kicker>
        <Headline>
          Ten languages. <Accent>One shop.</Accent>
        </Headline>
      </div>
      <div className="relative [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]">
        <div className="marquee flex w-max gap-16 whitespace-nowrap">
          {row.map((w, i) => (
            <span key={i} className={`text-5xl font-light sm:text-7xl ${i % 3 === 1 ? 'gold-text' : 'text-pearl/20'}`}>
              {w}
            </span>
          ))}
        </div>
      </div>
      <p className="mt-16 text-center text-sm font-light text-pearl/45">Each person picks theirs. Invoices stay in English, as GST expects.</p>
    </section>
  );
}

// ------------------------------------------------------------------ plans

function Plans() {
  const plans = [
    { name: 'Basic', for: 'A single counter', items: ['GST & simple bills', 'Items, stock & customers', 'Receipt printing', 'Daily reports'] },
    { name: 'Pro', for: 'Growing shops & restaurants', items: ['Everything in Basic', 'Purchases & suppliers', 'Tables, KOT & tokens', 'Staff roles & activity log', 'Bill scanning'], featured: true },
    { name: 'Enterprise', for: 'Many outlets', items: ['Everything in Pro', 'Several warehouses', 'Priority support', 'Help moving your data in'] },
  ];
  return (
    <section id="plans" className="mx-auto max-w-6xl px-6 py-28">
      <div className="mx-auto mb-20 max-w-2xl text-center">
        <Kicker>Plans</Kicker>
        <Headline>
          Choose your <Accent>counter.</Accent>
        </Headline>
        <p className="mt-6 font-light text-pearl/50">Start with a free trial. Talk to us for the plan that fits.</p>
      </div>
      <div className="grid gap-5 lg:grid-cols-3">
        {plans.map((p) => (
          <div
            key={p.name}
            className={`relative flex flex-col rounded-[28px] p-9 ${p.featured ? 'gold-border shadow-[0_30px_80px_-30px_rgba(214,182,118,0.35)]' : 'border border-white/10 bg-onyx'}`}
          >
            {p.featured && <span className="gold-fill absolute -top-3 left-9 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-void">Most chosen</span>}
            <h3 className={`text-3xl font-light tracking-tight ${p.featured ? 'gold-text' : ''}`}>{p.name}</h3>
            <p className="mt-1 text-sm text-pearl/45">{p.for}</p>
            <div className="hairline my-8" />
            <ul className="flex-1 space-y-3.5">
              {p.items.map((i) => (
                <li key={i} className="flex gap-3 text-sm font-light text-pearl/75">
                  <Check className="mt-0.5 size-4 shrink-0 text-gold" /> {i}
                </li>
              ))}
            </ul>
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`Trinobil ${p.name} plan`)}`}
              className={`mt-10 rounded-full px-6 py-3 text-center text-sm font-semibold transition ${p.featured ? 'gold-fill text-void hover:brightness-110' : 'border border-white/15 hover:border-gold/60 hover:text-champagne'}`}
            >
              Ask about {p.name}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

// ------------------------------------------------------------------ faq

function Faq() {
  const qa: [string, string][] = [
    ['Does it work without internet?', 'Yes. Counter billing keeps working on the phone. Bills are saved there and sent to your account as soon as the internet is back — each gets its proper invoice number then.'],
    ['Which printers can I use?', 'Any common Bluetooth thermal printer (58 mm or 80 mm) with the Android app, and any printer from the browser. An A4 GST invoice PDF can be emailed to customers too.'],
    ['Is my data safe?', 'Every business has its own private space. Each person signs in with their own account, sees only what their role allows, and every change is written to the activity log.'],
    ['Can I use it on a computer?', 'Yes — the web app runs in any modern browser, built for the keyboard and barcode scanner, alongside the Android app.'],
    ['Is GST handled correctly?', 'Bills split CGST and SGST per item, support inclusive and exclusive prices and HSN codes, with a slab-wise GST summary for filing. Not registered? Switch to simple MRP bills.'],
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="mx-auto max-w-3xl px-6 py-28">
      <div className="mb-14 text-center">
        <Kicker>Questions</Kicker>
        <Headline>
          Asked <Accent>often.</Accent>
        </Headline>
      </div>
      <div className="divide-y divide-white/10 border-y border-white/10">
        {qa.map(([q, a], i) => (
          <div key={q}>
            <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between gap-6 py-6 text-left">
              <span className="text-lg font-light">{q}</span>
              <Plus className={`size-5 shrink-0 text-gold transition duration-300 ${open === i ? 'rotate-45' : ''}`} />
            </button>
            <div className={`grid transition-all duration-300 ${open === i ? 'grid-rows-[1fr] pb-6' : 'grid-rows-[0fr]'}`}>
              <p className="overflow-hidden font-light leading-relaxed text-pearl/55">{a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ------------------------------------------------------------------ closing

function Closing() {
  return (
    <section id="download" className="relative overflow-x-clip border-t border-white/5">
      <div className="glow pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[1000px] -translate-x-1/2 -translate-y-1/2" />
      <div className="relative mx-auto max-w-4xl px-6 py-40 text-center">
        <h2 className="text-5xl font-medium leading-[1] tracking-[-0.04em] sm:text-8xl">
          Your counter,
          <br />
          <Accent>elevated.</Accent>
        </h2>
        <div className="mt-14 flex flex-wrap justify-center gap-3">
          <GoldButton href={APP_URL}>Open the web app</GoldButton>
          <GhostButton href={APK_URL}>
            Android app <ArrowUpRight className="size-4" />
          </GhostButton>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 text-sm text-pearl/40 sm:flex-row">
        <Wordmark />
        <a className="transition hover:text-champagne" href={`mailto:${CONTACT_EMAIL}`}>
          {CONTACT_EMAIL}
        </a>
        <p>© {new Date().getFullYear()} Trinobil · Made in India</p>
      </div>
    </footer>
  );
}
