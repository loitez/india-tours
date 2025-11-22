export const clearCookie = () => fetch('/api/auth/logout', {
    method: 'POST',
}).then(res => res.json())