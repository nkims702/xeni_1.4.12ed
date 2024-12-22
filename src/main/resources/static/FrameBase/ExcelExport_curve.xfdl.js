(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ExcelExport");
            this.set_titletext("ExcelExport");
            this.getSetter("classname").set("excelExport_multi");
            if (Form == this.constructor)
            {
                this._setFormPosition(1020,640);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_excel", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"dept_code\" type=\"STRING\" size=\"256\"/><Column id=\"dept_name\" type=\"STRING\" size=\"256\"/><Column id=\"employee\" type=\"STRING\" size=\"256\"/><Column id=\"telno\" type=\"STRING\" size=\"256\"/><Column id=\"address\" type=\"STRING\" size=\"256\"/><Column id=\"age\" type=\"STRING\" size=\"256\"/><Column id=\"date\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"dept_code\">100</Col><Col id=\"dept_name\">Technical Support OK</Col><Col id=\"employee\">Gil-Dong Hong</Col><Col id=\"telno\">02-1234-1234</Col><Col id=\"address\">Seoul Korea</Col><Col id=\"age\">100</Col><Col id=\"date\">20180728</Col></Row><Row><Col id=\"dept_code\">200</Col><Col id=\"dept_name\">Technical Support 오케이</Col><Col id=\"employee\">Sun-Sin Lee</Col><Col id=\"telno\">02-1234-1234</Col><Col id=\"address\">Seoul Korea</Col><Col id=\"age\">200</Col><Col id=\"date\">20180729</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static05","16","14","283","18",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Excel Export");
            obj.set_cssclass("sta_WF_subtitP");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","16.00","262","984","348",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_value(" ");
            this.addChild(obj.name, obj);

            obj = new Grid("gd_excel","16.00","32","984","224",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_excel");
            obj.getSetter("useinputpanel").set("false");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"68\"/><Column size=\"166\"/><Column size=\"113\"/><Column size=\"97\"/><Column size=\"101\"/><Column size=\"80\"/><Column size=\"113\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"dept_code\"/><Cell col=\"1\" text=\"dept_name\" displaytype=\"normal\"/><Cell col=\"2\" text=\"employee\"/><Cell col=\"3\" text=\"telno\" font=\"bold 9pt/normal &quot;맑은 고딕&quot;\"/><Cell col=\"4\" text=\"address\"/><Cell col=\"5\" text=\"age\"/><Cell col=\"6\" text=\"날짜\"/></Band><Band id=\"body\"><Cell text=\"bind:dept_code\" cssclass=\"Expr_Case_normal\"/><Cell col=\"1\" style=\"align:left;\" text=\"bind:dept_name\" displaytype=\"normal\" cssclass=\"Expr_Case_underline\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:employee\" cssclass=\"Expr_Case_normal\"/><Cell col=\"3\" style=\"align:left;\" text=\"bind:telno\" cssclass=\"Expr_Case_normal\"/><Cell col=\"4\" style=\"align:left;\" text=\"bind:address\" cssclass=\"Expr_Case_normal\"/><Cell col=\"5\" text=\"bind:age\" cssclass=\"Expr_Case_normal\"/><Cell col=\"6\" text=\"bind:date\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd ddd\" cssclass=\"Expr_Case_normal\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","899.00","4","101","28",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Export");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1020,640,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("ExcelExport_curve.xfdl", function() {
        //this.url = "http://172.10.12.15:8080/nexacro-xeni-java/XExportImport" ;		// export URL
        //this.url = "http://172.20.10.2:8080/nexacro-xeni-java/XExportImport" ;
        //this.url = "http://172.10.11.173:8080/nexacro-xeni-java/XExportImport" ;		// export URL
        this.url = "http://localhost:9191/XExportImport.do" ;		// export URL


        this.Button00_onclick = function(obj,  e)
        {
        	this.ExcelExportObject00 = new ExcelExportObject();

        	this.ExcelExportObject00.addEventHandler("onsuccess", this.ExcelExportObject00_onsuccess, this);
        	this.ExcelExportObject00.addEventHandler("onerror", this.ExcelExportObject00_onerror, this);

        	//var ret = this.ExcelExportObject00.addExportItem(nexacro.ExportItemTypes.GRID, this.gd_excel, "Sheet1!A1");
        	//var ret = this.ExcelExportObject00.addExportItem(nexacro.ExportItemTypes.GRID, this.gd_excel, "Sheet1!A1","allband","allrecord","suppress","allstyle","none","font,color,background","both");
        	var ret = this.ExcelExportObject00.addExportItem(nexacro.ExportItemTypes.GRID, this.gd_excel, "한글!A1");

        	this.ExcelExportObject00.set_exporttype(nexacro.ExportTypes.EXCEL2007);
        	//this.ExcelExportObject00.set_exporttype(nexacro.ExportTypes.CSV);
        	this.ExcelExportObject00.set_exportactivemode("active");

        	var oDate = new nexacro.Date();
        	var sVersion = oDate.getFullYear() + "" + oDate.getMonth() + "" + (oDate.getDate()+1) + "" + oDate.getTime();

        	this.ExcelExportObject00.set_exportfilename("ExcelExport_Sample22_" + sVersion);
        	this.ExcelExportObject00.set_exportfilepath("%DOCUMENT%");
            this.ExcelExportObject00.set_exporturl(this.url);
            this.ExcelExportObject00.exportData();
        };

        this.ExcelExportObject00_onsuccess = function(obj, e)
        {
        	this.TextArea00.set_value(this.TextArea00.value + "\n=========== onsuccess event start=================");
        	this.TextArea00.set_value(this.TextArea00.value + "\ne.eventid : " + e.eventid 							);
        	this.TextArea00.set_value(this.TextArea00.value + "\ne.url: " +  e.url									);
        	this.TextArea00.set_value(this.TextArea00.value + "\ne.id 					:"+e.id 					);
        	this.TextArea00.set_value(this.TextArea00.value + "\ne.fromobject 			:"+e.fromobject 			);
        	this.TextArea00.set_value(this.TextArea00.value + "\ne.fromreferenceobject 	:"+e.fromreferenceobject 	);
        	var oDate = new nexacro.Date();
        	var sVersion = oDate.getFullYear() + "" + oDate.getMonth() + "" + (oDate.getDate()+1) + "" + oDate.getTime();
        	// 여기부터 ( 환경에 맞게 수정 필요 )
        	var xhr = new XMLHttpRequest();
        	var url = e.url;
        	xhr.open('GET', url, true);
        	xhr.responseType = 'blob';
        	xhr.onload = function(e) {
        		if (xhr.status === 200) {
        			var blob = new Blob([this.response], {type:'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
        			var downloadUrl = URL.createObjectURL(blob);
        			var a = document.createElement("a");
        			a.href = downloadUrl;
        			a.download = sVersion + '.xlsx';
        			document.body.appendChild(a);
        			a.click();
        		}
        	};
        	xhr.send();
        	// 여기까지
        };

        this.ExcelExportObject00_onerror = function(obj, e)
        {
        	this.TextArea00.set_value(this.TextArea00.value + "\n=========== onerror event start===================");
        	this.TextArea00.set_value(this.TextArea00.value + "\ne.eventid 				:"+e.eventid 				);
        	this.TextArea00.set_value(this.TextArea00.value + "\ne.id 					:"+e.id 					);
        	this.TextArea00.set_value(this.TextArea00.value + "\ne.fromobject 			:"+e.fromobject 			);
        	this.TextArea00.set_value(this.TextArea00.value + "\ne.fromreferenceobject 	:"+e.fromreferenceobject 	);
        	this.TextArea00.set_value(this.TextArea00.value + "\ne.errorcode 			:"+e.errorcode 				);
        	this.TextArea00.set_value(this.TextArea00.value + "\ne.errormsg 			:"+e.errormsg 				);

        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button02.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("ExcelExport_curve.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
