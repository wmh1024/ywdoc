# Java

## Spring Boot

### 解决跨域问题

::: tip 跨域问题
浏览器为了用户的安全，仅允许向 **同域名、同端口** 的服务器发送请求。
:::

#### 网关支持 (Nginx)

让Nginx代理服务器告诉浏览器：允许跨域（返回 cross-origin-allow 响应头）

```nginx
location ^~ /api/ {
    proxy_pass http://127.0.0.1:8080/api/;
    add_header 'Access-Control-Allow-Origin' $http_origin;
    add_header 'Access-Control-Allow-Credentials' 'true';
    add_header Access-Control-Allow-Methods 'GET, POST, OPTIONS';
    add_header Access-Control-Allow-Headers '*';
    if ($request_method = 'OPTIONS') {
        add_header 'Access-Control-Allow-Credentials' 'true';
        add_header 'Access-Control-Allow-Origin' $http_origin;
        add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';
        add_header 'Access-Control-Allow-Headers' 'DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range';
        add_header 'Access-Control-Max-Age' 1728000;
        add_header 'Content-Type' 'text/plain; charset=utf-8';
        add_header 'Content-Length' 0;
        return 204;
    }
}
```

#### 修改后端服务

添加允许跨域调用的过滤器

```java
@Configuration
public class GlobalCorsConfig {
    
    @Bean
    public CorsFilter corsFilter() {
        CorsConfiguration config = new CorsConfiguration();
        //允许所有域名进行跨域调用
        config.addAllowedOriginPattern("*");
        //允许跨越发送cookie
        config.setAllowCredentials(true);
        //放行全部原始头信息
        config.addAllowedHeader("*");
        //允许所有请求方法跨域调用
        config.addAllowedMethod("*");
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", config);
        return new CorsFilter(source);
    }
}
```

### 多环境配置

::: tip 多环境
指同一套项目代码在不同的阶段需要根据实际情况来调整配置并且部署到不同的机器上。
:::

在 SpringBoot 项目中，通过多个 `application-xxx.yaml` 的方式配置多环境。针对不同环境做不同的配置。

通过 application-dev.yml 与 application-prod.yml 区分环境

* 数据库、缓存地址
* 端口号
* content path

### maven 打包项目

```shell
maven package
```

> 跳过测试打包
>
> ```shell
> mvn package -DskipTests
> ```

### 区分环境运行

在启动项目时传入环境变量，使用`prod`环境配置。

```shell
java -jar ./backennd.jar --spring.profiles.active=prod
```

后台运行

```shell
nohup java -jar ./backend.jar --spring.profiles.active=prod &
```
