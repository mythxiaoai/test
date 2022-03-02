import {h,Teleport} from "vue";
import { Spin } from "ant-design-vue";

export default  {
  setup(){
    return ()=>h(Teleport,{to:"body"},[h(Spin)])
  }
}