(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Work");
            this.set_titletext("Form_Work");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsExportExcelList", this);
            obj._setContents("<ColumnInfo><Column id=\"ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ID\">export-path</Col><Col id=\"NAME\">ext://../export</Col><Col id=\"Column0\">프로젝트 홈 위치에서 한단계 위의 export 위치에 파일이 생성이 됨. 이후 다운로드는 실행 안됨</Col></Row><Row><Col id=\"ID\">export-path</Col><Col id=\"NAME\">ext://./export</Col><Col id=\"Column0\">프로젝트 홈 위치 아래 export 에 임시파일 생성이 됨. 이후 다운로드는 실행 안됨.</Col></Row><Row><Col id=\"ID\">export-path</Col><Col id=\"NAME\">ext:///export</Col><Col id=\"Column0\">최상위 드라이브 아래 export에 임시파일 생성이 됨. 이후 다운로드는 실행 안됨.</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRequestParam", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"email\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"id\">id</Col><Col id=\"name\">kims702</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsInLogin", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"email\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdList01","62.00","85","1009","285",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsExportExcelList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"200\"/><Column size=\"714\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"ID\"/><Cell col=\"1\" text=\"NAME\"/><Cell col=\"2\" text=\"Column0\"/></Band><Band id=\"body\"><Cell text=\"bind:ID\"/><Cell col=\"1\" text=\"bind:NAME\"/><Cell col=\"2\" text=\"bind:Column0\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","64.00","44","226","36",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Button port 8080 XExportImport.do");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtLog","64.00","430","1007","218",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","311","45","155","36",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("testfile");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","489","47","199","33",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("filetransuupdown");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button04","64","7","627","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("넥사 헨들러!!");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","702","50","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("모달리스팝업");
            this.addChild(obj.name, obj);

            obj = new Button("Button05","860","50","165","35",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Nexacro Exception");
            this.addChild(obj.name, obj);

            obj = new Button("Btn_Export_Page","1041","40","179","40",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("ExcelExport_curve");
            this.addChild(obj.name, obj);

            obj = new Button("treegrid","1100","105","156","45",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Button06");
            this.addChild(obj.name, obj);

            obj = new Button("menusearch","1095","175","161","46",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("menusearch");
            this.addChild(obj.name, obj);

            obj = new Button("menusearch_expansion","1096","236","165","44",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("menusearch_expansion");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1280,670,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Work.xfdl", function() {

        // statidc
        // http://localhost:8181/nexacro-xeni-java/XExportImport
        this.exportUrl = "/XExportImport.do";

        //this.exportUrl = "http://localhost:8181/XExportImport";

        this.gfnCreateExportObject = function(pFileName){

        	//excel export object id
            var sExportId = "objExcelExport";

            //ExcelExportObject : invisible object
            var objExport = this.objects[sExportId];

            //already created ExcelExportObject
            if(!this.gfnIsNull(objExport))
            {
                return objExport;
            }

            objExport = new ExcelExportObject();

            //ExcelExportObject set property
            objExport.set_exporttype(nexacro.ExportTypes.EXCEL2007);
            objExport.set_exporturl(this.exportUrl);
            objExport.set_exportfilename(pFileName);

            //add event - onsuccess, onerror
            objExport.addEventHandler("onprogress", this.Export_onprogress, this);
            objExport.addEventHandler("onsuccess", this.Export_onsuccess, this);
            objExport.addEventHandler("onerror", this.Export_onerror, this);

            return objExport;
        }

        this.gfnBasicExport = function(pFileName)
        {
            var sFileName = "ExportData_BasicExport";
            if(!this.gfnIsNull(pFileName))
            {
                sFileName = pFileName;
            }

            //ExcelExportObject
            var objExport = this.gfnCreateExportObject(sFileName);

            //export Grid = export item source
            var objGrid1 = this.grdList01;
            //var objGrid2 = this.grdList02;

            //export item ranges : sheet1 - grid1, grid2
            var sExportCommand1 = "Sheet1!A1";
            //var sExportCommand2 = "Sheet1!A12";

            //addExportItem
            objExport.addExportItem(nexacro.ExportItemTypes.GRID, objGrid1, sExportCommand1);
            //objExport.addExportItem(nexacro.ExportItemTypes.GRID, objGrid2, sExportCommand2);
            objExport.exportData();
        };

        this.Export_onsuccess = function (obj, e)
        {
            this.txtLog.set_value(this.txtLog.value + e.eventid +  "  Export_onsuccess\n");
        };

        /**
        * @description ExcelExportObject onerror event
        */
        this.Export_onerror = function (obj, e)
        {
            this.txtLog.set_value(this.txtLog.value + e.eventid +  "  Export_onerror\n");
        };

        this.Export_onprogress = function(obj,e)
        {
            this.txtLog.set_value(this.txtLog.value
                                  + e.eventid +  "  Export_onprogress : "
                                  + "recordindex " + e.recordindex + "\n");
        };



        /**************************************************************************
        *  공통 함수 처리 영역
        해당 함수의 경우 프로젝트 사용 시 프로젝트 공통함수로 전환을 권장 드립니다.
        **************************************************************************/
        /**
        * Function Name : gfnIsNull
        * Description   : 입력값이 null에 해당하는 경우 모두를 한번에 체크한다.
        * Arguments     : sValue - 체크할 문자열( 예 : null 또는 undefined 또는 "" 또는 "abc" )
        * Return        : Boolean sValue이 undefined, null, NaN, "", Array.length = 0인 경우 true
        */
        this.gfnIsNull = function (sValue)
        {
            if (new String(sValue).valueOf() == "undefined")
            {
                return true;
            }

            if (sValue == null)
            {
                return true;
            }

            var v_ChkStr = new String(sValue);

            if (v_ChkStr == null)
            {
                return true;
            }

            if (v_ChkStr.toString().length == 0)
            {
                return true;
            }

            return false;
        };




        this.Button00_onclick = function(obj,e)
        {
        	console.log("excel object 추가 -----------------------------------");

        	this.gfnBasicExport();
        };


        this.Button01_onclick = function(obj,e)
        {
        	this.go("FrameBase::examFileUpTransfer.xfdl");
        };

        this.Button02_onclick = function(obj,e)
        {
        	this.go("FrameBase::filetransupdown.xfdl");
        };

        this.Button04_onclick = function(obj,e)
        {
        	console.log("---------");
        };

        this.Button05_onclick = function(obj,e)
        {
          var sId    = "baseId";
          var sUrl   = "http://localhost:9191/sessionChk.do";
          var sInDs  = "dsInLogin=dsInLogin";
          var sOutDs = "dsInLogin=dsInLogin";
          var sArg   = "";
          var sfunc  = "fn_callback";

          this.transaction(sId,sUrl,sInDs,sOutDs,sArg,sfunc);
        };


        this.fn_callback = function(sId,nErrorCode,sErrorMSG)
        {
          if(nErrorCode == 0)
          {
            //완료 확인
        	console.log("members.do--------------------------");
            //trace(sId);
          }
        }

        this.Button06_onclick = function(obj,e)
        {
        	var sId    = "sessionChk";
          var sUrl   = "http://localhost:9191/sessionCheck.do";
          var sInDs  = "dsInLogin=dsInLogin";
          var sOutDs = "dsInLogin=dsInLogin";
          var sArg   = "";
          var sfunc  = "fn_callback_session_chk";

          this.transaction(sId,sUrl,sInDs,sOutDs,sArg,sfunc);
        };

        this.fn_callback_session_chk = function(sId,nErrorCode,sErrorMSG){
        	console.log("sId : " + sId);
        	console.log("nErrorCode : " + nErrorCode);
        	console.log("sErrorMSG : " + sErrorMSG);
        }




        this.Button07_onclick = function(obj,e)
        {
        	///sessionChk.do
        	var sId    = "sessionChk";
          var sUrl   = "http://localhost:9191/sessionChk.do";
          var sInDs  = "dsInLogin=dsInLogin";
          var sOutDs = "dsInLogin=dsInLogin";
          var sArg   = "";
          var sfunc  = "fn_callback_session_chk";

          this.transaction(sId,sUrl,sInDs,sOutDs,sArg,sfunc);
        };

        this.Button08_onclick = function(obj,e)
        {
        	var sId    = "doLogin";
          var sUrl   = "http://localhost:9191/doLogin.do";
          var sInDs  = "dsInLogin=dsInLogin";
          var sOutDs = "dsInLogin=dsInLogin";
          var sArg   = "";
          var sfunc  = "fn_callback_session_chk";

          this.transaction(sId,sUrl,sInDs,sOutDs,sArg,sfunc);
        };

        this.Button03_onclick = function(obj,e)
        {
        	var nW = 1000;
        	var nH = 700;

        	var objApp = nexacro.getApplication();
        	var nLeft = (objApp.mainframe.width  / 2) - Math.round(nW / 2);
        	var nTop  = (objApp.mainframe.height / 2) - Math.round(nH / 2) ;
        	nLeft = system.clientToScreenX(this, nLeft);
        	nTop  = system.clientToScreenY(this, nTop);

        // 	var objParam = {param1:this.edt_param1.value
        // 				  , param2:this.edt_param2.value
        // 				  , param3:this.ds_parent};
        	var objParam = { };
        	var sOpenStyle = "dragmovetype=all"
        				 + " resizable=true"
        				 + " titletext=Modeless"
        				 + " showtitlebar=true"
        				 + " showstatusbar=false";

        	nexacro.open("chf_popup3"
        			   , "FrameBase::Form_Work.xfdl"
        			   , this.getOwnerFrame()
        			   , objParam
        			   , sOpenStyle
        			   , nLeft
        			   , nTop
        			   , nW
        			   , nH
        			   , this);
        };


        this.Btn_Export_Page_onclick = function(obj,e)
        {
        	var nW = 1000;
        	var nH = 700;

        	var objApp = nexacro.getApplication();
        	var nLeft = (objApp.mainframe.width  / 2) - Math.round(nW / 2);
        	var nTop  = (objApp.mainframe.height / 2) - Math.round(nH / 2) ;
        	nLeft = system.clientToScreenX(this, nLeft);
        	nTop  = system.clientToScreenY(this, nTop);

        // 	var objParam = {param1:this.edt_param1.value
        // 				  , param2:this.edt_param2.value
        // 				  , param3:this.ds_parent};
        	var objParam = { };
        	var sOpenStyle = "dragmovetype=all"
        				 + " resizable=true"
        				 + " titletext=Modeless"
        				 + " showtitlebar=true"
        				 + " showstatusbar=false";

        	nexacro.open("chf_popup3"
        			   , "FrameBase::ExcelExport_curve.xfdl"
        			   , this.getOwnerFrame()
        			   , objParam
        			   , sOpenStyle
        			   , nLeft
        			   , nTop
        			   , nW
        			   , nH
        			   , this);
        };



        this.treegrid_onclick = function(obj,e)
        {
        	this.go("Base::treegrid.xfdl");
        };

        this.menusearch_onclick = function(obj,e)
        {
        	this.go("Base::menusearch.xfdl");
        };

        this.menusearch_expansion_onclick = function(obj,e)
        {

        	this.go("Base::menusearch_expansion.xfdl");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
            this.Button04.addEventHandler("onclick",this.Button04_onclick,this);
            this.Button03.addEventHandler("onclick",this.Button03_onclick,this);
            this.Button05.addEventHandler("onclick",this.Button05_onclick,this);
            this.Btn_Export_Page.addEventHandler("onclick",this.Btn_Export_Page_onclick,this);
            this.treegrid.addEventHandler("onclick",this.treegrid_onclick,this);
            this.menusearch.addEventHandler("onclick",this.menusearch_onclick,this);
            this.menusearch_expansion.addEventHandler("onclick",this.menusearch_expansion_onclick,this);
        };
        this.loadIncludeScript("Form_Work.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
