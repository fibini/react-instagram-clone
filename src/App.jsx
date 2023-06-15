import Nav from "./components/Nav-bar"
import Status from "./components/Status"
import Posts from "./components/Posts"
import Suggested from "./components/Suggested"
import Footer from "./components/Footer"

export default function App() {
  return (
    <>
      <div className=" mb-10">
        <Nav />
        <Status />
        <Posts />
        <Suggested />
      </div>
      <Footer />
    </>
  )
}

