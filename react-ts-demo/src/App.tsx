import './App.css'
import Greet from './components/Greet'
import Person from './components/Person'

function App() {
  const person = {
    first: 'Abdullah',
    last: 'Sarim'
  }

  return (
    <>
      <Greet name="Umer" messsageCount={10} isLoggedIn={false} />
      <Person name={person}/>
    </>
  )
}

export default App
