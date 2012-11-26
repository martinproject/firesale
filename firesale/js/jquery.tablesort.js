/*!
* TableSorter 2.5 min - Client-side table sorting with ease!
* Copyright (c) 2007 Christian Bach
*/
!function(i){i.extend({tablesorter:new function(){function d(c){"undefined"!==typeof console&&"undefined"!==typeof console.log?console.log(c):alert(c)}function p(c,b){d(c+" ("+((new Date).getTime()-b.getTime())+"ms)")}function m(c,b,a){if(!b)return"";var g=c.config,e=g.textExtraction,f="",f="simple"===e?g.supportsTextContent?b.textContent:i(b).text():"function"===typeof e?e(b,c,a):"object"===typeof e&&e.hasOwnProperty(a)?e[a](b,c,a):g.supportsTextContent?b.textContent:i(b).text();return i.trim(f)} function h(c){var b=c.config,a=i(c.tBodies).filter(":not(."+b.cssInfoBlock+")"),g,e,r,j,w,k,p="";if(0!==a.length){a=a[0].rows;if(a[0]){g=[];e=a[0].cells.length;for(r=0;r<e;r++){j=b.$headers.filter(":not([colspan])");j=j.add(b.$headers.filter('[colspan="1"]')).filter('[data-column="'+r+'"]:last');w=b.headers[r];k=f.getParserById(f.getData(j,w,"sorter"));b.empties[r]=f.getData(j,w,"empty")||b.emptyTo||(b.emptyToBottom?"bottom":"top");b.strings[r]=f.getData(j,w,"string")||b.stringTo||"max";if(!k)a:{j= c;w=a;k=-1;for(var E=r,n=void 0,s=f.parsers.length,u=!1,l="",n=!0;""===l&&n;)k++,w[k]?(u=w[k].cells[E],l=m(j,u,E),j.config.debug&&d("Checking if value was empty on row "+k+", column: "+E+": "+l)):n=!1;for(n=1;n<s;n++)if(f.parsers[n].is(l,j,u)){k=f.parsers[n];break a}k=f.parsers[0]}b.debug&&(p+="column:"+r+"; parser:"+k.id+"; string:"+b.strings[r]+"; empty: "+b.empties[r]+"\n");g.push(k)}}b.debug&&d(p);return g}}function q(c){var b=c.tBodies,a=c.config,g,e,d=a.parsers,j,w,k,h,l,n,s;a.cache={};a.debug&& (s=new Date);a.showProcessing&&f.isProcessing(c,!0);for(h=0;h<b.length;h++)if(a.cache[h]={row:[],normalized:[]},!i(b[h]).hasClass(a.cssInfoBlock)){g=b[h]&&b[h].rows.length||0;e=b[h].rows[0]&&b[h].rows[0].cells.length||0;for(w=0;w<g;++w)if(l=i(b[h].rows[w]),n=[],l.hasClass(a.cssChildRow))a.cache[h].row[a.cache[h].row.length-1]=a.cache[h].row[a.cache[h].row.length-1].add(l);else{a.cache[h].row.push(l);for(k=0;k<e;++k)j=m(c,l[0].cells[k],k),n.push(d[k].format(j,c,l[0].cells[k],k));n.push(a.cache[h].normalized.length); a.cache[h].normalized.push(n)}}a.showProcessing&&f.isProcessing(c);a.debug&&p("Building cache for "+g+" rows",s)}function l(c,b){var a=c.config,g=c.tBodies,e=[],d=a.cache,j,h,k,l,m,n,s,u,q,t,v;a.debug&&(v=new Date);for(u=0;u<g.length;u++)if(j=i(g[u]),!j.hasClass(a.cssInfoBlock)){m=f.processTbody(c,j,!0);j=d[u].row;h=d[u].normalized;l=(k=h.length)?h[0].length-1:0;for(n=0;n<k;n++)if(t=h[n][l],e.push(j[t]),!a.appender||!a.removeRows){q=j[t].length;for(s=0;s<q;s++)m.append(j[t][s])}f.processTbody(c,m, !1)}a.appender&&a.appender(c,e);a.debug&&p("Rebuilt table",v);b||f.applyWidget(c);i(c).trigger("sortEnd",c)}function C(c){var b,a,g,e=c.config,f=e.sortList,d=[e.cssAsc,e.cssDesc],h=i(c).find("tfoot tr").children().removeClass(d.join(" "));e.$headers.removeClass(d.join(" "));g=f.length;for(b=0;b<g;b++)if(2!==f[b][1]&&(c=e.$headers.not(".sorter-false").filter('[data-column="'+f[b][0]+'"]'+(1===g?":last":"")),c.length))for(a=0;a<c.length;a++)c[a].sortDisabled||(c.eq(a).addClass(d[f[b][1]]),h.length&& h.filter('[data-column="'+f[b][0]+'"]').eq(a).addClass(d[f[b][1]]))}function D(c){var b,a=0,g=0,e=c.config,f=e.sortList,d=f.length,h=c.tBodies.length,k,l,m,n,s,u,t,q,v,x;e.debug&&(k=new Date);for(n=0;n<h;n++)u=e.cache[n],t=u.normalized.length,u.normalized.sort(function(h,k){for(l=0;l<d;l++){s=f[l][0];v=f[l][1];q=/n/i.test(e.parsers&&e.parsers[s]?e.parsers[s].type||"":"")?"Numeric":"Text";q+=0===v?"":"Desc";if(/Numeric/.test(q)&&e.strings[s]){for(m=0;m<t;m++)b=Math.abs(parseFloat(u.normalized[m][s])), a=Math.max(a,isNaN(b)?0:b);g="boolean"===typeof e.string[e.strings[s]]?(0===v?1:-1)*(e.string[e.strings[s]]?-1:1):e.strings[s]?e.string[e.strings[s]]||0:0}var p=i.tablesorter["sort"+q](c,h[s],k[s],s,a,g);if(p)return p}x=u.normalized&&u.normalized[0]?u.normalized[0].length-1:0;return h[x]-k[x]});e.debug&&p("Sorting on "+f.toString()+" and dir "+v+" time",k)}function B(c,b){c.trigger("updateComplete");"function"===typeof b&&b(c[0])}function F(c,b,a){!1!==b?c.trigger("sorton",[c[0].config.sortList,function(){B(c, a)}]):B(c,a)}var f=this;f.version="2.5";f.parsers=[];f.widgets=[];f.defaults={theme:"default",widthFixed:!1,showProcessing:!1,cancelSelection:!0,dateFormat:"mmddyyyy",sortMultiSortKey:"shiftKey",usNumberFormat:!0,delayInit:!1,headers:{},ignoreCase:!0,sortForce:null,sortList:[],sortAppend:null,sortInitialOrder:"asc",sortLocaleCompare:!1,sortReset:!1,sortRestart:!1,emptyTo:"bottom",stringTo:"max",textExtraction:"simple",textSorter:null,widgets:[],widgetOptions:{zebra:["even","odd"]},initWidgets:!0, initialized:null,onRenderHeader:null,tableClass:"tablesorter",cssAsc:"tablesorter-headerAsc",cssChildRow:"tablesorter-childRow",cssDesc:"tablesorter-headerDesc",cssHeader:"tablesorter-header",cssHeaderRow:"tablesorter-headerRow",cssIcon:"tablesorter-icon",cssInfoBlock:"tablesorter-infoOnly",cssProcessing:"tablesorter-processing",selectorHeaders:"> thead th, > thead td",selectorSort:"th, td",selectorRemove:".remove-me",debug:!1,headerList:[],empties:{},strings:{},parsers:[]};f.benchmark=p;f.construct= function(c){return this.each(function(){if(this.tHead&&!(0===this.tBodies.length||!0===this.hasInitialized)){var b=i(this),a,g,e,r="",j,w,k,B,E=i.metadata;this.hasInitialized=!1;this.config={};a=i.extend(!0,this.config,f.defaults,c);i.data(this,"tablesorter",a);a.debug&&i.data(this,"startoveralltimer",new Date);a.supportsTextContent="x"===i("<span>x</span>")[0].textContent;a.supportsDataObject=1.4<=parseFloat(i.fn.jquery);a.string={max:1,min:-1,"max+":1,"max-":-1,zero:0,none:0,"null":0,top:!0,bottom:!1}; /tablesorter\-/.test(b.attr("class"))||(r=""!==a.theme?" tablesorter-"+a.theme:"");b.addClass(a.tableClass+r);var n=[],s={},u=i(this).find("thead:eq(0) tr, tfoot tr"),I,J,v,x,M,A,K,N,O,G;for(I=0;I<u.length;I++){M=u[I].cells;for(J=0;J<M.length;J++){x=M[J];A=x.parentNode.rowIndex;K=A+"-"+x.cellIndex;N=x.rowSpan||1;O=x.colSpan||1;"undefined"===typeof n[A]&&(n[A]=[]);for(v=0;v<n[A].length+1;v++)if("undefined"===typeof n[A][v]){G=v;break}s[K]=G;i(x).attr({"data-column":G});for(v=A;v<A+N;v++){"undefined"=== typeof n[v]&&(n[v]=[]);K=n[v];for(x=G;x<G+O;x++)K[x]="x"}}}var L,z,P,H,Q,y=this.config;y.headerList=[];y.debug&&(Q=new Date);n=i(this).find(y.selectorHeaders).each(function(a){z=i(this);L=y.headers[a];P=y.cssIcon?'<i class="'+y.cssIcon+'"></i>':"";this.innerHTML='<div class="tablesorter-header-inner">'+this.innerHTML+P+"</div>";y.onRenderHeader&&y.onRenderHeader.apply(z,[a]);this.column=s[this.parentNode.rowIndex+"-"+this.cellIndex];var b=f.getData(z,L,"sortInitialOrder")||y.sortInitialOrder;this.order= /^d/i.test(b)||1===b?[1,0,2]:[0,1,2];this.count=-1;"false"===f.getData(z,L,"sorter")?(this.sortDisabled=!0,z.addClass("sorter-false")):z.removeClass("sorter-false");this.lockedOrder=!1;H=f.getData(z,L,"lockedOrder")||!1;"undefined"!==typeof H&&!1!==H&&(this.order=this.lockedOrder=/^d/i.test(H)||1===H?[1,1,1]:[0,0,0]);z.addClass((this.sortDisabled?"sorter-false ":" ")+y.cssHeader);y.headerList[a]=this;z.parent().addClass(y.cssHeaderRow)});this.config.debug&&(p("Built headers:",Q),d(n));a.$headers= n;a.parsers=h(this);a.delayInit||q(this);a.$headers.find("*").andSelf().filter(a.selectorSort).unbind("mousedown.tablesorter mouseup.tablesorter").bind("mousedown.tablesorter mouseup.tablesorter",function(c,d){var h=(this.tagName.match("TH|TD")?i(this):i(this).parents("th, td").filter(":last"))[0];if(1!==(c.which||c.button))return!1;if("mousedown"===c.type)return B=(new Date).getTime(),"INPUT"===c.target.tagName?"":!a.cancelSelection;if(!0!==d&&250<(new Date).getTime()-B)return!1;a.delayInit&&!a.cache&& q(b[0]);if(!h.sortDisabled){b.trigger("sortStart",b[0]);r=!c[a.sortMultiSortKey];h.count=(h.count+1)%(a.sortReset?3:2);a.sortRestart&&(g=h,a.$headers.each(function(){if(this!==g&&(r||!i(this).is("."+a.cssDesc+",."+a.cssAsc)))this.count=-1}));g=h.column;if(r){a.sortList=[];if(null!==a.sortForce){j=a.sortForce;for(e=0;e<j.length;e++)j[e][0]!==g&&a.sortList.push(j[e])}k=h.order[h.count];if(2>k&&(a.sortList.push([g,k]),1<h.colSpan))for(e=1;e<h.colSpan;e++)a.sortList.push([g+e,k])}else if(a.sortAppend&& 1<a.sortList.length&&f.isValueInArray(a.sortAppend[0][0],a.sortList)&&a.sortList.pop(),f.isValueInArray(g,a.sortList))for(e=0;e<a.sortList.length;e++)w=a.sortList[e],k=a.headerList[w[0]],w[0]===g&&(w[1]=k.order[k.count],2===w[1]&&(a.sortList.splice(e,1),k.count=-1));else if(k=h.order[h.count],2>k&&(a.sortList.push([g,k]),1<h.colSpan))for(e=1;e<h.colSpan;e++)a.sortList.push([g+e,k]);if(null!==a.sortAppend){j=a.sortAppend;for(e=0;e<j.length;e++)j[e][0]!==g&&a.sortList.push(j[e])}b.trigger("sortBegin", b[0]);setTimeout(function(){C(b[0]);D(b[0]);l(b[0])},1)}});a.cancelSelection&&a.$headers.each(function(){this.onselectstart=function(){return!1}});b.unbind("sortReset update updateCell addRows sorton appendCache applyWidgetId applyWidgets refreshWidgets destroy mouseup mouseleave").bind("sortReset",function(){a.sortList=[];C(this);D(this);l(this)}).bind("update",function(c,e,g){i(a.selectorRemove,this).remove();a.parsers=h(this);q(this);F(b,e,g)}).bind("updateCell",function(c,e,g,f){var d,h,j;d=i(this).find("tbody"); var c=d.index(i(e).parents("tbody").filter(":last")),r=i(e).parents("tr").filter(":last");d.length&&0<=c&&(h=d.eq(c).find("tr").index(r),j=e.cellIndex,d=this.config.cache[c].normalized[h].length-1,this.config.cache[c].row[this.config.cache[c].normalized[h][d]]=r,this.config.cache[c].normalized[h][j]=a.parsers[j].format(m(this,e,j),this,e,j),F(b,g,f))}).bind("addRows",function(c,g,f,d){var j=g.filter("tr").length,r=[],k=g[0].cells.length,p=i(this).find("tbody").index(g.closest("tbody"));a.parsers|| (a.parsers=h(this));for(c=0;c<j;c++){for(e=0;e<k;e++)r[e]=a.parsers[e].format(m(this,g[c].cells[e],e),this,g[c].cells[e],e);r.push(a.cache[p].row.length);a.cache[p].row.push([g[c]]);a.cache[p].normalized.push(r);r=[]}F(b,f,d)}).bind("sorton",function(a,b,c,e){i(this).trigger("sortStart",this);var g,f,d=this.config,a=b||d.sortList;d.sortList=[];i.each(a,function(a,b){g=[parseInt(b[0],10),parseInt(b[1],10)];if(f=d.headerList[g[0]])d.sortList.push(g),f.count=g[1]%(d.sortReset?3:2)});C(this);D(this); l(this,e);"function"===typeof c&&c(this)}).bind("appendCache",function(a,b,c){l(this,c);"function"===typeof b&&b(this)}).bind("applyWidgetId",function(b,c){f.getWidgetById(c).format(this,a,a.widgetOptions)}).bind("applyWidgets",function(a,b){f.applyWidget(this,b)}).bind("refreshWidgets",function(a,b,c){f.refreshWidgets(this,b,c)}).bind("destroy",function(a,b,c){f.destroy(this,b,c)});a.supportsDataObject&&"undefined"!==typeof b.data().sortlist?a.sortList=b.data().sortlist:E&&(b.metadata()&&b.metadata().sortlist)&& (a.sortList=b.metadata().sortlist);f.applyWidget(this,!0);0<a.sortList.length?b.trigger("sorton",[a.sortList,{},!a.initWidgets]):a.initWidgets&&f.applyWidget(this);if(this.config.widthFixed&&0===i(this).find("colgroup").length){var R=i("<colgroup>"),S=i(this).width();i("tr:first td",this.tBodies[0]).each(function(){R.append(i("<col>").css("width",parseInt(1E3*(i(this).width()/S),10)/10+"%"))});i(this).prepend(R)}a.showProcessing&&b.unbind("sortBegin sortEnd").bind("sortBegin sortEnd",function(a){f.isProcessing(b[0], "sortBegin"===a.type)});this.hasInitialized=!0;a.debug&&f.benchmark("Overall initialization time",i.data(this,"startoveralltimer"));b.trigger("tablesorter-initialized",this);"function"===typeof a.initialized&&a.initialized(this)}})};f.isProcessing=function(c,b,a){var g=c.config,c=a||i(c).find("."+g.cssHeader);b?(0<g.sortList.length&&(c=c.filter(function(){return this.sortDisabled?!1:f.isValueInArray(parseFloat(i(this).attr("data-column")),g.sortList)})),c.addClass(g.cssProcessing)):c.removeClass(g.cssProcessing)}; f.processTbody=function(c,b,a){if(a)return b.before('<span class="tablesorter-savemyplace"/>'),c=i.fn.detach?b.detach():b.remove();c=i(c).find("span.tablesorter-savemyplace");b.insertAfter(c);c.remove()};f.clearTableBody=function(c){i(c.tBodies).filter(":not(."+c.config.cssInfoBlock+")").empty()};f.destroy=function(c,b,a){var g=i(c),e=c.config,d=g.find("thead:first");c.hasInitialized=!1;d.find("tr:not(."+e.cssHeaderRow+")").remove();d.find(".tablesorter-resizer").remove();f.refreshWidgets(c,!0,!0); g.removeData("tablesorter").unbind("sortReset update updateCell addRows sorton appendCache applyWidgetId applyWidgets refreshWidgets destroy mouseup mouseleave").find("."+e.cssHeader).unbind("click mousedown mousemove mouseup").removeClass(e.cssHeader+" "+e.cssAsc+" "+e.cssDesc).find(".tablesorter-header-inner").each(function(){""!==e.cssIcon&&i(this).find("."+e.cssIcon).remove();i(this).replaceWith(i(this).contents())});!1!==b&&g.removeClass(e.tableClass);"function"===typeof a&&a(c)};f.regex=[/(^-?[0-9]+(\.?[0-9]*)[df]?e?[0-9]?$|^0x[0-9a-f]+$|[0-9]+)/gi, /(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[\/\-]\d{1,4}[\/\-]\d{1,4}|^\w+, \w+ \d+, \d{4})/,/^0x[0-9a-f]+$/i];f.sortText=function(c,b,a,g){if(b===a)return 0;var e=c.config,d=e.string[e.empties[g]||e.emptyTo],h=f.regex;if(""===b&&0!==d)return"boolean"===typeof d?d?-1:1:-d||-1;if(""===a&&0!==d)return"boolean"===typeof d?d?1:-1:d||1;if("function"===typeof e.textSorter)return e.textSorter(b,a,c,g);c=b.replace(h[0],"\\0$1\\0").replace(/\\0$/,"").replace(/^\\0/,"").split("\\0");g=a.replace(h[0], "\\0$1\\0").replace(/\\0$/,"").replace(/^\\0/,"").split("\\0");b=parseInt(b.match(h[2]),16)||1!==c.length&&b.match(h[1])&&Date.parse(b);if(a=parseInt(a.match(h[2]),16)||b&&a.match(h[1])&&Date.parse(a)||null){if(b<a)return-1;if(b>a)return 1}e=Math.max(c.length,g.length);for(b=0;b<e;b++){a=isNaN(c[b])?c[b]||0:parseFloat(c[b])||0;h=isNaN(g[b])?g[b]||0:parseFloat(g[b])||0;if(isNaN(a)!==isNaN(h))return isNaN(a)?1:-1;typeof a!==typeof h&&(a+="",h+="");if(a<h)return-1;if(a>h)return 1}return 0};f.sortTextDesc= function(c,b,a,g){if(b===a)return 0;var e=c.config,d=e.string[e.empties[g]||e.emptyTo];return""===b&&0!==d?"boolean"===typeof d?d?-1:1:d||1:""===a&&0!==d?"boolean"===typeof d?d?1:-1:-d||-1:"function"===typeof e.textSorter?e.textSorter(a,b,c,g):f.sortText(c,a,b)};f.getTextValue=function(c,b,a){if(b){for(var g=c.length,e=b+a,b=0;b<g;b++)e+=c.charCodeAt(b);return a*e}return 0};f.sortNumeric=function(c,b,a,g,e,d){if(b===a)return 0;c=c.config;g=c.string[c.empties[g]||c.emptyTo];if(""===b&&0!==g)return"boolean"=== typeof g?g?-1:1:-g||-1;if(""===a&&0!==g)return"boolean"===typeof g?g?1:-1:g||1;isNaN(b)&&(b=f.getTextValue(b,e,d));isNaN(a)&&(a=f.getTextValue(a,e,d));return b-a};f.sortNumericDesc=function(c,b,a,g,e,d){if(b===a)return 0;c=c.config;g=c.string[c.empties[g]||c.emptyTo];if(""===b&&0!==g)return"boolean"===typeof g?g?-1:1:g||1;if(""===a&&0!==g)return"boolean"===typeof g?g?1:-1:-g||-1;isNaN(b)&&(b=f.getTextValue(b,e,d));isNaN(a)&&(a=f.getTextValue(a,e,d));return a-b};f.characterEquivalents={a:"\u00e1\u00e0\u00e2\u00e3\u00e4", A:"\u00c1\u00c0\u00c2\u00c3\u00c4",c:"\u00e7",C:"\u00c7",e:"\u00e9\u00e8\u00ea\u00eb",E:"\u00c9\u00c8\u00ca\u00cb",i:"\u00ed\u00ec\u0130\u00ee\u00ef",I:"\u00cd\u00cc\u0130\u00ce\u00cf",o:"\u00f3\u00f2\u00f4\u00f5\u00f6",O:"\u00d3\u00d2\u00d4\u00d5\u00d6",S:"\u00df",u:"\u00fa\u00f9\u00fb\u00fc",U:"\u00da\u00d9\u00db\u00dc"};f.replaceAccents=function(c){var b,a="[",d=f.characterEquivalents;if(!f.characterRegex){f.characterRegexArray={};for(b in d)"string"===typeof b&&(a+=d[b],f.characterRegexArray[b]= RegExp("["+d[b]+"]","g"));f.characterRegex=RegExp(a+"]")}if(f.characterRegex.test(c))for(b in d)"string"===typeof b&&(c=c.replace(f.characterRegexArray[b],b));return c};f.isValueInArray=function(c,b){var a,d=b.length;for(a=0;a<d;a++)if(b[a][0]===c)return!0;return!1};f.addParser=function(c){var b,a=f.parsers.length,d=!0;for(b=0;b<a;b++)f.parsers[b].id.toLowerCase()===c.id.toLowerCase()&&(d=!1);d&&f.parsers.push(c)};f.getParserById=function(c){var b,a=f.parsers.length;for(b=0;b<a;b++)if(f.parsers[b].id.toLowerCase()=== c.toString().toLowerCase())return f.parsers[b];return!1};f.addWidget=function(c){f.widgets.push(c)};f.getWidgetById=function(c){var b,a,d=f.widgets.length;for(b=0;b<d;b++)if((a=f.widgets[b])&&a.hasOwnProperty("id")&&a.id.toLowerCase()===c.toLowerCase())return a};f.applyWidget=function(c,b){var a=c.config,d=a.widgetOptions,e=a.widgets.sort().reverse(),h,j,l,k=e.length;j=i.inArray("zebra",a.widgets);0<=j&&(a.widgets.splice(j,1),a.widgets.push("zebra"));a.debug&&(h=new Date);for(j=0;j<k;j++)(l=f.getWidgetById(e[j]))&& (!0===b&&l.hasOwnProperty("init")?l.init(c,l,a,d):!b&&l.hasOwnProperty("format")&&l.format(c,a,d));a.debug&&p("Completed "+(!0===b?"initializing":"applying")+" widgets",h)};f.refreshWidgets=function(c,b,a){var g,e=c.config,h=e.widgets,j=f.widgets,p=j.length;for(g=0;g<p;g++)if(j[g]&&j[g].id&&(b||0>i.inArray(j[g].id,h)))e.debug&&d("removing "+j[g].id),j[g].hasOwnProperty("remove")&&j[g].remove(c,e,e.widgetOptions);!0!==a&&f.applyWidget(c,b)};f.getData=function(c,b,a){var d="",c=i(c),e,f;if(!c.length)return""; e=i.metadata?c.metadata():!1;f=" "+(c.attr("class")||"");"undefined"!==typeof c.data(a)||"undefined"!==typeof c.data(a.toLowerCase())?d+=c.data(a)||c.data(a.toLowerCase()):e&&"undefined"!==typeof e[a]?d+=e[a]:b&&"undefined"!==typeof b[a]?d+=b[a]:" "!==f&&f.match(" "+a+"-")&&(d=f.match(RegExp(" "+a+"-(\\w+)"))[1]||"");return i.trim(d)};f.formatFloat=function(c,b){if("string"!==typeof c||""===c)return c;c=!1!==b.config.usNumberFormat?c.replace(/,/g,""):c.replace(/[\s|\.]/g,"").replace(/,/g,".");/^\s*\([.\d]+\)/.test(c)&& (c=c.replace(/^\s*\(/,"-").replace(/\)/,""));var a=parseFloat(c);return isNaN(a)?i.trim(c):a};f.isDigit=function(c){return isNaN(c)?/^[\-+(]?\d+[)]?$/.test(c.toString().replace(/[,.'\s]/g,"")):!0}}});var h=i.tablesorter;i.fn.extend({tablesorter:h.construct});h.addParser({id:"text",is:function(){return!0},format:function(d,p){var m=p.config,d=i.trim(m.ignoreCase?d.toLocaleLowerCase():d);return m.sortLocaleCompare?h.replaceAccents(d):d},type:"text"});h.addParser({id:"currency",is:function(d){return/^\(?[\u00a3$\u20ac\u00a4\u00a5\u00a2?.]\d+/.test(d)}, format:function(d,i){return h.formatFloat(d.replace(/[^\w,. \-()]/g,""),i)},type:"numeric"});h.addParser({id:"ipAddress",is:function(d){return/^\d{1,3}[\.]\d{1,3}[\.]\d{1,3}[\.]\d{1,3}$/.test(d)},format:function(d,i){var m,t=d.split("."),q="",l=t.length;for(m=0;m<l;m++)q+=("00"+t[m]).slice(-3);return h.formatFloat(q,i)},type:"numeric"});h.addParser({id:"url",is:function(d){obj=/^(https?|ftp|file):\/\//g;return obj.test(d)},format:function(d){return i.trim(d.replace(/(https?|ftp|file):\/\//,""))},type:"text"}); h.addParser({id:"isoDate",is:function(d){return/^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(d)},format:function(d,i){return h.formatFloat(""!==d?(new Date(d.replace(/-/g,"/"))).getTime()||"":"",i)},type:"numeric"});h.addParser({id:"percent",is:function(d){return/\d%\)?$/.test(d)},format:function(d,i){return h.formatFloat(d.replace(/%/g,""),i)},type:"numeric"});h.addParser({id:"usLongDate",is:function(d){var obj=/^[A-Z]{3,10}\.?\s+\d{1,2},?\s+(\d{4}|'?\d{2})\s+(([0-2]?\d:[0-5]\d)|([0-1]?\d:[0-5]\d\s?([AP]M)))$/i; return obj.test(d)}, format:function(d,i){return h.formatFloat((new Date(d.replace(/(\S)([AP]M)$/i,"$1 $2"))).getTime()||"",i)},type:"numeric"});h.addParser({id:"shortDate",is:function(d){return/^(\d{2}|\d{4})[\/\-\,\.\s+]\d{2}[\/\-\.\,\s+](\d{2}|\d{4})$/.test(d)},format:function(d,i,m,t){var m=i.config,q=m.headerList[t],l=q.shortDateFormat;"undefined"===typeof l&&(l=q.shortDateFormat=h.getData(q,m.headers[t],"dateFormat")||m.dateFormat);d=d.replace(/\s+/g," ").replace(/[\-|\.|\,]/g,"/");"mmddyyyy"===l?d=d.replace(/(\d{1,2})[\/\s](\d{1,2})[\/\s](\d{4})/, "$3/$1/$2"):"ddmmyyyy"===l?d=d.replace(/(\d{1,2})[\/\s](\d{1,2})[\/\s](\d{4})/,"$3/$2/$1"):"yyyymmdd"===l&&(d=d.replace(/(\d{4})[\/\s](\d{1,2})[\/\s](\d{1,2})/,"$1/$2/$3"));return h.formatFloat((new Date(d)).getTime()||"",i)},type:"numeric"});h.addParser({id:"time",is:function(d){return/^(([0-2]?\d:[0-5]\d)|([0-1]?\d:[0-5]\d\s?([AP]M)))$/i.test(d)},format:function(d,i){return h.formatFloat((new Date("2000/01/01 "+d.replace(/(\S)([AP]M)$/i,"$1 $2"))).getTime()||"",i)},type:"numeric"});h.addParser({id:"digit", is:function(d){return h.isDigit(d)},format:function(d,i){return h.formatFloat(d.replace(/[^\w,. \-()]/g,""),i)},type:"numeric"});h.addParser({id:"metadata",is:function(){return!1},format:function(d,h,m){d=h.config;d=!d.parserMetadataName?"sortValue":d.parserMetadataName;return i(m).metadata()[d]},type:"numeric"});h.addWidget({id:"zebra",format:function(d,p,m){var t,q,l,C,D,B,F=RegExp(p.cssChildRow,"i"),f=i(d).children("tbody:not(."+p.cssInfoBlock+")");p.debug&&(D=new Date);for(d=0;d<f.length;d++)t= i(f[d]),B=t.children("tr").length,1<B&&(l=0,t=t.children("tr:visible"),t.each(function(){q=i(this);F.test(this.className)||l++;C=0===l%2;q.removeClass(m.zebra[C?1:0]).addClass(m.zebra[C?0:1])}));p.debug&&h.benchmark("Applying Zebra widget",D)},remove:function(d,h){var m,t,q=i(d).children("tbody:not(."+h.cssInfoBlock+")"),l=(h.widgetOptions.zebra||["even","odd"]).join(" ");for(m=0;m<q.length;m++)t=i.tablesorter.processTbody(d,i(q[m]),!0),t.children().removeClass(l),i.tablesorter.processTbody(d,t,!1)}})}(jQuery);
