import { useEffect, useState } from "react";

import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Gavel,
  Instagram,
  Landmark,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Play,
  Scale,
  Trophy,
  UserRound,
  Video,
  X,
  Youtube,
} from "lucide-react";

/* =========================================================
   BASIC CONFIG
========================================================= */

const WHATSAPP_NUMBER = "919421796214";

const whatsappLink = (message) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

/* =========================================================
   NAVIGATION
========================================================= */

const navItems = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Practice Areas", "#practice"],
  ["Knowledge Hub", "#knowledge"],
  ["Legal Awareness", "#awareness"],
  ["Gallery", "#gallery"],
  ["Success Stories", "#success"],
  
];

/* =========================================================
   STATS
========================================================= */

const stats = [
  {
    icon: UserRound,
    value: "20+",
    label: "Years of Experience",
  },
  {
    icon: Scale,
    value: "5000+",
    label: "Clients Served",
  },
  {
    icon: Gavel,
    value: "3000+",
    label: "Cases Handled",
  },
  {
    icon: Trophy,
    value: "98%",
    label: "Client Satisfaction",
  },
];

/* =========================================================
   PRACTICE AREAS
========================================================= */

const practiceAreas = [
  {
    title: "Civil Litigation",
    text: "Professional assistance in civil disputes, claims, contracts and related litigation.",
    icon: Scale,
  },
  {
    title: "Criminal Law",
    text: "Legal representation and guidance in criminal proceedings and related matters.",
    icon: Gavel,
  },
  {
    title: "Corporate Law",
    text: "Legal support for businesses, agreements, compliance and corporate matters.",
    icon: Landmark,
  },
  {
    title: "Family Law",
    text: "Guidance in family disputes, matrimonial matters and related legal proceedings.",
    icon: UserRound,
  },
  {
    title: "Property Disputes",
    text: "Assistance with property disputes, documentation, ownership and related matters.",
    icon: Landmark,
  },
  {
    title: "Constitutional Matters",
    text: "Legal assistance concerning constitutional rights and important public matters.",
    icon: Scale,
  },
];

/* =========================================================
   YOUTUBE VIDEOS
========================================================= */

const legalVideos = [
  {
    title: "Understanding Your Legal Rights",
    category: "Legal Awareness",
    image: "/legal-video-1.jpg",
    youtubeId: "YOUR_VIDEO_ID_1",
  },
  {
    title: "Know Your Rights Before You Need Them",
    category: "Legal Awareness",
    image: "/legal-video-2.jpg",
    youtubeId: "YOUR_VIDEO_ID_2",
  },
  {
    title: "Important Legal Tips For Citizens",
    category: "Legal Awareness",
    image: "/legal-video-3.jpg",
    youtubeId: "YOUR_VIDEO_ID_3",
  },
];

/* =========================================================
   GALLERY
========================================================= */

const galleryImages = [
  {
    src: "/gallery-1.jpg",
    title: "Legal Awareness Programme",
  },
  {
    src: "/gallery-2.jpg",
    title: "Legal Awareness Workshop",
  },
  {
    src: "/gallery-3.jpg",
    title: "Community Legal Programme",
  },
  {
    src: "/gallery-4.jpg",
    title: "Student Awareness Session",
  },
  {
    src: "/gallery-5.jpg",
    title: "Media Coverage",
  },
  {
    src: "/gallery-6.jpg",
    title: "Legal Seminar",
  },
];

/* =========================================================
   TESTIMONIALS
========================================================= */

const testimonials = [
  {
    text:
      "A professional and supportive approach with clear legal guidance throughout the matter.",
    name: "Client Review",
  },
  {
    text:
      "The legal issue was explained in a simple and understandable manner. Very helpful guidance.",
    name: "Client Review",
  },
  {
    text:
      "Professional, approachable and committed towards providing practical legal assistance.",
    name: "Client Review",
  },
];

/* =========================================================
   LOADER
========================================================= */

