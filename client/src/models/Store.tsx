import User from "./User";

interface AuthState {
    auth: boolean,
    user: User | null
}

interface NotificationsState {
    message: string
}

interface LoadingState {
    loading: string
}

export interface State {
    auth: AuthState,
    notifications: NotificationsState,
    loadingScreen: LoadingState
}

export interface Action {
    type: string,
    payload?: any
}