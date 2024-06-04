package com.Aravind.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.Aravind.entity.TeamMemb;
@Service
public interface TeamService {
	TeamMemb registerTeammemb(TeamMemb teammemb);
     TeamMemb loginTeammeb(String email, String password);
     
     public List<TeamMemb> getallTeamembers();
	
	TeamMemb getById(Integer teamMemberId);
	TeamMemb updateTeamMember(TeamMemb updatedTeamMember);
	void deleteteamMember(Integer id);
	
     
     


}
