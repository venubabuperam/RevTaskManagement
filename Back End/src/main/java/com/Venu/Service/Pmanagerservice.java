package com.Venu.Service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.Venu.entity.Pmanager;
@Service
public interface Pmanagerservice {
    Pmanager registerPmanager(Pmanager pmanager);
    Pmanager loginPmanager(String email, String password);
    
    public List<Pmanager> getallPmanagers();
}
