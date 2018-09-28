//
//
//


        function makeArray(n)
        {
            var vectorArray = new Array(n)
            return vectorArray;
        }
    

        function minValue(vectorArray)
        {
            var smallestValue = vectorArray[0];
            for(i = 0; i < vectorArray.length(); i++)
            {
                if(smallestValue > vectorArray[i])
                {
                    smallestValue = vectorArray[i];
                }
                return smallestValue;
            }
        }


        function maxValue(vectorArray)
        {
            var maxValue = vectorArray[0];
            for(i = 0; i < vectorArray.length(); i++)
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
            for(i=0; i < vectorArray.length(); i++)
            {
                total = total + vectorArray[i];
            }
            return total/vectorArray.length();
        }

        function standardDeviation(vectorArray)
        {
            var meanValue = meanValue(vectorArray);

            //next sub mean from all nums in vect
            for(i = 0; i < arrayVector.length(); i++)
            {
                arrayVector[i] = arrayVector[i]-meanValue;
                arrayVector[i] = arrayVector[i]*arrayVector[i];
            }
            
           var variance = meanValue(arrayVector);

           return Math.sqrt(variance);


           Math.standardDeviation(vectorArray);

        }
        function makeArray(n)
        {
            var vectorArray = new Array(n)
            return vectorArray;
        }
    

        function minValue(vectorArray)
        {
            var smallestValue = vectorArray[0];
            for(i = 0; i < vectorArray.length(); i++)
            {
                if(smallestValue > vectorArray[i])
                {
                    smallestValue = vectorArray[i];
                }
                return smallestValue;
            }
        }


        function maxValue(vectorArray)
        {
            var maxValue = vectorArray[0];
            for(i = 0; i < vectorArray.length(); i++)
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
            for(i=0; i < vectorArray.length(); i++)
            {
                total = total + vectorArray[i];
            }
            return total/vectorArray.length();
        }

        function standardDeviation(vectorArray)
        {
            var meanValue = meanValue(vectorArray);

            //next sub mean from all nums in vect
            for(i = 0; i < arrayVector.length(); i++)
            {
                arrayVector[i] = arrayVector[i]-meanValue;
                arrayVector[i] = arrayVector[i]*arrayVector[i];
            }
            
           var variance = meanValue(arrayVector);

           return Math.sqrt(variance);


           Math.standardDeviation(vectorArray);

        }