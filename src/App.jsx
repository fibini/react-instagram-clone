import Nav from "./components/Nav-bar"
import Status from "./components/Status"
import Posts from "./components/Posts"
import Caught from "./components/Caught-up"
import Suggested from "./components/Suggested"
import { Sugpost } from "./components/Suggested"
import Footer from "./components/Footer"

export default function App() {
  return (
    <>
      <div className=" mb-15">
        <Nav />
        <Status />
        <Posts />
        <Caught />
        <Suggested />
        <Sugpost />
      </div>
      <Footer />
    </>
  )
}

