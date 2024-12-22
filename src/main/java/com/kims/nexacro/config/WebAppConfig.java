package com.kims.nexacro.config;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;

import org.springframework.boot.web.servlet.ServletContextInitializer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.support.ReloadableResourceBundleMessageSource;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.ViewResolverRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.nexacro.uiadapter.spring.core.servlet.NexacroInterceptor;


@Configuration
public class WebAppConfig implements WebMvcConfigurer{
	
	public static final String ALLOWED_METHOD_NAMES = "GET,HEAD,POST,PUT,DELETE,TRACE,OPTIONS,PATCH";
	
	
	@Override
	public void configureViewResolvers(ViewResolverRegistry registry) {
		//WebMvcConfigurer.super.configureViewResolvers(registry);
		registry.jsp("/WEB-INF/jsp/", ".jsp");
	}
	
	
	@Override
	public void addViewControllers(ViewControllerRegistry registry) {
//		WebMvcConfigurer.super.addViewControllers(registry);
		registry.addViewController("/").setViewName("forward:/index.html");
	}
	
	@Override
	public void addResourceHandlers(ResourceHandlerRegistry registry) {
//		WebMvcConfigurer.super.addResourceHandlers(registry);
		//registry.addResourceHandler("/_resource_/**").addResourceLocations("classpath:/static/testProject/_resource_/");
//		registry.addResourceHandler("/_resource_/**").addResourceLocations("classpath:/static/_resource_/");
//		registry.addResourceHandler("/FrameBase/**").addResourceLocations("classpath:/static/FrameBase/");
//		registry.addResourceHandler("/nexacrolib/**").addResourceLocations("classpath:/static/nexacrolib/");
//		
//		registry.addResourceHandler("/*.json").addResourceLocations("classpath:/static/");
//		registry.addResourceHandler("/*.html").addResourceLocations("classpath:/static/");
//		registry.addResourceHandler("/*.js").addResourceLocations("classpath:/static");
	}
	

	/*
	 * @Bean public ReloadableResourceBundleMessageSource messageSource() {
	 * ReloadableResourceBundleMessageSource source = new
	 * ReloadableResourceBundleMessageSource();
	 * 
	 * source.setBasename("classpath:/messages/message");
	 * source.setDefaultEncoding("UTF-8"); source.setCacheSeconds(60);
	 * source.setUseCodeAsDefaultMessage(true);
	 * 
	 * return source;
	 * 
	 * }
	 */

	
	/*
	 * @Bean public SessionLocaleResolver localResolver() {
	 * 
	 * return new SessionLocaleResolver();
	 * 
	 * }
	 */
	
//	@Bean
//	public LocaleChangeInterceptor localeChangeInterceptor() {
//		
//		LocaleChangeInterceptor interceptor = new LocaleChangeInterceptor();
//		interceptor.setParamName("lang");
//		return interceptor;
//		
//	}
	
//	@Override
//	public void addInterceptors(InterceptorRegistry registry) {
////		WebMvcConfigurer.super.addInterceptors(registry);
//		registry.addInterceptor(localeChangeInterceptor());
//	}
	
	@Override
	public void addInterceptors(InterceptorRegistry registry) {
		// TODO Auto-generated method stub
		//WebMvcConfigurer.super.addInterceptors(registry);
		registry.addInterceptor(new AuthInterceptor());
		registry.addInterceptor(new NexacroInterceptor());
	}
	
	@Override
	public void addCorsMappings(CorsRegistry registry) {
		// TODO Auto-generated method stub
		//registry.addMapping("/**").allowedMethods(ALLOWED_METHOD_NAMES.split(",")).exposedHeaders(HttpHeaders.LOCATION);
		//registry.addMapping("/**").allowedOrigins("http://localhost:8081").allowedMethods("*").allowCredentials(false).maxAge(3000);
		
		registry.addMapping("/**").allowedOrigins("*")
		.allowedMethods("GET","POST","PUT","DELETE");
		//.allowedHeaders("Authorization", "Content-Type").exposedHeaders("Custom-Header").allowCredentials(true).maxAge(3600);
	}
	
	
	
	
}
