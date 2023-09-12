let memory = {
    token: ''
}

const setIdToken = (token: string) => {
    // localStorage.setItem('idToken', token)
    memory.token = token
}

const getIdToken = () => {
    const idToken = memory.token
    return idToken
}

export const TokenUtils = {
    getIdToken,
    setIdToken
}