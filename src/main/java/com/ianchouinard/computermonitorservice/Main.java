package com.ianchouinard.computermonitorservice;

import org.glassfish.grizzly.http.server.HttpServer;
import org.glassfish.jersey.grizzly2.httpserver.GrizzlyHttpServerFactory;
import org.glassfish.jersey.server.ResourceConfig;

import java.io.IOException;
import java.net.URI;
import org.glassfish.grizzly.http.server.StaticHttpHandler;

/**
 * Main class.
 *
 */
public class Main {
    // Base URI the Grizzly HTTP server will listen on
    
    public static String createBaseUri() {
        String hostname = System.getenv("HOSTNAME");
        
        if (hostname == null) {
            hostname = "localhost";
        }

        String port = System.getenv("PORT");
        String protocol = "https://";
        
        if (port == null) {
            port = ":8080";
            protocol = "http://";
        }

        return (protocol + hostname + port + "/api/");
    }
    
    /**
     * Starts Grizzly HTTP server exposing JAX-RS resources defined in this application.
     * @return Grizzly HTTP server.
     */
     public static HttpServer startServer(String uri) {
         
        // create a resource config that scans for JAX-RS resources and providers
        // in testian package
        final ResourceConfig rc = new ResourceConfig().packages("com.ianchouinard.computermonitorservice");

        // create and start a new instance of grizzly http server
        // exposing the Jersey application at BASE_URI
        return GrizzlyHttpServerFactory.createHttpServer(URI.create(uri), rc);
    }

    /**
     * Main method.
     * @param args
     * @throws IOException
     */
    public static void main(String[] args) throws IOException {
        final String uri = createBaseUri();
        final HttpServer server = startServer(uri);
        
        server.getServerConfiguration().addHttpHandler(new StaticHttpHandler("src/main/webapp"), "/");;  
        
        System.out.println(String.format("Jersey app started with WADL available at "
                + "%sapplication.wadl\nHit enter to stop it...", uri));
        System.in.read();
        server.stop();
    }
}

