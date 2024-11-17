package com.kims.nexacro.config;

import java.util.Enumeration;
import java.util.StringTokenizer;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;


//@Configuration
public class AuthInterceptor extends HandlerInterceptorAdapter {

    //private static final Logger logger = LoggerFactory.getLogger(AuthInterceptor.class);
    
    @Override
    public boolean preHandle(HttpServletRequest request,  HttpServletResponse response,  Object handler) throws Exception {
        
    	
    	String requestUri = request.getRequestURI();
    	String[] splitRequestUri = requestUri.split("/");
    	
    	if( splitRequestUri != null && splitRequestUri.length > 0 ) {
    		String txtExt = splitRequestUri[splitRequestUri.length -1];
    		
    		try {
    			String fileName = "";
        		String fileNameExtension = "";
        		StringTokenizer st = new StringTokenizer(txtExt, ".");
        		while( st.hasMoreTokens()) {
        			fileName = st.nextToken();
        			fileNameExtension = st.nextToken();
        		}
        		
        		if( !fileNameExtension.equals("") &&fileNameExtension.equals("do")) {
        			System.out.println("find do fileName : " + fileName + ", fileNameExtension : " + fileNameExtension + ", 확장자 찾기 :" + txtExt);
        			
        			
        			if( "doLogin".equals(fileName)) {
        				
        			}else {
        		    	HttpSession session = request.getSession();
        		        
        		        if(session.getAttribute("userInfo") == null) {
        		        
        		            System.out.println("current user is not logined");
        		            
        		            // 로그인하지 않은 사용자일 경우 로그인 페이지로 이동
        		            //response.sendRedirect("/error");
        		            //return false;
        		        }else {
        		        	System.out.println("current user is logined");
        		        	
        		        }
        				
        			}
        			
        			
        			
        		}
    			
    		}catch (Exception e) {
				// TODO: handle exception
			}
    		
    	}

//        
        // 로그인한 사용자일 경우 Controller 호출
        return true;
    }
}


/*
Object userInfo = request.getSession().getAttribute("userInfo");
if( userInfo == null) {
	System.out.println("session is null");
}else {
	System.out.println("userinfo : " + userInfo.toString());
}
*/
