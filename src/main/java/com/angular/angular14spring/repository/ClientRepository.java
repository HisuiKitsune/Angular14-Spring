package com.angular.angular14spring.repository;

import org.springframework.stereotype.Repository;
import com.angular.angular14spring.model.Client;
import org.springframework.data.jpa.repository.JpaRepository;


@Repository
public interface ClientRepository extends JpaRepository<Client, Long> {

}
    
