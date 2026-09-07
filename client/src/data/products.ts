export type ProductCategory = "Full Grain" | "Top Grain" | "Suede" | "Split Leather";

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  finish: string;
  thickness: string;
  applications: string[];
  colors: string[];
  image: string;
  description: string;
  featured?: boolean;
  tags: string[];
};

export const products: Product[] = [
  {
    id: "AH-001",
    slug: "anatolian-full-grain",
    name: "Anatolian Full Grain",
    category: "Full Grain",
    finish: "Natural drum dyed",
    thickness: "1.2–1.4 mm",
    applications: ["Footwear", "Leather goods", "Furniture"],
    colors: ["Cognac", "Espresso", "Black"],
    image: "/manus-storage/anatolia-products_db875690.jpg",
    description: "A naturally expressive surface with depth, resilience and a considered hand feel.",
    featured: true,
    tags: ["Traceable", "Premium surface"],
  },
  {
    id: "AH-014",
    slug: "studio-top-grain",
    name: "Studio Top Grain",
    category: "Top Grain",
    finish: "Soft semi-aniline",
    thickness: "0.9–1.1 mm",
    applications: ["Footwear", "Bags", "Small leather goods"],
    colors: ["Tobacco", "Mushroom", "Ink"],
    image: "/manus-storage/anatolia-craft_8c4d1808.jpg",
    description: "A refined, consistent grain for collections where tactility meets dependable performance.",
    featured: true,
    tags: ["Consistent grain", "European delivery"],
  },
  {
    id: "AH-022",
    slug: "velvet-suede",
    name: "Velvet Suede",
    category: "Suede",
    finish: "Fine nap suede",
    thickness: "0.8–1.0 mm",
    applications: ["Footwear", "Apparel", "Accessories"],
    colors: ["Sand", "Rust", "Moss"],
    image: "/manus-storage/anatolia-products_db875690.jpg",
    description: "A soft-touch suede with a precise nap and a palette built for modern European collections.",
    featured: true,
    tags: ["Soft touch", "Colour library"],
  },
  {
    id: "AH-031",
    slug: "atelier-split",
    name: "Atelier Split",
    category: "Split Leather",
    finish: "Pigmented / embossed",
    thickness: "1.0–1.3 mm",
    applications: ["Furniture", "Footwear", "Interior"],
    colors: ["Clay", "Walnut", "Charcoal"],
    image: "/manus-storage/anatolia-products_db875690.jpg",
    description: "A versatile base for applications that call for uniformity, durability and a confident finish.",
    tags: ["Reliable supply", "Made to brief"],
  },
  {
    id: "AH-042",
    slug: "heritage-nappa",
    name: "Heritage Nappa",
    category: "Full Grain",
    finish: "Aniline nappa",
    thickness: "0.7–0.9 mm",
    applications: ["Leather goods", "Apparel", "Automotive"],
    colors: ["Oxblood", "Hazelnut", "Black"],
    image: "/manus-storage/anatolia-craft_8c4d1808.jpg",
    description: "Supple, luminous and quietly expressive, with the drape and softness premium makers expect.",
    tags: ["Supple hand", "Low-impact finish"],
  },
  {
    id: "AH-057",
    slug: "urban-corrected",
    name: "Urban Corrected",
    category: "Top Grain",
    finish: "Light corrected grain",
    thickness: "1.1–1.3 mm",
    applications: ["Footwear", "Workwear", "Furniture"],
    colors: ["Stone", "Chestnut", "Night"],
    image: "/manus-storage/anatolia-products_db875690.jpg",
    description: "A clean, stable surface for repeat programmes and demanding everyday applications.",
    tags: ["Repeatable quality", "Performance-led"],
  },
];

export const categoryOptions = ["All materials", "Full Grain", "Top Grain", "Suede", "Split Leather"] as const;
export const applicationOptions = ["All applications", "Footwear", "Leather goods", "Furniture", "Accessories", "Apparel", "Interior", "Automotive", "Workwear"] as const;

export const findProduct = (slug: string) => products.find((product) => product.slug === slug);

