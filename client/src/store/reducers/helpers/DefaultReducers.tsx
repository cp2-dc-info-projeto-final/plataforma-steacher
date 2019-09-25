export const attaches = (state: any, type: string, code: string, dado?: any) => {
    switch (type) {
        case code:
            return state = dado;

        default:
            return state;
    };
}