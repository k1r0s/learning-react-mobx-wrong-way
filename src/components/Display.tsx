import * as React from 'react';
import { observer } from 'mobx-react';
import { observe } from 'mobx';

@observer
class Display extends React.Component<{store: any, model: string}, {}> {
    constructor(props){
        super(props)

        observe(this.props.store, (change) => console.log(change))
    }

    render() {
        return (
            <p>
                {this.props.store[this.props.model]}
            </p>
        )
     }

}

export { Display }
