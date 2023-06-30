package com.CS_Backend.Entities;

import javax.persistence.*;

@Entity
@Table(
        name="users",
        uniqueConstraints = {
                @UniqueConstraint(name = "user_email_unique", columnNames = "email")
        }
)
public class Users {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column(
    name="first_name",
    nullable = false,
    columnDefinition = "TEXT"
    )
    private String firstName;
    @Column(
            name="last_name",
            nullable = false,
            columnDefinition = "TEXT"
    )
    private String lastName;

    @Override
    public String toString() {
        return "Users{" +
                "id=" + id +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", email='" + email + '\'' +
                ", pswd='" + pswd + '\'' +
                '}';
    }
    @Column(
            name="email",
            nullable = false,
            columnDefinition = "TEXT"
    )
    private String email;
    @Column(
            name="password",
            nullable = false,
            columnDefinition = "TEXT"
    )
    private String pswd;

    @Column(
            name="role",
            nullable = false,
            columnDefinition = "TEXT DEFAULT 'user'"
    )
    private String role;

    public void setRole(String role) {
        this.role = role;
    }

    public String getRole() {
        return role;
    }

    public Users(String firstName, String lastName, String email, String pswd, String role) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.pswd = pswd;
        this.role = role;
    }

    public Users() {

    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPswd(String pswd) {
        this.pswd = pswd;
    }

    public String getPswd() {
        return pswd;
    }
    public Long getId() {
        return id;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getEmail() {
        return email;
    }
}
