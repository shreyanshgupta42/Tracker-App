
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Home from './pages/Home';

const theme = {
  mainColors: {
    blue: '#2400ff',
    gray: '#c6c6c6',
    dark: '#353535',
  },
};
function App() {
  return (
    <ThemeProvider theme={theme }>

    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route exact path="/:country">
        here comes the country page
        <country/>
      </Route>
      <Route>This is 404 page</Route>
    </Switch>
    </ThemeProvider>
  );
}

export default App;
