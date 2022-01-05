# Chart  Component
1. PieChart

   - views/common/chart/PieChart.vue

   - json 형식으로 값 전달(props로 전달 **:PieChartData**)

   - 샘플 데이터 참조

     ```json
     {
         //표현할 각 주제 입력
         "labels": [
             "A",
             "B",
             "C"
         ],
         "datasets": [
             {
                 //각 주제별 값
             "data": [
                     300,
                     50,
                     100
                 ],
                 //각 주제별 색상 구분
             "backgroundColor": [
                     "#FF6384",
                     "#36A2EB",
                     "#FFCE56"
                 ],
                 //마우스 행오버 이벤트
             "hoverBackgroundColor": [
                     "#FF6384",
                     "#36A2EB",
                     "#FFCE56"
                 ]
             }
         ]
     }
     ```

   - 차트 샘플

     <img src="C:\Users\JeffKim\AppData\Roaming\Typora\typora-user-images\image-20220103150940638.png" style="zoom: 33%;" />

2. LineChart

   - views/common/chart/LineChart.vue

   - json 형식으로 값 전달(props로 전달 **:LineChartData**)

   - 샘플 데이터 참조

     ```json
     {
         //하단 가로 데이터 값
         "labels": [
             "January",
             "February",
             "March",
             "April",
             "May",
             "June",
             "July"
         ],
         "datasets": [
             {
                 "label": "First Dataset",
             "data": [
                     65,
                     59,
                     80,
                     81,
                     56,
                     55,
                     40
                 ],
             "fill": false,
             "backgroundColor": "#2f4860",
             "borderColor": "#2f4860",
             "tension": 0.4
             },
             {
             "label": "Second Dataset",
             "data": [
                     28,
                     48,
                     40,
                     19,
                     86,
                     27,
                     90
                 ],
             //채우기 기능(line따라 색 채우기, default false)
             "fill": false,
             "backgroundColor": "#00bb7e",
             "borderColor": "#00bb7e",
             "tension": 0.4
             }
         ]
     }
     ```

   - 차트 샘플

     <img src="C:\Users\JeffKim\AppData\Roaming\Typora\typora-user-images\image-20220103153150809.png" style="zoom:33%;" />

3. PolarAreaChart

   - views/common/chart/PolarAreaChart.vue

   - json 형식으로 값 전달(props로 전달 **:PolarAreaChartData**)

   - 샘플 데이터 참조

     ```json
     {
       "datasets": [
         {
           //각 주제별 데이터
           "data": [
             11,
             16,
             7,
             3,
             14
           ],
           "backgroundColor": [
             "#FF6384",
             "#4BC0C0",
             "#FFCE56",
             "#E7E9ED",
             "#36A2EB"
           ],
           "label": "My dataset"
         }
       ],
       //표현할 데이터 주제 입력
       "labels": [
         "Red",
         "Green",
         "Yellow",
         "Grey",
         "Blue"
       ]
     }
     ```

   - 차트 샘플

     <img src="C:\Users\JeffKim\AppData\Roaming\Typora\typora-user-images\image-20220103155511232.png" alt="image-20220103155511232" style="zoom:33%;" />

4. BarChart

   - views/common/chart/BarChart.vue

   - json 형식으로 값 전달(props로 전달 **:BarChartData**)

   - 샘플 데이터 참조

     ```json
     {
         "labels": [
             "January",
             "February",
             "March",
             "April",
             "May",
             "June",
             "July"
         ],
         "datasets": [
             {
                 "label": "My First dataset",
                 "backgroundColor": "#2f4860",
                 "data": [
                     65,
                     59,
                     80,
                     81,
                     56,
                     55,
                     40
                 ]
             },
             {
                 "label": "My Second dataset",
                 "backgroundColor": "#00bb7e",
                 "data": [
                     28,
                     48,
                     40,
                     19,
                     86,
                     27,
                     90
                 ]
             }
         ]
     }
     ```

   - 차트 샘플

     <img src="C:\Users\JeffKim\AppData\Roaming\Typora\typora-user-images\image-20220103160544038.png" alt="image-20220103160544038" style="zoom:33%;" />

5. DoughNutChart

   - views/common/chart/DoughNutChart.vue

   - json 형식으로 값 전달(props로 전달 **:DoughNutChartData**)

   - 샘플 데이터 참조

     ```json
     {
         "labels": [
             "A",
             "B",
             "C"
         ],
         "datasets": [
             {
                 "data": [
                     300,
                     50,
                     100
                 ],
                 "backgroundColor": [
                     "#FF6384",
                     "#36A2EB",
                     "#FFCE56"
                 ],
                 "hoverBackgroundColor": [
                     "#FF6384",
                     "#36A2EB",
                     "#FFCE56"
                 ]
             }
         ]
     }
     ```

   - 차트 샘플

     <img src="C:\Users\JeffKim\AppData\Roaming\Typora\typora-user-images\image-20220103161506071.png" alt="image-20220103161506071" style="zoom:33%;" />

6. Radar Chart

   - views/common/chart/RadarChart.vue

   - json 형식으로 값 전달(props로 전달 **:RadarChartData**)

   - 샘플 데이터 참조

     ```json
     {
         "labels": [
             "Eating",
             "Drinking",
             "Sleeping",
             "Designing",
             "Coding",
             "Cycling",
             "Running"
         ],
         "datasets": [
             {
                 "label": "My First dataset",
                 "backgroundColor": "rgba(179,181,198,0.2)",
                 "borderColor": "rgba(179,181,198,1)",
                 "pointBackgroundColor": "rgba(179,181,198,1)",
                 "pointBorderColor": "#fff",
                 "pointHoverBackgroundColor": "#fff",
                 "pointHoverBorderColor": "rgba(179,181,198,1)",
                 "data": [
                     65,
                     59,
                     90,
                     81,
                     56,
                     55,
                     40
                 ]
             },
             {
                 "label": "My Second dataset",
                 "backgroundColor": "rgba(255,99,132,0.2)",
                 "borderColor": "rgba(255,99,132,1)",
                 "pointBackgroundColor": "rgba(255,99,132,1)",
                 "pointBorderColor": "#fff",
                 "pointHoverBackgroundColor": "#fff",
                 "pointHoverBorderColor": "rgba(255,99,132,1)",
                 "data": [
                     28,
                     48,
                     40,
                     19,
                     96,
                     27,
                     100
                 ]
             }
         ]
     }
     ```

   - 차트 샘플

     <img src="C:\Users\JeffKim\AppData\Roaming\Typora\typora-user-images\image-20220103162435666.png" alt="image-20220103162435666" style="zoom:33%;" />
