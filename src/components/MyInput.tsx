import * as React from 'react';undefined
import { observer } from 'mobx-react';

@observer
class MyInput extends React.Component<{store: any, model: string}, {}> {

    handleChange(e: any){
        this.props.store[this.props.model] = e.target.value
    }

    render() {
        return (
            <div>
                <input onChange={this.handleChange.bind(this)} />
            </div>
        )
     }

}

export { MyInput }
