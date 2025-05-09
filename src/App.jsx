import "./App.css";
import Navbar from "./components/navbar";
import { ThemeProvider } from "./context/themeContext";
import Home from "./components/main";
import How from "./components/how";
import Why from "./components/why";
import Testimonials from "./components/testimonials";
import Contact from "./components/contact";
import ChatWidget from "./components/chatWidget";

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <Home />
      <How />
      <Why />
      <Testimonials />
      <Contact />
      <ChatWidget />
    </ThemeProvider>
  );
}

export default App;
