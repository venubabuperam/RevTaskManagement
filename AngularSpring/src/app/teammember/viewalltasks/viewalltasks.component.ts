import { Component } from '@angular/core';
import { Task } from '../../task';
import { Projecttable } from '../../projecttable';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-viewalltasks',
  templateUrl: './viewalltasks.component.html',
  styleUrl: './viewalltasks.component.css'
})
export class ViewalltasksComponent {
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

}
