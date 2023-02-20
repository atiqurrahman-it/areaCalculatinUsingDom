
// Project done  


// calculation for triangle area
document.getElementById('triangleBtn').addEventListener('click',function(){
    const areaObject=areaCalculation('triangleBaseInputId','triangleHightInputId',0.5)

    if(areaObject){
        const firstInputValue=areaObject.firstInputValue
        const secondInputValue=areaObject.secondInputValue
        // set value area element 
        setElementValueAreaFormula('setTriangleBaseValue',firstInputValue,'setTriangleHightValue',secondInputValue)

        // show area calculation 
        setElement(areaObject.area,"triangle")
    }
})



// calculation for rectangle area
document.getElementById('rectangleBtn').addEventListener('click',function(){
   
    const areaObject=areaCalculation('rectangleWidthInputId','rectangleLengthInputId')

    if(areaObject){
        const firstInputValue=areaObject.firstInputValue
        const secondInputValue=areaObject.secondInputValue
        // set value area element 
        setElementValueAreaFormula('setRectangleWidthValue',firstInputValue,'setRectangleLengthValue',secondInputValue)

         // show area calculation 
         setElement(areaObject.area,"rectangle")
     
    }
})

// calculation for parallelogram area
document.getElementById('parallelogramBtn').addEventListener('click',function(){
   
    const areaObject=areaCalculation('parallelogramBaseInputId','parallelogramHightInputId')

    if(areaObject){
        const firstInputValue=areaObject.firstInputValue
        const secondInputValue=areaObject.secondInputValue
        // set value area element 
        setElementValueAreaFormula('setParallelogramBaseValue',firstInputValue,'setParallelogramHightValue',secondInputValue)

          // show area calculation 
          setElement(areaObject.area,"parallelogram")
     
    }

})


// calculation for Rhombus area
document.getElementById('RhombusBtn').addEventListener('click',function(){
    
    const areaObject=areaCalculation('rhombusDiagonal_1InputId','rhombusDiagonal_2InputId')

    if(areaObject){
        const firstInputValue=areaObject.firstInputValue
        const secondInputValue=areaObject.secondInputValue
        // set value area element 
        setElementValueAreaFormula('setRhombusDiagonal_1Value',firstInputValue,'setRhombusDiagonal_2Value',secondInputValue)

        // show area calculation 
        setElement(areaObject.area,"Rhombus")
    }

    
})



// calculation for Pentagon area
document.getElementById('PentagonBtn').addEventListener('click',function(){
    
    const areaObject=areaCalculation('pentagonPerimeterInputId','pentagonAreaInputId')

    if(areaObject){
        const firstInputValue=areaObject.firstInputValue
        const secondInputValue=areaObject.secondInputValue
        // set value area element 
        setElementValueAreaFormula('setPentagonPerimeterValue',firstInputValue,'setPentagonAreaInputValue',secondInputValue)

        // show area calculation 
        setElement(areaObject.area,"Pentagon")
     
    }
})



// calculation for ellipse area
document.getElementById('ellipseBtn').addEventListener('click',function(){
    const Pi=3.14
    const areaObject=areaCalculation('ellipse_AxisInputId','ellipse_B_xisInputId',Pi)

    if(areaObject){
        const firstInputValue=areaObject.firstInputValue
        const secondInputValue=areaObject.secondInputValue
        // set value area element 
        setElementValueAreaFormula('setEllipseAxisValue',firstInputValue,'setEllipseB_xisValue',secondInputValue)

         // show area calculation 
         setElement(areaObject.area,"ellipse")
     
    }
})
