class myRailway {
    getDetails(){
        console.log("This is my railway class");
    }
    getDetails2(userInfo){
        this.userInfo = userInfo;
    }
    cancel(){
        console.log(`This form is ${this.userInfo} cancelled`);
    }
}
const railway = new myRailway();
const railwayInfo = new myRailway();
railway.getDetails();
railwayInfo.getDetails2('Yasir Ali');
railwayInfo.cancel();
