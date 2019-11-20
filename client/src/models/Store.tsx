interface AuthState {
    auth: boolean
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