export const getLogin= (state, action) => {
    console.log(action)
    state.login = true;
    state.user = action.payload;
    //localStorage.setItem('user',action.payload)
}
export const logOut = (state, action) => {
    localStorage.removeItem('access_token')
    return initialState;
}