function listSorting(needle, haystack) {
    let numToFind = needle;
    let arrayToSearch = haystack
    // console.log(String(arrayToSearch).split('').includes(String(numToFind)))
    String.prototype.count=function(c) {
        let position = []

        var result = 0, i = 0;
        for(i;i<this.length;i++)if(this[i]==c)result++,position.push(i)
        return result,position;
      };

    // console.log(String(arrayToSearch).split('').join('').trim().split('').filter(data=>(data!=','&&' ')).join('').count(1))

const checkArray = (val,array)=>{
    let row = 0, col=0
    array.forEach(element => {
        //  console.log(String(element).split('').join('').trim().split('').filter(data=>(data!=','&&' ')).join('').count(2))            
            if(typeof (element)=='object'){
                console.log(String(element).split('').join('').trim().split('').filter(data=>(data!=','&&' ')).join('').count(val))
                row+=1, col=element.length  
                checkArray(element,val)
    
            }
            return `${row}x${col}`
            
        });
}
   
return checkArray(needle,haystack)
    
}


listSorting(5,[
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
  ])
