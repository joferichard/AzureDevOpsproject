// Function to open an account
function openAccount() {
    console.log('Opening an account...');
    // Your code for opening an account goes here
}

// Function to fetch account summary from the server
function fetchAccountSummary() {
    console.log('Fetching account summary...');
    // Your code for fetching account summary goes here
}

// Function to fetch transaction history from the server
function fetchTransactionHistory() {
    console.log('Fetching transaction history...');
    // Your code for fetching transaction history goes here
}

// Function to handle user command
function handleUserCommand(command) {
    switch (command) {
        case 'openAccount':
            openAccount();
            break;
        case 'accountSummary':
            fetchAccountSummary();
            break;
        case 'transactionHistory':
            fetchTransactionHistory();
            break;
        default:
            console.log('Invalid command');
    }
}

// Make buttons clickable
var openAccountButton = document.getElementById('open-account-button');
openAccountButton.addEventListener('click', function () {
    handleUserCommand('openAccount');
});

var accountSummaryButton = document.getElementById('account-summary-button');
accountSummaryButton.addEventListener('click', function () {
    handleUserCommand('accountSummary');
});

var transactionHistoryButton = document.getElementById('transaction-history-button');
transactionHistoryButton.addEventListener('click', function () {
    handleUserCommand('transactionHistory');
});
