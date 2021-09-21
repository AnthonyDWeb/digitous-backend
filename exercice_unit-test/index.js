const evenOrNot = (num) =>{ return (num % 2 === 0 || num % 2 === -0) };

const formatDate = (date) => {
    var dateTest = new Date(date);
    var month = dateTest .getMonth() + 1;
    var day = dateTest .getDate();
    var year = dateTest .getFullYear();

    if(month < 10){
        month = "0"+month;
    }
    return `${day}/${month}/${year}`;
}

module.exports = {
    evenOrNot,
    formatDate
}