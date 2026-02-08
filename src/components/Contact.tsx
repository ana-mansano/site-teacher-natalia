"use client";

const INSTAGRAM_URL = "https://www.instagram.com/_teachernatalia/";
const CONTACT_FORM_URL =
  "https://docs.google.com/forms/d/1nSTxIzw_PfzUzIZCjmb4l0grp4QajA5B8bz3T7GvWTM/viewform";

/* Ícone Instagram (SVG) */
function IconInstagram({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

/* Ícone formulário (clipboard/lista) */
function IconForm({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );
}

export default function Contact() {
  return (
    <section
      id="contato"
      className="px-4 sm:px-6 py-12 sm:py-16 scroll-mt-20"
      style={{ background: "linear-gradient(180deg, #FAD0CB 0%, #F8B6B0 100%)" }}
    >
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-marrom-escuro mb-2">
          Bora conversar?
        </h2>
        <p className="text-marrom-medio text-base sm:text-lg mb-6 sm:mb-8">
          <span className="text-marrom-escuro font-medium">Let&apos;s talk.</span> Este formulário é pra quem quer expressar interesse nas aulas
          particulares (e online!) de inglês. Preencha o que conseguir, só
          nome e contato são obrigatórios. I hope to see you soon!
        </p>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn inline-flex items-center justify-center gap-2 text-base sm:text-lg min-h-[48px] px-5 py-3 rounded-2xl font-medium bg-marrom-escuro text-off-white border-2 border-marrom-escuro hover:bg-rosa-destaque hover:border-rosa-destaque hover:text-off-white transition-all duration-200"
          >
            <IconInstagram className="w-5 h-5 flex-shrink-0" />
            Instagram
          </a>
          <a
            href={CONTACT_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn btn-primary inline-flex items-center justify-center gap-2 text-base sm:text-lg min-h-[48px] px-5 py-3"
          >
            <IconForm className="w-5 h-5 flex-shrink-0" />
            Formulário de interesse
          </a>
        </div>
      </div>
    </section>
  );
}