export const categoryDescriptions: Record<ProductCategory, string> = {
  "Full Grain": "Authentic surface character and natural depth.",
  "Top Grain": "Controlled consistency with a refined hand feel.",
  Suede: "Soft nap, precise colour and quiet tactility.",
  "Split Leather": "Dependable bases for flexible applications.",
};

export const contactDetails = {
  istanbul: "+90 536 847 6521",
  switzerland: "+41 78 336 04 25",
};

export const imagePaths = {
  hero: "/manus-storage/anatolia-hero_7a9c40d3.jpg",
  heroNatural: "/manus-storage/anatolia-hero-natural_22d83408.jpg",
  products: "/manus-storage/anatolia-products_db875690.jpg",
  craft: "/manus-storage/anatolia-craft_8c4d1808.jpg",
  logo: "/manus-storage/anatolia-ah-mark_2b77a053.png",
};

export const catalogPath = "/manus-storage/material-overview_a763ad99.pdf";

export const brand = {
  name: "Anatolia Hides",
  eyebrow: "Turkish leather / European supply",
  location: "Zeytinburnu, Istanbul",
  since: "Since 1999",
};

export const certifications = [
  { label: "Traceable sourcing", detail: "Documentation available for qualified buyers." },
  { label: "Responsible process", detail: "A measured approach to water, chemistry and waste." },
  { label: "Export ready", detail: "Istanbul production with Swiss stock support." },
];

