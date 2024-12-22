package com.kims.nexacro.config;

import java.util.List;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;

import org.springframework.boot.autoconfigure.web.servlet.WebMvcRegistrations;
import org.springframework.boot.web.servlet.ServletContextInitializer;
import org.springframework.boot.web.servlet.ServletRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.method.support.HandlerMethodReturnValueHandler;
import org.springframework.web.servlet.HandlerExceptionResolver;
import org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter;

import com.nexacro.java.xapi.tx.PlatformType;
import com.nexacro.java.xeni.services.GridExportImportServlet;
import com.nexacro.uiadapter.spring.core.context.ApplicationContextProvider;
import com.nexacro.uiadapter.spring.core.resolve.NexacroHandlerMethodReturnValueHandler;
import com.nexacro.uiadapter.spring.core.resolve.NexacroMappingExceptionResolver;
import com.nexacro.uiadapter.spring.core.resolve.NexacroMethodArgumentResolver;
import com.nexacro.uiadapter.spring.core.resolve.NexacroRequestMappingHandlerAdapter;
import com.nexacro.uiadapter.spring.core.view.NexacroFileView;
import com.nexacro.uiadapter.spring.core.view.NexacroView;

@Configuration
public class NexacroConfig extends WebAppConfig implements WebMvcRegistrations{
	
	@Bean
	public ApplicationContextProvider applicationContextProvider() {
		return new ApplicationContextProvider();
		
	}
	
	@Override
	public RequestMappingHandlerAdapter getRequestMappingHandlerAdapter() {
		return new NexacroRequestMappingHandlerAdapter();
	} 
	
	
	@Override
	public void addArgumentResolvers(List<HandlerMethodArgumentResolver> resolvers) {
//		super.addArgumentResolvers(resolvers);
		NexacroMethodArgumentResolver nexacroResolver = new NexacroMethodArgumentResolver();
		resolvers.add(nexacroResolver);
		super.addArgumentResolvers(resolvers);
	}
	
	@Override
	public void addReturnValueHandlers(List<HandlerMethodReturnValueHandler> handlers) {
		
		NexacroHandlerMethodReturnValueHandler returnValueHandler = new NexacroHandlerMethodReturnValueHandler();
		NexacroFileView nexacroFileView = new NexacroFileView();
		NexacroView nexacroView = new NexacroView();
		nexacroView.setDefaultContentType(PlatformType.CONTENT_TYPE_XML);
		nexacroView.setDefaultCharset("UTF-8");
		
		returnValueHandler.setView(nexacroView);
		returnValueHandler.setFileView(nexacroFileView);
		
		handlers.add(returnValueHandler);
		super.addReturnValueHandlers(handlers);
		//super.addReturnValueHandlers(handlers);
	}
	
	
	@Override
	public void configureHandlerExceptionResolvers(List<HandlerExceptionResolver> resolvers) {
		NexacroView nexacroView = new NexacroView();
		nexacroView.setDefaultContentType(PlatformType.CONTENT_TYPE_XML);
		nexacroView.setDefaultCharset("UTF-8");
		
		NexacroMappingExceptionResolver nexacroException = new NexacroMappingExceptionResolver();
		
		nexacroException.setView(nexacroView);
		nexacroException.setShouldLogStackTrace(true);
		nexacroException.setShouldSendStackTrace(true);
		nexacroException.setDefaultErrorMsg("fail.common.msg");
		//nexacroException.setMessageSource(messageSource());
		nexacroException.setOrder(1);
		resolvers.add(nexacroException);
		
		super.configureHandlerExceptionResolvers(resolvers);
		
		//	super.configureHandlerExceptionResolvers(resolvers);
	}
	
	@Bean
	  public ServletRegistrationBean<GridExportImportServlet> gridExportImportServletBean() {
	      ServletRegistrationBean<GridExportImportServlet> bean = 
	          new ServletRegistrationBean<GridExportImportServlet>( new GridExportImportServlet()
	              , "/XExportImport.do"
	              );
	      bean.setLoadOnStartup(1);
	      return bean;
	  }
	
