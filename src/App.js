import Logo from './components/logo/google';
import Buscar from './components/search/buscador';
import Pie from './components/footer/footer';
import Menusillo from './components/menu/menu';

function App() {
  return (
    <div className="App">
      <Menusillo />
      <Logo />
      <Buscar />
      <Pie/>
    </div>
  );
}

export default App;
