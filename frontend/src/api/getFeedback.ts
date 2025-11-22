export const getFeedback = () => fetch('/api/feedback', {
        method: 'GET',
    }).then(res => res.json())