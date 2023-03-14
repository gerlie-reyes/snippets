# File Upload Progress Bar

This is a simple implementation of how we can add a progress bar while uploading a file to a server.

The uploading is done through AJAX call (XMLHttpRequest)

This AJAX call sends a POST request to a Php file that processes the uploading of file.

## To Setup the backend

1. You need to have a Php/nginx server installed and started.
2. Copy the files under the php folder of this repo to the root folder of your nginx server
3. Modify the permission of uploads folder so that it will be writable
   `$ chmod -r 777 uploads`

- If you put the backend files to a different directory, you also need to change the request URL of the ajax call to the corresponding URL of that path

### For your reference on how to setup LEMP stack on your Macbook

https://kittmedia.com/en/2021/macos-install-nginx-mysql-and-php-via-brew/
