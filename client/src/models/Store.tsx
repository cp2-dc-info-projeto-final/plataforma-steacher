interface LoginState{
    email: string,
    password: string,
}

interface PasswordState{
    visibility: boolean
}

export interface State{
    login: LoginState,
    password: PasswordState
}

export interface Action{
    type: string,
    payload?: any
}
