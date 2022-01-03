
# Table Component 사용법

- views/common/Table.vue

- json 형식으로 테이블 값 전달, 첫 Depth key값으로 data로 지정 (props 로 전달 :TableData)

- data에 배열로 Object 값 전달 (Object에서 key값 테이블 head값, value값 테이블의 field값 )

- 샘플 데이터 참조

  ```json
  {
      "data": [
          {
              "name": "jeffkim",
              "age": 33,
              "gender": "Male",
              "addr": "Incheon",
              "contents": "Sexy Man"
          },
          {
              "name": "Victoria",
              "age": 22,
              "gender": "Female",
              "addr": "London",
              "contents": "Good Girl"
          },
          {
              "name": "Claire",
              "age": 3,
              "gender": "female",
              "addr": "Incheon",
              "contents": "Cute Baby"
          },
          {
              "name": "Tom",
              "age": 17,
              "gender": "Male",
              "addr": "Seoul",
              "contents": "Handsome Guy"
          },
          {
              "name": "Bill",
              "age": 40,
              "gender": "Male",
              "addr": "Tokyo",
              "contents": "Old Man"
          }
      ]
  }
  ```
