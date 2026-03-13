function HabitCard({ titulo, meta, ativo = true, diasFeitos = 0, categoria = 'Geral' }) {
 const metaAtingida = diasFeitos >= meta
 const metaZero = diasFeitos === 0

 const mensagemZero = metaZero
    ? 'Você não fez nenhum dia, vamos começar?'
    : ''
 const mensagemMeta = metaAtingida
   ? 'Meta da semana atingida!'
   : `${diasFeitos} de ${meta} dias concluídos`

 return (
   <div className="habit-card">
     <h3>{titulo}</h3>
     <p>{mensagemMeta}</p>
     <p>{mensagemZero}</p>
     <small>Categoria: {categoria}</small>
     <br/>


     <span>{ativo ? 'Ativo' : 'Pausado'}</span>

     {metaAtingida && (
       <p>Parabéns! Você manteve a sequência essa semana!</p>
     )}
   </div>
 )
}


export default HabitCard
