import { useState } from 'react'
import { destinatii as destinatiiInitiale } from './data/destinatii.js'
// Adaugă stergeDestinatie la import
import { getNevizitate, totalZile, marcheazaVizitat, adaugaDestinatie, stergeDestinatie } from './utils/destinatii.js'
import ListaDestinatii from './components/ListaDestinatii.jsx'
import Rezumat from './components/Rezumat.jsx'
import FormularDestinatie from './components/FormularDestinatie.jsx'
import './App.css'

export default function App() {
  const [destinatii, setDestinatii] = useState(destinatiiInitiale)

  const numarTotal = destinatii.length
  const nevizitate = getNevizitate(destinatii)
  const numarNevizitate = nevizitate.length
  const numarZile = totalZile(nevizitate)

  function handleToggle(id) {
    setDestinatii((curent) => marcheazaVizitat(curent, id))
  }

  function handleAdd(nouaDestinatie) {
    setDestinatii((curent) => adaugaDestinatie(curent, nouaDestinatie))
  }

  // Funcția nouă de ștergere
  function handleDelete(id) {
    setDestinatii((curent) => stergeDestinatie(curent, id))
  }

  return (
    <main>
      <h1>City Explorer</h1>
      <Rezumat total={numarTotal} nevizitate={numarNevizitate} zile={numarZile} />
      <FormularDestinatie onAdd={handleAdd} />
      <ListaDestinatii destinatii={destinatii} onToggle={handleToggle} onDelete={handleDelete} />
    </main>
  )
}