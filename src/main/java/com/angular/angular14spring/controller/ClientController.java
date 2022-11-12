package com.angular.angular14spring.controller;

import java.util.List;
import com.angular.angular14spring.model.Client;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.angular.angular14spring.repository.ClientRepository;


import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/clients")
@AllArgsConstructor
@Component
public class ClientController {

    private final ClientRepository clientRepository;


    @GetMapping
    public List<Client> list() {
        return clientRepository.findAll();
    }

    @ResponseStatus(code = HttpStatus.CREATED )
    @PostMapping
    public Client create(@RequestBody Client client) {
       return clientRepository.save(client);
        // return ResponseEntity.status(HttpStatus.CREATED)
        //    .body(clientRepository.save(client));

    }
 }
