export const getCourse = (slug: string) => fetch(`/api/courses/getCourse`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', // Указываем, что отправляем JSON
        },
        body: JSON.stringify({
            slug: slug
        })
    }).then(res => res.json())