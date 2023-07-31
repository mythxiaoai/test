/**
 *根据文件类型和文件名获取文件类型
 * @export
 * @param {string} vType  文件类型
 * @param {string} vName  文件名
 * @return {*}  {string}
 */
 export function getFileType(vType: string, vName: string): string {
  let fileTypeSettings: any = {
    image: function (vType: string, vName: string) {
      return (compare(vType, 'image.*') && !compare(vType, /(tiff?|wmf)$/i) ||
        compare(vName, /\.(gif|png|jpe?g)$/i));
    },
    html: function (vType: string, vName: string) {
      return compare(vType, 'text/html') || compare(vName, /\.(htm|html)$/i);
    },
    doc: function (vType: string, vName: string) {
      return compare(vType, /(word|office)$/i) ||
        compare(vName, /\.(docx?)$/i);
    },
    xls: function (vType: string, vName: string) {
      return compare(vType, /(excel|office)$/i) ||
        compare(vName, /\.(xlsx?)$/i);
    },
    ppt: function (vType: string, vName: string) {
      return compare(vType, /(powerpoint|office)$/i) ||
        compare(vName, /\.(pptx?|potx?)$/i);
    },
    zip: function (vType: string, vName: string) {
      return compare(vName, /(zip|rar|tar|gzip|gz|7z)$/i);
    },
    gdocs: function (vType: string, vName: string) {
      return compare(vType, /(word|excel|powerpoint|office|iwork-pages|tiff?)$/i) ||
        compare(vName, /\.(docx?|xlsx?|pptx?|pps|potx?|rtf|ods|odt|pages|ai|dxf|ttf|tiff?|wmf|e?ps)$/i);
    },
    text: function (vType: string, vName: string) {
      return compare(vType, 'text.*') || compare(vName, /\.(xml|javascript)$/i) ||
        compare(vName, /\.(txt|md|csv|nfo|ini|json|php|js|css)$/i);
    },
    video: function (vType: string, vName: string) {
      return (compare(vType, /(ogg|mp4|mp?g|mov|webm|3gp)$/i) ||
        compare(vName, /\.(og?|mp4|webm|mp?g|mov|3gp|avi|rmvb)$/i));
    },
    audio: function (vType: string, vName: string) {
      return (compare(vName, /(ogg|mp3|mp?g|wav)$/i) ||
        compare(vName, /\.(og?|mp3|mp?g|wav)$/i));
    },
    flash: function (vType: string, vName: string) {
      return compare(vType, 'application/x-shockwave-flash', true) || compare(vName, /\.(swf)$/i);
    },
    pdf: function (vType: string, vName: string) {
      return compare(vType, 'application/pdf', true) || compare(vName, /\.(pdf)$/i);
    },
    obj: function () {
      return true;
    },
    other: function () {
      return true;
    }
  }

  function compare(input: string, str: RegExp | string, exact?: boolean) {
    return input !== undefined && (exact ? input === str : input.match(str));
  }

  for (let key in fileTypeSettings) {
    let result = fileTypeSettings[key](vType, vName);
    if (result) return key
  }
  return "other";
}

console.log(getFileType('',"http://image.uczzd.cn/9819/aa.js"));
