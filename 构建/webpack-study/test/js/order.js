const selectHTML = `
<select>
<optgroup label="A"></optgroup>
<optgroup label="B"></optgroup>
<optgroup label="C"></optgroup>
<optgroup label="D"></optgroup>
<optgroup label="E"></optgroup>
<optgroup label="F"></optgroup>
<optgroup label="G"></optgroup>
<optgroup label="H"></optgroup>
<optgroup label="I"></optgroup>
<optgroup label="J"></optgroup>
<optgroup label="K"></optgroup>
<optgroup label="L"></optgroup>
<optgroup label="M"></optgroup>
<optgroup label="N"></optgroup>
<optgroup label="O"></optgroup>
<optgroup label="P"></optgroup>
<optgroup label="Q"></optgroup>
<optgroup label="R"></optgroup>
<optgroup label="S"></optgroup>
<optgroup label="T"></optgroup>
<optgroup label="U"></optgroup>
<optgroup label="V"></optgroup>
<optgroup label="W"></optgroup>
<optgroup label="X"></optgroup>
<optgroup label="Y"></optgroup>
<optgroup label="Z"></optgroup>
</select>
`;
//接口
var http = {
  data(params) {
    return $.ajax({ url: "airTicketDetail", type: "POST", data: params });
  },
  baoxian() {
    return $.ajax({ url: "airTicketDetail", type: "POST", data: params });
  }
};

