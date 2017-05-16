import * as ReactDOM from 'react-dom';
import * as React from 'react';
import {observable} from 'mobx';
import {MyForm} from "./components/MyForm"
import {Display} from "./components/Display"

import { AppState } from "./flow/AppState"

const appState =  new AppState();

ReactDOM.render(<section>
    <MyForm appState={appState} />
    <Display appState={appState} model="prop1"/>
    <Display appState={appState} model="prop2"/>
    </section>, document.getElementById('root'));
