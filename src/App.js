import logo from './logo.svg';
import './App.css';
import Topic from './Component/About';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Header from './Component/Header';
import Sidebar from './Component/Sidebar';
import TopicCard from './Component/TopicCard';
import ProblemCard from './Component/ProblemsCard';
import About from './Component/About';
import ProblemDetails from './Component/ProblemDetailView';

function App() {
  return (
    <div className="flex flex-col h-screen">
            <Header/>
      <div className="flex flex-1 Home">
            <Router>
            <Sidebar/>
          <main className="flex-1 bg-[#F3F4F6] px-6 py-8">
            <Routes>
              <Route exact path = "/" element={<TopicCard/>}></Route>
              <Route exact path = "/:topicId" element={<ProblemCard/>}></Route>
              <Route exact path="/About" element={<About/>}></Route>
              <Route exact path='/:topicID/:problemId' element={<ProblemDetails/>}></Route>
            </Routes>
          </main>
            </Router>
       </div>
    </div>
  );
}

export default App;
