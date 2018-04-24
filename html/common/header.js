//jscs:disable
(function () {
//jscs:enable
//'use strict'
let cssArr = document.getElementsByTagName('script');
let { path, cssPath, headTitle, temp, cssName } = '';
for (let i in cssArr) {
  cssName = cssArr[i].getAttribute('data-css');
  headTitle = cssArr[i].getAttribute('data-title');
  if (cssName != null && cssName != undefined) {
    cssPath = '<link rel="stylesheet" href = "./../css/pages/' + cssName + '.css">';
    break;
  };
};

const html = '<!DOCTYPE html>' +
'<html lang="en">' +
'<head>' +
'<meta charset="UTF-8">' +
'<meta http-equiv="X-UA-Compatible" content="IE=edge">' +
'<meta name="viewport" content="width=device-width, initial-scale=1">' +
'<title>' + headTitle + '</title>' +
cssPath +
'<script src="../js/lib/jquery-3.1.1.min.js"></script>' +
'<script src="../js/pages/' + cssName + '.js"></script>' +
'</head>';
const headerTpl = () => {
    /*

    */
  };

//jscs:disable
const header = html + headerTpl.toString().replace(/^[^\/]+\/\*!?/, '').replace(/\*\/[^\/]+$/, '');
//jscs:enable
document.write(header);


})();
