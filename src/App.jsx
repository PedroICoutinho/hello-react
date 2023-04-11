import { ContentSection } from "./components/ContentSection";
import { Header } from "./components/Header";
import "./global.css";
import { ButtonComponents } from "./components/ButtonComponents";
function App() {
  

  return (
    //Acrescenta um elemento sem adicionar um PAI
    <> 
      <Header/>
      <ContentSection />
      <ButtonComponents/>
    </>
  )
}

export default App
