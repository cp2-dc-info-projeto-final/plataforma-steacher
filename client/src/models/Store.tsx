interface NotificationsState {
    message: string
}

interface LoadingState {
    loading: string
}

export interface State {
    notifications: NotificationsState,
    loadingScreen: LoadingState
}

export interface Action {
    type: string,
    payload?: any
}