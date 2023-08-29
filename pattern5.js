const pattern5=(n)=>{
    for(let i=1;i<=n;i++){
        let row="";

        //space
      for(let j=1;j<=n-i+1;j++){
       row+=" ";
      }

        //star
     for(let j=1;j<=2*i-1;j++){
        row+="*";
     }

         //space
         for(let j=1;j<=n-i+1;j++){
            row+=" ";
           }

     console.log(row);
    }
}

pattern5(5);


//     *     
//    ***    
//   *****
//  *******
// *********