const initial_state = {
    email: '',
    password: ''
};
export default (state = initial_state, acttion) => {
    switch (acttion.type) {
        case 'email_changed':
            return {...state, email: acttion.payload};
        case 'password_changed':
            return {...state, password: acttion.payload};
        default:
            return state;
    }
}