class Store {
    _props: any

    constructor(){
        this._props = {}
    }

    property (key: string, value?: any): any {
        if(value){
            return this._props[key] = value
        }
        return this._props[key]
    }
}


export { Store }
