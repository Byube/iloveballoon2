
# Dialog Component

- @/views/common/dialog/Dialog.vue

- @/service/DialogService.js

- component 호출 후 아래와 delete 샘플 확인

  ```vue
  //delete dialog 호출 샘플
  <template>
  <DeleteDialog
          //모든 액션에 동일하게 설정
          @check-action="onDialogToggle"
  />
  </template>
  <script>
  import DeleteDialog from './dialog/Dialog.vue';
  import { DialogService } from "@/service/DialogService.js";
  export default {
      components:{
          DeleteDialog
      },
      setup(){
          const {
              showDialog,
          } = DialogService();
          const DeleteDialog = () => {
              //삭제, 업데이트, 저장 등 이벤트에 따라 문구를 변경하면 dialog에서 반영하여 표출
              showDialog('Are you sure want to delete it?');
          }
          const onDialogToggle = (status) => {
              //자식 component에서 true / false 값 전달
              if(status){
                  //Do Delete Action 
              }
          }
          return{
              DeleteDialog,
              onDialogToggle
          }
      }
  }
  </script>
  ```

  
