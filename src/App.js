import './App.css';
import './vars.css'
import Footer from './footer/footer';
import Sidebar from './sidebar/sidebar';
import Main from './main/main';

function App() {
  return (
    <div>
      <Sidebar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
