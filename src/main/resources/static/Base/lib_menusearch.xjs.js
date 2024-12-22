//XJS=lib_menusearch.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        /**
        *  techtip tree menu search sample
        *  @MenuPath	lib_techtip > lib_menusearch
        *  @FileName	lib_menusearch.xjs
        *  @Desction	tree menu search sample script library
        *******************************************************************************
        *  2019.04.22		nana			최초 생성
        *  2020.02.28		nana			수정
        *******************************************************************************
        */

        /**************************************************************************
         * 사용자 FUNCTION 영역
         **************************************************************************/
        /**
        * @description form onload --> define config object and addEventHandler (form, grid)
        * @param objForm : form,
        *		 objConfig : {strSearchId, objGrid, objEdit, objButton1, objButton2}
        * @return
        */
        this.fnInitMenuSearch = function(objForm,objConfig)
        {
        	//define config info.
        	objForm.config = objConfig;

        	objForm.config.strFilterId = "filter_temp";

        	objForm.config.objEdit.addEventHandler("onkeydown",this.edtCode_onkeydown,objForm);
        	objForm.config.objEdit.addEventHandler("onchanged",this.edtCode_onchanged,objForm);

        	//if not use prev button
        	if(this.gfnIsNull(objConfig.objButton2))
        	{
        		//only next button define
        		objForm.config.objNextButton = objConfig.objButton1;
        		objForm.config.objNextButton.type = "next";
        		objForm.config.objNextButton.addEventHandler("onclick",this.btnMove_onclick,objForm);
        	}else
        	{
        		//prev & nexat button define
        		objForm.config.objPrevButton = objConfig.objButton1;
        		objForm.config.objNextButton = objConfig.objButton2;

        		objForm.config.objPrevButton.type = "prev";
        		objForm.config.objNextButton.type = "next";

        		objForm.config.objPrevButton.addEventHandler("onclick",this.btnMove_onclick,objForm);
        		objForm.config.objNextButton.addEventHandler("onclick",this.btnMove_onclick,objForm);
        	}

        	objForm.config.objDataset = objForm.all[objConfig.objGrid.binddataset];

        	//create temp dataset
        	objForm.config.objTempDataset = this.fnCreateTempDataset(objForm,objForm.config.objDataset,objForm.config.strFilterId);

        	var nTreeCellIndex = this.fnGetTreeCellIndex(objForm.config.objGrid);

        	objForm.config.treeCellIndex  = nTreeCellIndex;
        	objForm.config.startTreeLevel = objForm.config.objGrid.getCellProperty("body",nTreeCellIndex,"treestartlevel");		//startlevel default:0
        };

        /**
        * @description get treecell index number
        * @param objGrid : menu grid
        * @return nCol : cell index
        */
        this.fnGetTreeCellIndex = function(objGrid)
        {
        	var nCellCount = objGrid.getCellCount("body");
        	var nCellType;
        	var nCol = 0;
        	for(nCol=0; nCol<nCellCount; nCol++)
        	{
        		nCellType = objGrid.getCellProperty("body",nCol,"displaytype");

        		//get first treecell num
        		if(nCellType = "treeitemcontrol")
        		{
        			break;
        		}
        	}

        	return nCol;
        }

        /**
        * @description create dataset (temp dataset)
        * @param obj : form, objDs:objDataset , sFilterId : 'filter_temp'
        * @return objTempDs : dataset 'dsTemp'
        */
        this.fnCreateTempDataset = function(obj, objDs, sFilterId)
        {
        	//create dataset name ('dsTemp' + random 4 number)
        	var sDatasetId = "dsTemp" + nexacro.floor(Math.random(),4) * 10000;	// 0 ~ 9999

        	//create dataset
        	var objTempDs = new Dataset;
        	objTempDs.set_name(sDatasetId);
        	obj.addChild(sDatasetId, objTempDs);

        	var nColCnt = objDs.getColCount();

        	objTempDs.set_enableevent(false);
        	var nColId, sColInfo,sColSize,sColType;

        	//col information copy
        	for(var i=0; i<nColCnt; i++)
        	{
        		nColId	 = objDs.getColID(i);
        		sColInfo = objDs.getColumnInfo(i);
        		sColSize = sColInfo.size;
        		sColType = sColInfo.type;
        		objTempDs.addColumn(nColId,sColType,sColSize);
        	}

        	objTempDs.copyData(objDs);
        	objTempDs.set_enableevent(true);

        	//add filter column
        	objDs.addColumn(sFilterId,"String",256);

        	return objTempDs;
        }

        /**
        * @description find rowposition and set rowposition
        * @param obj : form, sType : button click type "prev or next"
        * @return
        */
        this.setFindeCodeRow = function (obj, sType)
        {
        	//get config info.
        	var edtValue = obj.config.objEdit.value;
        	var dsTree	 = obj.config.objDataset;
        	var grdTree	 = obj.config.objGrid;

        	var nStartLvl = obj.config.startTreeLevel;
        	var nCellIndex= obj.config.treeCellIndex;

        	var nRowPos	 = dsTree.rowposition;
        	var edtValue = obj.config.objEdit.value;

        	//find row position
        	if(!this.gfnIsNull(edtValue))
        	{
        		var sFilterstr = obj.config.strSearchId+".indexOf('"+edtValue+"') > -1";

        		var findRow = 0;
        		if(nRowPos > -1){
        			if(sType == "prev")
        			{
        				nRowPos--;

        				for(var n=nRowPos; n>-1; n--)
        				{
        					findRow = dsTree.findRowExpr(sFilterstr,n,n+1);

        					if(findRow > -1)
        					{
        						break;
        					}
        				}
        			}
        			else
        			{
        				nRowPos++;
        				findRow = dsTree.findRowExpr(sFilterstr,nRowPos);
        			}
        		}

        		if(findRow < 0)
        		{
        			findRow = dsTree.rowposition;
        		}
        	}

        	//parent row tree status update -> parent tree status "expand"
        	var nTreeRow = 0;
        	var nStartLvl = grdTree.getCellProperty("body",nCellIndex,"treestartlevel");
        	var nEndLvl = 0;

        	var arrRoot = new Array();
        	grdTree.set_enableevent(false);
        	if(!grdTree.isTreeRootRow(findRow,true))
        	{
        		nEndLvl = grdTree.getCellPropertyValue(findRow,nCellIndex,"treelevel");

        		var parentsRow = 0;
        		var nRowFindRow = findRow;
        		for(var i=nStartLvl; i<nEndLvl; i++)
        		{
        			parentsRow = grdTree.getTreeParentRow(nRowFindRow);

        			if (parentsRow>-1)
        			{
        				//Array.prototype.push()
        				arrRoot.push(parentsRow);
        				nRowFindRow = parentsRow;
        			}
        			else
        			{
        				break;
        			}
        		}
        	}
        	grdTree.set_enableevent(true);

        	for(var i=arrRoot.length; i>-1; i--)
        	{
        		grdTree.setTreeStatus(grdTree.getTreeRow(arrRoot[i]),true);
        	}

        	//set_rowposition
        	dsTree.set_rowposition(findRow);
        };

        /**
        * @description dataset filtering on edit value
        * @param obj : form
        * @return
        */
        this.setFilterCode = function (obj)
        {
        	//config info.
        	var sFilterColumnId = obj.config.strFilterId;
        	var objTreeDataset	= obj.config.objDataset;
        	var objTempDataset	= obj.config.objTempDataset;
        	var objTreeGrid		= obj.config.objGrid;
        	var nCellIndex		= obj.config.treeCellIndex;

        	//init filter state
        	objTreeDataset.set_filterstr("");

        	//init filter value
        	for(var i=0; i<objTreeDataset.getRowCount(); i++)
        	{
        		objTreeDataset.setColumn(i,sFilterColumnId,0);
        	}

        	var edtValue = obj.config.objEdit.value;

        	if(this.gfnIsNull(edtValue))
        	{
        		return;
        	}

        	var nStartLvl = obj.config.startTreeLevel;
        	var nEndLvl	  = 0;
        	var nRow = 0, nTreeRow = 0, nParentRow = 0;

        	//make filterstr : columnid.indexOf('value') > -1
        	var sFilterstr = obj.config.strSearchId+".indexOf('"+edtValue+"') > -1";

        	//temp dataset set filterstr
        	objTempDataset.set_filterstr(sFilterstr);

        	for(var i=0; i<objTempDataset.getRowCount(); i++){
        		nRow = objTempDataset.findNFRowIndex(i);	//findNFRowIndex

        		nTreeRow = objTreeGrid.getTreeRow(nRow);	//getTreeRow
        		nEndLvl = objTreeGrid.getCellPropertyValue(nTreeRow,nCellIndex,"treelevel");	//get now row level

        		nParentRow = nTreeRow;
        		for(var k = nStartLvl; k <nEndLvl; k++)
        		{
        			nParentRow = objTreeGrid.getTreeParentRow(nParentRow);

        			if(nParentRow<0)
        			{
        				break;
        			}

        			//filter column set
        			if(objTreeDataset.getColumn(nParentRow,sFilterColumnId) != 1){
        				objTreeDataset.setColumn(nParentRow,sFilterColumnId,1);
        			}
        		}

        		objTreeDataset.setColumn(nRow,sFilterColumnId,1);
        	}

        	//make filterstr
        	var sTreefilter = sFilterColumnId + " == 1";

        	objTreeDataset.set_filterstr(sTreefilter);	//tree dataset set filterstr
        	objTempDataset.set_filterstr("");			//init filterstr 'temp dataset'
        };

        /**************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         **************************************************************************/
        /**
         * @description edit onkeydown event --> this.setFilterCode(objForm)
        */
        this.edtCode_onkeydown = function(obj,e)
        {
        	var objForm = obj.parent;
        	if(e.keycode ==13){
        		this.setFilterCode(objForm);
        	}
        };

        /**
         * @description edit onchanged event --> set rowposion(0) // init row postion
        */
        this.edtCode_onchanged = function(obj,e)
        {
        	var objForm = obj.parent;
        	objForm.config.objDataset.set_rowposition(0);
        };

        /**
         * @description move button onclick event --> this.setFindeCodeRow(objForm,sType)
        */
        this.btnMove_onclick = function(obj,e)
        {
        	var objForm = obj.parent;
        	var sType	= obj.type;

        	this.setFindeCodeRow(objForm,sType);
        };

        /**************************************************************************
        *  공통 함수 처리 영역
           해당 함수의 경우 프로젝트 사용 시 프로젝트 공통함수로 전환을 권장 드립니다.
        **************************************************************************/
        /**
        * @description 파리미터 값이 Null 인지 체크하는 함수
        * @param {All} val – 체크할 문자열
        * @return {boolean} Val이 undefined, null, NaN, "", Array.length=0 인 경우 = true
        															  이 외의 경우 = false
        */
        this.gfnIsNull = function (Val)
        {
        	if (new String(Val).valueOf() == "undefined") return true;
        	if (Val == null) return true;
        	if (("x" + Val == "xNaN") && (new String(Val.length).valueOf() == "undefined")) return true;
        	if (Val.length == 0) return true;

        	return false;
        }
        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
