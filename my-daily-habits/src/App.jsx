import './App.css'
import Header    from './components/Header'
import Footer    from './components/Footer'
import BemVindo  from './components/BemVindo'
import SecaoHabitos from './components/SecaoHabitos'
import HabitList from './components/HabitList'


function App() {
 const habits = [
   { id: 1, titulo: 'Exercício',   meta: 5, ativo: true,  diasFeitos: 5, categoria: 'Saúde'},
   { id: 2, titulo: 'Leitura',     meta: 7, ativo: true,  diasFeitos: 3, categoria: 'Entretenimento' },
   { id: 3, titulo: 'Meditação',   meta: 7, ativo: false, diasFeitos: 0, categoria: 'Saúde' },
   { id: 4, titulo: 'Hidratação',  meta: 7, ativo: true,  diasFeitos: 6, categoria: 'Saúde' },
 ]

 /*function total(){
    const [habits] = useState(() => {
    const stored = localStorage.getItem('my-daily-habits');
       try {
      return JSON.parse(stored);
    } catch {
      return [];
    }
  }

 });
 */


 return (
   <div>
     <Header titulo={"My Daily Habits"} descricao={"Gerencie seus hábitos diários de forma simples e visual"}/>
     <BemVindo nomeUsuario="Amanda Barbosa" totalHabitos={habits.length} />
     <SecaoHabitos titulo="Meus Hábitos">
       <HabitList habits={habits} />
     </SecaoHabitos>
     <Footer />
   </div>
 )
}


export default App
