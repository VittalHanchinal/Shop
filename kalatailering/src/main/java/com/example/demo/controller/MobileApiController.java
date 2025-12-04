package com.example.demo.controller;

import com.example.demo.dto.ApiResponse;
import com.example.demo.dto.LoginRequest;
import com.example.demo.dto.LoginResponse;
import com.example.demo.entity.*;
import com.example.demo.security.JwtUtil;
import com.example.demo.service.AdminService;
import com.example.demo.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class MobileApiController {

    @Autowired
    private AdminService adminService;

    @Autowired
    private CustomerService customerService;

    @Autowired
    private JwtUtil jwtUtil;

    // Authentication
    @PostMapping("/auth/login")
    public ResponseEntity<ApiResponse<LoginResponse>> login(@RequestBody LoginRequest request) {
        try {
            AdminEntity admin = adminService.login(request.getEmail(), request.getPassword());
            if (admin != null) {
                String token = jwtUtil.generateToken(admin.getAdminEmail());
                LoginResponse response = new LoginResponse(token, admin.getAdminName(), admin.getAdminEmail());
                return ResponseEntity.ok(ApiResponse.success("Login successful", response));
            } else {
                return ResponseEntity.status(401).body(ApiResponse.error("Invalid credentials"));
            }
        } catch (Exception e) {
            return ResponseEntity.status(500).body(ApiResponse.error("Login failed: " + e.getMessage()));
        }
    }

    // Blouse Customers
    @GetMapping("/customers/blouse/{blouseType}")
    public ResponseEntity<ApiResponse<List<CustomerEntity>>> getBlouseCustomers(@PathVariable String blouseType) {
        try {
            List<CustomerEntity> customers = customerService.findByblouseType(blouseType);
            return ResponseEntity.ok(ApiResponse.success(customers));
        } catch (Exception e) {
            return ResponseEntity.status(500).body(ApiResponse.error("Failed to fetch customers: " + e.getMessage()));
        }
    }

    @PostMapping("/customers/blouse")
    public ResponseEntity<ApiResponse<CustomerEntity>> addBlouseCustomer(@RequestBody CustomerEntity customer) {
        try {
            customerService.addaddblouse(customer);
            return ResponseEntity.ok(ApiResponse.success("Customer added successfully", customer));
        } catch (Exception e) {
            return ResponseEntity.status(500).body(ApiResponse.error("Failed to add customer: " + e.getMessage()));
        }
    }

    @GetMapping("/customers/blouse/completed/{blouseType}")
    public ResponseEntity<ApiResponse<List<ComplitedBlouseEntity>>> getCompletedBlouseCustomers(
            @PathVariable String blouseType) {
        try {
            List<ComplitedBlouseEntity> customers = customerService.findByblouseTypes(blouseType);
            return ResponseEntity.ok(ApiResponse.success(customers));
        } catch (Exception e) {
            return ResponseEntity.status(500)
                    .body(ApiResponse.error("Failed to fetch completed customers: " + e.getMessage()));
        }
    }

    @GetMapping("/customers/{id}")
    public ResponseEntity<ApiResponse<CustomerEntity>> getCustomerById(@PathVariable int id) {
        try {
            CustomerEntity customer = customerService.findBycustomerId(id);
            if (customer != null) {
                return ResponseEntity.ok(ApiResponse.success(customer));
            } else {
                return ResponseEntity.status(404).body(ApiResponse.error("Customer not found"));
            }
        } catch (Exception e) {
            return ResponseEntity.status(500).body(ApiResponse.error("Failed to fetch customer: " + e.getMessage()));
        }
    }

    @PutMapping("/customers/{id}")
    public ResponseEntity<ApiResponse<CustomerEntity>> updateCustomer(@PathVariable int id,
            @RequestBody CustomerEntity customer) {
        try {
            customer.setCustomerId(id);
            customerService.update(customer);
            return ResponseEntity.ok(ApiResponse.success("Customer updated successfully", customer));
        } catch (Exception e) {
            return ResponseEntity.status(500).body(ApiResponse.error("Failed to update customer: " + e.getMessage()));
        }
    }

    @PostMapping("/customers/{id}/complete")
    public ResponseEntity<ApiResponse<String>> markCustomerComplete(@PathVariable int id) {
        try {
            CustomerEntity customer = customerService.findBycustomerId(id);
            if (customer != null) {
                customerService.deletProductbyid(id);
                customerService.convertAndSave(customer);
                return ResponseEntity.ok(ApiResponse.success("Customer marked as complete"));
            } else {
                return ResponseEntity.status(404).body(ApiResponse.error("Customer not found"));
            }
        } catch (Exception e) {
            return ResponseEntity.status(500).body(ApiResponse.error("Failed to complete customer: " + e.getMessage()));
        }
    }

    // Pico Fall Customers
    @GetMapping("/customers/pico")
    public ResponseEntity<ApiResponse<List<CostomerPicoFallEntity>>> getPicoCustomers() {
        try {
            List<CostomerPicoFallEntity> customers = customerService.fifindAllProduct();
            return ResponseEntity.ok(ApiResponse.success(customers));
        } catch (Exception e) {
            return ResponseEntity.status(500)
                    .body(ApiResponse.error("Failed to fetch pico customers: " + e.getMessage()));
        }
    }

    @PostMapping("/customers/pico")
    public ResponseEntity<ApiResponse<CostomerPicoFallEntity>> addPicoCustomer(
            @RequestBody CostomerPicoFallEntity customer) {
        try {
            customerService.addapicofall(customer);
            return ResponseEntity.ok(ApiResponse.success("Pico customer added successfully", customer));
        } catch (Exception e) {
            return ResponseEntity.status(500).body(ApiResponse.error("Failed to add pico customer: " + e.getMessage()));
        }
    }

    @GetMapping("/customers/pico/completed")
    public ResponseEntity<ApiResponse<List<ComPicoFallEntity>>> getCompletedPicoCustomers() {
        try {
            List<ComPicoFallEntity> customers = customerService.findAllProduct();
            return ResponseEntity.ok(ApiResponse.success(customers));
        } catch (Exception e) {
            return ResponseEntity.status(500)
                    .body(ApiResponse.error("Failed to fetch completed pico customers: " + e.getMessage()));
        }
    }

    @PostMapping("/customers/pico/{id}/complete")
    public ResponseEntity<ApiResponse<String>> markPicoComplete(@PathVariable int id) {
        try {
            CostomerPicoFallEntity customer = customerService.findBycustomerIdss(id);
            if (customer != null) {
                customerService.deletProductbyids(id);
                customerService.convertAndSave1(customer);
                return ResponseEntity.ok(ApiResponse.success("Pico customer marked as complete"));
            } else {
                return ResponseEntity.status(404).body(ApiResponse.error("Pico customer not found"));
            }
        } catch (Exception e) {
            return ResponseEntity.status(500)
                    .body(ApiResponse.error("Failed to complete pico customer: " + e.getMessage()));
        }
    }

    // Saree Customers
    @GetMapping("/customers/saree")
    public ResponseEntity<ApiResponse<List<CoustomerSareeEntity>>> getSareeCustomers() {
        try {
            List<CoustomerSareeEntity> customers = customerService.findAllSaree();
            return ResponseEntity.ok(ApiResponse.success(customers));
        } catch (Exception e) {
            return ResponseEntity.status(500)
                    .body(ApiResponse.error("Failed to fetch saree customers: " + e.getMessage()));
        }
    }

    @PostMapping("/customers/saree")
    public ResponseEntity<ApiResponse<CoustomerSareeEntity>> addSareeCustomer(
            @RequestBody CoustomerSareeEntity customer) {
        try {
            customerService.addaSaree(customer);
            return ResponseEntity.ok(ApiResponse.success("Saree customer added successfully", customer));
        } catch (Exception e) {
            return ResponseEntity.status(500)
                    .body(ApiResponse.error("Failed to add saree customer: " + e.getMessage()));
        }
    }

    @GetMapping("/customers/saree/completed")
    public ResponseEntity<ApiResponse<List<ComSareeEntity>>> getCompletedSareeCustomers() {
        try {
            List<ComSareeEntity> customers = customerService.findAllcomSaree();
            return ResponseEntity.ok(ApiResponse.success(customers));
        } catch (Exception e) {
            return ResponseEntity.status(500)
                    .body(ApiResponse.error("Failed to fetch completed saree customers: " + e.getMessage()));
        }
    }

    @PostMapping("/customers/saree/{id}/complete")
    public ResponseEntity<ApiResponse<String>> markSareeComplete(@PathVariable int id) {
        try {
            CoustomerSareeEntity customer = customerService.findBycustomerIds1(id);
            if (customer != null) {
                customerService.deletProductbyids1(id);
                customerService.convertAndSave2(customer);
                return ResponseEntity.ok(ApiResponse.success("Saree customer marked as complete"));
            } else {
                return ResponseEntity.status(404).body(ApiResponse.error("Saree customer not found"));
            }
        } catch (Exception e) {
            return ResponseEntity.status(500)
                    .body(ApiResponse.error("Failed to complete saree customer: " + e.getMessage()));
        }
    }

    // Billing
    @GetMapping("/billing/search")
    public ResponseEntity<ApiResponse<Map<String, List<?>>>> searchByNumber(@RequestParam long number) {
        try {
            Map<String, List<?>> data = customerService.findbynumber(number);
            return ResponseEntity.ok(ApiResponse.success(data));
        } catch (Exception e) {
            return ResponseEntity.status(500).body(ApiResponse.error("Failed to search: " + e.getMessage()));
        }
    }

    // Health check
    @GetMapping("/health")
    public ResponseEntity<ApiResponse<String>> health() {
        return ResponseEntity.ok(ApiResponse.success("API is running"));
    }
}
