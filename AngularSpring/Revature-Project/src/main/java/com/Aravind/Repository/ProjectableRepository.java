package com.Aravind.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Aravind.entity.Projecttable;
import java.util.List;
import java.util.Optional;

@Repository
public interface ProjectableRepository extends JpaRepository<Projecttable, Long>{
	

}
