// 合并两个有序链表
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
  let dummy = new ListNode(null);
  let current = dummy;
  if(list1 ===null){
    return list2;
  }else if(list2 ===null){
    return list1;
  }
     
  while (list1!==null && list2!==null) {
      if (list1.val <= list2.val) {
          current.next = list1;
          list1 = list1.next;
      }else{
           current.next = list2;
          list2 = list2.next;
      }
      current = current.next;
  }

  // 处理剩余节点
  current.next = list1 === null ? list2 : list1;

return dummy.next;
};