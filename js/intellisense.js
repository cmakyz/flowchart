class Intellisense {
    constructor ($textarea, $autoComplete , formulas , customObject) {
        this.$body = document.querySelector("body");

        this.formulas = formulas;
        this.customObject = customObject;
        
        this.customObjects = [];
        this._parseCustomObjects();

        this.$textarea = $textarea;
        this.$autoComplete = $autoComplete;
        this.$hiddenInput = this.createElement("input");
        this.$hiddenInput.style.opacity = "0";
        this.$hiddenTextarea = this.createElement("div", {id: "hiddenTextarea"});
        this.$hiddenTextarea.style.opacity = "0";
        this.$body.appendChild(this.$hiddenInput);
        this.$body.appendChild(this.$hiddenTextarea);

        
        this._enableTextareaEvents();
        this._enableAutoCompleteEvents();

        this.parsed_customObjects = this.customObjects;
        this.parsed_formulas = this.formulas;
        this.customObjectList = [];
        
        for (let i = 0; i < this.parsed_customObjects.length; i++) {
        
            this.customObjectList.push(this.parsed_customObjects[i].formulaName);
        
        }
    }
    
    _enableAutoCompleteEvents() {
        let $list = this.$autoComplete.querySelector("#list");
        $list.addEventListener("click", (event) => {
            this.clickedAutoComplete(event);
        });

        let $tabs_1 = this.$autoComplete.querySelector(".tabs li:nth-child(1)");
        let $tabs_2 = this.$autoComplete.querySelector(".tabs li:nth-child(2)");
        let $tabs_3 = this.$autoComplete.querySelector(".tabs li:nth-child(3)");
        let $tabs_4 = this.$autoComplete.querySelector(".tabs li:nth-child(4)");

        $tabs_1.addEventListener("click", () => { this.custObjClicked() });
        $tabs_2.addEventListener("click", () => { this.fieldsClicked() });
        $tabs_3.addEventListener("click", () => { this.formulasClicked() });
        $tabs_4.addEventListener("click", () => { this.operatorsClicked() });
    }

    _enableTextareaEvents() {
        this.$textarea.addEventListener('mousedown', () => {
            this.closeAutoComplete();
        });

        this.$textarea.addEventListener('keyup', (event) => {
            this.ctrlSpace(event);
            this.getArrowEnterBackspaceKeys(event);
            this.inputControl();
        });

        this.$hiddenInput.addEventListener('keyup', (event) => {
            this.getArrowEnterBackspaceKeys(event);
        });

        this.$textarea.addEventListener('mouseup', () => {
            this.getCursorPosition();
            this.inputControl();
        });
        
        this.$textarea.addEventListener('input', () => {
            this.searchInput();
        });
        
        this.$textarea.addEventListener('focus', () => {
            this.inputControl();
        });

        this.$body.addEventListener("keydown", (event) => {
            this.escClicked(event);
        });
    }

    _parseCustomObjects () {
        let isSystemTrueList = [];
        let isSystemFalseList = [];
        for (let i = 0; i < this.customObject.length; i++) {
            if (this.customObject[i].isSystem === true) {
                isSystemTrueList.push(this.customObject[i]);
            } else {
                isSystemFalseList.push(this.customObject[i]);
            }
        }
        this.customObjects = isSystemFalseList.concat(isSystemTrueList);
    }

    createElement(tag, probs = {}, innerHTML = false) {
        let $el = document.createElement(tag);
        
        for (let key in probs) {
            $el.setAttribute(key, probs[key]);
        }

        if (innerHTML) {
            $el.innerHTML = innerHTML;
        }

        return $el;
    }

    getCursorPosition() {
        let cursor_index = this.$textarea.selectionStart;
        return cursor_index;
    }

    getArrowEnterBackspaceKeys(event) {
        let keyCode_arrow_left = 37;
        let keyCode_arrow_up = 38;
        let keyCode_arrow_right = 39;
        let keyCode_arrow_down = 40;
        let keyCode_enter = 13;
        let keyCode_backSpace = 8;
        let activeElementTagName = document.activeElement.tagName;
        let ul = this.$autoComplete.querySelector("#list");
        let ul_items = ul.getElementsByTagName("li");
        let a_list = this.$autoComplete.getElementsByTagName("a");
        let tmp_inputText = this.$textarea.value;
    
        if(event.keyCode == keyCode_arrow_left
            && activeElementTagName == "INPUT"){
                let ActiveTabId;
                for (let i=0;i<a_list.length;i++) {
                    if(a_list[i].classList.contains("activated")===true){
                        ActiveTabId = a_list[i].id;
                        break;
                    }
                }
                switch(ActiveTabId){
                    case "customObjects":
                        this.operatorsClicked();
                        break;
                    case "fields":
                        this.custObjClicked();
                        break;
                    case "formulas":
                        this.fieldsClicked();
                        break;
                    case "operators":
                        this.formulasClicked();
                        break;
                }
            }
    
        if(event.keyCode == keyCode_arrow_right
            && activeElementTagName == "INPUT"){
                let ActiveTabId;
                for (let i=0;i<a_list.length;i++) {
                    if(a_list[i].classList.contains("activated")===true){
                        ActiveTabId = a_list[i].id;
                    }
                }
                switch(ActiveTabId){
                    case "customObjects":
                        this.fieldsClicked();
                        break;
                    case "fields":
                        this.formulasClicked();
                        break;
                    case "formulas":
                        this.operatorsClicked();
                        break;
                    case "operators":
                        this.custObjClicked();
                        break;
                }
            }
    
        if (event.keyCode == keyCode_arrow_up
            &&activeElementTagName == "INPUT") { //arrow up'a basıldığında , autocompleterdaki list itemin aktifliğinin değişmesi
    
            for (let i = 0; i < ul_items.length; i++) {
    
                if (ul_items[i].classList.contains("active")
                    &&i == 0) {
    
                    ul_items[ul_items.length - 1].classList.add("active");
                    ul_items[i].classList.remove("active");
                    break;
    
                }
                else if(ul_items[i].classList.contains("active")
                        &&i != 0) {
    
                        ul_items[i].classList.remove("active");
                        ul_items[i - 1].classList.add("active");
                        break;
    
                }
            }
        }
    
        if (event.keyCode == keyCode_arrow_down //arrow down'a basıldığında , autocompleterdaki list itemin aktifliğinin değişmesi
            &&activeElementTagName == "INPUT") {
    
            for (var i = 0; i < ul_items.length; i++) {
    
                if(ul_items[i].classList.contains("active")
                    &&i != (ul_items.length - 1)) {
    
                    ul_items[i].classList.remove("active");
                    ul_items[i + 1].classList.add("active");
                    break;
    
                }
                else if(i == (ul_items.length - 1)
                        &&ul_items[i].classList.contains("active")){ 
    
                        ul_items[i].classList.remove("active");
                        ul_items[0].classList.add("active");
                        break;
    
                }
            }
        }
    
        if(event.keyCode == keyCode_enter
            &&activeElementTagName == "INPUT") { //enter'a basıldığında aktif tabdeki aktif li-itemin textarea'ya eklenmesi
            let cursor_index = this.getCursorPosition();
    
            for (let i = 0; i < ul_items.length; i++) {
    
                for (let j = 0; j < a_list.length; j++) {
    
                    if(ul_items[i].classList.contains("active")
                        &&a_list[j].classList.contains("activated")
                        &&a_list[j].id=="customObjects"){
    
                        this.$textarea.value = tmp_inputText.slice(0, cursor_index) + ul_items[i].innerHTML + "." + tmp_inputText.slice(cursor_index);
                        this.$hiddenTextarea.innerText = tmp_inputText.slice(0, cursor_index) + ul_items[i].innerHTML + "." + tmp_inputText.slice(cursor_index);
                        this.$textarea.focus();
                        this.$textarea.setSelectionRange(cursor_index + ul_items[i].innerHTML.length + 1, cursor_index + ul_items[i].innerHTML.length + 1);
                        this.fieldsClicked();
                        break;
                    }
    
                    else if(ul_items[i].classList.contains("active")
                            &&a_list[j].classList.contains("activated")
                            &&a_list[j].id == "formulas") {
                                
                        for (let k = 0; k < this.parsed_formulas.length; k++) {
    
                            if (this.parsed_formulas[k].example == ul_items[i].innerHTML) {
    
                                this.$textarea.value = tmp_inputText.slice(0, cursor_index) + this.parsed_formulas[k].formula + '()' + tmp_inputText.slice(cursor_index);
                                this.$hiddenTextarea.innerHTML = tmp_inputText.slice(0, cursor_index) + this.parsed_formulas[k].formula + '()' + tmp_inputText.slice(cursor_index);
                                this.$textarea.focus();
                                this.$textarea.setSelectionRange(cursor_index + this.parsed_formulas[k].formula.length + 2, cursor_index + this.parsed_formulas[k].formula.length + 2);
                                this.$autoComplete.style.visibility = "hidden";
                                break;
                            }
                        }
                    }
    
                    else if(ul_items[i].classList.contains("active")
                            &&a_list[j].classList.contains("activated")
                            &&a_list[j].id == "operators") {
    
                                if (ul_items[i].textContent === "AND"
                                    ||ul_items[i].textContent === "OR"
                                    ||ul_items[i].textContent === "NOT"
                                    ||ul_items[i].textContent === "IN") {  
    
                                        this.$textarea.value = tmp_inputText.slice(0, cursor_index) + " " + ul_items[i].textContent + " " + tmp_inputText.slice(cursor_index);
                                        this.$hiddenTextarea.innerText = tmp_inputText.slice(0, cursor_index) + ul_items[i].textContent + tmp_inputText.slice(cursor_index);
                                        this.$textarea.focus();
                                        this.$textarea.setSelectionRange(cursor_index + ul_items[i].textContent.length + 2, cursor_index + ul_items[i].textContent.length + 2); 
                                        this.$autoComplete.style.visibility = "hidden"; 
                                        break;
                                }
                                else{
    
                                    this.$textarea.value = tmp_inputText.slice(0, cursor_index) + ul_items[i].textContent + tmp_inputText.slice(cursor_index);
                                    this.$hiddenTextarea.innerText = tmp_inputText.slice(0, cursor_index) + ul_items[i].textContent + tmp_inputText.slice(cursor_index);
                                    this.$textarea.focus();
                                    this.$textarea.setSelectionRange(cursor_index + ul_items[i].textContent.length, cursor_index + ul_items[i].textContent.length);
                                    this.$autoComplete.style.visibility = "hidden";
                                    break;
                                }
    
                    }
                    
                    else if(ul_items[i].classList.contains("active")
                            &&a_list[j].classList.contains("activated")
                            &&a_list[j].id == "fields") {
                                
                                let reverseCustObjName = this.getFieldsFromCustObj();
                                for (let x = 0; x < this.parsed_customObjects.length; x++) {
                                    if(this.parsed_customObjects[x].formulaName==reverseCustObjName){
    
                                        for (let y = 0; y < this.parsed_customObjects[x].fields.length; y++) {
                                            if(this.parsed_customObjects[x].fields[y].formulaName==ul_items[i].innerHTML){
                                                if(this.parsed_customObjects[x].fields[y].fieldTypeName=="LookupList"
                                                    ||this.parsed_customObjects[x].fields[y].fieldTypeName=="SharedList"){
                
                                                    this.$textarea.value = tmp_inputText.slice(0, cursor_index) + ul_items[i].innerHTML + "." + tmp_inputText.slice(cursor_index);
                                                    this.$textarea.focus();
                                                    this.$autoComplete.style.visibility = "hidden";
                                                    this.fieldsClicked();
                                                    break;
                                                }
                                                else{
    
                                                    this.$textarea.value = tmp_inputText.slice(0, cursor_index) + ul_items[i].innerHTML + " " + tmp_inputText.slice(cursor_index);
                                                    this.$textarea.focus();
                                                    this.$autoComplete.style.visibility = "hidden";
                                                    break;
                                                }
                                            }
                                        }
                                    }
                                }
                    }
                }
            }
        }
    }
    
    inputControl() { //autocomplete pozisyonu
        let visibleTextAreaInput = this.$textarea.value;
        let cursor_index = this.getCursorPosition();
        let reverseCustomObjectName = "";
    
        for (let i = cursor_index-1; i > -1; i--) {
    
            if(visibleTextAreaInput[i] == '\n') {
                break;
            }
            else{
                reverseCustomObjectName += visibleTextAreaInput[i];
            }
        }
    
        reverseCustomObjectName = this.reverse(reverseCustomObjectName);
        this.$hiddenTextarea.innerText = reverseCustomObjectName;
    
        let distanceX = this.$hiddenTextarea.clientWidth+10;
        let distanceY = this.$hiddenTextarea.clientHeight;
        let getLineNumber = visibleTextAreaInput.substr(0, cursor_index).split("\n").length;
    
        if(distanceY==0){
            distanceY = 15*getLineNumber+10;
        }
        else{
            distanceY = distanceY*getLineNumber+10;
        }
    
        this.$autoComplete.style.left=distanceX+"px";
        this.$autoComplete.style.top=distanceY+"px";
    }

    ctrlSpace(event) {
        let keyCode_space = 32;
    
        if (event.ctrlKey
            &&event.keyCode == keyCode_space){
            
            this.custObjClicked();
    
        }
    }

    custObjClicked() {
        let ul = this.$autoComplete.querySelector("#list");
        ul.innerHTML = "";
        let a_list = this.$autoComplete.getElementsByTagName("a");
    
        for (let i = 0; i < a_list.length; i++) {
    
            if(a_list[i].id == "customObjects"){
                a_list[i].classList.add("activated");
            }
            else{
                a_list[i].classList.remove("activated");
            }
        }
    
        for (let i = 0; i < this.parsed_customObjects.length; i++) {
            let ul_item = document.createElement("li");
    
            if(i == 0) {
                ul_item.classList.add("active");
            }
            if (this.parsed_customObjects[i].isSystem === true) {
                ul_item.classList.add("system-true");
            }
    
            ul_item.appendChild(document.createTextNode(this.parsed_customObjects[i].formulaName));
            ul.appendChild(ul_item);
        }
    
        this.$autoComplete.style.visibility = "visible";
        this.$hiddenInput.focus();
    }

    fieldsClicked() {
        let cursor_index = this.getCursorPosition();
        let ul = this.$autoComplete.querySelector("#list");
        ul.innerHTML = "";
        let fieldsList = [];
        let reverseCustObjName = "";
        let inpTextArea = this.$textarea.value;
        let a_list = this.$autoComplete.getElementsByTagName("a");
    
        for (let i = 0; i < a_list.length; i++) {
    
            if(a_list[i].id == "fields"){
                a_list[i].classList.add("activated");
            }
            else{
                a_list[i].classList.remove("activated");
            }
    
        }
        if (inpTextArea[cursor_index - 1] == ".") {
    
            for (let i = cursor_index - 2; i > -1; i--) {
    
                if(inpTextArea[i] == ' '
                    ||inpTextArea[i] == '\n'
                    ||inpTextArea[i] == "."
                    ||inpTextArea[i] == ")"
                    ||inpTextArea[i] == "(") {
                    break;
                }
                else{
                    reverseCustObjName += inpTextArea[i];
                }
    
            }
        }
    
        reverseCustObjName = this.reverse(reverseCustObjName);
        if (this.$textarea.value[cursor_index - 1] == "." &&
            this.customObjectList.indexOf(reverseCustObjName) > -1) {
    
            for (let i = 0; i < this.customObjectList.length; i++) {
    
                if (this.customObjectList[i] == reverseCustObjName) {
    
                    for (let j = 0; j < this.parsed_customObjects[i].fields.length; j++) {
    
                        fieldsList.push(this.parsed_customObjects[i].fields[j].formulaName);
                    }
                }
            }
        }
    
        for (let i = 0; i < fieldsList.length; i++) {
            let ul_item = document.createElement("li");
            ul_item.appendChild(document.createTextNode(fieldsList[i]));
    
            if (i == 0) {
                ul_item.classList.add("active");
            }
    
            ul.appendChild(ul_item);
        }
    
        this.$autoComplete.style.visibility = "visible";
        this.$hiddenInput.focus();
    }

    formulasClicked() {
        let ul = this.$autoComplete.querySelector("#list");
        ul.innerHTML = "";
        let a_list = this.$autoComplete.getElementsByTagName("a");
    
        for (let i = 0; i < a_list.length; i++) {
    
            if (a_list[i].id == "formulas"){
                a_list[i].classList.add("activated");
            }
            else{
                a_list[i].classList.remove("activated");
            }
    
        }
    
        for (let i = 0; i < this.parsed_formulas.length; i++) {
    
            let ul_item = document.createElement("li");
    
            if (i == 0) {
                ul_item.classList.add("active");
            }
    
            ul_item.appendChild(document.createTextNode(this.parsed_formulas[i].example));
            ul.appendChild(ul_item);
    
        }
    
        this.$autoComplete.style.visibility = "visible";
        this.$hiddenInput.focus();
    }

    operatorsClicked() {
        let ul = this.$autoComplete.querySelector("#list");
        let array_operators = ["AND", "OR", "NOT", "IN", "<", ">", "<=", ">=", "+", "-", "*", "/"];
        let a_list = this.$autoComplete.getElementsByTagName("a");
        ul.innerHTML = "";
    
        for (let i = 0; i < a_list.length; i++) {
    
            if (a_list[i].id == "operators") {
                a_list[i].classList.add("activated");
            }
            else{
                a_list[i].classList.remove("activated");
            }
    
        }
    
        for (let i = 0; i < array_operators.length; i++) {
            let ul_item = document.createElement("li");
    
            if (i == 0) {
                ul_item.classList.add("active");
            }
    
            ul_item.appendChild(document.createTextNode(array_operators[i]));
            ul.appendChild(ul_item);
        }
    
        this.$autoComplete.style.visibility = "visible";
        this.$hiddenInput.focus();
    }

    escClicked(event) {
        let keyCode_esc = 27;
    
        if (event.keyCode == keyCode_esc) {
            this.$hiddenInput.focus();
            this.$autoComplete.style.visibility = "hidden";
            this.$textarea.focus();
        }
    }

    reverse(str) {
        return str.split("").reverse().join("");
    }

    getEventTarget(e) {
        e = e || window.event;
        return e.target || e.srcElement;
    }

    clickedAutoComplete(event) { //autocomplete e tıklanması olayı
        let cursor_index = this.getCursorPosition();
        let tmp_inputText = this.$textarea.value;
        let inputTextArea = this.$textarea;
        let target = this.getEventTarget(event);
        let a_list = this.$autoComplete.getElementsByTagName("a");
        let hiddenTextArea = this.$hiddenTextarea;
        let ul = this.$autoComplete.querySelector("#list");
        let ul_items = ul.getElementsByTagName("li");
    
        for (let i = 0; i < a_list.length; i++) {
    
            if (a_list[i].classList.contains("activated")
                &&a_list[i].id == "customObjects") {
                
                this.$textarea.value = tmp_inputText.slice(0, cursor_index) + target.innerText + "." + tmp_inputText.slice(cursor_index);
                hiddenTextArea.innerText = tmp_inputText.slice(0, cursor_index) + target.innerText + "." + tmp_inputText.slice(cursor_index);
                inputTextArea.focus();
                this.$textarea.setSelectionRange(cursor_index + target.innerText.length+1, cursor_index + target.innerText.length+1);
                this.$autoComplete.style.visibility = "hidden";
                this.fieldsClicked();
                break;
            
            }
            else if(a_list[i].classList.contains("activated")
                    &&a_list[i].id == "formulas") {
    
                for (let j = 0; j < this.parsed_formulas.length; j++) {
                
                    if (this.parsed_formulas[j].example == target.innerText) {
                
                        this.$textarea.value = tmp_inputText.slice(0, cursor_index) + this.parsed_formulas[j].formula + '()' + tmp_inputText.slice(cursor_index);
                        hiddenTextArea.innerText = tmp_inputText.slice(0, cursor_index) + this.parsed_formulas[j].formula + '()' + tmp_inputText.slice(cursor_index);
                        inputTextArea.focus();
                        textArea.setSelectionRange(cursor_index + this.parsed_formulas[j].formula.length + 2, cursor_index + this.parsed_formulas[j].formula.length + 2);
                        this.$autoComplete.style.visibility = "hidden";
                        break;
                
                    }
                }
            }
            else if(a_list[i].classList.contains("activated")
                    &&a_list[i].id == "operators") {
                    
                    if(target.innerText=="AND"
                        ||target.innerText=="NOT"
                        ||target.innerText=="IN"
                        ||target.innerText=="OR"){
    
                        this.$textarea.value = tmp_inputText.slice(0, cursor_index) +" "+ target.innerText +" "+tmp_inputText.slice(cursor_index);
                        hiddenTextArea.innerText = tmp_inputText.slice(0, cursor_index) +" "+ target.innerText +" "+tmp_inputText.slice(cursor_index);
                        inputTextArea.focus();
                        textArea.setSelectionRange(cursor_index + ul_items[i].textContent.length+3, cursor_index + ul_items[i].textContent.length+3);
                        this.$autoComplete.style.visibility = "hidden";
                        break;
    
                    }
                    else{
    
                        this.$textarea.value = tmp_inputText.slice(0, cursor_index) + target.innerText + tmp_inputText.slice(cursor_index);
                        hiddenTextArea.innerText = tmp_inputText.slice(0, cursor_index) + target.innerText + tmp_inputText.slice(cursor_index); 
                        inputTextArea.focus();
                        textArea.setSelectionRange(cursor_index + ul_items[i].textContent.length, cursor_index + ul_items[i].textContent.length);
                        this.$autoComplete.style.visibility = "hidden";
                        break;
                    }
    
            }
            else if (a_list[i].classList.contains("activated")
                    &&a_list[i].id == "fields"){
    
                    let reverseCustObjName = this.getFieldsFromCustObj();
    
                    for (let i = 0; i < this.parsed_customObjects.length; i++) {
    
                        if(this.parsed_customObjects[i].formulaName==reverseCustObjName){
    
                            for (let j = 0; j < this.parsed_customObjects[i].fields.length; j++) {
    
                                if(this.parsed_customObjects[i].fields[j].formulaName==target.innerText){
    
                                    if(this.parsed_customObjects[i].fields[j].fieldTypeName==("LookupList")
                                        ||this.parsed_customObjects[i].fields[j].fieldTypeName=="SharedList"){
    
                                        this.$textarea.value = tmp_inputText.slice(0, cursor_index) + target.innerText + "." + tmp_inputText.slice(cursor_index);
                                        this.$autoComplete.style.visibility = "hidden";
                                        inputTextArea.setSelectionRange(cursor_index + parsed_formulas[j].formula.length, cursor_index + parsed_formulas[j].formula.length);
                                        inputTextArea.focus();
                                        this.fieldsClicked();
                                        break;
                                    }
                                    else{
    
                                        this.$textarea.value = tmp_inputText.slice(0, cursor_index) + target.innerText + " " + tmp_inputText.slice(cursor_index);
                                        this.$autoComplete.style.visibility = "hidden";
                                        this.$textarea.setSelectionRange(cursor_index + parsed_formulas[j].formula.length + 1, cursor_index + parsed_formulas[j].formula.length + 1);
                                        inputTextArea.focus();
                                        break;
    
                                    }
                                }
                            }
                        }
                    }
            }
        }
    }

    closeAutoComplete(){
        if(this.$autoComplete.style.visibility==="visible"){
            this.$autoComplete.style.visibility = "hidden";
        }
    }

    getFieldsFromCustObj(){
        let reverseCustObjName = "";
        let cursor_index = this.getCursorPosition();
        if (this.$textarea.value[cursor_index-1] == ".") {
    
            for (let i = cursor_index - 2; i > -1; i--) {
    
                if(this.$textarea.value[i] === ' '
                    ||this.$textarea.value[i] === '\n'
                    ||this.$textarea.value[i] === "."
                    ||this.$textarea.value[i] === ")"
                    ||this.$textarea.value[i] === "("){
    
                    break;
                }
                else{
                    reverseCustObjName += this.$textarea.value[i];
                }
    
            }
        }
        reverseCustObjName = this.reverse(reverseCustObjName);
        return reverseCustObjName;
    }

    searchInput(){ //yazılırken arama , tamamlanmadı
        let inputTextArea = this.getFieldsFromCustObj();
        //console.log(inputTextArea);
    }
}


