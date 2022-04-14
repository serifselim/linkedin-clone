export const createUser = (state, newUser) => {
    state.usersList.push(newUser);
    localStorage.setItem('usersList', JSON.stringify(state.usersList));
};
