var e=function(e,n,t,i,a){var o=document.createElement("div");o.className="notification ".concat(a),Object.assign(o.style,{top:"".concat(e,"px"),right:"".concat(n,"px")}),o.innerHTML="\n    <h2 class='title'>".concat(t,"</h2>\n    <p>").concat(i,"</p>\n  "),document.body.append(o),setTimeout(function(){return o.style.display="none"},2e3)};e(10,10,"Title of Success message","Message example.\n Notification should contain title and description.","success"),e(150,10,"Title of Error message","Message example.\n Notification should contain title and description.","error"),e(290,10,"Title of Warning message","Message example.\n Notification should contain title and description.","warning");
//# sourceMappingURL=index.b7179a9f.js.map
