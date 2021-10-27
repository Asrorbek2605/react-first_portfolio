import './App.css';
import Blog from "./Pages/Blog";
import Biography from "./Pages/Biography";
import Contact from "./Pages/Contact";
import Details from "./Pages/Details";
import Events from "./Pages/Events";
import Home from "./Pages/Home";
import Inspirations from "./Pages/Inspirations";
import Interiors from "./Pages/Interiors";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import {Switch,Route} from "react-router-dom";
import Example from "./Components/Example";
function App() {
  return (
    <div className="App">

      <Navbar/>
        <Switch>


        <Route exact path="/" component={Home}/>
        <Route exact path="/blog" component={Blog}/>
        <Route exact path="/biography" component={Biography}/>
        <Route exact path="/interiors" component={Interiors}/>
        <Route  exact path="/events" component={Events}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/inspirations" component={Inspirations}/>
      <Route component={Details}/>
        </Switch>
      {/*  <Blog/>
        <Biography/>
        <Contact/>
        <Details/>
        <Events/>
        <Home/>
        <Inspirations/>
        <Interiors/>*/}
    <Footer/>
<Example/>
    </div>
  );
}

export default App;
