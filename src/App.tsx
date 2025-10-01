import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import { useState } from 'react'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Reservas from './pages/Reservas'
import Contacto from './pages/Contacto'

export function App() {
  const [open, setOpen] = useState(false)

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white text-neutral-900">
        <header className="border-b">
          <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full overflow-hidden bg-transparent flex items-center justify-center">
                <img src="/logo.webp" alt="Oliva Bar e Levar" className="h-8 w-8 object-contain" />
              </div>
              <div className="text-base sm:text-lg font-bold">Oliva Bar e Levar</div>
            </div>

            <button aria-label="Abrir menú" className="md:hidden inline-flex items-center justify-center rounded-md border px-3 py-2 text-sm" onClick={() => setOpen(v => !v)}>
              {open ? 'Cerrar' : 'Menú'}
            </button>

            <nav className="hidden md:flex gap-6 text-sm">
              <NavLink to="/" end className={({isActive}) => isActive ? 'font-semibold' : ''}>Inicio</NavLink>
              <NavLink to="/menu" className={({isActive}) => isActive ? 'font-semibold' : ''}>Menú</NavLink>
              <NavLink to="/reservas" className={({isActive}) => isActive ? 'font-semibold' : ''}>Reservas</NavLink>
              <NavLink to="/contacto" className={({isActive}) => isActive ? 'font-semibold' : ''}>Contacto</NavLink>
            </nav>
          </div>

          {open && (
            <div className="md:hidden border-t">
              <div className="px-4 py-3 flex flex-col gap-3 text-sm">
                <NavLink to="/" end onClick={() => setOpen(false)}>Inicio</NavLink>
                <NavLink to="/menu" onClick={() => setOpen(false)}>Menú</NavLink>
                <NavLink to="/reservas" onClick={() => setOpen(false)}>Reservas</NavLink>
                <NavLink to="/contacto" onClick={() => setOpen(false)}>Contacto</NavLink>
              </div>
            </div>
          )}
        </header>

        <section className="bg-neutral-100">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16 lg:py-24 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">Oliva Bar e Levar</h1>
              <p className="mt-3 text-neutral-700 text-sm sm:text-base">Comida casera para llevar y para disfrutar en el local. Calidad, rapidez y cercanía.</p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <a href="tel:+34881304960" className="inline-flex items-center justify-center rounded-md bg-black px-4 py-2 text-white text-sm">Llamar para reservar</a>
                <a href="/menu" className="inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm">Ver menú</a>
              </div>
            </div>
            <div className="aspect-[4/3] sm:aspect-video rounded-lg bg-[url('/hero.webp')] bg-cover bg-center" aria-label="Foto del local" />
          </div>
        </section>

        {/* Bloque descriptivo bajo el hero */}
        <section className="bg-white">
          <div className="mx-auto max-w-3xl px-4 py-8 sm:py-12">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">Oliva Bar e Levar – Sabor gallego con corazón</h2>
            <p className="mt-4 text-neutral-700 leading-relaxed">
              Descubre la auténtica cocina gallega en Oliva Bar e Levar. Platos tradicionales elaborados con ingredientes frescos y de calidad: pulpo á feira, callos con garbanzos, tortilla de bacalao y opciones vegetarianas o sin gluten. Todo acompañado de un trato cercano y familiar que te hace sentir como en casa.
            </p>
            <p className="mt-4 text-neutral-700 leading-relaxed">
              Reconocidos con el Solete con Solera de la Guía Repsol, garantizamos una experiencia gastronómica auténtica y de primer nivel. Ven a disfrutar o llévate nuestro sabor a casa.
            </p>
            <div className="mt-8">
              <h3 className="text-lg font-semibold">Cómo llegar</h3>
              <div className="mt-3 relative rounded-lg overflow-hidden shadow-sm">
                <iframe
                  title="Mapa de Oliva Bar e Levar"
                  src="https://www.google.com/maps?q=R%C3%BAa%20Socorro%2C%2013%2C%2015401%20Ferrol%2C%20A%20Coru%C3%B1a&output=embed"
                  className="w-full aspect-[4/3] sm:aspect-video border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=R%C3%BAa%20Socorro%2C%2013%2C%2015401%20Ferrol%2C%20A%20Coru%C3%B1a"
                  target="_blank"
                  rel="noreferrer"
                  className="absolute inset-0"
                  aria-label="Abrir en Google Maps"
                />
              </div>
              <div className="mt-3">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=R%C3%BAa%20Socorro%2C%2013%2C%2015401%20Ferrol%2C%20A%20Coru%C3%B1a"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm"
                >
                  Abrir en Google Maps
                </a>
              </div>
            </div>
          </div>
        </section>

        <main className="mx-auto max-w-6xl px-4 py-8 sm:py-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/reservas" element={<Reservas />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>

        <footer className="border-t bg-neutral-50">
          <div className="mx-auto max-w-6xl px-4 py-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-sm">
            <div>
              <div className="font-semibold">Contacto</div>
              <ul className="mt-3 space-y-1 text-neutral-700">
                <li>Teléfono: <a className="underline" href="tel:+34881304960">881 304 960</a></li>
              </ul>
            </div>
            <div>
              <div className="font-semibold">Horario</div>
              <ul className="mt-3 space-y-1 text-neutral-700">
                <li>Mié–Dom: 10:00 – 16:00</li>
                <li>Lun y Mar: Cerrado</li>
              </ul>
            </div>
            <div>
              <div className="font-semibold">Dónde estamos</div>
              <ul className="mt-3 space-y-1 text-neutral-700">
                <li>Rúa Socorro, 13</li>
                <li>15401 Ferrol, A Coruña</li>
                <li><a className="underline" href="https://www.google.com/maps/search/?api=1&query=R%C3%BAa%20Socorro%2C%2013%2C%2015401%20Ferrol%2C%20A%20Coru%C3%B1a" target="_blank" rel="noreferrer">Ver en Google Maps</a></li>
              </ul>
            </div>
            <div>
              <div className="font-semibold">Síguenos</div>
              <ul className="mt-3 space-y-1 text-neutral-700">
                <li><a className="underline" href="#" target="_blank" rel="noreferrer">Instagram</a></li>
                <li><a className="underline" href="#" target="_blank" rel="noreferrer">Facebook</a></li>
              </ul>
            </div>
          </div>
          <div className="px-4 py-6 text-center text-xs text-neutral-600">
            <p>“Comida casera y trato familiar” — Oliva Bar e Levar</p>
          </div>
        </footer>

        {/* Botón flotante llamar (solo móvil) */}
        <a
          href="tel:+34881304960"
          className="md:hidden fixed bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-black px-4 py-3 text-white shadow-lg shadow-black/20"
          aria-label="Llamar a Oliva Bar e Levar"
        >
          <span className="text-sm font-medium">Llamar</span>
        </a>
      </div>
    </BrowserRouter>
  )
}

