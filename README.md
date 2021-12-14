# Sipang BackEnd Source 
프로젝트 백엔드 소스입니다...

## Board API

### board

- POST /gym -체육관 등록

<table>
<tr><th colspan="2" rowspan="1">허용 타입</th><td colspan="2">application/json</td></tr>
<tr><th>name</th><th>type</th><th>description</th><th>default</th>
<tr><td>address</td><td>String</td><td>체육관 이름</td><td>True</td></tr>
<tr><td>tel</td><td>String</td><td>체육관 번호</td><td>True</td></tr>
<tr><td>coat</td><td>Number</td><td>체육관 코트수</td><td>True</td></tr>
<tr><td>price</td><td>Number</td><td>체육관 코드 값</td><td>True</td></tr>
</table>


```js
// request
{ "url": "/gym", 
"name": "value",
"address": "value",
"tel": "value",
"coat": "value",
"price": "value" }
// response
{
  "message" : "잘 받았읍니다."
}
```

- GET /gym



```js
// request
{
  
}
// response
[
    {
        "_id": "618e73e8903eb7549cac6905",
        "name": "응애",
        "address": "응애",
        "tel": "응애",
        "coat": 1234,
        "price": 1234,
        "createdAt": "2021-11-12T14:02:16.817Z",
        "updatedAt": "2021-11-12T14:02:16.817Z",
        "__v": 0
    },
    {
        "_id": "618e88e1f23be11af08a6534",
        "name": "응애2",
        "address": "응애2",
        "tel": "응애2",
        "coat": 1234555,
        "price": 123555555555555550,
        "createdAt": "2021-11-12T15:31:45.218Z",
        "updatedAt": "2021-11-12T15:31:45.218Z",
        "__v": 0
    }
]
```

- GET /gym/:id

<table>
<tr><th colspan="2" rowspan="2">허용 타입</th><td colspan="3">application/json</td></tr>
<tr><td colspan="3">multipart/form-data</td></tr>
<tr><th>parameter</th><th>type</th><th>description</th><th>default</th><th>optional</th>
<tr><td>:boardId</td><td>Number</td><td>게시글 번호</td><td>❌</td><td>❌</td></tr>
</table>

```js
//request
{ "url": "/gym/2", "data": {} }
//response
[
    {
        "_id": "618e88e1f23be11af08a6534",
        "name": "응애2",
        "address": "응애2",
        "tel": "응애2",
        "coat": 1234555,
        "price": 123555555555555550,
        "createdAt": "2021-11-12T15:31:45.218Z",
        "updatedAt": "2021-11-12T15:31:45.218Z",
        "__v": 0
    }
]
```

### User

- GET /user -회원가입

<table>
<tr><th colspan="2" rowspan="2">허용 타입</th><td colspan="3">application/json</td></tr>
<tr><th>parameter</th><th>type</th><th>description</th><th>default</th><th>optional</th>
<tr><td>name</td><td>String</td><td>유저 이름</td><td>True</td><td>❌</td></tr>
<tr><td>email</td><td>String</td><td>유저 이메일</td><td>True</td><td>❌</td></tr>
<tr><td>password</td><td>String</td><td>유저 비밀번호</td><td>True</td><td>❌</td></tr>
</table>


```js
// request
{
    "name" : "epshespehe",
    "email" : "epsh123123e",
    "password": "1234"
}
// response
{
   "message" : "회원가입 완료"
}
```

- POST /user - 로그인

<table>
<tr><th colspan="2" rowspan="2">허용 타입</th><td colspan="3">application/json</td></tr>
<tr><th>parameter</th><th>type</th><th>description</th><th>default</th><th>optional</th>
<tr><td>name</td><td>String</td><td>유저 이름</td><td>True</td><td>❌</td></tr>
<tr><td>email</td><td>String</td><td>유저 이메일</td><td>True</td><td>❌</td></tr>
<tr><td>password</td><td>String</td><td>유저 비밀번호</td><td>True</td><td>❌</td></tr>
</table>


```js
// request
{
    "name" : "epshespehe",
    "email" : "epsh123123e",
    "password": "1234"
}
// response
{
   "message" : "회원가입 완료"
}
```