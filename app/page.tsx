import Link from "next/link";
import Image from "next/image";
import { CarCard } from "@/components/CarCard";
import { SearchBar } from "@/components/SearchBar";
import { cars, formatEUR } from "@/lib/cars";

export default function HomePage() {
  const featured = cars.filter((c) => c.featured);
  const hero = featured[0];

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-ink-700/80">
        <div className="hero-grid absolute inset-0" />
        <div className="container-x relative grid gap-12 py-16 md:grid-cols-2 md:py-24">
          <div className="flex flex-col justify-center">
            <span className="chip w-fit">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              Novo stock disponível
            </span>
            <h1 className="mt-5 font-display text-5xl leading-[0.95] tracking-wide text-white md:text-7xl">
              O seu próximo carro<br />
              <span className="text-brand">começa aqui.</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-ink-300">
              Selecionamos viaturas usadas com rigor — revistas, com garantia e
              prontas a rodar. Tratamos do financiamento, da retoma e da
              entrega ao domicílio em qualquer ponto do país.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/inventario" className="btn-primary">
                Ver stock disponível
              </Link>
              <Link href="/contacto" className="btn-ghost">
                Pedir avaliação de retoma
              </Link>
            </div>
            <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-ink-700 pt-8">
              <div>
                <dt className="label">Viaturas</dt>
                <dd className="mt-1 font-display text-3xl text-white">+120</dd>
              </div>
              <div>
                <dt className="label">Clientes</dt>
                <dd className="mt-1 font-display text-3xl text-white">+800</dd>
              </div>
              <div>
                <dt className="label">Avaliação</dt>
                <dd className="mt-1 font-display text-3xl text-white">
                  4.9<span className="text-brand">★</span>
                </dd>
              </div>
            </dl>
          </div>
          {hero && (
            <Link
              href={`/inventario/${hero.slug}`}
              className="group relative aspect-[5/4] overflow-hidden rounded-2xl border border-ink-700 bg-ink-900"
            >
              <Image
                src={hero.images[0]}
                alt={`${hero.brand} ${hero.model}`}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="chip border-brand/60 bg-brand/10 text-white">
                  Destaque
                </span>
                <h3 className="mt-3 font-display text-3xl text-white">
                  {hero.brand} {hero.model}
                </h3>
                <p className="text-sm text-ink-300">{hero.version}</p>
                <div className="mt-4 flex items-end justify-between">
                  <span className="text-2xl font-bold text-white">
                    {formatEUR(hero.price)}
                  </span>
                  <span className="text-sm text-brand">Ver viatura →</span>
                </div>
              </div>
            </Link>
          )}
        </div>
      </section>

      {/* SEARCH BAR */}
      <section className="border-b border-ink-700/80 bg-ink-900">
        <div className="container-x py-6">
          <SearchBar />
        </div>
      </section>

      {/* FEATURED */}
      <section className="container-x py-16">
        <div className="flex items-end justify-between">
          <div>
            <p className="label">Em destaque</p>
            <h2 className="mt-2 font-display text-4xl text-white">
              Viaturas selecionadas
            </h2>
          </div>
          <Link
            href="/inventario"
            className="hidden text-sm text-brand hover:underline sm:inline"
          >
            Ver todo o stock →
          </Link>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((car) => (
            <CarCard key={car.slug} car={car} />
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="border-t border-ink-700/80 bg-gradient-to-b from-ink-900 to-ink-950">
        <div className="container-x grid gap-6 py-16 md:grid-cols-3">
          {[
            {
              title: "Financiamento até 96 meses",
              body: "Trabalhamos com várias entidades bancárias. Tratamos de toda a aprovação em 24h.",
              icon: "💳",
            },
            {
              title: "Retoma do seu carro",
              body: "Avaliação justa e gratuita da sua viatura atual, mesmo que ainda esteja em crédito.",
              icon: "🔁",
            },
            {
              title: "Entrega ao domicílio",
              body: "Levamos a sua nova viatura a qualquer ponto de Portugal continental.",
              icon: "🚚",
            },
          ].map((s) => (
            <div key={s.title} className="card p-6">
              <div className="text-3xl">{s.icon}</div>
              <h3 className="mt-4 text-lg font-semibold text-white">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-300">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-ink-700/80">
        <div className="container-x grid gap-8 py-16 md:grid-cols-[2fr_1fr] md:items-center">
          <div>
            <h2 className="font-display text-4xl text-white">
              Quer vender o seu carro?
            </h2>
            <p className="mt-3 max-w-xl text-ink-300">
              Avaliação no mesmo dia, pagamento imediato e tratamos de toda a
              papelada. Sem complicações.
            </p>
          </div>
          <div className="flex gap-3 md:justify-end">
            <Link href="/contacto" className="btn-primary">
              Pedir avaliação
            </Link>
            <a
              href="https://wa.me/351900000000"
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
