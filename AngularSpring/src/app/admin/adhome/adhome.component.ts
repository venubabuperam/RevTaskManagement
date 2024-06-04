import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-adhome',
  templateUrl: './adhome.component.html',
  styleUrls: ['./adhome.component.css']
})
export class AdhomeComponent {
  showDropdown = false;
  showMembersSublist = false;
  showChild: string = 'child1';

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
