import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import ShoppingCart from './Components/ShoppingCart/ShoppingCart';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
    <div class="bg-gray-50 h-full md:h-screen">
    <Header></Header>
    <ShoppingCart></ShoppingCart>

</div>
</Provider>
  );
}

export default App;
