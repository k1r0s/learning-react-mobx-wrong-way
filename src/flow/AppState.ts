import {observable} from 'mobx';
import {Store} from './Store';

class AppState {
    @observable store: Store

    constructor(){
        this.store = new Store()
    }
}

export { AppState }
