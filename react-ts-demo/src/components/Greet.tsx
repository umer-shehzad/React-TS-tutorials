type GreetProps = {
    name: string,
    messsageCount: number,
    isLoggedIn: boolean
}

const Greet = (props: GreetProps) => {
  return (
    <div>
        {
            props.isLoggedIn 
            ? <h1>Welcome {props.name.toLocaleUpperCase()}! You have {props.messsageCount} unread messages.</h1>
            : <h1>Welcome TauriCode Team</h1>
        }
    </div>
  )
}

export default Greet
