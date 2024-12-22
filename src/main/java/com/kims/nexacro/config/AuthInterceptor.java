package com.kims.nexacro.config;

import java.util.Enumeration;
import java.util.StringTokenizer;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;


@Configuration
public class AuthInterceptor extends HandlerInterceptorAdapter {

    //private static final Logger logger = LoggerFactory.getLogger(AuthInterceptor.class);
    
    @Override
    public boolean preHandle(HttpServletRequest request,  HttpServletResponse response,  Object handler) throws NexacroException {
        
    	
    	String requestUri = request.getRequestURI();
    	String[] splitRequestUri = requestUri.split("/");
    	System.out.println("AuthInterceptor preHandle -----call requestUri : " + requestUri);
    	HttpSession session = request.getSession();
    	
    	
    	if( requestUri.indexOf(".do") > 0 ) {
    	
	    	if("/logout.do".equals(requestUri)
	    				|| "/".equals(requestUri) 
	    				 || "/index.html".equals(requestUri) 
	    	) {}
	    	else {
	
	            // login처리를 담당하는 사용자 정보를 담고 있는 객체를 가져옴
	            Object obj = session.getAttribute("userInfo");
	              
	            if ( obj == null ){
	                // 로그인이 안되어 있는 상태임으로 로그인 폼으로 다시 돌려보냄(redirect)
	            	
	            	
	            	new NexacroException("is not login");//c.nexacro.java.xapi.tx.PlatformRequest  [0;39m [2m:[0;39m Checking InputStream failed
	                //response.sendRedirect("/logout.do");
	                //return false; // 더이상 컨트롤러 요청으로 가지 않도록 false로 반환함
	            }
	            
	    		
	    	}
    	}
    	
    	  
        // preHandle의 return은 컨트롤러 요청 uri로 가도 되냐 안되냐를 허가하는 의미임
        // 따라서 true로하면 컨트롤러 uri로 가게 됨.
        return true; 
    }
    
    
 // 컨트롤러가 수행되고 화면이 보여지기 직전에 수행되는 메서드
    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler,
            ModelAndView modelAndView) throws Exception {
        // TODO Auto-generated method stub
        super.postHandle(request, response, handler, modelAndView);
    }
}
 