	@Bean
	public ServletContextInitializer initializer() {

	      return new ServletContextInitializer() {
	        /*
	         * 넥사크로플랫폼 엑셀 처리 모듈:nexacro17-xeni.jar를 이용한 엑셀 처리 설정
	        */ 
	        @Override
	        public void onStartup(ServletContext servletContext) throws ServletException {
	        	
	        	servletContext.setInitParameter("export-path"       , "file://../export");  //엑셀 export 임시폴더 생성 기준 디렉터리
	    		servletContext.setInitParameter("import-path"       , "file://../import");  //엑셀 import 임시폴더 생성 기준 디렉터리
	        	
//	        	servletContext.setInitParameter("export-path"       , "ext://../export");  //엑셀 export 임시폴더 생성 기준 디렉터리
//	    		servletContext.setInitParameter("import-path"       , "ext://../import");  //엑셀 import 임시폴더 생성 기준 디렉터리
	    		
	    		
	        	/** nexacro-xeni-java-1.4.12e.jar 테스트  */ 
//	        	servletContext.setInitParameter("export-path"       , "ext://../export");  //엑셀 export 임시폴더 생성 기준 디렉터리
//	    		servletContext.setInitParameter("import-path"       , "ext://../import");  //엑셀 import 임시폴더 생성 기준 디렉터리
//	    		
	        	//servletContext.setInitParameter("export-path"       , "ext:///export");  //엑셀 export 임시폴더 생성 기준 디렉터리
	    		//servletContext.setInitParameter("import-path"       , "ext:///import");  //엑셀 import 임시폴더 생성 기준 디렉터리
	        	
	        	//servletContext.setInitParameter("export-path"       , "ext://./export");  //엑셀 export 임시폴더 생성 기준 디렉터리
	    		//servletContext.setInitParameter("import-path"       , "ext://./import");  //엑셀 import 임시폴더 생성 기준 디렉터리
	    		
	        	
	        	
	        	/**
	        	 * 
	        	 * http://localhost:8080/XExportImport.do
	        	 * */
//	                servletContext.setInitParameter("export-path"       , "file:///export");  //엑셀 export 임시폴더 생성 기준 디렉터리
//	                servletContext.setInitParameter("import-path"       , "file:///import");  //엑셀 import 임시폴더 생성 기준 디렉터리
		        	//servletContext.setInitParameter("export-path"       , "file:///C:/TEMP/export\\");  //엑셀 export 임시폴더 생성 기준 디렉터리
		    		//servletContext.setInitParameter("import-path"       , "file:///C:/TEMP/import\\");  //엑셀 import 임시폴더 생성 기준 디렉터리
//		        	
//	        	servletContext.setInitParameter("export-path"       , "ext://../export");  //엑셀 export 임시폴더 생성 기준 디렉터리
//	    		servletContext.setInitParameter("import-path"       , "ext://../import");  //엑셀 import 임시폴더 생성 기준 디렉터리
//	        	
	    		
	    		
	        	/**
	        	 * 
	        	 * 
	        	 * 상대 경로 url이 다름. 
	        	 * http://localhost:8080/export/a968bb89-7e5f-43f1-8e2f-f7717fff0ea7/ExportData_BasicExport.xlsx? 404 (Not Found)
	        	 * */
	                //servletContext.setInitParameter("export-path"       , "../export/");  //엑셀 export 임시폴더 생성 기준 디렉터리
	                //servletContext.setInitParameter("import-path"       , "../import/");  //엑셀 import 임시폴더 생성 기준 디렉터리
//		        	
	
	        	
	        		servletContext.setInitParameter("monitor-enabled"   , "false");    //임시파일 삭제를 위한 모니터링 여부
	                servletContext.setInitParameter("monitor-cycle-time", "30");      //임시파일 삭제를 위한 모니터링 주기( default:분)
	                servletContext.setInitParameter("file-storage-time" , "10");      //임시파일 생성 디렉터리 모니터링 주기 (default:분)
	                
	                System.out.println("##############################################################");
	                
	                System.out.println("WebAppConfig servletContext.getContextPath() : " + servletContext.getContextPath());
	                System.out.println("WebAppConfig export-path : " + servletContext.getInitParameter("export-path"));
	                System.out.println("##############################################################");
	                
	                
	        }
	      };
	  }
	
	 
	
	
}
