import * as React from "react";

import Sidebar from "../Sidebar/Sidebar.main";
import Content from "../Content/Content.main";

export default class Root extends React.Component<null, null> {
    render(){
        return (
            <div className="mainContainer">
                <Sidebar />
                <Content />
            </div>
        )
    }
}
