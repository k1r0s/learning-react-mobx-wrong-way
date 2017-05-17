import {observable} from 'mobx';

class FormStore {
    @observable name: string
    @observable surname: string
    @observable dateOfBirth: Date
    @observable address: string
    @observable email: string
}


export default new FormStore()
