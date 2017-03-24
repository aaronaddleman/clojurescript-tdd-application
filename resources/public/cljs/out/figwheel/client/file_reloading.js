// Compiled by ClojureScript 1.9.494 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__25146__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__25146__auto__){
return or__25146__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("goog/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__25146__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__25146__auto__)){
return or__25146__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__30337_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__30337_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__30342 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__30343 = null;
var count__30344 = (0);
var i__30345 = (0);
while(true){
if((i__30345 < count__30344)){
var n = cljs.core._nth.call(null,chunk__30343,i__30345);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__30346 = seq__30342;
var G__30347 = chunk__30343;
var G__30348 = count__30344;
var G__30349 = (i__30345 + (1));
seq__30342 = G__30346;
chunk__30343 = G__30347;
count__30344 = G__30348;
i__30345 = G__30349;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__30342);
if(temp__4657__auto__){
var seq__30342__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30342__$1)){
var c__25965__auto__ = cljs.core.chunk_first.call(null,seq__30342__$1);
var G__30350 = cljs.core.chunk_rest.call(null,seq__30342__$1);
var G__30351 = c__25965__auto__;
var G__30352 = cljs.core.count.call(null,c__25965__auto__);
var G__30353 = (0);
seq__30342 = G__30350;
chunk__30343 = G__30351;
count__30344 = G__30352;
i__30345 = G__30353;
continue;
} else {
var n = cljs.core.first.call(null,seq__30342__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__30354 = cljs.core.next.call(null,seq__30342__$1);
var G__30355 = null;
var G__30356 = (0);
var G__30357 = (0);
seq__30342 = G__30354;
chunk__30343 = G__30355;
count__30344 = G__30356;
i__30345 = G__30357;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__30408_30419 = cljs.core.seq.call(null,deps);
var chunk__30409_30420 = null;
var count__30410_30421 = (0);
var i__30411_30422 = (0);
while(true){
if((i__30411_30422 < count__30410_30421)){
var dep_30423 = cljs.core._nth.call(null,chunk__30409_30420,i__30411_30422);
topo_sort_helper_STAR_.call(null,dep_30423,(depth + (1)),state);

var G__30424 = seq__30408_30419;
var G__30425 = chunk__30409_30420;
var G__30426 = count__30410_30421;
var G__30427 = (i__30411_30422 + (1));
seq__30408_30419 = G__30424;
chunk__30409_30420 = G__30425;
count__30410_30421 = G__30426;
i__30411_30422 = G__30427;
continue;
} else {
var temp__4657__auto___30428 = cljs.core.seq.call(null,seq__30408_30419);
if(temp__4657__auto___30428){
var seq__30408_30429__$1 = temp__4657__auto___30428;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30408_30429__$1)){
var c__25965__auto___30430 = cljs.core.chunk_first.call(null,seq__30408_30429__$1);
var G__30431 = cljs.core.chunk_rest.call(null,seq__30408_30429__$1);
var G__30432 = c__25965__auto___30430;
var G__30433 = cljs.core.count.call(null,c__25965__auto___30430);
var G__30434 = (0);
seq__30408_30419 = G__30431;
chunk__30409_30420 = G__30432;
count__30410_30421 = G__30433;
i__30411_30422 = G__30434;
continue;
} else {
var dep_30435 = cljs.core.first.call(null,seq__30408_30429__$1);
topo_sort_helper_STAR_.call(null,dep_30435,(depth + (1)),state);

var G__30436 = cljs.core.next.call(null,seq__30408_30429__$1);
var G__30437 = null;
var G__30438 = (0);
var G__30439 = (0);
seq__30408_30419 = G__30436;
chunk__30409_30420 = G__30437;
count__30410_30421 = G__30438;
i__30411_30422 = G__30439;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__30412){
var vec__30416 = p__30412;
var seq__30417 = cljs.core.seq.call(null,vec__30416);
var first__30418 = cljs.core.first.call(null,seq__30417);
var seq__30417__$1 = cljs.core.next.call(null,seq__30417);
var x = first__30418;
var xs = seq__30417__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__30416,seq__30417,first__30418,seq__30417__$1,x,xs,get_deps__$1){
return (function (p1__30358_SHARP_){
return clojure.set.difference.call(null,p1__30358_SHARP_,x);
});})(vec__30416,seq__30417,first__30418,seq__30417__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__30452 = cljs.core.seq.call(null,provides);
var chunk__30453 = null;
var count__30454 = (0);
var i__30455 = (0);
while(true){
if((i__30455 < count__30454)){
var prov = cljs.core._nth.call(null,chunk__30453,i__30455);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30456_30464 = cljs.core.seq.call(null,requires);
var chunk__30457_30465 = null;
var count__30458_30466 = (0);
var i__30459_30467 = (0);
while(true){
if((i__30459_30467 < count__30458_30466)){
var req_30468 = cljs.core._nth.call(null,chunk__30457_30465,i__30459_30467);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30468,prov);

var G__30469 = seq__30456_30464;
var G__30470 = chunk__30457_30465;
var G__30471 = count__30458_30466;
var G__30472 = (i__30459_30467 + (1));
seq__30456_30464 = G__30469;
chunk__30457_30465 = G__30470;
count__30458_30466 = G__30471;
i__30459_30467 = G__30472;
continue;
} else {
var temp__4657__auto___30473 = cljs.core.seq.call(null,seq__30456_30464);
if(temp__4657__auto___30473){
var seq__30456_30474__$1 = temp__4657__auto___30473;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30456_30474__$1)){
var c__25965__auto___30475 = cljs.core.chunk_first.call(null,seq__30456_30474__$1);
var G__30476 = cljs.core.chunk_rest.call(null,seq__30456_30474__$1);
var G__30477 = c__25965__auto___30475;
var G__30478 = cljs.core.count.call(null,c__25965__auto___30475);
var G__30479 = (0);
seq__30456_30464 = G__30476;
chunk__30457_30465 = G__30477;
count__30458_30466 = G__30478;
i__30459_30467 = G__30479;
continue;
} else {
var req_30480 = cljs.core.first.call(null,seq__30456_30474__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30480,prov);

var G__30481 = cljs.core.next.call(null,seq__30456_30474__$1);
var G__30482 = null;
var G__30483 = (0);
var G__30484 = (0);
seq__30456_30464 = G__30481;
chunk__30457_30465 = G__30482;
count__30458_30466 = G__30483;
i__30459_30467 = G__30484;
continue;
}
} else {
}
}
break;
}

var G__30485 = seq__30452;
var G__30486 = chunk__30453;
var G__30487 = count__30454;
var G__30488 = (i__30455 + (1));
seq__30452 = G__30485;
chunk__30453 = G__30486;
count__30454 = G__30487;
i__30455 = G__30488;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__30452);
if(temp__4657__auto__){
var seq__30452__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30452__$1)){
var c__25965__auto__ = cljs.core.chunk_first.call(null,seq__30452__$1);
var G__30489 = cljs.core.chunk_rest.call(null,seq__30452__$1);
var G__30490 = c__25965__auto__;
var G__30491 = cljs.core.count.call(null,c__25965__auto__);
var G__30492 = (0);
seq__30452 = G__30489;
chunk__30453 = G__30490;
count__30454 = G__30491;
i__30455 = G__30492;
continue;
} else {
var prov = cljs.core.first.call(null,seq__30452__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30460_30493 = cljs.core.seq.call(null,requires);
var chunk__30461_30494 = null;
var count__30462_30495 = (0);
var i__30463_30496 = (0);
while(true){
if((i__30463_30496 < count__30462_30495)){
var req_30497 = cljs.core._nth.call(null,chunk__30461_30494,i__30463_30496);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30497,prov);

var G__30498 = seq__30460_30493;
var G__30499 = chunk__30461_30494;
var G__30500 = count__30462_30495;
var G__30501 = (i__30463_30496 + (1));
seq__30460_30493 = G__30498;
chunk__30461_30494 = G__30499;
count__30462_30495 = G__30500;
i__30463_30496 = G__30501;
continue;
} else {
var temp__4657__auto___30502__$1 = cljs.core.seq.call(null,seq__30460_30493);
if(temp__4657__auto___30502__$1){
var seq__30460_30503__$1 = temp__4657__auto___30502__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30460_30503__$1)){
var c__25965__auto___30504 = cljs.core.chunk_first.call(null,seq__30460_30503__$1);
var G__30505 = cljs.core.chunk_rest.call(null,seq__30460_30503__$1);
var G__30506 = c__25965__auto___30504;
var G__30507 = cljs.core.count.call(null,c__25965__auto___30504);
var G__30508 = (0);
seq__30460_30493 = G__30505;
chunk__30461_30494 = G__30506;
count__30462_30495 = G__30507;
i__30463_30496 = G__30508;
continue;
} else {
var req_30509 = cljs.core.first.call(null,seq__30460_30503__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30509,prov);

var G__30510 = cljs.core.next.call(null,seq__30460_30503__$1);
var G__30511 = null;
var G__30512 = (0);
var G__30513 = (0);
seq__30460_30493 = G__30510;
chunk__30461_30494 = G__30511;
count__30462_30495 = G__30512;
i__30463_30496 = G__30513;
continue;
}
} else {
}
}
break;
}

