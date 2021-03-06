// Compiled by ClojureScript 1.9.494 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');
goog.require('goog.dom.dataset');
goog.require('goog.object');
goog.require('goog.dom');
goog.require('cljs.pprint');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__26266__auto__ = [];
var len__26259__auto___34678 = arguments.length;
var i__26260__auto___34679 = (0);
while(true){
if((i__26260__auto___34679 < len__26259__auto___34678)){
args__26266__auto__.push((arguments[i__26260__auto___34679]));

var G__34680 = (i__26260__auto___34679 + (1));
i__26260__auto___34679 = G__34680;
continue;
} else {
}
break;
}

var argseq__26267__auto__ = ((((2) < args__26266__auto__.length))?(new cljs.core.IndexedSeq(args__26266__auto__.slice((2)),(0),null)):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26267__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__34670_34681 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__34671_34682 = null;
var count__34672_34683 = (0);
var i__34673_34684 = (0);
while(true){
if((i__34673_34684 < count__34672_34683)){
var k_34685 = cljs.core._nth.call(null,chunk__34671_34682,i__34673_34684);
e.setAttribute(cljs.core.name.call(null,k_34685),cljs.core.get.call(null,attrs,k_34685));

var G__34686 = seq__34670_34681;
var G__34687 = chunk__34671_34682;
var G__34688 = count__34672_34683;
var G__34689 = (i__34673_34684 + (1));
seq__34670_34681 = G__34686;
chunk__34671_34682 = G__34687;
count__34672_34683 = G__34688;
i__34673_34684 = G__34689;
continue;
} else {
var temp__4657__auto___34690 = cljs.core.seq.call(null,seq__34670_34681);
if(temp__4657__auto___34690){
var seq__34670_34691__$1 = temp__4657__auto___34690;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34670_34691__$1)){
var c__25965__auto___34692 = cljs.core.chunk_first.call(null,seq__34670_34691__$1);
var G__34693 = cljs.core.chunk_rest.call(null,seq__34670_34691__$1);
var G__34694 = c__25965__auto___34692;
var G__34695 = cljs.core.count.call(null,c__25965__auto___34692);
var G__34696 = (0);
seq__34670_34681 = G__34693;
chunk__34671_34682 = G__34694;
count__34672_34683 = G__34695;
i__34673_34684 = G__34696;
continue;
} else {
var k_34697 = cljs.core.first.call(null,seq__34670_34691__$1);
e.setAttribute(cljs.core.name.call(null,k_34697),cljs.core.get.call(null,attrs,k_34697));

var G__34698 = cljs.core.next.call(null,seq__34670_34691__$1);
var G__34699 = null;
var G__34700 = (0);
var G__34701 = (0);
seq__34670_34681 = G__34698;
chunk__34671_34682 = G__34699;
count__34672_34683 = G__34700;
i__34673_34684 = G__34701;
continue;
}
} else {
}
}
break;
}

var seq__34674_34702 = cljs.core.seq.call(null,children);
var chunk__34675_34703 = null;
var count__34676_34704 = (0);
var i__34677_34705 = (0);
while(true){
if((i__34677_34705 < count__34676_34704)){
var ch_34706 = cljs.core._nth.call(null,chunk__34675_34703,i__34677_34705);
e.appendChild(ch_34706);

var G__34707 = seq__34674_34702;
var G__34708 = chunk__34675_34703;
var G__34709 = count__34676_34704;
var G__34710 = (i__34677_34705 + (1));
seq__34674_34702 = G__34707;
chunk__34675_34703 = G__34708;
count__34676_34704 = G__34709;
i__34677_34705 = G__34710;
continue;
} else {
var temp__4657__auto___34711 = cljs.core.seq.call(null,seq__34674_34702);
if(temp__4657__auto___34711){
var seq__34674_34712__$1 = temp__4657__auto___34711;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34674_34712__$1)){
var c__25965__auto___34713 = cljs.core.chunk_first.call(null,seq__34674_34712__$1);
var G__34714 = cljs.core.chunk_rest.call(null,seq__34674_34712__$1);
var G__34715 = c__25965__auto___34713;
var G__34716 = cljs.core.count.call(null,c__25965__auto___34713);
var G__34717 = (0);
seq__34674_34702 = G__34714;
chunk__34675_34703 = G__34715;
count__34676_34704 = G__34716;
i__34677_34705 = G__34717;
continue;
} else {
var ch_34718 = cljs.core.first.call(null,seq__34674_34712__$1);
e.appendChild(ch_34718);

var G__34719 = cljs.core.next.call(null,seq__34674_34712__$1);
var G__34720 = null;
var G__34721 = (0);
var G__34722 = (0);
seq__34674_34702 = G__34719;
chunk__34675_34703 = G__34720;
count__34676_34704 = G__34721;
i__34677_34705 = G__34722;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq34667){
var G__34668 = cljs.core.first.call(null,seq34667);
var seq34667__$1 = cljs.core.next.call(null,seq34667);
var G__34669 = cljs.core.first.call(null,seq34667__$1);
var seq34667__$2 = cljs.core.next.call(null,seq34667__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__34668,G__34669,seq34667__$2);
});

