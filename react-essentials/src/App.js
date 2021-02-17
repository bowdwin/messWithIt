import './App.css';
import rest from './images/surf.jpeg';

function Header(props) {
  console.log(props);
  return (
    <header>
      {/* // use JSX expression */}
      <h1> {props.name}'s Kithen</h1>
    </header>
  );
}

function Main(props) {
  return (
    <section>
      <p> We serve {props.adjective} food</p>
      <img src={rest} alt='surf restauraunt in Portsmouth NH' />
      <ul style={{ textAlign: 'left' }}>
        {props.dishes.map((dish) => (
          <li key={dish.id}>{dish.title}</li>
        ))}
      </ul>
    </section>
  );
}

function Footer(props) {
  return (
    <footer>
      <p>
        {' '}
        Copywright {props.year} {props.name}{' '}
      </p>
    </footer>
  );
}

const dishes = ['Mac N Cheese', 'Steak', 'Brocolli', 'Cheese doodles'];

const dishObjects = dishes.map((dish, i) => ({ id: i, title: dish }));
console.log(dishObjects);

function App() {
  return (
    <div className='App'>
      {/* <h1>header</h1> replace with header  */}
      <Header name='Keith' />
      <Main adjective='amazing' dishes={dishObjects} />
      <Footer year={new Date().getFullYear()} name='keith' />
    </div>
  );
}

export default App;
