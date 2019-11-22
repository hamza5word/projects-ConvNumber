// JavaScript Document

var number, ask, continu='Y';

function convertingENG(number){
	
	
	
	var cent, dixs, mono,
		Units = ['','one','two','three','four','five','six','seven','eight','nine'],
		Tens = ['','ten','tweenty','thirty','fourty','fivty','sixty','seventy','eighty','ninty'],
		special = ['ten','eleven', 'twelve'];

		mono = number%10;
	    dixs = ((number%100)-mono)/10;
	    cent = ((number%1000)-(dixs*10)-mono)/100;
	
	if(cent===0 && dixs===0 && mono===0){
	alert('zero');
}
	
	else if (cent===0 && dixs===0 && mono!==0){
	alert(Units[mono]);
}
	
	else if (cent===0 && dixs===1 && (mono>=0 && mono<=2)){
	alert(special[mono]);
}

	else if (cent===0 && dixs===1 && (mono>=3 && mono<=9)){
	alert(Units[mono]+'-teen');
}
	
    else if (cent===0 && dixs!==0 && mono===0){
	alert(Tens[dixs]);
}
	
	else if (cent===0 && dixs!==0 && mono!==0){
	alert(Tens[dixs]+'-'+Units[mono]);
}
	else if (cent!==0 && dixs===0 && mono===0){
	alert(Units[cent]+'-hundret');
	}
	else if (cent!==0 && dixs===0 && mono!==0){
	alert(Units[cent]+'-hundret'+Units[mono]);
}
	else if (cent!==0 && dixs!==1 && mono!==0){
	alert(Units[cent]+'-hundret-'+Tens[dixs]+'-'+Units[mono]);
}
	else if (cent!==0 && dixs===1 && (mono>=0 || mono<=2)){
	alert(Units[cent]+'-hundret-'+special[mono]);
}
		
	else if (cent!==0 && dixs===1 && (mono>=3 || mono<=9)){
	alert(Units[cent]+'-hundret-'+Units[mono]+'-teen');
}
		
		else if (cent!==0 && dixs!==0 && mono!==0){
	alert(Units[cent]+'-hundret-'+Tens[dixs]+'-'+Units[mono]);
		}
	else{
		return "UNVALID NUMBER";
	} 

}