function Loader({ done }) {
  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#050c15] transition-all duration-700 ${
        done ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-5">
        <div className="relative flex h-24 w-24 items-center justify-center">
          <div className="loader-ring absolute inset-0" />

          <div className="loader-shield text-[#d9a84e]">
            <Scale size={35} strokeWidth={1.5} />
          </div>
        </div>

        <div className="text-center">
          <p className="font-display text-2xl tracking-wide text-white">
           Adv.   Dhiraj Alagdeve 
          </p>

          <p className="mt-1 text-[10px] uppercase tracking-[0.32em] text-[#d9a84e]">
            Advocate & Legal Consultant
          </p>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   APP
========================================================= */

function App() {
  const [loading, setLoading] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Loader done={!loading} />

      <main
        id="home"
        className="min-h-screen overflow-hidden bg-[#050c15]"
      >
        {/* =====================================================
            NAVBAR
        ===================================================== */}

        <header className="absolute inset-x-0 top-0 z-50">
          <div className="mx-auto flex max-w-[1450px] items-center justify-between px-5 py-5 sm:px-8 lg:px-12">

            <a href="#home" className="flex items-center gap-3">
              <div className="flex h-14 w-12 items-center justify-center rounded-[10px] border border-[#d9a84e]/80 bg-[#0a1522]/80 text-[#d9a84e] shadow-[0_0_25px_rgba(217,168,78,.08)]">
                <Scale size={30} strokeWidth={1.4} />
              </div>

              <div>
                <div className="font-display text-xl font-semibold leading-none text-white sm:text-2xl">
                 Adv.Dhiraj Alagdeve 
                </div>

                <div className="mt-1 text-[9px] font-medium uppercase tracking-[0.2em] text-white/80 sm:text-[11px]">
                  Advocate & Legal Consultant
                </div>
              </div>
            </a>

            {/* DESKTOP NAV */}

            <nav className="hidden items-center gap-7 lg:flex">
              {navItems.map(([label, href], index) => (
                <a
                  key={label}
                  href={href}
                  className={`relative py-2 text-sm text-white/90 transition hover:text-[#f1cf85] ${
                    index === 0 ? "text-[#f1cf85]" : ""
                  }`}
                >
                  {label}

                  {index === 0 && (
                    <span className="absolute inset-x-0 -bottom-1 h-px bg-[#d9a84e]" />
                  )}
                </a>
              ))}
            </nav>

            {/* CONSULTATION BUTTON */}

            <a
              href={whatsappLink(
                "Hello Adv.Dhiraj Alagdeve , I would like to book a legal consultation. Please let me know a suitable time."
              )}
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-2 rounded-md bg-[#d9a84e] px-5 py-3 text-sm font-semibold text-[#071522] transition hover:-translate-y-1 hover:bg-[#f1cf85] lg:flex"
            >
              <MessageCircle size={17} />
              Consultation
            </a>

            {/* MOBILE MENU */}

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="rounded-lg border border-white/15 p-2 text-white lg:hidden"
              aria-label="Open menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {mobileOpen && (
            <nav className="mx-4 rounded-2xl border border-white/10 bg-[#08131f]/95 p-4 shadow-2xl backdrop-blur-xl lg:hidden">
              {navItems.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-xl px-4 py-3 text-sm text-white/90 hover:bg-white/5 hover:text-[#f1cf85]"
                >
                  {label}
                </a>
              ))}

              <a
                href={whatsappLink(
                  "Hello  Adv. Dhiraj Alagdeve , I would like to book a legal consultation."
                )}
                target="_blank"
                rel="noreferrer"
                className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 font-semibold text-white"
              >
                <MessageCircle size={18} />
                WhatsApp Consultation
              </a>
            </nav>
          )}
        </header>

        {/* =====================================================
            HERO
            IMPORTANT: EXISTING HERO DESIGN KE STYLE KO SAME
            RAKHA GAYA HAI.
        ===================================================== */}

        <section className="hero-glow relative min-h-screen">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_48%,rgba(217,168,78,.14),transparent_26%),linear-gradient(90deg,#050c15_0%,#07111c_45%,rgba(5,12,21,.35)_100%)]" />

          <div className="absolute right-0 top-0 h-full w-[52%] bg-[linear-gradient(90deg,#050c15_0%,transparent_32%,rgba(0,0,0,.2)_100%)]" />

          <div className="relative mx-auto grid min-h-screen max-w-[1450px] grid-cols-1 items-center px-6 pb-40 pt-32 sm:px-10 lg:grid-cols-[47%_53%] lg:px-12 lg:pt-24">

            {/* LEFT */}

            <div className="relative z-20 max-w-[690px]">

              <div className="fade-up flex items-center gap-4 text-xs font-medium uppercase tracking-[0.14em] text-[#e2b75f] sm:text-sm">
                <span className="h-px w-10 bg-[#d9a84e]" />
                Experience. Dedication. Justice.
              </div>

              <h1 className="fade-up fade-up-delay-1 mt-7 font-display text-[54px] font-semibold leading-[.9] tracking-[-0.02em] text-white sm:text-7xl lg:text-[76px] xl:text-[88px]">
                Your <span className="gold-text">Rights.</span>
                <br />
                My <span className="gold-text">Responsibility.</span>
              </h1>

              <p className="fade-up fade-up-delay-2 mt-8 max-w-[570px] text-base leading-8 text-white/75 sm:text-lg">
                Providing clear legal guidance and strong representation to
                protect what matters most to you.
              </p>

              <div className="fade-up fade-up-delay-3 mt-4 flex items-center gap-3 text-[#d9a84e]">
                <span className="h-px w-10 bg-[#d9a84e]" />

                <span className="font-script text-3xl sm:text-4xl">
                  Adv. Dhiraj Alagdeve 
                </span>
              </div>

              <div className="fade-up fade-up-delay-4 mt-8 flex flex-wrap gap-4">

                <a
                  href={whatsappLink(
                    "Hello Adv. Dhiraj Alagdeve , I would like to book a legal consultation. Please let me know a suitable time."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-3 rounded-md bg-[#e1b55d] px-7 py-4 font-semibold text-[#08101a] shadow-[0_12px_35px_rgba(217,168,78,.18)] transition hover:-translate-y-1 hover:bg-[#f1cf85]"
                >
                  <MessageCircle size={20} />
                  Book Consultation

                  <ArrowRight
                    size={17}
                    className="transition group-hover:translate-x-1"
                  />
                </a>

                <a
                  href="#knowledge"
                  className="flex items-center gap-3 rounded-md border border-white/55 bg-white/[.02] px-7 py-4 font-semibold text-white transition hover:-translate-y-1 hover:border-[#d9a84e] hover:text-[#f1cf85]"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#08101a]">
                    <Play size={14} fill="currentColor" />
                  </span>

                  Watch Latest Video
                </a>
              </div>

              {/* SOCIALS */}

              <div className="fade-up fade-up-delay-4 mt-12">

                <div className="flex items-center gap-4 text-xs uppercase tracking-[0.12em] text-white/85">
                  <span className="h-px w-10 bg-[#d9a84e]" />
                  Follow for daily legal updates
                </div>

                <div className="mt-5 flex flex-wrap gap-7">

                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e62b2b]">
                      <Youtube size={21} />
                    </span>

                    <span>
                      <span className="block text-sm font-medium text-white">
                        YouTube
                      </span>

                      <span className="text-xs text-white/70">
                        Legal Awareness
                      </span>
                    </span>
                  </a>

                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045]">
                      <Instagram size={21} />
                    </span>

                    <span>
                      <span className="block text-sm font-medium text-white">
                        Instagram
                      </span>

                      <span className="text-xs text-white/70">
                        Legal Updates
                      </span>
                    </span>
                  </a>

                  <a
                    href={whatsappLink(
                      "Hello  Adv. Dhiraj Alagdeve , I would like to know more about your legal consultation."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#22b85a]">
                      <MessageCircle size={21} />
                    </span>

                    <span>
                      <span className="block text-sm font-medium text-white">
                        WhatsApp
                      </span>

                      <span className="text-xs text-white/70">
                        Quick Connect
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT IMAGE */}

            <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[59%] lg:block">
              <div className="image-reveal absolute inset-0">

                <img
                  src="/advocate.png"
                  alt="Advocate portrait"
                  className="h-full w-full object-cover object-center"
                />

                <div className="absolute inset-0 bg-[linear-gradient(90deg,#050c15_0%,transparent_30%,rgba(5,12,21,.03)_65%,rgba(5,12,21,.28)_100%)]" />

                <div className="absolute inset-0 bg-[linear-gradient(0deg,#050c15_0%,transparent_24%,transparent_82%,#050c15_100%)]" />
              </div>

              <div className="float-slow absolute bottom-40 right-6 w-[310px] rounded-xl border border-white/10 bg-black/55 p-7 shadow-2xl backdrop-blur-md">

                <div className="font-display text-5xl leading-none text-[#d9a84e]">
                  “
                </div>

                <p className="mt-1 text-lg leading-8 text-white">
                  I believe every citizen should understand their{" "}
                  <span className="text-[#e5b95f]">
                    legal rights.
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* STATS */}

          <div className="absolute bottom-6 left-1/2 z-30 w-[calc(100%-32px)] max-w-[1380px] -translate-x-1/2">

            <div className="grid grid-cols-2 rounded-2xl border border-white/15 bg-[#0b1118]/85 px-5 py-5 shadow-2xl backdrop-blur-xl md:grid-cols-4 md:px-7">

              {stats.map(({ icon: Icon, value, label }, index) => (
                <div
                  key={label}
                  className={`flex items-center gap-4 px-3 py-2 ${
                    index > 0 ? "md:border-l md:border-white/20" : ""
                  }`}
                >
                  <Icon
                    size={38}
                    strokeWidth={1.4}
                    className="shrink-0 text-[#d9a84e]"
                  />

                  <div>
                    <div className="font-display text-3xl font-semibold text-white sm:text-4xl">
                      {value}
                    </div>

                    <div className="mt-1 text-xs text-white/80 sm:text-sm">
                      {label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            ABOUT
        ===================================================== */}

        <section
          id="about"
          className="border-t border-white/10 bg-[#070f18] px-6 py-24 sm:px-10 lg:px-16"
        >
          <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-2 lg:items-center">

            <div className="reveal-card">
              <div className="flex items-center gap-4 text-xs uppercase tracking-[.18em] text-[#d9a84e]">
                <span className="h-px w-10 bg-[#d9a84e]" />
                About the Advocate
              </div>

              <h2 className="mt-5 font-display text-5xl text-white sm:text-6xl">
                Experience backed by{" "}
                <span className="gold-text">trust.</span>
              </h2>

              <p className="mt-6 leading-8 text-white/65">
                With extensive legal experience and a client-focused
                approach,  Adv. Dhiraj Alagdeve  practical legal
                guidance and professional representation across multiple
                areas of law.
              </p>

              <p className="mt-5 leading-8 text-white/65">
                The focus is on understanding every matter carefully,
                explaining the available legal options clearly and helping
                clients make informed decisions.
              </p>

              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#d9a84e] px-6 py-3 font-semibold text-[#08101a] transition hover:-translate-y-1 hover:bg-[#f1cf85]"
              >
                Know More
                <ArrowRight size={17} />
              </a>
            </div>

            <div className="reveal-card relative">

              <div className="absolute -inset-3 rounded-3xl border border-[#d9a84e]/20" />

              <img
                src="/advocate-about.jpg"
                alt="Advocate"
                className="relative aspect-[4/5] w-full rounded-3xl object-cover"
              />

              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-[#050c15]/85 p-6 backdrop-blur-xl">
                <p className="text-sm uppercase tracking-widest text-[#d9a84e]">
                  Professional Philosophy
                </p>

                <p className="mt-2 text-lg leading-7 text-white">
                  Clear advice. Strong representation. Responsible advocacy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            PRACTICE AREAS
        ===================================================== */}

        <section
          id="practice"
          className="bg-[#050c15] px-6 py-24 sm:px-10 lg:px-16"
        >
          <div className="mx-auto max-w-6xl">

            <div className="text-center">
              <div className="flex items-center justify-center gap-4 text-xs uppercase tracking-[.18em] text-[#d9a84e]">
                <span className="h-px w-10 bg-[#d9a84e]" />
                Practice Areas
                <span className="h-px w-10 bg-[#d9a84e]" />
              </div>

              <h2 className="mt-5 font-display text-5xl text-white sm:text-6xl">
                Areas of Legal Expertise
              </h2>

              <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/55">
                Professional legal assistance across a range of important
                legal matters.
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

              {practiceAreas.map((area) => {
                const Icon = area.icon;

                return (
                  <div
                    key={area.title}
                    className="reveal-card group rounded-2xl border border-white/10 bg-white/[.025] p-7 transition duration-300 hover:-translate-y-2 hover:border-[#d9a84e]/50 hover:bg-white/[.04]"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#d9a84e]/20 bg-[#d9a84e]/10 text-[#d9a84e] transition group-hover:scale-110">
                      <Icon size={24} />
                    </div>

                    <h3 className="mt-6 font-display text-2xl text-white">
                      {area.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-white/50">
                      {area.text}
                    </p>

                    <a
                      href="#contact"
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#d9a84e]"
                    >
                      Consult
                      <ArrowRight size={15} />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================
            KNOWLEDGE HUB
        ===================================================== */}

        <section
          id="knowledge"
          className="border-t border-white/10 bg-[#070f18] px-6 py-24 sm:px-10 lg:px-16"
        >
          <div className="mx-auto max-w-6xl">

            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">

              <div>
                <div className="flex items-center gap-4 text-xs uppercase tracking-[.18em] text-[#d9a84e]">
                  <span className="h-px w-10 bg-[#d9a84e]" />
                  Knowledge Hub
                </div>

                <h2 className="mt-5 font-display text-5xl text-white sm:text-6xl">
                  Legal insights & updates
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-white/55">
                  Watch legal awareness videos and stay informed about
                  important legal rights and developments.
                </p>
              </div>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="flex w-fit items-center gap-2 rounded-lg border border-[#d9a84e]/50 px-5 py-3 text-sm font-semibold text-[#d9a84e] transition hover:bg-[#d9a84e] hover:text-[#08101a]"
              >
                <Youtube size={18} />
                Visit YouTube
              </a>
            </div>

            {/* FEATURED VIDEO */}

            <div className="mt-12 grid gap-8 lg:grid-cols-[1.25fr_.75fr]">

              <div className="overflow-hidden rounded-2xl border border-white/10 bg-black">

                <div className="aspect-video">

                  <iframe
                    className="h-full w-full"
                    src="https://www.youtube.com/embed/YOUR_VIDEO_ID_1"
                    title="Latest Legal Awareness Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>

              <div className="flex flex-col justify-center">

                <p className="text-xs uppercase tracking-[.2em] text-[#d9a84e]">
                  Featured Legal Awareness
                </p>

                <h3 className="mt-4 font-display text-3xl text-white sm:text-4xl">
                  Know your legal rights before you need them.
                </h3>

                <p className="mt-5 leading-8 text-white/55">
                  Simple and practical legal awareness content designed to
                  help citizens understand their rights, responsibilities
                  and available legal remedies.
                </p>

                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 flex w-fit items-center gap-2 text-[#d9a84e]"
                >
                  Watch more videos
                  <ArrowRight size={17} />
                </a>
              </div>
            </div>

            {/* VIDEO CARDS */}

            <div className="mt-10 grid gap-5 md:grid-cols-3">

              {legalVideos.map((video) => (
                <a
                  key={video.title}
                  href={`https://youtube.com/watch?v=${video.youtubeId}`}
                  target="_blank"
                  rel="noreferrer"
                  className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[.025] transition hover:-translate-y-2 hover:border-[#d9a84e]/50"
                >
                  <div className="relative aspect-video overflow-hidden">

                    <img
                      src={video.image}
                      alt={video.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 flex items-center justify-center bg-black/25">
                      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#d9a84e] text-[#08101a]">
                        <Play size={20} fill="currentColor" />
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-xs uppercase tracking-widest text-[#d9a84e]">
                      {video.category}
                    </p>

                    <h3 className="mt-2 font-display text-2xl text-white">
                      {video.title}
                    </h3>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            LEGAL AWARENESS
        ===================================================== */}

        <section
          id="awareness"
          className="bg-[#f4efe5] px-6 py-24 sm:px-10 lg:px-16"
        >
          <div className="mx-auto max-w-6xl">

            <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center">

              <div>
                <div className="flex items-center gap-4 text-xs uppercase tracking-[.18em] text-[#9c7025]">
                  <span className="h-px w-10 bg-[#9c7025]" />
                  Legal Awareness
                </div>

                <h2 className="mt-5 font-display text-5xl text-[#071522] sm:text-6xl">
                  Law should be understood by everyone.
                </h2>

                <p className="mt-6 leading-8 text-[#4b4b4b]">
                  Through awareness sessions, workshops and digital content,
                  the objective is to make important legal information
                  easier to understand and accessible to the community.
                </p>

                <a
                  href="#gallery"
                  className="mt-7 inline-flex items-center gap-2 rounded-lg bg-[#071522] px-6 py-3 font-semibold text-white transition hover:-translate-y-1 hover:bg-[#d9a84e] hover:text-[#071522]"
                >
                  Explore Activities
                  <ArrowRight size={17} />
                </a>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">

                <AwarenessCard
                  number="01"
                  title="Workshops"
                  text="Interactive sessions to spread awareness about legal rights."
                />

                <AwarenessCard
                  number="02"
                  title="Seminars"
                  text="Educational programmes focused on practical legal issues."
                />

                <AwarenessCard
                  number="03"
                  title="Community"
                  text="Connecting legal knowledge with citizens and communities."
                />

                <AwarenessCard
                  number="04"
                  title="Digital Awareness"
                  text="Legal awareness through YouTube, Instagram and digital platforms."
                />

              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            SOCIAL MEDIA
        ===================================================== */}

        <section
          id="social"
          className="bg-[#050c15] px-6 py-24 sm:px-10 lg:px-16"
        >
          <div className="mx-auto max-w-6xl">

            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

              <div>
                <div className="flex items-center gap-4 text-xs uppercase tracking-[.18em] text-[#d9a84e]">
                  <span className="h-px w-10 bg-[#d9a84e]" />
                  Social Media
                </div>

                <h2 className="mt-5 font-display text-5xl text-white sm:text-6xl">
                  Follow the legal journey.
                </h2>

                <p className="mt-4 text-white/55">
                  Legal awareness, updates and useful information.
                </p>
              </div>

              <div className="flex gap-3">

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-lg border border-white/10 px-5 py-3 text-sm text-white transition hover:border-[#d9a84e] hover:text-[#d9a84e]"
                >
                  <Instagram size={18} />
                  Instagram
                </a>

                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-lg border border-white/10 px-5 py-3 text-sm text-white transition hover:border-[#d9a84e] hover:text-[#d9a84e]"
                >
                  <Youtube size={18} />
                  YouTube
                </a>

              </div>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">

              {[1, 2, 3, 4, 5, 6].map((item) => (
                <a
                  key={item}
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="image-zoom aspect-square overflow-hidden rounded-xl border border-white/10"
                >
                  <img
                    src={`/instagram-${item}.jpg`}
                    alt={`Instagram legal update ${item}`}
                    className="h-full w-full object-cover"
                  />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            GALLERY
        ===================================================== */}

        <section
          id="gallery"
          className="bg-[#071522] px-6 py-24 sm:px-10 lg:px-16"
        >
          <div className="mx-auto max-w-6xl">

            <div className="text-center">

              <div className="flex items-center justify-center gap-4 text-xs uppercase tracking-[.18em] text-[#d9a84e]">
                <span className="h-px w-10 bg-[#d9a84e]" />
                Gallery
                <span className="h-px w-10 bg-[#d9a84e]" />
              </div>

              <h2 className="mt-5 font-display text-5xl text-white sm:text-6xl">
                Legal Awareness & Media Gallery
              </h2>

              <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/60">
                Real workshops, seminars, community programmes and media
                coverage.
              </p>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

              {galleryImages.map((item, index) => (
                <div
                  key={item.src}
                  className={`group overflow-hidden rounded-2xl border border-white/10 reveal-card ${
                    index === 0 ? "lg:col-span-2" : ""
                  }`}
                >
                  <div
                    className={`image-zoom overflow-hidden ${
                      index === 0 ? "aspect-[16/8]" : "aspect-[4/3]"
                    }`}
                  >
                    <img
                      src={item.src}
                      alt={item.title}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="border-t border-white/10 bg-white/[.03] px-5 py-4">
                    <p className="text-sm font-medium text-white">
                      {item.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            SUCCESS STORIES
        ===================================================== */}

        <section
          id="success"
          className="border-t border-white/10 bg-[#070f18] px-6 py-24 sm:px-10 lg:px-16"
        >
          <div className="mx-auto max-w-6xl">

            <div className="text-center">

              <div className="flex items-center justify-center gap-4 text-xs uppercase tracking-[.18em] text-[#d9a84e]">
                <span className="h-px w-10 bg-[#d9a84e]" />
                Success Stories
                <span className="h-px w-10 bg-[#d9a84e]" />
              </div>

              <h2 className="mt-5 font-display text-5xl text-white sm:text-6xl">
                Client trust matters.
              </h2>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-3">

              {testimonials.map((item) => (
                <div
                  key={item.name + item.text}
                  className="reveal-card rounded-2xl border border-white/10 bg-white/[.025] p-7 transition hover:-translate-y-2 hover:border-[#d9a84e]/50"
                >
                  <div className="text-3xl text-[#d9a84e]">
                    “
                  </div>

                  <p className="mt-3 leading-7 text-white/65">
                    {item.text}
                  </p>

                  <div className="mt-6 border-t border-white/10 pt-5">
                    <p className="font-semibold text-white">
                      {item.name}
                    </p>

                    <p className="mt-1 text-[#d9a84e]">
                      ★★★★★
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            CONTACT / WHATSAPP
        ===================================================== */}

        <section
          id="contact"
          className="bg-[#050c15] px-6 py-24 sm:px-10 lg:px-16"
        >
          <div className="mx-auto max-w-6xl rounded-3xl border border-[#d9a84e]/20 bg-gradient-to-br from-[#111b27] to-[#070d14] p-8 shadow-2xl sm:p-12">

            <div className="grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-center">

              <div>

                <div className="flex items-center gap-4 text-xs uppercase tracking-[.18em] text-[#d9a84e]">
                  <span className="h-px w-10 bg-[#d9a84e]" />
                  Legal Consultation
                </div>

                <h2 className="mt-5 font-display text-5xl text-white sm:text-6xl">
                  Need legal guidance?
                </h2>

                <p className="mt-4 max-w-xl leading-8 text-white/60">
                  For a confidential consultation, send a direct WhatsApp
                  message. Your consultation request will open directly in
                  WhatsApp.
                </p>

              </div>

              <div className="space-y-4">

                <a
                  href={whatsappLink(
                    "Hello  Adv. Dhiraj Alagdeve , I would like to book a legal consultation. Please let me know a suitable time."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-3 rounded-xl bg-[#25D366] px-6 py-5 font-bold text-white shadow-[0_10px_30px_rgba(37,211,102,.18)] transition hover:-translate-y-1 hover:bg-[#20bd5b]"
                >
                  <MessageCircle size={23} />
                  Message on WhatsApp
                </a>

                <div className="grid gap-4 sm:grid-cols-2">

                  <a
                    href="tel:+919421796214"
                    className="rounded-xl border border-white/10 p-5 transition hover:border-[#d9a84e]/50"
                  >
                    <Phone size={19} className="text-[#d9a84e]" />

                    <p className="mt-2 text-xs uppercase tracking-widest text-white/40">
                      Call
                    </p>

                    <p className="mt-1 font-semibold text-white">
                      +91 942196214
                    </p>
                  </a>

                  <a
                    href="mailto:office@example.com"
                    className="rounded-xl border border-white/10 p-5 transition hover:border-[#d9a84e]/50"
                  >
                    <Mail size={19} className="text-[#d9a84e]" />

                    <p className="mt-2 text-xs uppercase tracking-widest text-white/40">
                      Email
                    </p>

                    <p className="mt-1 font-semibold text-white">
                      office@example.com
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            FOOTER
        ===================================================== */}

        <footer className="border-t border-white/10 bg-[#050c15] px-6 py-10 text-center text-xs text-white/40">

          <div className="mx-auto max-w-6xl">

            <div className="mb-5 flex justify-center gap-5">

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-[#d9a84e]"
              >
                <Youtube size={18} />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-[#d9a84e]"
              >
                <Instagram size={18} />
              </a>

              <a
                href={whatsappLink(
                  "Hello  Adv. Dhiraj Alagdeve , I would like to know more about your legal services."
                )}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-[#d9a84e]"
              >
                <MessageCircle size={18} />
              </a>
            </div>

            <p>
              © 2026 CraftilyLegal. All rights reserved.
            </p>

            <p className="mt-2 text-white/25">
              Advocate & Legal Consultant
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}

/* =========================================================
   SMALL COMPONENTS
========================================================= */

function AwarenessCard({ number, title, text }) {
  return (
    <div className="reveal-card rounded-2xl border border-[#d8cdb9] bg-white p-7 transition hover:-translate-y-2 hover:shadow-xl">

      <div className="flex items-center justify-between">
        <span className="text-sm font-bold tracking-widest text-[#9c7025]">
          {number}
        </span>

        <Scale size={21} className="text-[#9c7025]" />
      </div>

      <h3 className="mt-7 font-display text-2xl text-[#071522]">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-[#666]">
        {text}
      </p>
    </div>
  );
}

export default App;