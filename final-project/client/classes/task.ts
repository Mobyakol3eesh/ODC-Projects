
const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' , hour: '2-digit', minute: '2-digit'};
export class Task {
  
     
    private name: string;
    private date: string;
    private fullfilled: boolean;
    constructor(name : string) {
        this.name = name;
        this.date = new Date().toLocaleDateString('en-US',options);
        this.fullfilled = false;   
        
    }
    getName() {
        return this.name;
    }


}
