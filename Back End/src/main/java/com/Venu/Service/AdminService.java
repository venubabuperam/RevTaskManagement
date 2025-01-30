package com.Venu.Service;

import org.springframework.stereotype.Service;

import com.Venu.entity.Admin;
@Service
public interface AdminService {
	 Admin registerAdmin(Admin admin);
	  Admin loginAdmin(String email, String password);
}
