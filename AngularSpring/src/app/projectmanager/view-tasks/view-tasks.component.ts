import { Component, OnInit } from '@angular/core';
import { Task } from '../../task';
import { AdminService } from '../../admin.service';
import { Projecttable } from '../../projecttable';

@Component({
  selector: 'app-view-tasks',
  templateUrl: './view-tasks.component.html',
  styleUrls: ['./view-tasks.component.css']
})
export class ViewTasksComponent implements OnInit {
  tasklists: Task[] = [];
  projecttable: Projecttable[] = [];
  filteredTasks: Task[] = [];
  showDropdown: boolean = false;

  constructor(private taskService: AdminService) {}

  ngOnInit(): void {
    // Fetch tasks and projects on component initialization
    this.taskService.getlisttaskes().subscribe(data => {
      this.tasklists = data;
      this.filteredTasks = data; // Display all tasks by default
    });

    this.taskService.getallProjectslist().subscribe(data => {
      this.projecttable = data;
    });
  }

  toggleDropdown(): void {
    this.showDropdown = !this.showDropdown;
  }

  filterTasks(projectName: string): void {
    this.showDropdown = false;
    if (projectName === 'all') {
      this.filteredTasks = this.tasklists; // Show all tasks if "All Projects" is selected
    } else {
      this.filteredTasks = this.tasklists.filter(task => task.project.projectName === projectName);
    }
  }


  deleteTask(id: number | undefined): void {
    if (id !== undefined) {
      this.taskService.deleteTask(id).subscribe(() => {
        this.tasklists = this.tasklists.filter(task => task.id !== id);
        alert("Deleted successfully");
      });
    } else {
      console.error('Task ID is undefined.');
    }
  }
  
}
