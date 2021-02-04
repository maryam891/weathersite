
export default store => {
    store.subscribe((m, state) => {
        localStorage.setItem('items', JSON.stringify(state));
    });
};