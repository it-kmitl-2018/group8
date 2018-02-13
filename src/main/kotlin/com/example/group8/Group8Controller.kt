package com.example.group8

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController


@RestController
@RequestMapping("hello")
class Group8Controller {
    @Autowired
    lateinit var demoService: Group8Service

    @GetMapping("/string")
    fun helloString() = "Hello world"



    @GetMapping("/service")
    fun demoService() = demoService.getHello()
}