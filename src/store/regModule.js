export default ({
    namespaced: true,
    state: {
        email: '',
        firstName: '',
        middleName: '',
        phoneNumber: '',
        city: '',
        password: '',
    },
    getters: {
        getEmail: state => state.email,
        getFirstName: state => state.firstName,
        getLastName: state => state.lastName,
        getPhoneNumber: state => state.phoneNumber,
        getCity: state => state.city,
        getPassword: state => state.password
    },
    mutations: {
        setEmail(state, value){
            state.email = value
        },
        setFirstName(state, value){
            state.firstName = value
        },
        setMiddleName(state, value){
            state.middleName = value
        },
        setPhoneNumber(state, value){
            state.phoneNumber = value
        },
        setCity(state, value){
            state.city = value
        },
        setPassword(state, value){
            state.password = value
        },
        updateForm(state, newData){
            state.email = newData.email
            state.firstName = newData.firstName
            state.lastName = newData.lastName
            state.phoneNumber = newData.phoneNumber
            state.city = newData.city
            state.password = newData.password
        }
    },
    actions: {
    }
})
