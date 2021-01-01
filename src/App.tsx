import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';
import Money from './views/Money';
import Tags from './views/Tags';
import Statistics from './views/statistics';




function App() {
    return (
        <Router>

                    <Switch>
                        <Route path="/money">
                            <Money/>
                        </Route>
                        <Route path="/tags">
                            <Tags/>
                        </Route>
                        <Route path="/statistics">
                            <Statistics/>
                        </Route>
                        <Redirect exact from="/" to="/money"/>
                        <Route path="*">
                            <NoMatch/>
                        </Route>
                    </Switch>

        </Router>
    );
}

function NoMatch() {
    return (
        <div>页面不存在，输出地址了吧！</div>
    );
}





export default App;
