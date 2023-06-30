package com.CS_Backend.Controllers;

import com.CS_Backend.Entities.Users;
import com.CS_Backend.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
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

    @GetMapping
    public List<Users> getUsers() {
        return userService.getUsers();
    }

    @PostMapping
    public void addUser(@RequestBody Users user) {
        userService.addNewUser(user);
    }

    @DeleteMapping(path = "{studentId}")
    public void deleteUser(@PathVariable("studentId") Long id) {
        userService.deleteStudent(id);
    }

    @PutMapping(path = "{studentId}")
    public void editUser(@PathVariable("studentId") Long id,
                         @RequestParam(required = false) String name,
                         @RequestParam(required = false) String lastName) {

    userService.editUser(id, name, lastName);
    }
}
