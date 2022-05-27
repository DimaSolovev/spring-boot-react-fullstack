<b>Full Stack Spring Boot & React</b><p>
-Spring Boot Backend API<p>
-Frontend with React.js Hooks and Functions Components<p>
-Maven Build Tool, для автоматизации сборки backend и frontend в один jar архив<p>
-Databases using Postgres on Docker<p>
-Spring Data JPA<p>
-Server and Client Side Error Handling<p>
-Packaging applications for deployment using Docker and Jib<p>
-AWS RDS & Elastic Beanstalk<p>
-Software Deployment Automation with Github Actions<p>
-Software Deployment Monitoring with Slack<p>
-Unit and Integration Testing<p>
     Full stack приложение, с использованием spring и react, база данных образ docker postgres. С помощью maven<p>
плагина собираем фронт и бекэнд в один архив и Jib создает docker image и копирует его в локальный репозиторий<p>
и Docker Hub. GitHub Actions используется для автоматического деплоя на AWS и проверки кода при pullrequest <p>
Slack отправляет в указанные каналы оповещения о этапах развертывания.<p>
-mvn clean install jib:dockerBuild -Djib.to.image=fullstack:latest -создать контейнер локально в локал докер
<br>
<b>App example</b>
![main](https://user-images.githubusercontent.com/76641018/170688512-fe985b67-9484-42ca-a918-1708dff7cba8.png)
<br>
<b>Maven + Docker + Jib</b>
![maven](https://user-images.githubusercontent.com/76641018/170707382-762b0ef5-c197-451e-ba2d-830587d83385.png)
<br>
<b>CICD GitHub Actions</b>
![ci](https://user-images.githubusercontent.com/76641018/170712453-fd7c3b1d-2d10-41ee-afe2-5e1b248081ce.png)
<br>
<b>AWS deploy</b>
![aws](https://user-images.githubusercontent.com/76641018/170714367-8b549edd-d848-4bd8-b3dd-158cd8135c69.png)
