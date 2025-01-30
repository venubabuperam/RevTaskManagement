package com.Venu.Service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.Venu.entity.Projecttable;

@Service
public interface ProjecttableService {
	
	Projecttable projecttableCreation(Projecttable pr);
	
	public List<Projecttable> getlistprojects();




	Projecttable getProjectById(Long projectId);

	void deleteProject(Long id);

	Projecttable updateProjecttable(Projecttable project);

	

}
