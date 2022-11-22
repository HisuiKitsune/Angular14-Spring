package com.angular.angular14spring;

import com.angular.angular14spring.model.Client;
import com.angular.angular14spring.repository.ClientRepository;


import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.Bean;


@SpringBootApplication
public class Angular14SpringApplication extends SpringBootServletInitializer {

	public static void main(String[] args) {
		SpringApplication.run(Angular14SpringApplication.class, args);
	}

	@Bean
	CommandLineRunner initDatabse(ClientRepository clientRepository) {
		return args -> {
		 	clientRepository.deleteAll();

			Client c = new Client();
			c.setCpf("12345678910");
			c.setName("Jhon Doe");
			c.setEmail("jhon@email.com");
			c.setPhone("00123456798");

			clientRepository.save(c);
		};
	}

}
