var names=new Array();
names[0]="John";
names[1]="Miki";
names[2]="Rahul";
names[3]="Paul";
names[4]="Randy";
names[5]="Firdbet";



for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}