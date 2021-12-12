export default function Box(props) {
  const styles = {
    backgroundColor: props.on ? "tomato" : "white",
    color: props.on ? "white" : "tomato"
  }
  return (
    <div className="box" style={styles} onClick={props.handleClick}>{props.id}</div>
  )
}