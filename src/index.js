// Original: https://dribbble.com/shots/5708399-Christmas-Collisions
// By: 𝔅𝔢𝔰𝔱𝔖𝔢𝔯𝔳𝔢𝔡𝔅𝔬𝔩𝔡 @bstsrvdbld

import ReactDOM from "react-dom"
import { Suspense } from "react"
import { App } from "./App"
import { Underlay, Overlay } from "./DirtyFigmaExport"
import "./styles.css"

ReactDOM.render(
  <>
    <Underlay />
    <Suspense fallback={null}>
      <App />
    </Suspense>
    <Overlay />
  </>,
  document.getElementById("root"),
)
