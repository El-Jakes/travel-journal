import Nav from "./components/Nav";
import Cards from "./components/Cards";
import data from './data'

function App() {
  const cards = data.map(datum => {
    return (
      <Cards
      key={datum.id} 
        datum={datum}
        />
    )
  })

  return (
    <div className="App">
      <Nav />
      <section className="cards-container">
        {cards}
      </section>
    </div>
  );
}

export default App;
