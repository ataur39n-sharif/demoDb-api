# DemoDb Api [![wakatime](https://wakatime.com/badge/user/fa185e46-0344-4585-b3ad-55f0e4fd8daf/project/f01b6a46-92c4-4817-aebb-675b7cbb61d4.svg)](https://wakatime.com/badge/user/fa185e46-0344-4585-b3ad-55f0e4fd8daf/project/f01b6a46-92c4-4817-aebb-675b7cbb61d4)
This is a Test CRUD api boilerplate build with NodeJs(express.js) and mongodb.

```markdown
live api - https://anxious-erin-shrug.cyclic.app/
```

## API Reference

#### Get all products

By default this endpoint returns all product's . But using limit and page parameter you can set the return data limit.

```http
  GET /api/products
```

| Parameter | Type     | Description        |
|:----------|:---------|:-------------------|
| `limit`   | `number` | default value =100 |
| `page`    | `number` | default value =1   |

#### Get single product

```http
  GET /api/products/${id}
```

| Parameter | Type     | Description                    |
|:----------|:---------|:-------------------------------|
| `id`      | `string` | ***Required** mongodb id (_id) |

#### Search products

```http
  GET /api/products/search?q=
```

| Parameter | Type     | Description   |
|:----------|:---------|:--------------|
| `q`       | `string` | ***Required** |

#### Create new product

```http
  POST /api/products/
```

| Parameter | Type     | Description   |
|:----------|:---------|:--------------|
| `title`   | `string` | ***Required** |

```http
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

```http
  PUT /api/products/${id}
```

| Parameter | Type     | Description                    |
|:----------|:---------|:-------------------------------|
| `id`      | `string` | ***Required** mongodb id (_id) |

#### DELETE product

```http
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

