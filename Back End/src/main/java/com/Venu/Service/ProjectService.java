package com.Venu.Service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.Venu.entity.Project;
@Service
public interface ProjectService {
    
    Project createProjects(Project pr);
    public List<Project> getallprojects();


}
