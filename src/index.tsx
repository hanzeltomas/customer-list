
import ReactDOM from 'react-dom';
import App from './App';
import Customer from './components/Customer'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ApolloProvider} from "@apollo/client";
import apollo from './server/server'

ReactDOM.render(
  <ApolloProvider client={apollo}>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/details' element={<Customer/>}/>
    </Routes>
  </BrowserRouter></ApolloProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
