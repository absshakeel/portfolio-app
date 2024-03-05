import './App.css'
import Editor from './components/pages/editor'
import Tutorial from './components/pages/tutorial'
import { HashRouter, Route, Switch } from 'react-router-dom'

function IndexApp() {
    return (
        <HashRouter>
            <Switch>
                <Route path="/" exact>
                    <Editor></Editor>
                </Route>
                <Route path="/tutorial">
                    <Tutorial></Tutorial>
                </Route>
            </Switch>
        </HashRouter>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <IndexApp />
  </React.StrictMode>
);
