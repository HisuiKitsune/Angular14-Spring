package com.angular.angular14spring;

import com.angular.angular14spring.model.Client;
import com.angular.angular14spring.repository.ClientRepository;


import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;


@SpringBootApplication
public class Angular14SpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(Angular14SpringApplication.class, args);
	}

	@Bean
	CommandLineRunner initDatabse(ClientRepository clientRepository) {
		return args -> {
			clientRepository.deleteAll();

			Client c = new Client();
			c.setCpf("123456789");
			c.setName("Breno");
			c.setEmail("X@gmail.com");
			c.setPhone(987654321);

			clientRepository.save(c);
		};
	}

}
