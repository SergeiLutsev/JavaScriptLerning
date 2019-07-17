// BUGDET CONTROLLER
var budgetController = (function(){

        var Expense =function(id, description, value){
            this.id = id;
            this.description = description;
            this.value = value;
            this.percentage = -1;
        };
    
        Expense.prototype.calcPercentage = function(totalIncome){
            this.percentage = totalIncome>0 ? Math.round(this.value/totalIncome*100) : -1;
        };
    
        Expense.prototype.getPercentage = function(){
          return this.percentage;  
        };
    
         var Income =function(id, description, value){
            this.id = id;
            this.description = description;
            this.value = value;
        };
    
        var calculateTotal = function(type){
            var arr, sum=0;

            arr = data.allItems[type];

            arr.forEach(function(current,index,array){
                sum+=current.value;
            })

            data.totals[type] = sum;
        };
    
        var data = {
            allItems: {
                exp: [],
                inc :[]
            },
            
            totals: {
                exp: 0,
                inc: 0
            },
            
            buget: 0,
            percentage : -1
        };
        
        return {
            addItem : function(type, desc, val){
                var newItem, id;
                var lenArr = data.allItems[type].length;
                
                if(lenArr === 0){
                    id =0;
                }else{
                id = data.allItems[type][lenArr-1].id+1;
                }
                if(type === 'inc'){
                    newItem = new Income(id,desc,val);
                } else if(type ==='exp'){
                    newItem = new Expense(id,desc,val);
                }
                data.allItems[type].push(newItem);
                
                return newItem;
            },
            
            deleteItem : function(type, id){
                var idx, index;
                
                idx = data.allItems[type].map(function(current){
                    return current.id;
                });                
                
                index = idx.indexOf(id);
                if(index !== -1){
                    data.allItems[type].splice(index,1);
                }
            },
            
            calculateBuget : function(){
                // calculate total income and expense
                calculateTotal('exp');
                calculateTotal('inc');
                //calculate buget : income - expense
                data.buget = data.totals.inc - data.totals.exp;
                // calculate the percentage of income that we spend
                if(data.totals.inc <= 0){
                    data.percentage = -1;
                } else{
                data.percentage =Math.round(data.totals.exp * 100 / data.totals.inc);
                }
            },
            
            calculatePercentages : function(){
                data.allItems.exp.forEach(function(current){
                    current.calcPercentage(data.totals.inc);
                });
                
                
            },
            
            getPercentages : function(){
              var allPerc;
                allPerc = data.allItems.exp.map(function(cur){
                    return cur.getPercentage();
                });
                return allPerc;
            },
            
            getBuget : function(){
                return {
                    totalInc : data.totals.inc,
                    totalExp : data.totals.exp,
                    buget: data.buget,
                    percentage : data.percentage
                    
                }
            },
            
            testing : function(){
                console.log(data);
            }
        }
})();



