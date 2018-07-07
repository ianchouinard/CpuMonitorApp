package com.ianchouinard.computermonitorservice;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

/**
 * Root resource (exposed at "cpumonitorresource" path)
 */
@Path("cpumonitorresource")
public class CpuMonitorResource {

    
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response getIt() {
        MonitorService tstserve = new MonitorService();
        tstserve.queryOSForStats();
        
        String result = tstserve.getComputerUsageJSON().toString();
        
        // return result;
        return Response.ok()
               .entity(result)
               .header("Access-Control-Allow-Origin", "*")
               .build();
    }
}
