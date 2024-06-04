import { Component } from '@angular/core';
import { AdminService } from '../../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  showDropdown = false;
  showMembersSublist = false;
  showChild: string = 'child1';
  user = {
    firstname:'Jhon',
    lastname:'Doe',
    username: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 234 567 890',
    address:'1-24 wallstreet',
    country:'USA',
    photo: 'assets/Profile1.jpeg'
  };

  // constructor(private router: Router) {}

  navigateToUpdate() {
    this.router.navigate(['./updateprofile']);
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
