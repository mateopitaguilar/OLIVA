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
            <div className="text-base sm:text-lg font-bold">Oliva Bar e Levar</div>

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
                <a href="/reservas" className="inline-flex items-center justify-center rounded-md bg-black px-4 py-2 text-white text-sm">Reservar</a>
                <a href="/menu" className="inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm">Ver menú</a>
              </div>
            </div>
            <div className="aspect-[4/3] sm:aspect-video rounded-lg bg-[url('/hero.webp')] bg-cover bg-center" aria-label="Foto del local" />
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
      </div>
    </BrowserRouter>
  )
}

