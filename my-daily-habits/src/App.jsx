import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import BemVindo from './components/BemVindo'

// Componente cabecalho 

function App() {
  return ( 
  <div>
    <Header titulo={"My Daily Habits"} descricao={"Gerencie seus hábitos diários de forma simples e visual."}/>
    <BemVindo nomeUsuario={"Amanda Barbosa"} totalHabitos={2}/>
    <Footer />
  </div>
  )
}

export default App
