//INFORMATION

//Dont call functions with INTERNAL in their names

initMainScript();
function initMainScript() {
    if(location.protocol=="http:"||location.protocol=="https:") {
    }else{
        console.log("Require and loadClass not available in file mode");
        loadClass = null;
        require = null;
    }
    document.addEventListener("DOMContentLoaded", function() {
        new Logger().info("Loading library");
    }, false);
    if (typeof $ == 'undefined') {
        console.error("Please add script jquery before main.js");
        document.addEventListener('DOMContentLoaded', function() {
            document.body.innerHTML="<h2 style='color:red'>Contact website administrator!</h2><br><br><h3 style='color:red'>Wrong use of library!</h3>";
        }, false);
    }else{ 
    document.addEventListener("DOMContentLoaded", function() {
        echo("<!-- Generated with JavaScript -->");
        new Logger().info("Loaded library");
    }, false);
    window.onerror = function(msg, url, line, col, error) {
        var extra = !col ? '' : '\ncolumn: ' + col;
        extra += !error ? '' : '\nerror: ' + error;
        document.body.innerHTML="";
        document.body.setAttribute("style", "");
        document.body.setAttribute("style", "background-color:" + new ColorCodes().BrandOrHighlight);
        var center = new Div();
        center.getAPI().setAttribute("style", "position: fixed; top: 40%; left: 0%;background-color:" + new ColorCodes().LaunchPadLightBottom);
        center.setId("centered");
        center.create();
        var h2 = new H("2");
        h2.setText("Error in Library or wrong use!");
        h2.setStyle("color:red");
        h2.create("centered");
        addSpacer("centered");
        addSpacer("centered");
        var h4 = new H("4");
        h4.setText("Error: " + msg + "\nurl: " + url + "\nline: " + line + extra);
        h4.create("centered");
        var suppressErrorAlert = true;
        return suppressErrorAlert;
     };
    }
}
function echo(message) {
    document.body.innerHTML+=message;
}
function loadClass(name) {
    if(!name.includes(".js")) {
    error("Not a JS file: " + name);
    }else
    $.getScript(name);
    var srcNodeList = document.head.querySelectorAll('[src]');
    for (var i = 0; i < srcNodeList.length; ++i) {
    var item = srcNodeList[i];
    if(item.getAttribute('src').includes(name)){
        item.setAttribute("id", name.replace(".js", ""));
        return item;
    }
    }
}
function Deprecated(method) {
    console.log("Website uses deprecated: '" + method.constructor.name + "' function!");
}
class ColorCodes {
    constructor() {
        //Decode for more info (Base64): aHR0cHM6Ly9leHBlcmllbmNlLnNhcC5jb20vZmlvcmktZGVzaWduLXdlYi9jb2xvcnMv
        //Belize
        this.GlobalContrastBase = "#3F5161";
        this.BrandOrHighlight = "#427CAC";
        this.ContrastHighlight = "#91C8F6";
        this.GlobalLightBase = "#EFF4F9";
        this.Containers = "#FFFFFF";
        this.ApplicationContentBackground = "#FAFAFA";
        this.BordersAndDerivedControls = "#BFBFBF";
        this.TitlesAndTexts = "#333333";
        this.LaunchPadContrastTop = "#2C4E6C";
        this.LaunchPadContrastBottom = "#9EC7D8";
        this.LaunchPadLightTop = "#A9C6DE";
        this.LaunchPadLightBottom = "#E7ECF0";
        this.Accent1 = "#E09D00";
        this.Accent2 = "#E6600D";
        this.Accent3 = "#C14646";
        this.Accent4 = "#AB218E";
        this.Accent5 = "#678BC7";
        this.Accent6 = "#0092D1";
        this.Accent7 = "#1A9898";
        this.Accent8 = "#759421";
        this.Accent9 = "#925ACE";
        this.Accent10 = "#647987";
        this.Grayscale0 = "#333333";
        this.Grayscale1 = "#666666";
        this.Grayscale2 = "#BFBFBF";
        this.Grayscale3 = "#CCCCCC";
        this.Grayscale4 = "#E5E5E5";
        this.Grayscale5 = "#FFFFFF";
        this.SemanticNegative = "#BB0000";
        this.SemanticCritical = "#E78C07";
        this.SemanticPositive = "#2B7D2B";
        this.SemanticNeutral = "#5E696E";
        this.SemanticInformation = "#427cac";
        this.SemanticDarkFlavorNegative = "#FF8888";
        this.SemanticDarkFlavorCritical = "#FABD64";
        this.SemanticDarkFlavorPositive = "#ABE2AB";
        this.SemanticDarkFlavorNeutral = "#D3D7D9";
        this.SemanticDarkFlavorInformation = "#91c8f6";
        this.IndicationLight1 = "#880000";
        this.IndicationLight2 = "#bb0000";
        this.IndicationLight3 = "#E78C07";
        this.IndicationLight4 = "#2B7C2B";
        this.IndicationLight5 = "#427CAC";
        this.IndicationLight6 = "#1a9898";
        this.IndicationLight7 = "#925ace";
        this.IndicationLight8 = "#ab218e";  
        this.IndicationDark1 = "#FF8888";
        this.IndicationDark2 = "#FFBBBB";
        this.IndicationDark3 = "#FABD64";
        this.IndicationDark4 = "#ABE2AB";
        this.IndicationDark5 = "#91c8f6";
        this.IndicationDark6 = "#7fc6c6";
        this.IndicationDark7 = "#b995e0";
        this.IndicationDark8 = "#e269c9";
        this.AppleBlack = "#000000";
        this.AppleGray = "#949494";
        this.AppleBlue = "#2997FF";
    }
}
class Local {
    constructor() {
        this.d = new Date();
    }
    update = function() {
        this.d = new Date();
    }
    date = class {
        constructor() {
            this.d = new Date();
        }
        year = function() {
            return this.d.getFullYear();
        }
        month = function() {
            return this.d.getMonth();
        }
        day = function() {
            return this.d.getDate();
        }
    }
    minute = function() {
        return this.d.getMinutes();
    }
    hour = function() {
        return this.d.getHours();
    }
    seconds = function() {
        return this.d.getSeconds();
    }
}
function NotInHTML5(element) {
    if(element.name!=null) {
        new Logger().error("Element '" + element.name + "' not supported in HTML5 and threfor not implemented");
    }else{
        new Logger().error("Element '" + element.constructor.name + "' not supported in HTML5 and therefor not implemented");
    }
}
function replaceSite(html) {
    document.body.innerHTML=html;
}
function clearSite() {
    document.body.innerHTML="";
}
function setFavicon(href) {
    if(document.getElementsByClassName("libfavicon")[0]==undefined) {
    var fav = document.createElement("link");
    fav.href=href;
    fav.setAttribute("class", "libfavicon");
    fav.rel="icon";
    document.head.append(fav);
    }else{
        console.log("Icon already defined in scope");
    }
}
function require(file) {
    $.getJSON('../..', data => {
        for(var conf of data) {
            if(conf.includes(file)) {
                if(file.includes(".js")) {
                    $.getScript(file);
                }else{
                    $.getScript(file+".js");
                }
                localStorage.setItem("contains", "true");
                break;
            }else{
                localStorage.setItem("contains", "false");
            }
        }
    });
    if(localStorage.getItem("contains").includes("true")) {
        localStorage.removeItem("contains");
        var srcNodeList = document.head.querySelectorAll('[src]');
        for (var i = 0; i < srcNodeList.length; ++i) {
        var item = srcNodeList[i];
        if(item.getAttribute('src').includes(file)){
            return item;
        }
        }
    }else{
        console.error("Script: '" + file + "' dont found");
        localStorage.removeItem("contains");
        return null;
    }
}
function addSpacer(to) {
    document.getElementById(to).innerHTML+="<br>";
}
function addScript(src) {
    var load = false;
    if(src.includes("http://")) {
    load = true;
    }else{
        if(src.includes("https://")) {
            load = true;
        }else{
        new Logger().error("Wrong use of addScript for local files use require");
        }
    }
    if(load) {
        var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = src;
    $("head").append(s);
    }
}
function addStyle(href) {
    document.head.innerHTML+="<link rel='stylesheet' href='" + href + "'></link>";
}
class Logger {
    log = function(message) {
        console.log("[LOGGING] " + message);
    }
    error = function(message) {
        console.error("[ERROR] " + message);
    }
    critical = function(message, clearsite) {
        if(clearSite) {
        clearSite();
        }
        console.error("[CRITICAL::HOLD] " + message);
    }
    warn = function(message) {
        console.warn("[WARNING] " + message);
    }
    critical = function(message) {
        console.error("[CRITICAL::HOLD] " + message);
    }
    info = function(message) {
        console.info("[INFO] " + message);
    }
}
class Div{
    constructor() {
        this.d = document.createElement('div');
    }
    setId = function(id) {
        this.divid = id;
    }
    setClass = function(cla) {
        this.divclass = cla;
    }
    setStyle = function(style) {
        this.divstyle = style;
    }
    getAPI = function() {
        return this.d;
    }
    setClick = function(func) {
        this.buttonclick = func;
    }
    create = function(at) {
        if(this.divid) {
            this.d.id = this.divid;
        }
        if(this.divclass) {
            this.d.setAttribute("class", this.divclass);
        }
        if(this.divstyle) {
            this.d.setAttribute("style", this.divstyle);
        }
        if(this.buttonclick) {
            this.d.setAttribute("onclick","window['" + this.buttonclick + "'].call();");
        }
        if(!at=="") {
            document.getElementById(at).append(this.d);
        }else{
            document.body.append(this.d);
        }
    }
}
class Styles {
    Background = class {
        constructor(url) {
            document.body.setAttribute("style", "background-image:url('" + url + "')");
        }
        setNoRepeat = function() {
            document.body.setAttribute("style", document.body.getAttribute("style") + ";background-repeat:no-repeat");
        }
        setSize = function(type) {
            document.body.setAttribute("style", document.body.getAttribute("style") + ";background-size: " + type);
        }
        setAttachment = function(type) {
            document.body.setAttribute("style", document.body.getAttribute("style") + ";background-attachment: " + type);
        }
    }
}
class Button{
    constructor() {
        this.b = document.createElement('button');
    }
    setId = function(id) {
        this.buttonid = id;
    }
    setClass = function(cla) {
        this.buttonclass = cla;
    }
    setClick = function(func) {
        if(func.name!=null) {
            this.buttonclick = func.name;
        }else{
            this.buttonclick = func.constructor.name;
        }
    }
    setText = function(text) {
        this.buttontext = text;
    }
    setForm = function(form) {
        this.buttonformid = form;
    }
    setFormAction = function(url) {
        this.buttonFormUrl = url;
    }
    setDisabled = function() {
        this.buttondisabled = true;
    }
    setAutoFocus = function() {
        this.buttonautofocus = true;
    }
    setFormEncType = function(type) {
        this.buttonformenctype = type;
    }
    setFormMethod = function(method) {
        this.buttonformmethod = method;
    }
    setFormNoValidate = function() {
        this.buttonformnovalidate = true;
    }
    setFormTarget = function(target) {
        this.buttonformtargt = target;
    }
    setName = function(name) {
        this.buttonname = name;
    }
    setType = function(type) {
        this.buttontype = type;
    }
    setValue = function(val) {
        this.buttonvalue = val;
    }
    setAccessKey = function(key) {
        this.buttonaccesskey = key;
    }
    setContentEditable = function() {
        this.buttoncontenteditable = true;
    }
    setData = function(data) {
        this.buttondata = data;
    }
    setDir = function(dir) {
        this.buttondir = dir;
    }
    setDraggable = function() {
        this.buttondraggable = true;
    }
    setHidden = function() {
        this.buttonhidden = true;
    }
    setLang = function(lang) {
        this.buttonlang = lang;
    }
    setSpellCheck = function() {
        this.buttonspellcheck = true;
    }
    setStyle = function(style) {
        this.buttonstyle = style;
    }
    setTabIndex = function(tabindex) {
        this.buttontabindex = tabindex;
    }
    setTitle = function(title) {
        this.buttontitle = title;
    }
    setTranslate = function() {
        this.buttontranslate = true;
    }
    get = function() {
        return document.getElementById(this.buttonid);
    }
    getAPI = function() {
        this.intern();
        return this.b;
    }
    intern = function() {
        var b = this.b;
        if(this.buttonformid) {
        b.setAttribute("form", this.buttonformid);
        }
        if(this.buttonFormUrl) {
        b.setAttribute("formaction", this.buttonFormUrl);
        }
        if(this.buttondisabled) {
        b.setAttribute("disabled", "true");
        }
        if(this.buttonautofocus) {
        b.setAttribute("autofocus", "true");
        }
        if(this.buttonformenctype) {
        b.setAttribute("formenctype", this.buttonformenctype);
        }
        if(this.buttonformmethod) {
        b.setAttribute("formmethod", this.buttonformmethod);
        }
        if(this.buttonformnovalidate) {
        b.setAttribute("formnovalidate", "true");
        }
        if(this.buttonformtargt) {
        b.setAttribute("formtarget", this.buttonformtargt);
        }
        if(this.buttonname) {
        b.name=this.buttonname;
        }
        if(this.buttontype) {
        b.setAttribute("type", this.buttontype);
        }
        if(this.buttonvalue) {
        b.setAttribute("value", this.buttonvalue);
        }
        if(this.buttonaccesskey) {
        b.setAttribute("accesskey", this.buttonaccesskey);
        }
        if(this.buttoncontenteditable) {
        b.setAttribute("contenteditable", this.buttoncontenteditable);
        }
        if(this.buttondata) {
        b.setAttribute("data-*", this.buttondata);
        }
        if(this.buttondir) {
        b.setAttribute("dir", this.buttondir);
        }
        if(this.buttondraggable) {
        b.setAttribute("draggable", this.buttondraggable);
        }
        if(this.buttonhidden) {
        b.setAttribute("hidden", this.buttonhidden);
        }
        if(this.buttonlang) {
        b.setAttribute("lang",this.buttonlang);
        }
        if(this.buttonspellcheck) {
        b.setAttribute("spellcheck", this.buttonspellcheck);
        }
        if(this.buttonstyle) {
        b.setAttribute("style",this.buttonstyle);
        }
        if(this.buttontabindex) {
        b.setAttribute("tabindex",this.buttontabindex);
        }
        if(this.buttontitle) {
        b.setAttribute("title",this.buttontitle);
        }
        if(this.buttontranslate) {
        b.setAttribute("translate",this.buttontranslate);
        }
        if(this.buttonclick) {
        b.setAttribute("onclick","window['" + this.buttonclick + "'].call();");
        }
        if(this.buttonid) {
        b.id = this.buttonid;
        }
        if(this.buttonclass) {
        b.className = this.buttonclass;
        }
        if(this.buttontext) {
        b.textContent = this.buttontext;
        }
    }
    create = function(at) {
        var b = this.b;
        this.intern();
        if(at!=null) {
        document.getElementById(at).append(b);
        }else{
            document.body.append(b);
        }
    }
}
class iFrame{
    constructor() {
        this.iframe = document.createElement("iframe");
    }
    setSrc = function(src) {
        this.iframe.setAttribute("src", src);
    }
    setStyle = function(style) {
        this.iframe.setAttribute("style", style);
    }
    setClass = function(classs) {
        this.iframe.setAttribute("class", classs);
    }
    getAPI = function() {
        return this.iframe;
    }
    create = function(at) {
        if(!at=="") {
            document.getElementById(at).append(this.iframe);
        }else{
            document.body.append(this.iframe);
        }
    }
}
function AppendStyle(id, style) {
    if(id!=null) {
        document.getElementById(id).setAttribute("style", document.getElementById(id).getAttribute("style") + ";" + style);
    }else{
        document.body.setAttribute("style", document.body.getAttribute("style") + ";" + style);
    }
}
class Custom{
    constructor(element) {
        this.custom = document.createElement(element);
    }
    getAPI = function() {
        return this.custom;
    }
    setAttribute = function(item, value) {
        this.custom.setAttribute(item, value);
    }
    create = function(at) {
        if(!at=="") {
            document.getElementById(at).append(this.custom);
        }else{
            document.body.append(this.custom);
        }
    }
}
function NotImplemented(func) {
    if(func.name!=null) {
    new Logger().info("Function: " + func.name + " not implemented");
    }else{
        new Logger().info("Function: '" + func.constructor.name + "' not implemented yet");
    }
}
class Dialog{
    Default = class {
        constructor() {
            this.cite = new Custom("dialog");
        }
        setOpen = function() {
            this.cite.setAttribute("open", "true");
        }
        setInner = function(html) {
            this.cite.getAPI().innerHTML=html;
        }
        setText = function(text) {
            this.cite.getAPI().textContent=text;
        }
        setId = function(id) {
            this.cite.setAttribute("id", id);
        }
        setClass = function(classs) {
            this.cite.setAttribute("class", classs);
        }
        setStyle = function(style) {
            this.cite.setAttribute("style", style);
        }
        getAPI = function() {
            return this.cite.getAPI();
        }
        create = function(at) {
            if(at!=null) {
                document.getElementById(at).append(this.cite.getAPI());
            }else{
                document.body.append(this.cite.getAPI());
            }
        }
    }
    Message = class {
        constructor(message, isAlert) {
            Deprecated(this);
            if(!isAlert) {
                this.md = document.createElement("div");
                this.message = message;
                this.isAlert = isAlert;
            }else{
                this.isAlert = isAlert;
                this.message = message;
            }
        }
        onClick = function() {
            return this.mdialog;
        }
        getAPI = function() {
            return this.md;
        }
        create = function(at) {
            if(!this.isAlert) {
                var md = this.md;
            if(at!=null) {
                document.getElementById(at).append(md);
            }else{
                document.body.append(md);
            }
            }else{
                this.mdialog = confirm(this.message);
            }
        }
    }
    AlertMessage = class {
        constructor(message, isAlert) {
            if(!isAlert) {
                this.md = document.createElement("div");
                this.message = message;
                this.isAlert = isAlert;
            }else{
                this.isAlert = isAlert;
                this.message = message;
            }
        }
        onClick = function() {
            return this.mdialog;
        }
        getAPI = function() {
            return this.md;
        }
        create = function(at) {
            if(!this.isAlert) {
                var md = this.md;
            if(at!=null) {
                document.getElementById(at).append(md);
            }else{
                document.body.append(md);
            }
            }else{
                this.mdialog = confirm(this.message);
            }
        }
    }
    NormalMessage = class {
        constructor(title, message, okbuttontext, cancelbuttontext) {
            this.bootstrap = new Bootstrap("");
            this.message = message;
            this.title = title;
            this.okbuttontext = okbuttontext;
            this.cancelbuttontext = cancelbuttontext;
            this.md = document.createElement("div");
            this.okbutton = new this.bootstrap.Button();
            this.cancelbutton = new this.bootstrap.Button();
        }
        getAPI = function() {
            return this.md;
        }
        setOnClickOk = function(func) {
            this.okbutton.setClick(func.name);
        }
        setOnClickCancel = function(func) {
            this.cancelbutton.setClick(func.name);
        }
        create = function(at) {
            var md = this.md;
            this.okbutton.setText(this.okbuttontext);
            this.cancelbutton.setText(this.cancelbuttontext);
            md.setAttribute("class", "alert alert-danger");
            md.setAttribute("role", "alert");
            md.innerHTML="<h4>" + this.title + "</h4><p>" + this.message + "</p><hr>";
            this.okbutton.isDanger();
            this.cancelbutton.isDanger();
            this.cancelbutton.getAPI().setAttribute("data-bs-dismiss", "alert");
            this.okbutton.getAPI().setAttribute("data-bs-dismiss", "alert");
            md.append(this.okbutton.getButton());
            md.append(new Spacer().getComponent());
            md.append(this.cancelbutton.getButton());
            if(at!=null) {
                document.getElementById(at).append(this.md);
            }else{
                document.body.append(this.md);
            }
        }
    }  
}
class Spacer {
    constructor(id) {
        this.id = id;
        this.spacer = document.createElement("a")
    }
    getComponent() {
        if(this.id) {
        this.spacer.setAttribute("id", this.id);
        }
        this.spacer.textContent="    ";
        return this.spacer;
    }
}
class Global {
    onKeyDown = function(firefunc) {
        $(window).keydown(function(event){
            window[firefunc.name](event);
        });
    }
    onKeyUp = function(firefunc) {
        $(window).keyup(function(event){
            window[firefunc.name](event);
        });
    }
    onSwitch = function(firefunc) {
        document.addEventListener("visibilitychange", (event) => {
            if (document.visibilityState == "visible") {
              window[firefunc.name]("active");
            } else {
              window[firefunc.name]("inactive");
            }
        });
    }
}
class Device {
    setAutoScaling = function() {
        var meta = new Meta();
        meta.setContent("width=device-width,initial-scale=1");
        meta.setName("viewport");
        meta.create();
    }
}
class Bootstrap {
    constructor(init) {
        if(init==null) {
        addStyle("https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css");
        addScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js");
        console.error("Please add copyright notice for Bootstrap");    
    }
    }
    CenterDiv = class {
        constructor() {
            this.d = document.createElement('div');
        }
        setId = function(id) {
            this.divid = id;
        }
        setClass = function(cla) {
            this.divclass = cla;
        }
        setStyle = function(style) {
            this.divstyle = style;
        }
        getAPI = function() {
            return this.d;
        }
        setClick = function(func) {
            this.buttonclick = func;
        }
        create = function(at) {
            if(this.divid) {
                this.d.id = this.divid;
            }
            if(this.divclass) {
                this.d.setAttribute("class", this.divclass);
            }
            if(this.divstyle) {
                this.d.setAttribute("style", this.divstyle);
            }
            if(this.buttonclick) {
                this.d.setAttribute("onclick","window['" + this.buttonclick + "'].call();");
            }
            this.center = new Div();
            this.center.getAPI().setAttribute("class", "d-flex justify-content-center");
            this.center.getAPI().append(this.d);
            if(!at=="") {
                document.getElementById(at).append(this.center.getAPI());
            }else{
                document.body.append(this.center.getAPI());
            }
        }
    }
    Spinner = class {
        constructor(id) {
            this.id = id;
            this.spinner = new Div();
            this.spinnerspan = new Custom("span");
            this.spinner.getAPI().setAttribute("class", "spinner-border");
            this.spinner.getAPI().setAttribute("role", "status");
            this.spinnerspan.getAPI().setAttribute("class", "visually-hidden");
            this.spinnerspan.getAPI().innerHTML="Loading...";
            this.spinner.getAPI().setAttribute("id", id);
            this.spinner.getAPI().append(this.spinnerspan.getAPI());
        }
        setCentered = function() {
            this.centered = true;
        }
        setGrowing = function() {
            this.spinner.getAPI().setAttribute("class", this.spinner.getAPI().getAttribute("class").replace("spinner-border", "spinner-grow"));
        }
        setPrimary = function() {
            this.spinner.getAPI().setAttribute("class", this.spinner.getAPI().getAttribute("class") + " text-primary");
        }
        setSecondary = function() {
            this.spinner.getAPI().setAttribute("class", this.spinner.getAPI().getAttribute("class") + " text-secondary");
        }
        setSuccess = function() {
            this.spinner.getAPI().setAttribute("class", this.spinner.getAPI().getAttribute("class") + " text-success");
        }
        setDanger = function() {
            this.spinner.getAPI().setAttribute("class", this.spinner.getAPI().getAttribute("class") + " text-danger");
        }
        setWarning = function() {
            this.spinner.getAPI().setAttribute("class", this.spinner.getAPI().getAttribute("class") + " text-warning");
        }
        setInfo = function() {
            this.spinner.getAPI().setAttribute("class", this.spinner.getAPI().getAttribute("class") + " text-info");
        }
        setLight = function() {
            this.spinner.getAPI().setAttribute("class", this.spinner.getAPI().getAttribute("class") + " text-light");
        }
        setDark = function() {
            this.spinner.getAPI().setAttribute("class", this.spinner.getAPI().getAttribute("class") + " text-dark");
        }
        setVisible = function() {
            document.getElementById(this.id).remove();
        }
        setSmall = function() {
            if(this.spinner.getAPI().getAttribute("class").includes("border")) {
                this.spinner.getAPI().setAttribute("class", this.spinner.getAPI().getAttribute("class") + " spinner-border-sm");
            }else{
                this.spinner.getAPI().setAttribute("class", this.spinner.getAPI().getAttribute("class") + " spinner-grow-sm");
            }
        }
        getAPI = function() {
            return this.spinner.getAPI();
        }
        create = function(at) {
            if(!this.centered) {
            if(at!=null) {
                document.getElementById(at).append(this.spinner.getAPI());
            }else{
                document.body.append(this.spinner.getAPI());
            }
            }else{
                this.container = new Div();
                this.container.getAPI().setAttribute("class", "d-flex justify-content-center");
                this.container.getAPI().append(this.spinner.getAPI());
                if(at!=null) {
                    document.getElementById(at).append(this.container.getAPI());
                }else{
                    document.body.append(this.container.getAPI());
                }
            }
        }
    }
    Navbar = class {
        constructor(id) {
            this.id = id;
            this.navbar = new Custom("nav");
            this.container = new Div();
            this.container.setClass("container-fluid");
            this.container.setId(id+"container");
            this.containerid = id+"container";
            this.navbar.getAPI().append(this.container.getAPI());
        }
        setLight = function() {
            this.navbar.getAPI().setAttribute("class", "navbar bg-light");
        }
        setDark = function() {
            this.navbar.getAPI().setAttribute("class", "navbar bg-dark");
        }
        setPrimary = function() {
            this.navbar.getAPI().setAttribute("class", "navbar navbar-dark bg-primary");
        }
        setCustomColor = function(hex) {
            this.navbar.getAPI().setAttribute("class", "navbar");
            this.navbar.getAPI().setAttribute("style", "background-color:" + hex);
        }
        setFixedTop = function() {
            this.navbar.getAPI().setAttribute("class", this.navbar.getAPI().getAttribute("class") + " fixed-top");
        }
        setFixedBottom = function() {
            this.navbar.getAPI().setAttribute("class", this.navbar.getAPI().getAttribute("class") + " fixed-bottom");
        }
        setStickyTop = function() {
            this.navbar.getAPI().setAttribute("class", this.navbar.getAPI().getAttribute("class") + " sticky-top");
        }
        setStickyBottom = function() {
            this.navbar.getAPI().setAttribute("class", this.navbar.getAPI().getAttribute("class") + " sticky-bottom");
        }
        setCollapse = function() {
            this.collapsebutton = new Button();
            this.collapsebutton.setClass("navbar-toggler");
            this.collapsebutton.setType("button");
            this.collapsebutton.getAPI().setAttribute("data-bs-toggle", "collapse");
            this.collapsebutton.getAPI().setAttribute("data-bs-target", "#navbarNav");
            this.collapsebutton.getAPI().setAttribute("aria-controls", "navbarNav");
            this.collapsebutton.getAPI().setAttribute("aria-expanded", "false");
            this.collapsebutton.getAPI().setAttribute("aria-label", "Toggle navigation");
            this.collapsebutton.getAPI().innerHTML="<span class='navbar-toggler-icon'></span>";
            this.container.getAPI().append(this.collapsebutton.getAPI());
        }
        Text = class {
            constructor() {
                this.textspan = new Custom("span");
                this.textspan.getAPI().setAttribute("class", "navbar-text");
            }
            setText = function(text) {
                this.textspan.getAPI().innerHTML=text;
            }
            getAPI = function() {
                return this.textspan.getAPI();
            }
            getComponent = function() {
                return this.textspan.getAPI();
            }
            create = function(at) {
                if(at!=null) {
                    document.getElementById(at).append(this.textspan.getAPI());
                }else{
                    document.body.append(this.textspan.getAPI());
                }
            }
        }
        Collapse = class {
            constructor() {
                this.collapse = new Div();
                this.collapse.setClass("collapse navbar-collapse");
                this.collapse.setId("navbarNav");
            }
            addComponents = function(components) {
                this.collapse.getAPI().append(components.getAPI());
            }
            getComponent = function() {
                return this.collapse.getAPI();
            }
        }
        Brand = class {
            constructor() {
                this.brand = new Custom("a");
                this.brand.getAPI().setAttribute("class", "navbar-brand");
            }
            setImageAndName = function(src, name, width, height) {
                this.brand.getAPI().innerHTML="<image src='" + src + "' alt='NotSupported' width='" + width + "' height='" + height + "' class='d-inline-block align-text-top'>" + name;
            }
            setHref = function(href) {
                this.brand.getAPI().setAttribute("href", href);
            }
            setId = function(id) {
                this.brand.getAPI().setAttribute("id", id);
            }
            setName = function(name) {
                this.brand.getAPI().innerHTML=name;
            }
            getComponent = function() {
                return this.brand.getAPI();
            }
        }
        getAPI = function() {
            return this.navbar.getAPI();
        }
        setBrand = function(brandcomponent) {
            this.container.getAPI().append(brandcomponent.getComponent());
        }
        create = function(at) {
            if(at!=null) {
                document.getElementById(at).append(this.navbar.getAPI());
            }else{
                document.body.append(this.navbar.getAPI());
            }
        }
    }
    SearchBar = class {
        constructor(id, placeholder, buttontext) {
            this.id = id;
            this.searchbar = new Custom("form");
            this.placeholder = placeholder;
            this.buttontext = buttontext;
        }
        getComponent = function() {
            return this.searchbar.getAPI();
        }
        create = function(at) {
            this.searchbar.getAPI().setAttribute("class", "d-flex");
            this.searchbar.getAPI().setAttribute("role", "search");
            this.searchbar.getAPI().setAttribute("id", this.id);
            this.searchbar.getAPI().innerHTML="<input class='form-control me-2' type='search' placeholder='" + this.placeholder + "' aria-label='Searchfield'><button class='btn btn-outline-success' type='submit'>" + this.buttontext + "</button>";
            if(at!=null) {
                document.getElementById(at).append(this.searchbar.getAPI());
            }else{
                document.body.append(this.searchbar.getAPI());
            }
        }
    }
    Input = class {
        constructor(id) {
            this.form = new Custom("form");
            this.form.getAPI().setAttribute("class", "container-fluid");
            this.inputcontainer = new Div();
            this.span = new Custom("span");
            this.input = new Custom("input");
            this.inputcontainer.getAPI().setAttribute("class", "input-group");
            this.span.getAPI().setAttribute("class", "input-group-text");
            this.span.getAPI().setAttribute("id", id);
            this.input.getAPI().setAttribute("class", "form-control");
        }
        setType = function(type) {
            this.input.getAPI().setAttribute("type", type);
        }
        setPlaceholder = function(placeholder) {
            this.input.getAPI().setAttribute("placeholder", placeholder);
            this.input.getAPI().setAttribute("aria-label", placeholder);
        }
        getComponent = function() {
            this.inputcontainer.getAPI().append(this.span.getAPI());
            this.inputcontainer.getAPI().append(this.input.getAPI());
            this.form.getAPI().append(this.inputcontainer.getAPI());
            return this.form.getAPI();
        }
        getAPI = function() {
            this.inputcontainer.getAPI().append(this.span.getAPI());
            this.inputcontainer.getAPI().append(this.input.getAPI());
            this.form.getAPI().append(this.inputcontainer.getAPI());
            return this.form.getAPI();
        }
        setSpanCharacter = function(character) {
            this.span.getAPI().innerHTML=character;
        }
        create = function(at) {
            this.inputcontainer.getAPI().append(this.span.getAPI());
            this.inputcontainer.getAPI().append(this.input.getAPI());
            this.form.getAPI().append(this.inputcontainer.getAPI());
            if(at!=null) {
                document.getElementById(at).append(this.form.getAPI());
            }else{
                document.body.append(this.form.getAPI());
            }
        }
    }
    Button = class {
        constructor() {
            this.b = document.createElement("button");
        }
        setText = function(text) {
            this.b.textContent = text;
        }
        isPrimary = function() {
            this.buttontype="primary";
        }
        isSecondary = function() {
            this.buttontype="secondary";
        }
        isSuccess = function() {
            this.buttontype="success";
        }
        isDanger = function() {
            this.buttontype="danger";
        }
        isWarning = function() {
            this.buttontype="warning";
        }
        isInfo = function() {
            this.buttontype="info";
        }
        isLight = function() {
            this.buttontype="light";
        }
        isDark = function() {
            this.buttontype="dark";
        }
        setClass = function(classs) {
            this.buttonclass = classs;
        }
        setClick = function(func) {
            this.buttonclick = func;
        }
        isOutline = function() {
            this.buttontype = "outline-" + this.buttontype;
        }
        isLarge = function() {
            this.buttontype=this.buttontype+" btn-lg";
        }
        isSmall = function() {
            this.buttontype=this.buttontype+" btn-sm";
        }
        setTooltip = function(info) {
            this.b.setAttribute("data-bs-toggle", "tooltip");
            this.b.setAttribute("data-bs-placement", "top");
            this.b.setAttribute("data-bs-custom-class", "custom-tooltip");
            this.b.setAttribute("data-bs-title", info)
        }
        setType = function(type) {
            this.b.setAttribute("type", type);
        }
        isDisabled = function() {
            this.b.setAttribute("disabled");
        }
        getButton = function() {
            this.b.setAttribute("type", "button");
            if(this.buttonclass) {
            this.b.setAttribute("class", "btn " + this.buttonclass + " btn-" + this.buttontype);
            }else{
            this.b.setAttribute("class", "btn btn-" + this.buttontype);    
            }
            if(this.buttonclick) {
                this.b.setAttribute("onclick","window['" + this.buttonclick + "'].call();");
            }
            return this.b;
        }
        getAPI = function() {
			this.b.setAttribute("type", "button");
            if(this.buttonclass) {
            this.b.setAttribute("class", "btn " + this.buttonclass + " btn-" + this.buttontype);
            }else{
            this.b.setAttribute("class", "btn btn-" + this.buttontype);    
            }
            if(this.buttonclick) {
                this.b.setAttribute("onclick","window['" + this.buttonclick + "'].call();");
            }
            return this.b;
        }
        create = function(at) {
            this.b.setAttribute("type", "button");
            if(this.buttonclass) {
            this.b.setAttribute("class", "btn " + this.buttonclass + " btn-" + this.buttontype);
            }else{
            this.b.setAttribute("class", "btn btn-" + this.buttontype);    
            }
            if(this.buttonclick) {
                this.b.setAttribute("onclick","window['" + this.buttonclick + "'].call();");
            }
            if(!at=="") {
                document.getElementById(at).append(this.b);
            }else{
                document.body.append(this.b);
            }
        }
    }
    Alert = class {
        constructor() {
            this.d = new Div();
        }
        isPrimary = function() {
            this.buttonclass = "alert alert-primary";
        }
        isSecondary = function() {
            this.buttonclass = "alert alert-secondary";
        }
        isSuccess = function() {
            this.buttonclass = "alert alert-success";
        }
        isDanger = function() {
            this.buttonclass = "alert alert-danger";
        }
        isWarning = function() {
            this.buttonclass = "alert alert-warning";
        }
        isInfo = function() {
            this.buttonclass = "alert alert-info";
        }
        isLight = function() {
            this.buttonclass = "alert alert-light";
        }
        isDark = function() {
            this.buttonclass = "alert alert-dark";
        }
        setId = function(id) {
            this.id = id;
        }
        innerDiv = function(custom) {
            custom.create(this.id);
        }
        create = function(at) {
            if(this.id) {
                this.d.setId(this.id);
            }
            this.d.setClass(this.buttonclass);
            this.d.getAPI().setAttribute("role", "alert");
            if(!at=="") {
                this.d.create(at);
            }else{
                this.d.create();
            }
        }
    }
    ProgressBar = class {
        constructor(label) {
            this.progress = new Div();
            this.progress.getAPI().setAttribute("class", "progress");
            this.progressbar = new Div();
            this.progressbar.getAPI().setAttribute("class", "progress-bar");
            this.progressbar.getAPI().setAttribute("role", "progressbar");
            this.progressbar.getAPI().setAttribute("aria-label", label);
            this.progressbar.getAPI().setAttribute("id", label);
            this.label = label;
        }
        setMax = function(value) {
            this.progressbar.getAPI().setAttribute("aria-valuemax", value);
        }
        setMin = function(value) {
            this.progressbar.getAPI().setAttribute("aria-valuemin", value);
        }
        setNow = function(value) {
            this.now = value;
            this.progressbar.getAPI().setAttribute("aria-valuenow", value);
            this.progressbar.getAPI().setAttribute("style", "width: " + value + "%");
        }
        getComponent = function() {
            this.progress.getAPI().append(this.progressbar.getAPI());
            return this.progress.getAPI();
        }
        getProgressbar = function() {
            this.progress.getAPI().append(this.progressbar.getAPI());
            return this.progressbar.getAPI();
        }
        update = function(value) {
            if(this.now) {
                document.getElementById(this.label).innerHTML=value+"%";
            }
            document.getElementById(this.label).setAttribute("aria-valuenow", value);
            document.getElementById(this.label).setAttribute("style", "width: " + value + "%");
        }
        setSuccess = function() {
            this.progressbar.getAPI().setAttribute("class", this.progressbar.getAPI().getAttribute("class") + " bg-success");
        }
        setInfo = function() {
            this.progressbar.getAPI().setAttribute("class", this.progressbar.getAPI().getAttribute("class") + " bg-info");
        }
        setWarning = function() {
            this.progressbar.getAPI().setAttribute("class", this.progressbar.getAPI().getAttribute("class") + " bg-warning");
        }
        setDanger = function() {
            this.progressbar.getAPI().setAttribute("class", this.progressbar.getAPI().getAttribute("class") + " bg-danger");
        }
        get = function() {
            return document.getElementById(this.label);
        }
        showValue = function() {
            this.progressbar.getAPI().innerHTML = this.now+"%";
        }
        setStriped = function() {
            this.progressbar.getAPI().setAttribute("class", this.progressbar.getAPI().getAttribute("class") + " progress-bar-striped");
        }
        setAnimated = function() {
            this.progressbar.getAPI().setAttribute("class", this.progressbar.getAPI().getAttribute("class") + " progress-bar-animated");
        }
        addAnother = function(progressbar) {
            this.progress.getAPI().append(progressbar.getProgressbar());
        }
        create = function(at) {
            this.progress.getAPI().append(this.progressbar.getAPI());
            if(at!=null) {
                document.getElementById(at).append(this.progress.getAPI());
            }else{
                document.body.append(this.progress.getAPI());
            }
        }
    }
    //unfinished
    Accordion = class {
        constructor(id) {
            this.accid = id;
            this.accordion = new Div();
            this.accordion.getAPI().setAttribute("id", id);
            this.accordion.getAPI().setAttribute("class", "accordion");
        }
        Entry = class {
            constructor(accordion) {
                this.item = new Div();
                this.item.getAPI().setAttribute("class","accordion-item");
                this.accid = accordion.accid; 
            }
            Header = class {
                constructor(accordion, id) {
                    this.id = id;
                    this.header = new Custom("h2");
                    this.accid = accordion.accid;
                    this.header.getAPI().setAttribute("id", id);
                    this.header.getAPI().setAttribute("class", "accordion-header");
                }
                setTitle = function(title) {
                    this.button = new Button();
                    this.button.setClass("accordion-button collapsed");
                    this.button.setType("button");
                    this.button.getAPI().setAttribute("data-bs-toggle", "collapse");
                    this.button.getAPI().setAttribute("data-bs-target", "#" + this.id);
                    this.button.getAPI().setAttribute("data-bs-parent", this.accid);
                    this.button.setText(title);
                    this.header.getAPI().append(this.button.getAPI());
                }
                getComponent() {
                    return this.header.getAPI();
                }
            }
            Body = class {
                constructor(accordion, id) {
                    this.collapse = new Div();
                    this.accid = accordion.accid;
                    this.body = new Div();
                    this.body.getAPI().setAttribute("class","accordion-body");
                    this.collapse.getAPI().setAttribute("id", id);
                    this.collapse.getAPI().setAttribute("class", "accordion-collapse collapse");
                }
                addInner = function(elements) {
                    this.body.getAPI().append(elements.getAPI());
                }
                getComponent = function() {
                    this.collapse.getAPI().append(this.body.getAPI());
                    return this.collapse.getAPI();
                }
            }
            addHeader = function(header) {
                this.item.getAPI().append(header.getComponent());
            }
            addBody = function(body) {
                this.item.getAPI().append(body.getComponent());
            }
            getComponent = function() {
                return this.item.getAPI();
            }
        }
        addItem = function(entry) {
            this.accordion.getAPI().append(entry.getComponent());
        }
        create = function(at) {
            if(at!=null) {
                document.getElementById(at).append(this.accordion.getAPI());
            }else{
                document.body.append(this.accordion.getAPI());
            }
        }
    }
    Toast = class {
        constructor() {
            NotImplemented(this);
            this.toast = new Div();
            this.toast.getAPI().setAttribute("class", "toast");
            this.toast.getAPI().setAttribute("role", "alert");
            this.toast.getAPI().setAttribute("aria-live", "assertive");
            this.toast.getAPI().setAttribute("aria-atomic", "true");
            this.header = new Div();
            this.header.getAPI().setAttribute("class", "toast-header");
            this.body = new Div();
            this.body.getAPI().setAttribute("class", "toast-body");
            this.toast.getAPI().append(this.header.getAPI());
            this.toast.getAPI().append(this.body.getAPI());
        }
        addInnerHeader = function(custom) {
            this.header.getAPI().append(custom.getAPI());
        }
        addInnerBody = function(custom) {
            this.body.getAPI().append(custom.getAPI());
        }
        getAPI = function() {
            return this.toast.getAPI();
        }
        create = function(at) {
            var close = new Button();
            close.setType("button");
            close.setClass("btn-close");
            close.getAPI().setAttribute("data-bs-dismiss", "toast");
            close.getAPI().setAttribute("aria-label", "Close");
            this.header.getAPI().append(close.getAPI());
            if(at!=null) {
                document.getElementById(at).append(this.toast.getAPI());
            }else{
                document.body.append(this.toast.getAPI());
            }
        }
    }
    Pagination = class {
        constructor(label) {
            this.page = new Custom("nav");
            this.page.getAPI().setAttribute("aria-label", label);
            this.pagination = new Custom("ul");
            this.pagination.getAPI().setAttribute("class", "pagination");
            this.page.getAPI().append(this.pagination.getAPI());
        }
        add = function(href, number) {
            var li = new Custom("li");
            var a = new Custom("a");
            var loc = window.location.href;
            if(loc.includes(href)) {
                this.active = href;
                this.activenum = number;
                li.getAPI().setAttribute("class", "page-item active");
            }else{
                li.getAPI().setAttribute("class", "page-item");
            }
            a.getAPI().setAttribute("name", number);
            a.getAPI().setAttribute("href", href);
            a.getAPI().setAttribute("class", "page-link");
            a.getAPI().innerHTML=number;
            li.getAPI().append(a.getAPI());
            this.pagination.getAPI().append(li.getAPI());
        }
        setLarge = function() {
            this.pagination.getAPI().setAttribute("class", this.pagination.getAPI().getAttribute("class") + " pagination-lg");
        }
        setSmall = function() {
            this.pagination.getAPI().setAttribute("class", this.pagination.getAPI().getAttribute("class") + " pagination-sm");
        }
        create = function(at) {
            if(at!=null) {
                document.getElementById(at).append(this.page.getAPI());
            }else{
                document.body.append(this.page.getAPI());
            }
        }
    }
    CloseButton = class {
        constructor() {
            this.closebutton = new Button();
            this.closebutton.setType("button");
            this.closebutton.setClass("btn-close");
            this.closebutton.getAPI().setAttribute("aria-label", "Close");
        }
        setDisabled = function() {
            this.closebutton.setDisabled();
        }
        setWhite = function() {
            this.closebutton.getAPI().setAttribute("class", this.closebutton.getAPI().getAttribute("class") + " btn-close-white");
        }
        create = function(at) {
            if(at!=null) {
                document.getElementById(at).append(this.closebutton.getAPI());
            }else{
                document.body.append(this.closebutton.getAPI());
            }
        }
    }
    Card = class {
        constructor() {
            this.card = new Div();
            this.card.getAPI().setAttribute("class", "card"); 
        }
        setImage = function(href) {
            var img = new Custom("img");
            img.getAPI().setAttribute("src", href);
            img.getAPI().setAttribute("class", "card-img-top");
            img.getAPI().setAttribute("alt", "Your browser sucks");
            this.card.getAPI().append(img.getAPI());
        }
		getAPI = function() {
            return this.card.getAPI();
        }
        addBody = function(element) {
            this.card.getAPI().append(element.getAPI());
        }
        setWidth = function(width) {
            this.card.getAPI().setAttribute("stlye", width);
        }
        create = function(at) {
            if(at!=null) {
                document.getElementById(at).append(this.card.getAPI());
            }else{
                document.body.append(this.card.getAPI());
            }
        }
    }
    BreadCrumb = class {
        constructor() {
            this.nav = new Nav();
            this.nav.getAPI().setAttribute("aria-label", "breadcrumb");
            this.breadcrumb = new Ol();
            this.breadcrumb.setClass("breadcrumb");
            this.nav.getAPI().append(this.breadcrumb.getAPI());
        }
        addActive = function(name) {
            var li = new Li();
            li.setClass("breadcrumb-item active");
            li.getAPI().setAttribute("aria-current", "page")
            li.getAPI().innerHTML=name;
            this.breadcrumb.getAPI().append(li.getAPI());
        }
        add = function(href, name) {
            var li = new Li();
            li.setClass("breadcrumb-item");
            li.getAPI().innerHTML="<a href='" + href + "'>" + name + "</a>";
            this.breadcrumb.getAPI().append(li.getAPI());
        }
        create = function(at) {
            if(at!=null) {
                document.getElementById(at).append(this.nav.getAPI());
            }else{
                document.body.append(this.nav.getAPI());
            }
        }
    }
}
class WebAmp {
    constructor() {
        this.app = new iFrame();
        this.app.setSrc("https://webamp.org")
    }
    setWidth = function(width) {
        this.app.getAPI().setAttribute("width", width);
    }
    setHeight = function(height) {
        this.app.getAPI().setAttribute("height", height);
    }
    setDefaultSize = function() {
        this.app.getAPI().setAttribute("width", 285);
        this.app.getAPI().setAttribute("height", 470);
    }
    create = function(at) {
        if(at!=null) {
            document.getElementById(at).append(this.app.getAPI());
        }else{
            document.body.append(this.app.getAPI());
        }
    }
}
class Image {
    constructor(src) {
        this.image = new Custom("img");
        this.image.getAPI().setAttribute("src", src);
    }
    setAlt = function(message) {
        this.image.getAPI().setAttribute("alt", message);
    }
    setCrossorigin = function(type) {
        this.image.getAPI().setAttribute("crossorigin", type);
    }
    setIsmap = function() {
        this.image.getAPI().setAttribute("ismap", "true");
    }
    setLoading = function(type) {
        this.image.getAPI().setAttribute("loading", type);
    }
    setLongdesc = function(url) {
        this.image.getAPI().setAttribute("longdesc", url);
    }
    setReffererPolicy = function(type) {
        this.image.getAPI().setAttribute("referrerpolicy", type);
    }
    setClass = function(classs) {
        this.image.getAPI().setAttribute("class", classs);
    }
    setStyle = function(style) {
        this.image.getAPI().setAttribute("style", style);
    }
    setSizes = function(sizes) {
        this.image.getAPI().setAttribute("sizes", sizes);
    }
    setSrcset = function(set) {
        this.image.getAPI().setAttribute("srcset", set);
    }
    setUsemap = function(usemap) {
        this.image.getAPI().setAttribute("#" + usemap);
    }
    setStyle = function(style) {
        this.image.getAPI().setAttribute("stlye", style);
    }
    setWidth = function(width) {
        this.image.getAPI().setAttribute("width", width);
    }
    setHeight = function(height) {
        this.image.getAPI().setAttribute("height", height);
    }
    getAPI = function() {
        return this.image.getAPI();
    }
    getContainer = function() {
        return this.container.getAPI();
    }
    isLink = function(href) {
        this.islink = true;
        this.container = new Custom("a");
        this.container.getAPI().setAttribute("href", href);
        this.container.getAPI().append(this.image.getAPI());
        return this.container;
    }
    create = function(at) {
        if(this.islink) {
            if(at!=null) {
                document.getElementById(at).append(this.container.getAPI());
            }else{
                document.body.append(this.container.getAPI());
            }
        }else{
        if(at!=null) {
            document.getElementById(at).append(this.image.getAPI());
        }else{
            document.body.append(this.image.getAPI());
        }
        }
    }
}
function underWork(func) {
    if(func.name!=null) {
        new Logger().info("Function " + func.name + " under work");
    }else{
        new Logger().info("Function " + func.constructor.name + " under work");
    }
}
class Embedded {
    YouTube = class {
        constructor(yturl) {
            this.frame = new iFrame();
            this.yturl = yturl;
            this.playercolor = "red";
        }
        INTERNALPlay = function(yturl) {
            var url = yturl;
            this.newurl = "";
            if(this.hideytlogo) {
                this.args = this.args + "&modestbranding=1";
            }else{
                this.args = this.args + "&modestbranding=0";
            }
            if(this.enablejs) {
                this.args = this.args + "&enablejsapi=1";
            }else{
                this.args = this.args + "&enablejsapi=0";
            }
            if(this.autoplay) {
                this.args = this.args + "&autoplay=1";
            }
            if(this.disablekb) {
                this.args = this.args + "&disablekb=1";
            }
            if(this.fs) {
                this.args = this.args + "&fs=1";
            }
            if(this.loop) {
                this.args = this.args + "&loop=1";
            }
            this.args = this.args + "&color=" + this.playercolor;
            if(url.includes("you")&&url.includes("https://")) {
                if(url.includes("&")) {
                    url = url.split("&")[0];
                }
                if(url.includes("/playlist")) {
                    this.newurl = url.replace("https://www.youtube.com/playlist?list=", "https://www.youtube-nocookie.com/embed/videoseries?list=");
                }else{
                    if(url.includes("youtu.be")) {
                        this.newurl = url.replace("https://youtu.be/", "https://www.youtube-nocookie.com/embed/")
                    }else{
                        if(url.includes("youtube.com")) {
                            this.newurl = url.replace("https://www.youtube.com/watch?v=", "https://www.youtube-nocookie.com/embed/");
                        }
                    }
                }
            }
        }
        getAPI = function() {
            return this.frame.getAPI();
        }
        setAutoPlay = function() {
            this.autoplay = true;
        }
        setDisableKb = function() {
            this.disablekb = true;
        }
        setFullScreen = function() {
            this.fs = true;
        }
        setLooping = function() {
            this.loop = true;
        }
        setHideYTLogo = function() {
            this.hideytlogo = true;
        }
        setEnableJS = function() {
            this.enablejs = true;
        }
        setPlayerColor = function(color) {
            this.playercolor = color;
        }
        fillPage = function() {
            this.frame.getAPI().setAttribute("style", "width:100%;height:100%");
        }
        create = function(at) {
            this.INTERNALPlay(this.yturl);
            console.log("Load URL: " + this.newurl + "?" + this.args);
            this.frame.setSrc(this.newurl + "?" + this.args);
            if(at!=null) {
                document.getElementById(at).append(this.frame.getAPI());
            }else{
                document.body.append(this.frame.getAPI());
            }
        }
    }
    Twitch = class {
        constructor(streamurl) {
            this.frame = new iFrame();
            if(location.protocol=="http:") {
                this.block = true;
                new Logger().error("HTTP Mode! Twitch embed not availabe!");
            }else{
            this.streamer  = streamurl.replace("https://twitch.tv/", "");
            }
        }
        INTERNALPlay = function() {
            var url = "";
            if(!this.chat) {
                url = "https://player.twitch.tv/?autoplay=false&channel=" + this.streamer + "&parent=" + window.location.href;
            }else{
                url = "" + this.streamer + "/chat";
            }
            this.frame.setSrc(url);
        }
        setChat = function() {
            this.chat = true;
        }
        getAPI = function() {
            return this.frame.getAPI();
        }
        create = function(at) {
            if(!this.block) {
            this.INTERNALPlay();
            if(at!=null) {
                document.getElementById(at).append(this.frame.getAPI());
            }else{
                document.body.append(this.frame.getAPI());
            }
            } 
        }
    }
    Spotify = class {
        constructor(track, id) {
            this.frame = new iFrame();
            this.url = track.split("/discography")[0];
            this.id = id;
        }
        getAPI = function() {
            return this.frame.getAPI();
        }
        create = function(at) {
            this.frame.setSrc(this.url.replace("https://open.spotify.com/", "https://open.spotify.com/embed/"));
            if(at!=null) {
                document.getElementById(at).append(this.frame.getAPI());
            }else{
                document.body.append(this.frame.getAPI());
            }
        }
    }
    Deezer = class {
        constructor(deezerurl) {
            this.frame = new iFrame();
            this.url = deezerurl.replace("https://www.deezer.com/us", "");
            this.frame.getAPI().setAttribute("style", "width:600px;height:300px");
        }
        getAPI = function() {
            return this.frame.getAPI();
        }
        create = function(at) {
            if(this.url.includes("top_track")) {
                this.url = this.url + "s";
            }
            this.frame.setSrc("https://widget.deezer.com/widget/auto" + this.url);
            if(at!=null) {
                document.getElementById(at).append(this.frame.getAPI());
            }else{
                document.body.append(this.frame.getAPI());
            }
        } 
    }
}
class Multimedia {
    Legacy = class {
        Video = class {
            constructor(url) {
                this.video = new Custom("video");
                this.source = new Custom("source");
                this.source.getAPI().setAttribute("src", url);
                this.video.getAPI().append(this.source.getAPI());
            }
            setUnsupportedMessage = function(message) {
                this.video.getAPI().innerHTML+=message;
            }
            setWidth = function(width) {
                this.video.getAPI().setAttribute("width", width);
            }
            setHeight = function(height) {
                this.video.getAPI().setAttribute("height", height);
            }
            setControlsVisible = function() {
                this.video.getAPI().setAttribute("controls", "");
            }
            setAutoplay = function() {
                this.video.getAPI().setAttribute("autoplay", "");
            }
            setLoop = function() {
                this.video.getAPI().setAttribute("loop", "");
            }
            setMuted = function() {
                this.video.getAPI().setAttribute("muted", "");
            }
            setPreload = function(type) {
                this.video.getAPI().setAttribute("preload", type);
            }
            getAPI = function() {
                return this.audio.getAPI();
            }
            create = function(at) {
                if(at!=null) {
                    document.getElementById(at).append(this.video.getAPI());
                }else{
                    document.body.append(this.video.getAPI());
                }
            }
        }
    }
    Video = class {
        constructor(src) {
            this.src = src;
            addStyle("https://vjs.zencdn.net/7.20.2/video-js.css");
            addScript("https://vjs.zencdn.net/7.20.2/video.min.js");
            this.video = new Custom("video");
            this.video.getAPI().setAttribute("class", "video-js");
            this.source = new Custom("source");
            this.source.getAPI().setAttribute("src", src);
            this.video.getAPI().append(this.source.getAPI());
            console.log("Init video with 'videojs(#id#)'");
        }
        setId = function(id) {
            this.video.getAPI().setAttribute("id", id);
        }
        setClass = function(classs) {
            this.video.getAPI().setAttribute("class", this.video.getAPI().getAttribute("class") + " " + classs);
        }
        showControls = function() {
            this.video.getAPI().setAttribute("controls", "true");
        }
        setPreload = function(type) {
            this.video.getAPI().setAttribute("preload", type);
        }
        setWidth = function(width) {
            this.video.getAPI().setAttribute("width", width);
        }
        setHeight = function(height) {
            this.video.getAPI().setAttribute("height", height);
        }
        setPoster = function(url) {
            this.video.getAPI().setAttribute("poster", url);
        }
        setDataSetup = function(constdata) {
            this.video.getAPI().setAttribute("data-setup", constdata);
        }
        getAPI = function() {
            return this.video.getAPI();
        }
        setSourceType = function(type) {
            this.source.getAPI().setAttribute("type", type);
        }
        create = function(at) {
            if(at!=null) {
                document.getElementById(at).append(this.video.getAPI());
            }else{
                document.body.append(this.video.getAPI());
            }
        }
    }
    AudioEQ = class {
        constructor(url) {
            this.url = url;
            this.div = new Div();
            this.div.setId("audio");
            this.canvas = new Canvas();
            this.canvas.setId("canvas");
            this.div.getAPI().append(this.canvas.getAPI());
            this.audio = new Audio();
        }
        setContainerId = function(id) {
            this.div.getAPI().setAttribute("id", id);
        }
        setCanvasId = function(id) {
            this.canvas.getAPI().setAttribute("id", id);
            this.canvasid = id;
        }
        setAudioId = function(id) {
            this.audid = id;
        }
        getAudioElement = function() {
            return this.audio;
        }
        getCanvasElement = function() {
            return this.canvas;
        }
        getContainerElement = function() {
            return this.div;
        }
        setStyle = function(hex) {
            this.style = hex;
        }
        setCanvasWidth = function(width) {
            this.width = width;
        }
        setCanvasHeight = function(height) {
            this.height = height;
        } 
        INTERNALStart = function(){
            var canvasid = this.canvasid;
            var audid = this.audid;
            var audio = this.audio;
            var id = audid;
            var width = this.width;
            var height = this.height;
            var style = this.style;
            var canvas,
    ctx,
    source,
    context,
    analyser,
    fbc_array,
    bar_count,
    bar_pos,
    bar_width,
    bar_height;
    var playerid = "";
            if(id) {
                playerid = id;
                audio.id = id;
            }else{
                playerid = "audio_player";
            audio.id = "audio_player";
            }
            audio.src = this.url;
            audio.controls = true;
            audio.loop = false;
            audio.autoplay = false;
            this.div.getAPI().append(audio);
            document.getElementById(playerid).onplay = function() {
            if (typeof(context) === "undefined") {
                context = new AudioContext();
                analyser = context.createAnalyser();
                if(canvasid) {
                    canvas = document.getElementById(canvasid);
                }else{
                canvas = document.getElementById("canvas");
                }
                ctx = canvas.getContext("2d");
                source = context.createMediaElementSource(audio);

                if(width) {
                    canvas.width = width;
                }else{
                canvas.width = window.innerWidth * 0.80;
                }
                if(height) {
                    canvas.height = height;
                }else{
                canvas.height = window.innerHeight * 0.60;
                }

                source.connect(analyser);
                analyser.connect(context.destination);
            }
            
            FrameLooper();
            };
            function FrameLooper() {
                window.RequestAnimationFrame =
                    window.requestAnimationFrame(FrameLooper) ||
                    window.msRequestAnimationFrame(FrameLooper) ||
                    window.mozRequestAnimationFrame(FrameLooper) ||
                    window.webkitRequestAnimationFrame(FrameLooper);
            
                fbc_array = new Uint8Array(analyser.frequencyBinCount);
                bar_count = window.innerWidth / 2;
            
                analyser.getByteFrequencyData(fbc_array);
            
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                if(style) {
                    ctx.fillStyle = style;
                }else{
                    ctx.fillStyle = "#ffffff";
                }
            
                for (var i = 0; i < bar_count; i++) {
                    bar_pos = i * 4;
                    bar_width = 2;
                    bar_height = -(fbc_array[i] / 2);
            
                    ctx.fillRect(bar_pos, canvas.height, bar_width, bar_height);
                }
            }
        }
        create = function(at) {
            if(at!=null) {
                document.getElementById(at).append(this.div.getAPI());
            }else{
                document.body.append(this.div.getAPI());
            }
            this.INTERNALStart();
        }
    }
    Audio = class {
        constructor(url) {
            this.audio = new Custom("audio");
            this.source = new Custom("source");
            this.source.getAPI().setAttribute("src", url);
            this.audio.getAPI().append(this.source.getAPI());
        }
        setUnsupportedMessage = function(message) {
            this.audio.getAPI().innerHTML+=message;
        }
        setAutoplay = function() {
            this.audio.getAPI().setAttribute("autoplay", "");
        }
        setControlsVisible = function() {
            this.audio.getAPI().setAttribute("controls", "");
        }
        setLoop = function() {
            this.audio.getAPI().setAttribute("loop", "");
        }
        setMuted = function() {
            this.audio.getAPI().setAttribute("muted", "");
        }
        setPreload = function(type) {
            this.audio.getAPI().setAttribute("preload", type);
        }
        getAPI = function() {
            return this.audio.getAPI();
        }
        create = function(at) {
            if(at!=null) {
                document.getElementById(at).append(this.audio.getAPI());
            }else{
                document.body.append(this.audio.getAPI());
            }
        }
    }
}
function limitedSupport(func) {
    if(func!=null) {
        new Logger().warn("Not all browser support the '" + func.name + "' tag");
    }else{
        new Logger().warn("Not all browser support the '" + func.constructor.name + "' tag");
    }
}
function addComment(comment) {
    document.body.innerHTML+="<!-- " + comment + " -->";
}
class Upload {
    Choose = class {
        constructor(phphandler) {
            this.form = new Custom("form");
            this.form.getAPI().setAttribute("action", phphandler);
            this.uploader = new Custom("input");
            this.button = new Custom("input");
            this.uploader.getAPI().setAttribute("type", "file");
            this.button.getAPI().setAttribute("type", "submit");
            this.form.getAPI().append(this.uploader.getAPI());
            this.form.getAPI().append(this.button.getAPI());
        }
        setId = function(id) {
            this.uploader.getAPI().setAttribute("id", id);
        }
        setName = function(name) {
            this.uploader.getAPI().setAttribute("name", name);
        }
        getAPI = function() {
            return this.form.getAPI();
        }
        create = function(at) {
            if(at!=null) {
                document.getElementById(at).append(this.form.getAPI());
            }else{
                document.body.append(this.form.getAPI());
            }
        }
    }
    DragDrop = class {
        constructor() {
            this.upload = new Div();
            this.upload.getAPI().setAttribute("draggable", "true");
        }
        setId = function(id) {
            this.upload.getAPI().setAttribute("id", id);
        }
        setOnDrop = function(func) {
            this.upload.getAPI().setAttribute("ondrop", "window[" + func.name + "](event)");
        }
        setDropFieldInformation = function(info) {
            var p = new Custom("p");
            p.getAPI().innerHTML=info;
            this.upload.getAPI().append(p.getAPI());
        }
        getAPI = function() {
            return this.upload.getAPI();
        }
        create = function(at) {
            if(at!=null) {
                document.getElementById(at).append(this.upload.getAPI());
            }else{
                document.body.append(this.upload.getAPI());
            }
        }
    }
}
class A {
    constructor() {
        this.a = new Custom("a");
    }
    setHref = function(href) {
        this.a.getAPI().setAttribute("href", href);
    }
    setText = function(text) {
        this.a.getAPI().textContent=text;
    }
    setDownload = function(filename) {
        this.a.getAPI().setAttribute("download", filename);
    }
    setHrefLang = function(lang) {
        this.a.getAPI().setAttribute("hreflang", lang);
    }
    setMedia = function(media) {
        this.a.getAPI().setAttribute("media", media);
    }
    setPing = function(list) {
        this.a.getAPI().setAttribute("ping", list);
    }
    setReffererPolicy = function(type) {
        this.a.getAPI().setAttribute("referrerpolicy", type);
    }
    setRel = function(type) {
        this.a.getAPI().setAttribute("rel", type);
    }
    setTarget = function(target) {
        this.a.getAPI().setAttribute("target", target);
    }
    setType = function(type) {
        this.a.getAPI().setAttribute("type", type);
    }
    setClass = function(classs) {
        this.a.getAPI().setAttribute("class", classs);
    }
    setStyle = function(style) {
        this.a.getAPI().setAttribute("style", style);
    }
    getAPI = function() {
        return this.a.getAPI();
    }
    create = function(at) {
        if(at!=null) {
            document.getElementById(at).append(this.a.getAPI());
        }else{
            document.body.append(this.a.getAPI());
        }
    }
}
class Abbr {
    constructor() {
        this.abbr = new Custom("abbr");
    }
    setTitle = function(title) {
        this.abbr.getAPI().setAttribute("title", title);
    }
    setClass = function(classs) {
        this.abbr.getAPI().setAttribute("class", classs);
    }
    setStyle = function(style) {
        this.abbr.getAPI().setAttribute("style", style);
    }
    getAPI = function() {
        return this.abbr.getAPI();
    }
    create = function(at) {
        if(at!=null) {
            document.getElementById(at).append(this.abbr.getAPI());
        }else{
            document.body.append(this.abbr.getAPI());
        }
    }
}
class GetElement {
    constructor(id) {
        this.element = document.getElementById(id);
    }
    getAPI = function() {
        return this.element;
    }
}
class Acronym {
    constructor() {
        NotInHTML5(this);
    }
}
class Address {
    constructor() {
        this.address = new Custom("address");
    }
    innerHTML = function(html) {
        this.address.getAPI().innerHTML=html;
    }
    add = function(element) {
        this.address.getAPI().append(element.getAPI());
    }
    getAPI = function() {
        return this.address.getAPI();
    }
    create = function(at) {
        if(at!=null) {
            document.getElementById(at).append(this.address.getAPI());
        }else{
            document.body.append(this.address.getAPI());
        }
    }
}
class Applet {
    constructor() {
        NotInHTML5(this);
    }
}
class Area {
    constructor() {
        this.area = new Custom("area");
    }
    setAlt = function(alt) {
        this.area.setAttribute("alt", alt);
    }
    setCoords = function(coords) {
        this.area.setAttribute("coords", coords);
    } 
    setDownload = function(filename) {
        this.area.setAttribute("download", filename);
    }
    setHref = function(href) {
        this.area.setAttribute("href", href);
    }
    setHrefLang = function(lang) {
        this.area.setAttribute("hreflang", lang);
    }
    setMedia = function(media) {
        this.area.setAttribute("media", media);
    }
    setReffererPolicy = function(policy) {
        this.area.setAttribute("referrerpolicy", policy);
    }
    setRel = function(rel) {
        this.area.setAttribute("rel", rel);
    }
    setShape = function(shape) {
        this.areaa.setAttribute("shape", shape);
    }
    setTarget = function(target) {
        this.area.setAttribute("target", target);
    }
    setType = function(type) {
        this.area.setAttribute("type", type);
    }
    setClass = function(classs) {
        this.area.setAttribute("class", classs);
    }
    getAPI = function() {
        return this.area.getAPI();
    }
    create = function(at) {
        if(at!=null) {
            document.getElementById(at).append(this.area.getAPI());
        }else{
            document.body.append(this.area.getAPI());
        }
    }
}
class Article {
    constructor() {
        this.article = new Custom("article");
    }
    innerHTML = function(inner) {
        this.article.getAPI().innerHTML=inner;
    }
    add = function(element) {
        this.article.getAPI().append(element.getAPI());
    }
    setClass = function(classs) {
        this.article.setAttribute("class", classs);
    }
    setStyle = function(style) {
        this.article.setAttribute("style", style);
    }
    getAPI = function() {
        return this.article.getAPI();
    }
    create = function(at) {
        if(at!=null) {
            document.getElementById(at).append(this.article.getAPI());
        }else{
            document.body.append(this.article.getAPI());
        }
    }
}
class Aside {
    constructor() {
        this.aside = new Custom("aside");
    }
    innerHTML = function(html) {
        this.aside.getAPI().innerHTML=html;
    }
    add = function(element) {
        this.aside.getAPI().append(element.getAPI());
    }
    setClass = function(classs) {
        this.aside.setAttribute("class", classs);
    }
    setStyle = function(style) {
        this.aside.setAttribute("style", style);
    }
    getAPI = function() {
        return this.aside.getAPI();
    }
    create = function(at) {
        if(at!=null) {
            document.getElementById(at).append(this.aside.getAPI());
        }else{
            document.body.append(this.aside.getAPI());
        }
    }
}
class B {
    constructor() {
        this.b = new Custom("b");
    }
    setText = function(text) {
        this.b.getAPI().textContent=text;
    }
    setClass = function(classs) {
        this.b.setAttribute("class", classs);
    }
    setStyle = function(style) {
        this.b.setAttribute("style", style);
    }
    getAPI = function() {
        return this.b.getAPI();
    }
    create = function(at) {
        if(at!=null) {
            document.getElementById(at).append(this.b.getAPI());
        }else{
            document.body.append(this.b.getAPI());
        }
    }
}
class Tools {
    encode = function(text) {
        return btoa(text);
    }
    decode = function(encoded) {
        return atob(encoded);
    }
}
class Base {
    constructor() {
        this.base = new Custom("base");
    }
    setHref = function(href) {
        this.base.setAttribute("href", href);
    }
    setTarget = function(target) {
        this.base.setAttribute("target", target);
    }
    setClass = function(classs) {
        this.base.setAttribute("class", classs);
    }
    setStyle = function(style) {
        this.base.setAttribute("style", style);
    }
    getAPI = function() {
        return this.base.getAPI();
    }
    create = function() {
        document.head.append(this.base.getAPI());
    }
}
class BaseFont {
    constructor() {
        NotInHTML5(this);
    }
}
class Bdi {
    constructor() {
        this.bdi = new Custom("bdi");
    }
    setText = function(text) {
        this.bdi.getAPI().textContent=text;
    }
    getAPI = function() {
        return this.bdi.getAPI();
    }
    create = function(at) {
        if(at!=null) {
            document.getElementById(at).append(this.bdi.getAPI());
        }else{
            document.body.append(this.bdi.getAPI());
        }
    }
}
class Bdo {
    constructor() {
        this.bdo = new Custom("bdo");
    }
    setDir = function(dir) {
        this.bdo.setAttribute("dir", dir);
    }
    setStyle = function(style) {
        this.bdo.setAttribute("style", style);
    }
    setClass = function(classs) {
        this.bdo.setAttribute("class", classs);
    }
    getAPI = function() {
        return this.bdo.getAPI();
    }
    create = function(at) {
        if(at!=null) {
            document.getElementById(at).append(this.bdo.getAPI());
        }else{
            document.body.append(this.bdo.getAPI());
        }
    }
}
class Big {
    constructor() {
        NotInHTML5(this);
    }
}
class BlockQuote {
    constructor() {
        this.block = new Custom("blockquote");
    }
    setCite = function(cite) {
        this.block.setAttribute("cite", cite);
    }
    setClass = function(classs) {
        this.block.setAttribute("class", classs);
    }
    setStyle = function(style) {
        this.block.setAttribute("style", style);
    }
    getAPI = function() {
        return this.block.getAPI();
    }
    create = function(at) {
        if(at!=null) {
            document.getElementById(at).append(this.block.getAPI());
        }else{
            document.body.append(this.block.getAPI());
        }
    }
}
class Canvas {
    constructor() {
        this.canvas = new Custom("canvas");
    }
    setId = function(id) {
        this.canvas.setAttribute("id", id);
    }
    setClass = function(classs) {
        this.canvas.setAttribute("class", classs);
    }
    setStyle = function(style) {
        this.canvas.setAttribute("style", style);
    }
    getAPI = function() {
        return this.canvas.getAPI();
    }
    create = function(at) {
        if(at!=null) {
            document.getElementById(at).append(this.canvas.getAPI());
        }else{
            document.body.append(this.canvas.getAPI());
        }
    }
}
class Caption {
    constructor() {
        this.caption = new Custom("caption");
    }
    setText = function(text) {
        this.caption.getAPI().textContent=text;
    } 
    innerHTML = function(html) {
        this.caption.getAPI().innerHTML=html;
    }
    setId = function(id) {
        this.caption.setAttribute("id", id);
    }
    setClass = function(classs) {
        this.caption.setAttribute("class", classs);
    }
    setStyle = function(style) {
        this.caption.setAttribute("style", style);
    }
    getAPI = function() {
        return this.caption.getAPI();
    }
    create = function(at) {
        if(at!=null) {
            document.getElementById(at).append(this.caption.getAPI());
        }else{
            document.body.append(this.caption.getAPI());
        }
    }
}
class Center {
    constructor() {
        NotInHTML5(this);
    }
}
class Cite {
    constructor() {
        this.cite = new Custom("cite");
    }
    setText = function(text) {
        this.cite.getAPI().textContent=text;
    }
    setId = function(id) {
        this.cite.setAttribute("id", id);
    }
    setClass = function(classs) {
        this.cite.setAttribute("class", classs);
    }
    setStyle = function(style) {
        this.cite.setAttribute("style", style);
    }
    getAPI = function() {
        return this.cite.getAPI();
    }
    create = function(at) {
        if(at!=null) {
            document.getElementById(at).append(this.cite.getAPI());
        }else{
            document.body.append(this.cite.getAPI());
        }
    }
}
class Code {
    constructor() {
        this.cite = new Custom("code");
    }
    setText = function(text) {
        this.cite.getAPI().textContent=text;
    }
    setId = function(id) {
        this.cite.setAttribute("id", id);
    }
    setClass = function(classs) {
        this.cite.setAttribute("class", classs);
    }
    setStyle = function(style) {
        this.cite.setAttribute("style", style);
    }
    getAPI = function() {
        return this.cite.getAPI();
    }
    create = function(at) {
        if(at!=null) {
            document.getElementById(at).append(this.cite.getAPI());
        }else{
            document.body.append(this.cite.getAPI());
        }
    }
}
class Col {
    constructor() {
        this.cite = new Custom("col");
    }
    setSpan = function(span) {
        this.cite.setAttribute("span", span);
    }
    setId = function(id) {
        this.cite.setAttribute("id", id);
    }
    setClass = function(classs) {
        this.cite.setAttribute("class", classs);
    }
    setStyle = function(style) {
        this.cite.setAttribute("style", style);
    }
    getAPI = function() {
        return this.cite.getAPI();
    }
    create = function(at) {
        if(at!=null) {
            document.getElementById(at).append(this.cite.getAPI());
        }else{
            document.body.append(this.cite.getAPI());
        }
    }
}
class ColGroup {
    constructor() {
        this.cite = new Custom("colgroup");
    }
    addCol = function(element) {
        this.cite.getAPI().append(element.getAPI());
    }
    setId = function(id) {
        this.cite.setAttribute("id", id);
    }
    setClass = function(classs) {
        this.cite.setAttribute("class", classs);
    }
    setStyle = function(style) {
        this.cite.setAttribute("style", style);
    }
    getAPI = function() {
        return this.cite.getAPI();
    }
    create = function(at) {
        if(at!=null) {
            document.getElementById(at).append(this.cite.getAPI());
        }else{
            document.body.append(this.cite.getAPI());
        }
    }
}
class Data {
    constructor() {
        this.cite = new Custom("data");
    }
    setText = function(text) {
        this.cite.getAPI().textContent=text;
    }
    setValue = function(value) {
        this.cite.setAttribute("value", value);
    }
    setId = function(id) {
        this.cite.setAttribute("id", id);
    }
    setClass = function(classs) {
        this.cite.setAttribute("class", classs);
    }
    setStyle = function(style) {
        this.cite.setAttribute("style", style);
    }
    getAPI = function() {
        return this.cite.getAPI();
    }
    create = function(at) {
        if(at!=null) {
            document.getElementById(at).append(this.cite.getAPI());
        }else{
            document.body.append(this.cite.getAPI());
        }
    }
}
class DataList {
    constructor() {
        this.cite = new Custom("datalist");
    }
    addOption = function(element) {
        this.cite.getAPI().append(element.getAPI());
    }
    setId = function(id) {
        this.cite.setAttribute("id", id);
    }
    setClass = function(classs) {
        this.cite.setAttribute("class", classs);
    }
    setStyle = function(style) {
        this.cite.setAttribute("style", style);
    }
    getAPI = function() {
        return this.cite.getAPI();
    }
    create = function(at) {
        if(at!=null) {
            document.getElementById(at).append(this.cite.getAPI());
        }else{
            document.body.append(this.cite.getAPI());
        }
    }
}
class DD {
    constructor() {
        this.cite = new Custom("dd");
    }
    setText = function(text) {
        this.cite.getAPI().textContent=text;
    }
    setId = function(id) {
        this.cite.setAttribute("id", id);
    }
    setClass = function(classs) {
        this.cite.setAttribute("class", classs);
    }
    setStyle = function(style) {
        this.cite.setAttribute("style", style);
    }
    getAPI = function() {
        return this.cite.getAPI();
    }
    create = function(at) {
        if(at!=null) {
            document.getElementById(at).append(this.cite.getAPI());
        }else{
            document.body.append(this.cite.getAPI());
        }
    }
}
class Del {
    constructor() {
        this.cite = new Custom("del");
    }
    setText = function(text) {
        this.cite.getAPI().textContent=text;
    }
    setId = function(id) {
        this.cite.setAttribute("id", id);
    }
    setClass = function(classs) {
        this.cite.setAttribute("class", classs);
    }
    setStyle = function(style) {
        this.cite.setAttribute("style", style);
    }
    getAPI = function() {
        return this.cite.getAPI();
    }
    create = function(at) {
        if(at!=null) {
            document.getElementById(at).append(this.cite.getAPI());
        }else{
            document.body.append(this.cite.getAPI());
        }
    }
}
class Details {
    constructor() {
        this.cite = new Custom("details");
    }
    setTitle = function(title) {
        var summary = new Custom("summary");
        summary.getAPI().innerHTML=title;
        this.cite.getAPI().append(summary.getAPI());
    }
    addInner = function(element) {
        this.cite.getAPI().append(element.getAPI());
    }
    setId = function(id) {
        this.cite.setAttribute("id", id);
    }
    setOpen = function() {
        this.cite.setAttribute("open", "true");
    }
    setClass = function(classs) {
        this.cite.setAttribute("class", classs);
    }
    setStyle = function(style) {
        this.cite.setAttribute("style", style);
    }
    getAPI = function() {
        return this.cite.getAPI();
    }
    create = function(at) {
        if(at!=null) {
            document.getElementById(at).append(this.cite.getAPI());
        }else{
            document.body.append(this.cite.getAPI());
        }
    }
}
class Dfn {
    constructor() {
        this.cite = new Custom("dfn");
    }
    setText = function(text) {
        this.cite.getAPI().textContent=text;
    }
    setId = function(id) {
        this.cite.setAttribute("id", id);
    }
    setClass = function(classs) {
        this.cite.setAttribute("class", classs);
    }
    setStyle = function(style) {
        this.cite.setAttribute("style", style);
    }
    getAPI = function() {
        return this.cite.getAPI();
    }
    create = function(at) {
        if(at!=null) {
            document.getElementById(at).append(this.cite.getAPI());
        }else{
            document.body.append(this.cite.getAPI());
        }
    }
}
class Dir {
    constructor() {
        NotInHTML5(this);
    }
}
class Dl {
    constructor() {
        this.cite = new Custom("dl");
    }
    addInner = function(element) {
        this.cite.getAPI().append(element.getAPI());
    }
    setId = function(id) {
        this.cite.setAttribute("id", id);
    }
    setClass = function(classs) {
        this.cite.setAttribute("class", classs);
    }
    setStyle = function(style) {
        this.cite.setAttribute("style", style);
    }
    getAPI = function() {
        return this.cite.getAPI();
    }
    create = function(at) {
        if(at!=null) {
            document.getElementById(at).append(this.cite.getAPI());
        }else{
            document.body.append(this.cite.getAPI());
        }
    }
}
class Dt {
    constructor() {
        this.cite = new Custom("dt");
    }
    setText = function(text) {
        this.cite.getAPI().textContent=text;
    }
    addInner = function(element) {
        this.cite.getAPI().append(element.getAPI());
    }
    setId = function(id) {
        this.cite.setAttribute("id", id);
    }
    setClass = function(classs) {
        this.cite.setAttribute("class", classs);
    }
    setStyle = function(style) {
        this.cite.setAttribute("style", style);
    }
    getAPI = function() {
        return this.cite.getAPI();
    }
    create = function(at) {
        if(at!=null) {
            document.getElementById(at).append(this.cite.getAPI());
        }else{
            document.body.append(this.cite.getAPI());
        }
    }
}
class Em {
    constructor() {
        this.cite = new Custom("em");
    }
    setText = function(text) {
        this.cite.getAPI().textContent=text;
    }
    setId = function(id) {
        this.cite.setAttribute("id", id);
    }
    setClass = function(classs) {
        this.cite.setAttribute("class", classs);
    }
    setStyle = function(style) {
        this.cite.setAttribute("style", style);
    }
    getAPI = function() {
        return this.cite.getAPI();
    }
    create = function(at) {
        if(at!=null) {
            document.getElementById(at).append(this.cite.getAPI());
        }else{
            document.body.append(this.cite.getAPI());
        }
    }
}
class Embed {
    constructor() {
        this.cite = new Custom("embed");
        limitedSupport(this);
    }
    setType = function(type) {
        this.cite.setAttribute("type", type);
    }
    setSrc = function(src) {
        this.cite.setAttribute("src", src);
    }
    setWidth = function(width) {
        this.cite.setAttribute("width", width);
    }
    setHeight = function(height) {
        this.cite.setAttribute("height", height);
    }
    setId = function(id) {
        this.cite.setAttribute("id", id);
    }
    setClass = function(classs) {
        this.cite.setAttribute("class", classs);
    }
    setStyle = function(style) {
        this.cite.setAttribute("style", style);
    }
    getAPI = function() {
        return this.cite.getAPI();
    }
    create = function(at) {
        if(at!=null) {
            document.getElementById(at).append(this.cite.getAPI());
        }else{
            document.body.append(this.cite.getAPI());
        }
    }
}
class Fieldset {
    constructor() {
        this.cite = new Custom("fieldset");
    }
    setDisabled = function() {
        this.cite.setAttribute("disabled", "true");
    }
    setForm = function(form) {
        this.cite.setAttribute("form", form);
    }
    setName = function(name) {
        this.cite.setAttribute("name", name);
    }
    addInner = function(html) {
        this.cite.getAPI().append(html.getAPI());
    }
    setId = function(id) {
        this.cite.setAttribute("id", id);
    }
    setClass = function(classs) {
        this.cite.setAttribute("class", classs);
    }
    setStyle = function(style) {
        this.cite.setAttribute("style", style);
    }
    getAPI = function() {
        return this.cite.getAPI();
    }
    create = function(at) {
        if(at!=null) {
            document.getElementById(at).append(this.cite.getAPI());
        }else{
            document.body.append(this.cite.getAPI());
        }
    }
}
class FigCaption {
    constructor() {
        this.cite = new Custom("figcaption");
    }
    setText = function(text) {
        this.cite.getAPI().textContent=text;
    }
    setId = function(id) {
        this.cite.setAttribute("id", id);
    }
    setClass = function(classs) {
        this.cite.setAttribute("class", classs);
    }
    setStyle = function(style) {
        this.cite.setAttribute("style", style);
    }
    getAPI = function() {
        return this.cite.getAPI();
    }
    create = function(at) {
        if(at!=null) {
            document.getElementById(at).append(this.cite.getAPI());
        }else{
            document.body.append(this.cite.getAPI());
        }
    }
}
class Figure {
    constructor() {
        this.cite = new Custom("figure");
    }
    addInner = function(element) {
        this.cite.getAPI().append(element.getAPI());
    }
    setId = function(id) {
        this.cite.setAttribute("id", id);
    }
    setClass = function(classs) {
        this.cite.setAttribute("class", classs);
    }
    setStyle = function(style) {
        this.cite.setAttribute("style", style);
    }
    getAPI = function() {
        return this.cite.getAPI();
    }
    create = function(at) {
        if(at!=null) {
            document.getElementById(at).append(this.cite.getAPI());
        }else{
            document.body.append(this.cite.getAPI());
        }
    }
}
class Font {
    constructor() {
        NotInHTML5(this);
    }
}
class Footer {
    constructor() {
        this.cite = new Custom("footer");
    }
    addInner = function(element) {
        this.cite.getAPI().append(element.getAPI());
    }
    setId = function(id) {
        this.cite.setAttribute("id", id);
    }
    setClass = function(classs) {
        this.cite.setAttribute("class", classs);
    }
    setStyle = function(style) {
        this.cite.setAttribute("style", style);
    }
    getAPI = function() {
        return this.cite.getAPI();
    }
    create = function(at) {
        if(at!=null) {
            document.getElementById(at).append(this.cite.getAPI());
        }else{
            document.body.append(this.cite.getAPI());
        }
    }
}
class Form {
    constructor() {
        this.cite = new Custom("form");
    }
    addInner = function(element) {
        this.cite.getAPI().append(element.getAPI());
    }
    setAcceptCharset = function(charset) {
        this.cite.setAttribute("accept-charset", charset);
    }
    setAction = function(action) {
        this.cite.setAttribute("action", action);
    }
    setAutoComplete = function() {
        this.cite.setAttribute("autocomplete", "on");
    }
    setEncType = function(enctype) {
        this.cite.setAttribute("enctype", enctype);
    } 
    setMethod = function(method) {
        this.cite.setAttribute("method", method);
    }
    setName = function(name) {
        this.cite.setAttribute("name", name);
    }
    setNoValidate = function() {
        this.cite.setAttribute("novalidate", "novalidate");
    }
    setRel = function(rel) {
        this.cite.setAttribute("rel", rel);
    }
    setTarget = function(target) {
        this.cite.setAttribute("target", target);
    }
    setId = function(id) {
        this.cite.setAttribute("id", id);
    }
    setClass = function(classs) {
        this.cite.setAttribute("class", classs);
    }
    setStyle = function(style) {
        this.cite.setAttribute("style", style);
    }
    getAPI = function() {
        return this.cite.getAPI();
    }
    create = function(at) {
        if(at!=null) {
            document.getElementById(at).append(this.cite.getAPI());
        }else{
            document.body.append(this.cite.getAPI());
        }
    }
}
class Frame {
    constructor() {
        NotInHTML5(this);
    }
}
class FrameSet {
    constructor() {
        NotInHTML5(this);
    }
}
class H {
    constructor(number) {
        this.cite = new Custom("h" + number);
    }
    setText = function(text) {
        this.cite.getAPI().textContent=text;
    }
    setId = function(id) {
        this.cite.setAttribute("id", id);
    }
    setClass = function(classs) {
        this.cite.setAttribute("class", classs);
    }
    setStyle = function(style) {
        this.cite.setAttribute("style", style);
    }
    getAPI = function() {
        return this.cite.getAPI();
    }
    create = function(at) {
        if(at!=null) {
            document.getElementById(at).append(this.cite.getAPI());
        }else{
            document.body.append(this.cite.getAPI());
        }
    }
}
class Header {
    constructor() {
        this.cite = new Custom("header");
    }
    addInner = function(element) {
        this.cite.getAPI().append(element.getAPI());
    }
    setId = function(id) {
        this.cite.setAttribute("id", id);
    }
    setClass = function(classs) {
        this.cite.setAttribute("class", classs);
    }
    setStyle = function(style) {
        this.cite.setAttribute("style", style);
    }
    getAPI = function() {
        return this.cite.getAPI();
    }
    create = function(at) {
        if(at!=null) {
            document.getElementById(at).append(this.cite.getAPI());
        }else{
            document.body.append(this.cite.getAPI());
        }
    }
}
class Hr {
    constructor() {
        this.cite = new Custom("hr");
    }
    setId = function(id) {
        this.cite.setAttribute("id", id);
    }
    setClass = function(classs) {
        this.cite.setAttribute("class", classs);
    }
    setStyle = function(style) {
        this.cite.setAttribute("style", style);
    }
    getAPI = function() {
        return this.cite.getAPI();
    }
    create = function(at) {
        if(at!=null) {
            document.getElementById(at).append(this.cite.getAPI());
        }else{
            document.body.append(this.cite.getAPI());
        }
    }
}
class I {
    constructor() {
        this.cite = new Custom("i");
    }
    setText = function(text) {
        this.cite.getAPI().textContent=text;
    }
    setId = function(id) {
        this.cite.setAttribute("id", id);
    }
    setClass = function(classs) {
        this.cite.setAttribute("class", classs);
    }
    setStyle = function(style) {
        this.cite.setAttribute("style", style);
    }
    getAPI = function() {
        return this.cite.getAPI();
    }
    create = function(at) {
        if(at!=null) {
            document.getElementById(at).append(this.cite.getAPI());
        }else{
            document.body.append(this.cite.getAPI());
        }
    }
}
class Input {
    constructor() {
        this.input = new Custom("input");
    }
    setAccept = function(accept) {
        this.input.getAPI().setAttribute("accept", accept);
    }
    setAlt = function(text) {
        this.input.getAPI().setAttribute("alt", text);
    }
    setAutoComplete = function() {
        this.input.getAPI().setAttribute("autocomplete", "on");
    }
    setAutoFocus = function() {
        this.input.getAPI().setAttribute("autofocus", "autofocus");
    }
    setChecked = function(val) {
        if(val) {
            this.input.getAPI().setAttribute("checked", "true");
        }else{
            this.input.getAPI().removeAttribute("checked");
        }
    }
    setDirname = function(name) {
        this.input.setAttribute("dirname", name);
    }
    setDisabled = function() {
        this.input.setAttribute("disabled", "true");
    }
    setForm = function(form) {
        this.input.setAttribute("form", form);
    }
    setFormaction = function(url) {
        this.input.setAttribute("formaction", url);
    }
    setFormNoValidate = function() {
        this.input.setAttribute("formnovalidate", "true");
    }
    setFormTarget = function(target) {
        this.input.setAttribute("formtarget", target);
    }
    setHeight = function(height) {
        this.input.setAttribute("height", height);
    }
    setWidth = function(width) {
        this.input.setAttribute("width", width);
    }
    setList = function(id) {
        this.input.setAttribute("list", id);
    }
    setMax = function(thing) {
        this.input.setAttribute("max", thing);
    }
    setMaxLength = function(length) {
        this.input.setAttribute("maxlength", length);
    }
    setMin = function(thing) {
        this.input.setAttribute("min", thing);
    }
    setMinLength = function(length) {
        this.input.setAttribute("minlength", length);
    }
    setMultiple = function() {
        this.input.setAttribute("multiple", "true");
    }
    setName = function(name) {
        this.input.setAttribute("name", name);
    }
    setPattern = function(regex) {
        this.input.setAttribute("pattern", regex);
    }
    setPlaceholder = function(placeholder) {
        this.input.setAttribute("placeholder", placeholder);
    }
    setReadonly = function() {
        this.input.setAttribute("readonly", "true");
    }
    setRequired = function() {
        this.input.setAttribute("required", "true");
    }
    setSize = function(size) {
        this.input.setAttribute("size", size);
    }
    setSrc = function(src) {
        this.input.setAttribute("src", src);
    }
    setType = function(type) {
        this.input.setAttribute("type", type);
    }
    setValue = function(text) {
        this.input.setAttribute("value", text);
    }
    setText = function(text) {
        this.input.getAPI().textContent=text;
    }
    setId = function(id) {
        this.input.setAttribute("id", id);
    }
    setClass = function(classs) {
        this.input.setAttribute("class", classs);
    }
    setStyle = function(style) {
        this.input.setAttribute("style", style);
    }
    getAPI = function() {
        return this.input.getAPI();
    }
    create = function(at) {
        if(at!=null) {
            document.getElementById(at).append(this.input.getAPI());
        }else{
            document.body.append(this.input.getAPI());
        }
    }
}
class Ins {
    constructor() {
        this.cite = new Custom("ins");
    }
    setCite = function(url) {
        this.cite.setAttribute("cite", url);
    }
    setDateTime = function(format) {
        this.cite.setAttribute("datetime", format);
    }
    setText = function(text) {
        this.cite.getAPI().textContent=text;
    }
    setId = function(id) {
        this.cite.setAttribute("id", id);
    }
    setClass = function(classs) {
        this.cite.setAttribute("class", classs);
    }
    setStyle = function(style) {
        this.cite.setAttribute("style", style);
    }
    getAPI = function() {
        return this.cite.getAPI();
    }
    create = function(at) {
        if(at!=null) {
            document.getElementById(at).append(this.cite.getAPI());
        }else{
            document.body.append(this.cite.getAPI());
        }
    }
}
class Kbd {
    constructor() {
        this.cite = new Custom("kbd");
    }
    setText = function(text) {
        this.cite.getAPI().textContent=text;
    }
    setId = function(id) {
        this.cite.setAttribute("id", id);
    }
    setClass = function(classs) {
        this.cite.setAttribute("class", classs);
    }
    setStyle = function(style) {
        this.cite.setAttribute("style", style);
    }
    getAPI = function() {
        return this.cite.getAPI();
    }
    create = function(at) {
        if(at!=null) {
            document.getElementById(at).append(this.cite.getAPI());
        }else{
            document.body.append(this.cite.getAPI());
        }
    }
}
class Label {
    constructor() {
        this.cite = new Custom("label");
    }
    setText = function(text) {
        this.cite.getAPI().textContent=text;
    }
    setType = function(type) {
        this.cite.setAttribute("type", type);
    }
    setFor = function(fo) {
        this.cite.setAttribute("for", fo);
    }
    setId = function(id) {
        this.cite.setAttribute("id", id);
    }
    setClass = function(classs) {
        this.cite.setAttribute("class", classs);
    }
    setStyle = function(style) {
        this.cite.setAttribute("style", style);
    }
    getAPI = function() {
        return this.cite.getAPI();
    }
    create = function(at) {
        if(at!=null) {
            document.getElementById(at).append(this.cite.getAPI());
        }else{
            document.body.append(this.cite.getAPI());
        }
    }
}
class Legend {
    constructor() {
        this.cite = new Custom("legend");
    }
    setText = function(text) {
        this.cite.getAPI().textContent=text;
    }
    addInner = function(html) {
        this.cite.getAPI().append(html.getAPI());
    }
    setId = function(id) {
        this.cite.setAttribute("id", id);
    }
    setClass = function(classs) {
        this.cite.setAttribute("class", classs);
    }
    setStyle = function(style) {
        this.cite.setAttribute("style", style);
    }
    getAPI = function() {
        return this.cite.getAPI();
    }
    create = function(at) {
        if(at!=null) {
            document.getElementById(at).append(this.cite.getAPI());
        }else{
            document.body.append(this.cite.getAPI());
        }
    }
}
class Li {
    constructor() {
        this.cite = new Custom("li");
    }
    setText = function(text) {
        this.cite.getAPI().textContent=text;
    }
    setId = function(id) {
        this.cite.setAttribute("id", id);
    }
    setClass = function(classs) {
        this.cite.setAttribute("class", classs);
    }
    setStyle = function(style) {
        this.cite.setAttribute("style", style);
    }
    addInner = function(html) {
        this.cite.getAPI().append(html.getAPI());
    }
    getAPI = function() {
        return this.cite.getAPI();
    }
    create = function(at) {
        if(at!=null) {
            document.getElementById(at).append(this.cite.getAPI());
        }else{
            document.body.append(this.cite.getAPI());
        }
    }
}
class Main {
    constructor() {
        this.cite = new Custom("main");
    }
    setId = function(id) {
        this.cite.setAttribute("id", id);
    }
    setClass = function(classs) {
        this.cite.setAttribute("class", classs);
    }
    setStyle = function(style) {
        this.cite.setAttribute("style", style);
    }
    addInner = function(html) {
        this.cite.getAPI().append(html.getAPI());
    }
    getAPI = function() {
        return this.cite.getAPI();
    }
    create = function(at) {
        if(at!=null) {
            document.getElementById(at).append(this.cite.getAPI());
        }else{
            document.body.append(this.cite.getAPI());
        }
    }
}
class Map {
    constructor() {
        this.cite = new Custom("map");
    }
    setName = function(name) {
        this.cite.setAttribute("name", name);
    }
    setId = function(id) {
        this.cite.setAttribute("id", id);
    }
    setClass = function(classs) {
        this.cite.setAttribute("class", classs);
    }
    setStyle = function(style) {
        this.cite.setAttribute("style", style);
    }
    addInner = function(html) {
        this.cite.getAPI().append(html.getAPI());
    }
    getAPI = function() {
        return this.cite.getAPI();
    }
    create = function(at) {
        if(at!=null) {
            document.getElementById(at).append(this.cite.getAPI());
        }else{
            document.body.append(this.cite.getAPI());
        }
    }
}
class Mark {
    constructor() {
        this.cite = new Custom("mark");
    }
    setText = function(text) {
        this.cite.getAPI().textContent=text;
    }
    setId = function(id) {
        this.cite.setAttribute("id", id);
    }
    setClass = function(classs) {
        this.cite.setAttribute("class", classs);
    }
    setStyle = function(style) {
        this.cite.setAttribute("style", style);
    }
    addInner = function(html) {
        this.cite.getAPI().append(html.getAPI());
    }
    getAPI = function() {
        return this.cite.getAPI();
    }
    create = function(at) {
        if(at!=null) {
            document.getElementById(at).append(this.cite.getAPI());
        }else{
            document.body.append(this.cite.getAPI());
        }
    }
}
class Meta {
    constructor() {
        this.cite = new Custom("meta");
    }
    setCharset = function(charset) {
        this.cite.setAttribute("charset", charset);
    }
    setContent = function(text) {
        this.cite.setAttribute("content", text);
    }
    setHttpEquiv = function(type) {
        this.cite.setAttribute("http-equiv", type);
    }
    setName = function(name) {
        this.cite.setAttribute("name", name);
    }
    setId = function(id) {
        this.cite.setAttribute("id", id);
    }
    setClass = function(classs) {
        this.cite.setAttribute("class", classs);
    }
    setStyle = function(style) {
        this.cite.setAttribute("style", style);
    }
    getAPI = function() {
        return this.cite.getAPI();
    }
    create = function(at) {
        document.head.append(this.cite.getAPI());
    }
}
class Meter {
    constructor() {
        this.cite = new Custom("meter");
    }
    setText = function(text) {
        this.cite.getAPI().textContent=text;
    }
    setForm = function(id) {
        this.cite.setAttribute("form", id);
    }
    setHigh = function(value) {
        this.cite.setAttribute("high", value);
    }
    setLow = function(value) {
        this.cite.setAttribute("low", value);
    }
    setMax = function(value) {
        this.cite.setAttribute("max", value);
    }
    setMin = function(value) {
        this.cite.setAttribute("min", value);
    }
    setOptimum = function(value) {
        this.cite.setAttribute("optimum", value);
    }
    setValue = function(value) {
        this.cite.setAttribute("value", value);
    }
    setId = function(id) {
        this.cite.setAttribute("id", id);
    }
    setClass = function(classs) {
        this.cite.setAttribute("class", classs);
    }
    setStyle = function(style) {
        this.cite.setAttribute("style", style);
    }
    getAPI = function() {
        return this.cite.getAPI();
    }
    create = function(at) {
        if(at!=null) {
            document.getElementById(at).append(this.cite.getAPI());
        }else{
            document.body.append(this.cite.getAPI());
        }
    }
}
class Nav {
    constructor() {
        this.cite = new Custom("nav");
    }
    setId = function(id) {
        this.cite.setAttribute("id", id);
    }
    setClass = function(classs) {
        this.cite.setAttribute("class", classs);
    }
    setStyle = function(style) {
        this.cite.setAttribute("style", style);
    }
    addInner = function(html) {
        this.cite.getAPI().append(html.getAPI());
    }
    getAPI = function() {
        return this.cite.getAPI();
    }
    create = function(at) {
        if(at!=null) {
            document.getElementById(at).append(this.cite.getAPI());
        }else{
            document.body.append(this.cite.getAPI());
        }
    }
}
class NoFrames {
    constructor() {
        NotInHTML5(this);
    }
}
class NoScript {
    constructor() {
        new Logger().info("Why are you generating a noscript with JS?! Thats not possible..... Noob!");
    }
}
class ObjectTag {
    constructor() {
        NotImplemented(this);
    }
}
class Ol {
    constructor() {
        this.cite = new Custom("ol");
    }
    setId = function(id) {
        this.cite.setAttribute("id", id);
    }
    setClass = function(classs) {
        this.cite.setAttribute("class", classs);
    }
    setStyle = function(style) {
        this.cite.setAttribute("style", style);
    }
    addInner = function(html) {
        this.cite.getAPI().append(html.getAPI());
    }
    setReversed = function() {
        this.cite.setAttribute("reversed", "true");
    }
    setStart = function(value) {
        this.cite.setAttribute("start", value);
    }
    setType = function(type) {
        this.cite.setAttribute("type", type);
    }
    getAPI = function() {
        return this.cite.getAPI();
    }
    create = function(at) {
        if(at!=null) {
            document.getElementById(at).append(this.cite.getAPI());
        }else{
            document.body.append(this.cite.getAPI());
        }
    }
}
class OptGroup {
    constructor() {
        this.cite = new Custom("optgroup");
    }
    setId = function(id) {
        this.cite.setAttribute("id", id);
    }
    setDisabled = function() {
        this.cite.setAttribute("disabled", "true");
    }
    setLabel = function(label) {
        this.cite.setAttribute("label", label);
    } 
    setClass = function(classs) {
        this.cite.setAttribute("class", classs);
    }
    setStyle = function(style) {
        this.cite.setAttribute("style", style);
    }
    addInner = function(html) {
        this.cite.getAPI().append(html.getAPI());
    }
    getAPI = function() {
        return this.cite.getAPI();
    }
    create = function(at) {
        if(at!=null) {
            document.getElementById(at).append(this.cite.getAPI());
        }else{
            document.body.append(this.cite.getAPI());
        }
    }
}
class Option {
    constructor() {
        this.cite = new Custom("option");
    }
    setText = function(text) {
        this.cite.getAPI().textContent=text;
    }
    setId = function(id) {
        this.cite.setAttribute("id", id);
    }
    setDisabled = function() {
        this.cite.setAttribute("disabled", "true");
    }
    setLabel = function(label) {
        this.cite.setAttribute("label", label);
    } 
    setSelected = function() {
        this.cite.setAttribute("selected", "true");
    }
    setValue = function(value) {
        this.cite.setAttribute("value", value);
    }
    setClass = function(classs) {
        this.cite.setAttribute("class", classs);
    }
    setStyle = function(style) {
        this.cite.setAttribute("style", style);
    }
    addInner = function(html) {
        this.cite.getAPI().append(html.getAPI());
    }
    getAPI = function() {
        return this.cite.getAPI();
    }
    create = function(at) {
        if(at!=null) {
            document.getElementById(at).append(this.cite.getAPI());
        }else{
            document.body.append(this.cite.getAPI());
        }
    }
}
class Output {
    constructor() {
        this.cite = new Custom("output");
    }
    setId = function(id) {
        this.cite.setAttribute("id", id);
    }
    setFor = function(id) {
        this.cite.setAttribute("for", id);
    }
    setForm = function(id) {
        this.cite.setAttribute("form", id);
    }
    setName = function(name) {
        this.cite.setAttribute("name", name);
    }
    setClass = function(classs) {
        this.cite.setAttribute("class", classs);
    }
    setStyle = function(style) {
        this.cite.setAttribute("style", style);
    }
    getAPI = function() {
        return this.cite.getAPI();
    }
    create = function(at) {
        if(at!=null) {
            document.getElementById(at).append(this.cite.getAPI());
        }else{
            document.body.append(this.cite.getAPI());
        }
    }
}
class P {
    constructor() {
        this.cite = new Custom("p");
    }
    setId = function(id) {
        this.cite.setAttribute("id", id);
    }
    setClass = function(classs) {
        this.cite.setAttribute("class", classs);
    }
    setStyle = function(style) {
        this.cite.setAttribute("style", style);
    }
    addInner = function(html) {
        this.cite.getAPI().append(html.getAPI());
    }
    getAPI = function() {
        return this.cite.getAPI();
    }
    create = function(at) {
        if(at!=null) {
            document.getElementById(at).append(this.cite.getAPI());
        }else{
            document.body.append(this.cite.getAPI());
        }
    }
}
class Param {
    constructor() {
        this.cite = new Custom("param");
    }
    setId = function(id) {
        this.cite.setAttribute("id", id);
    }
    setName = function(name) {
        this.cite.setAttribute("name", name);
    }
    setValue = function(value) {
        this.cite.setAttribute("value", value);
    }
    setClass = function(classs) {
        this.cite.setAttribute("class", classs);
    }
    setStyle = function(style) {
        this.cite.setAttribute("style", style);
    }
    addInner = function(html) {
        this.cite.getAPI().append(html.getAPI());
    }
    getAPI = function() {
        return this.cite.getAPI();
    }
    create = function(at) {
        if(at!=null) {
            document.getElementById(at).append(this.cite.getAPI());
        }else{
            document.body.append(this.cite.getAPI());
        }
    }
}
class Picture {
    constructor() {
        this.cite = new Custom("picture");
    }
    setId = function(id) {
        this.cite.setAttribute("id", id);
    }
    setClass = function(classs) {
        this.cite.setAttribute("class", classs);
    }
    setStyle = function(style) {
        this.cite.setAttribute("style", style);
    }
    addInner = function(html) {
        this.cite.getAPI().append(html.getAPI());
    }
    getAPI = function() {
        return this.cite.getAPI();
    }
    create = function(at) {
        if(at!=null) {
            document.getElementById(at).append(this.cite.getAPI());
        }else{
            document.body.append(this.cite.getAPI());
        }
    }
}
class Pre {
    constructor() {
        this.cite = new Custom("pre");
    }
    setId = function(id) {
        this.cite.setAttribute("id", id);
    }
    setClass = function(classs) {
        this.cite.setAttribute("class", classs);
    }
    setStyle = function(style) {
        this.cite.setAttribute("style", style);
    }
    addInner = function(html) {
        this.cite.getAPI().append(html.getAPI());
    }
    setText = function(text) {
        this.cite.getAPI().innerHTML=text;
    }
    getAPI = function() {
        return this.cite.getAPI();
    }
    create = function(at) {
        if(at!=null) {
            document.getElementById(at).append(this.cite.getAPI());
        }else{
            document.body.append(this.cite.getAPI());
        }
    }
}
class Progress {
    constructor() {
        this.cite = new Custom("progress");
    }
    setId = function(id) {
        this.cite.setAttribute("id", id);
    }
    setValue = function(value) {
        this.cite.setAttribute("value", value);
    }
    setMax = function(value) {
        this.cite.setAttribute("max", value);
    }
    setClass = function(classs) {
        this.cite.setAttribute("class", classs);
    }
    setStyle = function(style) {
        this.cite.setAttribute("style", style);
    }
    getAPI = function() {
        return this.cite.getAPI();
    }
    create = function(at) {
        if(at!=null) {
            document.getElementById(at).append(this.cite.getAPI());
        }else{
            document.body.append(this.cite.getAPI());
        }
    }
}
class Q {
    constructor() {
        this.cite = new Custom("q");
    }
    setId = function(id) {
        this.cite.setAttribute("id", id);
    }
    setClass = function(classs) {
        this.cite.setAttribute("class", classs);
    }
    setStyle = function(style) {
        this.cite.setAttribute("style", style);
    }
    addInner = function(html) {
        this.cite.getAPI().append(html.getAPI());
    }
    setText = function(text) {
        this.cite.getAPI().textContent=text;
    }
    getAPI = function() {
        return this.cite.getAPI();
    }
    create = function(at) {
        if(at!=null) {
            document.getElementById(at).append(this.cite.getAPI());
        }else{
            document.body.append(this.cite.getAPI());
        }
    }
}
class Rp {
    constructor() {
        this.cite = new Custom("rp");
    }
    setId = function(id) {
        this.cite.setAttribute("id", id);
    }
    setClass = function(classs) {
        this.cite.setAttribute("class", classs);
    }
    setStyle = function(style) {
        this.cite.setAttribute("style", style);
    }
    addInner = function(html) {
        this.cite.getAPI().append(html.getAPI());
    }
    setText = function(text) {
        this.cite.getAPI().textContent=text;
    }
    getAPI = function() {
        return this.cite.getAPI();
    }
    create = function(at) {
        if(at!=null) {
            document.getElementById(at).append(this.cite.getAPI());
        }else{
            document.body.append(this.cite.getAPI());
        }
    }
}
class Rt {
    constructor() {
        this.cite = new Custom("rt");
    }
    setId = function(id) {
        this.cite.setAttribute("id", id);
    }
    setClass = function(classs) {
        this.cite.setAttribute("class", classs);
    }
    setStyle = function(style) {
        this.cite.setAttribute("style", style);
    }
    setText = function(text) {
        this.cite.getAPI().textContent=text;
    }
    getAPI = function() {
        return this.cite.getAPI();
    }
    create = function(at) {
        if(at!=null) {
            document.getElementById(at).append(this.cite.getAPI());
        }else{
            document.body.append(this.cite.getAPI());
        }
    }
}
class Ruby {
    constructor() {
        this.cite = new Custom("ruby");
    }
    setId = function(id) {
        this.cite.setAttribute("id", id);
    }
    setClass = function(classs) {
        this.cite.setAttribute("class", classs);
    }
    setStyle = function(style) {
        this.cite.setAttribute("style", style);
    }
    addInner = function(html) {
        this.cite.getAPI().append(html.getAPI());
    }
    getAPI = function() {
        return this.cite.getAPI();
    }
    create = function(at) {
        if(at!=null) {
            document.getElementById(at).append(this.cite.getAPI());
        }else{
            document.body.append(this.cite.getAPI());
        }
    }
}
class S {
    constructor() {
        this.cite = new Custom("s");
    }
    setId = function(id) {
        this.cite.setAttribute("id", id);
    }
    setClass = function(classs) {
        this.cite.setAttribute("class", classs);
    }
    setStyle = function(style) {
        this.cite.setAttribute("style", style);
    }
    addInner = function(html) {
        this.cite.getAPI().append(html.getAPI());
    }
    setText = function(text) {
        this.cite.getAPI().textContent=text;
    }
    getAPI = function() {
        return this.cite.getAPI();
    }
    create = function(at) {
        if(at!=null) {
            document.getElementById(at).append(this.cite.getAPI());
        }else{
            document.body.append(this.cite.getAPI());
        }
    }
}
class Samp {
    constructor() {
        this.cite = new Custom("samp");
    }
    setId = function(id) {
        this.cite.setAttribute("id", id);
    }
    setClass = function(classs) {
        this.cite.setAttribute("class", classs);
    }
    setStyle = function(style) {
        this.cite.setAttribute("style", style);
    }
    addInner = function(html) {
        this.cite.getAPI().append(html.getAPI());
    }
    setText = function(text) {
        this.cite.getAPI().textContent=text;
    }
    getAPI = function() {
        return this.cite.getAPI();
    }
    create = function(at) {
        if(at!=null) {
            document.getElementById(at).append(this.cite.getAPI());
        }else{
            document.body.append(this.cite.getAPI());
        }
    }
}
class Section {
    constructor() {
        this.cite = new Custom("section");
    }
    setId = function(id) {
        this.cite.setAttribute("id", id);
    }
    setClass = function(classs) {
        this.cite.setAttribute("class", classs);
    }
    setStyle = function(style) {
        this.cite.setAttribute("style", style);
    }
    addInner = function(html) {
        this.cite.getAPI().append(html.getAPI());
    }
    getAPI = function() {
        return this.cite.getAPI();
    }
    create = function(at) {
        if(at!=null) {
            document.getElementById(at).append(this.cite.getAPI());
        }else{
            document.body.append(this.cite.getAPI());
        }
    }
}
class Select {
    constructor() {
        this.cite = new Custom("select");
    }
    setAutoFocus = function() {
        this.cite.setAttribute("autofocus", "true");
    }
    setDisabled = function() {
        this.cite.setAttribute("disabled", "true");
    }
    setForm = function(id) {
        this.cite.setAttribute("form", id);
    }
    setMultiple = function() {
        this.cite.setAttribute("multiple", "true");
    }
    setName = function(name) {
        this.cite.setAttribute("name", name);
    }
    setRequired = function() {
        this.cite.setAttribute("required", "true");
    }
    setSize = function(size) {
        this.cite.setAttribute("size", size);
    }
    setId = function(id) {
        this.cite.setAttribute("id", id);
    }
    setClass = function(classs) {
        this.cite.setAttribute("class", classs);
    }
    setStyle = function(style) {
        this.cite.setAttribute("style", style);
    }
    addInner = function(html) {
        this.cite.getAPI().append(html.getAPI());
    }
    getAPI = function() {
        return this.cite.getAPI();
    }
    create = function(at) {
        if(at!=null) {
            document.getElementById(at).append(this.cite.getAPI());
        }else{
            document.body.append(this.cite.getAPI());
        }
    }
}
class Small {
    constructor() {
        this.cite = new Custom("small");
    }
    setId = function(id) {
        this.cite.setAttribute("id", id);
    }
    setClass = function(classs) {
        this.cite.setAttribute("class", classs);
    }
    setStyle = function(style) {
        this.cite.setAttribute("style", style);
    }
    setText = function(text) {
        this.cite.getAPI().textContent=text;
    }
    getAPI = function() {
        return this.cite.getAPI();
    }
    create = function(at) {
        if(at!=null) {
            document.getElementById(at).append(this.cite.getAPI());
        }else{
            document.body.append(this.cite.getAPI());
        }
    }
}
class Source {
    constructor() {
        this.cite = new Custom("source");
    }
    setMedia = function(media) {
        this.cite.setAttribute("media", media);
    }
    setSizes = function(sizes) {
        this.cite.setAttribute("sizes", sizes);
    }
    setSrc = function(src) {
        this.cite.setAttribute("src", src);
    }
    setSrcset = function(set) {
        this.cite.setAttribute("srcset", set);
    }
    setType = function(type) {
        this.cite.setAttribute("type", type);
    }
    setId = function(id) {
        this.cite.setAttribute("id", id);
    }
    setClass = function(classs) {
        this.cite.setAttribute("class", classs);
    }
    setStyle = function(style) {
        this.cite.setAttribute("style", style);
    }
    getAPI = function() {
        return this.cite.getAPI();
    }
    create = function(at) {
        if(at!=null) {
            document.getElementById(at).append(this.cite.getAPI());
        }else{
            document.body.append(this.cite.getAPI());
        }
    }
}
class Span {
    constructor() {
        this.cite = new Custom("span");
    }
    setId = function(id) {
        this.cite.setAttribute("id", id);
    }
    setClass = function(classs) {
        this.cite.setAttribute("class", classs);
    }
    setStyle = function(style) {
        this.cite.setAttribute("style", style);
    }
    setText = function(text) {
        this.cite.getAPI().textContent=text;
    }
    addInner = function(html) {
        this.cite.getAPI().append(html.getAPI());
    }
    getAPI = function() {
        return this.cite.getAPI();
    }
    create = function(at) {
        if(at!=null) {
            document.getElementById(at).append(this.cite.getAPI());
        }else{
            document.body.append(this.cite.getAPI());
        }
    }
}
class Strike {
    constructor() {
        NotInHTML5(this);
    }
}
class Strong {
    constructor() {
        this.cite = new Custom("strong");
    }
    setId = function(id) {
        this.cite.setAttribute("id", id);
    }
    setClass = function(classs) {
        this.cite.setAttribute("class", classs);
    }
    setStyle = function(style) {
        this.cite.setAttribute("style", style);
    }
    setText = function(text) {
        this.cite.getAPI().textContent=text;
    }
    addInner = function(html) {
        this.cite.getAPI().append(html.getAPI());
    }
    getAPI = function() {
        return this.cite.getAPI();
    }
    create = function(at) {
        if(at!=null) {
            document.getElementById(at).append(this.cite.getAPI());
        }else{
            document.body.append(this.cite.getAPI());
        }
    }
}
class Sub {
    constructor() {
        this.cite = new Custom("sub");
    }
    setId = function(id) {
        this.cite.setAttribute("id", id);
    }
    setClass = function(classs) {
        this.cite.setAttribute("class", classs);
    }
    setStyle = function(style) {
        this.cite.setAttribute("style", style);
    }
    setText = function(text) {
        this.cite.getAPI().textContent=text;
    }
    getAPI = function() {
        return this.cite.getAPI();
    }
    create = function(at) {
        if(at!=null) {
            document.getElementById(at).append(this.cite.getAPI());
        }else{
            document.body.append(this.cite.getAPI());
        }
    }
}
class Summary {
    constructor() {
        this.cite = new Custom("summary");
    }
    setId = function(id) {
        this.cite.setAttribute("id", id);
    }
    setClass = function(classs) {
        this.cite.setAttribute("class", classs);
    }
    setStyle = function(style) {
        this.cite.setAttribute("style", style);
    }
    addInner = function(html) {
        this.cite.getAPI().append(html.getAPI());
    }
    setText = function(text) {
        this.cite.getAPI().textContent=text;
    }
    getAPI = function() {
        return this.cite.getAPI();
    }
    create = function(at) {
        if(at!=null) {
            document.getElementById(at).append(this.cite.getAPI());
        }else{
            document.body.append(this.cite.getAPI());
        }
    }
}
class Sup {
    constructor() {
        this.cite = new Custom("sup");
    }
    setId = function(id) {
        this.cite.setAttribute("id", id);
    }
    setClass = function(classs) {
        this.cite.setAttribute("class", classs);
    }
    setStyle = function(style) {
        this.cite.setAttribute("style", style);
    }
    addInner = function(html) {
        this.cite.getAPI().append(html.getAPI());
    }
    getAPI = function() {
        return this.cite.getAPI();
    }
    create = function(at) {
        if(at!=null) {
            document.getElementById(at).append(this.cite.getAPI());
        }else{
            document.body.append(this.cite.getAPI());
        }
    }
}
class Svg {
    constructor() {
        this.cite = new Custom("svg");
    }
    setId = function(id) {
        this.cite.setAttribute("id", id);
    }
    setClass = function(classs) {
        this.cite.setAttribute("class", classs);
    }
    setStyle = function(style) {
        this.cite.setAttribute("style", style);
    }
    addInner = function(html) {
        this.cite.getAPI().append(html.getAPI());
    }
    setWidth = function(width) {
        this.cite.setAttribute("width", width);
    }
    setHeight = function(height) {
        this.cite.setAttribute("height", height);
    }
    getAPI = function() {
        return this.cite.getAPI();
    }
    create = function(at) {
        if(at!=null) {
            document.getElementById(at).append(this.cite.getAPI());
        }else{
            document.body.append(this.cite.getAPI());
        }
    }
}
class Table {
    constructor() {
        this.cite = new Custom("table");
    }
    setId = function(id) {
        this.cite.setAttribute("id", id);
    }
    setClass = function(classs) {
        this.cite.setAttribute("class", classs);
    }
    setStyle = function(style) {
        this.cite.setAttribute("style", style);
    }
    addInner = function(html) {
        this.cite.getAPI().append(html.getAPI());
    }
    getAPI = function() {
        return this.cite.getAPI();
    }
    create = function(at) {
        if(at!=null) {
            document.getElementById(at).append(this.cite.getAPI());
        }else{
            document.body.append(this.cite.getAPI());
        }
    }
}
class TBody {
    constructor() {
        this.cite = new Custom("tbody");
    }
    setId = function(id) {
        this.cite.setAttribute("id", id);
    }
    setClass = function(classs) {
        this.cite.setAttribute("class", classs);
    }
    setStyle = function(style) {
        this.cite.setAttribute("style", style);
    }
    addInner = function(html) {
        this.cite.getAPI().append(html.getAPI());
    }
    getAPI = function() {
        return this.cite.getAPI();
    }
    create = function(at) {
        if(at!=null) {
            document.getElementById(at).append(this.cite.getAPI());
        }else{
            document.body.append(this.cite.getAPI());
        }
    }
}
class Td {
    constructor() {
        this.cite = new Custom("td");
    }
    setId = function(id) {
        this.cite.setAttribute("id", id);
    }
    setClass = function(classs) {
        this.cite.setAttribute("class", classs);
    }
    setStyle = function(style) {
        this.cite.setAttribute("style", style);
    }
    addInner = function(html) {
        this.cite.getAPI().append(html.getAPI());
    }
    setText = function(text) {
        this.cite.getAPI().textContent=text;
    }
    getAPI = function() {
        return this.cite.getAPI();
    }
    create = function(at) {
        if(at!=null) {
            document.getElementById(at).append(this.cite.getAPI());
        }else{
            document.body.append(this.cite.getAPI());
        }
    }
}
class Template {
    constructor() {
        this.cite = new Custom("template");
    }
    setId = function(id) {
        this.cite.setAttribute("id", id);
    }
    setClass = function(classs) {
        this.cite.setAttribute("class", classs);
    }
    setStyle = function(style) {
        this.cite.setAttribute("style", style);
    }
    addInner = function(html) {
        this.cite.getAPI().append(html.getAPI());
    }
    getAPI = function() {
        return this.cite.getAPI();
    }
    create = function(at) {
        if(at!=null) {
            document.getElementById(at).append(this.cite.getAPI());
        }else{
            document.body.append(this.cite.getAPI());
        }
    }
}
class Textarea {
    constructor() {
        this.cite = new Custom("textarea");
    }
    setAutoFocus = function() {
        this.cite.setAttribute("autofocus", "true");
    }
    setCols = function(value) {
        this.cite.setAttribute("cols", value);
    }
    setDirname = function(name) {
        this.cite.setAttribute("dirname", name);
    }
    setDisabled = function() {
        this.cite.setAttribute("disabled", "true");
    }
    setForm = function(id) {
        this.cite.setAttribute("form", id);
    }
    setMaxLength = function(length) {
        this.cite.setAttribute("maxlength", length);
    }
    setName = function(name) {
        this.cite.setAttribute("name", name);
    }
    setPlaceholder = function(placeholder) {
        this.cite.setAttribute("placeholder", placeholder);
    }
    setReadonly = function() {
        this.cite.setAttribute("readonly", "true");
    }
    setRequired = function() {
        this.cite.setAttribute("required", "true");
    }
    setRows = function(value) {
        this.cite.setAttribute("rows", value);
    }
    setWrap = function(type) {
        this.cite.setAttribute("wrap", type);
    }
    setId = function(id) {
        this.cite.setAttribute("id", id);
    }
    setClass = function(classs) {
        this.cite.setAttribute("class", classs);
    }
    setStyle = function(style) {
        this.cite.setAttribute("style", style);
    }
    addInner = function(html) {
        this.cite.getAPI().append(html.getAPI());
    }
    getAPI = function() {
        return this.cite.getAPI();
    }
    create = function(at) {
        if(at!=null) {
            document.getElementById(at).append(this.cite.getAPI());
        }else{
            document.body.append(this.cite.getAPI());
        }
    }
}
class TFoot {
    constructor() {
        this.cite = new Custom("tfoot");
    }
    setId = function(id) {
        this.cite.setAttribute("id", id);
    }
    setClass = function(classs) {
        this.cite.setAttribute("class", classs);
    }
    setStyle = function(style) {
        this.cite.setAttribute("style", style);
    }
    addInner = function(html) {
        this.cite.getAPI().append(html.getAPI());
    }
    getAPI = function() {
        return this.cite.getAPI();
    }
    create = function(at) {
        if(at!=null) {
            document.getElementById(at).append(this.cite.getAPI());
        }else{
            document.body.append(this.cite.getAPI());
        }
    }
}
class Th {
    constructor() {
        this.cite = new Custom("th");
    }
    setId = function(id) {
        this.cite.setAttribute("id", id);
    }
    setClass = function(classs) {
        this.cite.setAttribute("class", classs);
    }
    setStyle = function(style) {
        this.cite.setAttribute("style", style);
    }
    addInner = function(html) {
        this.cite.getAPI().append(html.getAPI());
    }
    setText = function(text) {
        this.cite.getAPI().textContent=text;
    }
    getAPI = function() {
        return this.cite.getAPI();
    }
    create = function(at) {
        if(at!=null) {
            document.getElementById(at).append(this.cite.getAPI());
        }else{
            document.body.append(this.cite.getAPI());
        }
    }
}
class THead {
    constructor() {
        this.cite = new Custom("thead");
    }
    setId = function(id) {
        this.cite.setAttribute("id", id);
    }
    setClass = function(classs) {
        this.cite.setAttribute("class", classs);
    }
    setStyle = function(style) {
        this.cite.setAttribute("style", style);
    }
    addInner = function(html) {
        this.cite.getAPI().append(html.getAPI());
    }
    getAPI = function() {
        return this.cite.getAPI();
    }
    create = function(at) {
        if(at!=null) {
            document.getElementById(at).append(this.cite.getAPI());
        }else{
            document.body.append(this.cite.getAPI());
        }
    }
}
class Time {
    constructor() {
        this.cite = new Custom("time");
    }
    setId = function(id) {
        this.cite.setAttribute("id", id);
    }
    setDateTime = function(datetime) {
        this.cite.setAttribute("datetime", datetime);
    }
    setClass = function(classs) {
        this.cite.setAttribute("class", classs);
    }
    setStyle = function(style) {
        this.cite.setAttribute("style", style);
    }
    setText = function(text) {
        this.cite.getAPI().innerHTML=text;
    }
    getAPI = function() {
        return this.cite.getAPI();
    }
    create = function(at) {
        if(at!=null) {
            document.getElementById(at).append(this.cite.getAPI());
        }else{
            document.body.append(this.cite.getAPI());
        }
    }
}
class Tr {
    constructor() {
        this.cite = new Custom("tr");
    }
    setId = function(id) {
        this.cite.setAttribute("id", id);
    }
    setClass = function(classs) {
        this.cite.setAttribute("class", classs);
    }
    setStyle = function(style) {
        this.cite.setAttribute("style", style);
    }
    addInner = function(html) {
        this.cite.getAPI().append(html.getAPI());
    }
    getAPI = function() {
        return this.cite.getAPI();
    }
    create = function(at) {
        if(at!=null) {
            document.getElementById(at).append(this.cite.getAPI());
        }else{
            document.body.append(this.cite.getAPI());
        }
    }
}
class Track {
    constructor() {
        this.cite = new Custom("track");
    }
    setDefault = function() {
        this.cite.setAttribute("default", "true");
    }
    setKind = function(type) {
        this.cite.setAttribute("kind", type);
    }
    setLabel = function(text) {
        this.cite.setAttribute("label", text);
    }
    setSrc = function(src) {
        this.cite.setAttribute("src", src);
    }
    setSrcLang = function(lang) {
        this.cite.setAttribute("srclang", lang);
    }
    setId = function(id) {
        this.cite.setAttribute("id", id);
    }
    setClass = function(classs) {
        this.cite.setAttribute("class", classs);
    }
    setStyle = function(style) {
        this.cite.setAttribute("style", style);
    }
    addInner = function(html) {
        this.cite.getAPI().append(html.getAPI());
    }
    getAPI = function() {
        return this.cite.getAPI();
    }
    create = function(at) {
        if(at!=null) {
            document.getElementById(at).append(this.cite.getAPI());
        }else{
            document.body.append(this.cite.getAPI());
        }
    }
}
class Tt {
    constructor() {
        NotInHTML5(this);
    }
}
class U {
    constructor() {
        this.cite = new Custom("u");
    }
    setId = function(id) {
        this.cite.setAttribute("id", id);
    }
    setClass = function(classs) {
        this.cite.setAttribute("class", classs);
    }
    setStyle = function(style) {
        this.cite.setAttribute("style", style);
    }
    addInner = function(html) {
        this.cite.getAPI().append(html.getAPI());
    }
    setText = function(text) {
        this.cite.getAPI().textContent=text;
    }
    getAPI = function() {
        return this.cite.getAPI();
    }
    create = function(at) {
        if(at!=null) {
            document.getElementById(at).append(this.cite.getAPI());
        }else{
            document.body.append(this.cite.getAPI());
        }
    }
}
class Ul {
    constructor() {
        this.cite = new Custom("ul");
    }
    setId = function(id) {
        this.cite.setAttribute("id", id);
    }
    setClass = function(classs) {
        this.cite.setAttribute("class", classs);
    }
    setStyle = function(style) {
        this.cite.setAttribute("style", style);
    }
    addInner = function(html) {
        this.cite.getAPI().append(html.getAPI());
    }
    getAPI = function() {
        return this.cite.getAPI();
    }
    create = function(at) {
        if(at!=null) {
            document.getElementById(at).append(this.cite.getAPI());
        }else{
            document.body.append(this.cite.getAPI());
        }
    }
}
class Var {
    constructor() {
        this.cite = new Custom("var");
    }
    setId = function(id) {
        this.cite.setAttribute("id", id);
    }
    setClass = function(classs) {
        this.cite.setAttribute("class", classs);
    }
    setStyle = function(style) {
        this.cite.setAttribute("style", style);
    }
    addInner = function(html) {
        this.cite.getAPI().append(html.getAPI());
    }
    setText = function(text) {
        this.cite.getAPI().textContent=text;
    }
    getAPI = function() {
        return this.cite.getAPI();
    }
    create = function(at) {
        if(at!=null) {
            document.getElementById(at).append(this.cite.getAPI());
        }else{
            document.body.append(this.cite.getAPI());
        }
    }
}
class Wbr {
    constructor() {
        this.cite = new Custom("wbr");
    }
    setId = function(id) {
        this.cite.setAttribute("id", id);
    }
    setClass = function(classs) {
        this.cite.setAttribute("class", classs);
    }
    setStyle = function(style) {
        this.cite.setAttribute("style", style);
    }
    addInner = function(html) {
        this.cite.getAPI().append(html.getAPI());
    }
    setText = function(text) {
        this.cite.getAPI().textContent=text;
    }
    getAPI = function() {
        return this.cite.getAPI();
    }
    create = function(at) {
        if(at!=null) {
            document.getElementById(at).append(this.cite.getAPI());
        }else{
            document.body.append(this.cite.getAPI());
        }
    }
}
class Test {
    constructor() {
        var a = new A();
        a.create();
        var abbr = new Abbr();
        abbr.create();
        var address = new Address();
        address.create();
        var area = new Area();
        area.create();
        var article = new Article();
        article.create();
        echo("Test");
        var local = new Local();
        local.hour();
        local.minute();
        local.seconds();
        var date = new local.date();
        date.year();
        date.month();
        date.day();
        var aside = new Aside();
        aside.create();
        var multi = new Multimedia();
        var audio = new multi.Audio();
        audio.create();
        var video = new multi.Video();
        video.create();
        var legacy = new multi.Legacy();
        var vid = new legacy.Video();
        vid.create();
        var b = new B();
        b.create();
        var base = new Base();
        base.create();
        var bdi = new Bdi();
        bdi.create();
        var bdo = new Bdo();
        bdo.create();
        var quote = new BlockQuote();
        quote.create();
        var button = new Button();
        button.create();
        var canvas = new Canvas();
        canvas.create();
        var caption = new Caption();
        caption.create();
        var cite = new Cite();
        cite.create();
        var code = new Code();
        code.create();
        var col = new Col();
        col.create();
        var colgroup = new ColGroup();
        colgroup.create();
        var data = new Data();
        data.create();
        var dd = new DD();
        dd.create();
        var del = new Del();
        del.create();
        var details = new Details();
        details.create();
        var dfn = new Dfn();
        dfn.create();
        var dialog = new Dialog();
        var def = new dialog.Default();
        var ale = new dialog.AlertMessage();
        ale.create();
        var mess = new dialog.Message();
        mess.create();
        var norm = new dialog.NormalMessage();
        norm.create();
        def.create();
        var div = new Div();
        div.create();
        var dl = new Dl();
        dl.create();
        var dt = new Dt();
        dt.create();
        var em = new Em();
        em.create();
        var embed = new Embed();
        embed.create();
        var fieldset = new Fieldset();
        fieldset.create();
        var figcaption = new FigCaption();
        figcaption.create();
        var figure = new Figure();
        figure.create();
        var footer = new Footer();
        footer.create();
        var form = new Form();
        form.create();
        var h = new H("3");
        h.create();
        var hr = new Hr();
        hr.create();
        var i = new I();
        i.create();
        var iframe = new iFrame();
        iframe.create();
        var img = new Image();
        img.create();
        var input = new Input();
        input.create();
        var ins = new Ins();
        ins.create();
        var kbd = new Kbd();
        kbd.create();
        var label = new Label();
        label.create();
        var legend = new Legend();
        legend.create();
        var li = new Li();
        li.create();
        var main = new Main();
        main.create();
        var map = new Map();
        map.create();
        var mark = new Mark();
        mark.create();
        var meta = new Meta();
        meta.create();
        var meter = new Meter();
        meter.create();
        var nav = new Nav();
        nav.create();
        var ol = new Ol();
        ol.create();
        var optgroup = new OptGroup();
        optgroup.create();
        var option = new Option();
        option.create();
        var output = new Output();
        output.create();
        var p = new P();
        p.create();
        var param = new Param();
        param.create();
        var picture = new Picture();
        picture.create();
        var pre = new Pre();
        pre.create();
        var progress = new Progress();
        progress.create();
        var q = new Q();
        q.create();
        var rp = new Rp();
        rp.create();
        var rt = new Rt();
        rt.create();
        var ruby = new Ruby();
        ruby.create();
        var s = new S();
        s.create();
        var samp = new Samp();
        samp.create();
        var section = new Section();
        section .create();
        var select = new Select();
        select.create();
        var small = new Small();
        small.create();
        var source = new Source();
        source.create();
        var span = new Span();
        span.create();
        var strong = new Strong();
        strong.create();
        var sub = new Sub();
        sub.create();
        var summary = new Summary();
        summary.create();
        var sup = new Sup();
        sup.create();
        var svg = new Svg();
        svg.create();
        var table = new Table();
        table.create();
        var tbody = new TBody();
        tbody.create();
        var td = new Td();
        td.create();
        var template = new Template();
        template.create();
        var textarea = new Textarea();
        textarea.create();
        var tfoot = new TFoot();
        tfoot.create();
        var th = new Th();
        th.create();
        var thead = new THead();
        thead.create();
        var time = new Time();
        time.create();
        var tr = new Tr();
        tr.create();
        var track = new Track();
        track.create();
        var u = new U();
        u.create();
        var ul = new Ul();
        ul.create();
        var varr = new Var();
        varr.create();
        var wbr = new Wbr();
        wbr.create();
        var boot = new Bootstrap(false);
        var accordion = new boot.Accordion();
        accordion.create();
        var alert = new boot.Alert();
        alert.create();
        var breadcrumb = new boot.BreadCrumb();
        breadcrumb.create();
        var butt = new boot.Button();
        butt.create();
        var card = new boot.Card();
        card.create();
        var center = new boot.CenterDiv();
        center.create();
        var close = new boot.CloseButton();
        close.create();
        var inp = new boot.Input();
        inp.create();
        var navbar = new boot.Navbar();
        navbar.create();
        var pagination = new boot.Pagination();
        pagination.create();
        var bar = new boot.ProgressBar();
        bar.create();
        var search = new boot.SearchBar();
        search.create();
        var spinn = new boot.Spinner();
        spinn.create();
        var toast = new boot.Toast();
        toast.create();
    }
}