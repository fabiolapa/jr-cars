export default function ContactoPage() {
  return (
    <>
      <section className="border-b border-ink-700/80">
        <div className="hero-grid relative">
          <div className="container-x relative py-16">
            <p className="label">Contacto</p>
            <h1 className="mt-2 max-w-3xl font-display text-5xl text-white">
              Vamos falar sobre o seu próximo carro.
            </h1>
            <p className="mt-4 max-w-2xl text-ink-300">
              Respondemos em menos de 1 hora durante o horário de atendimento.
            </p>
          </div>
        </div>
      </section>

      <section className="container-x grid gap-10 py-14 lg:grid-cols-[1.3fr_1fr]">
        {/* Form */}
        <form
          className="card space-y-5 p-6 md:p-8"
          action="mailto:geral@jrcars.pt"
          method="post"
        >
          <h2 className="font-display text-2xl text-white">
            Envie-nos uma mensagem
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="label">Nome</label>
              <input className="field mt-2" name="name" required />
            </div>
            <div>
              <label className="label">Telefone</label>
              <input className="field mt-2" name="phone" required />
            </div>
          </div>
          <div>
            <label className="label">Email</label>
            <input className="field mt-2" name="email" type="email" required />
          </div>
          <div>
            <label className="label">Assunto</label>
            <select className="field mt-2" name="subject" defaultValue="">
              <option value="" disabled>
                Selecione...
              </option>
              <option>Informações sobre uma viatura</option>
              <option>Marcação de test-drive</option>
              <option>Avaliação / retoma do meu carro</option>
              <option>Financiamento</option>
              <option>Outro</option>
            </select>
          </div>
          <div>
            <label className="label">Mensagem</label>
            <textarea className="field mt-2 h-32" name="message" required />
          </div>
          <div className="flex items-center justify-between gap-4">
            <p className="text-xs text-ink-400">
              Ao enviar concorda com a nossa política de privacidade.
            </p>
            <button type="submit" className="btn-primary">
              Enviar mensagem
            </button>
          </div>
        </form>

        {/* Info */}
        <div className="space-y-5">
          <div className="card p-6">
            <p className="label">Visite-nos</p>
            <p className="mt-2 text-white">Rua das Oficinas, 123</p>
            <p className="text-ink-300">2700-000 Amadora, Portugal</p>
          </div>
          <div className="card p-6">
            <p className="label">Telefone / WhatsApp</p>
            <p className="mt-2 text-white">+351 900 000 000</p>
            <a
              href="https://wa.me/351900000000"
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex text-sm text-brand hover:underline"
            >
              Abrir conversa no WhatsApp →
            </a>
          </div>
          <div className="card p-6">
            <p className="label">Email</p>
            <p className="mt-2 text-white">geral@jrcars.pt</p>
          </div>
          <div className="card p-6">
            <p className="label">Horário</p>
            <ul className="mt-2 space-y-1 text-sm text-ink-200">
              <li className="flex justify-between">
                <span>Segunda – Sexta</span>
                <span>09:00 – 19:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sábado</span>
                <span>10:00 – 18:00</span>
              </li>
              <li className="flex justify-between text-ink-400">
                <span>Domingo</span>
                <span>Encerrado</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-ink-700/80">
        <div className="aspect-[16/6] w-full bg-ink-900">
          <iframe
            title="Mapa JRCars"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-9.25%2C38.74%2C-9.20%2C38.77&layer=mapnik"
            className="h-full w-full opacity-80"
            loading="lazy"
          />
        </div>
      </section>
    </>
  );
}
