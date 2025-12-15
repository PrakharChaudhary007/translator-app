import { useState } from "react";
import "./App.css";
import TranslatorStart from "./components/translatorStart";
import TranslatorApp from "./components/translatorApp";
function App(){
const[showTranslatorApp, setTranslatorApp]=useState(false);
   return <div className="flex flex-col sm:h-auto rounded-xl shadow-xl h-[200px] w-[200px] bg-black bg-[#2d2d2d] ">
   
      {showTranslatorApp? (
         <TranslatorApp onClose={handleToggle}/>
      ):(
         <TranslatorStart onStart={handleToggle}/>
      )}
   </div>

   
}
export default App;