import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { imagePaths } from "@/data/products";

export function LeatherPageTransition() {
  const [location] = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    const timer = window.setTimeout(() => setVisible(false), 620);
    return () => window.clearTimeout(timer);
  }, [location]);

  return <div className={`page-black-transition pointer-events-none fixed inset-0 z-[100] ${visible ? "is-visible" : "is-hidden"}`} aria-hidden="true">
    <div className="transition-brand-lockup absolute inset-0 flex flex-col items-center justify-center">
      <div className="transition-logo-ring grid size-[76px] place-items-center rounded-full border border-[#d4b491]/45">
        <img src={imagePaths.logo} alt="Turco Pelle" className="size-[52px] object-contain" />
      </div>
      <span className="mt-5 font-sans text-[9px] font-semibold uppercase tracking-[0.34em] text-[#d4b491]/75">Turco Pelle</span>
      <span className="transition-loading-line mt-6 h-px w-24 bg-[#d4b491]/25"><span /></span>
    </div>
  </div>;
}
