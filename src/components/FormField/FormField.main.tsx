import * as React from "react";

export enum FieldType {
    TEXT,
    NUMBER,
    DATE
}

interface Fields {
    label: string
    model: any
    type: FieldType
}


export default class FormField extends React.Component<Fields, null> {

    typeRender: any

    renderTypeText(){
        return (
            <input />
        )
    }
    renderTypeNumber(){
        return (
            <input />
        )
    }
    renderTypeDate(){
        return (
            <input />
        )
    }

    constructor(props){
        super(props)

        switch(this.props.type){
            case FieldType.TEXT:
                this.typeRender = this.renderTypeText()
                break
            case FieldType.NUMBER:
                this.typeRender = this.renderTypeNumber()
                break
            case FieldType.DATE:
                this.typeRender = this.renderTypeDate()
                break
            default:
        }
    }

    render(){

        return (
            <div>
                {this.typeRender}
            </div>
        )
    }
}
