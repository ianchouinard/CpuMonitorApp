# Cpu Monitor
An in progress self hosted web application to show cpu and memory usage (that is available through the JVM) and record stats in real time.

Example of app running on heroku 
https://cpu-monitor-app.herokuapp.com/
(note: app container my be asleep, page may take a moment to load)

## App Overview
Front end is currently being made with angular (v6) and the backend/api layer is being built with Spring Boot and MySQL.

## To Do
- On going development chores (jUnit tests, etc).
- GPU usage data?

### Screenshot of app (in progress)
![Alt text](https://raw.githubusercontent.com/ianchouinard/CpuMonitorApplet/master/ScreenShot.PNG "Screenshot")

### Local Development
Pre Requisites
- Node.js (v8 +)
- Angular CLI
- Java (recommended v8 or v10)

Running dev environemnt
- Clone or download the repo.
- Install gradle & maven dependencies for the java backend
- In the /appui directory, run "npm install" to install front end dependencies
- To run the front end dev server, run "ng serve" from the app-ui directory and navigate to http://localhost:4200/
- To build the prod front end, run "ng build --prod" from the app-ui directory. If the spring boot application is running, the prod front end will be available at http://localhost:8080/
