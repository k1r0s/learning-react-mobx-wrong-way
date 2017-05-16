import {observable} from 'mobx';

class AppState {
    @observable store: any = {
        prop1: "",
        prop2: "",
    }
}

export default new AppState()
