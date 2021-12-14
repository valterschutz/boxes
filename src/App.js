import Box from './Box.js'
import Counter from './Counter.js'

export default function App() {
  const [boxes, setBoxes] = React.useState(JSON.parse(localStorage.getItem("boxes")) || [{
    id: 1,
    on: true
  }])
  function toggle(id) {
    console.log(id)
    setBoxes(prevBoxes => prevBoxes.map(box => {
      if (box.id === id) {
        return {
          ...box,
          on: !box.on
        }
      } else {
        return box
      }
    }))
  }

  function changeBox(mode) {
    // Mode will either be "push" or "remove"
    if (mode === "push") {
      setBoxes(prevBoxes => prevBoxes.concat({
        id: prevBoxes[prevBoxes.length - 1].id + 1,
        on: Math.random() >= 0.5
      }))
    } else if (mode === "remove") {
      // Do not remove the last box
      if (boxes.length === 1) {
        return
      }
      setBoxes(prevBoxes => prevBoxes.slice(0, -1))
    }
  }

  const boxElements = boxes.map(box => <Box handleClick={() => toggle(box.id)} on={box.on} key={box.id} id={box.id} />)

  React.useEffect(() => {
    localStorage.setItem("boxes", JSON.stringify(boxes))
  }, [boxes])

  return (
    <div className="app">
      <Counter handleChange={changeBox} count={boxes.length} />
      <div className="box-container">
        {boxElements}

      </div>
    </div>
  )
}