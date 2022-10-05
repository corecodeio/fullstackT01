import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
const postAuth = async (url, data) => {
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            authorization: 'Bearer  ' + localStorage.getItem('access_token')
        }
    }).then(data => data.json())
    return response;
}
const post = async (url, data) => {
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        }
    }).then(data => data.json())
    return response;
}
export const getLoginAsync = createAsyncThunk(
        'auth/getLoginAsync',
        async (data) => {
            try {
                const response = await postAuth('http://localhost:8000/auth/login',data)
                console.log(response)
                if (response.status) {
                    localStorage.setItem('access_token', response.access_token)
                    return response.access_token
                } else {
                    //datos falso
                }
            } catch (error) {
                //errores del servidor    
            }
        }
    )
    const token = localStorage.getItem('access_token')
    //console.log(token)
    const initialState = {
        login: token ? true : false,
        user: '',
        token: token ? token : null,
    }

    export const authSlice = createSlice({
        name: 'auth',
        initialState: initialState,
        reducers: {
            getLogin: (state, action) => {
                console.log(action)
                state.login = true;
                state.user = action.payload;
                //localStorage.setItem('user',action.payload)
            },
            logOut: (state, action) => {
                localStorage.removeItem('access_token')
                return initialState;
            }
        },
        extraReducers: {
            [getLoginAsync.fulfilled]: (state, action) => {
                state.token = action.payload
                state.login = true;
            }
        }
    })
    export const { getLogin, logOut } = authSlice.actions;

    export default authSlice.reducer;