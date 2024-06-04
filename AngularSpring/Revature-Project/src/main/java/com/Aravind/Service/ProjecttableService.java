package com.Aravind.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.Aravind.entity.Project;
import com.Aravind.entity.Projecttable;
import com.Aravind.entity.TeamMemb;
@Service
public interface ProjecttableService {
	
	Projecttable projecttableCreation(Projecttable pr);
	
	public List<Projecttable> getlistprojects();




	Projecttable getProjectById(Long projectId);

	void deleteProject(Long id);

	Projecttable updateProjecttable(Projecttable project);

	

}
