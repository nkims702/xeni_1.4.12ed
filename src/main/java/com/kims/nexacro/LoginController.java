package com.kims.nexacro;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.json.MappingJackson2JsonView;

import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;


@Controller
public class LoginController {
	
	
	
	@RequestMapping(value = "/doLogin.do", method = RequestMethod.POST)
	public NexacroResult doLogin(@ParamDataSet(name= "dsInLogin", required = false) Map<String, String> dsInLogin, HttpServletRequest request) {

		NexacroResult result = new NexacroResult(); 
		ModelAndView modelAndView = new ModelAndView(new MappingJackson2JsonView());; 
		
		try {
			System.out.println("request.getRemoteHost() :" + request.getRemoteHost());
			Map<String, String> loginInfo = new HashMap<>();
			loginInfo.put("ID", "ID-info");
			
			request.getSession().setAttribute("userInfo", loginInfo);
			HttpSession session = request.getSession();
			session.setAttribute("dsLoginUser", loginInfo);
			session.setMaxInactiveInterval(24*60*60);
			
		}catch (Exception e) {
			// TODO: handle exception
		}
		
		return result;
	}
	
	
	@RequestMapping(value = "/sessionChk.do", method = RequestMethod.POST)
	public NexacroResult sessionChk(@ParamDataSet(name= "dsInLogin", required = false) Map<String, String> dsInLogin, HttpServletRequest request) {

		NexacroResult result = new NexacroResult(); 
		ModelAndView modelAndView = new ModelAndView(new MappingJackson2JsonView());; 
		Map<String, String> loginInfo = new HashMap<>();
		try {
			
			
			//request.getSession().setAttribute("dsLoginUser", loginInfo);
//			HttpSession session = request.getSession();
//			session.setAttribute("dsLoginUser", loginInfo);
//			session.setMaxInactiveInterval(24*60*60);
			
			
			Object userInfo = request.getSession().getAttribute("userInfo");
			if( userInfo == null) {
				System.out.println("session is null");
			}else {
				System.out.println("userinfo : " + userInfo.toString());
			}
		}catch (Exception e) {
			// TODO: handle exception
		}
		
		result.addDataSet("dsInLogin", loginInfo);
		
		return result;
	}
	
	@RequestMapping(value="/logout.do", method=RequestMethod.GET)
	 public ModelAndView  logout(HttpServletRequest req){
	  System.out.println("/logout !!!!");
	   
	  HttpSession session = req.getSession();
	  System.out.println("chksession session id : " + session.getId() + ", session test value : " + session.getAttribute("test"));
	   
	  
	  return new ModelAndView("index_logout");

	 }
}
