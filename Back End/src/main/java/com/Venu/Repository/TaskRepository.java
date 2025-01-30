package com.Venu.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Venu.entity.Task;
@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {

	List<Task> findByTeamMemberId(Long teamMemberId);

}
