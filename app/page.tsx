"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {

  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    try {
      const response = await fetch("https://formspree.io/f/xojybgwq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus("success");
        setEmail(""); // On vide le champ après soumission réussie
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };


  return (
    <main className="w-full max-w-md mx-auto space-y-6">

      {/* HEADER */}
      <header className="text-center space-y-4">
        <div className="w-24 h-24 mx-auto rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center overflow-hidden relative">
          {/* Utilisation du composant Image optimisé de Next.js */}
          <Image
            src="/images/profil.webp"
            alt="Dieudonné Houndagnon"
            width={96}
            height={96}
            className="w-full h-full object-cover"
            priority
          />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Dieudonné Houndagnon</h1>
          <p className="text-sm font-medium text-blue-600 tracking-wide uppercase mt-1">Frontend Craftsman</p>
        </div>
        <p className="text-sm text-slate-500 max-w-xs mx-auto leading-relaxed">
          Je façonne des interfaces web d'exception, rapides et orientées conversion.
        </p>
      </header>

      {/* STATS (Désactivées dans ton HTML d'origine, prêtes au besoin) */}
      {/* <div className="grid grid-cols-3 gap-px bg-slate-200 border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
        <div className="bg-white p-4 text-center">
          <div className="font-bold text-blue-600 text-xl leading-none">15+</div>
          <div className="text-[0.65rem] uppercase tracking-wider text-slate-500 mt-1 font-medium">Projets</div>
        </div>
        <div className="bg-white p-4 text-center border-l border-slate-200">
          <div className="font-bold text-blue-600 text-xl leading-none">100%</div>
          <div className="text-[0.65rem] uppercase tracking-wider text-slate-500 mt-1 font-medium">Satisfaits</div>
        </div>
        <div className="bg-white p-4 text-center border-l border-slate-200">
          <div className="font-bold text-blue-600 text-xl leading-none">48h</div>
          <div className="text-[0.65rem] uppercase tracking-wider text-slate-500 mt-1 font-medium">Réponse</div>
        </div>
      </div> 
      */}

      {/* PRINCIPAUX LIENS */}
      <div className="grid grid-cols-2 gap-4">

        <a href="https://comeup.com/fr/service/527361/corriger-les-bugs-et-la-responsivite-de-votre-site-cree-par-ia-lovable-cursor-chatgpt"
          className="col-span-2 group p-6 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300">
          <span className="inline-block text-[10px] font-bold px-3 py-1 rounded-full bg-blue-50 text-blue-600 border border-blue-100 mb-3">
            DISPONIBLE
          </span>
          <h2 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600">
            Création & Refonte de Sites Web
          </h2>
          <p className="text-xs text-slate-500 mt-2">
            Je construis des interfaces web qui captivent et convertissent vos visiteurs en clients.
          </p>
        </a>

        <a href="https://dieudonne-dev.vercel.app/" target="_blank" rel="noopener noreferrer"
          className="bg-white border border-slate-200 rounded-2xl p-[18px] hover:border-blue-200 hover:-translate-y-[2px] hover:shadow-[0_8px_32px_rgba(59,170,255,0.1)] transition-all flex flex-col shadow-sm">
          <div className="w-9 h-9 rounded-[9px] bg-slate-50 border border-slate-100 flex items-center justify-center mb-3">
            <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h4a1 1 0 011 1v5a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm10 0a1 1 0 011-1h4a1 1 0 011 1v5a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
            </svg>
          </div>
          <h3 className="font-semibold text-[0.82rem] mb-1 text-slate-900">Portfolio</h3>
          <span className="text-[0.7rem] text-slate-500">Projets & Refontes →</span>
        </a>

        <a href="https://comeup.com/fr/@dieudonne-dev" target="_blank" rel="noopener noreferrer"
          className="bg-white border border-slate-200 rounded-2xl p-[18px] hover:border-blue-200 hover:-translate-y-[2px] hover:shadow-[0_8px_32px_rgba(59,170,255,0.1)] transition-all flex flex-col shadow-sm">
          <div className="w-9 h-9 rounded-[9px] bg-slate-50 border border-slate-100 flex items-center justify-center mb-3">
            <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </div>
          <h3 className="font-semibold text-[0.82rem] mb-1 text-slate-900">Services</h3>
          <span className="text-[0.7rem] text-slate-500">Commander →</span>
        </a>

      </div>

      {/* RESEAUX SOCIAUX */}
      <div className="grid grid-cols-3 gap-3">
        <a href="https://www.linkedin.com/in/dieudonn%C3%A9-houndagnon-093387250/" target="_blank" rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-3 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-blue-600 text-xs font-medium text-center transition-colors">
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
          </svg>
          LinkedIn
        </a>

        <a href="https://wa.me/2290166374586" target="_blank" rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-3 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-blue-600 text-xs font-medium text-center transition-colors">
          <svg fill="currentColor" viewBox="0 0 24 24" className="w-3.5 h-3.5">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397 0 11.966 0c3.182.001 6.173 1.24 8.421 3.493 2.248 2.253 3.483 5.244 3.482 8.425-.003 6.616-5.34 11.963-11.91 11.963-2.003-.001-3.971-.511-5.715-1.483L0 24zm6.59-4.846c1.657.982 3.284 1.503 5.316 1.504 5.513 0 10.002-4.49 10.005-10.005.002-2.672-1.036-5.185-2.923-7.074C17.15 1.69 14.636.653 11.962.653 6.448.653 1.96 5.143 1.957 10.658c-.001 2.045.534 3.642 1.523 5.212l-.991 3.616 3.708-.972zm11.233-7.653c-.302-.151-1.787-.882-2.056-.98-.269-.098-.465-.147-.661.147-.196.294-.759.98-.931 1.176-.171.196-.343.221-.645.071-1.332-.667-2.181-1.154-3.045-2.651-.228-.394.228-.366.653-1.216.07-.147.035-.275-.017-.375-.053-.099-.465-1.121-.637-1.534-.168-.403-.353-.348-.485-.355-.125-.007-.269-.008-.413-.008-.144 0-.379.054-.577.271-.198.217-.755.738-.755 1.8s.773 2.09 1.05 2.14c.278.05 1.522 2.324 3.687 3.256.515.221.917.353 1.232.453.517.165.988.141 1.361.085.416-.062 1.787-.732 2.04-1.44.253-.708.253-1.314.177-1.44-.077-.126-.283-.202-.586-.353z" />
          </svg>
          WhatsApp
        </a>

        <a href="https://github.com/rolnelh" target="_blank" rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-3 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-blue-600 text-xs font-medium text-center transition-colors">
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
          </svg>
          GitHub
        </a>
      </div>

      {/* SERVICES LIST */}
      <div className="space-y-4">
        <div className="text-[0.65rem] uppercase tracking-[0.14em] text-[#5a6a82] font-semibold px-1 pt-4">
          Ce que je fais pour vous
        </div>

        <div className="grid grid-cols-1 gap-4">

          <a href="https://comeup.com/fr/service/527361/corriger-les-bugs-et-la-responsivite-de-votre-site-cree-par-ia-lovable-cursor-chatgpt"
            target="_blank" rel="noopener noreferrer"
            className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-200 hover:shadow-md transition-all flex items-start gap-5 shadow-sm group">
            <span className="text-blue-500 font-bold text-xl pt-1">01</span>
            <div className="flex-1">
              <div className="flex justify-between items-start mb-1">
                <h4 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                  Refonte & Correction de Site IA
                </h4>
                <span className="text-[0.7rem] uppercase bg-blue-50 text-blue-600 px-2 py-0.5 rounded-md font-medium whitespace-nowrap">
                  Commander
                </span>
              </div>
              <p className="text-[0.8rem] text-slate-500 leading-relaxed">
                Bugs corrigés, design repensé, mobile-first. Votre site IA devient une vraie vitrine professionnelle.
              </p>
            </div>
          </a>

          <a href="https://comeup.com/fr/@dieudonne-dev" target="_blank" rel="noopener noreferrer"
            className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-200 hover:shadow-md transition-all flex items-start gap-5 shadow-sm group">
            <span className="text-blue-500 font-bold text-xl pt-1">02</span>
            <div className="flex-1">
              <div className="flex justify-between items-start mb-1">
                <h4 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                  Landing Page from Scratch
                </h4>
                <span className="text-[0.7rem] uppercase bg-blue-50 text-blue-600 px-2 py-0.5 rounded-md font-medium whitespace-nowrap">
                  Commander
                </span>
              </div>
              <p className="text-[0.8rem] text-slate-500 leading-relaxed">
                Une page d'atterrissage conçue pour convertir : copywriting orienté résultat, design unique, code propre.
              </p>
            </div>
          </a>

          <a href="https://wa.me/2290166374586?text=Bonjour%20Dieudonné,%20je%20souhaite%20un%20audit%20UI/UX%20de%20mon%20site."
            target="_blank" rel="noopener noreferrer"
            className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-200 hover:shadow-md transition-all flex items-start gap-5 shadow-sm group">
            <span className="text-blue-500 font-bold text-xl pt-1">03</span>
            <div className="flex-1">
              <div className="flex justify-between items-start mb-1">
                <h4 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                  Audit UI/UX & Consultation
                </h4>
                <span className="text-[0.7rem] uppercase bg-blue-50 text-blue-600 px-2 py-0.5 rounded-md font-medium whitespace-nowrap">
                  Sur devis
                </span>
              </div>
              <p className="text-[0.8rem] text-slate-500 leading-relaxed">
                Analyse complète de votre interface avec recommandations actionnables pour augmenter votre taux de conversion.
              </p>
            </div>
          </a>

        </div>
      </div>

      {/* NEWSLETTER / CONTACT */}
      <div className="p-6 rounded-3xl bg-slate-900 text-white space-y-4">
        <h4 className="text-sm font-medium">Restons en contact</h4>
        <form className="flex gap-2" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email" // Important pour Formspree
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@exemple.com"
            disabled={status === "loading"}
            className="w-full px-4 py-2 text-xs rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="px-4 py-2 text-xs font-bold text-slate-900 bg-white rounded-xl hover:bg-slate-200 transition-colors disabled:opacity-50 min-w-[50px]"
          >
            {status === "loading" ? "..." : "OK"}
          </button>
        </form>

        {/* Feedback utilisateur dynamique */}
        {status === "success" && (
          <p className="text-xs text-emerald-400 font-medium transition-all">✓ Inscription réussie, merci !</p>
        )}
        {status === "error" && (
          <p className="text-xs text-rose-400 font-medium transition-all">Une erreur est survenue. Réessaye !</p>
        )}
      </div>

      {/* FOOTER */}
      <footer className="text-center pt-2">
        <span className="text-[10px] text-slate-400 uppercase tracking-widest">
          © 2026 • Dieudonné Houndagnon
        </span>
      </footer>

    </main >
  );
}