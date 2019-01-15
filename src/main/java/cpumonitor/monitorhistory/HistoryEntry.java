package cpumonitor.monitorhistory;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class HistoryEntry {

	@Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer id;
	
	private long maxTotalMemory;
	private long maxTotalFreeMemory;
	private double maxCpuLoad;
	
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}
	
	public long getMaxTotalMemory() {
		return this.maxTotalMemory;
	}
	
	public void setMaxTotalMemory(long maxTotalMemory) {
		this.maxTotalMemory = maxTotalMemory;
	}
	
	public long getMaxTotalFreeMemory() {
		return this.maxTotalFreeMemory;
	}
	
	public void setMaxTotalFreeMemory(long maxTotalFreeMemory) {
		this.maxTotalFreeMemory = maxTotalFreeMemory;
	}
	
	public double getMaxCpuLoad() {
		return this.maxCpuLoad;
	}
	
	public void setMaxCpuLoad(double maxCpuLoad) {
		this.maxCpuLoad = maxCpuLoad;
	}
	
}
