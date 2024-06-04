package com.Aravind.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Aravind.Repository.TaskRepository;
import com.Aravind.entity.Task;
@Service
public interface TaskService {
	 
	    
	    public Task saveTask(Task task);


		public List<Task> getAllTasks();

		public List<Task> getTasksForTeamMember(Long teamMemberId);


		public Task getTaskId(Long id);


		public Task updatedTask(Task updatedTask);


		public void deleteTask(Long id);
	 

}
