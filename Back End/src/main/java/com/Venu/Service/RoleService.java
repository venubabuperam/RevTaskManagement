package com.Venu.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Venu.Repository.AdminRepository;
import com.Venu.Repository.PmanagerRepository;
import com.Venu.Repository.TeamMembRepository;
import com.Venu.entity.Admin;
import com.Venu.entity.Pmanager;
import com.Venu.entity.TeamMemb;
@Service
public class RoleService {
	@Autowired
	private AdminRepository adminrepo;
	
	@Autowired
	private PmanagerRepository prepo;
	
	@Autowired
	private TeamMembRepository trepo;

	
	
	public String getRoleByEmailAndPassword(String email, String password) {
        Admin admin = adminrepo.findByEmailAndPassword(email, password);
        if (admin != null) {
            return "Admin";
        }

        Pmanager pmanager = prepo.findByEmailAndPassword(email, password);
        if (pmanager != null) {
            return "ProjectManager";
        }

        TeamMemb teamMember = trepo.findByEmailAndPassword(email, password);
        if (teamMember != null) {
            return "TeamMember";
        }

        return null;
    }



	public Integer getIdByEmailAndPassword(String email, String password) {
	    Admin admin = adminrepo.findByEmailAndPassword(email, password);
	    if (admin != null) {
	        return admin.getId(); // Assuming the ID is stored in a field called 'id' in the Admin entity
	    }

	    Pmanager pmanager = prepo.findByEmailAndPassword(email, password);
	    if (pmanager != null) {
	        return pmanager.getId(); // Assuming the ID is stored in a field called 'id' in the Pmanager entity
	    }

	    TeamMemb teamMember = trepo.findByEmailAndPassword(email, password);
	    if (teamMember != null) {
	        return teamMember.getId(); // Assuming the ID is stored in a field called 'id' in the TeamMemb entity
	    }

	    return null;
	}

}
