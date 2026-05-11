import Image from "next/image";
import Link from "next/link";
import { Car, formatEUR, formatKm } from "@/lib/cars";

export function CarCard({ car }: { car: Car }) {
  return (
    <Link
      href={`/inventario/${car.slug}`}
      className="card group block transition hover:border-brand/60 hover:shadow-glow"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-ink-800">
        <Image
          src={car.images[0]}
          alt={`${car.brand} ${car.model}`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3 flex gap-1.5">
          <span className="rounded bg-black/70 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur">
            {car.segment}
          </span>
          {car.fuel === "Elétrico" && (
            <span className="rounded bg-brand px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
              100% Elétrico
            </span>
          )}
        </div>
      </div>
      <div className="space-y-3 p-5">
        <div>
          <p className="text-[11px] uppercase tracking-wider text-ink-400">
            {car.brand}
          </p>
          <h3 className="mt-0.5 text-lg font-semibold leading-tight text-white">
            {car.model}{" "}
            <span className="text-ink-300">{car.version}</span>
          </h3>
        </div>
        <ul className="grid grid-cols-2 gap-y-1 text-xs text-ink-300">
          <li>· {car.year}</li>
          <li>· {formatKm(car.km)}</li>
          <li>· {car.fuel}</li>
          <li>· {car.transmission}</li>
        </ul>
        <div className="flex items-end justify-between border-t border-ink-700 pt-3">
          <span className="text-xl font-bold text-white">
            {formatEUR(car.price)}
          </span>
          <span className="text-xs font-medium text-brand group-hover:underline">
            Ver detalhes →
          </span>
        </div>
      </div>
    </Link>
  );
}
