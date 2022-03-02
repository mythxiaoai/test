
// $.ajax({
//   type: "post",
//   data: {
//     document: "测试数据",
//     supplier_id: 1234,
//     type: "9999",
//     logistics_provider: "9999",
//     express_num: "9999",
//     excepted_arrive_at: "测试数据",
//     buyer_name: "测试数据",
//     buyer_id: 123,
//     pay_method: "buyer_prepaid",
//     items:[["Y1",1,"件"],["Y2",1,"件"]],
//   },
//   url: `http://mwms.dev.companyP2.vip/api/mars/add_delivery_order`,
//   success(data) {
//       console.log(data);
//   },
// });
let json = {
  "document": "king2132132",
  "supplier_id": "2132132",
  "type": "delivery",
  "logistics_provider": "123",
  "express_num": "SF123456",
  "excepted_arrive_at": "2021-04-09 16:12:32",
  "buyer_name": "jack",
  "buyer_id": 123,
  "pay_method": "buyer_prepaid",
  "items": [
      {
          "material_code": "19FL011419FL000000110031150",
          "quantity": 1,
          "unit": "456"
      }
  ]
}
console.log(JSON.stringify(json));
