
var win = false
var play = false
var time = 0
var timestart = false
var table = [   [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0]
            ];
var ran = new Array(16);
var move = 0
if(play){
    console.log("timer")
    setTimeout(Timer, 1000)
}
function initial(){
    move = 0
    time = 0
    timestart = false
    play = false
    win = true
    let number = 0
    for(let i = 0 ; i < 4 ; i++){
        for(let j = 0 ; j < 4 ; j++){
            if(number < 15)
                table[i][j] = ++number
            else table[i][j] = 0
        }
    }
    show()
}
function scramble(){
    move = 0
    time = 0
    timestart = false
    play = false
    win = true
    let c = 0
    let roundscramble = Math.floor(Math.random() * 20) + 5;
    //console.log(roundscramble)
    for(let n = 0 ;n < roundscramble ; n++){
        show()
        //c++
        //console.log("count",c)
        for(let row = 0 ; row < 4 ; row ++){
            for(let col = 0 ; col < 4 ; col ++){
                if(table[row][col] == 0){
                    if(row < 3 && row > 0 && col < 3 && col > 0){
                        let randnum = Math.floor(Math.random() * 4)
                        if(randnum == 0){ // swap top
                            let tmp = table[row-1][col]
                            table[row-1][col] = 0
                            table[row][col] = tmp;
                        }else if(randnum == 1){ // swap left
                            let tmp = table[row][col-1]
                            table[row][col-1] = 0
                            table[row][col] = tmp;
                        }else if(randnum == 2){ // swap button
                            let tmp = table[row+1][col]
                            table[row+1][col] = 0
                            table[row][col] = tmp;
                        }else if(randnum == 3){ // swap right
                            let tmp = table[row][col+1]
                            table[row][col+1] = 0
                            table[row][col] = tmp;
                        }
                    }else if(row == 3){
                        //console.log("find0")
                        let randnum = Math.floor(Math.random() * 4)
                        if(col == 0){
                            if(randnum == 0 || randnum == 1){ // swap top
                                let tmp = table[row-1][col]
                                table[row-1][col] = 0
                                table[row][col] = tmp;

                            }else{                             // swap right
                                let tmp = table[row][col+1]
                                table[row][col+1] = 0
                                table[row][col] = tmp;
                            }
                        }else if(col == 3){
                            if(randnum == 0 || randnum == 1){ // swap top
                                let tmp = table[row-1][col]
                                table[row-1][col] = 0
                                table[row][col] = tmp;

                            }else{                             // swap left
                                let tmp = table[row][col-1]
                                table[row][col-1] = 0
                                table[row][col] = tmp;

                            }
                        }else{
                            if(randnum == 0 ){ //swap right
                                let tmp = table[row][col+1]
                                table[row][col+1] = 0
                                table[row][col] = tmp;

                            }else if(randnum == 1) {                            // swap left
                                let tmp = table[row][col-1]
                                table[row][col-1] = 0
                                table[row][col] = tmp;

                            }else{              // swap top
                                let tmp = table[row-1][col]
                                table[row-1][col] = 0
                                table[row][col] = tmp;

                            }
                        }
                    }else if(row == 0){
                        let randnum = Math.floor(Math.random() * 4)
                        if(col == 0){
                            if(randnum == 0 || randnum == 1){ // swap button
                                let tmp = table[row+1][col]
                                table[row+1][col] = 0
                                table[row][col] = tmp;
                            }else{                             // swap right
                                let tmp = table[row][col+1]
                                table[row][col+1] = 0
                                table[row][col] = tmp;
                            }
                        
                        }else if(col == 3){
                            if(randnum == 0 || randnum == 1){ // swap top
                                let tmp = table[row+1][col]
                                table[row+1][col] = 0
                                table[row][col] = tmp;
                            }else{                             // swap left
                                let tmp = table[row][col-1]
                                table[row][col-1] = 0
                                table[row][col] = tmp;
                            }
                        }else{
                            if(randnum == 0 ){ //swap right
                                let tmp = table[row][col+1]
                                table[row][col+1] = 0
                                table[row][col] = tmp;
                            }else if(randnum == 1) {            // swap left
                                let tmp = table[row][col-1]
                                table[row][col-1] = 0
                                table[row][col] = tmp;
                            }else{              // swap buttom
                                let tmp = table[row+1][col]
                                table[row+1][col] = 0
                                table[row][col] = tmp;
                            }
                        }
                    
                    // col
                    }else if(col == 0){
                        let randnum = Math.floor(Math.random() * 4)
                        if(row == 0){
                            if(randnum == 0 || randnum == 1){ // swap button
                                let tmp = table[row+1][col]
                                table[row+1][col] = 0
                                table[row][col] = tmp;
                            }else{                             // swap right
                                let tmp = table[row][col+1]
                                table[row][col+1] = 0
                                table[row][col] = tmp;
                            }
                        
                        }else if(row == 3){
                            if(randnum == 0 || randnum == 1){ // swap top
                                let tmp = table[row+1][col]
                                table[row+1][col] = 0
                                table[row][col] = tmp;
                            }else{                             // swap left
                                let tmp = table[row][col-1]
                                table[row][col-1] = 0
                                table[row][col] = tmp;
                            }
                        }else{
                            if(randnum == 0 ){ //swap right
                                let tmp = table[row][col+1]
                                table[row][col+1] = 0
                                table[row][col] = tmp;
                            }else if(randnum == 1){               // swap buttom
                                let tmp = table[row-1][col]
                                table[row-1][col] = 0
                                table[row][col] = tmp;
                            }else {             //swap top
                                let tmp = table[row+1][col]
                                table[row+1][col] = 0
                                table[row][col] = tmp;
                            }
                        }
                    }else if(col == 3){
                        let randnum = Math.floor(Math.random() * 4)
                        if(row == 0){
                            if(randnum == 0 || randnum == 1){ // swap buttom
                                let tmp = table[row-1][col]
                                table[row-1][col] = 0
                                table[row][col] = tmp;
                            }else{                             // swap right
                                let tmp = table[row][col+1]
                                table[row][col+1] = 0
                                table[row][col] = tmp;
                            }
                        }else if(row == 3){
                            if(randnum == 0 || randnum == 1){ // swap top
                                let tmp = table[row-1][col]
                                console.log('top',tmp)
                                table[row-1][col] = 0
                                table[row][col] = tmp;
                            }else{                             // swap left
                                let tmp = table[row][col-1]
                                console.log('left',tmp)
                                table[row][col-1] = 0
                                table[row][col] = tmp;
                            }
                        }else{
                            if(randnum == 0 ){ //swap left
                                let tmp = table[row][col-1]
                                table[row][col-1] = 0
                                table[row][col] = tmp;
                            }else if(randnum == 1){               // swap buttom
                                let tmp = table[row-1][col]
                                table[row-1][col] = 0
                                table[row][col] = tmp;
                            }else {             //swap top
                                let tmp = table[row+1][col]
                                table[row+1][col] = 0
                                table[row][col] = tmp;
                            }
                        }
                    }
                }  
            } //end for
        } //end for
        show()
    }
    show()
}
function rand(){
    for(var i = 0; i < 16; i++){
        ran[i] = 0;
    }
    for(var n = 0; n < 15; n++){
        var num = Math.floor(Math.random() * 16);
        while(check(num)) num = Math.floor(Math.random() * 16);
        ran[n] = num;
    }
    var count=0;
    for(var row = 0 ; row < 4 ; row++){
        for(var col = 0 ; col < 4 ; col++){
            table[row][col] = ran[count];
            count++;
        }
    }
    show();
}
function check(num){
    for(var i = 0; i < 15; i++){
    if(ran[i] == num) return true;
    }
}
function show(){
    var count=0;
    for(var row = 0 ; row < 4 ; row++){
        for(var col = 0 ; col < 4 ; col++){
            count++;
            if (table[row][col] != 0) {
                document.getElementById(count).innerHTML = table[row][col];
                document.getElementById(count).style.backgroundColor = "black";
                document.getElementById(count).style.borderColor = "yellow";
            }else {
                document.getElementById(count).innerHTML = " ";
                document.getElementById(count).style.backgroundColor = "black";
                document.getElementById(count).style.borderColor = "black";
            }
            
        }
    }
    document.getElementById("move").innerHTML = move
    document.getElementById("time").innerHTML = time
}

