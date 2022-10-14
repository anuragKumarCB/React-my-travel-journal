import Card from './components/Card';
import Navbar from './components/Navbar';
import data from "./data/data"

function App() {
  const cardData = data.map((cards) => {
    return <Card cardData={cards} />
  })
  return (
    <div className="App">
      <Navbar />
      {cardData}
    </div>
  );
}

export default App;
