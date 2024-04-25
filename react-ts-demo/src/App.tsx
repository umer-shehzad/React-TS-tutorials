import './App.css'
import Greet from './components/Greet'
import Heading from './components/Heading'
import Oscar from './components/Oscar'
import Person from './components/Person'
import PersonList from './components/PersonList'
import Status from './components/Status'

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
      {/* <Greet name="Umer" messsageCount={10} isLoggedIn={false} /> */}
      <Person name={person} />
      <PersonList names={personList} />
      {/* <Status status='loading'/> */}
      {/* <Heading>Placeholder text</Heading> */}
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicpario!</Heading>
      </Oscar>
    </>
  )
}

export default App
