package com.Aravind.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Aravind.Repository.AdminRepository;
import com.Aravind.Repository.PmanagerRepository;
import com.Aravind.Repository.TeamMembRepository;
import com.Aravind.entity.Admin;
import com.Aravind.entity.Pmanager;
import com.Aravind.entity.TeamMemb;
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
