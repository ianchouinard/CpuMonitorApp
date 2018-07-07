# Cpu Monitor Applet
A basic java web api and angular app to test making a basic web api with java.

Java web api built with Jersey and Grizzley

## App Overview
This app exposes a few cpu and memory based stats of the host system via a Java web api and renders them in a small Angular (v6) app.

### Screenshot of app
![Alt text](https://raw.githubusercontent.com/ianchouinard/CpuMonitorApplet/master/ScreenShot.PNG "Screenshot")

### UI dev
The angular side of the project built with the angular cli from /appui
The prod build 'ng build --prod' will output to /src/main/webapp and be accessible from http://localhost:8080/

### Java dev
Dependencies are managed by Maven. The web api is build using the Jersey framework for Java. Running the project exposes a web api resource accesbile at http://localhost:8080/api/cpumonitorresource
