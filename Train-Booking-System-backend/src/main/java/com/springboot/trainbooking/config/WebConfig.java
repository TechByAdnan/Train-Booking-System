package com.springboot.trainbooking.config;


import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")  // Allow CORS for all endpoints
                .allowedOrigins("http://localhost:5175") // Replace with your frontend URL
                .allowedMethods("GET", "POST", "PUT", "DELETE") // Allow only specific HTTP methods
                .allowedHeaders("*")  // Allow all headers
                .allowCredentials(true); // Allow credentials (cookies, etc.)
    }
}
