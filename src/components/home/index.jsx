import Categories from "./categories.component"
import EditorPick from "./editor-pick.component"
import Qualities from "./qualities.component"
import Showcase from "./showcase.component"

const Home = () => {
  return (
    <>
        <Showcase />
        <Qualities />
        <Categories />
        <EditorPick />
    </>
  )
}

export default Home