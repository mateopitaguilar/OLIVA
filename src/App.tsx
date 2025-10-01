import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Reservas from './pages/Reservas'
import Contacto from './pages/Contacto'

export function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white text-neutral-900">
        <header className="border-b">
          <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
            <div className="text-lg font-bold">Oliva Bar e Levar</div>
            <nav className="flex gap-6 text-sm">
              <NavLink to="/" end className={({isActive}) => isActive ? 'font-semibold' : ''}>Inicio</NavLink>
              <NavLink to="/menu" className={({isActive}) => isActive ? 'font-semibold' : ''}>Menú</NavLink>
              <NavLink to="/reservas" className={({isActive}) => isActive ? 'font-semibold' : ''}>Reservas</NavLink>
              <NavLink to="/contacto" className={({isActive}) => isActive ? 'font-semibold' : ''}>Contacto</NavLink>
            </nav>
          </div>
        </header>

        <section className="bg-neutral-100">
          <div className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl font-bold tracking-tight">Oliva Bar e Levar</h1>
              <p className="mt-3 text-neutral-700">Comida casera para llevar y para disfrutar en el local. Calidad, rapidez y cercanía.</p>
              <div className="mt-6 flex gap-3">
                <a href="/reservas" className="inline-flex items-center justify-center rounded-md bg-black px-4 py-2 text-white">Reservar</a>
                <a href="/menu" className="inline-flex items-center justify-center rounded-md border px-4 py-2">Ver menú</a>
              </div>
            </div>
            <div className="aspect-video rounded-lg bg-[url('https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center" aria-label="Foto del local" />
          </div>
        </section>

        <main className="mx-auto max-w-6xl px-4 py-10">
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

