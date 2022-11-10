import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from "react-redux"
import store from "./redux/store"
// import CakeContainer from './components/CakeContainer';
// import UserContainer from './components/userContainer';
import Cart from './components/Cart';
import Items from './components/Items';

function App() {
  return (
    <Provider store={store}>
    <div >
     {/* <CakeContainer /> */}
     {/* <UserContainer /> */}
     <Cart />
     <Items />
    </div>
    </Provider>
  );
}

export default App;
