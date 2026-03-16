import { useState, useEffect } from 'react' 
import HabitCard from './HabitCard'

function HabitList() {
  const [habits, setHabits] = useState(() => {
    const stored = localStorage.getItem('my-daily-habits');
    
    if (!stored) {
      return [
        { id: 1, nome: 'Exercício',  descricao: 'Treino de força',    meta: 5, ativo: true,  diasFeitos: 5 },
        { id: 2, nome: 'Leitura',    descricao: 'Livro ou artigo',    meta: 7, ativo: true,  diasFeitos: 3 },
        { id: 3, nome: 'Meditação',  descricao: 'Respiração e foco',  meta: 7, ativo: false, diasFeitos: 0 },
        { id: 4, nome: 'Hidratação', descricao: 'Beber 2L de água',   meta: 7, ativo: true,  diasFeitos: 6 },
      ];
    }

    try {
      return JSON.parse(stored);
    } catch {
      return [];
    }
  });

  const [novoNome,      setNovoNome]      = useState('')
  const [novaDescricao, setNovaDescricao] = useState('')
  const [novaCategoria, setNovaCategoria] = useState('')

  useEffect(() => {
    localStorage.setItem('my-daily-habits', JSON.stringify(habits));
  }, [habits]); 

  const adicionarHabit = (event) => {
    event.preventDefault()
    if (!novoNome.trim()) {
      alert('Informe um nome para o hábito.')
      return
    }

    const novoHabit = {
      id: Date.now(),
      nome: novoNome,
      descricao: novaDescricao,
      meta: 7,
      ativo: true,
      diasFeitos: 0,
      categoria: novaCategoria || 'Geral',
    }

    setHabits([...habits, novoHabit])
    setNovoNome('')
    setNovaDescricao('')
    setNovaCategoria('')
  }

  const removerHabit = (id) => {
    setHabits(habits.filter(habit => habit.id !== id))
  }

  return (
    <section>
      <form onSubmit={adicionarHabit} className="habit-form">
        <div>
          <label>
            Nome do hábito *
            <input
              type="text"
              value={novoNome}
              onChange={(e) => setNovoNome(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Descrição
            <input
              type="text"
              value={novaDescricao}
              onChange={(e) => setNovaDescricao(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Categoria
            <input
              type="text"
              value={novaCategoria}
              onChange={(e) => setNovaCategoria(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">Adicionar hábito</button>
      </form>

      <ul>
        {habits.length === 0 && <p>Nenhum hábito cadastrado ainda.</p>}
        
        {habits.map((habit) => (
          <HabitCard
            key={habit.id}
            nome={habit.nome}
            descricao={habit.descricao}
            meta={habit.meta}
            ativo={habit.ativo}
            diasFeitos={habit.diasFeitos}
            onRemover={() => removerHabit(habit.id)}
          />
        ))}
      </ul>
    </section>
  );
}

export default HabitList;