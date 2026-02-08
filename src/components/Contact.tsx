"use client";

const INSTAGRAM_URL = "https://www.instagram.com/_teachernatalia/";
const CONTACT_FORM_URL =
  "https://docs.google.com/forms/d/1nSTxIzw_PfzUzIZCjmb4l0grp4QajA5B8bz3T7GvWTM/viewform";

const WHATSAPP_NUMBER = "5511963175947";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

/* Ícone Instagram */
function IconInstagram({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10zm-5 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm5.25-.75a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
    </svg>
  );
}


/* Ícone formulário */
function IconForm({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );
}

/* Ícone WhatsApp */
function IconWhatsApp({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.52 3.48A11.85 11.85 0 0 0 12.04 0C5.43 0 .05 5.38.05 12c0 2.11.55 4.18 1.6 6.01L0 24l6.17-1.62a11.94 11.94 0 0 0 5.87 1.5h.01c6.62 0 12-5.38 12-12 0-3.19-1.24-6.19-3.53-8.4ZM12.05 21.5h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.66.96.98-3.56-.24-.37A9.87 9.87 0 0 1 2.15 12c0-5.44 4.43-9.87 9.89-9.87a9.82 9.82 0 0 1 6.99 2.89A9.8 9.8 0 0 1 21.92 12c0 5.44-4.43 9.5-9.87 9.5Zm5.41-7.4c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.5-.17 0-.37-.02-.57-.02-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.1 4.49.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
    </svg>
  );
}

export default function Contact() {
  return (
    <section
      id="contato"
      className="px-4 sm:px-6 py-12 sm:py-16 scroll-mt-20"
      style={{
        background: "linear-gradient(180deg, #FAD0CB 0%, #F8B6B0 100%)",
      }}
    >
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-marrom-escuro mb-2">
          Bora conversar?
        </h2>

        <p className="text-marrom-medio text-base sm:text-lg mb-6 sm:mb-8">
          <span className="text-marrom-escuro font-medium">Let&apos;s talk.</span>{" "}
          Este formulário é pra quem quer expressar interesse nas aulas
          particulares (e online!) de inglês. Preencha o que conseguir, só nome e
          contato são obrigatórios. I hope to see you soon!
        </p>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn inline-flex items-center justify-center gap-2 text-base sm:text-lg min-h-[48px] px-5 py-3 rounded-2xl font-medium bg-marrom-escuro text-off-white border-2 border-marrom-escuro hover:bg-rosa-destaque hover:border-rosa-destaque transition-all"
          >
            <IconInstagram className="w-5 h-5" />
            Instagram
          </a>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn inline-flex items-center justify-center gap-2 text-base sm:text-lg min-h-[48px] px-5 py-3 rounded-2xl font-medium bg-green-600 text-white border-2 border-green-600 hover:bg-green-700 hover:border-green-700 transition-all"
          >
            <IconWhatsApp className="w-5 h-5" />
            WhatsApp
          </a>

          <a
            href={CONTACT_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn btn-primary inline-flex items-center justify-center gap-2 text-base sm:text-lg min-h-[48px] px-5 py-3"
          >
            <IconForm className="w-5 h-5" />
            Formulário de interesse
          </a>
        </div>
      </div>
    </section>
  );
}
