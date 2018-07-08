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
    
    public static String createBaseUri() {
        String hostname = System.getenv("HOSTNAME");
        
        if (hostname == null) {
            hostname = "localhost";
        }

        String port = System.getenv("PORT");
        String protocol = "http://";
        
        if (port == null) {
            port = ":8080";
            protocol = "http://";
        }

        return (protocol + hostname + port + "/api/");
    }
    
     public static HttpServer startServer(String uri) {
        final ResourceConfig rc = new ResourceConfig().packages("com.ianchouinard.computermonitorservice");

        return GrizzlyHttpServerFactory.createHttpServer(URI.create(uri), rc);
    }

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

