package cpumonitor.cpustat;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CpuStatsController {
	
	@Autowired
	CpuStatService cpuStatsService;
	
	@CrossOrigin()
	@RequestMapping("/cpu-stats")
	public CpuStats cpuStats() throws Exception {
		CpuStats currentStatsReading = cpuStatsService.getCpuStats();
		
		return currentStatsReading;
	}

}
