package cpumonitor.monitorhistory;


import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cpumonitor.cpustat.CpuStats;

@Service
public class HistoryServiceImpl implements HistoryService {
	
	@Autowired
	private HistoryEntryRepository historyEntryRepository;
	
	public void updateHistoryRecords(CpuStats stats) {
		Iterable<HistoryEntry> currentRecords = historyEntryRepository.findAll();
		HistoryEntry newRecord = new HistoryEntry();
		
		if (currentRecords != null) {
			for(HistoryEntry entry: currentRecords) {
				newRecord = entry;

				if (entry.getMaxCpuLoad() < stats.getCpuLoad()) {
					newRecord.setMaxCpuLoad(stats.getCpuLoad());
				}
				
				if (entry.getMaxTotalFreeMemory() < stats.getTotalFreeMemory()) {
					newRecord.setMaxTotalFreeMemory(stats.getTotalFreeMemory());
				}
				
				if (entry.getMaxTotalMemory() < stats.getTotalMemory()) {
					newRecord.setMaxTotalMemory(stats.getTotalMemory());
				}
			}
		} else {
			newRecord.setMaxTotalMemory(stats.getTotalMemory());
			newRecord.setMaxTotalFreeMemory(stats.getTotalFreeMemory());
			newRecord.setMaxCpuLoad(stats.getCpuLoad());
		}
		
		historyEntryRepository.save(newRecord);
	}
	
	public HistoryEntry getHistoryRecords() throws Exception {
		Iterable<HistoryEntry> currentRecords = historyEntryRepository.findAll();
		HistoryEntry entry = new HistoryEntry();
		
		if (currentRecords != null) {
			for (HistoryEntry records: currentRecords) {
				entry = records;
			}
		}
		
		return entry;
	}

}
