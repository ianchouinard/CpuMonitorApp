package cpumonitor.cpustat;

import java.util.Date;

public class CpuStats {
	
	 private long totalMemory;
	 private long totalFreeMemory;
	 private double cpuLoad;
	 private String architecture;
	 private String operatingSystem;
	 private String operatingSystemVersion;
	 private Date timestamp;
	 
	 public long getTotalMemory() {
		 return this.totalMemory;
	 }
	 
	 public void setTotalMemory(long totalMemory) {
		 this.totalMemory = totalMemory;
	 }
	 
	 public long getTotalFreeMemory() {
		 return this.totalFreeMemory;
	 }
	 
	 public void setTotalFreeMemory(long totalFreeMemory) {
		 this.totalFreeMemory = totalFreeMemory;
	 }
	 
	 public double getCpuLoad() {
		 return this.cpuLoad;
	 }
	 
	 public void setCpuLoad(double cpuLoad) {
		 this.cpuLoad = cpuLoad;
	 }
	 
	 public String getArchitecture() {
		 return this.architecture;
	 }
	 
	 public void setArchitecture(String architecture) {
		 this.architecture = architecture;
	 }
	 
	 public String getOperatingSystem() {
		 return this.operatingSystem;
	 }
	 
	 public void setOperatingSystem(String operatingSystem) {
		 this.operatingSystem = operatingSystem;
	 }
	 
	 public String getOperatingSystemVersion() {
		 return this.operatingSystemVersion;
	 }
	 
	 public void setOperatingSystemVersion(String operatingSystemVersion) {
		 this.operatingSystemVersion = operatingSystemVersion;
	 }
	 
	 public Date getTimestamp() {
		 return this.timestamp;
	 }
	 
	 public void setTimestamp(Date timestamp) {
		 this.timestamp = timestamp;
	 }

}
