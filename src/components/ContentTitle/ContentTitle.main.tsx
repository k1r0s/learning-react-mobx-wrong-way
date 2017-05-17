import * as React from "react";

import Translations from "../../data/Translations"

export default class ContentTitle extends React.Component<null, null> {
    render(){
        return (
            <h3>{Translations.TITLE}</h3>
        )
    }
}
