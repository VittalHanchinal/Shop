package com.example.demo.service;

import com.example.demo.entity.AdminEntity;

public interface AdminService {

	AdminEntity findByadminEmail(String adminEmail, String adminPassword);

}
