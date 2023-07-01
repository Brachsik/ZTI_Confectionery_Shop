package com.CS_Backend.Services;

import com.CS_Backend.Entities.Users;
import com.CS_Backend.Layers.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.beans.Transient;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class UserService {

    private final UsersRepository usersRepository;

    @Autowired
    public UserService(UsersRepository usersRepository) {
        this.usersRepository = usersRepository;
    }

    public List<Users> getUsers() {
        return usersRepository.findAll();
    }

    public void addNewUser(Users user) {
        Optional<Users> usersByEmail = usersRepository.findUsersByEmail(user.getEmail());
        if(usersByEmail.isPresent())
        {
            throw new IllegalStateException("email taken");
        }
        usersRepository.save(user);
    }

    public void deleteStudent(Long id) {
        boolean exists = usersRepository.existsById(id);
        if(!exists) {
            throw new IllegalStateException("student does not exists");
        }
        usersRepository.deleteById(id);
    }
    @Transactional
    public void editUser(Long id, String name, String lastName) {
        Users usersById = usersRepository.findById(id).orElseThrow(
                ()-> new IllegalStateException("user does not exists!"));

        if(name != null && name.length() > 0 &&
        !Objects.equals(usersById.getFirstName(), name)) {
            usersById.setFirstName(name);
        }
        if(lastName != null && lastName.length() > 0 &&
                !Objects.equals(usersById.getLastName(), lastName)) {
            usersById.setLastName(lastName);
        }
    }

    public Users loginUser(String email, String pswd) {
        Optional<Users> user = usersRepository.findUsersByEmail(email);

        if (!user.isPresent()) {
            // User not found
            throw new IllegalStateException("Invalid email or password");
        } else if (user != null) {
            if (!user.get().getPswd().equals(pswd)) {
                // Incorrect password
                throw new IllegalStateException("Invalid email or password");
            }
        }


        // Successful login
        return user.get();
    }
}
