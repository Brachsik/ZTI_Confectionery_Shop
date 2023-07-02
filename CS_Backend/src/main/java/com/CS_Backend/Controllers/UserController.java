package com.CS_Backend.Controllers;

import com.CS_Backend.Entities.Users;
import com.CS_Backend.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {
    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

@PostMapping(path="/login")
    public Users login (@RequestBody Users loginUser) {
        // Retrieve the user from the database based on the provided email
        return userService.loginUser(loginUser.getEmail(), loginUser.getPswd());
    }
    @GetMapping
    public List<Users> getUsers() {
        return userService.getUsers();
    }

    @PostMapping
    public void addUser(@RequestBody Users user) {
        userService.addNewUser(user);
    }

    @DeleteMapping(path = "{userId}")
    public void deleteUser(@PathVariable("userId") Long id) {
        userService.deleteStudent(id);
    }

    @PutMapping(path = "{userId}")
    public void editUser(@PathVariable("userId") Long id,
                         @RequestParam(required = false) String name,
                         @RequestParam(required = false) String lastName) {

    userService.editUser(id, name, lastName);
    }
}