if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__26079__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__26080__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__26081__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__26082__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__26083__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__26079__auto__,prefer_table__26080__auto__,method_cache__26081__auto__,cached_hierarchy__26082__auto__,hierarchy__26083__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__26079__auto__,prefer_table__26080__auto__,method_cache__26081__auto__,cached_hierarchy__26082__auto__,hierarchy__26083__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__26083__auto__,method_table__26079__auto__,prefer_table__26080__auto__,method_cache__26081__auto__,cached_hierarchy__26082__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine,new cljs.core.Keyword(null,"file-column","file-column",1543934780),dataset.fileColumn], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1("#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cont_id)].join('')))){
var el_34723 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-o-transition: all 0.2s ease-in-out;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("transition: all 0.2s ease-in-out;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 13px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("border-top: 1px solid #f5f5f5;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("line-height: 18px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("color: #333;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-family: monospace;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("padding: 0px 10px 0px 70px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("position: fixed;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("bottom: 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("left: 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("height: 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("opacity: 0.0;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("box-sizing: border-box;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("z-index: 10000;")].join('')], null));
el_34723.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_34723.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_34723.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_34723);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__34724,st_map){
var map__34731 = p__34724;
var map__34731__$1 = ((((!((map__34731 == null)))?((((map__34731.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34731.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34731):map__34731);
var container_el = cljs.core.get.call(null,map__34731__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__34731,map__34731__$1,container_el){
return (function (p__34733){
var vec__34734 = p__34733;
var k = cljs.core.nth.call(null,vec__34734,(0),null);
var v = cljs.core.nth.call(null,vec__34734,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__34731,map__34731__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__34737,dom_str){
var map__34740 = p__34737;
var map__34740__$1 = ((((!((map__34740 == null)))?((((map__34740.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34740.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34740):map__34740);
var c = map__34740__$1;
var content_area_el = cljs.core.get.call(null,map__34740__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__34742){
var map__34745 = p__34742;
var map__34745__$1 = ((((!((map__34745 == null)))?((((map__34745.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34745.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34745):map__34745);
var content_area_el = cljs.core.get.call(null,map__34745__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<a style=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1("float: right;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 18px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("text-decoration: none;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("text-align: right;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("width: 30px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("height: 30px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("color: rgba(84,84,84, 0.5);"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("x"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__27356__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27356__auto__){
return (function (){
var f__27357__auto__ = (function (){var switch__27244__auto__ = ((function (c__27356__auto__){
return (function (state_34788){
var state_val_34789 = (state_34788[(1)]);
if((state_val_34789 === (1))){
var inst_34773 = (state_34788[(7)]);
var inst_34773__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_34774 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_34775 = ["10px","10px","100%","68px","1.0"];
var inst_34776 = cljs.core.PersistentHashMap.fromArrays(inst_34774,inst_34775);
var inst_34777 = cljs.core.merge.call(null,inst_34776,style);
var inst_34778 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_34773__$1,inst_34777);
var inst_34779 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_34773__$1,msg);
var inst_34780 = cljs.core.async.timeout.call(null,(300));
var state_34788__$1 = (function (){var statearr_34790 = state_34788;
(statearr_34790[(7)] = inst_34773__$1);

(statearr_34790[(8)] = inst_34779);

(statearr_34790[(9)] = inst_34778);

return statearr_34790;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34788__$1,(2),inst_34780);
} else {
if((state_val_34789 === (2))){
var inst_34773 = (state_34788[(7)]);
var inst_34782 = (state_34788[(2)]);
var inst_34783 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_34784 = ["auto"];
var inst_34785 = cljs.core.PersistentHashMap.fromArrays(inst_34783,inst_34784);
var inst_34786 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_34773,inst_34785);
var state_34788__$1 = (function (){var statearr_34791 = state_34788;
(statearr_34791[(10)] = inst_34782);

return statearr_34791;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34788__$1,inst_34786);
} else {
return null;
}
}
});})(c__27356__auto__))
;
return ((function (switch__27244__auto__,c__27356__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__27245__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__27245__auto____0 = (function (){
var statearr_34795 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34795[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__27245__auto__);

(statearr_34795[(1)] = (1));

return statearr_34795;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__27245__auto____1 = (function (state_34788){
while(true){
var ret_value__27246__auto__ = (function (){try{while(true){
var result__27247__auto__ = switch__27244__auto__.call(null,state_34788);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27247__auto__;
}
break;
}
}catch (e34796){if((e34796 instanceof Object)){
var ex__27248__auto__ = e34796;
var statearr_34797_34799 = state_34788;
(statearr_34797_34799[(5)] = ex__27248__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34788);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34796;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34800 = state_34788;
state_34788 = G__34800;
continue;
} else {
return ret_value__27246__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__27245__auto__ = function(state_34788){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__27245__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__27245__auto____1.call(this,state_34788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__27245__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__27245__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__27245__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__27245__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__27245__auto__;
})()
;})(switch__27244__auto__,c__27356__auto__))
})();
var state__27358__auto__ = (function (){var statearr_34798 = f__27357__auto__.call(null);
(statearr_34798[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27356__auto__);

return statearr_34798;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27358__auto__);
});})(c__27356__auto__))
);

return c__27356__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(var_args){
var args34801 = [];
var len__26259__auto___34804 = arguments.length;
var i__26260__auto___34805 = (0);
while(true){
if((i__26260__auto___34805 < len__26259__auto___34804)){
args34801.push((arguments[i__26260__auto___34805]));

var G__34806 = (i__26260__auto___34805 + (1));
i__26260__auto___34805 = G__34806;
continue;
} else {
}
break;
}

var G__34803 = args34801.length;
switch (G__34803) {
case 1:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args34801.length)].join('')));

}
});

figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1 = (function (s){
return figwheel.client.heads_up.heading.call(null,s,"");
});

figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2 = (function (s,sub_head){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div style=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 26px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("line-height: 26px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("margin-bottom: 2px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("padding-top: 1px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" <span style=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1("display: inline-block;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 13px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sub_head),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</span></div>")].join('');
});

figwheel.client.heads_up.heading.cljs$lang$maxFixedArity = 2;

figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,column_number,msg){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div style=\"cursor: pointer;\" data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_name),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" data-file-line=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" data-file-column=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_number),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg,p__34808){
var map__34811 = p__34808;
var map__34811__$1 = ((((!((map__34811 == null)))?((((map__34811.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34811.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34811):map__34811);
var file = cljs.core.get.call(null,map__34811__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__34811__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__34811__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg__$1 = goog.string.htmlEscape(msg);
if(cljs.core.truth_((function (){var or__25146__auto__ = file;
if(cljs.core.truth_(or__25146__auto__)){
return or__25146__auto__;
} else {
return line;
}
})())){
return figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg__$1);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('');
}
});
figwheel.client.heads_up.escape = (function figwheel$client$heads_up$escape(x){
return goog.string.htmlEscape(x);
});
figwheel.client.heads_up.pad_line_number = (function figwheel$client$heads_up$pad_line_number(n,line_number){
var len = cljs.core.count.call(null,cljs.core.fnil.call(null,cljs.core.str,"").call(null,line_number));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((len < n))?cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(n - len)," ")):"")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number)].join('');
});
figwheel.client.heads_up.inline_error_line = (function figwheel$client$heads_up$inline_error_line(style,line_number,line){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<span style='"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(style),cljs.core.str.cljs$core$IFn$_invoke$arity$1("'>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<span style='color: #757575;'>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number),cljs.core.str.cljs$core$IFn$_invoke$arity$1("  </span>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,line)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</span>")].join('');
});
figwheel.client.heads_up.format_inline_error_line = (function figwheel$client$heads_up$format_inline_error_line(p__34813){
var vec__34820 = p__34813;
var typ = cljs.core.nth.call(null,vec__34820,(0),null);
var line_number = cljs.core.nth.call(null,vec__34820,(1),null);
var line = cljs.core.nth.call(null,vec__34820,(2),null);
var pred__34823 = cljs.core._EQ_;
var expr__34824 = typ;
if(cljs.core.truth_(pred__34823.call(null,new cljs.core.Keyword(null,"code-line","code-line",-2138627853),expr__34824))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #999;",line_number,line);
} else {
if(cljs.core.truth_(pred__34823.call(null,new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357),expr__34824))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #ccc; font-weight: bold;",line_number,line);
} else {
if(cljs.core.truth_(pred__34823.call(null,new cljs.core.Keyword(null,"error-message","error-message",1756021561),expr__34824))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #D07D7D;",line_number,line);
} else {
return figwheel.client.heads_up.inline_error_line.call(null,"color: #666;",line_number,line);
}
}
}
});
figwheel.client.heads_up.pad_line_numbers = (function figwheel$client$heads_up$pad_line_numbers(inline_error){
var max_line_number_length = cljs.core.count.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.second,inline_error)))].join(''));
return cljs.core.map.call(null,((function (max_line_number_length){
return (function (p1__34826_SHARP_){
return cljs.core.update_in.call(null,p1__34826_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),cljs.core.partial.call(null,figwheel.client.heads_up.pad_line_number,max_line_number_length));
});})(max_line_number_length))
,inline_error);
});
figwheel.client.heads_up.format_inline_error = (function figwheel$client$heads_up$format_inline_error(inline_error){
var lines = cljs.core.map.call(null,figwheel.client.heads_up.format_inline_error_line,figwheel.client.heads_up.pad_line_numbers.call(null,inline_error));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<pre style='whitespace:pre; overflow-x: scroll; font-family:monospace; font-size:0.8em; border-radius: 3px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" line-height: 1.1em; padding: 10px; background-color: rgb(24,26,38); margin-right: 5px'>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,"\n",lines)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</pre>")].join('');
});
figwheel.client.heads_up.exception__GT_display_data = (function figwheel$client$heads_up$exception__GT_display_data(p__34829){
var map__34832 = p__34829;
var map__34832__$1 = ((((!((map__34832 == null)))?((((map__34832.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34832.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34832):map__34832);
var exception = map__34832__$1;
var failed_compiling = cljs.core.get.call(null,map__34832__$1,new cljs.core.Keyword(null,"failed-compiling","failed-compiling",1768639503));
var reader_exception = cljs.core.get.call(null,map__34832__$1,new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098));
var analysis_exception = cljs.core.get.call(null,map__34832__$1,new cljs.core.Keyword(null,"analysis-exception","analysis-exception",591623285));
var class$ = cljs.core.get.call(null,map__34832__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var file = cljs.core.get.call(null,map__34832__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__34832__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__34832__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var message = cljs.core.get.call(null,map__34832__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var error_inline = cljs.core.get.call(null,map__34832__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var last_message = (cljs.core.truth_((function (){var and__25134__auto__ = file;
if(cljs.core.truth_(and__25134__auto__)){
return line;
} else {
return and__25134__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Please see line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" of file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):(cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Please see "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),(cljs.core.truth_(analysis_exception)?"Could not Analyze":(cljs.core.truth_(reader_exception)?"Could not Read":(cljs.core.truth_(failed_compiling)?"Could not Compile":"Compile Exception"
))),new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__34832,map__34832__$1,exception,failed_compiling,reader_exception,analysis_exception,class$,file,line,column,message,error_inline){
return (function (p1__34827_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__34827_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('');
});})(last_message,map__34832,map__34832__$1,exception,failed_compiling,reader_exception,analysis_exception,class$,file,line,column,message,error_inline))
,(cljs.core.truth_(message)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(class$)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,class$)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(": ")].join(''):"")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<span style=\"font-weight:bold;\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</span>")].join(''),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null):cljs.core.map.call(null,((function (last_message,map__34832,map__34832__$1,exception,failed_compiling,reader_exception,analysis_exception,class$,file,line,column,message,error_inline){
return (function (p1__34828_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p1__34828_SHARP_))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(": "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(p1__34828_SHARP_)))].join('');
});})(last_message,map__34832,map__34832__$1,exception,failed_compiling,reader_exception,analysis_exception,class$,file,line,column,message,error_inline))
,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(exception)))),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div style=\"color: #AD4F4F; padding-top: 3px;\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,last_message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.auto_notify_source_file_line = (function figwheel$client$heads_up$auto_notify_source_file_line(p__34834){
var map__34837 = p__34834;
var map__34837__$1 = ((((!((map__34837 == null)))?((((map__34837.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34837.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34837):map__34837);
var file = cljs.core.get.call(null,map__34837__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__34837__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__34837__$1,new cljs.core.Keyword(null,"column","column",2078222095));
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''),new cljs.core.Keyword(null,"file-line","file-line",-1228823138),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''),new cljs.core.Keyword(null,"file-column","file-column",1543934780),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('')], null));
});
figwheel.client.heads_up.display_exception = (function figwheel$client$heads_up$display_exception(exception_data){
var map__34842 = figwheel.client.heads_up.exception__GT_display_data.call(null,exception_data);
var map__34842__$1 = ((((!((map__34842 == null)))?((((map__34842.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34842.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34842):map__34842);
var head = cljs.core.get.call(null,map__34842__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__34842__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__34842__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__34842__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__34842__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__34842__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__34842__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,head,sub_head)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg))].join(''));
});
figwheel.client.heads_up.warning_data__GT_display_data = (function figwheel$client$heads_up$warning_data__GT_display_data(p__34845){
var map__34848 = p__34845;
var map__34848__$1 = ((((!((map__34848 == null)))?((((map__34848.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34848.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34848):map__34848);
var warning_data = map__34848__$1;
var file = cljs.core.get.call(null,map__34848__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__34848__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__34848__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var message = cljs.core.get.call(null,map__34848__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var error_inline = cljs.core.get.call(null,map__34848__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var last_message = (cljs.core.truth_((function (){var and__25134__auto__ = file;
if(cljs.core.truth_(and__25134__auto__)){
return line;
} else {
return and__25134__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Please see line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" of file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):(cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Please see "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),"Compile Warning",new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__34848,map__34848__$1,warning_data,file,line,column,message,error_inline){
return (function (p1__34844_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__34844_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('');
});})(last_message,map__34848,map__34848__$1,warning_data,file,line,column,message,error_inline))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(message)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<span style=\"font-weight:bold;\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</span>")].join(''):null),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null)),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div style=\"color: #AD4F4F; padding-top: 3px; margin-bottom: 10px;\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,last_message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(warning_data){
var map__34852 = figwheel.client.heads_up.warning_data__GT_display_data.call(null,warning_data);
var map__34852__$1 = ((((!((map__34852 == null)))?((((map__34852.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34852.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34852):map__34852);
var head = cljs.core.get.call(null,map__34852__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__34852__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__34852__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__34852__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__34852__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__34852__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__34852__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,head,sub_head)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg))].join(''));
});
figwheel.client.heads_up.format_warning_message = (function figwheel$client$heads_up$format_warning_message(p__34854){
var map__34858 = p__34854;
var map__34858__$1 = ((((!((map__34858 == null)))?((((map__34858.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34858.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34858):map__34858);
var warning_data = map__34858__$1;
var message = cljs.core.get.call(null,map__34858__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__34858__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__34858__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__34858__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__34860 = message;
var G__34860__$1 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34860),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" at line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__34860);
var G__34860__$2 = (cljs.core.truth_((function (){var and__25134__auto__ = line;
if(cljs.core.truth_(and__25134__auto__)){
return column;
} else {
return and__25134__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34860__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", column "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):G__34860__$1);
if(cljs.core.truth_(file)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34860__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join('');
} else {
return G__34860__$2;
}
});
figwheel.client.heads_up.append_warning_message = (function figwheel$client$heads_up$append_warning_message(p__34861){
var map__34866 = p__34861;
var map__34866__$1 = ((((!((map__34866 == null)))?((((map__34866.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34866.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34866):map__34866);
var warning_data = map__34866__$1;
var message = cljs.core.get.call(null,map__34866__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__34866__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__34866__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__34866__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(cljs.core.truth_(message)){
var map__34868 = figwheel.client.heads_up.ensure_container.call(null);
var map__34868__$1 = ((((!((map__34868 == null)))?((((map__34868.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34868.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34868):map__34868);
var content_area_el = cljs.core.get.call(null,map__34868__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = goog.dom.createElement("div");
var child_count = goog.dom.getChildren(content_area_el).length;
if((child_count < (6))){
el.innerHTML = figwheel.client.heads_up.format_line.call(null,figwheel.client.heads_up.format_warning_message.call(null,warning_data),warning_data);

return goog.dom.append(content_area_el,el);
} else {
var temp__4657__auto__ = goog.dom.getLastElementChild(content_area_el);
if(cljs.core.truth_(temp__4657__auto__)){
var last_child = temp__4657__auto__;
var temp__4655__auto__ = goog.dom.dataset.get(last_child,"figwheel_count");
if(cljs.core.truth_(temp__4655__auto__)){
var message_count = temp__4655__auto__;
var message_count__$1 = (parseInt(message_count) + (1));
goog.dom.dataset.set(last_child,"figwheel_count",message_count__$1);

return last_child.innerHTML = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(message_count__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" more warnings have not been displayed ...")].join('');
} else {
return goog.dom.append(content_area_el,goog.dom.createDom("div",({"data-figwheel_count": (1), "style": "margin-top: 3px; font-weight: bold"}),"1 more warning that has not been displayed ..."));
}
} else {
return null;
}
}
} else {
return null;
}
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__27356__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27356__auto__){
return (function (){
var f__27357__auto__ = (function (){var switch__27244__auto__ = ((function (c__27356__auto__){
return (function (state_34916){
var state_val_34917 = (state_34916[(1)]);
if((state_val_34917 === (1))){
var inst_34899 = (state_34916[(7)]);
var inst_34899__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_34900 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_34901 = ["0.0"];
var inst_34902 = cljs.core.PersistentHashMap.fromArrays(inst_34900,inst_34901);
var inst_34903 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_34899__$1,inst_34902);
var inst_34904 = cljs.core.async.timeout.call(null,(300));
var state_34916__$1 = (function (){var statearr_34918 = state_34916;
(statearr_34918[(7)] = inst_34899__$1);

(statearr_34918[(8)] = inst_34903);

return statearr_34918;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34916__$1,(2),inst_34904);
} else {
if((state_val_34917 === (2))){
var inst_34899 = (state_34916[(7)]);
var inst_34906 = (state_34916[(2)]);
var inst_34907 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_34908 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_34909 = cljs.core.PersistentHashMap.fromArrays(inst_34907,inst_34908);
var inst_34910 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_34899,inst_34909);
var inst_34911 = cljs.core.async.timeout.call(null,(200));
var state_34916__$1 = (function (){var statearr_34919 = state_34916;
(statearr_34919[(9)] = inst_34910);

(statearr_34919[(10)] = inst_34906);

return statearr_34919;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34916__$1,(3),inst_34911);
} else {
if((state_val_34917 === (3))){
var inst_34899 = (state_34916[(7)]);
var inst_34913 = (state_34916[(2)]);
var inst_34914 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_34899,"");
var state_34916__$1 = (function (){var statearr_34920 = state_34916;
(statearr_34920[(11)] = inst_34913);

return statearr_34920;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34916__$1,inst_34914);
} else {
return null;
}
}
}
});})(c__27356__auto__))
;
return ((function (switch__27244__auto__,c__27356__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__27245__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__27245__auto____0 = (function (){
var statearr_34924 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34924[(0)] = figwheel$client$heads_up$clear_$_state_machine__27245__auto__);

(statearr_34924[(1)] = (1));

return statearr_34924;
});
var figwheel$client$heads_up$clear_$_state_machine__27245__auto____1 = (function (state_34916){
while(true){
var ret_value__27246__auto__ = (function (){try{while(true){
var result__27247__auto__ = switch__27244__auto__.call(null,state_34916);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27247__auto__;
}
break;
}
}catch (e34925){if((e34925 instanceof Object)){
var ex__27248__auto__ = e34925;
var statearr_34926_34928 = state_34916;
(statearr_34926_34928[(5)] = ex__27248__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34916);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34925;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34929 = state_34916;
state_34916 = G__34929;
continue;
} else {
return ret_value__27246__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__27245__auto__ = function(state_34916){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__27245__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__27245__auto____1.call(this,state_34916);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__27245__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__27245__auto____0;
figwheel$client$heads_up$clear_$_state_machine__27245__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__27245__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__27245__auto__;
})()
;})(switch__27244__auto__,c__27356__auto__))
})();
var state__27358__auto__ = (function (){var statearr_34927 = f__27357__auto__.call(null);
(statearr_34927[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27356__auto__);

return statearr_34927;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27358__auto__);
});})(c__27356__auto__))
);

return c__27356__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__27356__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27356__auto__){
return (function (){
var f__27357__auto__ = (function (){var switch__27244__auto__ = ((function (c__27356__auto__){
return (function (state_34961){
var state_val_34962 = (state_34961[(1)]);
if((state_val_34962 === (1))){
var inst_34951 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_34961__$1 = state_34961;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34961__$1,(2),inst_34951);
} else {
if((state_val_34962 === (2))){
var inst_34953 = (state_34961[(2)]);
var inst_34954 = cljs.core.async.timeout.call(null,(400));
var state_34961__$1 = (function (){var statearr_34963 = state_34961;
(statearr_34963[(7)] = inst_34953);

return statearr_34963;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34961__$1,(3),inst_34954);
} else {
if((state_val_34962 === (3))){
var inst_34956 = (state_34961[(2)]);
var inst_34957 = figwheel.client.heads_up.clear.call(null);
var state_34961__$1 = (function (){var statearr_34964 = state_34961;
(statearr_34964[(8)] = inst_34956);

return statearr_34964;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34961__$1,(4),inst_34957);
} else {
if((state_val_34962 === (4))){
var inst_34959 = (state_34961[(2)]);
var state_34961__$1 = state_34961;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34961__$1,inst_34959);
} else {
return null;
}
}
}
}
});})(c__27356__auto__))
;
return ((function (switch__27244__auto__,c__27356__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__27245__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__27245__auto____0 = (function (){
var statearr_34968 = [null,null,null,null,null,null,null,null,null];
(statearr_34968[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__27245__auto__);

(statearr_34968[(1)] = (1));

return statearr_34968;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__27245__auto____1 = (function (state_34961){
while(true){
var ret_value__27246__auto__ = (function (){try{while(true){
var result__27247__auto__ = switch__27244__auto__.call(null,state_34961);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27247__auto__;
}
break;
}
}catch (e34969){if((e34969 instanceof Object)){
var ex__27248__auto__ = e34969;
var statearr_34970_34972 = state_34961;
(statearr_34970_34972[(5)] = ex__27248__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34961);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34969;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34973 = state_34961;
state_34961 = G__34973;
continue;
} else {
return ret_value__27246__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__27245__auto__ = function(state_34961){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__27245__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__27245__auto____1.call(this,state_34961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__27245__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__27245__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__27245__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__27245__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__27245__auto__;
})()
;})(switch__27244__auto__,c__27356__auto__))
})();
var state__27358__auto__ = (function (){var statearr_34971 = f__27357__auto__.call(null);
(statearr_34971[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27356__auto__);

return statearr_34971;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27358__auto__);
});})(c__27356__auto__))
);

return c__27356__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";
figwheel.client.heads_up.close_bad_compile_screen = (function figwheel$client$heads_up$close_bad_compile_screen(){
var temp__4657__auto__ = document.getElementById("figwheelFailScreen");
if(cljs.core.truth_(temp__4657__auto__)){
var el = temp__4657__auto__;
return goog.dom.removeNode(el);
} else {
return null;
}
});
figwheel.client.heads_up.bad_compile_screen = (function figwheel$client$heads_up$bad_compile_screen(){
var body = (goog.dom.getElementsByTagNameAndClass("body")[(0)]);
figwheel.client.heads_up.close_bad_compile_screen.call(null);

return goog.dom.append(body,goog.dom.createDom("div",({"id": "figwheelFailScreen", "style": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("background-color: rgba(24, 26, 38, 0.95);"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("position: absolute;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("z-index: 9000;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("width: 100vw;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("height: 100vh;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("top: 0px; left: 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-family: monospace")].join('')}),goog.dom.createDom("div",({"class": "message", "style": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("color: #FFF5DB;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("width: 100vw;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("margin: auto;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("margin-top: 10px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("text-align: center; "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("padding: 2px 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 13px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("position: relative")].join('')}),goog.dom.createDom("a",({"onclick": ((function (body){
return (function (e){
e.preventDefault();

return figwheel.client.heads_up.close_bad_compile_screen.call(null);
});})(body))
, "href": "javascript:", "style": "position: absolute; right: 10px; top: 10px; color: #666"}),"X"),goog.dom.createDom("h2",({"style": "color: #FFF5DB"}),"Figwheel Says: Your code didn't compile."),goog.dom.createDom("div",({"style": "font-size: 12px"}),goog.dom.createDom("p",({"style": "color: #D07D7D;"}),"Keep trying. This page will auto-refresh when your code compiles successfully.")))));
});

//# sourceMappingURL=heads_up.js.map?rel=1490330695329