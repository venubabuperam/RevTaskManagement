import { Component } from '@angular/core';
import { Projecttable } from '../../projecttable';
import { AdminService } from '../../admin.service';
import { Tmemeber } from '../../tmemeber';

@Component({
  selector: 'app-projecctsslist',
  templateUrl: './projecctsslist.component.html',
  styleUrls: ['./projecctsslist.component.css']
})
export class projecctsslistComponent {
  projectstable: Projecttable[] = [];
  teammembers: Tmemeber[] = [];
  selectedProject: Projecttable | null = null;
  filteredProjects: Projecttable[] = [];
  showDropdown: boolean = false;

  constructor(private projectService: AdminService) {}

  ngOnInit(): void {
    this.projectService.getallProjectslist().subscribe(data => {
      this.projectstable = data;
      this.filteredProjects = this.projectstable;
    });
  }

  toggleDropdown(): void {
    this.showDropdown = !this.showDropdown;
  }

  filterProjects(projectName: string): void {
    this.showDropdown = false;
    if (projectName === 'all') {
      this.filteredProjects = this.projectstable; // Show all projects if "All Projects" is selected
    } else {
      this.filteredProjects = this.projectstable.filter(project => project.projectName === projectName);
    }
  }


  deleteProject(id: number | undefined): void {
    if (id !== undefined) {
      this.projectService.deleteProject(id).subscribe(() => {
        this.projectstable = this.projectstable.filter(task => task.id !== id);
        alert("Deleted Project successfully");
      });
    } else {
      console.error('Project ID is undefined.');
    }
  }
}
