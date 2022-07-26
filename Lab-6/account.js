class Bank_acc{
    
    #accountName;
    #amount;
    static accountInfoList = [];

    constructor(accountName, amount){
        this.#accountName= accountName;
        this.#amount = amount;
    }

    getAccountName(){
        return this.#accountName;
    }

    getAmount(){
        return this.#amount
    }

    setAmount(amount) {
        this.#amount = amount;
    }
}

function isAcountExist(accountName) {
return  Bank_acc.accountInfoList.find(it => it.getAccountName() === accountName) ? true : false
}

function addAccount() {
const accountName = document.getElementById('acc_name').value;

const amount = document.getElementById('deposit').value
if(isNaN(amount)) {
    alert("please enter the valid number")
    return true
}

if(isAcountExist(accountName)) {
    alert("account already existed")
    return
}


Bank_acc.accountInfoList.push(new Bank_acc(accountName,amount))


updateUI()

}




function makeTransaction() {
    document.getElementById('lowerContainer').style="display:none"
    document.getElementById('upperContainer').style="display:block"


    const txType = document.getElementById('txType').value
    const amount = document.getElementById('txAmount').value
    const account = document.getElementById('accountLists').value

    Bank_acc.accountInfoList = Bank_acc.accountInfoList.map(it => {

        if(it.getAccountName() === account) {

            if(txType === 'debit') {
                const diductedamount = parseFloat(it.getAmount()) - parseFloat(amount);
                if(diductedamount < 0) {
                    alert("Amount is not sufficient")
                    return true
                }else{
                    it.setAmount(parseFloat(it.getAmount()) - parseFloat(amount))
                }
       
            }else{
                it.setAmount(parseFloat(it.getAmount()) + parseFloat(amount))

            }

        }
        return it


    })

    updateUI()
}

updateUI()

function updateUI() {
    document.getElementById('lowerContainer').style="display:none"
    document.getElementById('upperContainer').style="display:block"

    document.getElementById('display_details').value = Bank_acc.accountInfoList.map(it =>{
        return  `Account Name : ${it.getAccountName()} Amount : ${it.getAmount()}\n`;
    
    })
}


function debitCredit(type) {

    document.getElementById('lowerContainer').style="display:block"
    document.getElementById('upperContainer').style="display:none"
    document.getElementById('txType').value = type


    let selectBox = `<select id='accountLists'>`

    selectBox+= Bank_acc.accountInfoList.map(it => {
       return `<option value =${it.getAccountName()}> ${it.getAccountName()} </option>    `


    })

    selectBox+=`<select/>`

    document.getElementById('dropdown').innerHTML = selectBox
}
