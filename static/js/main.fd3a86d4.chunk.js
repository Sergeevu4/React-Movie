(this["webpackJsonpreact-movie"]=this["webpackJsonpreact-movie"]||[]).push([[0],{23:function(e,t,a){e.exports=a.p+"static/media/imgNotFound.dd0e6166.png"},26:function(e,t,a){e.exports=a(41)},41:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),i=a.n(o),l=a(2),c=a(18),s=a(19),u=a(16),m=a(21),p=a.n(m),v=a(1),d={movies:[],loading:!1,error:null},f=a(24),h={movieWillWatch:[]},E={page:1,totalPages:0},g={sortTypeByMovies:"popularity"},y={key:"movieWillWatchList",storage:p.a},W=Object(l.combineReducers)({movieList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_MOVIES_REQUEST":return{movies:[],loading:!0,error:null};case"FETCH_MOVIES_SUCCESS":return{movies:t.payload,loading:!1,error:null};case"FETCH_MOVIES_FAILURE":return{movies:[],loading:!1,error:t.payload};case"REMOVE_MOVIE":return Object(v.a)({},e,{movies:e.movies.filter((function(e){return e.id!==t.payload}))});case"TOGGLE_PROPERTY_WILL_WATCH_MOVIE":return Object(v.a)({},e,{movies:e.movies.map((function(e){return e.id===t.payload.id?t.payload:e}))});case"RESET_PROPERTY_WILL_WATCH_MOVIE":return Object(v.a)({},e,{movies:e.movies.map((function(e){return Object(v.a)({},e,{willWatch:!1})}))});default:return e}},pageInfo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_TOTAL_PAGES":return Object(v.a)({},e,{totalPages:t.payload});case"SET_CURRENT_PAGE":return Object(v.a)({},e,{page:t.payload});default:return e}},sortType:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_CHANGE_SORT_TYPE_BY_MOVIES":return{sortTypeByMovies:t.payload};default:return e}},movieWillWatchList:Object(u.a)(y,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_MOVIE_WILL_WATCH":return{movieWillWatch:[].concat(Object(f.a)(e.movieWillWatch),[t.payload])};case"REMOVE_MOVIE_WILL_WATCH":return{movieWillWatch:e.movieWillWatch.filter((function(e){return e.id!==t.payload.id}))};case"REMOVE_ALL_MOVIE_WILL_WATCH":return{movieWillWatch:[]};default:return e}}))}),b=Object(l.createStore)(W,Object(s.composeWithDevTools)(Object(l.applyMiddleware)(c.a))),T=Object(u.b)(b),_=a(5),O=a(22),M=(a(39),a(3)),P=a(4),N=a(6),C=a(7),j=function(){return r.a.createElement("div",{className:"alert alert-warning",role:"alert"},"Error")},R=function(){return r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("div",{className:"spinner-border m-5 ",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")))},k=Object(n.memo)((function(e){var t=e.className,a=void 0===t?"":t,n=e.onClick,o=e.children;return r.a.createElement("button",{type:"button",className:"btn btn-sm ".concat(a),onClick:n},o)})),L=a(23),I=a.n(L),S=function(e){var t=e.movie,a=e.removeMovie,n=e.onMovieAddedToWillWatch,o=e.onMovieRemovedToWillWatch,i=t.willWatch?r.a.createElement(k,{className:"btn-danger",onClick:o},"Remove Will Watch"):r.a.createElement(k,{className:"btn-success",onClick:n},"Add Will Watch"),l=t.backdrop_path||t.poster_path,c=l?"https://image.tmdb.org/t/p/w500".concat(l):I.a;return r.a.createElement("div",{className:"card"},r.a.createElement("img",{className:"card-img-top",src:c,alt:t.title}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h6",{className:"card-title"},t.title),r.a.createElement("div",{className:"d-flex justify-content-between align-items-start mb-4"},r.a.createElement("p",{className:"mb-0"},"Rating: ",t.vote_average),i),r.a.createElement(k,{className:"btn-secondary",onClick:a},"Delete Movie")))},A=function(e){var t=e.movies,a=e.movieRemoved,n=e.movieAddedToWillWatch,o=e.movieRemovedToWillWatch,i=function(e){return function(t){return n(e)}},l=function(e){return function(t){return o(e)}};return r.a.createElement("div",{className:"row mt-4"},t.map((function(e){return r.a.createElement("div",{className:"col-6 mb-4",key:e.id},r.a.createElement(S,{movie:e,removeMovie:(t=e.id,function(e){return a(t)}),onMovieAddedToWillWatch:i(e),onMovieRemovedToWillWatch:l(e)}));var t})))},w=a(11),V=a.n(w),x=Object(n.memo)((function(e){var t=e.tabs,a=e.sortTypeByMovies,n=e.changeSortType,o=function(e){return function(t){return n(e)}},i=function(e){return V()("nav-link",{active:a===e})};return r.a.createElement("ul",{className:"tabs nav nav-pills"},t.map((function(e){var t=e.sortType,a=e.label;return r.a.createElement("li",{className:"nav-item",key:t},r.a.createElement("div",{className:i(t),onClick:o(t)},a))})))})),H=function(e){var t=e.movieWillWatch,a=e.movieRemovedToWillWatch,n=e.allMoviesDeletedToWillWatch,o=function(e){return function(t){return a(e)}},i=t.length?r.a.createElement(k,{className:"btn-info mb-2",onClick:n},"Reset"):null;return r.a.createElement("div",{className:"col-3"},r.a.createElement("h4",null,"Will Watch: ",t.length," movies"),i,r.a.createElement("ul",{className:"list-group list-group-flush"},t.map((function(e){return r.a.createElement("li",{key:e.id,className:"list-group-item"},r.a.createElement("div",{className:"d-flex justify-content-between"},r.a.createElement("p",null,e.title),r.a.createElement("p",null,e.vote_average)),r.a.createElement(k,{className:"btn-danger",onClick:o(e)},"Deleted"))}))))},B=a(10),D=function(e){var t=e.pageNumbers,a=e.page,n=e.totalPages,o=e.setFirstPage,i=e.setLastPage,l=e.setNextPage,c=e.setPrevPage,s=e.setNumbersPage,u=function(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];return function(t){t.preventDefault(),e.apply(void 0,a)}},m=function(e,t,a){return V()("page-item",Object(B.a)({},a,e===t))};return r.a.createElement("nav",null,r.a.createElement("ul",{className:"pagination d-flex justify-content-center"},r.a.createElement("li",{className:m(1,a,"disabled")},r.a.createElement("a",{href:"!#",className:"page-link",onClick:u(o)},"First")),r.a.createElement("li",{className:m(1,a,"disabled")},r.a.createElement("a",{href:"!#",className:"page-link",onClick:u(c)},r.a.createElement("span",{"aria-hidden":"true"},"\xab"))),t.map((function(e){return r.a.createElement("li",{key:e,className:m(e,a,"active")},r.a.createElement("a",{href:"!#",className:"page-link",onClick:u(s,e)},e))})),r.a.createElement("li",{className:m(n,a,"disabled")},r.a.createElement("a",{href:"!#",className:"page-link",onClick:u(l)},r.a.createElement("span",{"aria-hidden":"true"},"\xbb"))),r.a.createElement("li",{className:m(n,a,"disabled")},r.a.createElement("a",{href:"!#",className:"page-link",onClick:u(i)},"Last"))))},F=a(8),U=a.n(F),G=a(12),Y=function(e){return Object(v.a)({},e,{willWatch:!e.willWatch})},J=function(e,t){if(!t.length)return e;var a=t.map((function(e){return e.id}));return e.reduce((function(e,t){return a.includes(t.id)?e.concat(Object(v.a)({},t,{willWatch:!0})):e.concat(t)}),[])},K=a(25),Q=function(e){return{type:"FETCH_MOVIES_SUCCESS",payload:e}},q=function(e){return{type:"TOGGLE_PROPERTY_WILL_WATCH_MOVIE",payload:e}},z=function(e){return function(t,a){var n=a().pageInfo.totalPages;e!==n&&t({type:"SET_TOTAL_PAGES",payload:e})}},X=function(e){return function(t){var a=Y(e);t(q(a)),t({type:"REMOVE_MOVIE_WILL_WATCH",payload:e})}},Z=new(function(){function e(){var t=this;Object(M.a)(this,e),this._apiUrl="https://api.themoviedb.org/3",this._apiKey="3f4ca4f3a9750da53450646ced312397",this._apiSort={popularity:"popularity.desc",revenue:"revenue.desc",voteAverage:"vote_average.desc",default:"popularity.desc"},this.getResource=function(){var e=Object(G.a)(U.a.mark((function e(a,n){var r,o,i;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.getSortTypes(a),e.next=3,fetch("".concat(t._apiUrl,"/discover/movie?api_key=").concat(t._apiKey,"&sort_by=").concat(r,"&page=").concat(n));case 3:if((o=e.sent).ok){e.next=6;break}throw new Error("Could not fetch ".concat(t._apiUrl,", received ").concat(o.status));case 6:return e.next=8,o.json();case 8:return i=e.sent,e.abrupt("return",t.cleanData(i));case 10:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()}return Object(P.a)(e,[{key:"cleanData",value:function(e){var t=e.total_pages,a=e.results,n=e.total_results,r=Object(K.a)(e,["total_pages","results","total_results"]);return Object(v.a)({movies:this.addPropertyWillWatch(a),totalPages:t,totalResults:n},r)}},{key:"addPropertyWillWatch",value:function(e){return e.map((function(e){return Object(v.a)({},e,{willWatch:!1})}))}},{key:"getSortTypes",value:function(e){return this._apiSort[e]||this._apiSort.default}}]),e}()),$=function(e,t,a){return function(){var n=Object(G.a)(U.a.mark((function n(r){var o,i,l,c;return U.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r({type:"FETCH_MOVIES_REQUEST"}),n.next=4,Z.getResource(e,t);case 4:o=n.sent,i=o.movies,l=o.totalPages,c=J(i,a),r(Q(c)),r(z(l)),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(0),r({type:"FETCH_MOVIES_FAILURE",payload:n.t0});case 15:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(e){return n.apply(this,arguments)}}()},ee=function(e){Object(C.a)(a,e);var t=Object(N.a)(a);function a(){return Object(M.a)(this,a),t.apply(this,arguments)}return Object(P.a)(a,[{key:"componentDidMount",value:function(){this.updateMovies()}},{key:"componentDidUpdate",value:function(e){e.sortTypeByMovies===this.props.sortTypeByMovies&&e.page===this.props.page||this.updateMovies()}},{key:"updateMovies",value:function(){this.props.getMovies()}},{key:"render",value:function(){var e=this.props,t=e.movies,a=e.loading,n=e.error,o=e.movieAddedToWillWatch,i=e.movieRemovedToWillWatch,l=e.movieRemoved;return a?r.a.createElement(R,null):n?r.a.createElement(j,null):r.a.createElement(A,{movies:t,movieAddedToWillWatch:o,movieRemovedToWillWatch:i,movieRemoved:l})}}]),a}(n.Component),te={getMovies:function(){return function(e,t){var a=t(),n=a.sortType.sortTypeByMovies,r=a.pageInfo.page,o=a.movieWillWatchList.movieWillWatch;e($(n,r,o))}},movieRemoved:function(e){return{type:"REMOVE_MOVIE",payload:e}},movieAddedToWillWatch:function(e){return function(t){var a=Y(e);t(q(a)),t({type:"ADD_MOVIE_WILL_WATCH",payload:a})}},movieRemovedToWillWatch:X},ae=Object(_.b)((function(e){var t=e.movieList,a=e.pageInfo,n=e.sortType;return{movies:t.movies,loading:t.loading,error:t.error,page:a.page,sortTypeByMovies:n.sortTypeByMovies}}),te)(ee),ne=function(e){Object(C.a)(a,e);var t=Object(N.a)(a);function a(){var e;Object(M.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).tabs=[{sortType:"popularity",label:"Popularity"},{sortType:"revenue",label:"Revenue desc"},{sortType:"voteAverage",label:"Vote average"}],e.changeSortType=function(t){e.props.sortTypeByMovies!==t&&e.props.moviesChangeSort(t)},e}return Object(P.a)(a,[{key:"render",value:function(){return r.a.createElement(x,{tabs:this.tabs,sortTypeByMovies:this.props.sortTypeByMovies,changeSortType:this.changeSortType})}}]),a}(n.Component),re={moviesChangeSort:function(e){return{type:"FETCH_CHANGE_SORT_TYPE_BY_MOVIES",payload:e}}},oe=Object(_.b)((function(e){return{sortTypeByMovies:e.sortType.sortTypeByMovies}}),re)(ne),ie=function(e){Object(C.a)(a,e);var t=Object(N.a)(a);function a(){return Object(M.a)(this,a),t.apply(this,arguments)}return Object(P.a)(a,[{key:"render",value:function(){var e=this.props,t=e.movieWillWatch,a=e.movieRemovedToWillWatch,n=e.allMoviesDeletedToWillWatch;return r.a.createElement(H,{movieWillWatch:t,movieRemovedToWillWatch:a,allMoviesDeletedToWillWatch:n})}}]),a}(n.Component),le={movieRemovedToWillWatch:X,allMoviesDeletedToWillWatch:function(){return function(e){e({type:"RESET_PROPERTY_WILL_WATCH_MOVIE"}),e({type:"REMOVE_ALL_MOVIE_WILL_WATCH"})}}},ce=Object(_.b)((function(e){return{movieWillWatch:e.movieWillWatchList.movieWillWatch}}),le)(ie);var se=function(e){Object(C.a)(a,e);var t=Object(N.a)(a);function a(){var e;Object(M.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).maxPages=10,e.setFirstPage=function(){e.props.setCurrentPage(1)},e.setLastPage=function(){var t=e.props,a=t.totalPages;(0,t.setCurrentPage)(a)},e.setNextPage=function(){var t=e.props,a=t.setCurrentPage,n=t.page,r=t.totalPages;a(Math.min(n+1,r))},e.setPrevPage=function(){var t=e.props,a=t.page;(0,t.setCurrentPage)(Math.max(a-1,1))},e.setNumbersPage=function(t){e.props.setCurrentPage(t)},e}return Object(P.a)(a,[{key:"render",value:function(){var e=this.props,t=e.page,a=e.totalPages,n=function(e,t){var a,n,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,o=Math.floor(r/2),i=o+1,l=o-1;if(t<=r)a=1,n=t;else if(e<=i)a=1,n=r;else if(e+l>=t)a=t-(r-1),n=t;else{var c=r%2!==0?o:l;a=e-o,n=e+c}return Array.from({length:n-a+1},(function(e,t){return a+t}))}(t,a,this.maxPages);return r.a.createElement(D,{pageNumbers:n,page:t,totalPages:a,setFirstPage:this.setFirstPage,setLastPage:this.setLastPage,setNextPage:this.setNextPage,setPrevPage:this.setPrevPage,setNumbersPage:this.setNumbersPage})}}]),a}(n.Component),ue={setCurrentPage:function(e){return function(t,a){var n=a().pageInfo.page;e!==n&&t({type:"SET_CURRENT_PAGE",payload:e})}}},me=Object(_.b)((function(e){var t=e.pageInfo,a=e.sortType;return{page:t.page,totalPages:t.totalPages,sortTypeByMovies:a.sortTypeByMovies}}),ue)(se),pe=function(){return r.a.createElement("div",{className:"container-md"},r.a.createElement("div",{className:"row pt-4"},r.a.createElement("div",{className:"col-9"},r.a.createElement(oe,null),r.a.createElement(ae,null),r.a.createElement(me,null)),r.a.createElement(ce,null)))};i.a.render(r.a.createElement(_.a,{store:b},r.a.createElement(O.a,{loading:r.a.createElement(R,null),persistor:T},r.a.createElement(pe,null))),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.fd3a86d4.chunk.js.map