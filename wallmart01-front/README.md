
# Wallmart01Front

This project is the front-end part coded in Angular.


## Links for the project
 Live url:

  - [https://hansbukerg-front-app.fly.dev/](https://hansbukerg-front-app.fly.dev/)

Github Project:
 - [https://github.com/HansBukerG/wallmart01-front](https://github.com/HansBukerG/wallmart01-front)
 Docker Project:

 - [https://hub.docker.com/repository/docker/hansbukerg/wm-front-end/general](https://hub.docker.com/repository/docker/hansbukerg/wm-front-end/general)


 



## Deployment

To deploy this project run

```bash
  docker build --tag wm-front-end .
```

To run this project:

```bash
  docker run --rm -it -d -p 8080:8080 --name wm-front-end wm-front-end
```

## Environment Variables

It needs to set properly the output port of the back-end project to stablish a correct connectiuon with the front-end part.

In default, the app looks for the URL:

http://localhost:8080


## API Reference

#### Get Products

```http
  GET /search/searchString
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `searchString` | `string` | returns a list of products in base of parameter |

#### Get all products

```http
  GET /search/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `none`      | `string` | Returns the first 10 items from the database |




## Authors

- [@HansBukerG](https://www.github.com/HansBukerG)

