import * as React from "react";

import ContentTitle from "../ContentTitle/ContentTitle.main";
import UserForm from "../UserForm/UserForm.main";

export default class Content extends React.Component<null, null> {
    render(){
        return (
            <div>
                <ContentTitle />
                <UserForm />
            </div>
        )
    }
}
