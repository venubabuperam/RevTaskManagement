package com.Venu.ServiceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Venu.Repository.ProjectRepository;
import com.Venu.Service.ProjectService;
import com.Venu.entity.Project;
@Service
public class ProjectServiceImpl implements ProjectService {

	@Autowired
	private ProjectRepository prepos;
	
	@Override
	public Project createProjects(Project pr) {
		return prepos.save(pr);
	}

	@Override
	public List<Project> getallprojects() {
		// TODO Auto-generated method stub
		return prepos.findAll();
	}

}
