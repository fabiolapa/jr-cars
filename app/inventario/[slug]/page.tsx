import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cars, getCar, formatEUR, formatKm } from "@/lib/cars";
import { CarCard } from "@/components/CarCard";

export function generateStaticParams() {
  return cars.map((c) => ({ slug: c.slug }));
}

export default function CarDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const car = getCar(params.slug);
  if (!car) notFound();

  const related = cars
    .filter((c) => c.slug !== car.slug && c.segment === car.segment)
    .slice(0, 3);

  const specs: { label: string; value: string }[] = [
    { label: "Marca", value: car.brand },
    { label: "Modelo", value: `${car.model} ${car.version}` },
    { label: "Ano", value: String(car.year) },
    { label: "Quilómetros", value: formatKm(car.km) },
    { label: "Combustível", value: car.fuel },
    { label: "Caixa", value: car.transmission },
    { label: "Potência", value: `${car.power} cv` },
    { label: "Segmento", value: car.segment },
    { label: "Cor", value: car.color },
    { label: "Portas / Lugares", value: `${car.doors} / ${car.seats}` },
  ];

  const whatsappMsg = encodeURIComponent(
    `Olá JRCars, tenho interesse no ${car.brand} ${car.model} ${car.version} (${car.year}) por ${formatEUR(car.price)}.`,
  );

  return (
    <>
      {/* Breadcrumb */}
      <div className="border-b border-ink-700/80 bg-ink-900/60">
        <div className="container-x py-4 text-xs text-ink-400">
          <Link href="/" className="hover:text-white">Início</Link>
          <span className="mx-2">/</span>
          <Link href="/inventario" className="hover:text-white">Stock</Link>
          <span className="mx-2">/</span>
          <span className="text-ink-200">
            {car.brand} {car.model}
          </span>
        </div>
      </div>

      <section className="container-x grid gap-10 py-10 lg:grid-cols-[1.4fr_1fr]">
        {/* Gallery */}
        <div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-ink-700 bg-ink-900">
            <Image
              src={car.images[0]}
              alt={`${car.brand} ${car.model}`}
              fill
              sizes="(min-width: 1024px) 60vw, 100vw"
              priority
              className="object-cover"
            />
          </div>
          <div className="mt-3 grid grid-cols-3 gap-3">
            {car.images.slice(0, 3).map((src, i) => (
              <div
                key={i}
                className="relative aspect-[4/3] overflow-hidden rounded-lg border border-ink-700 bg-ink-900"
              >
                <Image
                  src={src}
                  alt={`${car.brand} ${car.model} ${i + 1}`}
                  fill
                  sizes="33vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          <div>
            <p className="text-[11px] uppercase tracking-wider text-ink-400">
              {car.segment} · {car.year}
            </p>
            <h1 className="mt-1 font-display text-4xl text-white">
              {car.brand} {car.model}
            </h1>
            <p className="text-lg text-ink-300">{car.version}</p>
          </div>

          <div className="card p-6">
            <p className="label">Preço</p>
            <p className="mt-1 font-display text-5xl text-white">
              {formatEUR(car.price)}
            </p>
            <p className="mt-1 text-xs text-ink-400">
              Mensalidade desde{" "}
              <span className="text-white">
                {formatEUR(Math.round(car.price / 96))}/mês
              </span>{" "}
              (96 meses, sujeito a aprovação)
            </p>
            <div className="mt-5 grid gap-2">
              <a
                href={`https://wa.me/351900000000?text=${whatsappMsg}`}
                target="_blank"
                rel="noreferrer"
                className="btn-primary w-full"
              >
                Falar pelo WhatsApp
              </a>
              <Link href="/contacto" className="btn-ghost w-full">
                Marcar test-drive
              </Link>
            </div>
          </div>

          <div className="card p-6">
            <p className="label mb-3">Ficha técnica</p>
            <dl className="divide-y divide-ink-700 text-sm">
              {specs.map((s) => (
                <div
                  key={s.label}
                  className="flex justify-between gap-4 py-2.5"
                >
                  <dt className="text-ink-400">{s.label}</dt>
                  <dd className="text-right text-white">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </aside>
      </section>

      {/* Description + highlights */}
      <section className="container-x grid gap-8 pb-16 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <h2 className="font-display text-2xl text-white">Descrição</h2>
          <p className="mt-3 leading-relaxed text-ink-200">
            {car.description}
          </p>
          <p className="mt-4 text-sm text-ink-400">
            Aceita-se retoma. Possibilidade de financiamento até 96 meses.
            Viatura totalmente revista e com garantia.
          </p>
        </div>
        <div>
          <h2 className="font-display text-2xl text-white">Equipamento</h2>
          <ul className="mt-3 grid gap-2">
            {car.highlights.map((h) => (
              <li
                key={h}
                className="flex items-start gap-2 rounded-md border border-ink-700 bg-ink-900 px-3 py-2 text-sm text-ink-200"
              >
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                {h}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="border-t border-ink-700/80">
          <div className="container-x py-14">
            <h2 className="font-display text-3xl text-white">
              Outras viaturas do mesmo segmento
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((c) => (
                <CarCard key={c.slug} car={c} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
