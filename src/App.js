import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter , Route, Routes } from "react-router-dom";
function App() {
  const pageContent = 6;
  const newsKey = process.env.REACT_APP_NEWS_API_KEY;
 
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path='/' element={<News key="general" apiKey={newsKey} pageSize={pageContent} country="in" category="general"/>} /> 
      <Route path='/health' element={<News key="health" apiKey={newsKey} pageSize={pageContent} country="in" category="health"/>} /> 
      <Route path='/business' element={<News key="business" apiKey={newsKey} pageSize={pageContent} country="in" category="business"/>} /> 
      <Route path='/entertainment' element={<News key="entertainment" apiKey={newsKey} pageSize={pageContent} country="in" category="entertainment"/>} /> 
      <Route path='/technology' element={<News key="technology" apiKey={newsKey} pageSize={pageContent} country="in" category="technology"/>} /> 
      <Route path='/science' element={<News key="science" apiKey={newsKey} pageSize={pageContent} country="in" category="science"/>} /> 
      </Routes>
      </BrowserRouter>  
     
    </div>
  );
}

export default App;
