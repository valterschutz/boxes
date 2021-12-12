export default function Counter(props) {
  return React.createElement(
    "div",
    { className: "counter" },
    React.createElement(
      "button",
      { className: "counter__button", onClick: function onClick() {
          return props.handleChange("remove");
        } },
      "-"
    ),
    React.createElement(
      "h2",
      { className: "counter__count" },
      props.count
    ),
    React.createElement(
      "button",
      { className: "counter__button", onClick: function onClick() {
          return props.handleChange("push");
        } },
      "+"
    )
  );
}