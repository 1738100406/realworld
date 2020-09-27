import request from '@/utils/request.js'

export const getTags = () => {
    return request({
        url: '/api/tags',
        method: 'GET'
    })
}