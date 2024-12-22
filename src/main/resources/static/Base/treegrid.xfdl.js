(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("treegrid");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,960);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset01", this);
            obj._setContents("<ColumnInfo><Column id=\"data\" type=\"STRING\" size=\"256\"/><Column id=\"level\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"data\">내 PC</Col><Col id=\"level\">0</Col></Row><Row><Col id=\"data\">다운로드</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"data\">동영상</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"data\">문서</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"data\">바탕 화면</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"data\">사진</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"data\">저장된 사진</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"data\">카메라 앨범</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"data\">음악</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"data\">로컬 디스크 (C:)</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"data\">Program Files</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"data\">Program Files (x86)</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"data\">Windows</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"data\">네트워크</Col><Col id=\"level\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","40.00","75","470","405",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("Dataset01");
            obj.set_autofittype("col");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeusecheckbox("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row size=\"36\"/></Rows><Band id=\"body\"><Cell text=\"bind:data\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:level\" treestate=\"bind:level\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","40","29","372","38",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","424","31","84","36",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,960,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("treegrid.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("treegrid.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
