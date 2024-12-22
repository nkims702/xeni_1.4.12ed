if (nexacro.Environment)
{
    var env = nexacro._environment = new nexacro.Environment();
    env.on_init = function ()
    {
        this.set_themeid("theme::blue");
        this.set_datatyperule("2.0");
    };
    env.on_initEvent = function ()
    {
        // add event handler

    };
    env.loadTypeDefinition = function ()
    {
        nexacro._setTypeDefinitionURL("typedefinition.xml");
        nexacro._addService("theme", "file", "./_resource_/_theme_/", "session", null, "", "0", "");
        nexacro._addService("initvalue", "file", "./_resource_/_initvalue_/", "session", null, "", "0", "");
        nexacro._addService("xcssrc", "file", "./_resource_/_xcss_/", "session", null, "", "0", "");
        nexacro._addService("imagerc", "file", "./_resource_/_images_/", "session", null, "", "0", "");
        nexacro._addService("font", "file", "./_resource_/_font_/", "session", null, "", "0", "");
        nexacro._addService("stringrc", "file", "./_resource_/_stringrc_/", "session", null, "", "0", "");
        nexacro._addService("extlib", "file", "./_extlib_/", "session", null, "", "0", "");
        nexacro._addService("Base", "form", "./Base/", "session", null, "", "0", "0");
        nexacro._addService("FrameBase", "form", "./FrameBase/", "session", null, "", "0", "0");
        nexacro._addService("svc", "JSP", "http://localhost:8081/nexacro-web", "session", null, "", "0", "0");
        nexacro._addService("nexacrolib", "js", "./nexacrolib/", "session", null, "", "0", "0");
    	nexacro._component_uri = (nexacro._arg_compurl ? nexacro._arg_compurl : "./nexacrolib/component/");
    	nexacro._theme_uri = "./_resource_/_theme_/";
    	// load components
        var registerclass = [
        		{"id":"Button", "classname":"nexacro.Button", "type":"JavaScript"},
        		{"id":"Combo", "classname":"nexacro.Combo", "type":"JavaScript"},
        		{"id":"Edit", "classname":"nexacro.Edit", "type":"JavaScript"},
        		{"id":"MaskEdit", "classname":"nexacro.MaskEdit", "type":"JavaScript"},
        		{"id":"TextArea", "classname":"nexacro.TextArea", "type":"JavaScript"},
        		{"id":"Static", "classname":"nexacro.Static", "type":"JavaScript"},
        		{"id":"Div", "classname":"nexacro.Div", "type":"JavaScript"},
        		{"id":"PopupDiv", "classname":"nexacro.PopupDiv", "type":"JavaScript"},
        		{"id":"Radio", "classname":"nexacro.Radio", "type":"JavaScript"},
        		{"id":"CheckBox", "classname":"nexacro.CheckBox", "type":"JavaScript"},
        		{"id":"ListBox", "classname":"nexacro.ListBox", "type":"JavaScript"},
        		{"id":"Grid", "classname":"nexacro.Grid", "type":"JavaScript"},
        		{"id":"Spin", "classname":"nexacro.Spin", "type":"JavaScript"},
        		{"id":"Menu", "classname":"nexacro.Menu", "type":"JavaScript"},
        		{"id":"PopupMenu", "classname":"nexacro.PopupMenu", "type":"JavaScript"},
        		{"id":"Tab", "classname":"nexacro.Tab", "type":"JavaScript"},
        		{"id":"GroupBox", "classname":"nexacro.GroupBox", "type":"JavaScript"},
        		{"id":"Calendar", "classname":"nexacro.Calendar", "type":"JavaScript"},
        		{"id":"ImageViewer", "classname":"nexacro.ImageViewer", "type":"JavaScript"},
        		{"id":"ProgressBar", "classname":"nexacro.ProgressBar", "type":"JavaScript"},
        		{"id":"Plugin", "classname":"nexacro.Plugin", "type":"JavaScript"},
        		{"id":"Dataset", "classname":"nexacro.NormalDataset", "type":"JavaScript"},
        		{"id":"ListView", "classname":"nexacro.ListView", "type":"JavaScript"},
        		{"id":"DataObject", "classname":"nexacro.DataObject", "type":"JavaScript"},
        		{"id":"CheckBoxSet", "classname":"nexacro.CheckBoxSet", "type":"JavaScript"},
        		{"id":"MultiCombo", "classname":"nexacro.MultiCombo", "type":"JavaScript"},
        		{"id":"Panel", "classname":"nexacro.Panel", "type":"JavaScript"},
        		{"id":"TextField", "classname":"nexacro.TextField", "type":"JavaScript"},
        		{"id":"MultiLineTextField", "classname":"nexacro.MultiLineTextField", "type":"JavaScript"},
        		{"id":"DateField", "classname":"nexacro.DateField", "type":"JavaScript"},
        		{"id":"DateRangePicker", "classname":"nexacro.DateRangePicker", "type":"JavaScript"},
        		{"id":"PopupDateRangePicker", "classname":"nexacro.PopupDateRangePicker", "type":"JavaScript"},
        		{"id":"ExcelExportObject", "classname":"nexacro.ExcelExportObject", "type":"JavaScript"},
        		{"id":"ExcelImportObject", "classname":"nexacro.ExcelImportObject", "type":"JavaScript"},
        		{"id":"FileUpTransfer", "classname":"nexacro.FileUpTransfer", "type":"JavaScript"},
        		{"id":"FileDownTransfer", "classname":"nexacro.FileDownTransfer", "type":"JavaScript"},
        		{"id":"Sketch", "classname":"nexacro.Sketch", "type":"JavaScript"},
        		{"id":"WebBrowser", "classname":"nexacro.WebBrowser", "type":"JavaScript"},
        		{"id":"WebView", "classname":"nexacro.WebView", "type":"JavaScript"},
        		{"id":"FileDialog", "classname":"nexacro.FileDialog", "type":"JavaScript"},
        		{"id":"FileDownload", "classname":"nexacro.FileDownload", "type":"JavaScript"},
        		{"id":"FileUpload", "classname":"nexacro.FileUpload", "type":"JavaScript"}
        ];
    	nexacro._addClasses(registerclass);
    };
    env.on_loadVariables = function ()
    {
        // Variables

        // Cookies

        // HTTP Header

    };
	env.on_loadDeviceAdaptors = function ()
	{
        // load device adatpor

	};
	
    // StringResource Information

	
    // User Script
    env.registerScript("environment.xml", function() {
    if (nexacro._Browser != "Runtime")
    {
        "use strict";
    	   nexacro._destroy_hidden_frame = function (form_id, pThis, type)
            {
                // API변경하기 이전동작의 호환성 유지를 위해 null처리 추가.
                if (type == "fileupload" || type == "import" || type == null)
                {
                    var _doc = nexacro._managerFrameDoc;
                    var manager = nexacro._IframeManager;
                    var form = manager.search_form(form_id);
                    var inputlist = manager.formlist[form.idx].inputlist;

                    var inputnode = null;
                    if (form && form.node)
                    {
                        while (inputlist.length > 0)
                        {
                            inputnode = inputlist.pop();
                            delete inputnode._callbackList;
                            inputnode._callbackList = null;
                            nexacro.__removeDOMNode(form.node, inputnode);
                            //inputnode = null;
                        }
                        var ret_iframe = manager.formlist[form.idx].uploadiframe;
                        if (ret_iframe)
                        {
                            nexacro._stopSysObserving(ret_iframe, "load", "onload", nexacro._fileinputhandler_onload_forward);
                            delete ret_iframe._callbackList;
                            ret_iframe._callbackList = null;
                            nexacro.__removeDOMNode(form.node, ret_iframe);
                            //ret_iframe = null;
                        }
                        nexacro.__removeDOMNode(_doc.body, form.node);
                        manager.formlist.splice(form.idx, 1);
                        form.node = null;
                    }
                }
            };

            if (nexacro._Browser == "Safari")
            {
                nexacro._download = function (url, is_popup_frame)
                {
                    var download = window.open('');
                    download.location = url;
                    download.setTimeout('window.close();', 500);
                };

                nexacro._downloadExport = nexacro._download;
            }
            else if ((nexacro._Browser == "MobileSafari" || nexacro._Browser == "Chrome") && nexacro._OS == "iOS")
            {
                nexacro._download = function (url, is_popup_frame)
                {
                    if (nexacro._isHybrid())
                    {
                        var params = '{"url":"' + url + '"}';
                        var jsonstr = '{"id":"", "div":"Browser", "method":"execBrowser", "params":' + params + '}';

                        nexacro.Device.exec(jsonstr);
                    }
                    else
                    {
                        var bChange = false;

                        var version_arr = nexacro._OSVersion.split(".");
                        var major_version = version_arr[0];
                        var minor_version = version_arr[1];
                        var third_version = version_arr.length == 3 ? version_arr[2] : null;

                        if (major_version >= 8 && minor_version >= 1)
                        {
                            if (minor_version == 1)
                            {
                                if (third_version && third_version >= 3)
                                {
                                    bChange = true;
                                }
                            }
                            else
                            {
                                bChange = true;
                            }
                        }

                        if (bChange)
                        {
                            var download = window.open('');
                            setTimeout(function () { download.location = url; }, 1200);
                        }
                        else
                        {
                            window.open(url);
                        }
                    }
                };

                nexacro._downloadExport = nexacro._download;
            }
            else
            {
                nexacro._download = function (url, is_popup_frame)
                {
                    if (is_popup_frame)
                    {
                        window.open(url, "_self");
                    }
                    else
                    {
                        window.open(url);
                    }
                };

    			if (nexacro._Browser == "IE" || nexacro._Browser == "Chrome" || nexacro._Browser == "Gecko" || nexacro._Browser == "Opera" || nexacro._Browser == "Edge")
                {
                    nexacro._downloadExport = function (url, is_popup_frame, evtTarget) //  window is closed  when file(office2007 type) opened in ie7~8
                    {
                        // nexacro._downloadTransferSubmit(null, url, nexacro._emptyFn, "");
                        var index = url.lastIndexOf(".");
                        var extension;
                        if (index > 0)
                        {
                            extension = url.substr(index + 1);
                            if (extension == "xlsx" || extension == "xls")
                            {
                                nexacro._stopSysObserving(window, "beforeunload", "onbeforeunload", window.nexacro_HTMLSysEvent._syshandler_onbeforeclose_forward);

                                if (nexacro._Browser == "IE" && nexacro._BrowserVersion < 10)
                                    window.location.href = url;
                                else
                                    nexacro._downloadTransfer(null, url, null, evtTarget, "GET");

                                setTimeout(function ()
                                {
                                    nexacro._observeSysEvent(window, "beforeunload", "onbeforeunload", window.nexacro_HTMLSysEvent._syshandler_onbeforeclose_forward);
                                }, 1000);

                                return;
                            }
                        }

    					trace("window.open 주석 처리");
                        //window.open(url);	// 여기! excel export 절대 경로 이슈
                    };
                }
                else
                {
                    nexacro._downloadExport = nexacro._download;
                }
            }

    		if ((nexacro._Browser == "IE" && nexacro._BrowserVersion > 8) || (nexacro._Browser == "Edge" && nexacro._BrowserType == "Edge"))
            {
                nexacro._append_hidden_item = function (form_id, input_id, callback_fn, pThis, handle, multiselect)
    				{
    					var _doc;
    					_doc = nexacro._managerFrameDoc;

    					var manager = nexacro._IframeManager;
    					var form = manager.search_form(form_id);
    					var input = null;
    					if (form && form.node)
    					{
    						var node = form.node;
    						input = _doc.createElement("INPUT");
    						input.type = "file";
    						if (multiselect && nexacro._BrowserVersion > 9)
    						{
    							input.multiple = multiselect;
    						}
    						input.name = input_id;
    						input._callbackList = [{ target: pThis, callback: callback_fn }];
    						manager.formlist[form.idx].inputlist.push(input);

    						node.appendChild(input);
    						nexacro._observeSysEvent(input, "change", "onchange", nexacro._fileinputhandler_onchange_forward);
    					}
    					pThis._input_node = input;
    				};
    			}
    }

    });
					
    env = null;
    nexacro._getExtUserCssScreenType = nexacro._getCurrentScreenType;
}
