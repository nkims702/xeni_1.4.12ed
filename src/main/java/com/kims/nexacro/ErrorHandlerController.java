package com.kims.nexacro;

import javax.servlet.RequestDispatcher;
import javax.servlet.http.HttpServletRequest;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

 

@RestController
public class ErrorHandlerController implements ErrorController{
 
    @Override
    public String getErrorPath() {
    	System.out.println("getErrorPath ***********************************");
        return "/error";
    }
    
 
    
    @RequestMapping("/error")
    public ModelAndView handleError(HttpServletRequest request) {
    

    	ModelAndView mav = new ModelAndView("error");
    	
    	Object status = request.getAttribute(RequestDispatcher.ERROR_STATUS_CODE);
    	
    	int statusCode = Integer.valueOf(status.toString());
    	
    	
    	mav.addObject("error");
    	System.out.println("statusCode ["+statusCode+"]");
    	
    	
    	return mav; 
    } 
    
    
	
}
