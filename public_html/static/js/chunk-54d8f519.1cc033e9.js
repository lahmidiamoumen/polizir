(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-54d8f519"],{1235:function(t,e,a){},15:function(t,e){},"5e6f":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-card",{staticClass:"caredo",staticStyle:{"margin-bottom":"20px","margin-top":"0px",hieght:"100vh"}},[a("div",{staticClass:"clearfix"},[a("h2",[t._v("Profile")])]),a("div",{staticClass:"user-profile"},[a("div",{staticClass:"box-center"},[a("pan-thumb",{attrs:{image:t.user.avatar,height:"100px",width:"100px",hoverable:!1}},[a("div",[t._v("Hello")]),t._v(" "+t._s(t.user.role)+" ")])],1),a("div",{staticClass:"box-center"},[a("div",{staticClass:"user-name text-center"},[t._v(t._s(t.user.name))])])]),a("div",{staticClass:"user-bio"},[a("div",{staticClass:"user-education user-bio-section"},[a("div",{staticClass:"user-bio-section-header"},[a("svg-icon",{attrs:{"icon-class":"education"}}),a("span",[t._v("Education")])],1),a("div",{staticClass:"user-bio-section-body"},[a("div",{staticClass:"text-muted"},[t._v(" Master in Computer Science from the University of Boumerdes ")])])]),a("div",{staticClass:"user-bio"},[a("div",{staticClass:"user-education user-bio-section"},[a("div",{staticClass:"user-bio-section-header"},[a("svg-icon",{attrs:{"icon-class":"education"}}),a("span",[t._v("Location")])],1),a("div",{staticClass:"user-bio-section-body"},[a("div",{staticClass:"text-muted"},[t._v(" Dely Ibrahim, Algiers ")])])])]),a("div",{staticClass:"user-bio"},[a("div",{staticClass:"user-education user-bio-section"},[a("div",{staticClass:"user-bio-section-header"},[a("svg-icon",{attrs:{"icon-class":"education"}}),a("span",[t._v("Profession")])],1),a("div",{staticClass:"user-bio-section-body"},[a("div",{staticClass:"text-muted"},[t._v(" JS Full stack developer ")])])])]),a("div",{staticClass:"user-skills user-bio-section"},[a("div",{staticClass:"user-bio-section-header"},[a("svg-icon",{attrs:{"icon-class":"skill"}}),a("span",[t._v("Stats")])],1),a("div",{staticClass:"user-bio-section-body"},[a("div",{staticClass:"progress-item"},[a("span",[t._v("Approval rates")]),a("el-progress",{attrs:{percentage:70}})],1)])])])])},i=[],n=a("3cbc"),r={components:{PanThumb:n["a"]},props:{user:{type:Object,default:function(){return{name:"",email:"",avatar:"",role:""}}}}},o=r,c=(a("a2cc"),a("2877")),l=Object(c["a"])(o,s,i,!1,null,"37e1fd7c",null);e["a"]=l.exports},"811d":function(t,e,a){},"99ac":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.isDrizzleInitialized?a("div",{staticClass:"app-container dashboard"},[t.user?a("div",[a("button",{on:{click:function(e){return e.preventDefault(),t.initStealth()}}},[t._v("Stealth Init")]),a("splitpanes",{staticStyle:{padding:"0px 10%"},attrs:{split:"vertical"}},[a("pane",{staticClass:"toolL",staticStyle:{top:"50px",position:"fixed"},attrs:{size:"18"}},[a("user-card",{attrs:{user:t.user},on:{sortChanged:function(e){return t.sortChanged(e)}}})],1),a("pane",{staticStyle:{left:"22.5%",position:"relative","max-width":"56%"},attrs:{size:"64"}},[a("splitpanes",{attrs:{horizontal:""}},[a("pane",[a("div",{staticStyle:{height:"300px","background-color":"#373e4c","text-align":"center"}},[a("span",[t._v("Helow! "+t._s(t.votersCounts))])])]),a("pane",[a("el-tabs",{model:{value:t.activeTab,callback:function(e){t.activeTab=e},expression:"activeTab"}},[a("el-tab-pane",{attrs:{label:"Recent",name:"activity"}},[a("activity",{attrs:{feed:t.feed,isHome:!0},on:{paginationGanged:function(e){return t.sortChanged(e)}}})],1),a("el-tab-pane",{attrs:{label:"Unvoted",name:"unvoted"}},[a("activity",{attrs:{feed:t.feed,isHome:!0,unvoted:!0},on:{paginationGanged:function(e){return t.sortChanged(e)}}})],1),a("el-tab-pane",{attrs:{label:"Voted",name:"voted"}},[a("activity",{attrs:{feed:t.feed,isHome:!0,voted:!0},on:{paginationGanged:function(e){return t.sortChanged(e)}}})],1),a("el-tab-pane",{attrs:{label:"Following",name:"following"}},[a("activity",{attrs:{feed:t.feed,isHome:!0,following:!0},on:{paginationGanged:function(e){return t.sortChanged(e)}}})],1)],1)],1),a("el-button",{attrs:{type:"primary",icon:"el-icon-search"}},[t._v("Search")])],1)],1),a("pane",{staticStyle:{top:"50px",position:"fixed",left:"72%"},attrs:{size:"18"}},[a("user-profile",{attrs:{user:t.user}})],1)],1)],1):t._e()]):a("div",[t._v(" Loading... ")])},i=[],n=a("d9d9"),r=n["a"],o=(a("a9a7"),a("2877")),c=Object(o["a"])(r,s,i,!1,null,null,null);e["default"]=c.exports},a2cc:function(t,e,a){"use strict";a("811d")},a9a7:function(t,e,a){"use strict";a("1235")},d9d9:function(t,e,a){"use strict";(function(t){var s,i=a("ade3"),n=a("1da1"),r=a("5530"),o=(a("96cf"),a("ace4"),a("d3b7"),a("5cc6"),a("9a8c"),a("a975"),a("735e"),a("c1ac"),a("d139"),a("3a7b"),a("d5d6"),a("82f8"),a("e91f"),a("60bd"),a("5f96"),a("3280"),a("3fcc"),a("ca91"),a("25a1"),a("cd26"),a("3c5d"),a("2954"),a("649e"),a("219c"),a("170b"),a("b39a"),a("72f7"),a("25f0"),a("fb6a"),a("a630"),a("3ca3"),a("b0c0"),a("a15b"),a("9129"),a("a9e3"),a("9def")),c=(a("c1ea"),a("7faf")),l=a("5e6f"),u=a("2f62"),d=a("7115"),v=a("fb8d"),p=a("2423"),f=a("c24f"),b=a("821c"),h=a("a7b9"),m=h.createRandom(),g=h.createRandom(),C="Haal";e["a"]=(s={name:"Profile",components:{UserCard:c["a"],Activity:d["a"],Timeline:v["a"],UserProfile:l["a"],Splitpanes:o["b"],Pane:o["a"]},mounted:function(){},data:function(){return{ewCount:1,importanceOptions:[],calendarTypeOptions:[],sortOptions:[],listQuery:{page:1,limit:20},feed:{list:[],total:0,listLoading:!0},center:"center",user:{},activeTab:"activity"}},computed:Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])({},Object(u["mapGetters"])(["id_","name","avatar","roles","stealth"])),Object(u["mapGetters"])("drizzle",["drizzleInstance","isDrizzleInitialized"])),Object(u["mapGetters"])("contracts",["getContractData"])),{},{votersCounts:function(){return this.getContractData({contract:C,method:"votersCount"})},getEphemeralWallets:function(){return this.isDrizzleInitialized?this.getContractData({contract:C,method:"getEphemeralWallets"}):void 0}}),created:function(){this.getUser(),this.getListAll(),this.$store.dispatch("drizzle/REGISTER_CONTRACT",{contractName:C,method:"votersCount",methodArgs:[]})}},Object(i["a"])(s,"mounted",(function(){})),Object(i["a"])(s,"methods",{toBuffer:function(e){for(var a=t.alloc(e.byteLength),s=new Uint8Array(e),i=0;i<a.length;++i)a[i]=s[i];return a},initStealth:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){var s,i,r,o,c,l;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:e.stealth||(c=new b({payloadPrivKey:m.privateKey,payloadPubKey:m.publicKey,scanPrivKey:g.privateKey,scanPubKey:g.publicKey}),l=e,Object(f["d"])(Object.assign({},{id:e.id_},{token:c.toString()})).then(function(){var a=Object(n["a"])(regeneratorRuntime.mark((function a(n){var u;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:console.log(n),l.ewCount=l.votersCounts,console.log("counts: ".concat(l.ewCount)),u=0;case 4:if(!(u<l.ewCount+1)){a.next=19;break}return a.next=7,e.drizzleInstance.contracts[C].methods.getEphemeralWallets(u).call();case 7:if(s=a.sent,console.log("Ew was set to",s),r=t.from(e.drizzleInstance.web3.utils.hexToAscii(s[1]),"hex"),i=t.from(s[2].slice(2,42),"hex"),o=c.checkPaymentPubKeyHash(r,i),console.log("keypair:"),console.log(o),null==o){a.next=16;break}return a.abrupt("break",19);case 16:u++,a.next=4;break;case 19:null!=o&&(e.$store.commit("user/SET_STEALTH",o.privKey),Object(f["e"])({stealth:Array.from(o.privKey)}).then((function(t){})));case 20:case"end":return a.stop()}}),a)})));return function(t){return a.apply(this,arguments)}}()));case 1:case"end":return a.stop()}}),a)})))()},sortChanged:function(t){this.listQuery=Object.assign(this.listQuery,t),this.getListAll()},getUser:function(){this.user={name:this.name,role:this.roles.join(" | "),email:"admin@test.com",avatar:this.avatar}},handleFilter:function(){},getListAll:function(){var t=this;this.feed.listLoading=!0,Object(p["b"])(this.listQuery).then((function(e){t.feed.list=e.rows,t.feed.total=Number.isNaN(parseInt(e.count))?0:parseInt(e.count),t.feed.listLoading=!1}))}}),s)}).call(this,a("1c35").Buffer)}}]);