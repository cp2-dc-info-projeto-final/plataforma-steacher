import User from "./User";
import { Chat } from './Chat';
import { Group } from './Group';

interface AuthState {
    auth: boolean,
    user: User
}

interface NotificationsState {
    message: string
}

interface LoadingState {
    loading: string
}

interface RouteState {
    page: string
}

interface ChatsState {
    chats: Chat[],
    groups: Group[],
    classes: Group[]
}

export interface State {
    auth: AuthState,
    notifications: NotificationsState,
    loadingScreen: LoadingState,
    route: RouteState,
    chats: ChatsState
}

export interface Action {
    type: string,
    payload?: any
}