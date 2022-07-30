# User

## Menampilkan data user

Get :/Users

response:

[

    {
        "id"            : "",
        "name"          : "",
        "bio"           : "",
        "ig_url"        : "",
        "linkedin_url"  : "",
    }

]

## Menampilkan data pengguna dengan id tertentu

GET: /users/[id]

response:

[

    {
        "id"            : "",
        "name"          : "",
        "bio"           : "",
        "ig_url"        : "",
        "linkedin_url"  : "",
    }

]

## Menambahkan data pengguna

POST: /users

response:

[

    {
        "id"            : "",
        "name"          : "",
        "bio"           : "",
        "ig_url"        : "",
        "linkedin_url"  : "",
    }

]

response:

true // if success

false // if failure

## Edit data pengguna

PUT: /users

headers:

{

    Content-type: 'application/json',
    Authorization: 'Bearer [access_token]'

}

body:
{
"id" : "",
"name" : "",
"bio" : "",
"ig_url" : "",
"linkedin_url" : "",
}

response:

true // if success

false // if failure

## Menghapus data anggota

DELETE: /users/[id]

headers:

{

    Content-type: 'application/json',
    Authorization: 'Bearer [access_token]'

}

# Articles

## Menampilkan data semua artikel

GET: /article

response:

[

    {
        "id"            : "",
        "title"         : "",
        "author"        : "",
        "thumbnail"     : "",
        "content"       : "",
        "markdown"      : "",
    }

]

## Menampilkan data artikel dengan id tertentu

GET: /articles/[id]

data:

    {
        "id"            : "",
        "title"         : "",
        "author"        : "",
        "thumbnail"     : "",
        "content"       : "",
        "markdown"      : "",
    }

## Menampilkan data artikel oleh penulis

GET: /articles/id/[author]

data:

    {
        "id"            : "",
        "title"         : "",
        "author"        : "",
        "thumbnail"     : "",
        "content"       : "",
        "markdown"      : "",
    }

## Menambahkan artikel

POST: /articles

data:
{
"id" : "",
"title" : "",
"author" : "",
"thumbnail" : "",
"content" : "",
"markdown" : "",
}

response:

true // if success

false // if failure

## Memperbarui artikel

PUT: /articles

data:
{
"id" : "",
"title" : "",
"author" : "",
"thumbnail" : "",
"content" : "",
"markdown" : "",
}

response:

true // if success

false // if failure

## Menghapus artikel

DELETE: /articles/[id]

response:

true // if success

false // if failure

# Design Database

![API](<https://raw.githubusercontent.com/MirandaAdisti/tekweb2022/main/img/API%20(2).jpg>)
