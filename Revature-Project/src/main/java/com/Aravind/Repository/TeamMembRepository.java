package com.Aravind.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Aravind.entity.TeamMemb;
@Repository
public interface TeamMembRepository extends JpaRepository<TeamMemb, Integer> {
	
	TeamMemb findByEmail(String email);
    TeamMemb findByEmailAndPassword(String email, String password);

}