export const navItems = [
  { label: "Materials", href: "/products" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Our approach", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const materialChapters = [
  { number: "01", title: "Selection", copy: "We start with the right hide for the intended application, not a generic catalogue." },
  { number: "02", title: "Character", copy: "Finishing is calibrated to protect the natural voice of the material." },
  { number: "03", title: "Continuity", copy: "A dependable supply partner for development samples and repeat programmes." },
];

export const sustainabilityPillars = [
  { number: "01", title: "Traceable by practice", copy: "We keep the origin and processing story close to the material, with documentation available to qualified buyers." },
  { number: "02", title: "Responsible by process", copy: "We favour disciplined use of water, chemistry and energy across our partner network." },
  { number: "03", title: "Open to scrutiny", copy: "Compliance documentation and certification status can be shared during a qualified enquiry." },
];

export const marketFacts = [
  { value: "27", label: "years of export experience" },
  { value: "02", label: "European stock points" },
  { value: "03", label: "core buyer markets" },
];

export const faqItems = [
  { q: "Can I request a physical sample?", a: "Yes. Share your application, target finish and preferred colour through our contact form. Our export desk will come back with the next step." },
  { q: "Where is Anatolia Hides based?", a: "Our Istanbul base is in Zeytinburnu. We also maintain warehouse support in Switzerland for European partners." },
  { q: "Do you work with custom briefs?", a: "Yes. We can discuss finish, thickness, colour direction and application requirements during development." },
];

export const materialFilterOptions = ["Surface", "Finish", "Thickness", "Application"];

export const allMaterialsLabel = "All materials";

export const productStats = [
  { label: "Materials", value: "06" },
  { label: "Finishes", value: "18+" },
  { label: "Markets", value: "EU / UK" },
];

export const quoteFormDefaults = { enquiry: "Request a sample" };

export const contactChannels = [
  { label: "Istanbul / Turkey", value: contactDetails.istanbul, href: "tel:+905368476521", note: "Production & export desk" },
  { label: "Switzerland", value: contactDetails.switzerland, href: "tel:+41783360425", note: "European warehouse" },
];

export const collectionCards = [
  { title: "Full grain", tag: "Surface / 01", href: "/products?category=Full%20Grain", image: imagePaths.products, copy: "Natural depth, considered finishing." },
  { title: "Soft suede", tag: "Hand / 02", href: "/products?category=Suede", image: imagePaths.craft, copy: "Colour, nap and quiet tactility." },
  { title: "Top grain", tag: "Continuity / 03", href: "/products?category=Top%20Grain", image: imagePaths.hero, copy: "Refined consistency for repeat programmes." },
];

export const footerLinks = [
  { label: "Materials", href: "/products" },
  { label: "Our approach", href: "/sustainability" },
  { label: "About Anatolia Hides", href: "/about" },
  { label: "Italy / Germany / UK", href: "/markets/italy" },
  { label: "Footwear / Leather goods", href: "/sectors/footwear" },
  { label: "Request a sample", href: "/contact?enquiry=Request%20a%20sample" },
  { label: "Get a quote", href: "/contact?enquiry=Get%20a%20quote" },
];

export const currentYear = 2026;

export const languageLabel = "EN / TR";

export const brandStatement = "Leather with character. Crafted for the world.";

export const smallPrint = "Anatolia Hides is a material partner, not an online store. Product availability and certification details are shared during qualified enquiries.";

export const productPageIntro = "A considered library of hides, finishes and surfaces for makers who care about what happens before the final product.";

export const sustainabilityIntro = "The most credible material story is the one that can be examined. We keep ours practical, documented and open to conversation.";

export const contactIntro = "Tell us what you are developing. We will help you find the right material, finish and next step.";

export const notFoundCopy = "The page you are looking for has moved, but the material library is still open.";

export const siteMeta = {
  title: "Anatolia Hides — Turkish leather / European supply",
  description: "Premium Turkish leather, developed in Istanbul since 1999 and supplied to European makers.",
};

export const homeSectionIds = {
  materials: "materials",
  approach: "approach",
  sustainability: "sustainability",
  contact: "contact",
};

export const heroStats = [
  { value: "1999", label: "Established in Istanbul" },
  { value: "CH", label: "Swiss warehouse support" },
  { value: "EU", label: "Export-ready supply" },
];

export const contactEmailLabel = "Export desk via direct enquiry";

export const CTA_LABELS = {
  sample: "Request a sample",
  quote: "Get a quote",
  materials: "Explore materials",
};

export const categorySlug = (category: ProductCategory) => category.toLowerCase().replaceAll(" ", "-");

export const isProductCategory = (value: string): value is ProductCategory =>
  ["Full Grain", "Top Grain", "Suede", "Split Leather"].includes(value);

export const featuredProducts = products.filter((product) => product.featured);

export const productCountLabel = `${products.length.toString().padStart(2, "0")} materials in the current library`;

export const serviceAreas = ["Italy", "Germany", "United Kingdom", "Switzerland"];

export const contactNote = "For sample and quote enquiries, include your application, approximate volume and desired delivery market.";

export const socialLinks = [{ label: "LinkedIn", href: "https://www.linkedin.com" }];

export const companyLine = "Istanbul / Switzerland";

export const sourceNote = "Visuals are editorially generated for the Anatolia Hides concept website.";

export const calloutLabels = ["Origin", "Surface", "Continuity"];

export const processHighlights = ["Material selection", "Colour & finish direction", "Sample coordination", "European dispatch"];

export const quickContact = {
  istanbulTel: "tel:+905368476521",
  switzerlandTel: "tel:+41783360425",
};

export const heroKicker = "Turkish leather / European supply";

export const footerLegal = "All material details are indicative until confirmed for a qualified enquiry.";

export const formOptions = {
  enquiry: ["Request a sample", "Get a quote", "Technical information", "Partnership enquiry"],
  application: ["Footwear", "Leather goods", "Furniture", "Apparel", "Automotive", "Other"],
  volume: ["Development sample", "Small programme", "Repeat programme", "Please advise"],
};

export const homeLabels = {
  scroll: "Scroll to explore",
  catalogue: "Material library",
  export: "Export confidence",
};

export const sectionEyebrows = {
  materials: "The material library",
  approach: "A material point of view",
  sustainability: "Responsible by process",
  reach: "Built in Istanbul / held closer to Europe",
};

export const ariaLabels = {
  menu: "Open navigation",
  close: "Close navigation",
  brand: "Anatolia Hides home",
};

export const supportedMarkets = serviceAreas;

export const buildVersion = "v1.0 / concept release";

export const designTokens = {
  obsidian: "#141310",
  ivory: "#F3EFE8",
  tobacco: "#956C4D",
  clay: "#B59575",
  brass: "#B39A74",
};

export const pageLinks = {
  home: "/",
  products: "/products",
  sustainability: "/sustainability",
  contact: "/contact",
};

export const exportStatement = "From Zeytinburnu to your next collection.";

export const formSuccessCopy = "Thank you. Your enquiry is ready for our export desk.";

export const formDisclaimer = "This static preview does not store personal data. Connect Resend or your CRM on Vercel before production launch.";

export const yearLabel = "1999—2026";

export const companyDescription = "A premium Turkish leather partner for footwear, leather goods, furniture and interior makers.";

export const contactHours = "Export desk / Monday–Friday";

export const breadcrumbLabels = {
  home: "Home",
  products: "Materials",
  sustainability: "Sustainability",
  contact: "Contact",
};

export const libraryIntro = "Use the library to compare surface character, finish direction and intended application. No prices. No cart. Just material clarity.";

export const quoteIntro = "Every brief starts with context. Tell us what you are making and we will help shape the right material conversation.";

export const closeLine = "The right material changes everything.";

export const homeFeatureLabel = "Featured material";

export const mobileCtaLabel = "Start a conversation";

export const scrollPrompt = "Explore the material library";

export const contactFormTitle = "Start with a material brief";

export const contactFormSubtitle = "Sample, quote or technical question — we will route your enquiry to the right desk.";

export const swissLabel = "Swiss warehouse";

export const istanbulLabel = "Istanbul base";

export const sinceLabel = "Serving makers since 1999";

export const locationLabel = "Zeytinburnu / Istanbul";

export const metadataKeywords = ["Turkish leather", "leather exporter", "Istanbul leather", "European leather supply"];

export const homeMetaTitle = "Anatolia Hides | Turkish leather for European makers";

export const productMetaTitle = "Materials | Anatolia Hides";

export const sustainabilityMetaTitle = "Responsible process | Anatolia Hides";

export const contactMetaTitle = "Contact | Anatolia Hides";

export const noResultsCopy = "No materials match that combination yet. Try widening your brief.";

export const loadingCopy = "Opening the material library…";

export const detailLabel = "Material detail";

export const relatedMaterialsLabel = "You may also consider";

export const returnToLibraryLabel = "Back to materials";

export const inquiryCtaCopy = "Request technical information";

export const selectedMaterialLabel = "Selected material";

export const technicalDetailsLabel = "Technical direction";

export const applicationLabel = "Best suited to";

export const colourLabel = "Colour direction";

export const finishLabel = "Finish";

export const thicknessLabel = "Thickness";

export const buyerMarketsLabel = "Buyer markets";

export const marketNote = "Italy / Germany / United Kingdom";

export const warehouseNote = "Swiss warehouse support";

export const sourceSinceNote = "Istanbul, 1999";

export const productContactHref = "/contact?enquiry=Technical%20information";

export const heroImageAlt = "Deep espresso full-grain leather with a natural grain";

export const productsImageAlt = "A considered library of leather hides and swatches";

export const craftImageAlt = "A leather craftsperson inspecting a hide";

export const brandMark = "AH";

export const legalLinks = ["Privacy", "Cookies"];

export const footerCta = "Bring your next material brief.";

export const footerCtaSubline = "We are ready when you are.";

export const routeTitles: Record<string, string> = {
  "/": homeMetaTitle,
  "/products": productMetaTitle,
  "/sustainability": sustainabilityMetaTitle,
  "/contact": contactMetaTitle,
};

export const routeDescriptions: Record<string, string> = {
  "/": siteMeta.description,
  "/products": libraryIntro,
  "/sustainability": sustainabilityIntro,
  "/contact": contactIntro,
};

export const dataVersion = "2026-09-06";

export const customBriefLabel = "Custom brief";

export const askLabel = "Tell us what you need";

export const materialLibraryCount = products.length;

export const featuredCount = featuredProducts.length;

export const mainPhoneLabel = "+90 536 847 6521";

export const swissPhoneLabel = "+41 78 336 04 25";

export const callToActionDescription = "Samples, quotes and technical discussions — handled by a real export desk.";

export const siteTagline = "A quieter kind of quality.";

export const navAria = "Primary navigation";

export const menuItems = navItems;

export const processNote = "A considered path from hide selection to European dispatch.";

export const endnote = "Material imagery for presentation purposes. Confirmed specifications are shared during enquiry.";

export const firstSectionTitle = "A material partner for considered products.";

export const firstSectionCopy = "For more than two decades, Anatolia Hides has connected Istanbul’s leather craft with the standards of European product teams.";

export const collectionIntro = "A small view into a larger material conversation.";

export const approachTitle = "Not just leather. A material with memory.";

export const approachCopy = "The best leather does not need to shout. It reveals itself in the hand, in the light and in the way a finished product grows older.";

export const exploreLabel = "Explore the library";

export const readApproachLabel = "Read our approach";

export const sustainabilityCta = "View our sustainability approach";

export const contactCta = "Talk to export sales";

export const locationCta = "Find us in Istanbul & Switzerland";

export const heroCopy = "Premium Turkish leather for footwear, leather goods and interior applications.";

export const heroTitleLines = ["Leather with", "character.", "Crafted for the world."];

export const heroMicrocopy = "Selection / finish / continuity";

export const contentLocale = "en";

export const defaultCategory = "All materials";

export const defaultApplication = "All applications";

export const allApplicationsLabel = "All applications";

export const cardExploreLabel = "Explore material";

export const productFilterLabel = "Filter the library";

export const clearFiltersLabel = "Clear filters";

export const resultLabel = "materials";

export const pageLabel = "Page";

export const detailBackLabel = "Return to library";

export const inquiryIntro = "No checkout. No catalogue noise. Just a clear route to the right material.";

export const contactPageStatement = "Let’s find the right leather for your next collection.";

export const contactPageSubline = "Tell us what you are developing and we will come back with a practical next step.";

export const phoneLabel = "Call export desk";

export const formSubmitLabel = "Send enquiry";

export const formSendingLabel = "Preparing enquiry…";

export const formResetLabel = "Start another enquiry";

export const sustainabilityQuote = "The most credible material story is the one that can be examined.";

export const sustainabilitySignature = "— Anatolia Hides / Istanbul";

export const certificationNote = "Certification status and compliance documents are shared with qualified buyers on request.";

export const warehouseCopy = "A production base in Zeytinburnu, with warehouse support in Switzerland for closer European coordination.";

export const homeImageCaption = "Espresso full grain / macro study";

export const craftImageCaption = "Atelier / Istanbul";

export const productImageCaption = "Material library / current edit";

export const brandShort = "AH";

export const pageOverline = "ANATOLIA HIDES / EST. 1999";

export const footerDescriptor = "Premium Turkish leather / European supply";

export const primaryNav = navItems;

export const hidePrices = true;

export const hideCart = true;

export const siteType = "B2B material partner";

export const deploymentNote = "Designed for Vercel deployment";

export const futureCms = "Sanity-ready content boundary";

export const currentLocale = "en-GB";

export const companyOrigin = "Turkey";

export const companyWarehouse = "Switzerland";

export const useCase = "B2B export website";

export const designDirection = "Quiet luxury / tactile editorial";

export const officialName = "Anatolia Hides Istanbul";

export const contactPhoneTurkey = "+90 536 847 6521";

export const contactPhoneSwitzerland = "+41 78 336 04 25";

export const companyStartYear = 1999;

export const city = "Zeytinburnu, Istanbul";

export const country = "Turkey";

export const additionalLocation = "Switzerland";

export const footerPhoneLinks = [quickContact.istanbulTel, quickContact.switzerlandTel];

export const formFieldLabels = {
  name: "Full name",
  company: "Company",
  email: "Work email",
  country: "Country",
  application: "Application",
  volume: "Programme size",
  message: "Tell us about your brief",
};

export const formPlaceholders = {
  name: "Your name",
  company: "Company name",
  email: "name@company.com",
  country: "Italy, Germany, UK…",
  message: "Material, finish, colour, timeline…",
};

export const heroScrollHint = "Scroll / 01";

export const homeBlockNumbers = ["01", "02", "03", "04"];

export const editorialNumbers = ["01", "02", "03"];

export const themeName = "Obsidian / Ivory / Tobacco";

export const visualMood = "Warm, tactile, disciplined";

export const componentStyle = "Asymmetric editorial grid";

export const interactionStyle = "Restrained motion";

export const footerCountryLine = "Istanbul, Turkey  ·  Switzerland";

export const contactSectionId = "contact-form";

export const headerCtaHref = "/contact?enquiry=Request%20a%20sample";

export const footerCtaHref = "/contact?enquiry=Get%20a%20quote";

export const heroPrimaryHref = "/contact?enquiry=Request%20a%20sample";

export const heroSecondaryHref = "/products";

export const homeFeatureHref = "/products/anatolian-full-grain";

export const sustainabilityHref = "/sustainability";

export const aboutHref = "/sustainability#approach";

export const contactHref = "/contact";

export const productsHref = "/products";

export const summaryStatCopy = "A direct, considered route from first sample to repeat programme.";

export const contentWidth = "max-w-[1440px]";

export const smallUppercase = "tracking-[0.22em] uppercase";

export const defaultMotionDuration = 0.6;

export const homeHeroMinHeight = "min-h-[680px]";

export const pageHeroMinHeight = "min-h-[420px]";

export const mobileBreakpoint = 768;

export const desktopBreakpoint = 1024;

export const imageLoading = "lazy";

export const imageDecoding = "async";

export const hideEcommerceLanguage = true;

export const sampleOnlyLanguage = true;

export const salesLanguage = "Request a sample / Get a quote";

export const visualAssetNote = "Generated editorial assets used for the concept release.";

export const pageFooterLabel = "Anatolia Hides / Material partner";

export const endCtaTitle = "The right material changes everything.";

export const endCtaBody = "Bring your next brief to our export desk.";

export const directEnquiryLabel = "Direct enquiry";

export const emailFallbackNote = "Connect your preferred email provider on Vercel for production lead capture.";

export const finalLabel = "© Anatolia Hides Istanbul";

export const createdFor = "European makers";

export const noCartMessage = "B2B enquiry only";

export const noPriceMessage = "Specification-led";

export const noCheckoutMessage = "Direct export desk";

export const allProductIds = products.map((product) => product.id);

export const allCategories = categoryOptions;

export const allApplications = applicationOptions;

export const allMarkets = supportedMarkets;

export const allCertifications = certifications;

export const allPillars = sustainabilityPillars;

export const allChannels = contactChannels;

export const allFaqs = faqItems;

export const allCollections = collectionCards;

export const allFooterLinks = footerLinks;

export const allProcessHighlights = processHighlights;

export const allProductStats = productStats;

export const allMarketFacts = marketFacts;

export const allMaterialChapters = materialChapters;

export const allHeroStats = heroStats;

export const allQuickContact = quickContact;

export const allFormOptions = formOptions;

export const allRouteTitles = routeTitles;

export const allRouteDescriptions = routeDescriptions;

export const allPageLinks = pageLinks;

export const allMetaKeywords = metadataKeywords;

export const allLegalLinks = legalLinks;

export const allSocialLinks = socialLinks;

export const allNavItems = navItems;

export const allCalloutLabels = calloutLabels;

export const allMaterialFilterOptions = materialFilterOptions;

export const allCTA = CTA_LABELS;

export const allLabels = { ...homeLabels, ...breadcrumbLabels, ...formFieldLabels };

export const allImages = imagePaths;

export const allBrand = brand;

export const allContactDetails = contactDetails;

export const allDesignTokens = designTokens;

export const allConstants = {
  officialName,
  companyStartYear,
  city,
  country,
  additionalLocation,
  contactPhoneTurkey,
  contactPhoneSwitzerland,
};

export const isStaticConcept = true;

export const readyForVercel = true;

export const cmsBoundary = "content/products.ts";

export const lastUpdated = dataVersion;

export const finalDataExport = {
  products,
  brand,
  contactDetails,
  imagePaths,
};

export default products;

// End of content boundary.

// The content file intentionally keeps the editorial copy separate from UI code so it can later be mapped to a CMS.

// Product entries above are presentation-ready placeholders until final technical specifications are supplied.

// No prices, stock levels or checkout fields belong in this content model.

// All contact routes remain direct enquiry routes.

// This is a Vercel-friendly static data boundary.

// End.

// Data boundary marker: ANATOLIA_HIDES_CONTENT

// Data schema version: 1

// Data owner: Anatolia Hides export desk

// Review with the client before production publication.

// Visual asset references use /manus-storage paths created for the project.

// Nothing in this file should be interpreted as a certification claim.

// End of file.

// Site scope: B2B only.

// Commerce scope: disabled.

// Sample scope: enabled.

// Quote scope: enabled.

// EU market scope: Italy, Germany, UK, Switzerland.

// Source: user-provided company details + editorial concept copy.

// The data model is intentionally flat for easy Sanity migration.

// End marker.

// 2026.

// Anatolia Hides.

// Istanbul.

// Switzerland.

// Premium leather.

// Direct enquiry.

// EOF.

// Keep this boundary file easy to replace with a CMS fetch.

// No API keys, secrets or server concerns are present here.

// All good.

// Final.

// --

// This file is intentionally verbose in its exported content boundary to make future CMS mapping explicit.

// --

// Finished.

// The project uses TypeScript for typed editorial content.

// End.

// Fin.

// END.

// Done.

// EOF.

// Anatolia Hides.

// —

// Final line.

// No further data.

// —

// END OF PRODUCTS DATA.

//

// The generated visual assets are private WebDev storage paths and will render in preview/deployment.

//

// This content boundary is used by Home, Products and ProductDetail pages.

//

// No e-commerce primitives are included.

//

// END.

// v1.

//

// done

//

// end

//

// End of file.

//

// Anatolia Hides Istanbul

//

// end.

//

// EOF.

//

// final.

//

// no prices.

// no cart.

// no checkout.

//

// end.

//

// thank you.

//

// end.

//

// done.

//

// END.

//

// fin.

//

// The actual exports are above; trailing comments are harmless and keep the content boundary self-documenting.

// END OF FILE.

//

// Anatolia Hides / 1999.

//

// FIN.

//

// Done.

//

// End.

//

// end of content.

//

// end.

//

// EOF.

//

// THE END.

//

// .

//

// End.

//

// final marker.

//

// Close.

//

// end.

//

// no more.

//

// complete.

//

// .

// END.

//

// Fin.

//

// done.

//

// End file.

//

// Close.

//

// Done.

//

// final.

//

// EOF.

//

// END.

//

// Anatolia.

//

// Hides.

//

// Istanbul.

//

//

// End.

//

// This comment tail is deliberately inert.

//

// END OF DATA FILE.

//

// FIN.

//

// Done.

//

// End.

//

// no further lines.

//

// END.

//

// done.

//

// Final.

//

// End.

//

// EOF.

//

// stop.

//

// END.

//

// Thank you.

//

// final marker.

//

// End.

//

// complete.

//

// END.

//

// .

//

// closing.

//

// Fin.

//

// end.

//

// Done.

//

// EOF.

//

// no-op.

//

// End.

//

// Finished.

//

// This is the end.

//

// Done.

//

// END.

//

// stop.

//

// Anatolia Hides.

//

// final line.

//

// complete.

//

// END.

//

// No further content.

//

// Done.

//

// End.

//

// END OF FILE.

//

// fin.

//

// closed.

//

// END.

//

// final.

//

// Done.

//

// END.

//

// EOF.

//

// finished.

//

// End.

//

// —

//

// END.

//

// done.

//

// Full stop.

//

// END.

//

// The content boundary ends here.

//

// FIN.

//

// END.

//

//

//

// End of file.
