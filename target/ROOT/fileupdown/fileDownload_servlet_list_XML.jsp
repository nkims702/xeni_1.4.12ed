<%@ page import = "java.io.*" %>
<%@ page import = "java.util.*" %>

<%@ page import="com.nexacro.java.xapi.tx.*" %>
<%@ page import="com.nexacro.java.xapi.tx.HttpPlatformResponse" %>
<%@ page import="com.nexacro.java.xapi.data.*" %> 
<%-- 
<%@ page import="com.nexacro17.xapi.tx.*" %>
<%@ page import="com.nexacro17.xapi.data.*" %>
<%@ page import="com.nexacro17.xapi.data.datatype.*" %>
--%>
<%

	/*upload file List (search)*/
	
	String strCharset = "utf-8";

	PlatformRequest platformRequest = new PlatformRequest(request.getInputStream(), PlatformType.CONTENT_TYPE_XML, strCharset);
	platformRequest.receiveData();
	PlatformData inPD = platformRequest.getData();
	VariableList inVariableList  = inPD.getVariableList();

	PlatformData resData = new PlatformData();
	VariableList resVarList = resData.getVariableList();
	
	String folderName = inVariableList.getString("filefolder");
	System.out.println("fileDownload_servlet_list_XML folderName::::::::::::::::::::::::::" + folderName);
	 
	//String filePath = request.getRealPath("./" + folderName) + "/";
	String filePath = "C:\\dev\\nexacro-import-file\\";
	 
	//String url = request.getRequestURL().substring(0, request.getRequestURL().lastIndexOf("/")-18) + folderName + "/";

	//output dataset
	DataSet ds = new DataSet("dsList");
	ds.addColumn("FILE_NAME", DataTypes.STRING, 255);
	ds.addColumn("FILE_URL", DataTypes.STRING, 255);
	ds.addColumn("FiLE_SIZE", DataTypes.STRING, 255);
	int row;

	File rf = new File(filePath); 
	File[] rfiles = rf.listFiles();
	
	if(rfiles != null)
	{
		for(int i=0; i<rfiles.length; i++)
		{
			if(rfiles[i].isFile())
			{
				
				row = ds.newRow();
				ds.set(row, "FILE_NAME", rfiles[i].getName());
				ds.set(row, "FILE_URL", filePath + rfiles[i].getName());
				ds.set(row, "FiLE_SIZE", rfiles[i].length());
			}
		}
	}
	else
	{
		//file is empty
		System.out.println("rfiles is null");
	}

	resData.addDataSet(ds);
	resVarList.add("ErrorCode", 0);
	resVarList.add("ErrorMsg", "Success" );
		
	HttpPlatformResponse pRes = new HttpPlatformResponse(response, request);
	pRes.setContentType(PlatformType.CONTENT_TYPE_XML);
	pRes.setCharset("UTF-8");
	pRes.setData(resData);
	pRes.sendData();
%>
