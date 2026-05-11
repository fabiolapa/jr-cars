import Image from "next/image";
import Link from "next/link";

export default function SobrePage() {
  return (
    <>
      <section className="border-b border-ink-700/80">
        <div className="hero-grid relative">
          <div className="container-x relative py-20">
            <p className="label">Sobre nós</p>
            <h1 className="mt-2 max-w-3xl font-display text-5xl leading-tight text-white md:text-6xl">
              Mais do que vender carros — entregamos confiança.
            </h1>
            <p className="mt-5 max-w-2xl text-ink-300">
              A JRCars nasceu da paixão por automóveis e da vontade de
              transformar a compra de um usado numa experiência simples,
              transparente e sem surpresas.
            </p>
          </div>
        </div>
      </section>

      <section className="container-x grid gap-12 py-16 md:grid-cols-2 md:items-center">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-ink-700">
          <Image
            src="https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1600&q=80"
            alt="Stand JRCars"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="font-display text-3xl text-white">A nossa história</h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            Começámos pequenos, com a missão de oferecer aos nossos clientes
            viaturas verificadas ao detalhe e preços justos. Hoje somos
            referência no comércio de automóveis usados, com mais de 800
            clientes satisfeitos e uma classificação média de 4,9 / 5 nas
            avaliações.
          </p>
          <p className="mt-4 leading-relaxed text-ink-300">
            Cada viatura passa por uma inspeção rigorosa antes de chegar ao
            nosso stand. Trabalhamos com as melhores entidades financeiras
            para garantir condições à medida de cada cliente.
          </p>
        </div>
      </section>

      <section className="border-t border-ink-700/80 bg-ink-900">
        <div className="container-x grid gap-6 py-16 md:grid-cols-4">
          {[
            { n: "+10", l: "Anos de experiência" },
            { n: "+800", l: "Clientes satisfeitos" },
            { n: "+120", l: "Viaturas em stock" },
            { n: "4.9★", l: "Avaliação média" },
          ].map((s) => (
            <div key={s.l} className="card p-6 text-center">
              <p className="font-display text-5xl text-brand">{s.n}</p>
              <p className="mt-2 text-sm text-ink-300">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x py-16">
        <h2 className="font-display text-3xl text-white">Os nossos valores</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            {
              t: "Transparência",
              b: "Histórico completo de cada viatura, sem letras pequenas nem surpresas no final.",
            },
            {
              t: "Qualidade",
              b: "Só vendemos o que compraríamos para nós. Cada carro é inspecionado ao detalhe.",
            },
            {
              t: "Proximidade",
              b: "Acompanhamento pessoal antes, durante e depois da compra. Estamos cá para si.",
            },
          ].map((v) => (
            <div key={v.t} className="card p-6">
              <h3 className="text-lg font-semibold text-white">{v.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-300">
                {v.b}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-ink-700/80">
        <div className="container-x flex flex-col items-start justify-between gap-6 py-14 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-3xl text-white">
              Venha conhecer-nos
            </h2>
            <p className="mt-2 text-ink-300">
              Estamos a poucos minutos de si — sem marcação.
            </p>
          </div>
          <Link href="/contacto" className="btn-primary">
            Como chegar
          </Link>
        </div>
      </section>
    </>
  );
}
