# SideNav

- SideNav Component

  | Name      | Type               | Default | Description                              |
  | :-------- | :----------------- | :------ | :--------------------------------------- |
  | label     | string \| function | null    | 메뉴의 네이밍                            |
  | icon      | string             | null    | 아이콘                                   |
  | to        | string             | null    | routes 의 path 값                        |
  | command   | function           | null    | 항목을 클릭할 때 실행할 콜백 함수        |
  | url       | string             | null    | 항목을 클릭할 때 탐색하기 위한 외부 링크 |
  | items     | array              | null    | 자식 메뉴 항목의 배열                    |
  | disabled  | boolean/function   | false   | 항목 활성화 여부                         |
  | visible   | boolean/function   | true    | 항목 표시 여부                           |
  | target    | string             | null    | 링크된 문서를 열 위치                    |
  | separator | boolean            | false   | 항목 구분 기호                           |
  | style     | object             | null    | 메뉴 항목의 인라인 스타일                |
  | class     | string             | null    | 메뉴 항목의 스타일 클래스                |
  | key       | object             | null    | 항목의 고유 식별자                       |

- Navigation(외부링크 url, route to 속성을 사용하여 지정)

  ```javascript
  const items = [
      {
          label: 'Route Path',
          icon: 'pi pi-plus',
          to: '/fileupload'
      },
      {
          label: 'Named Route',
          icon: 'pi pi-plus',
          to: {name: 'fileupload'}
      },
      {
          label: 'External',
          icon: 'pi pi-check',
          url: 'https://www.primefaces.org/primevue'
      }
  ];
  ```
  
- Command

  ```javascript
  const items = [
      {
          label: 'New',
          icon: 'pi pi-plus',
          command: (event) => {
              // event.originalEvent: Browser event
              // event.item: Menuitem instance
          }
      }
  ];
  ```

- Visible

  ```javascript
  const items = [
      {
          label: 'Remove',
          visible: false
      },
      {
          label: 'Delete',
          visible: () => this.isUserAdmin() //관리자만 보여지게 할 메뉴를 설정 할 수 있습니다.
      }
  ];
  ```

- Items

  ```json
  {
    "label": "부서관리",
    "icon": "pi pi-fw pi-desktop",
    "items": [
      {
        "label": "매출파트그룹"
      },
      {
        "label": "부서 정보 관리"
      },
      {
        "label": "매출파트그룹2"
      }
    ]
  }
  ```

  
