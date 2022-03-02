//根枚举差不多
type EventNames = 'click' | 'scroll' | 'mousemove';
function handleEvent(ele: Element, event: EventNames) {
    // do something
}
handleEvent(body, 'scroll');  // 没问题
handleEvent(body, 'dblclick'); // 报错，event 不能为 'dblclick'