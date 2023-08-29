const pattern6=(n)=>{
     for(let i=1;i<=n;i++){
        let row="";
        
        //space
        for(let j=1;j<=i;j++){
            row+=" ";
        }

        //star
        for(let j=1;j<=2*n-1;j++){
            row+="*";
        }
        
        //space
        for(let j=1;j<=i;j++){
            row+=" ";
        }
        console.log(row);
     }
}


pattern6(5);

// ********* 
//  *********  
//   *********
//    *********
//     *********