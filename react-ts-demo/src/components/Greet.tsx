type GreetProps = {
    name: string
}

const Greet = (props: GreetProps) => {
  return (
    <div>
      <h1>Welcome {props.name.toLocaleUpperCase()}! TypeScript is used in this project.</h1>
    </div>
  )
}

export default Greet
