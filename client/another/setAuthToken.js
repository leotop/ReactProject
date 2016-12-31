export default setAuthorizationToken(token) {
    if(token) {
        axios.defaults.headers.common['Authorization'] = 'Bearer ${token}';
    }
}
