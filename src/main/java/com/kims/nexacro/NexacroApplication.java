package com.kims.nexacro;

import java.util.HashMap;
import java.util.Map;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.server.WebServerFactoryCustomizer;
import org.springframework.boot.web.servlet.server.ConfigurableServletWebServerFactory;
import org.springframework.context.annotation.Bean;


@SpringBootApplication
public class NexacroApplication {
	public static void main(String[] args) {
		//SpringApplication application =     new SpringApplication(NexacroApplication.class);
		//Map<String, Object> map = new HashMap<String, Object>();
		//map.put("server.servlet.context-path", "/xeni");
		
		//application.setDefaultProperties(map);
		//System.setProperty("server.servlet.context-path", "/");
		SpringApplication.run(NexacroApplication.class, args);
		
//		System.out.println("###########################################");
//		System.out.println("main System.getProperty server.servlet.context-path : " + System.getProperty("server.servlet.context-path"));
//		
//		System.out.println("###########################################");
		
	}
	
	/*
	 * @Bean public WebServerFactoryCustomizer<ConfigurableServletWebServerFactory>
	 * webServerFactoryCustomizer(){ return factory ->
	 * factory.setContextPath("/sub-uri");
	 * 
	 * }
	 */
	
}
