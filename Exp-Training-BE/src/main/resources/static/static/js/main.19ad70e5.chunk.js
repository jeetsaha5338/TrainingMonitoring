(this["webpackJsonpexp-eraining-fe"]=this["webpackJsonpexp-eraining-fe"]||[]).push([[0],{18:function(e,t,a){e.exports=a(45)},23:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(6),i=a.n(o),c=(a(23),a(2)),s=a(3),u=a(4),l=a(5),g=(a(24),a(17)),d=(a(25),a(26),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).onPageLengthChange=function(e){n.props.onPageLengthChange(n.pageLengthInput.value),n.setState({currentPage:1})},n.onPrevPage=function(e){1!==n.state.currentPage&&n.onGotoPage(n.state.currentPage-1)},n.onNextPage=function(e){n.state.currentPage>n.pages-1||n.onGotoPage(n.state.currentPage+1)},n.onGotoPage=function(e){e!==n.state.currentPage&&(n.currentPageInput&&(n.currentPageInput.value=e),n.setState({currentPage:e}),n.props.onGotoPage(e))},n._getPaginationButtons=function(e){var t="btn btn-light";return n.state.currentPage===e&&(t="btn btn-secondary"),r.a.createElement("button",{key:"btn-".concat(e),id:"btn-".concat(e),className:t,onClick:function(t){n.onGotoPage(e)}},e)},n.onCurrentPageChange=function(e){n.currentPageInput.value>=n.pages&&(n.currentPageInput.value=n.pages),n.setState({currentPage:n.currentPageInput.value}),n.props.onGotoPage(n.currentPageInput.value)},n.state={currentPage:e.currentPage||1},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.totalRecords,o=t.pageLength,i=this.state.currentPage,c=Math.ceil(a/o);this.pages=c;var s=r.a.createElement(n.Fragment,{key:"f-page-selector"},r.a.createElement("span",{key:"page-selector",className:"page-selector"},"Rows per page -",r.a.createElement("input",{key:"page-input",type:"number",min:"1",ref:function(t){return e.pageLengthInput=t},defaultValue:o||5,onChange:this.onPageLengthChange}),"- Showing ",r.a.createElement("b",null,(i-1)*o+1,"- ",i*o>a?a:i*o)," of ",r.a.createElement("b",null,a)," Records")),u=r.a.createElement("button",{key:"prev",className:"btn btn-dark",onClick:this.onPrevPage},"< Previous"),l=r.a.createElement("button",{key:"next",className:"btn btn-dark",onClick:this.onNextPage},"Next >"),g=[];if("short"===this.props.type||this.props.totalRecords/this.props.pageLength>15)g.push(r.a.createElement("input",{key:"currentPageInput",className:"current-page-input",type:"number",max:this.pages,defaultValue:this.state.currentPage,ref:function(t){e.currentPageInput=t},onChange:this.onCurrentPageChange}));else if("long"===this.props.type)for(var d=1;d<=c;d++)g.push(this._getPaginationButtons(d));return r.a.createElement("div",{className:"pagination"},[s,u,g,l])}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.currentPage!==t.currentPage?{currentPage:e.currentPage}:null}}]),a}(n.Component)),p=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e))._preSearchData=null,n.onDragOver=function(e){e.preventDefault()},n.onDragStart=function(e,t){e.dataTransfer.setData("text/plain",t)},n.onDrop=function(e,t){e.preventDefault();var a=e.dataTransfer.getData("text/plain"),r=Object(g.a)(n.state.headers),o=r[a],i=r[t],c=o.index;o.index=i.index,i.index=c,n.setState({headers:r})},n.renderTableHeader=function(){var e=n.state.headers;return e.sort((function(e,t){return e.index>t.index?1:-1})),e.map((function(e,t){var a=e.title,o=e.accessor,i=e.width;return n.state.sortby===t&&(a+=n.state.descending?"\u2193":"\u2191"),r.a.createElement("th",{key:o,ref:function(e){return n[o]=e},style:{width:i},"data-col":o,onDragStart:function(e){return n.onDragStart(e,t)},onDragOver:n.onDragOver,onDrop:function(e){n.onDrop(e,t)}},r.a.createElement("span",{draggable:!0,"data-col":o,className:"header-cell",style:{width:i}},a))}))},n.renderNoData=function(){return r.a.createElement("tr",null,r.a.createElement("td",{colSpan:n.props.headers.length},n.noData))},n.renderContent=function(){var e=n.state,t=e.headers;e.data;return(n.pagination.enabled?n.state.pagedData:n.state.data).map((function(e,a){var o=e[n.keyField],i=t.map((function(t,n){var i=e[t.accessor];return r.a.createElement("td",{key:n,"data-id":o,"data-row":a},i," ","duration"===t.accessor?" Hours":"")}));return r.a.createElement("tr",{key:a},i)}))},n.onSort=function(e){var t=n.state.data.slice(),a=i.a.findDOMNode(e.target),r=void 0===a.parentNode.cellIndex?a.cellIndex:a.parentNode.cellIndex,o=e.target.dataset.col,c=!n.state.descending;t.sort((function(e,t){var a=0;return e[o]<t[o]?a=-1:e[o]>t[o]&&(a=1),c&&(a*=-1),a})),n.setState({data:t,pagedData:t,sortby:r,descending:c},(function(){n.pagination.enabled&&n.onGotoPage(1)}))},n.onSearch=function(e){var t=n.state.headers,a=n._preSearchData.filter((function(e){for(var a=!0,r=0;r<t.length;r++){var o=t[r].accessor,i=e[o],c=n["inp"+o].value;if(""===!i)a=!0;else if(!(a=i.toString().toLowerCase().indexOf(c.toLowerCase())>-1))break}return a}));n.setState({data:a,pagedData:a,totalRecords:a.length},(function(){n.pagination.enabled&&n.onGotoPage(1)}))},n.renderSearch=function(){var e=n.state,t=e.search,a=e.headers;if(!t)return null;var o=a.map((function(e,t){var a="inp"+e.accessor;return r.a.createElement("td",{key:t},r.a.createElement("input",{type:"text",ref:function(e){return n[a]=e},style:{width:"95px"},"data-idx":t}))}));return r.a.createElement("tr",{onChange:n.onSearch},o)},n.renderTable=function(){var e=n.renderTableHeader(),t=n.state.data.length>0?n.renderContent():n.renderNoData();return r.a.createElement("table",{className:"data-inner-table"},r.a.createElement("thead",{onClick:n.onSort,className:"thead-dark"},r.a.createElement("tr",null,e)),r.a.createElement("tbody",null,n.renderSearch(),t))},n.onClickSearch=function(e){n.state.search?(n.setState({data:n._preSearchData,search:!1}),n._preSearchData=null):(n._preSearchData=n.state.data,n.setState({search:!0}))},n.renderToolbar=function(){return r.a.createElement("div",{className:"toolbar"},r.a.createElement("h4",null,n.state.title),r.a.createElement("button",{onClick:n.onClickSearch,className:"btn btn-primary"},"Search"))},n.getPagedData=function(e,t){var a=(e-1)*t,r=a+t;return n.state.data.slice(a,r)},n.onPageLengthChange=function(e){n.setState({pageLength:parseInt(e,10),currentPage:1},(function(){n.onGotoPage(n.state.currentPage)}))},n.onGotoPage=function(e){var t=n.getPagedData(e,n.state.pageLength);n.setState({pagedData:t,currentPage:e})},n.state={title:e.title||"Data-Table",headers:e.headers,data:e.data,pagedData:e.data,sortby:null,descending:null,search:!1,pageLength:n.props.pagination.pageLength||5,currentPage:1},n.keyField=e.keyField||"id",n.noData=e.noData||"No records found!",n.width=e.width||"100%",n.pagination=n.props.pagination||{},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.pagination.enabled&&this.onGotoPage(this.state.currentPage)}},{key:"render",value:function(){return r.a.createElement("div",{className:this.props.className},this.renderToolbar(),this.renderTable(),this.pagination.enabled&&r.a.createElement(d,{type:this.props.pagination.type,totalRecords:this.state.data.length,pageLength:this.state.pageLength,onPageLengthChange:this.onPageLengthChange,onGotoPage:this.onGotoPage,currentPage:this.state.currentPage}))}}]),a}(r.a.Component),h=a(16),f=a.n(h),m=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={headers:[],data:[],ready:!1},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=[{title:"Id",accessor:"id",index:0,dataType:"number"},{title:"Topic",accessor:"topicName",index:1,dataType:"string"},{title:"Category",accessor:"category",index:2,dataType:"string"},{title:"Duration",accessor:"duration",index:3,dataType:"number"},{title:"Start Date",accessor:"startDate",index:4,dataType:"string"},{title:"End Date",accessor:"endDate",index:5,dataType:"string"},{title:"Trainer Type",accessor:"trainerType",index:6,dataType:"string"},{title:"Trainers",accessor:"trainers",index:7,dataType:"string"},{title:"attendees",accessor:"attendees",index:8,dataType:"string"},{title:"Team Name",accessor:"teamName",index:9,dataType:"string"},{title:"Remarks",accessor:"remarks",index:10,dataType:"string"}];f.a.get("http://localhost:8008/Training/Topic/getTopics").then((function(a){e.setState({headers:t,data:a.data,ready:!0})}),(function(e){console.log(e)}))}},{key:"render",value:function(){return this.state.ready?r.a.createElement("div",null,r.a.createElement(p,{className:"table table-striped",title:"Training Monitoring",keyField:"id",pagination:{enabled:!0,pageLength:5,type:"long"},width:"100%",headers:this.state.headers,data:this.state.data,noData:"No records!"})):r.a.createElement("h2",null,"Loading..")}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(44);i.a.render(r.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.19ad70e5.chunk.js.map