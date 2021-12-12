export default function Counter(props) {
  return (
    <div className="counter">
      <button className="counter__button" onClick={() => props.handleChange("remove")}>-</button>
      <h2 className="counter__count">{props.count}</h2>
      <button className="counter__button" onClick={() => props.handleChange("push")}>+</button>
    </div>
  )
}