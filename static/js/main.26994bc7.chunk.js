(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],{2:function(e,t,a){e.exports={movie:"movie_movie__1rMtn",poster:"movie_poster__18qqw",data:"movie_data__Oy7d5",title:"movie_title__3s2Os",year:"movie_year__gx8_8",genres:"movie_genres__1nfTL"}},26:function(e,t,a){},4:function(e,t,a){e.exports={movies:"app_movies__2aPNN",loader:"app_loader__3kvD4",spinner:"app_spinner__2IwSs",spin:"app_spin__2p836",text:"app_text__3NfZQ"}},47:function(e,t,a){"use strict";a.r(t);var s=a(3),n=a.n(s),i=a(15),r=a.n(i),c=(a(26),a(6)),o=a.n(c),m=a(16),l=a(17),p=a(18),d=a(21),v=a(20),_=a(19),j=a.n(_),u=a(2),x=a.n(u),h=a(0);var b=function(e){var t=e.year,a=e.title,s=e.summary,n=e.poster,i=e.genres;return Object(h.jsxs)("div",{className:x.a.movie,children:[Object(h.jsx)("img",{className:x.a.poster,src:n,alt:a}),Object(h.jsxs)("div",{className:x.a.data,children:[Object(h.jsx)("h3",{className:x.a.title,children:a}),Object(h.jsx)("h5",{className:x.a.year,children:t}),Object(h.jsx)("ul",{className:x.a.genres,children:i.map((function(e,t){return Object(h.jsx)("li",{className:x.a.genre,children:e},t)}))}),Object(h.jsxs)("p",{className:x.a.summary,children:[s.slice(0,300),"..."]})]})]})},O=a(4),g=a.n(O),f=function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(l.a)(this,a);for(var s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={isLoading:!0,movies:[]},e.getMovies=Object(m.a)(o.a.mark((function t(){var a,s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.a.get("https://yts.mx/api/v2/list_movies.json");case 2:a=t.sent,s=a.data.data.movies,e.setState({movies:s,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return Object(h.jsx)("section",{className:g.a.movies,children:t?Object(h.jsxs)("div",{className:g.a.loader,children:[Object(h.jsx)("div",{className:g.a.spinner}),Object(h.jsx)("span",{className:g.a.text,children:"Loading..."})]}):a.map((function(e){return Object(h.jsx)(b,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})}}]),a}(n.a.Component);r.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(f,{})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.26994bc7.chunk.js.map