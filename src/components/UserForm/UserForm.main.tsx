import * as React from "react";

import Translations from "../../data/Translations"
import FormField from "../FormField/FormField.main"
import { FieldType } from "../FormField/FormField.main"

class UserFormData {
    static userName: string
}

export default class UserForm extends React.Component<null, null> {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                <FormField
                type={FieldType.TEXT}
                label={Translations.FORM_NAME_LABEL}
                model={UserFormData.userName} />


            </div>
        )
    }
}
