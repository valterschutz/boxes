export default function Box(props) {
  var styles = {
    backgroundColor: props.on ? "tomato" : "white",
    color: props.on ? "white" : "tomato"
  };
  return React.createElement(
    "div",
    { className: "box", style: styles, onClick: props.handleClick },
    props.id
  );
}