const changeEmail = (value: string) =>{
    return {
        type: 'CHANGE-EMAIL',
        payload: value
    };
};

const changePassword = (value: string) =>{
    return {
        type: 'CHANGE-PASSWORD',
        payload: value
    };
};

export { changeEmail, changePassword };