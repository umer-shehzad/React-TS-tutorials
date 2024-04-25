import './App.css'
import Greet from './components/Greet'
import Person from './components/Person'
import PersonList from './components/PersonList'

function App() {
  const person = {
    first: 'Umer',
    last: 'Shehzad'
  }

  const personList = [
    {
      first: 'M.',
      last: 'Rafay',
    },
    {
      first: 'Husnain',
      last: 'Sheroz',
    },
    {
      first: 'Daniyal',
      last: 'Ashiq',
    },
  ]

  return (
    <>
      <Greet name="Umer" messsageCount={10} isLoggedIn={false} />
      <Person name={person} />
      <PersonList names={personList} />
    </>
  )
}

export default App
