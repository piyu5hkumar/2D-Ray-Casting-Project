# Ray-Casting-Project
### A mini project implementing basic Ray Casting using JavaScript and HTML5 Canvas element

<image src = "demo/gif_demo.gif" width = "500px">



**_Formulas used_**
1. Trigonometric formulas to calculate default value of the end points of the ray
    * Pythagorean theorem
      * used to calculate the maximum distance of the ray<br/>
        
        As we know the maximum length of any line segment in a rectangular window would be its diagonal, so we are assuming that initially all the ray's distance to be the length of the diagonal(to be on a safer side), here<br/>
        
        diagonal = hypotenuse
        base = width
        height = perpendicular
        
        sqr(hypotenuse) = sqr(perpendicular) + sqr(base)**
        
      * Now the the ray's ending cordinates will be<br/> 
      
        x2 = hypotenuse * cos(theta)<br/>
        y2 = hypotenuse * cos(theta)<br/>
        
        these are default calculated values
        
        
1. Intersection of two line **segments**

    **line segments are _ray_ and the _wall_**

    * Find the denominator first<br/>
      den = (x1 - x2)(y3 - y4) - (y1 - y2)(x3 - x4)<br/>

      * If den is 0 that means the lines are either colinier or parallel ||, both of which we have to not take into consideration so return **false**<br/>

      * If den is not 0 then find <br/>
        t = ((x1 - x3)(y3 - y4) - (y1 - y3)(x3 - x4)) / den<br/>
        u = ((x1 - x2)(y1 - y3) - (y1 - y2)(x1 - x3)) / den<br/>
        * Both  0.0 ≤ t ≤ 1.0 and 0.0 ≤ u ≤ 1.0 condition should be satisfied<br/>

          * If not return **false**, that means the segmetns will intersect externally
          * If true, **return (px, py) = (x1 + t(x2 - x1)), y1 + t(y2 - y1))**
          
          
1. Distance formula
    * Initially the end of the ray would be the default calculated value  
    * For each wall find if the intersection occurs find the distance between the ray's start cordinates and the (px, py)

      * If the distance is smaller than the previous distance, update it to the min distance cordinate
