package com.example.demo.serviceimpl;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.AdminEntity;
import com.example.demo.service.AdminService;
import com.example.demo.repositary.AdminRepositary;
@Service
public class AdminServiceImpl implements AdminService{
	@Autowired
	private AdminRepositary adminRepositary;

	@Override
	public AdminEntity findByadminEmail(String adminEmail, String adminPassword) {
		Optional<AdminEntity> optional=adminRepositary.findByadminEmail(adminEmail);
		if(optional.isPresent())
		{
			AdminEntity admin = optional.get();
			System.out.println("Admin found: " + admin);
			return optional.get();
		}
		else {
			throw new RuntimeException("fail to find");
		}
	}

}



