package com.kims.nexacro;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.RequestDispatcher;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;



@Controller
public class ReactRestAPI {
	
 
	 @RequestMapping("/index.do")
	    public ModelAndView handleError(HttpServletRequest request) {
	    
//	    	return "error 404";
	    	ModelAndView mav = new ModelAndView("index");
	    	
	    	
	    	
	    	
	    	return mav;
	    	//return "error";
	    }
	 
	 
	 // @RequestMapping(value = "/sessionChk.do", method = RequestMethod.POST)
	//@GetMapping(value = "/members.do")
	 
	@PostMapping(value = "/members.do")
	@ResponseBody
	public Map<Object, Object> reactList() {

		
		HashMap<Object, Object> member = new HashMap<Object, Object>();
		
		
		member.put("id", "kims702");
		member.put("email", "kims702@gmail.com");
		
		
		try {
        	HashMap<Object, Object> vo = new HashMap<Object, Object>();
    		
    		List<HashMap<Object, Object>> list = new ArrayList<>();
    		list.add(member);
    		
    		System.out.println("React spring boot .. Members : " + list.toString());
    	}catch (Exception e) {
    			System.out.println(e.getMessage());
    	}
		
		
		
		//members.put("loginInfo", member);
		
		return member;
		
	}
	
	@PostMapping(value = "/sessionCheck.do")
	@ResponseBody
	public Map<Object, Object> sessionCheck() {

		
		HashMap<Object, Object> member = new HashMap<Object, Object>();
		
		
		member.put("id", "kims702");
		member.put("email", "kims702@gmail.com");
		
		
		try {
        	HashMap<Object, Object> vo = new HashMap<Object, Object>();
    		
    		List<HashMap<Object, Object>> list = new ArrayList<>();
    		list.add(member);
    		
    		System.out.println("React spring boot .. Members sessionCheck: " + list.toString());
    	}catch (Exception e) {
    			System.out.println(e.getMessage());
    	}
		
		
		
		//members.put("loginInfo", member);
		
		return member;
		
	}

}
