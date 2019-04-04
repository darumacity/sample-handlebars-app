## メモ
### 初回に実行したコマンド
`express sample-handlebars-app -e --hbs`  
`git init`  
`git checkout -b master`  
`git add .`  
`git commit -m "Initial commit"`  
`git remote add origin https://github.com/darumacity/sample-handlebars-app.git`  
`git push -u origin master`

### DB作成
``create database `blog`;``  
`create user 'blog_user'@'localhost' identified with mysql_native_password by 'password';`  
``grant all on `blog`.* to 'blog_user'@'localhost';``
