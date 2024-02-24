package com.example.wallpaper_backend.Controller;

import com.example.wallpaper_backend.Entity.User;
import com.example.wallpaper_backend.Pojo.UserPojo;
import com.example.wallpaper_backend.Service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Service
@RestController
@RequestMapping("user")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @PostMapping("/save")
    public String saveUser(@RequestBody UserPojo userPojo){
        userService.save(userPojo);
        return "in this section";
    }

    @GetMapping("/getAll")
    public List<User> getAll(){
        return this.userService.getAll();
    }

    @GetMapping("/getById/{id}")
    public Optional<User> getById(@PathVariable("id") Long id){
        return this.userService.getById(id);
    }

    @DeleteMapping("/deleteById/{id}")
    public void deleteById(@PathVariable("id") Long id){
        this.userService.deleteById(id);
    }
}
