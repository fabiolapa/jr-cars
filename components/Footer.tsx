import Link from "next/link";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-ink-700/80 bg-ink-950">
      <div className="container-x grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-300">
            Stand de automóveis usados em Portugal. Selecionamos cada viatura
            com rigor para que leve para casa um carro pronto a rodar — com
            garantia e financiamento à medida.
          </p>
          <div className="mt-5 flex gap-2">
            <a
              href="https://wa.me/351900000000"
              target="_blank"
              rel="noreferrer"
              className="chip hover:border-brand hover:text-white"
            >
              WhatsApp
            </a>
            <a
              href="https://m.me/Jrcars"
              target="_blank"
              rel="noreferrer"
              className="chip hover:border-brand hover:text-white"
            >
              Messenger
            </a>
            <a
              href="https://facebook.com/p/Jrcars-100083320053583/"
              target="_blank"
              rel="noreferrer"
              className="chip hover:border-brand hover:text-white"
            >
              Facebook
            </a>
          </div>
        </div>
        <div>
          <p className="label">Navegação</p>
          <ul className="mt-4 space-y-2 text-sm text-ink-200">
            <li><Link href="/" className="hover:text-white">Início</Link></li>
            <li><Link href="/inventario" className="hover:text-white">Stock</Link></li>
            <li><Link href="/sobre" className="hover:text-white">Sobre nós</Link></li>
            <li><Link href="/contacto" className="hover:text-white">Contacto</Link></li>
          </ul>
        </div>
        <div>
          <p className="label">Contactos</p>
          <ul className="mt-4 space-y-2 text-sm text-ink-200">
            <li>+351 900 000 000</li>
            <li>geral@jrcars.pt</li>
            <li>Seg–Sáb · 09:00–19:00</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ink-800">
        <div className="container-x flex flex-col items-start justify-between gap-2 py-5 text-xs text-ink-400 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} JRCars · Comércio de Automóveis</p>
          <p>Site de demonstração · Imagens meramente ilustrativas</p>
        </div>
      </div>
    </footer>
  );
}
