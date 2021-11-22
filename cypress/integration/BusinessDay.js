


describe('Calculates number of business days, taking into account', function() {
    
    
    it.only('Days without Holidays', function() {
        
            var numberofdayswithoutHolidays= 5;
var holidays = ['2021-11-15','2021-11-23'];
alert( numberofdayswithoutHolidays - holidays.length );

holidays = holidays.filter( function(day){
  var day = parseDate( day ).getDay();
  return day > 0 && day < 6;
});
    
    });



    it.only('business days', function() {
        
        var startDate = new Date('11/15/2021');
var endDate = new Date('11/123/2021');
var numOfDates = getBusinessDatesCount(startDate,endDate);

function getBusinessDatesCount(startDate, endDate) {
    let count = 0;
    const curDate = new Date(startDate.getTime());
    while (curDate <= endDate) {
        const dayOfWeek = curDate.getDay();
        if(dayOfWeek !== 0 && dayOfWeek !== 6) count++;
        curDate.setDate(curDate.getDate() + 1);
    }
    alert(count);
    return count;
}
      
   
function BusinessworkingDays(d0, d1) {
    var startDate = parseDate(d0);
    var endDate = parseDate(d1);  
    // Validate input
    if (endDate < startDate)
        return 0;

    // Calculate days between dates
    var millisecondsPerDay = 86400 * 1000; // Day in milliseconds
    startDate.setHours(0,0,0,1);  // Start just after midnight
    endDate.setHours(23,59,59,999);  // End just before midnight
    var diff = endDate - startDate;  // Milliseconds between datetime objects    
    var days = Math.ceil(diff / millisecondsPerDay);

    // Subtract two weekend days for every week in between
    var weeks = Math.floor(days / 7);
    days = days - (weeks * 2);

    // Handle special cases
    var startDay = startDate.getDay();
    var endDay = endDate.getDay();

    // Remove weekend not previously removed.   
    if (startDay - endDay > 1)         
        days = days - 2;      

    // Remove start day if span starts on Sunday but ends before Saturday
    if (startDay == 0 && endDay != 6)
        days = days - 1  

    // Remove end day if span ends on Saturday but starts after Sunday
    if (endDay == 6 && startDay != 0)
        days = days - 1  

    return days;
}
function parseDate(input) {
    // Transform date from text to date
  var parts = input.match(/(\d+)/g);
  // new Date(year, month [, date [, hours[, minutes[, seconds[, ms]]]]])
  return new Date(parts[0], parts[1]-1, parts[2]); // months are 0-based
}

   })
    
    Date.prototype.workingDaysFrom=function(fromDate){
 // ensure that the argument is a valid and past date
 if(!fromDate||isNaN(fromDate)||this<fromDate){return -1;}
 
 // clone date to avoid messing up original date and time
 var frD=new Date(fromDate.getTime()),
     toD=new Date(this.getTime()),
     numOfWorkingDays=1;
 
 // reset time portion
 frD.setHours(0,0,0,0);
 toD.setHours(0,0,0,0);
 
 while(frD<toD){
  frD.setDate(frD.getDate()+1);
  var day=frD.getDay();
  if(day!=0&&day!=6){numOfWorkingDays++;}
 }
 return numOfWorkingDays;
};
});