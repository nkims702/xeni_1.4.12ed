package com.kims.nexacro.config;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.RequestDispatcher;
import javax.servlet.http.HttpServletRequest;

import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

/*
	https://lemontia.tistory.com/655
*/


@RestController
public class ErrorHandlerController implements ErrorController{

	
 
    @Override
    public String getErrorPath() {
        return "/error";
    	//return null;
    }
    
    @RequestMapping("/error")
    public ModelAndView handleError(HttpServletRequest request) {
    
//    	return "error 404";
    	ModelAndView mav = new ModelAndView("error");
    	
    	Object status = request.getAttribute(RequestDispatcher.ERROR_STATUS_CODE);
    	if( status != null) {
    	int statusCode = Integer.valueOf(status.toString());
    	
    	

    	System.out.println("##############################################");
    	System.out.println("statusCode ["+statusCode+"]");
    	System.out.println("##############################################");
    	System.out.println("##############################################");
    	}else {
    		System.out.println("##############################################");
        	System.out.println("statusCode [null]");
        	System.out.println("##############################################");
        	System.out.println("##############################################");
    	}
    	//String projectUrl = "redirect:http:/error";
        //return new ModelAndView("redirect:" + projectUrl);
    	
    	//return "error";
    	
    	//mav.addObject("error");
    	return mav;
    } 
	
}
