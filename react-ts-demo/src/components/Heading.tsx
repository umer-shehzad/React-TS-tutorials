type Headingprop = {
    children: string
}
const Heading = (props: Headingprop) => {
  return (
    <h2>{props.children}</h2>
  )
}

export default Heading
