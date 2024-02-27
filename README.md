# GVMTestpaper

Session 1 : 
1.1. What is Node.js, and how does it differ from traditional server-side technologies like PHP or Java?
- node js is javascript run time. node js is javascript V8 engine. it's open source technology. Node.js is a server-side JavaScript runtime known for its non-blocking I/O and event-driven architecture, contrasting with PHP and Java

1.2. Explain the concept of event-driven programming in Node.js and provide an example.
- node js is use s an event-driven model where asynchronous option trigges like callbacks, promosies. For example, reading a file asynchronously and executing a callback upon completion 

1.3. Describe the purpose of the package.json file in a Node.js project.
- package.json is heart of node js beacuse it's manage all packages of node.js with requred all dependency.

1.4. What is callback hell, and how can it be mitigated in Node.js applications?
- It's nested, unreadable code due to multiple callbacks. Mitigation involves using named functions, Promises, or modularization.

1.5. What is npm, and why is it commonly used in Node.js projects?
- npm is node package manager. npm is user for streamlining package installation, version control, and dependency management in projects.


Session 2 : CRUD opration
1) add data : 
    curl --location 'localhost:3000/users/add' \
--header 'Content-Type: application/json' \
--data-raw '{
    "firstname" : "nikhil",
    "lastname" : "sangani",
    "email" : "nikhil.test@yopmail.com",
    "PhoneNo" : 9586734627
}'

2) get data :
    curl --location 'localhost:3000/users'

3) update data : 
    curl --location --request PUT 'localhost:3000/users/update/65de1ecbb2a998ec2f9b7c73' \
--header 'Content-Type: application/json' \
--data-raw '{
    "firstname" : "nikhil",
    "lastname" : "sangani",
    "email" : "nikhil.test@yopmail.com",
    "PhoneNo" : 9586734627
}'

4) delete data : 
    curl --location --request PUT 'localhost:3000/users/update/65de1ecbb2a998ec2f9b7c73' \
--header 'Content-Type: application/json' \
--data-raw '{
    "firstname" : "nikhil",
    "lastname" : "sangani",
    "email" : "nikhil.test@yopmail.com",
    "PhoneNo" : 9586734627
}'

Session 3 : Multiple File Uploading 
curl --location 'http://localhost:3000/upload' \
--form 'files=@"/C:/Users/01/Downloads/free-shipping.png"' \
--form 'files=@"/C:/Users/01/Downloads/WhatsApp Image 2023-03-21 at 8.45.11 PM.jpeg"'


Session 4 : Authentication
1) registration : 
    curl --location 'localhost:3000/users/registration' \
--header 'Content-Type: application/json' \
--data-raw '{
    "username" : "Nik",
    "password" : "Test@1234"
}'

2) login : 
    curl --location 'localhost:3000/users/login' \
--header 'Content-Type: application/json' \
--data-raw '{
    "username" : "Nik",
    "password" : "Test@1234"
}'