let iso = `Australia ($ AUD)
Japan (¥ JPY)
India (₹ INR)
Singapore (S$ SGD)
New Zealand (NZ$ NZD)
Philippines (₱ PHP)
Hong Kong ($ HKD)
Malaysia (RM MYR)
Indonesia ($ USD)
South Africa ($ USD)
Thailand (฿ THB)
South Korea (₩ KRW)`

//匹配出货币iso
// 使用正则表达式匹配货币 ISO
let currencyIsoMatches = iso.match(/\b[A-Z]{3}\b/g);

// 去重处理
let uniqueCurrencyIsos = [...new Set(currencyIsoMatches)];

console.log(uniqueCurrencyIsos.join(','));