function convertingFRA(number){
	var cent, dixs, mono,
		Units = ['','un','deux','trois','quatre','cinq','six','sept','huit','neuf'],
		Tens = ['','dix','vingt','trente','quarante','cinquante','soixante'],
		Special = ['dix','onze','douze','treize','quatorze','quinze','seize'];
	
	    mono = number%10;
	    dixs = ((number%100)-mono)/10;
	    cent = ((number%1000)-(dixs*10)-mono)/100;
	
	if(cent===0 && dixs===0 && mono===0){                                             // 0 .........................................................
	alert('zero');
    }
	
	else if (cent===0 && dixs===0 && mono!==0){                                       // 1 2 3 4 5 6 7 8 9 .........................................
	alert(Units[mono]);
    }
	
	else if (cent===0 && dixs===1 && (mono>=1 && mono<=6)){                           // 11 12 13 14 15 16 .........................................
	alert(Special[mono]);
    }
	
	else if (cent===0 && dixs===1 && (mono>=7 && mono<=9)){                           // 17 18 19 ..................................................
	alert(Tens[dixs]+'-'+Units[mono]);
    }
	
	else if (cent===0 && (dixs>=1 && dixs<=6) && mono===0){                           // 10 20 30 40 50 60 .........................................
	alert(Tens[dixs]);
    }
	
	else if (cent===0 && (dixs>=2 && dixs<=6) && mono>1){                           // 22 32 45 ..................................................
	alert(Tens[dixs]+'-'+Units[mono]);
    }
	
	else if (cent===0 && (dixs>=2 && dixs<=6) && mono===1){                           // 21 31 41 ...........................................
	alert(Tens[dixs]+'-et-'+Units[mono]);
    }
	
	else if (cent===0 && dixs===7 && (mono>=0 && mono<=6)){                           // 70 71 72 73 ...............................................
	alert(Tens[6]+'-'+Special[mono]);
    }
	
	else if (cent===0 && dixs===7 && (mono>=7 && mono<=9)){                           // 77 78 79  .................................................
	alert(Tens[6]+'-'+Tens[1]+'-'+Units[mono]);
    }
	
	else if (cent===0 && dixs===8 && mono===0){                                       // 80 ........................................................
	alert(Units[4]+'-'+Tens[2]);
    }
	
	else if (cent===0 && dixs===8 && mono>1){                                       // 82 83 84 ..................................................
	alert(Units[4]+'-'+Tens[2]+'-'+Units[mono]);
    }
	
	else if (cent===0 && dixs===8 && mono===1){                                       // 81 ..................................................
	alert(Units[4]+'-'+Tens[2]+'-et-'+Units[mono]);
    }
	
	else if (cent===0 && dixs===9 && (mono>=0 && mono<=6)){                           // 90 91 92 ..................................................
	alert(Units[4]+'-'+Tens[2]+'-'+Special[mono]);
    } 
	
	else if (cent===0 && dixs===9 && (mono>=7 && mono<=9)){                           // 97 98 99 
	alert(Units[4]+'-'+Tens[2]+'-'+Tens[1]+'-'+Units[mono]);
    }
	
	else if (cent>1 && dixs===0 && mono>=0){                                        // 200 301 402 503.........
	alert(Units[cent]+'-cents-'+Units[mono]);
    }
	
	else if (cent>1 && dixs===1 && (mono>=1 && mono<=6)){                           // 211 312 413 514 615 716
	alert(Units[cent]+'-cents'+'-'+Special[mono]);
    }
	
	else if (cent>1 && dixs===1 && (mono>=7 && mono<=9)){                           // 217 318 619
	alert(Units[cent]+'-cents'+'-'+Tens[dixs]+'-'+Units[mono]);
    }
	
	else if (cent>1 && (dixs>=1 && dixs<=6) && mono===0){                           // 110 120 130 .........
	alert(Units[cent]+'-cents'+'-'+Tens[dixs]);
    }
	
	else if (cent>1 && (dixs>=2 && dixs<=6) && mono>1){                           // 122 239 456 ..........
	alert(Units[cent]+'-cents'+'-'+Tens[dixs]+'-'+Units[mono]);
    }
	
	else if (cent>1 && (dixs>=2 && dixs<=6) && mono===1){                           // 121 231 451 ..........
	alert(Units[cent]+'-cents'+'-'+Tens[dixs]+'-et-'+Units[mono]);
    }
	
	else if (cent>1 && dixs===7 && (mono>=0 && mono<=6)){                           // 271 273 274 276
	alert(Units[cent]+'-cents'+'-'+Tens[6]+'-'+Special[mono]);
    }
	
	else if (cent>1 && dixs===7 && (mono>=7 && mono<=9)){                           // 277 278 279
	alert(Units[cent]+'-cents'+'-'+Tens[6]+'-'+Tens[1]+'-'+Units[mono]);
    }
	
	else if (cent>1 && dixs===8 && mono===0){                                       // 280 380 580
	alert(Units[cent]+'-cents'+'-'+Units[4]+'-'+Tens[2]);
    }
	
	else if (cent>1 && dixs===8 && mono>1){                                      // 282 384 583
	alert(Units[cent]+'-cents'+'-'+Units[4]+'-'+Tens[2]+'-'+Units[mono]);
    }
	
	else if (cent>1 && dixs===8 && mono===1){                                      // 281 381 581
	alert(Units[cent]+'-cents'+'-'+Units[4]+'-'+Tens[2]+'-et-'+Units[mono]);
    }
	
	else if (cent>1 && dixs===9 && (mono>=0 && mono<=6)){                          // 291 293 296 294
	alert(Units[cent]+'-cents'+'-'+Units[4]+'-'+Tens[2]+'-'+Special[mono]);
    }
	
    else if (cent>1 && dixs===9 && (mono>=7 && mono<=9)){                          // 297 298 299 
	alert(Units[cent]+'-cents'+'-'+Units[4]+'-'+Tens[2]+'-'+Tens[1]+'-'+Units[mono]);
    }
	
	
	
	
	else if (cent===1 && dixs===0 && mono>=0){                                        // 100 101 102 103.........
	alert('cent-'+Units[mono]);
    }
	
	else if (cent===1 && dixs===1 && (mono>=1 && mono<=6)){                           // 111 112 113 114 115 116
	alert('cent'+'-'+Special[mono]);
    }
	
	else if (cent===1 && dixs===1 && (mono>=7 && mono<=9)){                           // 117 118 119
	alert('cent'+'-'+Tens[dixs]+'-'+Units[mono]);
    }
	
	else if (cent===1 && (dixs>=1 && dixs<=6) && mono===0){                           // 110 120 130 .........
	alert('cent'+'-'+Tens[dixs]);
    }
	
	else if (cent===1 && (dixs>=2 && dixs<=6) && mono>1){                           // 122 139 156 ..........
	alert('cent'+'-'+Tens[dixs]+'-'+Units[mono]);
    }
	
	else if (cent===1 && (dixs>=2 && dixs<=6) && mono===1){                           // 121 131 151 ..........
	alert('cent'+'-'+Tens[dixs]+'-et-'+Units[mono]);
    }
	
	else if (cent===1 && dixs===7 && (mono>=0 && mono<=6)){                           // 171 173 174 176
	alert('cent'+'-'+Tens[6]+'-'+Special[mono]);
    }
	
	else if (cent===1 && dixs===7 && (mono>=7 && mono<=9)){                           // 177 178 179
	alert('cent'+'-'+Tens[6]+'-'+Tens[1]+'-'+Units[mono]);
    }
	
	else if (cent===1 && dixs===8 && mono===0){                                       // 180 180 180
	alert('cent'+'-'+Units[4]+'-'+Tens[2]);
    }
	
	else if (cent===1 && dixs===8 && mono>1){                                      // 182 184 183
	alert('cent'+'-'+Units[4]+'-'+Tens[2]+'-'+Units[mono]);
    }
	
	else if (cent===1 && dixs===8 && mono===1){                                      // 182 184 183
	alert('cent'+'-'+Units[4]+'-'+Tens[2]+'-et-'+Units[mono]);
    }
	
	else if (cent===1 && dixs===9 && (mono>=0 && mono<=6)){                          // 191 193 196 194
	alert('cent'+'-'+Units[4]+'-'+Tens[2]+'-'+Special[mono]);
    }
	
    else if (cent===1 && dixs===9 && (mono>=7 && mono<=9)){                          // 197 198 199 
	alert('cent'+'-'+Units[4]+'-'+Tens[2]+'-'+Tens[1]+'-'+Units[mono]);
    }
	else{
		return "nombre n'est pas valide";
	} 
}
	
do{	

number=parseInt(prompt("Input the number betwwen 0 and 999"));
if(number<0 || number>999){
	alert('Number between 0 and 999 !');
}
else if(isNaN(number)){
	alert('This not a valid number');	
}
else{	
ask = prompt("Which language : ENG or FRA ?");

if(ask==='ENG'){
	convertingENG(number);
}
else if(ask==='FRA'){
	convertingFRA(number);
}
else{
	alert("Language not yet supported");
}
continu=prompt("Want to do it again ? (Y/N)");
}
} while (continu!=='N');








