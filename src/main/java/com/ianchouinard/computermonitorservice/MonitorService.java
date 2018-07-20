package com.ianchouinard.computermonitorservice;
import java.lang.management.ManagementFactory;
import com.sun.management.OperatingSystemMXBean;
import java.text.SimpleDateFormat;
import java.util.Date;
import org.json.JSONObject;

/**
 *
 * @author ianch
 */
public class MonitorService {
    
    public long totalPhysicalMemory;
    public long totalFreeMemory;
    public long totalPhysicalMemoryGB;
    public long totalFreeMemoryGB;
    public double cpuLoad;
    public String architecture;
    public String operatingSystem;
    public String operatingSystemVersion;
    public String timestamp;
    
    public void queryOSForStats() {
        OperatingSystemMXBean os = (OperatingSystemMXBean) ManagementFactory.getOperatingSystemMXBean();
        
        totalPhysicalMemory = os.getTotalPhysicalMemorySize();
        totalFreeMemory = os.getFreePhysicalMemorySize();
        
        totalPhysicalMemoryGB = byteToGB(totalPhysicalMemory);
        totalFreeMemoryGB = byteToGB(totalFreeMemory);
        
        //cpuLoad = os.getProcessCpuLoad();
        cpuLoad = os.getSystemCpuLoad();
        
        architecture = os.getArch();
        operatingSystem = os.getName();
        operatingSystemVersion = os.getVersion();
        
        timestamp = new SimpleDateFormat("HH.mm.ss").format(new Date());
    }
    
    public JSONObject getComputerUsageJSON() {
        JSONObject computerUsage = new JSONObject();
        
        computerUsage.put("totalFreeMemory", totalFreeMemory);
        computerUsage.put("totalMemory", totalPhysicalMemory);
        computerUsage.put("totalFreeMemoryGB", totalFreeMemoryGB);
        computerUsage.put("totalMemoryGB", totalPhysicalMemoryGB);
        computerUsage.put("cpuLoad", cpuLoad);
        computerUsage.put("architecture", architecture);
        computerUsage.put("operatingSystem", operatingSystem);
        computerUsage.put("operatingSystemVersion", operatingSystemVersion);
        computerUsage.put("timestamp", timestamp);
        
        return computerUsage;
    }
    
    private static long byteToGB(long byteValue) {
        // Convert to double to we can round uo to get the correct GB value.
        double converted = (byteValue / (double)1073741824);
        return (long)Math.ceil(converted);
    }
    
}
