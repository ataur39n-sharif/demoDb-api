# DemoDb Api [![wakatime](https://wakatime.com/badge/github/ataur39n-sharif/demoDb-api.svg)](https://wakatime.com/badge/github/ataur39n-sharif/demoDb-api)

This is a Test CRUD api boilerplate build with NodeJs(express.js) and mongodb.

```markdown
live api - https://anxious-erin-shrug.cyclic.app/
```

## API Reference

#### Get all products

By default this endpoint returns all product's . But using limit and page parameter you can set the return data limit.

```
  GET /api/products
```

| Parameter | Type     | Description        |
|:----------|:---------|:-------------------|
| `limit`   | `number` | default value =100 |
| `page`    | `number` | default value =1   |

#### Get single product

```
  GET /api/products/${id}
```

| Parameter | Type     | Description                    |
|:----------|:---------|:-------------------------------|
| `id`      | `string` | ***Required** mongodb id (_id) |

#### Search products

```
  GET /api/products/search?q=
```

| Parameter | Type     | Description   |
|:----------|:---------|:--------------|
| `q`       | `string` | ***Required** |

#### Create new product

```
  POST /api/products/
```

| Parameter | Type     | Description   |
|:----------|:---------|:--------------|
| `title`   | `string` | ***Required** |

```
Parameters:
"title": "iPhone 9",
"description": "An apple mobile which is nothing like apple",
"price": 549,
"discountPercentage": 12.96,
"rating": 4.69,
"stock": 94,
"brand": "Apple",
"category": "smartphones",
```

#### Update product

```
  PUT /api/products/${id}
```

| Parameter | Type     | Description                    |
|:----------|:---------|:-------------------------------|
| `id`      | `string` | ***Required** mongodb id (_id) |

#### DELETE product

```
  DELETE /api/products/${id}
```

| Parameter | Type     | Description                    |
|:----------|:---------|:-------------------------------|
| `id`      | `string` | ***Required** mongodb id (_id) |

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MONGO_URI`

`PORT`

## Authors

- [Ataur Rahman](https://www.github.com/ataur39n-sharif)

