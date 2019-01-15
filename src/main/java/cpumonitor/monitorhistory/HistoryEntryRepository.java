package cpumonitor.monitorhistory;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HistoryEntryRepository extends CrudRepository<HistoryEntry, Integer> {

}
