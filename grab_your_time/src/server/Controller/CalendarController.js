import bodyParser from 'body-parser';
import Account  from '../Account';
// let account = new Account();

class CalendarController {
    constructor(account){
        this.account = account;
    }
    getTypeList(req, res) {
        let calendar = this.account.calendar.getTypeList();
        res.send(calendar);
    }
    
    getEventList(req, res) {
        let eventList = this.account.calendar.getEventList();
        res.send(eventList);
    }
}

module.exports = CalendarController;