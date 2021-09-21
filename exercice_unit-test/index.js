const evenOrNot = (num) =>{ 
    if( /^-?[0-9]*$/.test(num)){
        return (num % 2 === 0 || num % 2 === -0) 
    }
};

const formatDate = (date) => {
    if(/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/.test(date)){
        var dateTest = new Date(date);
        var month = dateTest .getMonth() + 1;
        var day = dateTest .getDate();
        var year = dateTest .getFullYear();
    
        if(month < 10){
            month = "0"+month;
        }
        return `${day}/${month}/${year}`;
    }
}

module.exports = {
    evenOrNot,
    formatDate
}