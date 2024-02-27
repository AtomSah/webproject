package com.example.wallpaper_backend.Service.Impl;


import com.example.wallpaper_backend.Entity.User;
import com.example.wallpaper_backend.Pojo.UserPojo;
import com.example.wallpaper_backend.Repo.UserRepo;
import com.example.wallpaper_backend.Service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepo userRepo;

    @Override
    public void save(UserPojo userPojo) {
        User user = new User();

        if(userPojo.getId()!=null){
            user=userRepo.findById(userPojo.getId()).get();
        }

        user.setFullName(userPojo.getFullName());
        user.setEmail(userPojo.getEmail());
        user.setPassword(userPojo.getPassword());
        user.setSecurityQuestion(userPojo.getSecurityQuestion());

        userRepo.save(user); // insert query
    }

    @Override
    public List<User> getAll() {
        return userRepo.findAll(); // select * from users
    }

    @Override
    public void deleteById(Long id) {
        userRepo.deleteById(id); // delete from users where id =?1
    }

    @Override
    public Optional<User> getById(Long id) {
        return userRepo.findById(id);
    }
}