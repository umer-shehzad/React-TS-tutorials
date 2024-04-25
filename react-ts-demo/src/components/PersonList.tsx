import { Name } from "./Person.types";

type PersonListProps = {
    names: Name[]
}

const PersonList = (props: PersonListProps) => {
  return (
    <div>
        {
            props.names.map(name => {
                return (
                    <h3>{name.first} {name.last}</h3>
                )
            })
        }
    </div>
  )
}

export default PersonList
