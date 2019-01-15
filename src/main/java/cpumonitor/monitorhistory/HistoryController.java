package cpumonitor.monitorhistory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import cpumonitor.cpustat.CpuStatService;
import cpumonitor.cpustat.CpuStats;

@RestController
public class HistoryController {
	
	@Autowired
	CpuStatService cpuStatsService;
	
	@Autowired
	HistoryService historyService;
	
	@Autowired
	private HistoryEntryRepository historyEntryRepository;
	
	@CrossOrigin()
	@RequestMapping("/history/record-stats")
	public HistoryEntry addHistoryEntry() throws Exception {
		// historyService.updateHistoryRecords();
		
		return historyService.getHistoryRecords();
	}

}
