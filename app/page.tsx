"use client";

import { ShieldAlert, Mail, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";

// Variante réutilisable : fade-in avec délai personnalisable
const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.7, ease: "easeOut", delay },
});

export default function Page() {
  return (
    <div className="h-screen flex flex-col overflow-hidden" style={{ backgroundColor: "#ffffff" }}>

      {/* Top red bar */}
      <motion.div
        {...fadeIn(0)}
        className="flex-shrink-0 py-2 px-6"
        style={{ backgroundColor: "#c8102e" }}
      >
        <div className="mx-auto max-w-7xl flex items-center justify-center gap-2">
          <ShieldAlert className="h-4 w-4 flex-shrink-0" style={{ color: "#ffffff" }} />
          <p className="text-xs font-medium" style={{ color: "#ffffff" }}>
            Campagne interne de sensibilisation — Information confidentielle
          </p>
        </div>
      </motion.div>

      {/* Main content area */}
      <div className="flex-1 flex min-h-0">

        {/* LEFT PANEL */}
        <div className="flex-1 flex flex-col px-8 py-6 lg:px-12 lg:py-8 min-h-0 relative">

          {/* Background refinery image — fade-in en premier */}
          <motion.div
            {...fadeIn(0.1)}
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: "url(/images/background.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.5,
              filter: "brightness(1.0) saturate(1)",
            }}
          />



          {/* Header : logo + DSI */}
          <motion.div
            {...fadeIn(0.3)}
            className="relative z-10 flex items-center justify-between flex-shrink-0 mb-5"
          >
            <div className="flex items-center gap-4">
              <img src="/images/logo.png" alt="Logo SAR" className="h-14 w-auto" />
              <div>
                <p className="text-[10px] font-bold tracking-widest uppercase" style={{ color: "#c8102e" }}>
                  Societe Africaine
                </p>
                <p className="text-[10px] font-bold tracking-widest uppercase" style={{ color: "#c8102e" }}>
                  de Raffinage
                </p>
              </div>
            </div>
            <span className="text-[10px] font-medium uppercase tracking-wider" style={{ color: "#9a9a9a" }}>
              Direction des Systemes d&apos;Information
            </span>
          </motion.div>

          {/* Divider */}
          <motion.div
            {...fadeIn(0.45)}
            className="relative z-10 h-px flex-shrink-0 mb-5"
            style={{ backgroundColor: "#e5e5e5" }}
          />

          {/* Title */}
          <motion.h1
            {...fadeIn(0.55)}
            className="relative z-10 text-3xl lg:text-4xl font-bold mb-2 flex-shrink-0 leading-tight"
            style={{ color: "#1a1a1a" }}
          >
            Sensibilisation à la{" "}
            <span style={{ color: "#c8102e" }}>cybersécurité</span>
          </motion.h1>

          {/* Message */}
          <motion.p
            {...fadeIn(0.65)}
            className="relative z-10 text-xl font-bold leading-relaxed mb-2 flex-shrink-0"
            style={{ color: "#1a1a1a" }}
          >
            Vous venez de cliquer sur un lien dans le cadre d&apos;une campagne de{" "}
            <strong>faux phishing</strong>.
          </motion.p>

          {/* Confidential notice */}
          <motion.div
            {...fadeIn(0.75)}
            className="relative z-10 flex items-center gap-4 rounded-xl px-5 py-4 mb-5 flex-shrink-0"
            style={{
              backgroundColor: "#fff0f0",
              border: "3px solid #c8102e",
              boxShadow: "0 8px 40px rgba(200,16,46,0.18)",
            }}
          >
            <img
              src="/images/alerte.png"
              alt="Confidentiel"
              style={{ width: 160, height: 160, flexShrink: 0 }}
            />
            <div>
              <p
                className="text-2xl font-black uppercase tracking-widest mb-3"
                style={{ color: "#c8102e" }}
              >
                SOYEZ DISCRETS ! ! !
              </p>
              <p className="text-xl font-semibold leading-snug" style={{ color: "#1a1a1a" }}>
                Pour le bon déroulement de la campagne,{" "}
                <span style={{ color: "#c8102e" }}>
                  veuillez ne pas diffuser cette information.
                </span>
              </p>
            </div>
          </motion.div>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Footer contact */}
          <motion.div
            {...fadeIn(0.9)}
            className="relative z-10 flex items-center gap-2 mt-4 flex-shrink-0"
          >
            <Mail className="h-3.5 w-3.5" style={{ color: "#c8102e" }} />
            <span className="text-xs" style={{ color: "#6b6b6b" }}>
              Pour toute question, veuillez contacter{" "}
              <a
                href="mailto:lesinformaticiens@sar.sn"
                className="underline font-medium"
                style={{ color: "#c8102e" }}
              >
                lesinformaticiens@sar.sn
              </a>
            </span>
          </motion.div>

        </div>

        {/* RIGHT PANEL - Video */}
        <motion.div
          {...fadeIn(0.4)}
          className="hidden lg:flex w-[48%] flex-shrink-0 flex-col"
          style={{ backgroundColor: "#111111" }}
        >
          {/* Video label bar */}
          <div
            className="flex-shrink-0 flex items-center gap-2 px-6 py-3"
            style={{ backgroundColor: "#c8102e" }}
          >
            <ShieldAlert className="h-4 w-4 flex-shrink-0" style={{ color: "#ffffff" }} />
            <p className="text-xs font-semibold tracking-wide uppercase" style={{ color: "#ffffff" }}>
              Vidéo de sensibilisation au phishing
            </p>
          </div>

          {/* Video area */}
          <div className="flex-1 relative min-h-0">
            <video
              className="absolute inset-0 w-full h-full object-contain"
              controls
              autoPlay
              muted
              playsInline
              src="/videos/sensibilisation.mp4"
            >
              <track kind="captions" />
            </video>
          </div>
        </motion.div>

      </div>
    </div>
  );
}