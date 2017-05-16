import * as React from 'react';
import { observer } from 'mobx-react';
import { AppState } from "../flow/AppState"

@observer
class MyInput extends React.Component<{appState: AppState, model: string}, {}> {

    handleChange = (e: any) => {
        this.props.appState.store.property(this.props.model, e.target.value)
    }

    render() {
        return (
            <div>
                <input onChange={this.handleChange} />
            </div>
        )
     }

}

export { MyInput }
