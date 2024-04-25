import { useState } from "react"
import Highlights from "./components/Highlights"
import { Navbar, Card, Hero, Sales, Stories, Footer } from "./components/index"
import { heroapi, popularsales, toprateslaes, highlight, sneaker, story, footerAPI } from "./data/data"

import { useDispatch, useSelector } from "react-redux"

function App() {
  const [isCartShown, setIsCartShown] = useState(false)
  const Reverser = (el) => {
    setIsCartShown(el = !el)
  }

  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)

  return (
    <div className="realtive">
      <Navbar isCartShown={isCartShown} setIsCartShown={setIsCartShown} Reverser={Reverser} cart={cart} />
      <Card isCartShown={isCartShown} Reverser={Reverser} cart={cart} dispatch={dispatch} />
      <Hero heroapi={heroapi} />
      <Sales sales={popularsales} ifExist={true} isCartShown={isCartShown} dispatch={dispatch} Reverser={Reverser} />
      <Highlights highlights={highlight} ifExist={true} />
      <Sales sales={toprateslaes} ifExist={false} dispatch={dispatch} Reverser={Reverser} />
      <Highlights highlights={sneaker} ifExist={false} />
      <Stories story={story} />
      <Footer footerAPI={footerAPI} />
    </div>
  )
}

export default App
