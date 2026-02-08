"use client";

/**
 * Edite aqui: links e email de contato
 */
const INSTAGRAM_URL = "https://www.instagram.com/_teachernatalia/";
const WHATSAPP_NUMBER = "5511963175947";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
const FORM_URL = "https://docs.google.com/forms/d/1nSTxIzw_PfzUzIZCjmb4l0grp4QajA5B8bz3T7GvWTM/viewform";

export default function Footer() {
  return (
    <footer
      className="px-4 sm:px-6 py-10 sm:py-12 border-t border-rosa-suave"
      style={{ background: "linear-gradient(135deg, #1a2d47 0%, #0f1f33 50%, #2a2520 100%)" }}
    >
      <div className="max-w-4xl mx-auto">
        <p className="text-off-white font-semibold text-center mb-2 text-lg">
          Teacher Natalia | Contato pela DM ou link
        </p>
        <p className="text-off-white/80 text-center text-sm mb-6">
          Get in touch
        </p>
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-off-white/90 hover:text-off-white transition-colors text-sm sm:text-base"
          >
            Instagram
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-off-white/90 hover:text-off-white transition-colors text-sm sm:text-base"
          >
            WhatsApp
          </a>
          <a
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-off-white/90 hover:text-off-white transition-colors text-sm sm:text-base"
          >
            Formulário de interesse
          </a>
        </div>
      </div>
    </footer>
  );
}