var vm = new Vue({
  async created() {
    // if (!$.cookie("id")) {
    //   alert("获取信息失败，请重新购票");
    //   window.location.href = "index";
    //   return;
    // }
    let params = {
      id: $.cookie("id"),
      execution: $.cookie("execution"),
      session: $.cookie("session"),
      solutionSet: $.cookie("solutionSet")
    };
    // let params = {
    //   flightDateList:
    //   originCityList:
    //   firstSegDepDate:
    //   secSegArrDate:
    //   arriveCityList:
    //   flightType:

    // }

    window.loading.show();
    //let res = await http.data(params);
    let res = {"data":{"contactPersonInfos":{"svcEContactPersonDtos":[{"mobilePhone":"15527732315","contactName":"艾华桥","cpId":37016611,"userIdType":"FFPNO","userId":"615527732315","email":"774813571@qq.com"}]},"planeTicket":{"ita":{"solutionSet":"06kUgRBOMe41VrqROzaVEsN","data":{"fare":[{"ruleSet":[{"rule":[{"block":["  CHANGES\n    ANY TIME\n      CHARGE CNY 800.\n         NOTE -\n          A CHANGE IS A ROUTING/DATE/BOOKING CLASS/FLIGHT\n          MODIFICATION. WHEN MORE THAN ONE FARE COMPONENT\n          IS BEING CHANGED THE HIGHEST PENALTY OF ALL\n          CHANGED FARE COMPONENTS WILL APPLY.\n          BEFORE DEPARTURE OF JOURNEY\n          IF CHANGE DOES NOT OCCUR ON THE FIRST FARE\n          COMPONENT OF THE JOURNEY NEW FARE WILL BE\n          RECALCULATED USING FARES IN EFFECT WHEN TKT WAS\n          ISSUED.\n          WHEN CHANGE OCCURS ON THE FIRST FARE COMPONENT OF\n          THE JOURNEY ONLY OR ON THE FIRST FARE COMPONENT\n          AND OTHER FARE COMPONENT OF THE JOURNEY NEW FARE\n          WILL BE RECALCULATED USING FARES IN EFFECT ON\n          DATE OF REISSUE.\n          AFTER DEPARTURE OF JOURNEY\n          NEW FARE WILL BE RECALCULATED USING FARES IN\n          EFFECT WHEN TKT WAS ISSUED.\n          THE NEW TICKET FARE AMOUNT MUST BE EQUAL TO OR\n          HIGHER THAN THE PREVIOUS TICKET FARE AMOUNT.\n          CHARGE DIFFERENCE IN FARE PLUS CHANGE FEE IF ANY\n          IF THE NEW FARE AMOUNT IS LOWER THAN THE PREVIOUS\n          FARE AMOUNT IGNORE ANY RESIDUAL AMOUNT AND NO\n          REFUND PERMITTED. CHARGE CHANGE FEE IF ANY\n          APPLY THE HIGHEST CHANGE FEE OF ALL CHANGED FARE\n          COMPONENTS WITHIN THE JOURNEY. CHANGE FEE IS\n          SUBJECT TO EACH CHANGE TRANSACTION.\n          CHANGES MUST BE WITHIN TICKET VALIDITY.\n  CANCELLATIONS\n    ANY TIME\n      TICKET IS NON-REFUNDABLE.\n         NOTE -\n          CHILD 2-11 AND INFANT UNDER 2 WITH A SEAT\n          CHANGE/CANCELLATION/NOSHOW\n             ANY TIME\n                SAME CHARGE WITH ADULT.\n          INFANT UNDER 2 WITHOUT A SEAT\n          CHANGE/CANCELLATION/NOSHOW\n             ANY TIME\n                PERMITTED WITH NO CHARGE.\n         NOTE -\n          CANCELLATIONS\n          THE MOST RESTRICTED RULE WILL BE APPLIED WHEN\n          FARES COMBINED.\n          AND\n          FOR REFUNDABLE FARES/TICKETS\n          REFUND THE DIFFERENCE BETWEEN THE FARE PAID AND\n          THE APPLICABLE FARE FOR THE TRANSPORTATION USE.\n          AND\n          FOR NON REFUNDABLE FARES/TICKETS\n          THE INTERNATIONAL/DOMESTIC SURCHARGES OF\n          YQ/CARRIER IMPOSED MISC FEE AND YR/FUEL SERVICE\n          FEE WILL NOT BE REFUNDED."],"category":16,"type":"RULE"},{"block":["  THE ORIGINAL AND THE REISSUED TICKET MUST BE ANNOTATED -\n  Q/NONEND PENALTY APPLS - IN THE ENDORSEMENT BOX."],"category":18,"type":"RULE"}]}],"rkey":"AHGsIhXbhzFYLlyosnt1tcn2keM+73xi2y9QQVyE95/sm1/"},{"ruleSet":[{"rule":[{"block":["         NOTE -\n          CHANGE-\n          UP TO 168 HOURS PRIOR TO DEPARTURE\n           PERMITTED\n          UP TO 48 HOURS PRIOR TO DEPARTURE\n           CHARGE 5 PERCENT FOR THIS DOMESTIC SECTOR\n          UP TO 4 HOURS PRIOR TO DEPARTURE\n           CHARGE 5 PERCENT FOR THIS DOMESTIC SECTOR\n          AFTER 4 HOURS PRIOR TO DEPARTURE\n           CHARGE 10 PERCENT FOR THIS DOMESTIC SECTOR\n          NOTE-\n          APPLY THE HIGHEST CHANGE FEE OF ALL CHANGED\n          FARE COMPONENTS WITHIN THE JOURNEY.\n         NOTE -\n          A CHANGE IS A ROUTING/DATE/BOOKING CLASS/FLIGHT\n          MODIFICATION. WHEN MORE THAN ONE FARE COMPONENT\n          IS BEING CHANGED THE HIGHEST PENALTY OF ALL\n          CHANGED FARE COMPONENTS WILL APPLY.\n          BEFORE DEPARTURE OF JOURNEY\n          IF CHANGE DOES NOT OCCUR ON THE FIRST FARE\n          COMPONENT OF THE JOURNEY NEW FARE WILL BE\n          RECALCULATED USING FARES IN EFFECT WHEN TKT WAS\n          ISSUED.\n          WHEN CHANGE OCCURS ON THE FIRST FARE COMPONENT OF\n          THE JOURNEY ONLY OR ON THE FIRST FARE COMPONENT\n          AND OTHER FARE COMPONENT OF THE JOURNEY NEW FARE\n          WILL BE RECALCULATED USING FARES IN EFFECT ON\n          DATE OF REISSUE.\n          AFTER DEPARTURE OF JOURNEY\n          NEW FARE WILL BE RECALCULATED USING FARES IN\n          EFFECT WHEN TKT WAS ISSUED.\n          THE NEW TICKET FARE AMOUNT MUST BE EQUAL TO OR\n          HIGHER THAN THE PREVIOUS TICKET FARE AMOUNT.\n          CHARGE DIFFERENCE IN FARE PLUS CHANGE FEE IF ANY\n          IF THE NEW FARE AMOUNT IS LOWER THAN THE PREVIOUS\n          FARE AMOUNT IGNORE ANY RESIDUAL AMOUNT AND NO\n          REFUND PERMITTED. CHARGE CHANGE FEE IF ANY\n          APPLY THE HIGHEST CHANGE FEE OF ALL CHANGED FARE\n          COMPONENTS WITHIN THE JOURNEY. CHANGE FEE IS\n          SUBJECT TO EACH CHANGE TRANSACTION.\n          CHANGES MUST BE WITHIN TICKET VALIDITY.\n         NOTE -\n          REFUND-\n          UP TO 168 HOURS PRIOR TO DEPARTURE\n           CHARGE 5 PERCENT FOR THIS DOMESTIC SECTOR\n          UP TO 48 HOURS PRIOR TO DEPARTURE\n           CHARGE 5 PERCENT FOR THIS DOMESTIC SECTOR     UP\n          TO 4 HOURS PRIOR TO DEPARTURE\n           CHARGE 10 PERCENT FOR THIS DOMESTIC SECTOR\n          AFTER 4 HOURS PRIOR TO DEPARTURE\n           CHARGE 20 PERCENT FOR THIS DOMESTIC SECTOR\n          NOTE-\n          APPLY THE HIGHEST REFUND FEE OF WITHIN THE\n          JOURNEY.\n         NOTE -\n          THE MOST RESTRICTED RULE WILL BE APPLIED WHEN\n          FARES COMBINED.\n          AND\n          REFUND THE DIFFERENCE BETWEEN THE FARE PAID AND\n          THE APPLICABLE FARE FOR THE TRANSPORTATION\n          USE.\n         NOTE -\n          CHILD 2-11 AND INFANT UNDER 2 WITH A SEAT\n          CHANGE/CANCELLATION\n             ANY TIME\n                SAME CHARGE WITH ADULT.\n          INFANT UNDER 2 WITHOUT A SEAT\n          CHANGE/CANCELLATION\n             ANY TIME\n                PERMITTED WITH NO CHARGE.\n         NOTE -\n          CANCELLATIONS\n          THE MOST RESTRICTED RULE WILL BE APPLIED WHEN\n          FARES COMBINED.\n          AND\n          FOR REFUNDABLE FARES/TICKETS\n          REFUND THE DIFFERENCE BETWEEN THE FARE PAID AND\n          THE APPLICABLE FARE FOR THE TRANSPORTATION USE.\n          AND\n          FOR NON REFUNDABLE FARES/TICKETS\n          THE INTERNATIONAL/DOMESTIC SURCHARGES OF\n          YQ/CARRIER IMPOSED MISC FEE AND YR/FUEL SERVICE\n          FEE WILL NOT BE REFUNDED."],"category":16,"type":"RULE"},{"block":["  THE ORIGINAL AND THE REISSUED TICKET MUST BE ANNOTATED -\n  Q/PENALTY APPLS - IN THE ENDORSEMENT BOX."],"category":18,"type":"RULE"}]}],"rkey":"AHIsU49V89YNlyzD3U4qw8ZKGrlDphfe7XhxtiHy3Co6"},{"ruleSet":[{"rule":[{"block":["  CHANGES\n    ANY TIME\n      CHARGE CNY 800.\n         NOTE -\n          A CHANGE IS A ROUTING/DATE/BOOKING CLASS/FLIGHT\n          MODIFICATION. WHEN MORE THAN ONE FARE COMPONENT\n          IS BEING CHANGED THE HIGHEST PENALTY OF ALL\n          CHANGED FARE COMPONENTS WILL APPLY.\n          BEFORE DEPARTURE OF JOURNEY\n          IF CHANGE DOES NOT OCCUR ON THE FIRST FARE\n          COMPONENT OF THE JOURNEY NEW FARE WILL BE\n          RECALCULATED USING FARES IN EFFECT WHEN TKT WAS\n          ISSUED.\n          WHEN CHANGE OCCURS ON THE FIRST FARE COMPONENT OF\n          THE JOURNEY ONLY OR ON THE FIRST FARE COMPONENT\n          AND OTHER FARE COMPONENT OF THE JOURNEY NEW FARE\n          WILL BE RECALCULATED USING FARES IN EFFECT ON\n          DATE OF REISSUE.\n          AFTER DEPARTURE OF JOURNEY\n          NEW FARE WILL BE RECALCULATED USING FARES IN\n          EFFECT WHEN TKT WAS ISSUED.\n          THE NEW TICKET FARE AMOUNT MUST BE EQUAL TO OR\n          HIGHER THAN THE PREVIOUS TICKET FARE AMOUNT.\n          CHARGE DIFFERENCE IN FARE PLUS CHANGE FEE IF ANY\n          IF THE NEW FARE AMOUNT IS LOWER THAN THE PREVIOUS\n          FARE AMOUNT IGNORE ANY RESIDUAL AMOUNT AND NO\n          REFUND PERMITTED. CHARGE CHANGE FEE IF ANY\n          APPLY THE HIGHEST CHANGE FEE OF ALL CHANGED FARE\n          COMPONENTS WITHIN THE JOURNEY. CHANGE FEE IS\n          SUBJECT TO EACH CHANGE TRANSACTION.\n          CHANGES MUST BE WITHIN TICKET VALIDITY.\n  CANCELLATIONS\n    ANY TIME\n      TICKET IS NON-REFUNDABLE.\n         NOTE -\n          CHILD 2-11 AND INFANT UNDER 2 WITH A SEAT\n          CHANGE/CANCELLATION/NOSHOW\n             ANY TIME\n                SAME CHARGE WITH ADULT.\n          INFANT UNDER 2 WITHOUT A SEAT\n          CHANGE/CANCELLATION/NOSHOW\n             ANY TIME\n                PERMITTED WITH NO CHARGE.\n         NOTE -\n          CANCELLATIONS\n          THE MOST RESTRICTED RULE WILL BE APPLIED WHEN\n          FARES COMBINED.\n          AND\n          FOR REFUNDABLE FARES/TICKETS\n          REFUND THE DIFFERENCE BETWEEN THE FARE PAID AND\n          THE APPLICABLE FARE FOR THE TRANSPORTATION USE.\n          AND\n          FOR NON REFUNDABLE FARES/TICKETS\n          THE INTERNATIONAL/DOMESTIC SURCHARGES OF\n          YQ/CARRIER IMPOSED MISC FEE AND YR/FUEL SERVICE\n          FEE WILL NOT BE REFUNDED."],"category":16,"type":"RULE"},{"block":["  THE ORIGINAL AND THE REISSUED TICKET MUST BE ANNOTATED -\n  Q/NONEND PENALTY APPLS - IN THE ENDORSEMENT BOX."],"category":18,"type":"RULE"}]}],"rkey":"AZ43C8mhZpw6UQWkIDwTxQI0OTsVVulCzeAN1zw1wQ7u2i41cAvSp27BHR0eb85Ms1vnhUkdKlmSoUUeQU6Nei1hrCxEyKE"}],"carrier":[{"code":"CZ","name":"中国南方航空公司"}],"city":[{"country":"CN","code":"CAN","name":"广州"},{"country":"TR","code":"IST","name":"伊斯坦布尔"},{"country":"CN","code":"WUH","name":"武汉"}],"aircraft":[{"code":"319","name":"空客319","shortName":"Airbus A319"},{"code":"738","name":"波音737","shortName":"Boeing 737"},{"code":"788","name":"波音787-8","shortName":"Boeing 787"}],"tax":[{"dataKey":"232E1D21292I2G2F2I2K","country":"CN","code":"CN","name":"China Airport Fee","id":"CN-AIRPORT"},{"dataKey":"2K2I1D2D1M1D1G1G1H","country":"TR","code":"M6","name":"Turkey International Flights Security Charge","id":"TR-M6-001"},{"dataKey":"2K2I1D2J2M231D292E2K2C1D1I","country":"TR","code":"TR","name":"Turkey Airport Service Charge International","id":"TR-SVC-INTL-2"},{"dataKey":"2P2H291D232Q","code":"YQ","name":"CZ YQ surcharge","id":"YQI-CZ"},{"dataKey":"2P2I261D232Q","code":"YR","name":"CZ YR surcharge","id":"YRF-CZ"}],"airport":[{"code":"CAN","city":"CAN","latitude":23.3925,"name":"广州白云","longitude":113.298889},{"code":"IST","city":"IST","latitude":41.2705556,"name":"伊斯坦布尔","longitude":28.7425},{"code":"WUH","city":"WUH","latitude":30.7838889,"name":"武汉天河","longitude":114.208056}]},"ticketingDetails":{"saleFareTotal":{"amount":4190,"currency":"CNY"},"saleTotal":{"amount":6216,"currency":"CNY"},"slice":[{"ext":{"warnings":{"longLayover":true}},"duration":1085,"stopCount":1,"segment":[{"flight":{"number":3705,"carrier":"CZ"},"bookingInfo":[{"bookingCodeCount":"6","marriedSegmentIndex":0,"cabin":"COACH","bookingCode":"Y"}],"origin":"CAN","destination":"WUH","connection":{"ext":{"warnings":{"longLayover":true}},"duration":345},"departure":"2019-12-20T07:50+08:00","pricing":[{"ext":{"pax":{"adults":1}},"fare":[{"carrier":"CZ","city1":"CAN","city2":"WUH","extendedFareCode":"Y"}]}],"hash":"Gv8Blb71n9BpSxAd","leg":[{"duration":115,"scheduledServices":[{"meal":[{"code":"C","value":""}],"cabin":"BUSINESS"},{"meal":[{"code":"C","value":""}],"cabin":"PREMIUM-COACH"},{"meal":[{"code":"C","value":""}],"cabin":"COACH"}],"distance":{"units":"MI","value":513},"arrival":"2019-12-20T09:45+08:00","aircraft":{"code":"319","name":"Airbus A319"},"origin":"CAN","destination":"WUH","destinationTerminal":"3","departure":"2019-12-20T07:50+08:00","originTerminal":"2"}]},{"flight":{"number":8341,"carrier":"CZ"},"bookingInfo":[{"bookingCodeCount":"9","marriedSegmentIndex":1,"cabin":"COACH","bookingCode":"N"}],"origin":"WUH","destination":"IST","departure":"2019-12-20T15:30+08:00","pricing":[{"ext":{"pax":{"adults":1}},"fare":[{"carrier":"CZ","city1":"WUH","city2":"IST","extendedFareCode":"NZRQI"}]}],"hash":"GjUGOwT6CXC+6FlN","leg":[{"duration":625,"scheduledServices":[{"meal":[{"code":"D","value":""}],"cabin":"BUSINESS"},{"meal":[{"code":"D","value":""}],"cabin":"COACH"}],"distance":{"units":"MI","value":4636},"arrival":"2019-12-20T20:55+03:00","aircraft":{"code":"788","name":"Boeing 787-8"},"origin":"WUH","destination":"IST","departure":"2019-12-20T15:30+08:00","originTerminal":"3"}]}]},{"ext":{"warnings":{"overnight":true}},"duration":785,"stopCount":1,"segment":[{"flight":{"number":8342,"carrier":"CZ"},"bookingInfo":[{"bookingCodeCount":"9","marriedSegmentIndex":2,"cabin":"COACH","bookingCode":"N"}],"origin":"IST","destination":"WUH","connection":{"duration":135},"departure":"2019-12-25T23:20+03:00","pricing":[{"ext":{"pax":{"adults":1}},"fare":[{"carrier":"CZ","city1":"CAN","city2":"IST","extendedFareCode":"NZRQI"}]}],"hash":"GZElouVgPfknMqLu","leg":[{"ext":{"warnings":{"overnight":true}},"duration":540,"scheduledServices":[{"meal":[{"code":"D","value":""}],"cabin":"BUSINESS"},{"meal":[{"code":"D","value":""}],"cabin":"COACH"}],"distance":{"units":"MI","value":4636},"arrival":"2019-12-26T13:20+08:00","aircraft":{"code":"788","name":"Boeing 787-8"},"origin":"IST","destination":"WUH","destinationTerminal":"3","departure":"2019-12-25T23:20+03:00"}]},{"flight":{"number":3706,"carrier":"CZ"},"bookingInfo":[{"bookingCodeCount":"9","marriedSegmentIndex":3,"cabin":"COACH","bookingCode":"K"}],"origin":"WUH","destination":"CAN","departure":"2019-12-26T15:35+08:00","pricing":[{"ext":{"pax":{"adults":1}},"fare":[{"carrier":"CZ","city1":"CAN","city2":"IST","extendedFareCode":"NZRQI"}]}],"hash":"GCqwEakOOVBeTZJR","leg":[{"duration":110,"scheduledServices":[{"meal":[{"code":"C","value":""}],"cabin":"BUSINESS"},{"meal":[{"code":"C","value":""}],"cabin":"PREMIUM-COACH"},{"meal":[{"code":"C","value":""}],"cabin":"COACH"}],"distance":{"units":"MI","value":513},"arrival":"2019-12-26T17:25+08:00","aircraft":{"code":"738","name":"Boeing 737-800 Passenger"},"origin":"WUH","destination":"CAN","destinationTerminal":"2","departure":"2019-12-26T15:35+08:00","originTerminal":"3"}]}]}],"saleTaxTotal":{"amount":2026,"currency":"CNY"},"displayTaxTotal":{"amount":2026,"currency":"CNY"},"displayTotal":{"amount":6216,"currency":"CNY"},"id":"HGcc7zzok8GVDh6s0AOTWA001","currencyConversion":[{"application":"FARES","rate":0.142511,"from":"CNY","rateTable":"ROE","to":"NUC"},{"application":"FARES","rate":1.111104,"from":"EUR","rateTable":"ROE","to":"NUC"},{"application":"FARES","rate":7.016987,"from":"NUC","rateTable":"ROE","to":"CNY"},{"application":"FARES","rate":1,"from":"NUC","rateTable":"ROE","to":"USD"},{"application":"FARES","rate":1,"from":"USD","rateTable":"ROE","to":"NUC"},{"application":"TAXES","rate":1.905766,"from":"AED","rateTable":"BSR","to":"CNY"},{"application":"TAXES","rate":7.803632,"from":"EUR","rateTable":"BSR","to":"CNY"},{"application":"TAXES","rate":0.006012,"from":"KRW","rateTable":"BSR","to":"CNY"},{"application":"TAXES","rate":0.111982,"from":"RUB","rateTable":"BSR","to":"CNY"},{"application":"TAXES","rate":1.866782,"from":"SAR","rateTable":"BSR","to":"CNY"},{"application":"TAXES","rate":6.998937,"from":"USD","rateTable":"BSR","to":"CNY"}],"displayFareTotal":{"amount":4190,"currency":"CNY"},"pricing":[{"cocFareTotal":{"amount":4190,"currency":"CNY"},"ext":{"pax":{"adults":1}},"fare":[{"displayBasePrice":{"amount":1940,"currency":"CNY"},"city1":"CAN","city2":"WUH","globalIndicator":"EH","bookingInfo":[{"segment":{"flight":{"number":3705,"carrier":"CZ"},"origin":"CAN","destination":"WUH","departure":"2019-12-20T07:50+08:00","hash":"Gv8Blb71n9BpSxAd"},"bookingCode":"Y"}],"extendedFareCode":"Y","saleBasePrice":{"amount":1940,"currency":"CNY"},"destinationCity":"WUH","adjustedPrice":{"amount":1940,"currency":"CNY"},"carrier":"CZ","originCity":"CAN","rkey":"AHIsU49V89YNlyzD3U4qw8ZKGrlDphfe7XhxtiHy3Co6","saleAdjustedPrice":{"amount":1940,"currency":"CNY"},"tag":"ONE-WAY","ptc":["ADT"],"basePrice":{"amount":1940,"currency":"CNY"}},{"displayBasePrice":{"amount":1250,"currency":"CNY"},"city1":"WUH","city2":"IST","globalIndicator":"EH","bookingInfo":[{"segment":{"flight":{"number":8341,"carrier":"CZ"},"origin":"WUH","destination":"IST","departure":"2019-12-20T15:30+08:00","hash":"GjUGOwT6CXC+6FlN"},"bookingCode":"N"}],"extendedFareCode":"NZRQI","saleBasePrice":{"amount":1250,"currency":"CNY"},"destinationCity":"IST","adjustedPrice":{"amount":1250,"currency":"CNY"},"carrier":"CZ","ruleSummary":{"penalties":{"changePenalty":[{"application":"BEFORE-DEPARTURE","minPrice":"CNY800","maxPrice":"CNY800"},{"application":"AFTER-DEPARTURE","minPrice":"CNY800","maxPrice":"CNY800"}],"cancellationAndRefundPenalty":[{"application":"NO-SHOW","minPrice":"CNY800","maxPrice":"CNY800"}],"nonrefundable":true}},"originCity":"WUH","rkey":"AHGsIhXbhzFYLlyosnt1tcn2keM+73xi2y9QQVyE95/sm1/","saleAdjustedPrice":{"amount":1250,"currency":"CNY"},"tag":"ROUND-TRIP","ptc":["ADT"],"basePrice":{"amount":1250,"currency":"CNY"}},{"displayBasePrice":{"amount":1000,"currency":"CNY"},"city1":"CAN","city2":"IST","globalIndicator":"EH","bookingInfo":[{"segment":{"flight":{"number":8342,"carrier":"CZ"},"origin":"IST","destination":"WUH","departure":"2019-12-25T23:20+03:00","hash":"GZElouVgPfknMqLu"},"bookingCode":"N"},{"segment":{"flight":{"number":3706,"carrier":"CZ"},"origin":"WUH","destination":"CAN","departure":"2019-12-26T15:35+08:00","hash":"GCqwEakOOVBeTZJR"},"bookingCode":"K"}],"extendedFareCode":"NZRQI","saleBasePrice":{"amount":1000,"currency":"CNY"},"destinationCity":"CAN","adjustedPrice":{"amount":1000,"currency":"CNY"},"carrier":"CZ","ruleSummary":{"penalties":{"changePenalty":[{"application":"BEFORE-DEPARTURE","minPrice":"CNY800","maxPrice":"CNY800"},{"application":"AFTER-DEPARTURE","minPrice":"CNY800","maxPrice":"CNY800"}],"cancellationAndRefundPenalty":[{"application":"NO-SHOW","minPrice":"CNY800","maxPrice":"CNY800"}],"nonrefundable":true}},"originCity":"IST","rkey":"AZ43C8mhZpw6UQWkIDwTxQI0OTsVVulCzeAN1zw1wQ7u2i41cAvSp27BHR0eb85Ms1vnhUkdKlmSoUUeQU6Nei1hrCxEyKE","saleAdjustedPrice":{"amount":1000,"currency":"CNY"},"tag":"ROUND-TRIP","ptc":["ADT"],"basePrice":{"amount":1000,"currency":"CNY"}}],"fareCalculation":[{"line":["CAN CZ X/WUH276.47Y CZ IST178.13NZRQI CZ X/WUH CZ CAN142.51NZRQI NUC597.11END ROE7.016987"],"boxedTax":[{"taxSubcode":"001","price":{"amount":190,"currency":"CNY"},"taxCode":"CN"},{"taxSubcode":"001","price":{"amount":24,"currency":"CNY"},"taxCode":"M6"},{"taxSubcode":"001","price":{"amount":156,"currency":"CNY"},"taxCode":"TR"},{"taxSubcode":"I","price":{"amount":56,"currency":"CNY"},"taxCode":"YQ"},{"taxSubcode":"F","price":{"amount":1600,"currency":"CNY"},"taxCode":"YR"}]}],"carryOnBaggageAllowance":[{"freeBaggageAllowance":[{"pieces":1}]}],"salePrice":{"amount":6216,"currency":"CNY"},"saleTaxTotal":{"amount":2026,"currency":"CNY"},"tax":[{"code":"CN","displayPrice":{"amount":190,"currency":"CNY"},"salePrice":{"amount":190,"currency":"CNY"},"id":"CN-AIRPORT","status":"APPLIED"},{"code":"YR","displayPrice":{"amount":1600,"currency":"CNY"},"salePrice":{"amount":1600,"currency":"CNY"},"id":"YRF-CZ","status":"APPLIED"},{"code":"YQ","displayPrice":{"amount":56,"currency":"CNY"},"salePrice":{"amount":56,"currency":"CNY"},"id":"YQI-CZ","status":"APPLIED"},{"code":"TR","displayPrice":{"amount":156,"currency":"CNY"},"salePrice":{"amount":156,"currency":"CNY"},"id":"TR-SVC-INTL-2","status":"APPLIED"},{"code":"M6","displayPrice":{"amount":24,"currency":"CNY"},"salePrice":{"amount":24,"currency":"CNY"},"id":"TR-M6-001","status":"APPLIED"}],"checkedBaggageAllowance":[{"freeBaggageAllowance":[{"pieces":1}]},{"freeBaggageAllowance":[{"pieces":1}]}],"displayFareTotal":{"amount":4190,"currency":"CNY"},"saleFareTotal":{"amount":4190,"currency":"CNY"},"displayPrice":{"amount":6216,"currency":"CNY"},"passenger":[{"id":"0","ptc":["ADT"]}],"displayTaxTotal":{"amount":2026,"currency":"CNY"},"fareRestriction":[{"couponValidityDateInfo":[{"notValidBefore":"2019-12-20","segment":{"flight":{"number":3705,"carrier":"CZ"},"bookingInfo":[{"fare":{"code":"Y"}}],"origin":"CAN","destination":"WUH","departure":"2019-12-20T07:50+08:00","hash":"Gv8Blb71n9BpSxAd"},"notValidAfter":"2019-12-20"},{"notValidBefore":"2019-12-20","segment":{"flight":{"number":8341,"carrier":"CZ"},"bookingInfo":[{"fare":{"code":"NZRQI"}}],"origin":"WUH","destination":"IST","departure":"2019-12-20T15:30+08:00","hash":"GjUGOwT6CXC+6FlN"},"notValidAfter":"2019-12-20"},{"notValidBefore":"2019-12-25","segment":{"flight":{"number":8342,"carrier":"CZ"},"bookingInfo":[{"fare":{"code":"NZRQI"}}],"origin":"IST","destination":"WUH","departure":"2019-12-25T23:20+03:00","hash":"GZElouVgPfknMqLu"},"notValidAfter":"2019-12-25"},{"notValidBefore":"2019-12-26","segment":{"flight":{"number":3706,"carrier":"CZ"},"bookingInfo":[{"fare":{"code":"NZRQI"}}],"origin":"WUH","destination":"CAN","departure":"2019-12-26T15:35+08:00","hash":"GCqwEakOOVBeTZJR"},"notValidAfter":"2019-12-26"}],"earliestReturn":{"date":"2019-12-23"},"latestReturn":{"date":"2020-02-20"}}]}]},"session":"3cJ0WGr1ooN40IcY0I8JjcCBf","id":"9vnUphCnGQUp5Etuu0WGr2","bookingDetails":{"saleFareTotal":{"amount":4190,"currency":"CNY"},"saleTotal":{"amount":6216,"currency":"CNY"},"slice":[{"ext":{"warnings":{"longLayover":true}},"duration":1085,"stopCount":1,"segment":[{"flight":{"number":3705,"carrier":"CZ"},"bookingInfo":[{"bookingCodeCount":"6","marriedSegmentIndex":0,"cabin":"COACH","bookingCode":"Y"}],"origin":"CAN","destination":"WUH","connection":{"ext":{"warnings":{"longLayover":true}},"duration":345},"pricing":[{"ext":{"pax":{"adults":1}},"fare":[{"carrier":"CZ","city1":"CAN","city2":"WUH","extendedFareCode":"Y","ptc":["ADT"]}]}],"leg":[{"duration":115,"scheduledServices":[{"meal":[{"code":"C","value":""}],"cabin":"BUSINESS"},{"meal":[{"code":"C","value":""}],"cabin":"PREMIUM-COACH"},{"meal":[{"code":"C","value":""}],"cabin":"COACH"}],"distance":{"units":"MI","value":513},"arrival":"2019-12-20T09:45+08:00","aircraft":{"code":"319","name":"Airbus A319"},"origin":"CAN","destination":"WUH","destinationTerminal":"3","departure":"2019-12-20T07:50+08:00","originTerminal":"2"}]},{"flight":{"number":8341,"carrier":"CZ"},"bookingInfo":[{"bookingCodeCount":"9","marriedSegmentIndex":1,"cabin":"COACH","bookingCode":"N"}],"origin":"WUH","destination":"IST","pricing":[{"ext":{"pax":{"adults":1}},"fare":[{"carrier":"CZ","city1":"WUH","city2":"IST","extendedFareCode":"NZRQI","ptc":["ADT"]}]}],"leg":[{"duration":625,"scheduledServices":[{"meal":[{"code":"D","value":""}],"cabin":"BUSINESS"},{"meal":[{"code":"D","value":""}],"cabin":"COACH"}],"distance":{"units":"MI","value":4636},"arrival":"2019-12-20T20:55+03:00","aircraft":{"code":"788","name":"Boeing 787-8"},"origin":"WUH","destination":"IST","departure":"2019-12-20T15:30+08:00","originTerminal":"3"}]}]},{"ext":{"warnings":{"overnight":true}},"duration":785,"stopCount":1,"segment":[{"flight":{"number":8342,"carrier":"CZ"},"bookingInfo":[{"bookingCodeCount":"9","marriedSegmentIndex":2,"cabin":"COACH","bookingCode":"N"}],"origin":"IST","destination":"WUH","connection":{"duration":135},"pricing":[{"ext":{"pax":{"adults":1}},"fare":[{"carrier":"CZ","city1":"CAN","city2":"IST","extendedFareCode":"NZRQI","ptc":["ADT"]}]}],"leg":[{"ext":{"warnings":{"overnight":true}},"duration":540,"scheduledServices":[{"meal":[{"code":"D","value":""}],"cabin":"BUSINESS"},{"meal":[{"code":"D","value":""}],"cabin":"COACH"}],"distance":{"units":"MI","value":4636},"arrival":"2019-12-26T13:20+08:00","aircraft":{"code":"788","name":"Boeing 787-8"},"origin":"IST","destination":"WUH","destinationTerminal":"3","departure":"2019-12-25T23:20+03:00"}]},{"flight":{"number":3706,"carrier":"CZ"},"bookingInfo":[{"bookingCodeCount":"9","marriedSegmentIndex":3,"cabin":"COACH","bookingCode":"K"}],"origin":"WUH","destination":"CAN","pricing":[{"ext":{"pax":{"adults":1}},"fare":[{"carrier":"CZ","city1":"CAN","city2":"IST","extendedFareCode":"NZRQI","ptc":["ADT"]}]}],"leg":[{"duration":110,"scheduledServices":[{"meal":[{"code":"C","value":""}],"cabin":"BUSINESS"},{"meal":[{"code":"C","value":""}],"cabin":"PREMIUM-COACH"},{"meal":[{"code":"C","value":""}],"cabin":"COACH"}],"distance":{"units":"MI","value":513},"arrival":"2019-12-26T17:25+08:00","aircraft":{"code":"738","name":"Boeing 737-800 Passenger"},"origin":"WUH","destination":"CAN","destinationTerminal":"2","departure":"2019-12-26T15:35+08:00","originTerminal":"3"}]}]}],"saleTaxTotal":{"amount":2026,"currency":"CNY"},"displayTaxTotal":{"amount":2026,"currency":"CNY"},"displayTotal":{"amount":6216,"currency":"CNY"},"id":"HGcc7zzok8GVDh6s0AOTWA001","currencyConversion":[{"application":"FARES","rate":0.142511,"from":"CNY","rateTable":"ROE","to":"NUC"},{"application":"FARES","rate":1.111104,"from":"EUR","rateTable":"ROE","to":"NUC"},{"application":"FARES","rate":7.016987,"from":"NUC","rateTable":"ROE","to":"CNY"},{"application":"FARES","rate":1,"from":"NUC","rateTable":"ROE","to":"USD"},{"application":"FARES","rate":1,"from":"USD","rateTable":"ROE","to":"NUC"},{"application":"TAXES","rate":1.905766,"from":"AED","rateTable":"BSR","to":"CNY"},{"application":"TAXES","rate":7.803632,"from":"EUR","rateTable":"BSR","to":"CNY"},{"application":"TAXES","rate":0.006012,"from":"KRW","rateTable":"BSR","to":"CNY"},{"application":"TAXES","rate":0.111982,"from":"RUB","rateTable":"BSR","to":"CNY"},{"application":"TAXES","rate":1.866782,"from":"SAR","rateTable":"BSR","to":"CNY"},{"application":"TAXES","rate":6.998937,"from":"USD","rateTable":"BSR","to":"CNY"}],"displayFareTotal":{"amount":4190,"currency":"CNY"},"pricing":[{"cocFareTotal":{"amount":4190,"currency":"CNY"},"ext":{"pax":{"adults":1}},"saleFareTotal":{"amount":4190,"currency":"CNY"},"carryOnBaggageAllowance":[{"freeBaggageAllowance":[{"pieces":1}],"segment":[{"flight":"CZ3705","carrier":"CZ","origin":"CAN","destination":"WUH"},{"flight":"CZ8341","carrier":"CZ","origin":"WUH","destination":"IST"},{"flight":"CZ8342","carrier":"CZ","origin":"IST","destination":"WUH"},{"flight":"CZ3706","carrier":"CZ","origin":"WUH","destination":"CAN"}]}],"displayPrice":{"amount":6216,"currency":"CNY"},"passenger":[{"id":"0","ptc":["ADT"]}],"salePrice":{"amount":6216,"currency":"CNY"},"saleTaxTotal":{"amount":2026,"currency":"CNY"},"displayTaxTotal":{"amount":2026,"currency":"CNY"},"tax":[{"code":"CN","displayPrice":{"amount":190,"currency":"CNY"},"salePrice":{"amount":190,"currency":"CNY"},"id":"CN-AIRPORT","status":"APPLIED"},{"code":"YR","displayPrice":{"amount":1600,"currency":"CNY"},"salePrice":{"amount":1600,"currency":"CNY"},"id":"YRF-CZ","status":"APPLIED"},{"code":"YQ","displayPrice":{"amount":56,"currency":"CNY"},"salePrice":{"amount":56,"currency":"CNY"},"id":"YQI-CZ","status":"APPLIED"},{"code":"TR","displayPrice":{"amount":156,"currency":"CNY"},"salePrice":{"amount":156,"currency":"CNY"},"id":"TR-SVC-INTL-2","status":"APPLIED"},{"code":"M6","displayPrice":{"amount":24,"currency":"CNY"},"salePrice":{"amount":24,"currency":"CNY"},"id":"TR-M6-001","status":"APPLIED"}],"checkedBaggageAllowance":[{"freeBaggageAllowance":[{"pieces":1}],"segment":[{"flight":"CZ8342","carrier":"CZ","origin":"IST","destination":"WUH"},{"flight":"CZ3706","carrier":"CZ","origin":"WUH","destination":"CAN"}]},{"freeBaggageAllowance":[{"pieces":1}],"segment":[{"flight":"CZ3705","carrier":"CZ","origin":"CAN","destination":"WUH"},{"flight":"CZ8341","carrier":"CZ","origin":"WUH","destination":"IST"}]}],"displayFareTotal":{"amount":4190,"currency":"CNY"}}]},"solutionCount":91}},"passengerInfo":{"svcEPassengerDtos":[{"birthday":"2019-01-01","certType":"P","gender":"F","userIdType":"FFPNO","certPeriodValidity":"2019-12-19","opId":"MEMB","psgName":"ZHOU/RONG","certIssueCountry":"CHN","userId":"615527732315","rdetailAddress":"","mobilePhone":"","nationality":"CHN","psgType":"2","rPostCode":"","isInternational":"1","createId":"B2C","opDate":"2019-12-19","rCity":"","certNum":"SAD441215","channelId":"B2C","email":"","createDate":"2019-12-19","psgId":680269317481},{"birthday":"2008-01-01","certType":"P","gender":"M","userIdType":"FFPNO","certPeriodValidity":"2019-12-19","opId":"MEMB","psgName":"CHENG/ZHENGLIANG","certIssueCountry":"CHN","userId":"615527732315","rdetailAddress":"","mobilePhone":"","nationality":"CHN","psgType":"1","rPostCode":"","isInternational":"1","createId":"B2C","opDate":"2019-12-19","rCity":"","certNum":"A234AS","channelId":"B2C","email":"","createDate":"2019-12-19","psgId":680269316811},{"birthday":"1999-01-04","certType":"P","userIdType":"FFPNO","opId":"MEMB","psgName":"AI/HUAQIAO","userId":"615527732315","psgType":"0","isInternational":"1","createId":"B2C","opDate":"2019-11-18","certNum":"G0000","channelId":"B2C","createDate":"2019-11-18","psgId":680252169581}]}},"status":"0"}
    //let res = await http.insurance(params);
    this.data.planeTicket = res.data.planeTicket.ita;
    console.log(res);
    window.loading.hide();
    if (res.status === "1") {
      alert("获取信息失败，请重新购票");
      //window.location.href="index";
    }
  },
  mounted() {
    //this.initTime();
    this.initCountry();
  },
  data: function() {
    return {
      data: {
        contact: null,
        info: null,
        planeTicket: null,
        insurance: null
      }
    };
  },
  methods: {
    //根据code找城市
    getCity(code) {
      let data = this.data.planeTicketplaneTicketplaneTicket;
      let res = data.data.airport.filter(v => v.code == code);
      res = data.data.city.filter(v => v.code == res[0].city);
      return res.length > 0 ? res[0].name : code;
    },
    //根据code找航空公司
    getCarrier(code) {
      let data = this.data.planeTicket;
      let res = data.data.carrier.filter(v => v.code == code);
      return res.length > 0 ? res[0].name : code;
    },
    //根据code找航班中文机场名称
    getAirport(code) {
      let data = this.data.planeTicket;
      let res = data.data.airport.filter(v => v.code == code);
      return res.length > 0 ? res[0].name : code;
    },
    //根据code找航班型号
    getAircraft(code) {
      let data = this.data.planeTicket;
      let res = data.data.aircraft.filter(v => v.code == code);
      return res[0].name.length > 15 ? res[0].shortName : res[0].name;
    },
    //格式化分钟为小时+分
    fmtHM(num){
      return Math.floor(num/60)+"小时"+(num%60==0?"":num%60+"分钟")
    },
    getIntervalDay(departrueDate,arrivalDate){
      arrivalDate = new Date(new Date(arrivalDate.slice(0,-6)).format("yyyy-MM-dd"))
      departrueDate = new Date(new Date(departrueDate.slice(0,-6)).format("yyyy-MM-dd"))
      const ONEDAY = 1000*60*60*24;
      let res =  (new Date(arrivalDate) - new Date(departrueDate))/ONEDAY;
      return res>0?"+"+res:"";
    },
   //否是共享
    getoperationaHTML(v){
      if(v.leg[0].operationalDisclosure){
        return `<a href="javscript:;" class="js_hb" title="实际乘坐航班：${getCarrier(v.leg[0].operationalDisclosure.carrier)} ${v.leg[0].operationalFlight.carrier+v.leg[0].operationalFlight.number}，乘机手续请到 ${getCarrier( v.leg[0].operationalDisclosure.carrier)} 值机柜台办理。">
        <p>${v.flight.carrier+v.flight.number}</p>
        <p style="font-size:12px" class="js_code" data-value="${v.leg[0].operationalFlight.carrier+v.leg[0].operationalFlight.number}">(${v.leg[0].operationalFlight.carrier+v.leg[0].operationalFlight.number})</p>
        <p class="js_name">${getCarrier( v.leg[0].operationalDisclosure.carrier)}</p>`
      }else{
        return `
        <a href="javscript:;" class="js_hb" title="实际乘坐航班：${getCarrier(v.flight.carrier)} ${v.flight.carrier+v.flight.number}，乘机手续请到 ${getCarrier( v.flight.carrier)} 值机柜台办理。">
        <p class="js_code" data-value="${v.flight.carrier+v.flight.number}">${v.flight.carrier+v.flight.number}</p>
        <p class="js_name">${getCarrier(v.flight.carrier)}</p>`
      }
    },
    getShareHTML(v){
      let name = "";
      let res = v.some(val=>{
        if(val.leg[0].operationalDisclosure){
          name = getCarrier(val.leg[0].operationalDisclosure.carrier);
          return true
        }
        return false;
      })
      if(!res){
        return ""
      }else{
        return `<p class="sp-detail-notice">共享航班不接受特殊餐食、特殊服务及无成人陪伴儿童申请，详情请咨询 ${name}</p>`
      }
    },
    getBooking(currIndex){
      return;
      const cabinJSON ={
        "First":"头等舱",
        "Business":"公务舱",
        "PremiumEconomy":"明珠经济舱",
        "Economy":"经济舱"
      }
      let str = cabinJSON[data.sliceOptionsGrid.column[index].product]
      return `<strong>${v.cell[index].solution.slice.segment[currIndex].bookingInfo["0"].bookingCode}舱</strong>`+str;
    },
    initTime() {
      var date = new Date();
      var y = date.getFullYear();
      var m = date.getMonth() + 1;
      var d = date.getDate();

      $(".js_date_one").myDate({
        yearId: ".js_y",
        monthId: ".js_m",
        dayId: ".js_d",
        defaulYear: y,
        defaulMonth: add0(m),
        defaulDay: add0(d),
        minYear: y - 150,
        maxYear: y
      });

      $(".js_date_two").myDate({
        yearId: ".js_y_two",
        monthId: ".js_m_two",
        dayId: ".js_d_two",
        defaulYear: y,
        defaulMonth: add0(m),
        defaulDay: add0(d),
        minYear: y,
        maxYear: y + 100
      });

      function add0(num) {
        return num < 10 ? "0" + num : num;
      }
    },
    initCountry() {
      var dom = $(selectHTML);
      $.each(country, function(i, jsonObj) {
        //循环citiesData.js中的城市
        var index;
        var arr = jsonObj.name.split("");
        for (let i = 0, len = arr.length; i < len; i++) {
          if (xa_pinyin.haveChainFont(arr[i])) {
            index = i;
            break;
          }
        }

        var info3LowerCase = xa_pinyin.getCamelChars(jsonObj.name.slice(index)).toLowerCase();

        var str = info3LowerCase.substring(0, 1);
        var option = '<option value="' + jsonObj.name + '" mark="' + jsonObj.name + '" >' + info3LowerCase + " [" + jsonObj.name.slice(index) + " " + jsonObj.name.slice(0, index) + "]</option>";
        dom.find("optgroup[label='" + str.toUpperCase() + "']").append(option);
      });
      $(".js_country").html(dom.html());
      $(".js_country").val("CHINA 中国");
    }
  },
  computed: {},
  watch: {},
  components: {}
});

$(() => {
  vm.$mount("#app");
});

/*
//template
var vm = new Vue({
    el: "#app",
	created(){
		
	},
	mounted(){
		
	},
	data:function(){
		return {
			
		}
	},
	methods:{
		
	},
	computed:{
		
	},
	watch: {
		
    },
    components: {
		
    }
});
*/
