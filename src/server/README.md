# REST API Museart Document

# REST API

Tài liệu đặc tả về cách CRUD các resource trên server.

## Base URL

<a>https://museart-api-bach.koyeb.app/ </a>

## Reference URL

<a>https://api.artic.edu/ </a>

## Endpoint

`POST /auth/signin`

Xác thực người dùng

### Request

```json
{
  "username": "admin",
  "password": "admin"
}
```
### Response

Trả về token của user
```json
{
  "status": "success",
  "token": "<token here>"
  }
```
`POST /auth/signup`

### Request

```json
{
  "username": "admin",
  "email": "admin",
  "password": "admin",
  "role": "admin"
}

## Endpoint

`GET /artworks`

### Headers

* Yêu cầu phải có header `Authorization` với giá trị là token của user

```json
{
"Content-Type": "application/json",
"Authorization": "<token here>"
}
```

### Parameters

* `limit`(optional): số lượng bản ghi trả về, mặc định là 10
* `offset`(optional): vị trí bắt đầu lấy dữ liệu, mặc định là 0
* `search`(optional): tìm kiếm theo tên hoặc tác giả
* `sort`(optional): sắp xếp theo một trường, mặc định là id
* `order`(optional): thứ tự sắp xếp, mặc định là ASC

### Response

Trả về danh sách artworks

`GET /artworks/: id`

### Response

Trả về thông tin chi tiết của artwork

```json
{
"status": "success",
"data": {
"id": 1,
"name": "The Starry Night",
"artist": "Vincent van Gogh",
"description": "The Starry Night is an oil on canvas painting by Dutch Post-Impressionist painter Vincent van Gogh. Painted in June 1889, it depicts the view from the east-facing window of his asylum room at Saint-Rémy-de-Provence, just before sunrise, with the addition of an idealized village.",
"image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1280px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
"createdAt": "2021-09-29T08:00:00.000Z",
"updatedAt": "2021-09-29T08:00:00.000Z",
...
}
}
```

`PUT /artworks`

* Yêu cầu phải có header `Authorization` với giá trị là token của user
* Yêu cầu phải có role là `admin`

`DELETE /artworks`

* Yêu cầu phải có header `Authorization` với giá trị là token của user
* Yêu cầu phải có role là `admin`

## Endpoint

`GET /users`
`PUT /users`
`DELETE /users`

* Yêu cầu phải có header `Authorization` với giá trị là token của user
* Yêu cầu phải có role là `admin`

### Response

Trả về thông tin chi tiết của user

* `data`: thông tin chi tiết của user
  * `id`: id của user
  * `username`: tên đăng nhập
  * `email`: email của user
  * `role`: quyền của user
  * `createdAt`: thời gian tạo
  * `updatedAt`: thời gian cập nhật

#### Example

```json
{
  "status": "success",
  "data": {
    "id": 1,
    "username": "admin",
    "email": "example@gmail.com",
    "role": "admin",
    "createdAt": "2021-09-29T08:00:00.000Z",
    "updatedAt": "2021-09-29T08:00:00.000Z"
  }
```

## Errors

API này sử dụng những status sau

* `200 OK`: Trả về khi tất cả request thành công
* `201 Created`: Trả về khi một resource đã được tạo thành công
* `204 No Content`: Trả về khi không có dữ liệu nào được trả về
* `400 Bad Request`: Trả về khi request không hợp lệ
* `401 Unauthorized`: Trả về khi không có token hoặc token không hợp lệ
* `403 Forbidden`: Trả về khi không có quyền truy cập
* `404 Not Found`: Trả về khi không tìm thấy resource
* `500 Internal Server Error`: Trả về khi có lỗi xảy ra ở server
