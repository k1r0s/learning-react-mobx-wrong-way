import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { observable } from 'mobx';
import appState from "./flow/AppState"
import { MyForm } from "./components/MyForm"
import { Display } from "./components/Display"

ReactDOM.render(<section>
    <MyForm store={appState.store} />
    <Display store={appState.store} model="prop1"/>
    <Display store={appState.store} model="prop2"/>
    </section>, document.getElementById('root'));
