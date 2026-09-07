import { ArrowDown, ArrowUpRight, MapPin, MoveRight } from "lucide-react";
import { Link } from "wouter";
import { useI18n } from "@/i18n";
import { AnimatedReveal, ArrowLink, ImageFrame, NumberedRule, PageShell, SectionLabel } from "@/components/layout/SiteChrome";
import { approachCopy, approachTitle, brand, collectionCards, contactCta, contactDetails, craftImageAlt, craftImageCaption, exportStatement, featuredProducts, firstSectionCopy, firstSectionTitle, heroCopy, heroImageAlt, heroKicker, heroPrimaryHref, heroScrollHint, heroSecondaryHref, heroStats, imagePaths, marketFacts, materialChapters, processHighlights, readApproachLabel, sectionEyebrows, sustainabilityCta, sustainabilityIntro, sustainabilityPillars, sustainabilityQuote, sustainabilitySignature, warehouseCopy, homeMetaTitle } from "@/data/products";

export default function Home() {
  const { t } = useI18n();
  return (
    <PageShell>
      <main>
        <section className="relative flex min-h-[720px] items-end overflow-hidden bg-[#141210] text-white md:min-h-[820px]">
          <div className="absolute inset-0 bg-[#2b211a] bg-cover bg-right bg-no-repeat opacity-95" style={{ backgroundImage: `url(${imagePaths.heroNatural})` }} aria-label={heroImageAlt} role="img" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#10100e]/95 via-[#10100e]/55 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141210] via-transparent to-[#141210]/20" />
          <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 pb-14 pt-48 md:px-10 md:pb-20 lg:px-14">
            <div className="grid gap-12 lg:grid-cols-[1fr_0.34fr] lg:items-end">
              <div>
                <AnimatedReveal><SectionLabel light>{heroKicker}</SectionLabel></AnimatedReveal>
                <AnimatedReveal delay={90}><h1 className="mt-7 max-w-[760px] font-serif text-[clamp(4.5rem,10.5vw,9.5rem)] leading-[0.82] tracking-[-0.065em]">Leather with<br /><em className="font-light text-[#d4b491]">character.</em><br />Crafted for<br className="hidden md:block" /> the world.</h1></AnimatedReveal>
                <AnimatedReveal delay={180}><p className="mt-9 max-w-[390px] font-sans text-sm leading-7 text-white/66">{t.exportDesk}. {heroCopy}</p></AnimatedReveal>
                <AnimatedReveal delay={260}><div className="mt-9 flex flex-wrap items-center gap-6"><Link href={heroPrimaryHref} className="group inline-flex items-center gap-3 rounded-full bg-[#d8b999] px-5 py-3.5 font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-[#201913] transition-all duration-300 hover:-translate-y-1 hover:bg-[#f0d3b0]">{t.requestSample} <ArrowUpRight size={14} /></Link><Link href={heroSecondaryHref} className="group inline-flex items-center gap-3 border-b border-white/35 pb-2 font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-white/80 transition-colors hover:border-white hover:text-white">{t.exploreMaterials} <MoveRight size={15} className="transition-transform group-hover:translate-x-1" /></Link></div></AnimatedReveal>
              </div>
              <div className="flex flex-col gap-8 border-l border-white/20 pl-5 lg:mb-4">
                <span className="font-sans text-[10px] uppercase tracking-[0.22em] text-white/42">{homeMetaTitle.split("|")[0].trim()}</span>
                <div className="space-y-5">{heroStats.map((stat) => <div key={stat.value}><strong className="font-serif text-3xl font-normal tracking-[-0.04em] text-[#d8b999]">{stat.value}</strong><span className="ml-3 font-sans text-[10px] uppercase tracking-[0.16em] text-white/52">{stat.label}</span></div>)}</div>
              </div>
            </div>
            <div className="mt-24 flex items-center gap-3 font-sans text-[10px] uppercase tracking-[0.2em] text-white/42"><ArrowDown size={14} className="animate-bounce" /> {heroScrollHint}</div>
          </div>
        </section>

        <section className="bg-[#f3efe8] px-5 py-24 md:px-10 md:py-36 lg:px-14">
          <div className="mx-auto max-w-[1440px]">
            <div className="grid gap-12 lg:grid-cols-[0.38fr_1fr] lg:gap-24">
              <div><SectionLabel number="01">{t.navAbout}</SectionLabel><p className="mt-8 max-w-[220px] font-sans text-xs leading-6 text-[#77695c]">{firstSectionCopy}</p></div>
              <div><h2 className="max-w-[800px] font-serif text-5xl leading-[0.96] tracking-[-0.05em] md:text-7xl">{firstSectionTitle}</h2><p className="mt-9 max-w-[600px] font-sans text-base leading-8 text-[#655b52]">{approachCopy}</p><div className="mt-12 grid max-w-[850px] gap-3 md:grid-cols-3">{materialChapters.map((item) => <NumberedRule key={item.number} {...item} />)}</div></div>
            </div>
          </div>
        </section>

        <section className="bg-[#211a15] px-5 py-24 text-[#f3efe8] md:px-10 md:py-32 lg:px-14">
          <div className="mx-auto max-w-[1440px]">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end"><div><SectionLabel light number="02">{t.materialLibrary}</SectionLabel><h2 className="mt-7 max-w-[620px] font-serif text-5xl leading-[0.94] tracking-[-0.05em] md:text-7xl">A small view into<br /><em className="font-light text-[#d4b491]">a larger conversation.</em></h2></div><ArrowLink href="/products" light>{t.viewLibrary}</ArrowLink></div>
            <div className="mt-16 grid gap-4 md:grid-cols-3">{collectionCards.map((card, index) => <Link key={card.title} href={card.href} className={`group relative overflow-hidden ${index === 1 ? "md:mt-16" : ""}`}><div className="aspect-[0.78] overflow-hidden"><img src={card.image} alt={card.title} loading="lazy" className="h-full w-full object-cover opacity-82 transition duration-700 group-hover:scale-[1.04] group-hover:opacity-100" /></div><div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent p-6 pt-24"><div className="flex items-end justify-between gap-4"><div><p className="font-sans text-[10px] uppercase tracking-[0.18em] text-[#d4b491]">{card.tag}</p><h3 className="mt-2 font-serif text-4xl tracking-[-0.04em]">{card.title}</h3><p className="mt-2 font-sans text-xs text-white/60">{card.copy}</p></div><span className="grid size-10 shrink-0 place-items-center rounded-full border border-white/30 transition-colors group-hover:border-[#d4b491] group-hover:bg-[#d4b491] group-hover:text-[#211a15]"><ArrowUpRight size={15} /></span></div></div></Link>)}</div>
          </div>
        </section>

        <section className="bg-[#e8dfd3] px-5 py-24 md:px-10 md:py-32 lg:px-14">
          <div className="mx-auto max-w-[1440px]">
            <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-24"><div className="relative"><ImageFrame src={imagePaths.craft} alt={craftImageAlt} className="aspect-[0.86]" /><span className="absolute bottom-5 left-5 font-sans text-[10px] uppercase tracking-[0.2em] text-white/70">{craftImageCaption}</span></div><div><SectionLabel number="03">{t.navSustainability}</SectionLabel><h2 className="mt-7 max-w-[640px] font-serif text-5xl leading-[0.94] tracking-[-0.05em] md:text-7xl">{t.sustainabilityTitle.split(" ").slice(0, 2).join(" ")}<br /><em className="font-light text-[#a27655]">{t.sustainabilityTitle.split(" ").slice(2).join(" ")}</em></h2><p className="mt-8 max-w-[530px] font-sans text-base leading-8 text-[#655b52]">{t.sustainabilityIntro}</p><div className="mt-10 max-w-[600px]">{sustainabilityPillars.map((item) => <NumberedRule key={item.number} {...item} />)}</div><ArrowLink href="/sustainability">{t.viewApproach}</ArrowLink></div></div>
          </div>
        </section>

        <section className="bg-[#f3efe8] px-5 py-24 md:px-10 md:py-32 lg:px-14"><div className="mx-auto max-w-[1440px]"><div className="grid gap-12 lg:grid-cols-[0.42fr_1fr]"><div><SectionLabel number="04">{sectionEyebrows.reach}</SectionLabel><p className="mt-8 max-w-[230px] font-sans text-xs leading-6 text-[#77695c]">{warehouseCopy}</p></div><div><div className="grid gap-4 border-y border-[#1b1916]/15 py-6 md:grid-cols-3">{marketFacts.map((fact) => <div key={fact.label}><strong className="font-serif text-5xl tracking-[-0.06em]">{fact.value}</strong><p className="mt-2 max-w-[130px] font-sans text-[10px] uppercase leading-5 tracking-[0.16em] text-[#796a5c]">{fact.label}</p></div>)}</div><div className="mt-16 flex flex-col justify-between gap-8 md:flex-row md:items-end"><h2 className="max-w-[700px] font-serif text-5xl leading-[0.95] tracking-[-0.05em] md:text-7xl">{exportStatement}</h2><ArrowLink href="/contact">Talk to export sales</ArrowLink></div><div className="mt-16 flex flex-wrap gap-3">{processHighlights.map((item) => <span key={item} className="rounded-full border border-[#1b1916]/15 px-4 py-2.5 font-sans text-[10px] uppercase tracking-[0.16em] text-[#6e5b49]">{item}</span>)}</div></div></div></div></section>

        <section className="bg-[#151310] px-5 py-24 text-[#f3efe8] md:px-10 md:py-32 lg:px-14"><div className="mx-auto max-w-[1440px]"><div className="grid gap-12 lg:grid-cols-[1fr_0.55fr] lg:items-end"><div><SectionLabel light>Direct enquiry</SectionLabel><h2 className="mt-7 max-w-[780px] font-serif text-6xl leading-[0.9] tracking-[-0.06em] md:text-8xl">The right material<br /><em className="font-light text-[#d4b491]">changes everything.</em></h2></div><div className="lg:pb-2"><p className="max-w-[330px] font-sans text-sm leading-7 text-white/55">{contactCta}. Samples, quotes and technical discussions — handled by a real export desk.</p><div className="mt-8 flex flex-wrap gap-3"><Link href="/contact?enquiry=Request%20a%20sample" className="inline-flex items-center gap-3 rounded-full bg-[#d8b999] px-5 py-3.5 font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-[#201913] transition-transform hover:-translate-y-1">Request a sample <ArrowUpRight size={14} /></Link><Link href="/contact?enquiry=Get%20a%20quote" className="inline-flex items-center gap-3 rounded-full border border-white/30 px-5 py-3.5 font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:border-white">Get a quote</Link></div><div className="mt-8 flex flex-wrap gap-3"><a href={`tel:${contactDetails.istanbul.replaceAll(" ", "")}`} className="font-sans text-xs text-white/45 transition-colors hover:text-[#d4b491]">{contactDetails.istanbul}</a><span className="text-white/20">·</span><a href={`tel:${contactDetails.switzerland.replaceAll(" ", "")}`} className="font-sans text-xs text-white/45 transition-colors hover:text-[#d4b491]">{contactDetails.switzerland}</a></div></div></div></div></section>
      </main>
    </PageShell>
  );
}

// Home is intentionally editorial: it sells confidence, not inventory.
// No pricing, cart or checkout primitives are present.
// End.
