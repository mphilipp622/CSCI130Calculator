//Joseph Sesate

function minValue(vectorArray)
{
    var smallestValue = vectorArray[0];
    for(i = 0; i <  vectorArray.length; i++)
    {
        if(smallestValue > vectorArray[i])
        {
            smallestValue = vectorArray[i];
        }
      
    }
    return smallestValue;
}  



function maxValue(vectorArray)
{
    var maxValue = vectorArray[0];
    for(i = 0; i < vectorArray.length; i++)
    {
        if(maxValue < vectorArray[i])
        {
            maxValue = vectorArray[i];
        }
    }
    return maxValue;
}


function meanValue(vectorArray)
        {
    var total = 0;
    for(i=0; i < vectorArray.length; i++)
    {
        total = total + vectorArray[i];
    }
    return total/vectorArray.length;
}

function standardDeviation(vectorArray)
{
    var mValue = meanValue(vectorArray);

    //next sub mean from all nums in vect
    for(i = 0; i < vectorArray.length; i++)
    {
        vectorArray[i] = vectorArray[i] - vectorArray;
        vectorArray[i] = vectorArray[i] * vectorArray[i];
    }
            
    var variance = meanValue(vectorArray);
    var temp = Math.sqrt(variance);
    return temp;

}

