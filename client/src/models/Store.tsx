export interface Action{
    type: string,
    payload?: any
}

export interface State{
    email: string,
    password: string
}