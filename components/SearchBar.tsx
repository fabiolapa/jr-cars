"use client";

import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import { brands } from "@/lib/cars";

export function SearchBar() {
  const router = useRouter();

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const params = new URLSearchParams();
    for (const [k, v] of fd.entries()) {
      const s = String(v);
      if (s) params.set(k, s);
    }
    const qs = params.toString();
    router.push(qs ? `/inventario?${qs}` : "/inventario");
  }

  return (
    <form
      onSubmit={onSubmit}
      className="grid gap-3 md:grid-cols-[1fr_1fr_1fr_1fr_auto]"
    >
      <select name="brand" className="field" defaultValue="">
        <option value="">Marca</option>
        {brands.map((b) => (
          <option key={b} value={b}>{b}</option>
        ))}
      </select>
      <select name="fuel" className="field" defaultValue="">
        <option value="">Combustível</option>
        <option>Gasolina</option>
        <option>Diesel</option>
        <option>Híbrido</option>
        <option>Elétrico</option>
      </select>
      <select name="max" className="field" defaultValue="">
        <option value="">Preço máximo</option>
        <option value="15000">até 15.000 €</option>
        <option value="25000">até 25.000 €</option>
        <option value="35000">até 35.000 €</option>
        <option value="50000">até 50.000 €</option>
      </select>
      <select name="year" className="field" defaultValue="">
        <option value="">Ano desde</option>
        <option>2018</option>
        <option>2020</option>
        <option>2022</option>
      </select>
      <button type="submit" className="btn-primary">Pesquisar</button>
    </form>
  );
}
