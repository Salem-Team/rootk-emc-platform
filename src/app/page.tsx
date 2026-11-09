"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Building2,
  CalendarDays,
  Code2,
  CreditCard,
  Globe,
  LayoutDashboard,
  Package,
  ShieldCheck,
  Smartphone,
  Truck,
  Wrench,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SiteNav } from "@/components/SiteNav";
import { PROPOSAL_ID, content, useLang } from "@/lib/i18n";

const platformIcons = [Smartphone, Truck, LayoutDashboard, Globe, Building2];

export default function HomePage() {
  const { lang, t, dir } = useLang();
  const platforms = content.platforms[lang];
  const modules = content.modules[lang];
  const timeline = content.timeline[lang];
  const terms = content.terms[lang];

  return (
    <div id="top" className="min-h-dvh bg-[#0a1220]" dir={dir}>
      <div className="mx-auto min-h-dvh max-w-[1100px] overflow-hidden bg-paper text-ink shadow-[0_30px_100px_rgba(0,0,0,0.45)] sm:my-0 lg:my-6 lg:rounded-[28px]">
        <SiteNav />

        <section className="relative overflow-hidden px-4 pb-10 pt-6 sm:px-8 sm:pb-14 sm:pt-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_100%_0%,rgba(13,42,110,0.14),transparent_55%),radial-gradient(ellipse_60%_40%_at_0%_100%,rgba(13,42,110,0.08),transparent_50%)]" />
          <div className="relative">
            <motion.div
              key={`hero-top-${lang}`}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="mb-6 flex flex-wrap items-center justify-between gap-3"
            >
              <div className="surface flex items-center gap-3 rounded-2xl px-3 py-2.5">
                <Image src="/rootk-logo.png" alt="ROOTK Systems" width={88} height={82} className="h-12 w-auto" priority />
                <div>
                  <div className="font-en text-xs font-extrabold tracking-[0.14em] text-navy">ROOTK SYSTEMS</div>
                  <div className="text-xs font-semibold text-mute">{t("brandSub")}</div>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-en rounded-full border border-line bg-white px-3 py-1.5 text-[11px] font-extrabold tracking-[0.08em] text-navy">
                  {t("proposalId")}: {PROPOSAL_ID}
                </span>
                <span className="font-en rounded-full border border-line bg-white px-3 py-1.5 text-[11px] font-extrabold tracking-[0.12em] text-navy uppercase">
                  {t("commercialQuotation")}
                </span>
              </div>
            </motion.div>

            <motion.div
              key={`hero-${lang}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="max-w-3xl"
            >
              <div className="mb-4 inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border border-line bg-white px-3 py-1.5 text-sm font-bold text-navy-deep shadow-sm">
                <span className="font-en text-[10px] tracking-[0.1em] text-mute-2 uppercase">{t("presentedTo")}</span>
                <span className="h-3 w-px bg-line" />
                <span className="text-[13px] leading-5">{t("clientPlaceholder")}</span>
              </div>
              <p className="mb-3 text-[11px] font-bold tracking-[0.08em] text-navy uppercase sm:tracking-[0.12em]">
                {t("heroEyebrow")}
              </p>
              <h1 className="font-display mb-3 text-[1.45rem] font-extrabold leading-[1.35] text-navy-deep sm:text-3xl lg:text-[2.15rem]">
                {t("heroTitle")}
              </h1>
              <p className="font-en mb-5 text-base font-bold text-navy-soft sm:text-lg">{t("heroSubtitle")}</p>
              <p className="mb-8 max-w-2xl text-[15px] leading-7 text-mute sm:text-base">{t("heroLede")}</p>
            </motion.div>

            <motion.a
              href="#price"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="navy-grad block rounded-2xl p-5 text-white shadow-xl shadow-navy/25 transition hover:-translate-y-1 sm:p-6"
            >
              <div className="mb-2 font-en text-[10px] font-extrabold tracking-[0.12em] text-white/70 uppercase">
                {t("priceShort")}
              </div>
              <div className="font-en text-3xl font-extrabold tracking-tight sm:text-4xl">
                {t("priceAmount")} <span className="text-base">EGP</span>
              </div>
              <p className="mt-2 text-sm leading-6 text-white/85 sm:text-[15px]">{t("priceWords")}</p>
            </motion.a>

            <div className="navy-grad mt-6 grid grid-cols-2 gap-3 rounded-2xl p-4 text-white sm:grid-cols-4">
              {[
                [t("preparedBy"), "ROOTK Systems"],
                [t("currency"), "EGP"],
                [t("duration"), t("durationValue")],
                [t("proposalId"), PROPOSAL_ID],
              ].map(([label, value]) => (
                <div key={label}>
                  <div className="mb-1 text-[10px] font-bold tracking-[0.08em] text-white/55 uppercase">{label}</div>
                  <div className="text-sm font-semibold break-all">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="overview" className="space-y-5 px-4 py-10 sm:px-8">
          <Reveal>
            <div className="surface rounded-2xl p-5 sm:p-6">
              <p className="mb-2 text-[11px] font-bold tracking-[0.1em] text-navy uppercase">{t("overviewEyebrow")}</p>
              <h2 className="font-display mb-3 text-xl font-extrabold text-navy-deep sm:text-[1.75rem]">{t("overviewTitle")}</h2>
              <div className="mb-4 h-1 w-8 rounded-full bg-navy" />
              <p className="text-[15px] leading-7 text-mute">{t("overviewLede")}</p>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="surface relative overflow-hidden rounded-2xl p-5">
              <span className="absolute inset-y-0 start-0 w-1 bg-navy" />
              <div className="mb-2 flex items-center gap-2">
                <Code2 className="h-5 w-5 text-navy" />
                <h3 className="font-display text-[1.05rem] font-bold text-navy-deep">{t("customTitle")}</h3>
              </div>
              <p className="text-sm leading-7 text-mute">{t("customLede")}</p>
            </div>
          </Reveal>
        </section>

        <section id="platforms" className="space-y-5 border-t border-line/70 bg-white/40 px-4 py-10 sm:px-8">
          <Reveal>
            <div className="surface rounded-2xl p-5">
              <p className="mb-1 text-[11px] font-bold tracking-[0.14em] text-navy uppercase">{t("platformsEyebrow")}</p>
              <h2 className="font-display text-xl font-extrabold text-navy-deep sm:text-2xl">{t("platformsTitle")}</h2>
              <div className="my-3 h-1 w-8 rounded-full bg-navy" />
            </div>
          </Reveal>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {platforms.map((p, i) => {
              const Icon = platformIcons[i] ?? Package;
              return (
                <Reveal key={p.title} delay={(i % 3) * 0.04}>
                  <div className="surface h-full rounded-2xl p-4">
                    <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-navy/8 text-navy">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display mb-1 text-[15px] font-bold text-navy-deep">{p.title}</h3>
                    <p className="text-sm leading-6 text-mute">{p.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </section>

        <section id="modules" className="space-y-5 px-4 py-10 sm:px-8">
          <Reveal>
            <div className="surface rounded-2xl p-5">
              <p className="mb-1 text-[11px] font-bold tracking-[0.14em] text-navy uppercase">{t("modulesEyebrow")}</p>
              <h2 className="font-display text-xl font-extrabold text-navy-deep sm:text-2xl">{t("modulesTitle")}</h2>
              <div className="my-3 h-1 w-8 rounded-full bg-navy" />
            </div>
          </Reveal>
          <div className="grid gap-3 md:grid-cols-2">
            {modules.map((mod, i) => (
              <Reveal key={mod.code} delay={(i % 4) * 0.03}>
                <article className="surface h-full rounded-2xl p-4">
                  <div className="mb-1 flex items-center gap-2">
                    <span className="font-en rounded-md bg-navy/8 px-2 py-0.5 text-[11px] font-extrabold text-navy">
                      {mod.code}
                    </span>
                    <h3 className="font-display text-[15px] font-bold text-navy-deep">{mod.title}</h3>
                  </div>
                  <p className="font-en mb-3 text-[11px] font-semibold text-mute-2">{mod.en}</p>
                  <ul className="dot-list">
                    {mod.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="tech" className="space-y-5 border-t border-line/70 bg-white/40 px-4 py-10 sm:px-8">
          <Reveal>
            <div className="surface rounded-2xl p-5">
              <p className="mb-1 text-[11px] font-bold tracking-[0.14em] text-navy uppercase">{t("techEyebrow")}</p>
              <h2 className="font-display mb-3 text-xl font-extrabold text-navy-deep sm:text-2xl">{t("techTitle")}</h2>
              <div className="mb-4 h-1 w-8 rounded-full bg-navy" />
              <p className="text-sm leading-7 text-mute">{t("techLede")}</p>
            </div>
          </Reveal>
        </section>

        <section id="timeline" className="space-y-5 px-4 py-10 sm:px-8">
          <Reveal>
            <div className="surface rounded-2xl p-5">
              <p className="mb-1 text-[11px] font-bold tracking-[0.14em] text-navy uppercase">{t("timelineEyebrow")}</p>
              <h2 className="font-display text-xl font-extrabold text-navy-deep sm:text-2xl">{t("timelineTitle")}</h2>
              <div className="my-3 h-1 w-8 rounded-full bg-navy" />
              <p className="text-sm leading-6 text-mute">{t("timelineLede")}</p>
              <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-navy/8 px-3 py-1.5 text-sm font-bold text-navy">
                <CalendarDays className="h-4 w-4" />
                <span className="font-en">{t("durationValue")}</span>
              </div>
            </div>
          </Reveal>
          <div className="grid gap-3 sm:grid-cols-2">
            {timeline.map((step, i) => (
              <Reveal key={step} delay={(i % 4) * 0.03}>
                <div className="surface flex gap-3 rounded-2xl p-4">
                  <span className="font-en flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-navy/10 text-sm font-extrabold text-navy">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="pt-1.5 text-sm font-semibold leading-6 text-navy-deep">{step}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="price" className="space-y-5 border-t border-line/70 bg-white/40 px-4 py-10 sm:px-8">
          <Reveal>
            <div className="surface overflow-hidden rounded-2xl">
              <div className="navy-grad p-6 text-white sm:p-8">
                <p className="mb-2 font-en text-[11px] font-extrabold tracking-[0.14em] text-white/65 uppercase">
                  {t("priceEyebrow")}
                </p>
                <h2 className="font-display mb-3 text-2xl font-extrabold sm:text-3xl">{t("priceTitle")}</h2>
                <p className="mb-2 text-sm text-white/80">{t("priceIntro")}</p>
                <div className="font-en text-4xl font-extrabold tracking-tight sm:text-5xl">
                  {t("priceAmount")} <span className="text-xl">EGP</span>
                </div>
                <p className="mt-2 text-sm font-semibold text-white/90">{t("priceWords")}</p>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/75">{t("priceIncludes")}</p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="surface rounded-2xl p-5">
              <div className="mb-4 flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-navy" />
                <h3 className="font-display text-lg font-bold text-navy-deep">{t("paymentsTitle")}</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[560px] border-collapse text-sm">
                  <thead>
                    <tr className="navy-grad text-white">
                      <th className="px-3 py-2.5 text-start font-display">#</th>
                      <th className="px-3 py-2.5 font-display">%</th>
                      <th className="px-3 py-2.5 font-display">EGP</th>
                      <th className="px-3 py-2.5 text-start font-display">{lang === "ar" ? "المرحلة" : "Milestone"}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {content.payments.map((p, i) => (
                      <tr key={p.amount + p.pct} className={i % 2 ? "bg-[#f7f9fc]" : "bg-white"}>
                        <td className="px-3 py-3 font-en font-bold text-navy">{String(i + 1).padStart(2, "0")}</td>
                        <td className="px-3 py-3 text-center font-en font-extrabold text-navy">{p.pct}</td>
                        <td className="px-3 py-3 text-center font-en font-extrabold">{p.amount}</td>
                        <td className="px-3 py-3 text-start font-semibold text-mute">{lang === "ar" ? p.ar : p.en}</td>
                      </tr>
                    ))}
                    <tr className="bg-navy/5">
                      <td className="px-3 py-3 font-bold text-navy-deep" colSpan={2}>
                        {lang === "ar" ? "الإجمالي" : "Total"}
                      </td>
                      <td className="px-3 py-3 text-center font-en font-extrabold text-navy">197,000</td>
                      <td className="px-3 py-3 text-start font-semibold text-navy">100%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>
        </section>

        <section id="warranty" className="space-y-5 px-4 py-10 sm:px-8">
          <Reveal>
            <div className="surface relative overflow-hidden rounded-2xl p-5">
              <span className="absolute inset-y-0 start-0 w-1.5 bg-ok" />
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-ok">
                  <ShieldCheck className="h-5 w-5" />
                </span>
                <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[10px] font-extrabold tracking-[0.08em] text-ok uppercase">
                  12 months
                </span>
              </div>
              <p className="mb-1 text-[11px] font-bold tracking-[0.14em] text-navy uppercase">{t("warrantyEyebrow")}</p>
              <h2 className="font-display mb-3 text-xl font-extrabold text-navy-deep">{t("warrantyTitle")}</h2>
              <p className="text-sm leading-7 text-mute">{t("warrantyLede")}</p>
            </div>
          </Reveal>
        </section>

        <section id="terms" className="space-y-5 border-t border-line/70 bg-white/40 px-4 py-10 sm:px-8">
          <Reveal>
            <h2 className="font-display text-2xl font-extrabold text-navy-deep">{t("termsTitle")}</h2>
          </Reveal>
          <Reveal>
            <div className="surface rounded-2xl p-5">
              <ol className="grid list-decimal gap-3 ps-5 text-sm leading-7 text-mute sm:grid-cols-2">
                {terms.map((term) => (
                  <li key={term}>{term}</li>
                ))}
              </ol>
            </div>
          </Reveal>
          <Reveal>
            <div className="surface rounded-2xl p-5">
              <div className="mb-2 flex items-center gap-2">
                <Wrench className="h-5 w-5 text-navy" />
                <h3 className="font-display text-lg font-bold text-navy-deep">{t("acceptTitle")}</h3>
              </div>
              <p className="text-sm leading-7 text-mute">{t("acceptNote")}</p>
              <p className="font-en mt-3 text-xs font-bold tracking-wide text-mute-2">{PROPOSAL_ID}</p>
            </div>
          </Reveal>
        </section>

        <section className="px-4 pb-10 sm:px-8">
          <Reveal>
            <div className="navy-grad rounded-2xl p-6 text-white sm:p-7">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  <div className="rounded-2xl bg-white px-3 py-2">
                    <Image src="/rootk-logo.png" alt="ROOTK Systems" width={72} height={67} className="h-12 w-auto" />
                  </div>
                  <div>
                    <div className="font-en text-sm font-extrabold tracking-[0.14em]">ROOTK SYSTEMS</div>
                    <p className="font-en mt-1 text-sm text-white/75">{t("footerTagline")}</p>
                    <p className="mt-2 text-sm text-white/80">{t("closingText")}</p>
                  </div>
                </div>
                <div className="text-sm">
                  <div className="mb-1 text-[10px] font-bold tracking-[0.1em] text-white/55 uppercase">{t("footerWeb")}</div>
                  <a
                    href="https://www.rootk-eg.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-en font-semibold text-[#e8c57a] underline decoration-white/30 underline-offset-4 transition hover:text-white"
                  >
                    https://www.rootk-eg.com/
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-line pt-4 text-xs font-semibold text-mute-2">
            <span>ROOTK Systems · EMC Platform · Commercial Proposal</span>
            <span className="font-en tracking-wide">{PROPOSAL_ID}</span>
          </div>
        </section>
      </div>
    </div>
  );
}
