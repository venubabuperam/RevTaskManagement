package com.Venu.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Venu.entity.Project;
@Repository
public interface ProjectRepository extends JpaRepository<Project, Integer>{
	

}
