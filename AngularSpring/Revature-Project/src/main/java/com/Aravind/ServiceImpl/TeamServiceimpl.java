package com.Aravind.ServiceImpl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Aravind.Repository.TeamMembRepository;
import com.Aravind.Service.TeamService;
import com.Aravind.entity.Pmanager;
import com.Aravind.entity.TeamMemb;
@Service
public class TeamServiceimpl implements TeamService{
	
	@Autowired
	private TeamMembRepository trepo;
	

	@Override
	public TeamMemb registerTeammemb(TeamMemb teammemb) {
		 if (trepo.findByEmail(teammemb.getEmail()) != null) {
	            throw new RuntimeException("User with this email already exists");
	        }
	        return trepo.save(teammemb);
	}

	@Override
	public TeamMemb loginTeammeb(String email, String password) {
        return trepo.findByEmailAndPassword(email, password);

	}

	@Override
	public List<TeamMemb> getallTeamembers() {
			
			return trepo.findAll();
		
	}

	

	@Override
	public TeamMemb getById(Integer teamMemberId) {
		// TODO Auto-generated method stub
		return trepo.findById(teamMemberId).orElse(null);
	}
	 public TeamMemb updateTeamMember(TeamMemb updatedTeamMember) {
	        // Assuming updatedTeamMember has the ID of the existing team member to be updated
	        // Check if the team member exists
	        if (!trepo.existsById(updatedTeamMember.getId())) {
	            throw new RuntimeException("Team member not found");
	        }
	        return trepo.save(updatedTeamMember);
	    }

	@Override
	public void deleteteamMember(Integer id) {
		// TODO Auto-generated method stub
		
		trepo.deleteById(id);
		
	}

	

	

}
