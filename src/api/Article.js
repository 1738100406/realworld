import request from '@/utils/request.js'

export const getArticle = () => {
    return request({
        method: 'GET',
        url: '/api/articles'
    })
}
export const getArticleByslug = slug => {
    return request({
        method: 'GET',
        url: "/api/articles/" + slug
    })
}
export const CreateArticle = ({ title, description, body, tagList }) => {
    return request({
        method: 'POST',
        url: '/api/articles',
        data: {
            "article": {
                title: title,
                description: description,
                body: body,
                tagList: tagList
            }
        }
    })
}