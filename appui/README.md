# ComputerMonitor

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Main app component

The main app component in this project is essentially just a place to render the header/footer and a router-outlet

## Module routing & lazy loading: "/src/app/app-routing.module.ts"

This module handles the feature module routing. It also initializes code splitting for the modules and lazy loading (currently, this is just for the dashboard module)

## interceptors "/intercepters/*.ts"

Currently contains a generic interceptor to alert the user if any request fails. This could be expanded on to display different errors based on the error response, or re-route the user. If this project was using any sort of authentication, we could also use an interceptor to pass an auth token or something with each request.

## pipes module "/src/app/modules/pipes/"

This module declares and exports common pipes. This module gets imported to modules that need it (ex dashboard.module). Currently the only pipe in here is a transform to convert byte value to GB

## Dashboard module "/src/app/modules/dashboard/"

Rundown of this example module

    - /Components
        - This directory contains the smaller components that are used through the module
    - /models
        - Models used through the module. In this case I'm just using the single model here for type checking, so I chose to use an interface as I didn't need this being compiled to the source javascript code.
    - /services
        - Service used in module
    - /dashboard
        - I refer to this as a parent component. I call a parent component a component that is used as a child route in the module (see dashboard.module). Other than being used as a routed component, I'll use the parent component as a place to call the smaller components from /components, and to request data from a service, and allow it to propogate through it's child component's input properties. Because this type of component is more like a page rather than a component, I do not place it in the /components directory.

