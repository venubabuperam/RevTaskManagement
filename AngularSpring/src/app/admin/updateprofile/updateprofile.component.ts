import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.component.html',
  styleUrl: './updateprofile.component.css'
})
export class UpdateprofileComponent {
  showDropdown = false;
  showMembersSublist = false;
  showChild: string = 'child1';
  user = {
    firstname:'Jhon',
    lastname:'Doe',
    username: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 234 567 890',
    address:'1-24 wall street',
    country:'USA',
    photo: null
  };

  // constructor(private router: Router) {}

  onSubmit() {
    // Simulate form submission
    console.log('Form submitted', this.user);

    // Navigate back to the profile page
    this.router.navigate(['/profile']);
  }

  onFileChange(event: any) {
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      this.user.photo = file;
    }
  }

  constructor(
    private router: Router,
    private memberService: AdminService
  ) {}

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  toggleMembersSublist() {
    this.showMembersSublist = !this.showMembersSublist;
  }

  navigateToList(listType: string) {
    this.memberService.setSelectedList(listType);
    const route = listType === 'pm' ? '/admin/pmanlist' : '/admin/teamlist';
    this.router.navigate([route]);
  }

  showCreateAccount() {
    this.showChild = 'child1';
  }

  showlLsts() {
    this.showChild = 'child2';
  }

  showClientInfo() {
    this.showChild = 'child3';
  }  
   

}
