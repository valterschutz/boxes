import boxes from './boxes.js'
import Box from './Box.js'
import Counter from './Counter.js'

export default function App() {
  const [myBoxes, setMyBoxes] = React.useState(boxes)
  function toggle(id) {
    console.log(id)
    setMyBoxes(prevMyBoxes => prevMyBoxes.map(box => {
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
      setMyBoxes(prevMyBoxes => prevMyBoxes.concat({
        id: prevMyBoxes[prevMyBoxes.length - 1].id + 1,
        on: Math.random() >= 0.5
      }))
    } else if (mode === "remove") {
      // Do not remove the last box
      if (myBoxes.length === 1) {
        return
      }
      setMyBoxes(prevMyBoxes => prevMyBoxes.slice(0, -1))
    }
  }

  const boxElements = myBoxes.map(box => <Box handleClick={() => toggle(box.id)} on={box.on} key={box.id} id={box.id} />)

  return (
    <div className="app">
      <Counter handleChange={changeBox} count={myBoxes.length} />
      <div className="box-container">
        {boxElements}

      </div>
    </div>
  )
}