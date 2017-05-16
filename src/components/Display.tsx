import * as React from 'react';
import { observer } from 'mobx-react';
import { AppState } from "../flow/AppState"

@observer
class Display extends React.Component<{appState: AppState, model: string}, {}> {

    render() {
        return (
            <p>
                {this.props.appState.store.property(this.props.model)}
            </p>
        )
     }

}

export { Display }
