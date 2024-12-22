(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("menusearch");
            this.set_titletext("menusearch (트리그리드 검색하여 찾고 이동)");
            if (Form == this.constructor)
            {
                this._setFormPosition(370,530);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTree", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj._setContents("<ColumnInfo><Column id=\"MENU_GRP\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LVL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_TR\" type=\"STRING\" size=\"256\"/><Column id=\"FULL_TXT\" type=\"STRING\" size=\"1000\"/></ColumnInfo><Rows><Row><Col id=\"MENU_GRP\">00</Col><Col id=\"MENU_NM\">투비소프트</Col><Col id=\"MENU_ID\">1100</Col><Col id=\"MENU_LVL\">0</Col><Col id=\"FULL_TXT\">투비소프트</Col></Row><Row><Col id=\"MENU_GRP\">POC</Col><Col id=\"MENU_NM\">경영전략본부</Col><Col id=\"MENU_ID\">1110</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"MENU_TR\">poc</Col><Col id=\"FULL_TXT\">POC 경영전략본부</Col></Row><Row><Col id=\"MENU_GRP\">POC</Col><Col id=\"MENU_NM\">사업본부</Col><Col id=\"MENU_ID\">1120</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"MENU_TR\">poc</Col><Col id=\"FULL_TXT\">POC 사업본부 사업그룹 사업1팀 사업2팀</Col></Row><Row><Col id=\"MENU_GRP\">POC</Col><Col id=\"MENU_NM\">사업그룹</Col><Col id=\"MENU_ID\">1130</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"MENU_TR\">poc</Col><Col id=\"FULL_TXT\">POC 사업본부 사업그룹 사업1팀 사업2팀</Col></Row><Row><Col id=\"MENU_GRP\">POC</Col><Col id=\"MENU_NM\">사업1팀</Col><Col id=\"MENU_ID\">1140</Col><Col id=\"MENU_LVL\">3</Col><Col id=\"MENU_TR\">poc</Col><Col id=\"FULL_TXT\">POC 사업본부 사업그룹 사업1팀</Col></Row><Row><Col id=\"MENU_GRP\">POC</Col><Col id=\"MENU_NM\">사업2팀</Col><Col id=\"MENU_ID\">1150</Col><Col id=\"MENU_LVL\">3</Col><Col id=\"MENU_TR\">poc</Col><Col id=\"FULL_TXT\">POC 사업본부 사업그룹 사업2팀</Col></Row><Row><Col id=\"MENU_GRP\">SAMPLE</Col><Col id=\"MENU_NM\">사업3팀</Col><Col id=\"MENU_ID\">1200</Col><Col id=\"MENU_LVL\">3</Col><Col id=\"MENU_TR\">sample</Col><Col id=\"FULL_TXT\">SAMPLE</Col></Row><Row><Col id=\"MENU_GRP\">SAMPLE</Col><Col id=\"MENU_NM\">사업4팀</Col><Col id=\"MENU_ID\">1210</Col><Col id=\"MENU_LVL\">3</Col><Col id=\"MENU_TR\">sample</Col><Col id=\"FULL_TXT\">SAMPLE</Col></Row><Row><Col id=\"MENU_GRP\">SAMPLE</Col><Col id=\"MENU_NM\">기술융합그룹</Col><Col id=\"MENU_ID\">1211</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"MENU_TR\">sample</Col><Col id=\"FULL_TXT\">SAMPLE</Col></Row><Row><Col id=\"MENU_GRP\">SAMPLE</Col><Col id=\"MENU_NM\">프리세일즈팀</Col><Col id=\"MENU_ID\">1212</Col><Col id=\"MENU_LVL\">3</Col><Col id=\"MENU_TR\">sample</Col><Col id=\"FULL_TXT\">SAMPLE</Col></Row><Row><Col id=\"MENU_GRP\">SAMPLE</Col><Col id=\"MENU_NM\">마케팅팀</Col><Col id=\"MENU_ID\">1213</Col><Col id=\"MENU_LVL\">3</Col><Col id=\"MENU_TR\">sample</Col><Col id=\"FULL_TXT\">SAMPLE</Col></Row><Row><Col id=\"MENU_GRP\">SAMPLE</Col><Col id=\"MENU_NM\">교육서비스팀</Col><Col id=\"MENU_ID\">1220</Col><Col id=\"MENU_LVL\">3</Col><Col id=\"MENU_TR\">sample</Col><Col id=\"FULL_TXT\">SAMPLE</Col></Row><Row><Col id=\"MENU_GRP\">SAMPLE</Col><Col id=\"MENU_LVL\">3</Col><Col id=\"MENU_ID\">1221</Col><Col id=\"MENU_NM\">기술융합팀</Col><Col id=\"MENU_TR\">sample</Col><Col id=\"FULL_TXT\">SAMPLE</Col></Row><Row><Col id=\"MENU_GRP\">SAMPLE</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"MENU_ID\">1222</Col><Col id=\"MENU_NM\">사업전략팀</Col><Col id=\"MENU_TR\">sample</Col><Col id=\"FULL_TXT\">SAMPLE</Col></Row><Row><Col id=\"MENU_GRP\">SAMPLE</Col><Col id=\"MENU_NM\">사업지원팀</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"MENU_ID\">1223</Col><Col id=\"MENU_TR\">sample</Col><Col id=\"FULL_TXT\">SAMPLE</Col></Row><Row><Col id=\"MENU_NM\">기술지원본부</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"MENU_GRP\">CS</Col><Col id=\"MENU_ID\">0100</Col><Col id=\"MENU_TR\">sample</Col><Col id=\"FULL_TXT\">CS 기술지원본부</Col></Row><Row><Col id=\"MENU_LVL\">2</Col><Col id=\"MENU_NM\">제품컨설팅그룹</Col><Col id=\"MENU_GRP\">CS</Col><Col id=\"MENU_ID\">0110</Col><Col id=\"MENU_TR\">sample</Col><Col id=\"FULL_TXT\">CS</Col></Row><Row><Col id=\"MENU_NM\">사업관리팀</Col><Col id=\"MENU_LVL\">3</Col><Col id=\"MENU_GRP\">CS</Col><Col id=\"MENU_ID\">0111</Col><Col id=\"MENU_TR\">sample</Col><Col id=\"FULL_TXT\">CS</Col></Row><Row><Col id=\"MENU_NM\">제품컨설팅1팀</Col><Col id=\"MENU_LVL\">3</Col><Col id=\"MENU_GRP\">CM</Col><Col id=\"MENU_ID\">0200</Col><Col id=\"MENU_TR\">sample</Col><Col id=\"FULL_TXT\">CM</Col></Row><Row><Col id=\"MENU_NM\">제품컨설팅2팀</Col><Col id=\"MENU_LVL\">3</Col><Col id=\"MENU_GRP\">CM</Col><Col id=\"MENU_ID\">0210</Col><Col id=\"MENU_TR\">cmcc</Col><Col id=\"FULL_TXT\">CM</Col></Row><Row><Col id=\"MENU_LVL\">3</Col><Col id=\"MENU_GRP\">CM</Col><Col id=\"MENU_NM\">제품컨설팅3팀</Col><Col id=\"MENU_ID\">0211</Col><Col id=\"MENU_TR\">cmcc01</Col><Col id=\"FULL_TXT\">CM</Col></Row><Row><Col id=\"MENU_NM\">UX디자인팀</Col><Col id=\"MENU_LVL\">3</Col><Col id=\"MENU_GRP\">GL</Col><Col id=\"MENU_ID\">0300</Col><Col id=\"FULL_TXT\">GL</Col></Row><Row><Col id=\"MENU_LVL\">2</Col><Col id=\"MENU_NM\">기술지원그룹</Col><Col id=\"MENU_GRP\">GL</Col><Col id=\"MENU_ID\">0310</Col><Col id=\"FULL_TXT\">GL</Col></Row><Row><Col id=\"MENU_NM\">고객지원팀</Col><Col id=\"MENU_LVL\">3</Col><Col id=\"MENU_GRP\">DP</Col><Col id=\"MENU_ID\">0400</Col><Col id=\"FULL_TXT\">DP</Col></Row><Row><Col id=\"MENU_NM\">테크솔루션팀</Col><Col id=\"MENU_LVL\">3</Col><Col id=\"MENU_GRP\">DP</Col><Col id=\"MENU_ID\">0410</Col><Col id=\"MENU_TR\">dpsv</Col><Col id=\"FULL_TXT\">DP</Col></Row><Row><Col id=\"MENU_GRP\">DP</Col><Col id=\"MENU_NM\">일본사업지원팀</Col><Col id=\"MENU_ID\">0411</Col><Col id=\"MENU_LVL\">3</Col><Col id=\"MENU_TR\">dpsv05</Col><Col id=\"FULL_TXT\">DP</Col></Row><Row><Col id=\"MENU_GRP\">DP</Col><Col id=\"MENU_NM\">기술지원팀</Col><Col id=\"MENU_ID\">0412</Col><Col id=\"MENU_LVL\">3</Col><Col id=\"MENU_TR\">dpsv06</Col><Col id=\"FULL_TXT\">DP</Col></Row><Row><Col id=\"MENU_GRP\">DP</Col><Col id=\"MENU_NM\">솔루션사업본부</Col><Col id=\"MENU_ID\">0420</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"MENU_TR\">dpcb</Col><Col id=\"FULL_TXT\">DP 기술지원본부</Col></Row><Row><Col id=\"MENU_ID\">0430</Col><Col id=\"MENU_NM\">솔루션사업그룹</Col><Col id=\"MENU_GRP\">DP</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"MENU_TR\">dpic</Col><Col id=\"FULL_TXT\">DP</Col></Row><Row><Col id=\"MENU_NM\">솔루션사업팀</Col><Col id=\"MENU_ID\">0440</Col><Col id=\"MENU_GRP\">DP</Col><Col id=\"MENU_LVL\">3</Col><Col id=\"MENU_TR\">dptd</Col><Col id=\"FULL_TXT\">DP</Col></Row><Row><Col id=\"MENU_NM\">WS개발팀</Col><Col id=\"MENU_ID\">0450</Col><Col id=\"MENU_GRP\">DP</Col><Col id=\"MENU_LVL\">3</Col><Col id=\"MENU_TR\">dpda</Col><Col id=\"FULL_TXT\">DP</Col></Row><Row><Col id=\"MENU_NM\">오픈소스사업그룹</Col><Col id=\"MENU_ID\">0460</Col><Col id=\"MENU_GRP\">DP</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"MENU_TR\">dptb</Col><Col id=\"FULL_TXT\">DP</Col></Row><Row><Col id=\"MENU_NM\">루시드웤스솔루션그룹</Col><Col id=\"MENU_ID\">0470</Col><Col id=\"MENU_GRP\">DP</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"MENU_TR\">dpsa</Col><Col id=\"FULL_TXT\">DP</Col></Row><Row><Col id=\"MENU_NM\">솔루션사업지원팀</Col><Col id=\"MENU_ID\">0480</Col><Col id=\"MENU_GRP\">DP</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"MENU_TR\">dpba</Col><Col id=\"FULL_TXT\">DP</Col></Row><Row><Col id=\"MENU_NM\">연구개발본부</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"MENU_GRP\">FX</Col><Col id=\"MENU_ID\">0500</Col><Col id=\"FULL_TXT\">FX 솔루션사업본부</Col></Row><Row><Col id=\"MENU_NM\">제품구현1그룹</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"MENU_GRP\">FX</Col><Col id=\"MENU_ID\">0510</Col><Col id=\"FULL_TXT\">FX </Col></Row><Row><Col id=\"MENU_NM\">nx17팀</Col><Col id=\"MENU_LVL\">3</Col><Col id=\"MENU_GRP\">EI</Col><Col id=\"MENU_ID\">0600</Col><Col id=\"FULL_TXT\">EI</Col></Row><Row><Col id=\"MENU_NM\">nx14팀</Col><Col id=\"MENU_LVL\">3</Col><Col id=\"MENU_GRP\">EI</Col><Col id=\"MENU_ID\">0610</Col><Col id=\"FULL_TXT\">EI</Col></Row><Row><Col id=\"MENU_NM\">제품구현2그룹</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"MENU_GRP\">DL</Col><Col id=\"MENU_ID\">0700</Col><Col id=\"FULL_TXT\">DL</Col></Row><Row><Col id=\"MENU_NM\">런타임팀</Col><Col id=\"MENU_LVL\">3</Col><Col id=\"MENU_GRP\">DL</Col><Col id=\"MENU_ID\">0710</Col><Col id=\"FULL_TXT\">DL</Col></Row><Row><Col id=\"MENU_NM\">개발환경팀</Col><Col id=\"MENU_LVL\">3</Col><Col id=\"MENU_GRP\">CI</Col><Col id=\"MENU_ID\">0800</Col><Col id=\"FULL_TXT\">CI</Col></Row><Row><Col id=\"MENU_NM\">제품구현3그룹</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"MENU_GRP\">CI</Col><Col id=\"MENU_ID\">0810</Col><Col id=\"FULL_TXT\">CI</Col></Row><Row><Col id=\"MENU_NM\">융합기술개발팀</Col><Col id=\"MENU_LVL\">3</Col><Col id=\"MENU_GRP\">TF</Col><Col id=\"MENU_ID\">0900</Col><Col id=\"FULL_TXT\">TF</Col></Row><Row><Col id=\"MENU_NM\">융합기술기획팀</Col><Col id=\"MENU_LVL\">3</Col><Col id=\"MENU_GRP\">TF</Col><Col id=\"MENU_ID\">0910</Col><Col id=\"FULL_TXT\">TF</Col></Row><Row><Col id=\"MENU_NM\">품질보증그룹</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"MENU_GRP\">CL</Col><Col id=\"MENU_ID\">1000</Col><Col id=\"FULL_TXT\">CL</Col></Row><Row><Col id=\"MENU_NM\">품질보증팀</Col><Col id=\"MENU_LVL\">3</Col><Col id=\"MENU_GRP\">CL</Col><Col id=\"MENU_ID\">1010</Col><Col id=\"FULL_TXT\">CL</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","19","50","330","383",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("dsTree");
            obj.set_treeuseexpandkey("true");
            obj.set_treeinitstatus("expand,all");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"307\"/></Columns><Rows><Row size=\"32\"/></Rows><Band id=\"body\"><Cell text=\"bind:MENU_NM\" displaytype=\"treeitemcontrol\" edittype=\"tree\" autosizecol=\"default\" controlautosizingtype=\"none\" treelevel=\"bind:MENU_LVL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCode","19","20","245","25",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_autoselect("true");
            obj.set_imemode("hangul");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearchPrev","274","20","35","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("prev");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearchNext","313","20","35","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("next");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",370,530,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("menusearch_expansion.xfdl","Base::lib_menusearch.xjs");
        this.registerScript("menusearch_expansion.xfdl", function() {
        /**
        *  techtip tree menu search sample
        *  @MenuPath    techtip > menusearch
        *  @FileName	menusearch.xfdl
        *  @Desction	tree menu search init form
        *******************************************************************************
        *  2019.04.22		nana			최초 생성
        *******************************************************************************
        */

        /**************************************************************************
         * include 영역
         **************************************************************************/
        this.executeIncludeScript("Base::lib_menusearch.xjs"); /*include "Base::lib_menusearch.xjs"*/;

        /**************************************************************************
         * FORM EVENT 영역(onload)
         **************************************************************************/
        /**
         * @description 화면 onload시 처리내역(필수)
        */

        this.form_onload = function(obj,e)
        {
        	/*
        	 menusearch 옵션 설정
        	 1. strSearchId -> tree text value column name (search)
        			"MENU_NM"  -> FULL_TXT
        	 2. objGrid -> Grid component
        	 3. objEdit ->  search edit component
        	 4. objButton1 -> previous button component
        	 5. objButton2 -> next button component (생략가능, 생략시엔 objButton1이 next로 동작)
        	*/

        	var objForm = obj;
        	var objConfig = {
        						strSearchId		: "FULL_TXT",
        						objGrid			: this.Grid00,
        						objEdit			: this.edtCode,
        						objButton1		: this.btnSearchPrev,
        						objButton2		: this.btnSearchNext
        				    }
        	this.fnInitMenuSearch(objForm,objConfig);
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
        };
        this.loadIncludeScript("menusearch_expansion.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
