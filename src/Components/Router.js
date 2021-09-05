import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import Home from "../Routes/Home";
import Projects from "../Routes/Projects";
import Search from "../Routes/Search";
import Header from "./Header";


export default () => (
    <Router>
        <Header/>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/projects" component={Projects} />
            <Route path="/search" component={Search} />
            <Redirect from="*" to="/"/>
        </Switch>
    </Router>
);
