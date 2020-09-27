## 1.什么是RealWorld
+ 一个案例
+ 官方slogan: "The mother of al/ demo apps "
+ GitHub 仓库: https://github.com/gothinkster/realworld
+ 在线示例: https://demo.realworld.io/
+ 前端说明文档: https://github.com/gothinkster/realworld-starter-kit/blob/master/FRONTEND_INSTRUCTIONS.md
+ 接口说明文档:https://github.com/gothinkster/realworld/tree/master/api

## 2.项目初始化
安装vue脚手架
```
npm install --global @vue/cli
```
用vue脚手架创建名realworld项目
```
vue create realworld-vuejs
```

## 3.安装axios 并封装

新建request.js

```

import axios from 'axios'
var request = axios.create({
  baseURL: 'https://some-domain.com/api/',
  //timeout: 1000,
  //headers: {'X-Custom-Header': 'foobar'}
});
export default request
```

```
新建/api/article.js
import request from '@/utils/request'

export const getArticle=()=>{
	return request({
		method:'',
		url:''
	})
}

export const getArticle=(
		{
			user,password
		})=>{
	return request({
		method:'',
		url:'',
		data:{
			ueser:{user,password}		
		}
	})
}
```

```
import { getArticle } from '@/api/article.js'
<script>
    created(){
		this.loadArticle()
    },
    methods:{
    	async loadArticle(){
    		const res =await getArticle()
    		console.log( res )
    	}
    }
</script>
```

```
token：
设置
Authorization: Token jwt.token.here


添加拦截器
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
// 在发送请求之前做些什么
	IF(有token){
一 config.headers.Authorization=`Token AAA` 
二 axios.defaults.headers.common['Authorization'] = AUTH_TOKENAAA;
	}
return config;
}, function (error) {
// 对请求错误做些什么
return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
// 对响应数据做点什么
return response;
}, function (error) {
// 对响应错误做点什么
return Promise.reject(error);
});
```



## 4.使用vuex

在store.js里

```
export default new Vuex.store({
  state: {
    user: null
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    }
  },
  actions: {
  },
  modules: {
  }
})
```

```
<script>
import {mapState} from "vuex";
export default {
	this.$store.commit( 'setUser','' )//提交
	this.$store.state.user
};

</script>

```

非主件中使用

```
import store from '@/store'
```

