# MySQL Advanced

## Learning Objectives

* **How to create tables with constraint**
* **How to optimize queries by adding indexe**
* **What is and how to implement stored procedures and functions in MySQ**
* **What is and how to implement views in MySQ**
* **What is and how to implement triggers in MySQ**

Requirements

* **All your files will be executed on Ubuntu 20.04 LTS using MySQL 8.0**
* **All your files should end with a new line**
* **All your SQL queries should have a comment just before (i.e. syntax above)**
* **All your files should start by a comment describing the task**
* **All SQL keywords should be in uppercase (SELECT, WHERE…)**
* **A README.md file, at the root of the folder of the project, is mandatory**
* **The length of your files will be tested using wc**

### How to import a SQL dump

```sql
$ echo "CREATE DATABASE hbtn_0d_tvshows;" | mysql -uroot -p
Enter password: 
$ curl "https://s3.eu-west-3.amazonaws.com/hbtn.intranet.project.files/holbertonschool-higher-level_programming+/274/hbtn_0d_tvshows.sql" -s | mysql -uroot -p hbtn_0d_tvshows
Enter password: 
$ echo "SELECT * FROM tv_genres" | mysql -uroot -p hbtn_0d_tvshows
Enter password: 
id  name
1   Drama
2   Mystery
3   Adventure
4   Fantasy
5   Comedy
6   Crime
7   Suspense
8   Thriller
$
```

### Tasks

0. We are all unique!
1. In and not out
2. Best band ever!
3. Old school band
4. Buy buy buy
5. Email validation to sent
6. Add bonus
7. Average score
8. Optimize simple search
9. Optimize search and score
10. Safe divide
11. No table for a meeting