// UI CONTROLLER
var UIController = (function(){
    
    var DOMstrings = {
        inputType : '.add__type',
        inputDescription : '.add__description',
        inputValue : '.add__value',
        inputBtn : '.add__btn',
        incomeContainer : '.income__list',
        expenseContainer : '.expenses__list',
        budgetLabel : '.budget__value',
        incomeLabel : '.budget__income--value',
        expenseLabel :'.budget__expenses--value',
        percentageLabel : '.budget__expenses--percentage',
        container :'.container',
        expensePercentageLabel : '.item__percentage'
    };
    
    var formatNumber = function(num, type){
            
            var numSplit, int, dec, sign;
            /*
                + or - before number
                exactly decimal points
                coma separating thousands
            */
            num = Math.abs(num);
            num = num.toFixed(2); //return string
            
            numSplit = num.split('.');
            
            int = numSplit[0];
            
            if(int.length>3){
                int = int.substr(0, int.length-3)+','+int.substr(int.length-3,3);
            }
            
            dec = numSplit[1];
            
            sign = type ==='exp'? '-':'+';
            
            return sign + ' ' + int + '.' + dec;
            
        }
    
    return {
        getInput: function(){
            return{
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: parseFloat(document.querySelector(DOMstrings.inputValue).value)
            }
        },
        
        getDOMstrings: function(){
            return DOMstrings;
        },
        
        addListItem : function(obj, type){
            var html, newHtml, element;
            // Create HTM string with placeholder text
            if(type === 'inc'){
                element = DOMstrings.incomeContainer;
                
                html = ' <div class="item clearfix" id="inc-%id%"> <div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            } else if(type === 'exp'){
                element = DOMstrings.expenseContainer;
                
                 html = ' <div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }
            
            //Replase the placeholder text with some actual data
            newHtml = html.replace('%id%',obj.id);
            newHtml = newHtml.replace('%description%',obj.description);
            newHtml = newHtml.replace('%value%', formatNumber(obj.value,type));
            
            // Insert the HTML into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend',newHtml);
            
        },
        
        deleteListItem : function(selectorId){
            var elem;
            elem = document.getElementById(selectorId);
            
            elem.parentNode.removeChild(elem);
        },
        
        clearFields : function(){
            var fields, fildsArr; 
            // node list
            fields = document.querySelectorAll(DOMstrings.inputDescription+', '+DOMstrings.inputValue);
             // array          
            fildsArr = Array.prototype.slice.call(fields);
            
            fildsArr.forEach(function(current,index, array){
                current.value = '';
            });
            
            fildsArr[0].focus();
           
        },
        
        displayBuget : function(obj){
           
            document.querySelector(DOMstrings.budgetLabel).textContent = formatNumber(obj.buget,obj.buget>0?'inc':'exp');
            document.querySelector(DOMstrings.incomeLabel).textContent = formatNumber(obj.totalInc,'inc');
            document.querySelector(DOMstrings.expenseLabel).textContent = formatNumber(obj.totalExp,'exp');
        
            if(obj.percentage>0){
                document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage+'%';
            }else{
                document.querySelector(DOMstrings.percentageLabel).textContent = '---';
            }
        },
        
        displayPercentages : function(percentages){
            var elems = document.querySelectorAll(DOMstrings.expensePercentageLabel);
            for(var i = 0; i<elems.length;i++){
                if(percentages[i]>0){
                elems[i].textContent = percentages[i] + '%';
                }else{
                   elems[i].textContent = '---'; 
                }
            }
            
        }
        
        
    };
    
})();


// GLOBAL APP CONTROLLER
var controller = (function(budgetCtr,UICtr){
        
    var eventListners = function(){
        var DOM = UICtr.getDOMstrings();
        
        document.querySelector(DOM.inputBtn).addEventListener('click',cntrAddFunction);    
        document.addEventListener('keypress',function(event){
            if(event.keyCode === 13 || event.which ===13) {
                cntrAddFunction();
            }
        });
        
        document.querySelector(DOM.container).addEventListener('click',cntrDeleteItem)
    };
       
    
    var updateBuget = function(){
      // 1 . Calculate the budget
        budgetCtr.calculateBuget();
      // 2. return buget
        var budget = budgetCtr.getBuget();
      // 3. Display the budget on the UI  
        UICtr.displayBuget(budget);
    };
    
    //Update expense percentages
        var updatePercentages = function(){
            // 1. Calculate percentages
            budgetCtr.calculatePercentages();
            // 2. Read percentages from the bubget controller
        var percentages = budgetCtr.getPercentages();
            // 3. Update the UI with a new percentage
            UICtr.displayPercentages(percentages);
        };
    
    
    var cntrAddFunction = function(){
        var input, newItem;
      // 1. get the field input data
        input = UICtr.getInput();
        
        if(input.description ==='' || isNaN(input.value) || input.value <= 0){
            return;
        }
      
      // 2. add the item to the budget controller
        newItem = budgetCtr.addItem(input.type,input.description,input.value);
       
      // 3. add the item to the UI
        UICtr.addListItem(newItem,input.type);
        UICtr.clearFields();
        
    // calculate and update budget
        updateBuget();
        
        // calculate and update percentage
        updatePercentages();
        
    };
    
    
     var cntrDeleteItem = function(event){
         var itemId, splitId, type, id;
         itemId = event.target.parentNode.parentNode.parentNode.parentNode.id;        
         
         if(itemId){
             splitId = itemId.split('-');
             type = splitId[0];
             id = parseInt(splitId[1]);
             
         // 1. delete the item from the data structure
             budgetCtr.deleteItem(type,id);
         // 2. Delite the item from the UI
            UICtr.deleteListItem(itemId);
         // 3. Update and show the new budget    
             updateBuget();
             // calculate and update percentage
        updatePercentages();
         }
                  
         
    }
    
  return {
      init : function(){
            eventListners();    
           UICtr.displayBuget({
                    totalInc : 0,
                    totalExp : 0,
                    buget: 0,
                    percentage : 0
                    
                });
      }
  }
    
})(budgetController,UIController);


controller.init();