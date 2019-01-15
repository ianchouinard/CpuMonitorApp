package cpumonitor.cpustat;

import java.lang.management.ManagementFactory;
import java.util.Date;

import com.sun.management.OperatingSystemMXBean;

import org.springframework.stereotype.Service;

@Service
public class CpuStatServiceImpl implements CpuStatService {
	
	@Override
	public CpuStats getCpuStats() throws Exception {
		CpuStats stats = new CpuStats();
		OperatingSystemMXBean os = (OperatingSystemMXBean) ManagementFactory.getOperatingSystemMXBean();
		
		stats.setTotalMemory(os.getTotalPhysicalMemorySize());
		stats.setTotalFreeMemory(os.getFreePhysicalMemorySize());
		stats.setCpuLoad(os.getSystemCpuLoad());
		stats.setArchitecture(os.getArch());
		stats.setOperatingSystemVersion(os.getVersion());
		stats.setOperatingSystem(os.getName());
		stats.setTimestamp(new Date());
		
		return stats;
	}

}
