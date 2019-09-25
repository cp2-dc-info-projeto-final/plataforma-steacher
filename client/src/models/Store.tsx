interface LoginState{
    email: string,
    password: string,
}

interface CadastroState{
    name: string,
    subname: string,
    registration: string,
    email: string,
    emailConfirm: string,
    password: string,
    passwordConfirm: string,
    accountType: string
}

interface AuthState{
    redirect: boolean
}

export interface State{
    login: LoginState,
    cadastro: CadastroState
    auth: AuthState
}

export interface Action{
    type: string,
    payload?: any
}
