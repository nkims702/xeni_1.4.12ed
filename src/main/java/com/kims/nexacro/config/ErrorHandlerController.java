package com.kims.nexacro.config;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.RequestDispatcher;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.nexacro.uiadapter.spring.core.NexacroException;
import com.nexacro.uiadapter.spring.core.servlet.NexacroInterceptor;
import com.nexacro.uiadapter.spring.core.util.NexacroUtil;
import com.nexacro.uiadapter.spring.core.view.NexacroModelAndView;
import com.nexacro.uiadapter.spring.core.view.NexacroView;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

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
    protected ModelAndView doResolveException(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) {
	    
		//prepareResolveException(request, response, handler, ex);
		
		// nexacro 요청이 아닌 경우 별도 ExceptionResolver 가 처리 할 수 있도록 null을 반환 한다.
	    if(NexacroUtil.isNexacroRequest(request)) {
            
            // Nexacro Exception 만을 handling 하도록 한다.
            // for nexacro request
            NexacroModelAndView mav = new NexacroModelAndView("error");
            
            if(ex instanceof NexacroException){ // NexacroConvertException
                NexacroException nexaExp = (NexacroException) ex;
                mav.setErrorCode(nexaExp.getErrorCode());
                mav.setErrorMsg("error");
            } 
            
            return mav;
	    }
        
	    return null;
	}
    
    /*
    @RequestMapping("/error")
    public void handleError(HttpServletRequest request) {
    
    	ModelAndView mav = new ModelAndView("error");
    	//NexacroResult result = new NexacroResult(); 
    	
    	Object status = request.getAttribute(RequestDispatcher.ERROR_STATUS_CODE);
    	String requestUri = request.getRequestURI();
    	if( status != null) {
	    	int statusCode = Integer.valueOf(status.toString());
	
	    	System.out.println("##############################################");
	    	System.out.println("request.getContextPath() : " + request.getContextPath());
	    	System.out.println("request requestUri : " + request.getRequestURL() + " " + request.getRequestURI());
	    	System.out.println("statusCode ["+statusCode+"]");
	    	System.out.println("##############################################");
	    	System.out.println("##############################################");
    	}else {
    		System.out.println("##############################################");
        	System.out.println("statusCode [null]");
        	System.out.println("##############################################");
        	System.out.println("##############################################");
    	}
    	//return mav;
    	
    	//return result;
    	
    } 
    */
	
}
