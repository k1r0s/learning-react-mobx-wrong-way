import * as React from 'react';
import { observer } from 'mobx-react';
import { AppState } from "../flow/AppState"
import { MyInput } from "./MyInput"


@observer
class MyForm extends React.Component<{appState: AppState}, {}> {

    render() {
        return (
            <section>
                <div>
                    <MyInput appState={this.props.appState} model="prop1"/>
                </div>
                <div>
                    <MyInput appState={this.props.appState} model="prop2"/>
                </div>
            </section>
        )
     }

}

export { MyForm }
