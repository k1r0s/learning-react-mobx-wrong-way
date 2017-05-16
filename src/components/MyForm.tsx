import * as React from 'react';
import { observer } from 'mobx-react';
import { MyInput } from "./MyInput"

class MyForm extends React.Component<{store: any}, null> {

    render() {
        return (
            <section>
                <div>
                    <MyInput store={this.props.store} model="prop1"/>
                </div>
                <div>
                    <MyInput store={this.props.store} model="prop2"/>
                </div>
            </section>
        )
     }
}

export { MyForm }
