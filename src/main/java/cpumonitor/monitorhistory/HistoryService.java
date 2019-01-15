package cpumonitor.monitorhistory;

import cpumonitor.cpustat.CpuStats;

public interface HistoryService {
	
	void updateHistoryRecords(CpuStats stats) throws Exception;
	
	HistoryEntry getHistoryRecords() throws Exception;

}