var G__30514 = cljs.core.next.call(null,seq__30452__$1);
var G__30515 = null;
var G__30516 = (0);
var G__30517 = (0);
seq__30452 = G__30514;
chunk__30453 = G__30515;
count__30454 = G__30516;
i__30455 = G__30517;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__30522_30526 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__30523_30527 = null;
var count__30524_30528 = (0);
var i__30525_30529 = (0);
while(true){
if((i__30525_30529 < count__30524_30528)){
var ns_30530 = cljs.core._nth.call(null,chunk__30523_30527,i__30525_30529);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30530);

var G__30531 = seq__30522_30526;
var G__30532 = chunk__30523_30527;
var G__30533 = count__30524_30528;
var G__30534 = (i__30525_30529 + (1));
seq__30522_30526 = G__30531;
chunk__30523_30527 = G__30532;
count__30524_30528 = G__30533;
i__30525_30529 = G__30534;
continue;
} else {
var temp__4657__auto___30535 = cljs.core.seq.call(null,seq__30522_30526);
if(temp__4657__auto___30535){
var seq__30522_30536__$1 = temp__4657__auto___30535;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30522_30536__$1)){
var c__25965__auto___30537 = cljs.core.chunk_first.call(null,seq__30522_30536__$1);
var G__30538 = cljs.core.chunk_rest.call(null,seq__30522_30536__$1);
var G__30539 = c__25965__auto___30537;
var G__30540 = cljs.core.count.call(null,c__25965__auto___30537);
var G__30541 = (0);
seq__30522_30526 = G__30538;
chunk__30523_30527 = G__30539;
count__30524_30528 = G__30540;
i__30525_30529 = G__30541;
continue;
} else {
var ns_30542 = cljs.core.first.call(null,seq__30522_30536__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30542);

var G__30543 = cljs.core.next.call(null,seq__30522_30536__$1);
var G__30544 = null;
var G__30545 = (0);
var G__30546 = (0);
seq__30522_30526 = G__30543;
chunk__30523_30527 = G__30544;
count__30524_30528 = G__30545;
i__30525_30529 = G__30546;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__25146__auto__ = goog.require__;
if(cljs.core.truth_(or__25146__auto__)){
return or__25146__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__30547__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__30547 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30548__i = 0, G__30548__a = new Array(arguments.length -  0);
while (G__30548__i < G__30548__a.length) {G__30548__a[G__30548__i] = arguments[G__30548__i + 0]; ++G__30548__i;}
  args = new cljs.core.IndexedSeq(G__30548__a,0);
} 
return G__30547__delegate.call(this,args);};
G__30547.cljs$lang$maxFixedArity = 0;
G__30547.cljs$lang$applyTo = (function (arglist__30549){
var args = cljs.core.seq(arglist__30549);
return G__30547__delegate(args);
});
G__30547.cljs$core$IFn$_invoke$arity$variadic = G__30547__delegate;
return G__30547;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__30551 = cljs.core._EQ_;
var expr__30552 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__30551.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__30552))){
var path_parts = ((function (pred__30551,expr__30552){
return (function (p1__30550_SHARP_){
return clojure.string.split.call(null,p1__30550_SHARP_,/[\/\\]/);
});})(pred__30551,expr__30552))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__30551,expr__30552){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e30554){if((e30554 instanceof Error)){
var e = e30554;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e30554;

}
}})());
});
;})(path_parts,sep,root,pred__30551,expr__30552))
} else {
if(cljs.core.truth_(pred__30551.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__30552))){
return ((function (pred__30551,expr__30552){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__30551,expr__30552){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__30551,expr__30552))
);

return deferred.addErrback(((function (deferred,pred__30551,expr__30552){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__30551,expr__30552))
);
});
;})(pred__30551,expr__30552))
} else {
return ((function (pred__30551,expr__30552){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__30551,expr__30552))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__30555,callback){
var map__30558 = p__30555;
var map__30558__$1 = ((((!((map__30558 == null)))?((((map__30558.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30558.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30558):map__30558);
var file_msg = map__30558__$1;
var request_url = cljs.core.get.call(null,map__30558__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Attempting to load "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__30558,map__30558__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Successfully loaded "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__30558,map__30558__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__27356__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27356__auto__){
return (function (){
var f__27357__auto__ = (function (){var switch__27244__auto__ = ((function (c__27356__auto__){
return (function (state_30582){
var state_val_30583 = (state_30582[(1)]);
if((state_val_30583 === (7))){
var inst_30578 = (state_30582[(2)]);
var state_30582__$1 = state_30582;
var statearr_30584_30604 = state_30582__$1;
(statearr_30584_30604[(2)] = inst_30578);

(statearr_30584_30604[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30583 === (1))){
var state_30582__$1 = state_30582;
var statearr_30585_30605 = state_30582__$1;
(statearr_30585_30605[(2)] = null);

(statearr_30585_30605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30583 === (4))){
var inst_30562 = (state_30582[(7)]);
var inst_30562__$1 = (state_30582[(2)]);
var state_30582__$1 = (function (){var statearr_30586 = state_30582;
(statearr_30586[(7)] = inst_30562__$1);

return statearr_30586;
})();
if(cljs.core.truth_(inst_30562__$1)){
var statearr_30587_30606 = state_30582__$1;
(statearr_30587_30606[(1)] = (5));

} else {
var statearr_30588_30607 = state_30582__$1;
(statearr_30588_30607[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30583 === (6))){
var state_30582__$1 = state_30582;
var statearr_30589_30608 = state_30582__$1;
(statearr_30589_30608[(2)] = null);

(statearr_30589_30608[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30583 === (3))){
var inst_30580 = (state_30582[(2)]);
var state_30582__$1 = state_30582;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30582__$1,inst_30580);
} else {
if((state_val_30583 === (2))){
var state_30582__$1 = state_30582;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30582__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_30583 === (11))){
var inst_30574 = (state_30582[(2)]);
var state_30582__$1 = (function (){var statearr_30590 = state_30582;
(statearr_30590[(8)] = inst_30574);

return statearr_30590;
})();
var statearr_30591_30609 = state_30582__$1;
(statearr_30591_30609[(2)] = null);

(statearr_30591_30609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30583 === (9))){
var inst_30566 = (state_30582[(9)]);
var inst_30568 = (state_30582[(10)]);
var inst_30570 = inst_30568.call(null,inst_30566);
var state_30582__$1 = state_30582;
var statearr_30592_30610 = state_30582__$1;
(statearr_30592_30610[(2)] = inst_30570);

(statearr_30592_30610[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30583 === (5))){
var inst_30562 = (state_30582[(7)]);
var inst_30564 = figwheel.client.file_reloading.blocking_load.call(null,inst_30562);
var state_30582__$1 = state_30582;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30582__$1,(8),inst_30564);
} else {
if((state_val_30583 === (10))){
var inst_30566 = (state_30582[(9)]);
var inst_30572 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_30566);
var state_30582__$1 = state_30582;
var statearr_30593_30611 = state_30582__$1;
(statearr_30593_30611[(2)] = inst_30572);

(statearr_30593_30611[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30583 === (8))){
var inst_30562 = (state_30582[(7)]);
var inst_30568 = (state_30582[(10)]);
var inst_30566 = (state_30582[(2)]);
var inst_30567 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_30568__$1 = cljs.core.get.call(null,inst_30567,inst_30562);
var state_30582__$1 = (function (){var statearr_30594 = state_30582;
(statearr_30594[(9)] = inst_30566);

(statearr_30594[(10)] = inst_30568__$1);

return statearr_30594;
})();
if(cljs.core.truth_(inst_30568__$1)){
var statearr_30595_30612 = state_30582__$1;
(statearr_30595_30612[(1)] = (9));

} else {
var statearr_30596_30613 = state_30582__$1;
(statearr_30596_30613[(1)] = (10));

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
});})(c__27356__auto__))
;
return ((function (switch__27244__auto__,c__27356__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__27245__auto__ = null;
var figwheel$client$file_reloading$state_machine__27245__auto____0 = (function (){
var statearr_30600 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30600[(0)] = figwheel$client$file_reloading$state_machine__27245__auto__);

(statearr_30600[(1)] = (1));

return statearr_30600;
});
var figwheel$client$file_reloading$state_machine__27245__auto____1 = (function (state_30582){
while(true){
var ret_value__27246__auto__ = (function (){try{while(true){
var result__27247__auto__ = switch__27244__auto__.call(null,state_30582);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27247__auto__;
}
break;
}
}catch (e30601){if((e30601 instanceof Object)){
var ex__27248__auto__ = e30601;
var statearr_30602_30614 = state_30582;
(statearr_30602_30614[(5)] = ex__27248__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30582);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30601;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30615 = state_30582;
state_30582 = G__30615;
continue;
} else {
return ret_value__27246__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__27245__auto__ = function(state_30582){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__27245__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__27245__auto____1.call(this,state_30582);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__27245__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__27245__auto____0;
figwheel$client$file_reloading$state_machine__27245__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__27245__auto____1;
return figwheel$client$file_reloading$state_machine__27245__auto__;
})()
;})(switch__27244__auto__,c__27356__auto__))
})();
var state__27358__auto__ = (function (){var statearr_30603 = f__27357__auto__.call(null);
(statearr_30603[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27356__auto__);

return statearr_30603;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27358__auto__);
});})(c__27356__auto__))
);

return c__27356__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__30616,callback){
var map__30619 = p__30616;
var map__30619__$1 = ((((!((map__30619 == null)))?((((map__30619.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30619.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30619):map__30619);
var file_msg = map__30619__$1;
var namespace = cljs.core.get.call(null,map__30619__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__30619,map__30619__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__30619,map__30619__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__30621){
var map__30624 = p__30621;
var map__30624__$1 = ((((!((map__30624 == null)))?((((map__30624.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30624.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30624):map__30624);
var file_msg = map__30624__$1;
var namespace = cljs.core.get.call(null,map__30624__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__25134__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__25134__auto__){
var or__25146__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__25146__auto__)){
return or__25146__auto__;
} else {
var or__25146__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__25146__auto____$1)){
return or__25146__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__25134__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__30626,callback){
var map__30629 = p__30626;
var map__30629__$1 = ((((!((map__30629 == null)))?((((map__30629.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30629.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30629):map__30629);
var file_msg = map__30629__$1;
var request_url = cljs.core.get.call(null,map__30629__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__30629__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not trying to load file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__27356__auto___30733 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27356__auto___30733,out){
return (function (){
var f__27357__auto__ = (function (){var switch__27244__auto__ = ((function (c__27356__auto___30733,out){
return (function (state_30715){
var state_val_30716 = (state_30715[(1)]);
if((state_val_30716 === (1))){
var inst_30689 = cljs.core.seq.call(null,files);
var inst_30690 = cljs.core.first.call(null,inst_30689);
var inst_30691 = cljs.core.next.call(null,inst_30689);
var inst_30692 = files;
var state_30715__$1 = (function (){var statearr_30717 = state_30715;
(statearr_30717[(7)] = inst_30692);

(statearr_30717[(8)] = inst_30691);

(statearr_30717[(9)] = inst_30690);

return statearr_30717;
})();
var statearr_30718_30734 = state_30715__$1;
(statearr_30718_30734[(2)] = null);

(statearr_30718_30734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30716 === (2))){
var inst_30692 = (state_30715[(7)]);
var inst_30698 = (state_30715[(10)]);
var inst_30697 = cljs.core.seq.call(null,inst_30692);
var inst_30698__$1 = cljs.core.first.call(null,inst_30697);
var inst_30699 = cljs.core.next.call(null,inst_30697);
var inst_30700 = (inst_30698__$1 == null);
var inst_30701 = cljs.core.not.call(null,inst_30700);
var state_30715__$1 = (function (){var statearr_30719 = state_30715;
(statearr_30719[(10)] = inst_30698__$1);

(statearr_30719[(11)] = inst_30699);

return statearr_30719;
})();
if(inst_30701){
var statearr_30720_30735 = state_30715__$1;
(statearr_30720_30735[(1)] = (4));

} else {
var statearr_30721_30736 = state_30715__$1;
(statearr_30721_30736[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30716 === (3))){
var inst_30713 = (state_30715[(2)]);
var state_30715__$1 = state_30715;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30715__$1,inst_30713);
} else {
if((state_val_30716 === (4))){
var inst_30698 = (state_30715[(10)]);
var inst_30703 = figwheel.client.file_reloading.reload_js_file.call(null,inst_30698);
var state_30715__$1 = state_30715;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30715__$1,(7),inst_30703);
} else {
if((state_val_30716 === (5))){
var inst_30709 = cljs.core.async.close_BANG_.call(null,out);
var state_30715__$1 = state_30715;
var statearr_30722_30737 = state_30715__$1;
(statearr_30722_30737[(2)] = inst_30709);

(statearr_30722_30737[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30716 === (6))){
var inst_30711 = (state_30715[(2)]);
var state_30715__$1 = state_30715;
var statearr_30723_30738 = state_30715__$1;
(statearr_30723_30738[(2)] = inst_30711);

(statearr_30723_30738[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30716 === (7))){
var inst_30699 = (state_30715[(11)]);
var inst_30705 = (state_30715[(2)]);
var inst_30706 = cljs.core.async.put_BANG_.call(null,out,inst_30705);
var inst_30692 = inst_30699;
var state_30715__$1 = (function (){var statearr_30724 = state_30715;
(statearr_30724[(7)] = inst_30692);

(statearr_30724[(12)] = inst_30706);

return statearr_30724;
})();
var statearr_30725_30739 = state_30715__$1;
(statearr_30725_30739[(2)] = null);

(statearr_30725_30739[(1)] = (2));


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
});})(c__27356__auto___30733,out))
;
return ((function (switch__27244__auto__,c__27356__auto___30733,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27245__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27245__auto____0 = (function (){
var statearr_30729 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30729[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27245__auto__);

(statearr_30729[(1)] = (1));

return statearr_30729;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27245__auto____1 = (function (state_30715){
while(true){
var ret_value__27246__auto__ = (function (){try{while(true){
var result__27247__auto__ = switch__27244__auto__.call(null,state_30715);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27247__auto__;
}
break;
}
}catch (e30730){if((e30730 instanceof Object)){
var ex__27248__auto__ = e30730;
var statearr_30731_30740 = state_30715;
(statearr_30731_30740[(5)] = ex__27248__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30715);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30730;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30741 = state_30715;
state_30715 = G__30741;
continue;
} else {
return ret_value__27246__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27245__auto__ = function(state_30715){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27245__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27245__auto____1.call(this,state_30715);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27245__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27245__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27245__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27245__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27245__auto__;
})()
;})(switch__27244__auto__,c__27356__auto___30733,out))
})();
var state__27358__auto__ = (function (){var statearr_30732 = f__27357__auto__.call(null);
(statearr_30732[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27356__auto___30733);

return statearr_30732;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27358__auto__);
});})(c__27356__auto___30733,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__30742,opts){
var map__30746 = p__30742;
var map__30746__$1 = ((((!((map__30746 == null)))?((((map__30746.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30746.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30746):map__30746);
var eval_body = cljs.core.get.call(null,map__30746__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__30746__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__25134__auto__ = eval_body;
if(cljs.core.truth_(and__25134__auto__)){
return typeof eval_body === 'string';
} else {
return and__25134__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Evaling file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e30748){var e = e30748;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unable to evaluate "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__30749_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30749_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__30758){
var vec__30759 = p__30758;
var k = cljs.core.nth.call(null,vec__30759,(0),null);
var v = cljs.core.nth.call(null,vec__30759,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__30762){
var vec__30763 = p__30762;
var k = cljs.core.nth.call(null,vec__30763,(0),null);
var v = cljs.core.nth.call(null,vec__30763,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__30769,p__30770){
var map__31018 = p__30769;
var map__31018__$1 = ((((!((map__31018 == null)))?((((map__31018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31018.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31018):map__31018);
var opts = map__31018__$1;
var before_jsload = cljs.core.get.call(null,map__31018__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__31018__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__31018__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__31019 = p__30770;
var map__31019__$1 = ((((!((map__31019 == null)))?((((map__31019.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31019.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31019):map__31019);
var msg = map__31019__$1;
var files = cljs.core.get.call(null,map__31019__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__31019__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__31019__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__27356__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27356__auto__,map__31018,map__31018__$1,opts,before_jsload,on_jsload,reload_dependents,map__31019,map__31019__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__27357__auto__ = (function (){var switch__27244__auto__ = ((function (c__27356__auto__,map__31018,map__31018__$1,opts,before_jsload,on_jsload,reload_dependents,map__31019,map__31019__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_31173){
var state_val_31174 = (state_31173[(1)]);
if((state_val_31174 === (7))){
var inst_31033 = (state_31173[(7)]);
var inst_31034 = (state_31173[(8)]);
var inst_31036 = (state_31173[(9)]);
var inst_31035 = (state_31173[(10)]);
var inst_31041 = cljs.core._nth.call(null,inst_31034,inst_31036);
var inst_31042 = figwheel.client.file_reloading.eval_body.call(null,inst_31041,opts);
var inst_31043 = (inst_31036 + (1));
var tmp31175 = inst_31033;
var tmp31176 = inst_31034;
var tmp31177 = inst_31035;
var inst_31033__$1 = tmp31175;
var inst_31034__$1 = tmp31176;
var inst_31035__$1 = tmp31177;
var inst_31036__$1 = inst_31043;
var state_31173__$1 = (function (){var statearr_31178 = state_31173;
(statearr_31178[(7)] = inst_31033__$1);

(statearr_31178[(8)] = inst_31034__$1);

(statearr_31178[(9)] = inst_31036__$1);

(statearr_31178[(10)] = inst_31035__$1);

(statearr_31178[(11)] = inst_31042);

return statearr_31178;
})();
var statearr_31179_31265 = state_31173__$1;
(statearr_31179_31265[(2)] = null);

(statearr_31179_31265[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31174 === (20))){
var inst_31076 = (state_31173[(12)]);
var inst_31084 = figwheel.client.file_reloading.sort_files.call(null,inst_31076);
var state_31173__$1 = state_31173;
var statearr_31180_31266 = state_31173__$1;
(statearr_31180_31266[(2)] = inst_31084);

(statearr_31180_31266[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31174 === (27))){
var state_31173__$1 = state_31173;
var statearr_31181_31267 = state_31173__$1;
(statearr_31181_31267[(2)] = null);

(statearr_31181_31267[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31174 === (1))){
var inst_31025 = (state_31173[(13)]);
var inst_31022 = before_jsload.call(null,files);
var inst_31023 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_31024 = (function (){return ((function (inst_31025,inst_31022,inst_31023,state_val_31174,c__27356__auto__,map__31018,map__31018__$1,opts,before_jsload,on_jsload,reload_dependents,map__31019,map__31019__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30766_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30766_SHARP_);
});
;})(inst_31025,inst_31022,inst_31023,state_val_31174,c__27356__auto__,map__31018,map__31018__$1,opts,before_jsload,on_jsload,reload_dependents,map__31019,map__31019__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31025__$1 = cljs.core.filter.call(null,inst_31024,files);
var inst_31026 = cljs.core.not_empty.call(null,inst_31025__$1);
var state_31173__$1 = (function (){var statearr_31182 = state_31173;
(statearr_31182[(14)] = inst_31023);

(statearr_31182[(15)] = inst_31022);

(statearr_31182[(13)] = inst_31025__$1);

return statearr_31182;
})();
if(cljs.core.truth_(inst_31026)){
var statearr_31183_31268 = state_31173__$1;
(statearr_31183_31268[(1)] = (2));

} else {
var statearr_31184_31269 = state_31173__$1;
(statearr_31184_31269[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31174 === (24))){
var state_31173__$1 = state_31173;
var statearr_31185_31270 = state_31173__$1;
(statearr_31185_31270[(2)] = null);

(statearr_31185_31270[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31174 === (39))){
var inst_31126 = (state_31173[(16)]);
var state_31173__$1 = state_31173;
var statearr_31186_31271 = state_31173__$1;
(statearr_31186_31271[(2)] = inst_31126);

(statearr_31186_31271[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31174 === (46))){
var inst_31168 = (state_31173[(2)]);
var state_31173__$1 = state_31173;
var statearr_31187_31272 = state_31173__$1;
(statearr_31187_31272[(2)] = inst_31168);

(statearr_31187_31272[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31174 === (4))){
var inst_31070 = (state_31173[(2)]);
var inst_31071 = cljs.core.List.EMPTY;
var inst_31072 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_31071);
var inst_31073 = (function (){return ((function (inst_31070,inst_31071,inst_31072,state_val_31174,c__27356__auto__,map__31018,map__31018__$1,opts,before_jsload,on_jsload,reload_dependents,map__31019,map__31019__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30767_SHARP_){
var and__25134__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30767_SHARP_);
if(cljs.core.truth_(and__25134__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30767_SHARP_));
} else {
return and__25134__auto__;
}
});
;})(inst_31070,inst_31071,inst_31072,state_val_31174,c__27356__auto__,map__31018,map__31018__$1,opts,before_jsload,on_jsload,reload_dependents,map__31019,map__31019__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31074 = cljs.core.filter.call(null,inst_31073,files);
var inst_31075 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_31076 = cljs.core.concat.call(null,inst_31074,inst_31075);
var state_31173__$1 = (function (){var statearr_31188 = state_31173;
(statearr_31188[(17)] = inst_31072);

(statearr_31188[(12)] = inst_31076);

(statearr_31188[(18)] = inst_31070);

return statearr_31188;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_31189_31273 = state_31173__$1;
(statearr_31189_31273[(1)] = (16));

} else {
var statearr_31190_31274 = state_31173__$1;
(statearr_31190_31274[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31174 === (15))){
var inst_31060 = (state_31173[(2)]);
var state_31173__$1 = state_31173;
var statearr_31191_31275 = state_31173__$1;
(statearr_31191_31275[(2)] = inst_31060);

(statearr_31191_31275[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31174 === (21))){
var inst_31086 = (state_31173[(19)]);
var inst_31086__$1 = (state_31173[(2)]);
var inst_31087 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_31086__$1);
var state_31173__$1 = (function (){var statearr_31192 = state_31173;
(statearr_31192[(19)] = inst_31086__$1);

return statearr_31192;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31173__$1,(22),inst_31087);
} else {
if((state_val_31174 === (31))){
var inst_31171 = (state_31173[(2)]);
var state_31173__$1 = state_31173;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31173__$1,inst_31171);
} else {
if((state_val_31174 === (32))){
var inst_31126 = (state_31173[(16)]);
var inst_31131 = inst_31126.cljs$lang$protocol_mask$partition0$;
var inst_31132 = (inst_31131 & (64));
var inst_31133 = inst_31126.cljs$core$ISeq$;
var inst_31134 = (cljs.core.PROTOCOL_SENTINEL === inst_31133);
var inst_31135 = (inst_31132) || (inst_31134);
var state_31173__$1 = state_31173;
if(cljs.core.truth_(inst_31135)){
var statearr_31193_31276 = state_31173__$1;
(statearr_31193_31276[(1)] = (35));

} else {
var statearr_31194_31277 = state_31173__$1;
(statearr_31194_31277[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31174 === (40))){
var inst_31148 = (state_31173[(20)]);
var inst_31147 = (state_31173[(2)]);
var inst_31148__$1 = cljs.core.get.call(null,inst_31147,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_31149 = cljs.core.get.call(null,inst_31147,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_31150 = cljs.core.not_empty.call(null,inst_31148__$1);
var state_31173__$1 = (function (){var statearr_31195 = state_31173;
(statearr_31195[(20)] = inst_31148__$1);

(statearr_31195[(21)] = inst_31149);

return statearr_31195;
})();
if(cljs.core.truth_(inst_31150)){
var statearr_31196_31278 = state_31173__$1;
(statearr_31196_31278[(1)] = (41));

} else {
var statearr_31197_31279 = state_31173__$1;
(statearr_31197_31279[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31174 === (33))){
var state_31173__$1 = state_31173;
var statearr_31198_31280 = state_31173__$1;
(statearr_31198_31280[(2)] = false);

(statearr_31198_31280[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31174 === (13))){
var inst_31046 = (state_31173[(22)]);
var inst_31050 = cljs.core.chunk_first.call(null,inst_31046);
var inst_31051 = cljs.core.chunk_rest.call(null,inst_31046);
var inst_31052 = cljs.core.count.call(null,inst_31050);
var inst_31033 = inst_31051;
var inst_31034 = inst_31050;
var inst_31035 = inst_31052;
var inst_31036 = (0);
var state_31173__$1 = (function (){var statearr_31199 = state_31173;
(statearr_31199[(7)] = inst_31033);

(statearr_31199[(8)] = inst_31034);

(statearr_31199[(9)] = inst_31036);

(statearr_31199[(10)] = inst_31035);

return statearr_31199;
})();
var statearr_31200_31281 = state_31173__$1;
(statearr_31200_31281[(2)] = null);

(statearr_31200_31281[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31174 === (22))){
var inst_31086 = (state_31173[(19)]);
var inst_31089 = (state_31173[(23)]);
var inst_31094 = (state_31173[(24)]);
var inst_31090 = (state_31173[(25)]);
var inst_31089__$1 = (state_31173[(2)]);
var inst_31090__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_31089__$1);
var inst_31091 = (function (){var all_files = inst_31086;
var res_SINGLEQUOTE_ = inst_31089__$1;
var res = inst_31090__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_31086,inst_31089,inst_31094,inst_31090,inst_31089__$1,inst_31090__$1,state_val_31174,c__27356__auto__,map__31018,map__31018__$1,opts,before_jsload,on_jsload,reload_dependents,map__31019,map__31019__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30768_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__30768_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_31086,inst_31089,inst_31094,inst_31090,inst_31089__$1,inst_31090__$1,state_val_31174,c__27356__auto__,map__31018,map__31018__$1,opts,before_jsload,on_jsload,reload_dependents,map__31019,map__31019__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31092 = cljs.core.filter.call(null,inst_31091,inst_31089__$1);
var inst_31093 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_31094__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_31093);
var inst_31095 = cljs.core.not_empty.call(null,inst_31094__$1);
var state_31173__$1 = (function (){var statearr_31201 = state_31173;
(statearr_31201[(26)] = inst_31092);

(statearr_31201[(23)] = inst_31089__$1);

(statearr_31201[(24)] = inst_31094__$1);

(statearr_31201[(25)] = inst_31090__$1);

return statearr_31201;
})();
if(cljs.core.truth_(inst_31095)){
var statearr_31202_31282 = state_31173__$1;
(statearr_31202_31282[(1)] = (23));

} else {
var statearr_31203_31283 = state_31173__$1;
(statearr_31203_31283[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31174 === (36))){
var state_31173__$1 = state_31173;
var statearr_31204_31284 = state_31173__$1;
(statearr_31204_31284[(2)] = false);

(statearr_31204_31284[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31174 === (41))){
var inst_31148 = (state_31173[(20)]);
var inst_31152 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_31153 = cljs.core.map.call(null,inst_31152,inst_31148);
var inst_31154 = cljs.core.pr_str.call(null,inst_31153);
var inst_31155 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("figwheel-no-load meta-data: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31154)].join('');
var inst_31156 = figwheel.client.utils.log.call(null,inst_31155);
var state_31173__$1 = state_31173;
var statearr_31205_31285 = state_31173__$1;
(statearr_31205_31285[(2)] = inst_31156);

(statearr_31205_31285[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31174 === (43))){
var inst_31149 = (state_31173[(21)]);
var inst_31159 = (state_31173[(2)]);
var inst_31160 = cljs.core.not_empty.call(null,inst_31149);
var state_31173__$1 = (function (){var statearr_31206 = state_31173;
(statearr_31206[(27)] = inst_31159);

return statearr_31206;
})();
if(cljs.core.truth_(inst_31160)){
var statearr_31207_31286 = state_31173__$1;
(statearr_31207_31286[(1)] = (44));

} else {
var statearr_31208_31287 = state_31173__$1;
(statearr_31208_31287[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31174 === (29))){
var inst_31092 = (state_31173[(26)]);
var inst_31086 = (state_31173[(19)]);
var inst_31089 = (state_31173[(23)]);
var inst_31094 = (state_31173[(24)]);
var inst_31090 = (state_31173[(25)]);
var inst_31126 = (state_31173[(16)]);
var inst_31122 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_31125 = (function (){var all_files = inst_31086;
var res_SINGLEQUOTE_ = inst_31089;
var res = inst_31090;
var files_not_loaded = inst_31092;
var dependencies_that_loaded = inst_31094;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31092,inst_31086,inst_31089,inst_31094,inst_31090,inst_31126,inst_31122,state_val_31174,c__27356__auto__,map__31018,map__31018__$1,opts,before_jsload,on_jsload,reload_dependents,map__31019,map__31019__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__31124){
var map__31209 = p__31124;
var map__31209__$1 = ((((!((map__31209 == null)))?((((map__31209.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31209.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31209):map__31209);
var namespace = cljs.core.get.call(null,map__31209__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31092,inst_31086,inst_31089,inst_31094,inst_31090,inst_31126,inst_31122,state_val_31174,c__27356__auto__,map__31018,map__31018__$1,opts,before_jsload,on_jsload,reload_dependents,map__31019,map__31019__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31126__$1 = cljs.core.group_by.call(null,inst_31125,inst_31092);
var inst_31128 = (inst_31126__$1 == null);
var inst_31129 = cljs.core.not.call(null,inst_31128);
var state_31173__$1 = (function (){var statearr_31211 = state_31173;
(statearr_31211[(28)] = inst_31122);

(statearr_31211[(16)] = inst_31126__$1);

return statearr_31211;
})();
if(inst_31129){
var statearr_31212_31288 = state_31173__$1;
(statearr_31212_31288[(1)] = (32));

} else {
var statearr_31213_31289 = state_31173__$1;
(statearr_31213_31289[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31174 === (44))){
var inst_31149 = (state_31173[(21)]);
var inst_31162 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31149);
var inst_31163 = cljs.core.pr_str.call(null,inst_31162);
var inst_31164 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("not required: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31163)].join('');
var inst_31165 = figwheel.client.utils.log.call(null,inst_31164);
var state_31173__$1 = state_31173;
var statearr_31214_31290 = state_31173__$1;
(statearr_31214_31290[(2)] = inst_31165);

(statearr_31214_31290[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31174 === (6))){
var inst_31067 = (state_31173[(2)]);
var state_31173__$1 = state_31173;
var statearr_31215_31291 = state_31173__$1;
(statearr_31215_31291[(2)] = inst_31067);

(statearr_31215_31291[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31174 === (28))){
var inst_31092 = (state_31173[(26)]);
var inst_31119 = (state_31173[(2)]);
var inst_31120 = cljs.core.not_empty.call(null,inst_31092);
var state_31173__$1 = (function (){var statearr_31216 = state_31173;
(statearr_31216[(29)] = inst_31119);

return statearr_31216;
})();
if(cljs.core.truth_(inst_31120)){
var statearr_31217_31292 = state_31173__$1;
(statearr_31217_31292[(1)] = (29));

} else {
var statearr_31218_31293 = state_31173__$1;
(statearr_31218_31293[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31174 === (25))){
var inst_31090 = (state_31173[(25)]);
var inst_31106 = (state_31173[(2)]);
var inst_31107 = cljs.core.not_empty.call(null,inst_31090);
var state_31173__$1 = (function (){var statearr_31219 = state_31173;
(statearr_31219[(30)] = inst_31106);

return statearr_31219;
})();
if(cljs.core.truth_(inst_31107)){
var statearr_31220_31294 = state_31173__$1;
(statearr_31220_31294[(1)] = (26));

} else {
var statearr_31221_31295 = state_31173__$1;
(statearr_31221_31295[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31174 === (34))){
var inst_31142 = (state_31173[(2)]);
var state_31173__$1 = state_31173;
if(cljs.core.truth_(inst_31142)){
var statearr_31222_31296 = state_31173__$1;
(statearr_31222_31296[(1)] = (38));

} else {
var statearr_31223_31297 = state_31173__$1;
(statearr_31223_31297[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31174 === (17))){
var state_31173__$1 = state_31173;
var statearr_31224_31298 = state_31173__$1;
(statearr_31224_31298[(2)] = recompile_dependents);

(statearr_31224_31298[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31174 === (3))){
var state_31173__$1 = state_31173;
var statearr_31225_31299 = state_31173__$1;
(statearr_31225_31299[(2)] = null);

(statearr_31225_31299[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31174 === (12))){
var inst_31063 = (state_31173[(2)]);
var state_31173__$1 = state_31173;
var statearr_31226_31300 = state_31173__$1;
(statearr_31226_31300[(2)] = inst_31063);

(statearr_31226_31300[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31174 === (2))){
var inst_31025 = (state_31173[(13)]);
var inst_31032 = cljs.core.seq.call(null,inst_31025);
var inst_31033 = inst_31032;
var inst_31034 = null;
var inst_31035 = (0);
var inst_31036 = (0);
var state_31173__$1 = (function (){var statearr_31227 = state_31173;
(statearr_31227[(7)] = inst_31033);

(statearr_31227[(8)] = inst_31034);

(statearr_31227[(9)] = inst_31036);

(statearr_31227[(10)] = inst_31035);

return statearr_31227;
})();
var statearr_31228_31301 = state_31173__$1;
(statearr_31228_31301[(2)] = null);

(statearr_31228_31301[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31174 === (23))){
var inst_31092 = (state_31173[(26)]);
var inst_31086 = (state_31173[(19)]);
var inst_31089 = (state_31173[(23)]);
var inst_31094 = (state_31173[(24)]);
var inst_31090 = (state_31173[(25)]);
var inst_31097 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_31099 = (function (){var all_files = inst_31086;
var res_SINGLEQUOTE_ = inst_31089;
var res = inst_31090;
var files_not_loaded = inst_31092;
var dependencies_that_loaded = inst_31094;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31092,inst_31086,inst_31089,inst_31094,inst_31090,inst_31097,state_val_31174,c__27356__auto__,map__31018,map__31018__$1,opts,before_jsload,on_jsload,reload_dependents,map__31019,map__31019__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__31098){
var map__31229 = p__31098;
var map__31229__$1 = ((((!((map__31229 == null)))?((((map__31229.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31229.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31229):map__31229);
var request_url = cljs.core.get.call(null,map__31229__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31092,inst_31086,inst_31089,inst_31094,inst_31090,inst_31097,state_val_31174,c__27356__auto__,map__31018,map__31018__$1,opts,before_jsload,on_jsload,reload_dependents,map__31019,map__31019__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31100 = cljs.core.reverse.call(null,inst_31094);
var inst_31101 = cljs.core.map.call(null,inst_31099,inst_31100);
var inst_31102 = cljs.core.pr_str.call(null,inst_31101);
var inst_31103 = figwheel.client.utils.log.call(null,inst_31102);
var state_31173__$1 = (function (){var statearr_31231 = state_31173;
(statearr_31231[(31)] = inst_31097);

return statearr_31231;
})();
var statearr_31232_31302 = state_31173__$1;
(statearr_31232_31302[(2)] = inst_31103);

(statearr_31232_31302[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31174 === (35))){
var state_31173__$1 = state_31173;
var statearr_31233_31303 = state_31173__$1;
(statearr_31233_31303[(2)] = true);

(statearr_31233_31303[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31174 === (19))){
var inst_31076 = (state_31173[(12)]);
var inst_31082 = figwheel.client.file_reloading.expand_files.call(null,inst_31076);
var state_31173__$1 = state_31173;
var statearr_31234_31304 = state_31173__$1;
(statearr_31234_31304[(2)] = inst_31082);

(statearr_31234_31304[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31174 === (11))){
var state_31173__$1 = state_31173;
var statearr_31235_31305 = state_31173__$1;
(statearr_31235_31305[(2)] = null);

(statearr_31235_31305[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31174 === (9))){
var inst_31065 = (state_31173[(2)]);
var state_31173__$1 = state_31173;
var statearr_31236_31306 = state_31173__$1;
(statearr_31236_31306[(2)] = inst_31065);

(statearr_31236_31306[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31174 === (5))){
var inst_31036 = (state_31173[(9)]);
var inst_31035 = (state_31173[(10)]);
var inst_31038 = (inst_31036 < inst_31035);
var inst_31039 = inst_31038;
var state_31173__$1 = state_31173;
if(cljs.core.truth_(inst_31039)){
var statearr_31237_31307 = state_31173__$1;
(statearr_31237_31307[(1)] = (7));

} else {
var statearr_31238_31308 = state_31173__$1;
(statearr_31238_31308[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31174 === (14))){
var inst_31046 = (state_31173[(22)]);
var inst_31055 = cljs.core.first.call(null,inst_31046);
var inst_31056 = figwheel.client.file_reloading.eval_body.call(null,inst_31055,opts);
var inst_31057 = cljs.core.next.call(null,inst_31046);
var inst_31033 = inst_31057;
var inst_31034 = null;
var inst_31035 = (0);
var inst_31036 = (0);
var state_31173__$1 = (function (){var statearr_31239 = state_31173;
(statearr_31239[(7)] = inst_31033);

(statearr_31239[(8)] = inst_31034);

(statearr_31239[(9)] = inst_31036);

(statearr_31239[(32)] = inst_31056);

(statearr_31239[(10)] = inst_31035);

return statearr_31239;
})();
var statearr_31240_31309 = state_31173__$1;
(statearr_31240_31309[(2)] = null);

(statearr_31240_31309[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31174 === (45))){
var state_31173__$1 = state_31173;
var statearr_31241_31310 = state_31173__$1;
(statearr_31241_31310[(2)] = null);

(statearr_31241_31310[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31174 === (26))){
var inst_31092 = (state_31173[(26)]);
var inst_31086 = (state_31173[(19)]);
var inst_31089 = (state_31173[(23)]);
var inst_31094 = (state_31173[(24)]);
var inst_31090 = (state_31173[(25)]);
var inst_31109 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_31111 = (function (){var all_files = inst_31086;
var res_SINGLEQUOTE_ = inst_31089;
var res = inst_31090;
var files_not_loaded = inst_31092;
var dependencies_that_loaded = inst_31094;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31092,inst_31086,inst_31089,inst_31094,inst_31090,inst_31109,state_val_31174,c__27356__auto__,map__31018,map__31018__$1,opts,before_jsload,on_jsload,reload_dependents,map__31019,map__31019__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__31110){
var map__31242 = p__31110;
var map__31242__$1 = ((((!((map__31242 == null)))?((((map__31242.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31242.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31242):map__31242);
var namespace = cljs.core.get.call(null,map__31242__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__31242__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31092,inst_31086,inst_31089,inst_31094,inst_31090,inst_31109,state_val_31174,c__27356__auto__,map__31018,map__31018__$1,opts,before_jsload,on_jsload,reload_dependents,map__31019,map__31019__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31112 = cljs.core.map.call(null,inst_31111,inst_31090);
var inst_31113 = cljs.core.pr_str.call(null,inst_31112);
var inst_31114 = figwheel.client.utils.log.call(null,inst_31113);
var inst_31115 = (function (){var all_files = inst_31086;
var res_SINGLEQUOTE_ = inst_31089;
var res = inst_31090;
var files_not_loaded = inst_31092;
var dependencies_that_loaded = inst_31094;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31092,inst_31086,inst_31089,inst_31094,inst_31090,inst_31109,inst_31111,inst_31112,inst_31113,inst_31114,state_val_31174,c__27356__auto__,map__31018,map__31018__$1,opts,before_jsload,on_jsload,reload_dependents,map__31019,map__31019__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31092,inst_31086,inst_31089,inst_31094,inst_31090,inst_31109,inst_31111,inst_31112,inst_31113,inst_31114,state_val_31174,c__27356__auto__,map__31018,map__31018__$1,opts,before_jsload,on_jsload,reload_dependents,map__31019,map__31019__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31116 = setTimeout(inst_31115,(10));
var state_31173__$1 = (function (){var statearr_31244 = state_31173;
(statearr_31244[(33)] = inst_31109);

(statearr_31244[(34)] = inst_31114);

return statearr_31244;
})();
var statearr_31245_31311 = state_31173__$1;
(statearr_31245_31311[(2)] = inst_31116);

(statearr_31245_31311[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31174 === (16))){
var state_31173__$1 = state_31173;
var statearr_31246_31312 = state_31173__$1;
(statearr_31246_31312[(2)] = reload_dependents);

(statearr_31246_31312[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31174 === (38))){
var inst_31126 = (state_31173[(16)]);
var inst_31144 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31126);
var state_31173__$1 = state_31173;
var statearr_31247_31313 = state_31173__$1;
(statearr_31247_31313[(2)] = inst_31144);

(statearr_31247_31313[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31174 === (30))){
var state_31173__$1 = state_31173;
var statearr_31248_31314 = state_31173__$1;
(statearr_31248_31314[(2)] = null);

(statearr_31248_31314[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31174 === (10))){
var inst_31046 = (state_31173[(22)]);
var inst_31048 = cljs.core.chunked_seq_QMARK_.call(null,inst_31046);
var state_31173__$1 = state_31173;
if(inst_31048){
var statearr_31249_31315 = state_31173__$1;
(statearr_31249_31315[(1)] = (13));

} else {
var statearr_31250_31316 = state_31173__$1;
(statearr_31250_31316[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31174 === (18))){
var inst_31080 = (state_31173[(2)]);
var state_31173__$1 = state_31173;
if(cljs.core.truth_(inst_31080)){
var statearr_31251_31317 = state_31173__$1;
(statearr_31251_31317[(1)] = (19));

} else {
var statearr_31252_31318 = state_31173__$1;
(statearr_31252_31318[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31174 === (42))){
var state_31173__$1 = state_31173;
var statearr_31253_31319 = state_31173__$1;
(statearr_31253_31319[(2)] = null);

(statearr_31253_31319[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31174 === (37))){
var inst_31139 = (state_31173[(2)]);
var state_31173__$1 = state_31173;
var statearr_31254_31320 = state_31173__$1;
(statearr_31254_31320[(2)] = inst_31139);

(statearr_31254_31320[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31174 === (8))){
var inst_31033 = (state_31173[(7)]);
var inst_31046 = (state_31173[(22)]);
var inst_31046__$1 = cljs.core.seq.call(null,inst_31033);
var state_31173__$1 = (function (){var statearr_31255 = state_31173;
(statearr_31255[(22)] = inst_31046__$1);

return statearr_31255;
})();
if(inst_31046__$1){
var statearr_31256_31321 = state_31173__$1;
(statearr_31256_31321[(1)] = (10));

} else {
var statearr_31257_31322 = state_31173__$1;
(statearr_31257_31322[(1)] = (11));

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
});})(c__27356__auto__,map__31018,map__31018__$1,opts,before_jsload,on_jsload,reload_dependents,map__31019,map__31019__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__27244__auto__,c__27356__auto__,map__31018,map__31018__$1,opts,before_jsload,on_jsload,reload_dependents,map__31019,map__31019__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27245__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27245__auto____0 = (function (){
var statearr_31261 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31261[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__27245__auto__);

(statearr_31261[(1)] = (1));

return statearr_31261;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27245__auto____1 = (function (state_31173){
while(true){
var ret_value__27246__auto__ = (function (){try{while(true){
var result__27247__auto__ = switch__27244__auto__.call(null,state_31173);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27247__auto__;
}
break;
}
}catch (e31262){if((e31262 instanceof Object)){
var ex__27248__auto__ = e31262;
var statearr_31263_31323 = state_31173;
(statearr_31263_31323[(5)] = ex__27248__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31173);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31262;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31324 = state_31173;
state_31173 = G__31324;
continue;
} else {
return ret_value__27246__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__27245__auto__ = function(state_31173){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27245__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27245__auto____1.call(this,state_31173);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__27245__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27245__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__27245__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27245__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27245__auto__;
})()
;})(switch__27244__auto__,c__27356__auto__,map__31018,map__31018__$1,opts,before_jsload,on_jsload,reload_dependents,map__31019,map__31019__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__27358__auto__ = (function (){var statearr_31264 = f__27357__auto__.call(null);
(statearr_31264[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27356__auto__);

return statearr_31264;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27358__auto__);
});})(c__27356__auto__,map__31018,map__31018__$1,opts,before_jsload,on_jsload,reload_dependents,map__31019,map__31019__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__27356__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),cljs.core.str.cljs$core$IFn$_invoke$arity$1("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__31327,link){
var map__31330 = p__31327;
var map__31330__$1 = ((((!((map__31330 == null)))?((((map__31330.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31330.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31330):map__31330);
var file = cljs.core.get.call(null,map__31330__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__31330,map__31330__$1,file){
return (function (p1__31325_SHARP_,p2__31326_SHARP_){
if(cljs.core._EQ_.call(null,p1__31325_SHARP_,p2__31326_SHARP_)){
return p1__31325_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__31330,map__31330__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__31336){
var map__31337 = p__31336;
var map__31337__$1 = ((((!((map__31337 == null)))?((((map__31337.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31337.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31337):map__31337);
var match_length = cljs.core.get.call(null,map__31337__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__31337__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__31332_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__31332_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args31339 = [];
var len__26259__auto___31342 = arguments.length;
var i__26260__auto___31343 = (0);
while(true){
if((i__26260__auto___31343 < len__26259__auto___31342)){
args31339.push((arguments[i__26260__auto___31343]));

var G__31344 = (i__26260__auto___31343 + (1));
i__26260__auto___31343 = G__31344;
continue;
} else {
}
break;
}

var G__31341 = args31339.length;
switch (G__31341) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args31339.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__31346_SHARP_,p2__31347_SHARP_){
return cljs.core.assoc.call(null,p1__31346_SHARP_,cljs.core.get.call(null,p2__31347_SHARP_,key),p2__31347_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__31348){
var map__31351 = p__31348;
var map__31351__$1 = ((((!((map__31351 == null)))?((((map__31351.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31351.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31351):map__31351);
var f_data = map__31351__$1;
var file = cljs.core.get.call(null,map__31351__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__31353,p__31354){
var map__31363 = p__31353;
var map__31363__$1 = ((((!((map__31363 == null)))?((((map__31363.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31363.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31363):map__31363);
var opts = map__31363__$1;
var on_cssload = cljs.core.get.call(null,map__31363__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__31364 = p__31354;
var map__31364__$1 = ((((!((map__31364 == null)))?((((map__31364.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31364.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31364):map__31364);
var files_msg = map__31364__$1;
var files = cljs.core.get.call(null,map__31364__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__31367_31371 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__31368_31372 = null;
var count__31369_31373 = (0);
var i__31370_31374 = (0);
while(true){
if((i__31370_31374 < count__31369_31373)){
var f_31375 = cljs.core._nth.call(null,chunk__31368_31372,i__31370_31374);
figwheel.client.file_reloading.reload_css_file.call(null,f_31375);

var G__31376 = seq__31367_31371;
var G__31377 = chunk__31368_31372;
var G__31378 = count__31369_31373;
var G__31379 = (i__31370_31374 + (1));
seq__31367_31371 = G__31376;
chunk__31368_31372 = G__31377;
count__31369_31373 = G__31378;
i__31370_31374 = G__31379;
continue;
} else {
var temp__4657__auto___31380 = cljs.core.seq.call(null,seq__31367_31371);
if(temp__4657__auto___31380){
var seq__31367_31381__$1 = temp__4657__auto___31380;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31367_31381__$1)){
var c__25965__auto___31382 = cljs.core.chunk_first.call(null,seq__31367_31381__$1);
var G__31383 = cljs.core.chunk_rest.call(null,seq__31367_31381__$1);
var G__31384 = c__25965__auto___31382;
var G__31385 = cljs.core.count.call(null,c__25965__auto___31382);
var G__31386 = (0);
seq__31367_31371 = G__31383;
chunk__31368_31372 = G__31384;
count__31369_31373 = G__31385;
i__31370_31374 = G__31386;
continue;
} else {
var f_31387 = cljs.core.first.call(null,seq__31367_31381__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_31387);

var G__31388 = cljs.core.next.call(null,seq__31367_31381__$1);
var G__31389 = null;
var G__31390 = (0);
var G__31391 = (0);
seq__31367_31371 = G__31388;
chunk__31368_31372 = G__31389;
count__31369_31373 = G__31390;
i__31370_31374 = G__31391;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__31363,map__31363__$1,opts,on_cssload,map__31364,map__31364__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__31363,map__31363__$1,opts,on_cssload,map__31364,map__31364__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1490330691105