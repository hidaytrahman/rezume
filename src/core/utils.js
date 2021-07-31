export const getYears = (startYear) => {
    var currentYear = new Date().getFullYear(), years = [];
    startYear = startYear || 1980;  
    while ( startYear <= currentYear ) {
        years.push(startYear++);
    }   
    return years;
}