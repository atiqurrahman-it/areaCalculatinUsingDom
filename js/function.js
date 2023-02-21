function areaCalculation(firstInputElementId,secondInputElementId,multiply=1){
    const firstInputElement=document.getElementById(firstInputElementId)
    const secondInputElement=document.getElementById(secondInputElementId)

    const firstInputValueString=firstInputElement.value
    // reset value 
    firstInputElement.value=''
    const secondInputValueString=secondInputElement.value
     // reset value 
    secondInputElement.value=''
    // call validation function 
    const inputValue=Validation(firstInputValueString,secondInputValueString)

    if(inputValue){
        // const firstInputValue=parseFloat(firstInputValueString)
        // const secondInputValue=parseFloat(secondInputValueString)

        // get input value 
        const firstInputValue=inputValue.firstInputValue
        const secondInputValue=inputValue.secondInputValue

        const  area=multiply*firstInputValue*secondInputValue
            const Area=myTofixed(area)
            const areaObject={
                area:Area,
                // firstInputValue:firstInputValue, shortcut 
                firstInputValue,
                secondInputValue
            }
            return areaObject
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
        alert('oops! something went wrong ..Please provide number !!')
    }
    else if( isNaN(firstInputValueString) || isNaN(secondInputValueString)){
        alert('Please provide number !! str ')
    }
    else if (firstInputValue <0 || secondInputValue< 0){
        alert('Please Enter Positive Number !!')
    }else {
        const inputValue={
            firstInputValue,
            secondInputValue
        }
        return inputValue
    }

}

//set element value  Area
function setElementValueAreaFormula(setAreaFirstElementId,firstInputValue,setAreaSecondElementId,secondInputValue,setAreaElementId,areaValue){
    let firstSetElement=document.getElementById(setAreaFirstElementId)
    let secondSetElement=document.getElementById(setAreaSecondElementId)

    let areaSetElement=document.getElementById(setAreaElementId)
    areaSetElement.innerText=areaValue.toFixed(2)
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









