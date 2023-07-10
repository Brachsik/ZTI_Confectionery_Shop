package com.CS_Backend.Controllers;

import com.CS_Backend.Controllers.UserController;
import com.CS_Backend.Entities.Users;
import com.CS_Backend.Services.UserService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Arrays;
import java.util.List;

import static org.hamcrest.collection.IsCollectionWithSize.hasSize;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@ExtendWith(MockitoExtension.class)
@WebMvcTest(UserController.class)
public class UserControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @MockBean
    private UserService userService;

    @Test
    void testGetUsers() throws Exception {
        Users user1 = new Users("John", "Doe", "john@example.com", "password"); // Adjust with actual values
        Users user2 = new Users("Jane", "Doe", "jane@example.com", "password"); // Adjust with actual values
        List<Users> users = Arrays.asList(user1, user2);

        when(userService.getUsers()).thenReturn(users);

        mockMvc.perform(get("/user"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$", hasSize(2))); // assert that the returned list has 2 users

        verify(userService, times(1)).getUsers();
    }

    @Test
    void testAddUser() throws Exception {
        Users user = new Users("John", "Doe", "john@example.com", "password"); // Adjust with actual values

        mockMvc.perform(post("/user")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(user)))
                .andExpect(status().isOk());

        verify(userService, times(1)).addNewUser(any(Users.class));
    }

    @Test
    void testDeleteUser() throws Exception {
        Long userId = 1L; // example user id

        mockMvc.perform(delete("/user/" + userId))
                .andExpect(status().isOk());

        verify(userService, times(1)).deleteStudent(userId);
    }

    @Test
    void testEditUser() throws Exception {
        Long userId = 1L; // example user id
        String name = "John";
        String lastName = "Doe";

        mockMvc.perform(put("/user/" + userId)
                        .param("name", name)
                        .param("lastName", lastName))
                .andExpect(status().isOk());

        verify(userService, times(1)).editUser(userId, name, lastName);
    }

    @Test
    void testLoginUser() throws Exception {
        Users loginUser = new Users("John", "Doe", "john@example.com", "password"); // Adjust with actual values

        when(userService.loginUser(anyString(), anyString())).thenReturn(loginUser);

        mockMvc.perform(post("/user/login")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(loginUser)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.email").value("john@example.com"));

        verify(userService, times(1)).loginUser(anyString(), anyString());
    }
}
