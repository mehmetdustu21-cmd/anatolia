import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { catalogPath, contactDetails, footerCta, footerCtaHref, footerCtaSubline, footerDescriptor, footerLinks, legalLinks, navItems, pageLinks, brandMark, companyLine, quickContact, socialLinks, currentYear, brand, navAria, ariaLabels, imagePaths } from "@/data/products";
import { languageOptions, useI18n } from "@/i18n";

export function BrandMark({ compact = false }: { compact?: boolean }) {
  const { localizedPath } = useI18n();
  return (
    <Link href={localizedPath(pageLinks.home)} aria-label={ariaLabels.brand} className="group inline-flex items-center gap-3">
      <span className={`grid place-items-center overflow-hidden rounded-full border border-current/35 transition-transform duration-300 group-hover:rotate-[-8deg] ${compact ? "size-8" : "size-10"}`}><img src={imagePaths.logo} alt={`${brand.name} AH`} className="h-full w-full object-contain p-1" /></span>
      {!compact && <span className="font-serif text-[21px] leading-none tracking-[-0.02em]">{brand.name}</span>}
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();
  const { t, language, setLanguage, localizedPath } = useI18n();
  const translatedNav = [{ label: t.navMaterials, href: "/products" }, { label: t.navSustainability, href: "/sustainability" }, { label: t.navAbout, href: "/about" }, { label: t.navContact, href: "/contact" }];

  useEffect(() => setOpen(false), [location]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#ded6ca]/80 bg-[#f3efe8]/94 text-[#1b1916] shadow-[0_10px_40px_rgba(30,20,10,0.06)] backdrop-blur-xl">
      <div className="mx-auto flex h-[78px] max-w-[1440px] items-center justify-between px-5 md:px-10 lg:px-14">
        <BrandMark />
        <nav aria-label={navAria} className="hidden items-center gap-8 lg:flex">
          {translatedNav.map((item) => <Link key={item.href} href={localizedPath(item.href)} className="group relative font-sans text-[11px] font-semibold uppercase tracking-[0.19em] opacity-80 transition-opacity hover:opacity-100">{item.label}<span className="absolute -bottom-2 left-0 h-px w-0 bg-current transition-all duration-300 group-hover:w-full" /></Link>)}
        </nav>
        <div className="hidden items-center gap-5 lg:flex">
          <span className="font-sans text-[10px] uppercase tracking-[0.2em] opacity-55">{t.exportDesk}</span>
          <div className="flex items-center gap-3"><select aria-label="Language" value={language} onChange={(event) => setLanguage(event.target.value as "en" | "de" | "it")} className="bg-transparent font-sans text-[10px] font-semibold tracking-[0.16em] outline-none"><option value="en">EN</option><option value="de">DE</option><option value="it">IT</option></select><Link href={localizedPath("/contact?enquiry=Request%20a%20sample")} className="inline-flex items-center gap-2 rounded-full border border-[#1b1916]/25 px-4 py-2.5 font-sans text-[10px] font-semibold uppercase tracking-[0.16em] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1b1916] hover:text-[#f3efe8]">{t.requestSample} <ArrowUpRight size={13} strokeWidth={1.5} /></Link></div>
        </div>
        <button type="button" className="grid size-10 place-items-center lg:hidden" aria-label={open ? ariaLabels.close : ariaLabels.menu} onClick={() => setOpen((value) => !value)}>{open ? <X size={21} strokeWidth={1.25} /> : <Menu size={21} strokeWidth={1.25} />}</button>
      </div>
      <div className={`overflow-hidden border-t border-current/10 bg-[#171513] text-[#f3efe8] transition-[max-height,opacity] duration-500 lg:hidden ${open ? "max-h-[460px] opacity-100" : "max-h-0 opacity-0"}`}>
        <nav className="flex flex-col gap-7 px-6 py-8" aria-label={navAria}>
          {translatedNav.map((item, index) => <Link key={item.href} href={localizedPath(item.href)} className="flex items-center justify-between font-serif text-3xl tracking-[-0.03em]"><span>{item.label}</span><span className="font-sans text-[10px] uppercase tracking-[0.2em] opacity-50">0{index + 1}</span></Link>)}
          <div className="mt-2 flex items-center gap-4"><Link href={localizedPath("/contact?enquiry=Request%20a%20sample")} className="inline-flex w-fit items-center gap-2 rounded-full border border-[#c8a98b]/50 px-4 py-3 font-sans text-[10px] font-semibold uppercase tracking-[0.16em]">{t.requestSample} <ArrowUpRight size={14} /></Link><select aria-label="Language" value={language} onChange={(event) => setLanguage(event.target.value as "en" | "de" | "it")} className="bg-transparent font-sans text-[10px] font-semibold tracking-[0.16em] text-[#f3efe8] outline-none"><option className="bg-[#211a15]" value="en">EN</option><option className="bg-[#211a15]" value="de">DE</option><option className="bg-[#211a15]" value="it">IT</option></select></div>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  const { t, localizedPath } = useI18n();
  return (
    <footer className="bg-[#151310] text-[#f3efe8]">
      <div className="mx-auto max-w-[1440px] px-5 pb-8 pt-20 md:px-10 md:pt-28 lg:px-14">
        <div className="grid gap-14 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <span className="mb-7 block font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-[#b99b79]">{footerDescriptor}</span>
            <h2 className="max-w-[620px] font-serif text-5xl leading-[0.92] tracking-[-0.04em] md:text-7xl">{footerCta}</h2>
            <p className="mt-7 max-w-[340px] font-sans text-sm leading-7 text-[#f3efe8]/55">{brand.name} connects Istanbul craft with considered products across Europe.</p>
            <Link href={footerCtaHref} className="mt-9 inline-flex items-center gap-3 border-b border-[#b99b79] pb-2 font-sans text-[11px] font-semibold uppercase tracking-[0.19em] text-[#d4b491] transition-colors hover:text-white">{footerCtaSubline} <ArrowUpRight size={14} /></Link>
          </div>
          <div>
            <p className="mb-6 font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-[#f3efe8]/35">{t.footerExplore}</p>
            <div className="flex flex-col items-start gap-4"><Link href={localizedPath("/products")} className="font-serif text-xl tracking-[-0.02em] text-[#f3efe8]/82 transition-colors hover:text-[#d4b491]">{t.navMaterials}</Link><Link href={localizedPath("/sustainability")} className="font-serif text-xl tracking-[-0.02em] text-[#f3efe8]/82 transition-colors hover:text-[#d4b491]">{t.navSustainability}</Link><Link href={localizedPath("/about")} className="font-serif text-xl tracking-[-0.02em] text-[#f3efe8]/82 transition-colors hover:text-[#d4b491]">{t.navAbout}</Link><Link href={localizedPath("/markets/italy")} className="font-serif text-xl tracking-[-0.02em] text-[#f3efe8]/82 transition-colors hover:text-[#d4b491]">Italy / Germany / UK</Link><Link href={localizedPath("/sectors/footwear")} className="font-serif text-xl tracking-[-0.02em] text-[#f3efe8]/82 transition-colors hover:text-[#d4b491]">Footwear / Leather goods</Link><a href={catalogPath} target="_blank" rel="noreferrer" className="font-serif text-xl tracking-[-0.02em] text-[#d4b491] transition-colors hover:text-white">Download material overview ↗</a><Link href={localizedPath("/contact?enquiry=Request%20a%20sample")} className="font-serif text-xl tracking-[-0.02em] text-[#f3efe8]/82 transition-colors hover:text-[#d4b491]">{t.requestSample}</Link><Link href={localizedPath("/contact?enquiry=Get%20a%20quote")} className="font-serif text-xl tracking-[-0.02em] text-[#f3efe8]/82 transition-colors hover:text-[#d4b491]">{t.getQuote}</Link></div>
          </div>
          <div>
            <p className="mb-6 font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-[#f3efe8]/35">Direct desk</p>
            <div className="space-y-5 font-sans text-sm text-[#f3efe8]/70">
              <a href={quickContact.istanbulTel} className="block transition-colors hover:text-[#d4b491]"><span className="mb-1 block text-[10px] uppercase tracking-[0.18em] text-[#f3efe8]/35">{contactDetails.istanbul}</span>{contactDetails.istanbul}</a>
              <a href={quickContact.switzerlandTel} className="block transition-colors hover:text-[#d4b491]"><span className="mb-1 block text-[10px] uppercase tracking-[0.18em] text-[#f3efe8]/35">{companyLine}</span>{contactDetails.switzerland}</a>
            </div>
            <div className="mt-8 flex gap-5">{socialLinks.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className="font-sans text-[10px] uppercase tracking-[0.18em] text-[#f3efe8]/55 transition-colors hover:text-[#d4b491]">{social.label}</a>)}</div>
          </div>
        </div>
        <div className="mt-20 flex flex-col justify-between gap-4 border-t border-white/10 pt-5 font-sans text-[10px] uppercase tracking-[0.17em] text-[#f3efe8]/35 md:flex-row"><span>© {currentYear} Anatolia Hides Istanbul</span><span>{brand.location} · Switzerland</span><div className="flex gap-4">{legalLinks.map((link) => <span key={link}>{link}</span>)}</div></div>
      </div>
    </footer>
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen bg-[#f3efe8] pb-16 text-[#1b1916]"><SiteHeader />{children}<SiteFooter /><StickyB2BBar /></div>;
}

export function StickyB2BBar() {
  const { t, localizedPath } = useI18n();
  return <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[#211a15]/96 px-4 py-2.5 text-[#f3efe8] shadow-[0_-12px_30px_rgba(20,15,10,0.16)] backdrop-blur-xl"><div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4"><span className="hidden font-sans text-[10px] uppercase tracking-[0.18em] text-white/50 md:block">B2B export desk / Istanbul · Switzerland</span><div className="ml-auto flex items-center gap-3"><a href="https://wa.me/905368476521" target="_blank" rel="noreferrer" className="font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-[#d4b491] transition-colors hover:text-white">WhatsApp</a><span className="text-white/20">·</span><Link href={localizedPath("/contact?enquiry=Request%20a%20sample")} className="rounded-full bg-[#d8b999] px-4 py-2 font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-[#211a15] transition-transform hover:-translate-y-0.5">{t.requestSample}</Link></div></div></div>;
}

export function SectionLabel({ number, children, light = false }: { number?: string; children: React.ReactNode; light?: boolean }) {
  return <div className={`flex items-center gap-3 font-sans text-[10px] font-semibold uppercase tracking-[0.22em] ${light ? "text-white/55" : "text-[#6e5b49]"}`}><span className={`h-px w-8 ${light ? "bg-[#b99b79]/70" : "bg-[#a48566]"}`} />{number && <span className="text-[#a48566]">{number}</span>}{children}</div>;
}

export function AnimatedReveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return <div className={`animate-[riseIn_800ms_cubic-bezier(0.23,1,0.32,1)_both] ${className}`} style={{ animationDelay: `${delay}ms` }}>{children}</div>;
}

export function Breadcrumb({ current }: { current: string }) {
  return <div className="flex items-center gap-2 font-sans text-[10px] uppercase tracking-[0.18em] text-[#8b7b6b]"><Link href="/" className="transition-colors hover:text-[#1b1916]">Home</Link><span className="text-[#b99b79]">/</span><span>{current}</span></div>;
}

export function ArrowLink({ href, children, light = false }: { href: string; children: React.ReactNode; light?: boolean }) {
  return <Link href={href} className={`group inline-flex items-center gap-3 border-b pb-2 font-sans text-[10px] font-semibold uppercase tracking-[0.18em] transition-colors ${light ? "border-white/40 text-white hover:border-[#d4b491] hover:text-[#d4b491]" : "border-[#a48566]/70 text-[#332920] hover:border-[#6f4f37] hover:text-[#815d42]"}`}>{children}<ArrowUpRight size={14} strokeWidth={1.5} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></Link>;
}

export function ImageFrame({ src, alt, className = "", overlay = false, objectPosition = "center" }: { src: string; alt: string; className?: string; overlay?: boolean; objectPosition?: string }) {
  return <div className={`group relative overflow-hidden bg-[#2b211a] ${className}`}><img src={src} alt={alt} loading="lazy" decoding="async" style={{ objectPosition }} className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]" />{overlay && <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-black/10" />}</div>;
}

export function NumberedRule({ number, title, copy }: { number: string; title: string; copy: string }) {
  return <div className="grid grid-cols-[42px_1fr] gap-4 border-t border-[#1b1916]/15 py-5"><span className="font-sans text-[10px] font-semibold tracking-[0.18em] text-[#a48566]">{number}</span><div><h3 className="font-serif text-2xl tracking-[-0.025em]">{title}</h3><p className="mt-2 max-w-sm font-sans text-sm leading-6 text-[#5d534b]">{copy}</p></div></div>;
}

export function PhonePill({ href, label }: { href: string; label: string }) {
  return <a href={href} className="inline-flex items-center gap-2 rounded-full border border-[#b99b79]/40 px-4 py-2 font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-[#d4b491] transition-colors hover:border-[#d4b491] hover:bg-[#d4b491]/10">{label}</a>;
}

// A single chrome module keeps the public-facing shell consistent across pages.
// The design intentionally avoids e-commerce patterns and prioritises direct B2B enquiries.
// End.