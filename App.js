var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

import Box from './Box.js';
import Counter from './Counter.js';

export default function App() {
  var _React$useState = React.useState(JSON.parse(localStorage.getItem("boxes")) || [{
    id: 1,
    on: true
  }]),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      boxes = _React$useState2[0],
      setBoxes = _React$useState2[1];

  function toggle(id) {
    console.log(id);
    setBoxes(function (prevBoxes) {
      return prevBoxes.map(function (box) {
        if (box.id === id) {
          return Object.assign({}, box, {
            on: !box.on
          });
        } else {
          return box;
        }
      });
    });
  }

  function changeBox(mode) {
    // Mode will either be "push" or "remove"
    if (mode === "push") {
      setBoxes(function (prevBoxes) {
        return prevBoxes.concat({
          id: prevBoxes[prevBoxes.length - 1].id + 1,
          on: Math.random() >= 0.5
        });
      });
    } else if (mode === "remove") {
      // Do not remove the last box
      if (boxes.length === 1) {
        return;
      }
      setBoxes(function (prevBoxes) {
        return prevBoxes.slice(0, -1);
      });
    }
  }

  var boxElements = boxes.map(function (box) {
    return React.createElement(Box, { handleClick: function handleClick() {
        return toggle(box.id);
      }, on: box.on, key: box.id, id: box.id });
  });

  React.useEffect(function () {
    localStorage.setItem("boxes", JSON.stringify(boxes));
  }, [boxes]);

  return React.createElement(
    'div',
    { className: 'app' },
    React.createElement(Counter, { handleChange: changeBox, count: boxes.length }),
    React.createElement(
      'div',
      { className: 'box-container' },
      boxElements
    )
  );
}