function action(row,col){
    if(table[row][col] != 0){
        win = false
        //console.log('action',table[row][col])
        checkSwap(row,col);
        show();
        isWin()
        document.getElementById("move").innerHTML = move;
        //play = true
        if(play && !timestart){
            setTimeout(Timer, 1000)
            timestart = true
        }
    }
    
    
}
function checkSwap(row,col){
    //console.log(row,col);
    let tmp = table[row][col]
    let swapyet = true
    
    if(row == 3){
        if(table[row-1][col] == 0 && swapyet){ // 0 อยู่ล่าง
            //console.log("swapcase2")
            play = true
            table[row][col] = 0;
            table[row-1][col] = tmp
            swapyet = false
            move++
            show();
            //isWin()
        }
        if(table[row][col+1] == 0 && swapyet){ // 0 อยู่ขวา
            //console.log("swapcase4")
            play = true
            table[row][col] = 0;
            table[row][col+1] = tmp
            swapyet = false
            move++
            show();
            //isWin()
        }
        if(table[row][col-1] == 0 && swapyet){ // 0 อยู่ซ้าย
            //console.log("swapcase5")
            play = true
            table[row][col] = 0;
            table[row][col-1] = tmp
            swapyet = false
            move++
            show();
            //isWin()
        }
    }
    else if(row == 0){
        if(table[row+1][col] == 0 && swapyet){ // 0 อยู่ล่าง
            //console.log("swapcase2")
            play = true
            table[row][col] = 0;
            table[row+1][col] = tmp
            swapyet = false
            move++
            show();
            //isWin()
        }
        if(table[row][col+1] == 0 && swapyet){ // 0 อยู่ขวา
            //console.log("swapcase4")
            play = true
            table[row][col] = 0;
            table[row][col+1] = tmp
            swapyet = false
            move++
            show();
            //isWin()
        }
        if(table[row][col-1] == 0 && swapyet){ // 0 อยู่ซ้าย
            //console.log("swapcase5")
            play = true
            table[row][col] = 0;
            table[row][col-1] = tmp
            swapyet = false
            move++
            show();
            //isWin()
        }
    }
    else{
        if(table[row+1][col] == 0 && swapyet){ // 0 อยู่ล่าง
            //console.log("swapcase2")
            play = true
            table[row][col] = 0;
            table[row+1][col] = tmp
            swapyet = false
            move++
            show();
            //isWin()
        }
        if(table[row-1][col] == 0 && swapyet){ // 0 อยู่บน
            //console.log("swapcase3")
            play = true
            table[row][col] = 0;
            table[row-1][col] = tmp
            swapyet = false
            move++
            show();
            //isWin()
        }
        if(table[row][col+1] == 0 && swapyet){ // 0 อยู่ขวา
            //console.log("swapcase4")
            play = true
            table[row][col] = 0;
            table[row][col+1] = tmp
            swapyet = false
            move++
            show();
            //isWin()
        }
        if(table[row][col-1] == 0 && swapyet){ // 0 อยู่ซ้าย
            //console.log("swapcase5")
            play = true
            table[row][col] = 0;
            table[row][col-1] = tmp
            swapyet = false
            move++
            show();
            //isWin()
        }
    }
    //isWin()
}
function isWin(){
    
    if(play){
        let number = 0
        for(let i = 0 ; i < 4 ; i++){
            for(let j = 0 ; j < 4 ; j++){
                number++
                if(number >= 16) number = 0
                if(table[i][j] == number) win = true
                else {
                    win = false
                    break
                }
            }
        }
        if(win){
            show()
            play = false
            if(confirm('Congrats, You did it! \nScramble the puzzle?')){
                scramble();
            }
            //alert("win")
        }
    }
}
function Timer(){
    //console.log('timer')
    if(!win){
        time++
        document.getElementById("time").innerHTML = time
        setTimeout(Timer, 1000)
    }
}
