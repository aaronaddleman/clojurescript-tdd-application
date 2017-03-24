// Compiled by ClojureScript 1.9.494 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.6";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args34976 = [];
var len__26259__auto___34979 = arguments.length;
var i__26260__auto___34980 = (0);
while(true){
if((i__26260__auto___34980 < len__26259__auto___34979)){
args34976.push((arguments[i__26260__auto___34980]));

var G__34981 = (i__26260__auto___34980 + (1));
i__26260__auto___34980 = G__34981;
continue;
} else {
}
break;
}

var G__34978 = args34976.length;
switch (G__34978) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args34976.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__26266__auto__ = [];
var len__26259__auto___34984 = arguments.length;
var i__26260__auto___34985 = (0);
while(true){
if((i__26260__auto___34985 < len__26259__auto___34984)){
args__26266__auto__.push((arguments[i__26260__auto___34985]));

var G__34986 = (i__26260__auto___34985 + (1));
i__26260__auto___34985 = G__34986;
continue;
} else {
}
break;
}

var argseq__26267__auto__ = ((((0) < args__26266__auto__.length))?(new cljs.core.IndexedSeq(args__26266__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__26267__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq34983){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34983));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__26266__auto__ = [];
var len__26259__auto___34988 = arguments.length;
var i__26260__auto___34989 = (0);
while(true){
if((i__26260__auto___34989 < len__26259__auto___34988)){
args__26266__auto__.push((arguments[i__26260__auto___34989]));

var G__34990 = (i__26260__auto___34989 + (1));
i__26260__auto___34989 = G__34990;
continue;
} else {
}
break;
}

var argseq__26267__auto__ = ((((0) < args__26266__auto__.length))?(new cljs.core.IndexedSeq(args__26266__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__26267__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq34987){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34987));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__34991 = cljs.core._EQ_;
var expr__34992 = (function (){var or__25146__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e34995){if((e34995 instanceof Error)){
var e = e34995;
return false;
} else {
throw e34995;

}
}})();
if(cljs.core.truth_(or__25146__auto__)){
return or__25146__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__34991.call(null,"true",expr__34992))){
return true;
} else {
if(cljs.core.truth_(pred__34991.call(null,"false",expr__34992))){
return false;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__34992)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel autoloading "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e34997){if((e34997 instanceof Error)){
var e = e34997;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unable to access localStorage")].join(''));
} else {
throw e34997;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__34998){
var map__35001 = p__34998;
var map__35001__$1 = ((((!((map__35001 == null)))?((((map__35001.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35001.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35001):map__35001);
var message = cljs.core.get.call(null,map__35001__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__35001__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" : "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__25146__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__25146__auto__)){
return or__25146__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__25134__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__25134__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__25134__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__27356__auto___35163 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27356__auto___35163,ch){
return (function (){
var f__27357__auto__ = (function (){var switch__27244__auto__ = ((function (c__27356__auto___35163,ch){
return (function (state_35132){
var state_val_35133 = (state_35132[(1)]);
if((state_val_35133 === (7))){
var inst_35128 = (state_35132[(2)]);
var state_35132__$1 = state_35132;
var statearr_35134_35164 = state_35132__$1;
(statearr_35134_35164[(2)] = inst_35128);

(statearr_35134_35164[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35133 === (1))){
var state_35132__$1 = state_35132;
var statearr_35135_35165 = state_35132__$1;
(statearr_35135_35165[(2)] = null);

(statearr_35135_35165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35133 === (4))){
var inst_35085 = (state_35132[(7)]);
var inst_35085__$1 = (state_35132[(2)]);
var state_35132__$1 = (function (){var statearr_35136 = state_35132;
(statearr_35136[(7)] = inst_35085__$1);

return statearr_35136;
})();
if(cljs.core.truth_(inst_35085__$1)){
var statearr_35137_35166 = state_35132__$1;
(statearr_35137_35166[(1)] = (5));

} else {
var statearr_35138_35167 = state_35132__$1;
(statearr_35138_35167[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35133 === (15))){
var inst_35092 = (state_35132[(8)]);
var inst_35107 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_35092);
var inst_35108 = cljs.core.first.call(null,inst_35107);
var inst_35109 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_35108);
var inst_35110 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not loading code with warnings - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35109)].join('');
var inst_35111 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_35110);
var state_35132__$1 = state_35132;
var statearr_35139_35168 = state_35132__$1;
(statearr_35139_35168[(2)] = inst_35111);

(statearr_35139_35168[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35133 === (13))){
var inst_35116 = (state_35132[(2)]);
var state_35132__$1 = state_35132;
var statearr_35140_35169 = state_35132__$1;
(statearr_35140_35169[(2)] = inst_35116);

(statearr_35140_35169[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35133 === (6))){
var state_35132__$1 = state_35132;
var statearr_35141_35170 = state_35132__$1;
(statearr_35141_35170[(2)] = null);

(statearr_35141_35170[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35133 === (17))){
var inst_35114 = (state_35132[(2)]);
var state_35132__$1 = state_35132;
var statearr_35142_35171 = state_35132__$1;
(statearr_35142_35171[(2)] = inst_35114);

(statearr_35142_35171[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35133 === (3))){
var inst_35130 = (state_35132[(2)]);
var state_35132__$1 = state_35132;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35132__$1,inst_35130);
} else {
if((state_val_35133 === (12))){
var inst_35091 = (state_35132[(9)]);
var inst_35105 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_35091,opts);
var state_35132__$1 = state_35132;
if(cljs.core.truth_(inst_35105)){
var statearr_35143_35172 = state_35132__$1;
(statearr_35143_35172[(1)] = (15));

} else {
var statearr_35144_35173 = state_35132__$1;
(statearr_35144_35173[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35133 === (2))){
var state_35132__$1 = state_35132;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35132__$1,(4),ch);
} else {
if((state_val_35133 === (11))){
var inst_35092 = (state_35132[(8)]);
var inst_35097 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35098 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_35092);
var inst_35099 = cljs.core.async.timeout.call(null,(1000));
var inst_35100 = [inst_35098,inst_35099];
var inst_35101 = (new cljs.core.PersistentVector(null,2,(5),inst_35097,inst_35100,null));
var state_35132__$1 = state_35132;
return cljs.core.async.ioc_alts_BANG_.call(null,state_35132__$1,(14),inst_35101);
} else {
if((state_val_35133 === (9))){
var inst_35092 = (state_35132[(8)]);
var inst_35118 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_35119 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_35092);
var inst_35120 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35119);
var inst_35121 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Not loading: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35120)].join('');
var inst_35122 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_35121);
var state_35132__$1 = (function (){var statearr_35145 = state_35132;
(statearr_35145[(10)] = inst_35118);

return statearr_35145;
})();
var statearr_35146_35174 = state_35132__$1;
(statearr_35146_35174[(2)] = inst_35122);

(statearr_35146_35174[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35133 === (5))){
var inst_35085 = (state_35132[(7)]);
var inst_35087 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_35088 = (new cljs.core.PersistentArrayMap(null,2,inst_35087,null));
var inst_35089 = (new cljs.core.PersistentHashSet(null,inst_35088,null));
var inst_35090 = figwheel.client.focus_msgs.call(null,inst_35089,inst_35085);
var inst_35091 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_35090);
var inst_35092 = cljs.core.first.call(null,inst_35090);
var inst_35093 = figwheel.client.autoload_QMARK_.call(null);
var state_35132__$1 = (function (){var statearr_35147 = state_35132;
(statearr_35147[(8)] = inst_35092);

(statearr_35147[(9)] = inst_35091);

return statearr_35147;
})();
if(cljs.core.truth_(inst_35093)){
var statearr_35148_35175 = state_35132__$1;
(statearr_35148_35175[(1)] = (8));

} else {
var statearr_35149_35176 = state_35132__$1;
(statearr_35149_35176[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35133 === (14))){
var inst_35103 = (state_35132[(2)]);
var state_35132__$1 = state_35132;
var statearr_35150_35177 = state_35132__$1;
(statearr_35150_35177[(2)] = inst_35103);

(statearr_35150_35177[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35133 === (16))){
var state_35132__$1 = state_35132;
var statearr_35151_35178 = state_35132__$1;
(statearr_35151_35178[(2)] = null);

(statearr_35151_35178[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35133 === (10))){
var inst_35124 = (state_35132[(2)]);
var state_35132__$1 = (function (){var statearr_35152 = state_35132;
(statearr_35152[(11)] = inst_35124);

return statearr_35152;
})();
var statearr_35153_35179 = state_35132__$1;
(statearr_35153_35179[(2)] = null);

(statearr_35153_35179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35133 === (8))){
var inst_35091 = (state_35132[(9)]);
var inst_35095 = figwheel.client.reload_file_state_QMARK_.call(null,inst_35091,opts);
var state_35132__$1 = state_35132;
if(cljs.core.truth_(inst_35095)){
var statearr_35154_35180 = state_35132__$1;
(statearr_35154_35180[(1)] = (11));

} else {
var statearr_35155_35181 = state_35132__$1;
(statearr_35155_35181[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27356__auto___35163,ch))
;
return ((function (switch__27244__auto__,c__27356__auto___35163,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__27245__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__27245__auto____0 = (function (){
var statearr_35159 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35159[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__27245__auto__);

(statearr_35159[(1)] = (1));

return statearr_35159;
});
var figwheel$client$file_reloader_plugin_$_state_machine__27245__auto____1 = (function (state_35132){
while(true){
var ret_value__27246__auto__ = (function (){try{while(true){
var result__27247__auto__ = switch__27244__auto__.call(null,state_35132);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27247__auto__;
}
break;
}
}catch (e35160){if((e35160 instanceof Object)){
var ex__27248__auto__ = e35160;
var statearr_35161_35182 = state_35132;
(statearr_35161_35182[(5)] = ex__27248__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35132);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35160;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35183 = state_35132;
state_35132 = G__35183;
continue;
} else {
return ret_value__27246__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__27245__auto__ = function(state_35132){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__27245__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__27245__auto____1.call(this,state_35132);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__27245__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__27245__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__27245__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__27245__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__27245__auto__;
})()
;})(switch__27244__auto__,c__27356__auto___35163,ch))
})();
var state__27358__auto__ = (function (){var statearr_35162 = f__27357__auto__.call(null);
(statearr_35162[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27356__auto___35163);

return statearr_35162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27358__auto__);
});})(c__27356__auto___35163,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__35184_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__35184_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_35187 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_35187){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e35186){if((e35186 instanceof Error)){
var e = e35186;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_35187], null));
} else {
var e = e35186;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_35187))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__35188){
var map__35197 = p__35188;
var map__35197__$1 = ((((!((map__35197 == null)))?((((map__35197.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35197.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35197):map__35197);
var opts = map__35197__$1;
var build_id = cljs.core.get.call(null,map__35197__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__35197,map__35197__$1,opts,build_id){
return (function (p__35199){
var vec__35200 = p__35199;
var seq__35201 = cljs.core.seq.call(null,vec__35200);
var first__35202 = cljs.core.first.call(null,seq__35201);
var seq__35201__$1 = cljs.core.next.call(null,seq__35201);
var map__35203 = first__35202;
var map__35203__$1 = ((((!((map__35203 == null)))?((((map__35203.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35203.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35203):map__35203);
var msg = map__35203__$1;
var msg_name = cljs.core.get.call(null,map__35203__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35201__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__35200,seq__35201,first__35202,seq__35201__$1,map__35203,map__35203__$1,msg,msg_name,_,map__35197,map__35197__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__35200,seq__35201,first__35202,seq__35201__$1,map__35203,map__35203__$1,msg,msg_name,_,map__35197,map__35197__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__35197,map__35197__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__35211){
var vec__35212 = p__35211;
var seq__35213 = cljs.core.seq.call(null,vec__35212);
var first__35214 = cljs.core.first.call(null,seq__35213);
var seq__35213__$1 = cljs.core.next.call(null,seq__35213);
var map__35215 = first__35214;
var map__35215__$1 = ((((!((map__35215 == null)))?((((map__35215.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35215.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35215):map__35215);
var msg = map__35215__$1;
var msg_name = cljs.core.get.call(null,map__35215__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35213__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__35217){
var map__35229 = p__35217;
var map__35229__$1 = ((((!((map__35229 == null)))?((((map__35229.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35229.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35229):map__35229);
var on_compile_warning = cljs.core.get.call(null,map__35229__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__35229__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__35229,map__35229__$1,on_compile_warning,on_compile_fail){
return (function (p__35231){
var vec__35232 = p__35231;
var seq__35233 = cljs.core.seq.call(null,vec__35232);
var first__35234 = cljs.core.first.call(null,seq__35233);
var seq__35233__$1 = cljs.core.next.call(null,seq__35233);
var map__35235 = first__35234;
var map__35235__$1 = ((((!((map__35235 == null)))?((((map__35235.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35235.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35235):map__35235);
var msg = map__35235__$1;
var msg_name = cljs.core.get.call(null,map__35235__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35233__$1;
var pred__35237 = cljs.core._EQ_;
var expr__35238 = msg_name;
if(cljs.core.truth_(pred__35237.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__35238))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__35237.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__35238))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__35229,map__35229__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__27356__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27356__auto__,msg_hist,msg_names,msg){
return (function (){
var f__27357__auto__ = (function (){var switch__27244__auto__ = ((function (c__27356__auto__,msg_hist,msg_names,msg){
return (function (state_35466){
var state_val_35467 = (state_35466[(1)]);
if((state_val_35467 === (7))){
var inst_35386 = (state_35466[(2)]);
var state_35466__$1 = state_35466;
if(cljs.core.truth_(inst_35386)){
var statearr_35468_35518 = state_35466__$1;
(statearr_35468_35518[(1)] = (8));

} else {
var statearr_35469_35519 = state_35466__$1;
(statearr_35469_35519[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35467 === (20))){
var inst_35460 = (state_35466[(2)]);
var state_35466__$1 = state_35466;
var statearr_35470_35520 = state_35466__$1;
(statearr_35470_35520[(2)] = inst_35460);

(statearr_35470_35520[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35467 === (27))){
var inst_35456 = (state_35466[(2)]);
var state_35466__$1 = state_35466;
var statearr_35471_35521 = state_35466__$1;
(statearr_35471_35521[(2)] = inst_35456);

(statearr_35471_35521[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35467 === (1))){
var inst_35379 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_35466__$1 = state_35466;
if(cljs.core.truth_(inst_35379)){
var statearr_35472_35522 = state_35466__$1;
(statearr_35472_35522[(1)] = (2));

} else {
var statearr_35473_35523 = state_35466__$1;
(statearr_35473_35523[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35467 === (24))){
var inst_35458 = (state_35466[(2)]);
var state_35466__$1 = state_35466;
var statearr_35474_35524 = state_35466__$1;
(statearr_35474_35524[(2)] = inst_35458);

(statearr_35474_35524[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35467 === (4))){
var inst_35464 = (state_35466[(2)]);
var state_35466__$1 = state_35466;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35466__$1,inst_35464);
} else {
if((state_val_35467 === (15))){
var inst_35462 = (state_35466[(2)]);
var state_35466__$1 = state_35466;
var statearr_35475_35525 = state_35466__$1;
(statearr_35475_35525[(2)] = inst_35462);

(statearr_35475_35525[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35467 === (21))){
var inst_35415 = (state_35466[(2)]);
var inst_35416 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35417 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35416);
var state_35466__$1 = (function (){var statearr_35476 = state_35466;
(statearr_35476[(7)] = inst_35415);

return statearr_35476;
})();
var statearr_35477_35526 = state_35466__$1;
(statearr_35477_35526[(2)] = inst_35417);

(statearr_35477_35526[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35467 === (31))){
var inst_35445 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_35466__$1 = state_35466;
if(cljs.core.truth_(inst_35445)){
var statearr_35478_35527 = state_35466__$1;
(statearr_35478_35527[(1)] = (34));

} else {
var statearr_35479_35528 = state_35466__$1;
(statearr_35479_35528[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35467 === (32))){
var inst_35454 = (state_35466[(2)]);
var state_35466__$1 = state_35466;
var statearr_35480_35529 = state_35466__$1;
(statearr_35480_35529[(2)] = inst_35454);

(statearr_35480_35529[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35467 === (33))){
var inst_35441 = (state_35466[(2)]);
var inst_35442 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35443 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35442);
var state_35466__$1 = (function (){var statearr_35481 = state_35466;
(statearr_35481[(8)] = inst_35441);

return statearr_35481;
})();
var statearr_35482_35530 = state_35466__$1;
(statearr_35482_35530[(2)] = inst_35443);

(statearr_35482_35530[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35467 === (13))){
var inst_35400 = figwheel.client.heads_up.clear.call(null);
var state_35466__$1 = state_35466;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35466__$1,(16),inst_35400);
} else {
if((state_val_35467 === (22))){
var inst_35421 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35422 = figwheel.client.heads_up.append_warning_message.call(null,inst_35421);
var state_35466__$1 = state_35466;
var statearr_35483_35531 = state_35466__$1;
(statearr_35483_35531[(2)] = inst_35422);

(statearr_35483_35531[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35467 === (36))){
var inst_35452 = (state_35466[(2)]);
var state_35466__$1 = state_35466;
var statearr_35484_35532 = state_35466__$1;
(statearr_35484_35532[(2)] = inst_35452);

(statearr_35484_35532[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35467 === (29))){
var inst_35432 = (state_35466[(2)]);
var inst_35433 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35434 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35433);
var state_35466__$1 = (function (){var statearr_35485 = state_35466;
(statearr_35485[(9)] = inst_35432);

return statearr_35485;
})();
var statearr_35486_35533 = state_35466__$1;
(statearr_35486_35533[(2)] = inst_35434);

(statearr_35486_35533[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35467 === (6))){
var inst_35381 = (state_35466[(10)]);
var state_35466__$1 = state_35466;
var statearr_35487_35534 = state_35466__$1;
(statearr_35487_35534[(2)] = inst_35381);

(statearr_35487_35534[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35467 === (28))){
var inst_35428 = (state_35466[(2)]);
var inst_35429 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35430 = figwheel.client.heads_up.display_warning.call(null,inst_35429);
var state_35466__$1 = (function (){var statearr_35488 = state_35466;
(statearr_35488[(11)] = inst_35428);

return statearr_35488;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35466__$1,(29),inst_35430);
} else {
if((state_val_35467 === (25))){
var inst_35426 = figwheel.client.heads_up.clear.call(null);
var state_35466__$1 = state_35466;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35466__$1,(28),inst_35426);
} else {
if((state_val_35467 === (34))){
var inst_35447 = figwheel.client.heads_up.flash_loaded.call(null);
var state_35466__$1 = state_35466;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35466__$1,(37),inst_35447);
} else {
if((state_val_35467 === (17))){
var inst_35406 = (state_35466[(2)]);
var inst_35407 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35408 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35407);
var state_35466__$1 = (function (){var statearr_35489 = state_35466;
(statearr_35489[(12)] = inst_35406);

return statearr_35489;
})();
var statearr_35490_35535 = state_35466__$1;
(statearr_35490_35535[(2)] = inst_35408);

(statearr_35490_35535[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35467 === (3))){
var inst_35398 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_35466__$1 = state_35466;
if(cljs.core.truth_(inst_35398)){
var statearr_35491_35536 = state_35466__$1;
(statearr_35491_35536[(1)] = (13));

} else {
var statearr_35492_35537 = state_35466__$1;
(statearr_35492_35537[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35467 === (12))){
var inst_35394 = (state_35466[(2)]);
var state_35466__$1 = state_35466;
var statearr_35493_35538 = state_35466__$1;
(statearr_35493_35538[(2)] = inst_35394);

(statearr_35493_35538[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35467 === (2))){
var inst_35381 = (state_35466[(10)]);
var inst_35381__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_35466__$1 = (function (){var statearr_35494 = state_35466;
(statearr_35494[(10)] = inst_35381__$1);

return statearr_35494;
})();
if(cljs.core.truth_(inst_35381__$1)){
var statearr_35495_35539 = state_35466__$1;
(statearr_35495_35539[(1)] = (5));

} else {
var statearr_35496_35540 = state_35466__$1;
(statearr_35496_35540[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35467 === (23))){
var inst_35424 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_35466__$1 = state_35466;
if(cljs.core.truth_(inst_35424)){
var statearr_35497_35541 = state_35466__$1;
(statearr_35497_35541[(1)] = (25));

} else {
var statearr_35498_35542 = state_35466__$1;
(statearr_35498_35542[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35467 === (35))){
var state_35466__$1 = state_35466;
var statearr_35499_35543 = state_35466__$1;
(statearr_35499_35543[(2)] = null);

(statearr_35499_35543[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35467 === (19))){
var inst_35419 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_35466__$1 = state_35466;
if(cljs.core.truth_(inst_35419)){
var statearr_35500_35544 = state_35466__$1;
(statearr_35500_35544[(1)] = (22));

} else {
var statearr_35501_35545 = state_35466__$1;
(statearr_35501_35545[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35467 === (11))){
var inst_35390 = (state_35466[(2)]);
var state_35466__$1 = state_35466;
var statearr_35502_35546 = state_35466__$1;
(statearr_35502_35546[(2)] = inst_35390);

(statearr_35502_35546[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35467 === (9))){
var inst_35392 = figwheel.client.heads_up.clear.call(null);
var state_35466__$1 = state_35466;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35466__$1,(12),inst_35392);
} else {
if((state_val_35467 === (5))){
var inst_35383 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_35466__$1 = state_35466;
var statearr_35503_35547 = state_35466__$1;
(statearr_35503_35547[(2)] = inst_35383);

(statearr_35503_35547[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35467 === (14))){
var inst_35410 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_35466__$1 = state_35466;
if(cljs.core.truth_(inst_35410)){
var statearr_35504_35548 = state_35466__$1;
(statearr_35504_35548[(1)] = (18));

} else {
var statearr_35505_35549 = state_35466__$1;
(statearr_35505_35549[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35467 === (26))){
var inst_35436 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_35466__$1 = state_35466;
if(cljs.core.truth_(inst_35436)){
var statearr_35506_35550 = state_35466__$1;
(statearr_35506_35550[(1)] = (30));

} else {
var statearr_35507_35551 = state_35466__$1;
(statearr_35507_35551[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35467 === (16))){
var inst_35402 = (state_35466[(2)]);
var inst_35403 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35404 = figwheel.client.heads_up.display_exception.call(null,inst_35403);
var state_35466__$1 = (function (){var statearr_35508 = state_35466;
(statearr_35508[(13)] = inst_35402);

return statearr_35508;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35466__$1,(17),inst_35404);
} else {
if((state_val_35467 === (30))){
var inst_35438 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35439 = figwheel.client.heads_up.display_warning.call(null,inst_35438);
var state_35466__$1 = state_35466;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35466__$1,(33),inst_35439);
} else {
if((state_val_35467 === (10))){
var inst_35396 = (state_35466[(2)]);
var state_35466__$1 = state_35466;
var statearr_35509_35552 = state_35466__$1;
(statearr_35509_35552[(2)] = inst_35396);

(statearr_35509_35552[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35467 === (18))){
var inst_35412 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35413 = figwheel.client.heads_up.display_exception.call(null,inst_35412);
var state_35466__$1 = state_35466;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35466__$1,(21),inst_35413);
} else {
if((state_val_35467 === (37))){
var inst_35449 = (state_35466[(2)]);
var state_35466__$1 = state_35466;
var statearr_35510_35553 = state_35466__$1;
(statearr_35510_35553[(2)] = inst_35449);

(statearr_35510_35553[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35467 === (8))){
var inst_35388 = figwheel.client.heads_up.flash_loaded.call(null);
var state_35466__$1 = state_35466;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35466__$1,(11),inst_35388);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27356__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__27244__auto__,c__27356__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27245__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27245__auto____0 = (function (){
var statearr_35514 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35514[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27245__auto__);

(statearr_35514[(1)] = (1));

return statearr_35514;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27245__auto____1 = (function (state_35466){
while(true){
var ret_value__27246__auto__ = (function (){try{while(true){
var result__27247__auto__ = switch__27244__auto__.call(null,state_35466);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27247__auto__;
}
break;
}
}catch (e35515){if((e35515 instanceof Object)){
var ex__27248__auto__ = e35515;
var statearr_35516_35554 = state_35466;
(statearr_35516_35554[(5)] = ex__27248__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35466);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35515;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35555 = state_35466;
state_35466 = G__35555;
continue;
} else {
return ret_value__27246__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27245__auto__ = function(state_35466){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27245__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27245__auto____1.call(this,state_35466);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27245__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27245__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27245__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27245__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27245__auto__;
})()
;})(switch__27244__auto__,c__27356__auto__,msg_hist,msg_names,msg))
})();
var state__27358__auto__ = (function (){var statearr_35517 = f__27357__auto__.call(null);
(statearr_35517[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27356__auto__);

return statearr_35517;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27358__auto__);
});})(c__27356__auto__,msg_hist,msg_names,msg))
);

return c__27356__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__27356__auto___35618 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27356__auto___35618,ch){
return (function (){
var f__27357__auto__ = (function (){var switch__27244__auto__ = ((function (c__27356__auto___35618,ch){
return (function (state_35601){
var state_val_35602 = (state_35601[(1)]);
if((state_val_35602 === (1))){
var state_35601__$1 = state_35601;
var statearr_35603_35619 = state_35601__$1;
(statearr_35603_35619[(2)] = null);

(statearr_35603_35619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35602 === (2))){
var state_35601__$1 = state_35601;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35601__$1,(4),ch);
} else {
if((state_val_35602 === (3))){
var inst_35599 = (state_35601[(2)]);
var state_35601__$1 = state_35601;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35601__$1,inst_35599);
} else {
if((state_val_35602 === (4))){
var inst_35589 = (state_35601[(7)]);
var inst_35589__$1 = (state_35601[(2)]);
var state_35601__$1 = (function (){var statearr_35604 = state_35601;
(statearr_35604[(7)] = inst_35589__$1);

return statearr_35604;
})();
if(cljs.core.truth_(inst_35589__$1)){
var statearr_35605_35620 = state_35601__$1;
(statearr_35605_35620[(1)] = (5));

} else {
var statearr_35606_35621 = state_35601__$1;
(statearr_35606_35621[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35602 === (5))){
var inst_35589 = (state_35601[(7)]);
var inst_35591 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_35589);
var state_35601__$1 = state_35601;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35601__$1,(8),inst_35591);
} else {
if((state_val_35602 === (6))){
var state_35601__$1 = state_35601;
var statearr_35607_35622 = state_35601__$1;
(statearr_35607_35622[(2)] = null);

(statearr_35607_35622[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35602 === (7))){
var inst_35597 = (state_35601[(2)]);
var state_35601__$1 = state_35601;
var statearr_35608_35623 = state_35601__$1;
(statearr_35608_35623[(2)] = inst_35597);

(statearr_35608_35623[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35602 === (8))){
var inst_35593 = (state_35601[(2)]);
var state_35601__$1 = (function (){var statearr_35609 = state_35601;
(statearr_35609[(8)] = inst_35593);

return statearr_35609;
})();
var statearr_35610_35624 = state_35601__$1;
(statearr_35610_35624[(2)] = null);

(statearr_35610_35624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__27356__auto___35618,ch))
;
return ((function (switch__27244__auto__,c__27356__auto___35618,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__27245__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__27245__auto____0 = (function (){
var statearr_35614 = [null,null,null,null,null,null,null,null,null];
(statearr_35614[(0)] = figwheel$client$heads_up_plugin_$_state_machine__27245__auto__);

(statearr_35614[(1)] = (1));

return statearr_35614;
});
var figwheel$client$heads_up_plugin_$_state_machine__27245__auto____1 = (function (state_35601){
while(true){
var ret_value__27246__auto__ = (function (){try{while(true){
var result__27247__auto__ = switch__27244__auto__.call(null,state_35601);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27247__auto__;
}
break;
}
}catch (e35615){if((e35615 instanceof Object)){
var ex__27248__auto__ = e35615;
var statearr_35616_35625 = state_35601;
(statearr_35616_35625[(5)] = ex__27248__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35601);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35615;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35626 = state_35601;
state_35601 = G__35626;
continue;
} else {
return ret_value__27246__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__27245__auto__ = function(state_35601){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__27245__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__27245__auto____1.call(this,state_35601);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__27245__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__27245__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__27245__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__27245__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__27245__auto__;
})()
;})(switch__27244__auto__,c__27356__auto___35618,ch))
})();
var state__27358__auto__ = (function (){var statearr_35617 = f__27357__auto__.call(null);
(statearr_35617[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27356__auto___35618);

return statearr_35617;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27358__auto__);
});})(c__27356__auto___35618,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__27356__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27356__auto__){
return (function (){
var f__27357__auto__ = (function (){var switch__27244__auto__ = ((function (c__27356__auto__){
return (function (state_35647){
var state_val_35648 = (state_35647[(1)]);
if((state_val_35648 === (1))){
var inst_35642 = cljs.core.async.timeout.call(null,(3000));
var state_35647__$1 = state_35647;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35647__$1,(2),inst_35642);
} else {
if((state_val_35648 === (2))){
var inst_35644 = (state_35647[(2)]);
var inst_35645 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_35647__$1 = (function (){var statearr_35649 = state_35647;
(statearr_35649[(7)] = inst_35644);

return statearr_35649;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35647__$1,inst_35645);
} else {
return null;
}
}
});})(c__27356__auto__))
;
return ((function (switch__27244__auto__,c__27356__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__27245__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__27245__auto____0 = (function (){
var statearr_35653 = [null,null,null,null,null,null,null,null];
(statearr_35653[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__27245__auto__);

(statearr_35653[(1)] = (1));

return statearr_35653;
});
var figwheel$client$enforce_project_plugin_$_state_machine__27245__auto____1 = (function (state_35647){
while(true){
var ret_value__27246__auto__ = (function (){try{while(true){
var result__27247__auto__ = switch__27244__auto__.call(null,state_35647);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27247__auto__;
}
break;
}
}catch (e35654){if((e35654 instanceof Object)){
var ex__27248__auto__ = e35654;
var statearr_35655_35657 = state_35647;
(statearr_35655_35657[(5)] = ex__27248__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35647);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35654;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35658 = state_35647;
state_35647 = G__35658;
continue;
} else {
return ret_value__27246__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__27245__auto__ = function(state_35647){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__27245__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__27245__auto____1.call(this,state_35647);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__27245__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__27245__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__27245__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__27245__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__27245__auto__;
})()
;})(switch__27244__auto__,c__27356__auto__))
})();
var state__27358__auto__ = (function (){var statearr_35656 = f__27357__auto__.call(null);
(statearr_35656[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27356__auto__);

return statearr_35656;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27358__auto__);
});})(c__27356__auto__))
);

return c__27356__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__27356__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27356__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__27357__auto__ = (function (){var switch__27244__auto__ = ((function (c__27356__auto__,figwheel_version,temp__4657__auto__){
return (function (state_35681){
var state_val_35682 = (state_35681[(1)]);
if((state_val_35682 === (1))){
var inst_35675 = cljs.core.async.timeout.call(null,(2000));
var state_35681__$1 = state_35681;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35681__$1,(2),inst_35675);
} else {
if((state_val_35682 === (2))){
var inst_35677 = (state_35681[(2)]);
var inst_35678 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Client Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong> is not equal to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Sidecar Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".  Shutting down Websocket Connection!"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<h4>To fix try:</h4>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_35679 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_35678);
var state_35681__$1 = (function (){var statearr_35683 = state_35681;
(statearr_35683[(7)] = inst_35677);

return statearr_35683;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35681__$1,inst_35679);
} else {
return null;
}
}
});})(c__27356__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__27244__auto__,c__27356__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27245__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27245__auto____0 = (function (){
var statearr_35687 = [null,null,null,null,null,null,null,null];
(statearr_35687[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27245__auto__);

(statearr_35687[(1)] = (1));

return statearr_35687;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27245__auto____1 = (function (state_35681){
while(true){
var ret_value__27246__auto__ = (function (){try{while(true){
var result__27247__auto__ = switch__27244__auto__.call(null,state_35681);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27247__auto__;
}
break;
}
}catch (e35688){if((e35688 instanceof Object)){
var ex__27248__auto__ = e35688;
var statearr_35689_35691 = state_35681;
(statearr_35689_35691[(5)] = ex__27248__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35681);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35688;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35692 = state_35681;
state_35681 = G__35692;
continue;
} else {
return ret_value__27246__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27245__auto__ = function(state_35681){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27245__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27245__auto____1.call(this,state_35681);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27245__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27245__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27245__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27245__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27245__auto__;
})()
;})(switch__27244__auto__,c__27356__auto__,figwheel_version,temp__4657__auto__))
})();
var state__27358__auto__ = (function (){var statearr_35690 = f__27357__auto__.call(null);
(statearr_35690[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27356__auto__);

return statearr_35690;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27358__auto__);
});})(c__27356__auto__,figwheel_version,temp__4657__auto__))
);

return c__27356__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__35693){
var map__35697 = p__35693;
var map__35697__$1 = ((((!((map__35697 == null)))?((((map__35697.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35697.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35697):map__35697);
var file = cljs.core.get.call(null,map__35697__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__35697__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__35697__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__35699 = "";
var G__35699__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35699),cljs.core.str.cljs$core$IFn$_invoke$arity$1("file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__35699);
var G__35699__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35699__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" at line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__35699__$1);
if(cljs.core.truth_((function (){var and__25134__auto__ = line;
if(cljs.core.truth_(and__25134__auto__)){
return column;
} else {
return and__25134__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35699__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", column "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__35699__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__35700){
var map__35707 = p__35700;
var map__35707__$1 = ((((!((map__35707 == null)))?((((map__35707.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35707.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35707):map__35707);
var ed = map__35707__$1;
var formatted_exception = cljs.core.get.call(null,map__35707__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__35707__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__35707__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__35709_35713 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__35710_35714 = null;
var count__35711_35715 = (0);
var i__35712_35716 = (0);
while(true){
if((i__35712_35716 < count__35711_35715)){
var msg_35717 = cljs.core._nth.call(null,chunk__35710_35714,i__35712_35716);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_35717);

var G__35718 = seq__35709_35713;
var G__35719 = chunk__35710_35714;
var G__35720 = count__35711_35715;
var G__35721 = (i__35712_35716 + (1));
seq__35709_35713 = G__35718;
chunk__35710_35714 = G__35719;
count__35711_35715 = G__35720;
i__35712_35716 = G__35721;
continue;
} else {
var temp__4657__auto___35722 = cljs.core.seq.call(null,seq__35709_35713);
if(temp__4657__auto___35722){
var seq__35709_35723__$1 = temp__4657__auto___35722;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35709_35723__$1)){
var c__25965__auto___35724 = cljs.core.chunk_first.call(null,seq__35709_35723__$1);
var G__35725 = cljs.core.chunk_rest.call(null,seq__35709_35723__$1);
var G__35726 = c__25965__auto___35724;
var G__35727 = cljs.core.count.call(null,c__25965__auto___35724);
var G__35728 = (0);
seq__35709_35713 = G__35725;
chunk__35710_35714 = G__35726;
count__35711_35715 = G__35727;
i__35712_35716 = G__35728;
continue;
} else {
var msg_35729 = cljs.core.first.call(null,seq__35709_35723__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_35729);

var G__35730 = cljs.core.next.call(null,seq__35709_35723__$1);
var G__35731 = null;
var G__35732 = (0);
var G__35733 = (0);
seq__35709_35713 = G__35730;
chunk__35710_35714 = G__35731;
count__35711_35715 = G__35732;
i__35712_35716 = G__35733;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Error on "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__35734){
var map__35737 = p__35734;
var map__35737__$1 = ((((!((map__35737 == null)))?((((map__35737.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35737.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35737):map__35737);
var w = map__35737__$1;
var message = cljs.core.get.call(null,map__35737__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Compile Warning - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/cljs/out/figwheel/client.cljs",33,1,336,336,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/cljs/out/figwheel/client.cljs",30,1,328,328,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("ws://"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__25134__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__25134__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__25134__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__35749 = cljs.core.seq.call(null,plugins);
var chunk__35750 = null;
var count__35751 = (0);
var i__35752 = (0);
while(true){
if((i__35752 < count__35751)){
var vec__35753 = cljs.core._nth.call(null,chunk__35750,i__35752);
var k = cljs.core.nth.call(null,vec__35753,(0),null);
var plugin = cljs.core.nth.call(null,vec__35753,(1),null);
if(cljs.core.truth_(plugin)){
var pl_35759 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__35749,chunk__35750,count__35751,i__35752,pl_35759,vec__35753,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_35759.call(null,msg_hist);
});})(seq__35749,chunk__35750,count__35751,i__35752,pl_35759,vec__35753,k,plugin))
);
} else {
}

var G__35760 = seq__35749;
var G__35761 = chunk__35750;
var G__35762 = count__35751;
var G__35763 = (i__35752 + (1));
seq__35749 = G__35760;
chunk__35750 = G__35761;
count__35751 = G__35762;
i__35752 = G__35763;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35749);
if(temp__4657__auto__){
var seq__35749__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35749__$1)){
var c__25965__auto__ = cljs.core.chunk_first.call(null,seq__35749__$1);
var G__35764 = cljs.core.chunk_rest.call(null,seq__35749__$1);
var G__35765 = c__25965__auto__;
var G__35766 = cljs.core.count.call(null,c__25965__auto__);
var G__35767 = (0);
seq__35749 = G__35764;
chunk__35750 = G__35765;
count__35751 = G__35766;
i__35752 = G__35767;
continue;
} else {
var vec__35756 = cljs.core.first.call(null,seq__35749__$1);
var k = cljs.core.nth.call(null,vec__35756,(0),null);
var plugin = cljs.core.nth.call(null,vec__35756,(1),null);
if(cljs.core.truth_(plugin)){
var pl_35768 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__35749,chunk__35750,count__35751,i__35752,pl_35768,vec__35756,k,plugin,seq__35749__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_35768.call(null,msg_hist);
});})(seq__35749,chunk__35750,count__35751,i__35752,pl_35768,vec__35756,k,plugin,seq__35749__$1,temp__4657__auto__))
);
} else {
}

var G__35769 = cljs.core.next.call(null,seq__35749__$1);
var G__35770 = null;
var G__35771 = (0);
var G__35772 = (0);
seq__35749 = G__35769;
chunk__35750 = G__35770;
count__35751 = G__35771;
i__35752 = G__35772;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args35773 = [];
var len__26259__auto___35780 = arguments.length;
var i__26260__auto___35781 = (0);
while(true){
if((i__26260__auto___35781 < len__26259__auto___35780)){
args35773.push((arguments[i__26260__auto___35781]));

var G__35782 = (i__26260__auto___35781 + (1));
i__26260__auto___35781 = G__35782;
continue;
} else {
}
break;
}

var G__35775 = args35773.length;
switch (G__35775) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args35773.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__35776_35784 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__35777_35785 = null;
var count__35778_35786 = (0);
var i__35779_35787 = (0);
while(true){
if((i__35779_35787 < count__35778_35786)){
var msg_35788 = cljs.core._nth.call(null,chunk__35777_35785,i__35779_35787);
figwheel.client.socket.handle_incoming_message.call(null,msg_35788);

var G__35789 = seq__35776_35784;
var G__35790 = chunk__35777_35785;
var G__35791 = count__35778_35786;
var G__35792 = (i__35779_35787 + (1));
seq__35776_35784 = G__35789;
chunk__35777_35785 = G__35790;
count__35778_35786 = G__35791;
i__35779_35787 = G__35792;
continue;
} else {
var temp__4657__auto___35793 = cljs.core.seq.call(null,seq__35776_35784);
if(temp__4657__auto___35793){
var seq__35776_35794__$1 = temp__4657__auto___35793;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35776_35794__$1)){
var c__25965__auto___35795 = cljs.core.chunk_first.call(null,seq__35776_35794__$1);
var G__35796 = cljs.core.chunk_rest.call(null,seq__35776_35794__$1);
var G__35797 = c__25965__auto___35795;
var G__35798 = cljs.core.count.call(null,c__25965__auto___35795);
var G__35799 = (0);
seq__35776_35784 = G__35796;
chunk__35777_35785 = G__35797;
count__35778_35786 = G__35798;
i__35779_35787 = G__35799;
continue;
} else {
var msg_35800 = cljs.core.first.call(null,seq__35776_35794__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_35800);

var G__35801 = cljs.core.next.call(null,seq__35776_35794__$1);
var G__35802 = null;
var G__35803 = (0);
var G__35804 = (0);
seq__35776_35784 = G__35801;
chunk__35777_35785 = G__35802;
count__35778_35786 = G__35803;
i__35779_35787 = G__35804;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__26266__auto__ = [];
var len__26259__auto___35809 = arguments.length;
var i__26260__auto___35810 = (0);
while(true){
if((i__26260__auto___35810 < len__26259__auto___35809)){
args__26266__auto__.push((arguments[i__26260__auto___35810]));

var G__35811 = (i__26260__auto___35810 + (1));
i__26260__auto___35810 = G__35811;
continue;
} else {
}
break;
}

var argseq__26267__auto__ = ((((0) < args__26266__auto__.length))?(new cljs.core.IndexedSeq(args__26266__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__26267__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__35806){
var map__35807 = p__35806;
var map__35807__$1 = ((((!((map__35807 == null)))?((((map__35807.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35807.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35807):map__35807);
var opts = map__35807__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq35805){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35805));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e35813){if((e35813 instanceof Error)){
var e = e35813;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e35813;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__35817){
var map__35818 = p__35817;
var map__35818__$1 = ((((!((map__35818 == null)))?((((map__35818.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35818.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35818):map__35818);
var msg_name = cljs.core.get.call(null,map__35818__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1490330695732