import { Component } from '@angular/core';
import { Projecttable } from '../../projecttable';
import { AdminService } from '../../admin.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-editprojecttablelist',
  templateUrl: './editprojecttablelist.component.html',
  styleUrl:'./editprojecttablelist.component.css'
})
export class EditprojecttablelistComponent {
 projecttable:Projecttable={ 
  id: null||0,
    projectName:"",
    description:"",
    clientName:"",
    startDate:"",
    endDate:"",
    status:""
 }

 constructor(
  private route: ActivatedRoute,
  private router: Router,
  private teammemberService: AdminService
) { }

ngOnInit(): void {
  const id = +this.route.snapshot.paramMap.get('id')!;
  if (id) {
    this.teammemberService.getProjectsById(id).subscribe(data => {
      this.projecttable = data;
    });
  }
}

saveTeammember() {
  this.teammemberService.updateProjectstable(this.projecttable).subscribe(() => {
    alert("updated sucessfully");
    this.router.navigate(['/projectmanager/projectslist']);
  });
}

}
