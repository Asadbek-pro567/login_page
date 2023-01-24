const initialState = [
    {
        firstName: '',
        lastName: '',
        tel: '',
        mail: '',
        manzil: '',
        userName: '',
        password1: '',
        password2: '',
    }
]

const Shop = (state=initialState, action)=>{
    switch(action.type){
        case 'NAME':
            state[0].firstName = action.payload.firstName   
            state[0].lastName = action.payload.lastName
            return state
        case 'CONTACT':
            state[0].tel = action.payload.tel   
            state[0].mail = action.payload.mail
            state[0].manzil = action.payload.manzil
            return state
        case 'PASSWORD':
            state[0].userName = action.payload.userName   
            state[0].password1 = action.payload.password1
            state[0].password2 = action.payload.password2
            return state
        default:
            return state
            break;
    }
}

export default Shop