function areaCalculation(firstInputElementId,secondInputElementId,multiply=1){
    const firstInputElement=document.getElementById(firstInputElementId)
    const secondInputElement=document.getElementById(secondInputElementId)

  
    const firstInputValueString=firstInputElement.value
    firstInputElement.value=''
    const secondInputValueString=secondInputElement.value
    secondInputElement.value=''

    const area=Validation(firstInputValueString,secondInputValueString)

    if(area){
        const firstInputValue=parseFloat(firstInputValueString)
        const secondInputValue=parseFloat(secondInputValueString)

        
        if(multiply===1){
            const  area=firstInputValue*secondInputValue
            const Area=myTofixed(area)
            const areaObject={
                area:Area,
                firstInputValue:firstInputValue,
                secondInputValue:secondInputValue
            }
            return areaObject
        } 
        else{
            const  calculation_area=multiply*firstInputValue*secondInputValue
            const Area=myTofixed(calculation_area)
            
            const areaObject={
                area:Area,
                firstInputValue:firstInputValue,
                secondInputValue:secondInputValue
            }
            return areaObject

        }
    }
}


function myTofixed(number){
    const area_convertTofixed=number.toFixed(2)
    const area=parseFloat(area_convertTofixed)
    return area
}

function Validation(firstInputValueString,secondInputValueString){
    const firstInputValue=parseFloat(firstInputValueString)
    const secondInputValue=parseFloat(secondInputValueString)

    if(firstInputValueString=='' || secondInputValueString==''){
        alert('Please provide number !!')
        console.log("Please provide number !!")
    }else if( typeof firstInputValueString =='string' || typeof secondInputValueString=='string'){
        alert("Please provide number")
    }
    else if( isNaN(firstInputValue) || isNaN(secondInputValue)){
        alert('Please provide number !! ')
    }else if (firstInputValue <0 || secondInputValue< 0){
        alert('Please Enter Positive Number !!')
    }else {
        return area=true
    }

}

//set element value  Area
function setElementValueAreaFormula(setAreaFirstElementId,firstInputValue,setAreaSecondElementId,secondInputValue){
    let firstSetElement=document.getElementById(setAreaFirstElementId)
    let secondSetElement=document.getElementById(setAreaSecondElementId)
    firstSetElement.innerText=firstInputValue
    secondSetElement.innerText=secondInputValue

}


// show area calculations 
function setElement(area,name){   
    let areaContainer=document.getElementById('tables')
    // table 
    var tables = document.getElementsByTagName('table');
    var table = tables[tables.length - 1];
    var rows = table.rows;
    // way one 
    const tr=document.createElement('tr')
    tr.innerHTML=`
        <td>${rows.length+1}.</td>
        <td>${ name}</td>
        <td>${ area} cm<sup>2</sup> </td>
         <td>
         <button onclick="convertCentimeterToMeter(this)" class="btn btn-primary border-0 ">Covert to m<sup>2</sup></button>
        </td>
         <td ><li onclick="deleteItem(this)" class="list-unstyled"> &#10060;</li></td>
    `
    areaContainer.appendChild(tr);

    // way two 
    // areaContainer.innerHTML +=`
    // <tr>
    //    <td>${rows.length+1}.</td>
    //     <td>${ name}</td>
    //     <td>${ area} cm<sup>2</sup> </td>
    //      <td>
    //      <button onclick="convertCentimeterToMeter(this)" class="btn btn-primary border-0 ">Covert to m<sup>2</sup></button>
    //     </td>
    //      <td ><li onclick="deleteItem(this)" class="list-unstyled"> &#10060;</li></td>


    // </tr>
    // `

}

// delete item 
function deleteItem(e){
    e.parentElement.parentElement.remove()
 }

function convertCentimeterToMeter(e){
    const areaCentimeterSquaresElement =e.parentElement.previousElementSibling
    const areaCentimeterSquaresString=areaCentimeterSquaresElement.innerText

    const areaCentimeterSquares=parseFloat(areaCentimeterSquaresString)
    const metreSquare=areaCentimeterSquares/100
    const metreSquareFinal=metreSquare.toFixed(2)
    e.parentElement.previousElementSibling.innerText=metreSquareFinal+ ' ㎡'
    e.setAttribute('disabled',true)
}









