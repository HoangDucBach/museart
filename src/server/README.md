# REST API Museart Document

## Table of Contents
- [Base URL](#base-url)
- [Reference URL](#reference-url)
- [Endpoints](#endpoints)
- [Errors](#errors)

# REST API

Tài liệu đặc tả về cách CRUD các resource trên server.

## Base URL

<a>https://museart-api-bach.koyeb.app/ </a>

## Reference URL

Các API được tham khảo từ trang web sau, dạng json của các endpoints đọc doc ở đây!
<a>https://api.artic.edu/ </a>

## Endpoint

`POST /auth/signin`

Xác thực người dùng

### Request

```json
{
  "email": "admin@gmail.com",
  "password": "admin123"
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
  "email": "admin@gmail.com",
  "password": "admin123",
  "role": "admin"
}
```

## Endpoints

`/api/artworks`<br>
`/api/exhibitions`<br>
`/api/articles`<br>
`/api/products`<br>

`GET /api/[endpoints]`

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

Trả về thông tin chi tiết của [endpoints]

Example:

```json
{
  "status": "success",
  "data": [
    {
      "id": 1,
      "title": "The title",
      "author": "The author",
      "description": "The description",
      "image": "The image",
      "createdAt": "2021-09-29T08:00:00.000Z",
      "updatedAt": "2021-09-29T08:00:00.000Z"
    }
  ]
}
```

`PUT /api/[endpoints]/[id]`

* Yêu cầu phải có header `Authorization` với giá trị là token của user
* Yêu cầu phải có role là `admin`
* Cập nhập thông tin, trong api này, có thể cập nhập tùy ý dưới dạng json bao gồm cả việc thêm trường mới tự định nghĩa
* Khuyên dùng cập nhập các trường sau theo dạng (có thể bổ sung thêm thuộc tính tùy ý):
* `comments`: cập nhập bình luận
```json
{
  "comments": {
    "email": 1,
    "content": "The content",
    "createdAt": "2021-09-29T08:00:00.000Z"
  },
  "number_of_comments": 1
}
```
* `likes`: cập nhập lượt thích
```json
{
  "number_of_likes": 1
}
```
`DELETE /api/[endpoints]/[id]`

* Yêu cầu phải có header `Authorization` với giá trị là token của user
* Yêu cầu phải có role là `admin`
k 

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
