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
import NoMatch from './views/NoMatch';
import styled from 'styled-components';
import {Tag} from './Tag';

const AppWrapper= styled.div`
color: #333;
max-width: 520px;
margin: 0 auto;
`;
function App() {
    return (
        <AppWrapper>
        <Router>

                    <Switch>
                        <Route path="/money" exact>
                            <Money/>
                        </Route>
                        <Route path="/tags/:id" exact={true}>
                            <Tag/>
                        </Route>
                        <Route path="/tags" exact={true}>
                            <Tags/>
                        </Route>
                        <Route path="/statistics" exact>
                            <Statistics/>
                        </Route>
                        <Redirect exact from="/" to="/money" />
                        <Route path="*">
                            <NoMatch/>
                        </Route>
                    </Switch>
        </Router>
        </AppWrapper>
    );
}




export default App;
