import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'
import { theme } from './constants'
import { GraphqlProvider } from 'react-apollo-the-easy-way'

console.log(process.env.MOCKING)

import {
    GRAPHQL_MOCKING_ENDPOINT,
    GRAPHQL_PRODUCTION_ENDPOINT,
    GRAPHQL_TESTING_ENDPOINT,
    LOCAL_STORAGE_JWT_TOKEN_KEY,
    mocking
} from './constants'

const graphqlOptions = {
    GRAPHQL_MOCKING_ENDPOINT,
    GRAPHQL_PRODUCTION_ENDPOINT,
    GRAPHQL_TESTING_ENDPOINT,
    LOCAL_STORAGE_JWT_TOKEN_KEY,
    mocking
}

const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <GraphqlProvider  {...graphqlOptions}>
                <Router>
                    <Switch>
                        <Route
                            path='/'
                            exact
                            component={() => <div>ciao</div>}
                        />
                    </Switch>
                </Router>
            </GraphqlProvider>
        </ThemeProvider>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

// @ts-ignore
if (module.hot) {
    // @ts-ignore
    module.hot.accept();
}