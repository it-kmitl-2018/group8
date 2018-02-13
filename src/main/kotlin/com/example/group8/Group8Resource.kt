package com.example.group8

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Component
import org.springframework.web.bind.annotation.GetMapping



@Component

class Group8Resource {

    @Autowired
    lateinit var demoService: Group8Service

    fun helloString() = "hello world"




    fun demoService() = demoService.getHello()
}