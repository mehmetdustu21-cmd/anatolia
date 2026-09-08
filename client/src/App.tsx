import { useEffect } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/Products";
import Sustainability from "./pages/Sustainability";
import About from "./pages/About";
import Landing from "./pages/Landing";
import { I18nProvider, useI18n } from "./i18n";
import { LeatherPageTransition } from "./components/LeatherPageTransition";

function Router() {
  return <Switch><Route path="/" component={Home} /><Route path="/products" component={Products} /><Route path="/products/:slug" component={ProductDetail} /><Route path="/sustainability" component={Sustainability} /><Route path="/contact" component={Contact} /><Route path="/about" component={About} /><Route path="/markets/:market" component={Landing} /><Route path="/sectors/:sector" component={Landing} /><Route path="/:lang" component={Home} /><Route path="/:lang/products" component={Products} /><Route path="/:lang/products/:slug" component={ProductDetail} /><Route path="/:lang/sustainability" component={Sustainability} /><Route path="/:lang/contact" component={Contact} /><Route path="/:lang/about" component={About} /><Route path="/:lang/markets/:market" component={Landing} /><Route path="/:lang/sectors/:sector" component={Landing} /><Route path="/404" component={NotFound} /><Route component={NotFound} /></Switch>;
}

function LocaleSeo() {
  const [location] = useLocation();
  const { language } = useI18n();
  useEffect(() => {
    const pathname = location.split("?")[0] || "/";
    const labels: Record<string, string> = { en: "Turkish leather / European supply", de: "Türkisches Leder / europäische Versorgung", it: "Pelle turca / fornitura europea" };
    const descriptions: Record<string, string> = { en: "Premium Turkish leather, developed in Istanbul since 1999 and supplied to European makers.", de: "Premium türkisches Leder, seit 1999 in Istanbul entwickelt und an europäische Hersteller geliefert.", it: "Pelle turca premium, sviluppata a Istanbul dal 1999 e fornita ai produttori europei." };
    document.documentElement.lang = language;
    document.title = `Turco Pelle — ${labels[language]}`;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement("meta"); meta.setAttribute("name", "description"); document.head.appendChild(meta); }
    meta.setAttribute("content", descriptions[language]);
    const base = window.location.origin;
    const cleanPath = pathname.replace(/^\/(en|de|it)(?=\/|$)/, "") || "/";
    document.querySelectorAll('link[data-hreflang], link[data-canonical]').forEach((node) => node.remove());
    (["en", "de", "it"] as const).forEach((code) => { const link = document.createElement("link"); link.rel = "alternate"; link.hreflang = code; link.href = `${base}/${code}${cleanPath === "/" ? "" : cleanPath}`; link.setAttribute("data-hreflang", code); document.head.appendChild(link); });
    const canonical = document.createElement("link"); canonical.rel = "canonical"; canonical.href = `${base}/${language}${cleanPath === "/" ? "" : cleanPath}`; canonical.setAttribute("data-canonical", "true"); document.head.appendChild(canonical);
  }, [language, location]);
  return null;
}

export default function App() {
  return <ErrorBoundary><ThemeProvider defaultTheme="light"><I18nProvider><TooltipProvider><Toaster /><LocaleSeo /><LeatherPageTransition /><Router /></TooltipProvider></I18nProvider></ThemeProvider></ErrorBoundary>;
}
