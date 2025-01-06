package com.languagelearning.services;

import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class UserServiceTest {
    @Test
    public void testUserRegistration() {
        UserService userService = new UserService();
        String result = userService.registerUser("John Doe", "john@example.com");
        assertEquals("User Registered Successfully: John Doe", result);
    }
}
