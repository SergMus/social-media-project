import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';

let store = {
    _state: {
        dialogsPage: {
            persons: [
                {id: 1, name: 'Valera', icon: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/breaking_bad_chemisrty_avatar_heisenberg-256.png'},
                {id: 2, name: 'Dimych', icon: 'https://cdn0.iconfinder.com/data/icons/kameleon-free-pack-rounded/110/Rapper-2-256.png'},
                {id: 3, name: 'Sveta', icon: 'https://cdn0.iconfinder.com/data/icons/famous-character-vol-2-colored/48/JD-31-256.png'},
                {id: 4, name: 'Andrey', icon: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/coffee_zorro_avatar_cup-256.png'},
                {id: 5, name: 'Marina', icon: 'https://cdn2.iconfinder.com/data/icons/health-care-and-first-responders/64/doctor-asian-female-coronavirus-256.png'},
                {id: 6, name: 'John Doe', icon: 'https://cdn0.iconfinder.com/data/icons/famous-character-vol-2-colored/48/JD-39-256.png'}
              ],
            messages: [
                {id: 1, text: 'Yo'},
                {id: 2, text: 'How are you doing?'},
                {id: 3, text: 'Whats does its mean?'},
                {id: 4, text: 'I am fine'},
              ],
            messArea: ''  
        },
        profilePage: {
            posts: [
                {name: 'John Doe', text: 'first post', date: '19:30 - 20 Марта 2021', likes: '2'},
                {name: 'John Doe', text: 'second one post', date: '14:32 - 22 Марта 2021', likes: '4'}
            ],
            txtArea: ''
        },
        sidebar: {}
    },
    _callSubscriber(){
        console.log('Dynamo champion');
    },

    getState(){
        return this._state;
    },
    subscribe(observer){
        this._callSubscriber = observer
    },
    dispatch(action){

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
       
        this._callSubscriber(this._state)
    }
}

export default store;