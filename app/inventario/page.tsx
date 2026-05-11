import { CarCard } from "@/components/CarCard";
import { cars, brands, fuels } from "@/lib/cars";

type SearchParams = {
  brand?: string;
  fuel?: string;
  max?: string;
  year?: string;
  q?: string;
};

export default function InventarioPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { brand, fuel, max, year, q } = searchParams;

  const filtered = cars.filter((c) => {
    if (brand && c.brand !== brand) return false;
    if (fuel && c.fuel !== fuel) return false;
    if (max && c.price > Number(max)) return false;
    if (year && c.year < Number(year)) return false;
    if (q) {
      const s = `${c.brand} ${c.model} ${c.version}`.toLowerCase();
      if (!s.includes(q.toLowerCase())) return false;
    }
    return true;
  });

  return (
    <>
      <section className="border-b border-ink-700/80 bg-ink-900">
        <div className="container-x py-12">
          <p className="label">Stock</p>
          <h1 className="mt-2 font-display text-5xl text-white">
            Todas as viaturas
          </h1>
          <p className="mt-3 max-w-2xl text-ink-300">
            {filtered.length} viatura{filtered.length === 1 ? "" : "s"}{" "}
            disponíveis. Use os filtros para encontrar o seu próximo carro.
          </p>
        </div>
      </section>

      <section className="container-x grid gap-10 py-12 lg:grid-cols-[260px_1fr]">
        {/* Filters */}
        <aside className="card h-fit p-6 lg:sticky lg:top-28">
          <form className="space-y-5">
            <div>
              <label className="label">Pesquisar</label>
              <input
                name="q"
                defaultValue={q ?? ""}
                placeholder="Ex: Golf, BMW..."
                className="field mt-2"
              />
            </div>
            <div>
              <label className="label">Marca</label>
              <select name="brand" defaultValue={brand ?? ""} className="field mt-2">
                <option value="">Todas</option>
                {brands.map((b) => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="label">Combustível</label>
              <select name="fuel" defaultValue={fuel ?? ""} className="field mt-2">
                <option value="">Todos</option>
                {fuels.map((f) => (
                  <option key={f} value={f}>{f}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="label">Preço máximo</label>
              <select name="max" defaultValue={max ?? ""} className="field mt-2">
                <option value="">Qualquer</option>
                <option value="15000">até 15.000 €</option>
                <option value="25000">até 25.000 €</option>
                <option value="35000">até 35.000 €</option>
                <option value="50000">até 50.000 €</option>
              </select>
            </div>
            <div>
              <label className="label">Ano desde</label>
              <select name="year" defaultValue={year ?? ""} className="field mt-2">
                <option value="">Qualquer</option>
                <option>2018</option>
                <option>2020</option>
                <option>2022</option>
              </select>
            </div>
            <button type="submit" className="btn-primary w-full">
              Aplicar filtros
            </button>
            <a
              href="/inventario"
              className="block text-center text-xs text-ink-400 hover:text-white"
            >
              Limpar filtros
            </a>
          </form>
        </aside>

        {/* Results */}
        <div>
          {filtered.length === 0 ? (
            <div className="card p-12 text-center">
              <p className="text-lg text-white">
                Nenhuma viatura encontrada.
              </p>
              <p className="mt-2 text-sm text-ink-400">
                Tente alargar os filtros ou contacte-nos para encontrar a sua
                viatura ideal.
              </p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {filtered.map((c) => (
                <CarCard key={c.slug} car={c} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
