import request from '@/utils/request.js'

export const Login = ({ email, password }) => {
    return request({
        method: 'post',
        url: '/api/users/login',
        data: {
            "user": {
                "email": email,
                "password": password
            }
        }
    })

}