// Compiled by ClojureScript 1.9.494 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__25757__auto__,writer__25758__auto__,opt__25759__auto__){
return cljs.core._write.call(null,writer__25758__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__26266__auto__ = [];
var len__26259__auto___31445 = arguments.length;
var i__26260__auto___31446 = (0);
while(true){
if((i__26260__auto___31446 < len__26259__auto___31445)){
args__26266__auto__.push((arguments[i__26260__auto___31446]));

var G__31447 = (i__26260__auto___31446 + (1));
i__26260__auto___31446 = G__31447;
continue;
} else {
}
break;
}

var argseq__26267__auto__ = ((((0) < args__26266__auto__.length))?(new cljs.core.IndexedSeq(args__26266__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__26267__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq31444){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31444));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__26266__auto__ = [];
var len__26259__auto___31449 = arguments.length;
var i__26260__auto___31450 = (0);
while(true){
if((i__26260__auto___31450 < len__26259__auto___31449)){
args__26266__auto__.push((arguments[i__26260__auto___31450]));

var G__31451 = (i__26260__auto___31450 + (1));
i__26260__auto___31450 = G__31451;
continue;
} else {
}
break;
}

var argseq__26267__auto__ = ((((0) < args__26266__auto__.length))?(new cljs.core.IndexedSeq(args__26266__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__26267__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq31448){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31448));
});

var g_QMARK__31452 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
var g_31453 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__31452){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__31452))
,null));
var mkg_31454 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__31452,g_31453){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__31452,g_31453))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__31452,g_31453,mkg_31454){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__31452).call(null,x);
});})(g_QMARK__31452,g_31453,mkg_31454))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__31452,g_31453,mkg_31454){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_31454).call(null,gfn);
});})(g_QMARK__31452,g_31453,mkg_31454))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__31452,g_31453,mkg_31454){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_31453).call(null,generator);
});})(g_QMARK__31452,g_31453,mkg_31454))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__31416__auto___31474 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__31416__auto___31474){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__26266__auto__ = [];
var len__26259__auto___31475 = arguments.length;
var i__26260__auto___31476 = (0);
while(true){
if((i__26260__auto___31476 < len__26259__auto___31475)){
args__26266__auto__.push((arguments[i__26260__auto___31476]));

var G__31477 = (i__26260__auto___31476 + (1));
i__26260__auto___31476 = G__31477;
continue;
} else {
}
break;
}

var argseq__26267__auto__ = ((((0) < args__26266__auto__.length))?(new cljs.core.IndexedSeq(args__26266__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__26267__auto__);
});})(g__31416__auto___31474))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31416__auto___31474){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31416__auto___31474),args);
});})(g__31416__auto___31474))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__31416__auto___31474){
return (function (seq31455){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31455));
});})(g__31416__auto___31474))
;


var g__31416__auto___31478 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__31416__auto___31478){
return (function cljs$spec$impl$gen$list(var_args){
var args__26266__auto__ = [];
var len__26259__auto___31479 = arguments.length;
var i__26260__auto___31480 = (0);
while(true){
if((i__26260__auto___31480 < len__26259__auto___31479)){
args__26266__auto__.push((arguments[i__26260__auto___31480]));

var G__31481 = (i__26260__auto___31480 + (1));
i__26260__auto___31480 = G__31481;
continue;
} else {
}
break;
}

var argseq__26267__auto__ = ((((0) < args__26266__auto__.length))?(new cljs.core.IndexedSeq(args__26266__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__26267__auto__);
});})(g__31416__auto___31478))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31416__auto___31478){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31416__auto___31478),args);
});})(g__31416__auto___31478))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__31416__auto___31478){
return (function (seq31456){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31456));
});})(g__31416__auto___31478))
;


var g__31416__auto___31482 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__31416__auto___31482){
return (function cljs$spec$impl$gen$map(var_args){
var args__26266__auto__ = [];
var len__26259__auto___31483 = arguments.length;
var i__26260__auto___31484 = (0);
while(true){
if((i__26260__auto___31484 < len__26259__auto___31483)){
args__26266__auto__.push((arguments[i__26260__auto___31484]));

var G__31485 = (i__26260__auto___31484 + (1));
i__26260__auto___31484 = G__31485;
continue;
} else {
}
break;
}

var argseq__26267__auto__ = ((((0) < args__26266__auto__.length))?(new cljs.core.IndexedSeq(args__26266__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__26267__auto__);
});})(g__31416__auto___31482))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31416__auto___31482){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31416__auto___31482),args);
});})(g__31416__auto___31482))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__31416__auto___31482){
return (function (seq31457){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31457));
});})(g__31416__auto___31482))
;


var g__31416__auto___31486 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__31416__auto___31486){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__26266__auto__ = [];
var len__26259__auto___31487 = arguments.length;
var i__26260__auto___31488 = (0);
while(true){
if((i__26260__auto___31488 < len__26259__auto___31487)){
args__26266__auto__.push((arguments[i__26260__auto___31488]));

var G__31489 = (i__26260__auto___31488 + (1));
i__26260__auto___31488 = G__31489;
continue;
} else {
}
break;
}

var argseq__26267__auto__ = ((((0) < args__26266__auto__.length))?(new cljs.core.IndexedSeq(args__26266__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__26267__auto__);
});})(g__31416__auto___31486))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31416__auto___31486){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31416__auto___31486),args);
});})(g__31416__auto___31486))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__31416__auto___31486){
return (function (seq31458){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31458));
});})(g__31416__auto___31486))
;


var g__31416__auto___31490 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__31416__auto___31490){
return (function cljs$spec$impl$gen$set(var_args){
var args__26266__auto__ = [];
var len__26259__auto___31491 = arguments.length;
var i__26260__auto___31492 = (0);
while(true){
if((i__26260__auto___31492 < len__26259__auto___31491)){
args__26266__auto__.push((arguments[i__26260__auto___31492]));

var G__31493 = (i__26260__auto___31492 + (1));
i__26260__auto___31492 = G__31493;
continue;
} else {
}
break;
}

var argseq__26267__auto__ = ((((0) < args__26266__auto__.length))?(new cljs.core.IndexedSeq(args__26266__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__26267__auto__);
});})(g__31416__auto___31490))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31416__auto___31490){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31416__auto___31490),args);
});})(g__31416__auto___31490))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__31416__auto___31490){
return (function (seq31459){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31459));
});})(g__31416__auto___31490))
;


var g__31416__auto___31494 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__31416__auto___31494){
return (function cljs$spec$impl$gen$vector(var_args){
var args__26266__auto__ = [];
var len__26259__auto___31495 = arguments.length;
var i__26260__auto___31496 = (0);
while(true){
if((i__26260__auto___31496 < len__26259__auto___31495)){
args__26266__auto__.push((arguments[i__26260__auto___31496]));

var G__31497 = (i__26260__auto___31496 + (1));
i__26260__auto___31496 = G__31497;
continue;
} else {
}
break;
}

var argseq__26267__auto__ = ((((0) < args__26266__auto__.length))?(new cljs.core.IndexedSeq(args__26266__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__26267__auto__);
});})(g__31416__auto___31494))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31416__auto___31494){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31416__auto___31494),args);
});})(g__31416__auto___31494))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__31416__auto___31494){
return (function (seq31460){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31460));
});})(g__31416__auto___31494))
;


var g__31416__auto___31498 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__31416__auto___31498){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__26266__auto__ = [];
var len__26259__auto___31499 = arguments.length;
var i__26260__auto___31500 = (0);
while(true){
if((i__26260__auto___31500 < len__26259__auto___31499)){
args__26266__auto__.push((arguments[i__26260__auto___31500]));

var G__31501 = (i__26260__auto___31500 + (1));
i__26260__auto___31500 = G__31501;
continue;
} else {
}
break;
}

var argseq__26267__auto__ = ((((0) < args__26266__auto__.length))?(new cljs.core.IndexedSeq(args__26266__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__26267__auto__);
});})(g__31416__auto___31498))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31416__auto___31498){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31416__auto___31498),args);
});})(g__31416__auto___31498))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__31416__auto___31498){
return (function (seq31461){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31461));
});})(g__31416__auto___31498))
;


var g__31416__auto___31502 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__31416__auto___31502){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__26266__auto__ = [];
var len__26259__auto___31503 = arguments.length;
var i__26260__auto___31504 = (0);
while(true){
if((i__26260__auto___31504 < len__26259__auto___31503)){
args__26266__auto__.push((arguments[i__26260__auto___31504]));

var G__31505 = (i__26260__auto___31504 + (1));
i__26260__auto___31504 = G__31505;
continue;
} else {
}
break;
}

var argseq__26267__auto__ = ((((0) < args__26266__auto__.length))?(new cljs.core.IndexedSeq(args__26266__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__26267__auto__);
});})(g__31416__auto___31502))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31416__auto___31502){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31416__auto___31502),args);
});})(g__31416__auto___31502))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__31416__auto___31502){
return (function (seq31462){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31462));
});})(g__31416__auto___31502))
;


var g__31416__auto___31506 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__31416__auto___31506){
return (function cljs$spec$impl$gen$elements(var_args){
var args__26266__auto__ = [];
var len__26259__auto___31507 = arguments.length;
var i__26260__auto___31508 = (0);
while(true){
if((i__26260__auto___31508 < len__26259__auto___31507)){
args__26266__auto__.push((arguments[i__26260__auto___31508]));

var G__31509 = (i__26260__auto___31508 + (1));
i__26260__auto___31508 = G__31509;
continue;
} else {
}
break;
}

var argseq__26267__auto__ = ((((0) < args__26266__auto__.length))?(new cljs.core.IndexedSeq(args__26266__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__26267__auto__);
});})(g__31416__auto___31506))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31416__auto___31506){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31416__auto___31506),args);
});})(g__31416__auto___31506))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__31416__auto___31506){
return (function (seq31463){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31463));
});})(g__31416__auto___31506))
;


var g__31416__auto___31510 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__31416__auto___31510){
return (function cljs$spec$impl$gen$bind(var_args){
var args__26266__auto__ = [];
var len__26259__auto___31511 = arguments.length;
var i__26260__auto___31512 = (0);
while(true){
if((i__26260__auto___31512 < len__26259__auto___31511)){
args__26266__auto__.push((arguments[i__26260__auto___31512]));

var G__31513 = (i__26260__auto___31512 + (1));
i__26260__auto___31512 = G__31513;
continue;
} else {
}
break;
}

var argseq__26267__auto__ = ((((0) < args__26266__auto__.length))?(new cljs.core.IndexedSeq(args__26266__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__26267__auto__);
});})(g__31416__auto___31510))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31416__auto___31510){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31416__auto___31510),args);
});})(g__31416__auto___31510))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__31416__auto___31510){
return (function (seq31464){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31464));
});})(g__31416__auto___31510))
;


var g__31416__auto___31514 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__31416__auto___31514){
return (function cljs$spec$impl$gen$choose(var_args){
var args__26266__auto__ = [];
var len__26259__auto___31515 = arguments.length;
var i__26260__auto___31516 = (0);
while(true){
if((i__26260__auto___31516 < len__26259__auto___31515)){
args__26266__auto__.push((arguments[i__26260__auto___31516]));

var G__31517 = (i__26260__auto___31516 + (1));
i__26260__auto___31516 = G__31517;
continue;
} else {
}
break;
}

var argseq__26267__auto__ = ((((0) < args__26266__auto__.length))?(new cljs.core.IndexedSeq(args__26266__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__26267__auto__);
});})(g__31416__auto___31514))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31416__auto___31514){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31416__auto___31514),args);
});})(g__31416__auto___31514))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__31416__auto___31514){
return (function (seq31465){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31465));
});})(g__31416__auto___31514))
;


var g__31416__auto___31518 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__31416__auto___31518){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__26266__auto__ = [];
var len__26259__auto___31519 = arguments.length;
var i__26260__auto___31520 = (0);
while(true){
if((i__26260__auto___31520 < len__26259__auto___31519)){
args__26266__auto__.push((arguments[i__26260__auto___31520]));

var G__31521 = (i__26260__auto___31520 + (1));
i__26260__auto___31520 = G__31521;
continue;
} else {
}
break;
}

var argseq__26267__auto__ = ((((0) < args__26266__auto__.length))?(new cljs.core.IndexedSeq(args__26266__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__26267__auto__);
});})(g__31416__auto___31518))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31416__auto___31518){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31416__auto___31518),args);
});})(g__31416__auto___31518))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__31416__auto___31518){
return (function (seq31466){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31466));
});})(g__31416__auto___31518))
;


var g__31416__auto___31522 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__31416__auto___31522){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__26266__auto__ = [];
var len__26259__auto___31523 = arguments.length;
var i__26260__auto___31524 = (0);
while(true){
if((i__26260__auto___31524 < len__26259__auto___31523)){
args__26266__auto__.push((arguments[i__26260__auto___31524]));

var G__31525 = (i__26260__auto___31524 + (1));
i__26260__auto___31524 = G__31525;
continue;
} else {
}
break;
}

var argseq__26267__auto__ = ((((0) < args__26266__auto__.length))?(new cljs.core.IndexedSeq(args__26266__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__26267__auto__);
});})(g__31416__auto___31522))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31416__auto___31522){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31416__auto___31522),args);
});})(g__31416__auto___31522))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__31416__auto___31522){
return (function (seq31467){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31467));
});})(g__31416__auto___31522))
;


var g__31416__auto___31526 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__31416__auto___31526){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__26266__auto__ = [];
var len__26259__auto___31527 = arguments.length;
var i__26260__auto___31528 = (0);
while(true){
if((i__26260__auto___31528 < len__26259__auto___31527)){
args__26266__auto__.push((arguments[i__26260__auto___31528]));

var G__31529 = (i__26260__auto___31528 + (1));
i__26260__auto___31528 = G__31529;
continue;
} else {
}
break;
}

var argseq__26267__auto__ = ((((0) < args__26266__auto__.length))?(new cljs.core.IndexedSeq(args__26266__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__26267__auto__);
});})(g__31416__auto___31526))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31416__auto___31526){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31416__auto___31526),args);
});})(g__31416__auto___31526))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__31416__auto___31526){
return (function (seq31468){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31468));
});})(g__31416__auto___31526))
;


var g__31416__auto___31530 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__31416__auto___31530){
return (function cljs$spec$impl$gen$sample(var_args){
var args__26266__auto__ = [];
var len__26259__auto___31531 = arguments.length;
var i__26260__auto___31532 = (0);
while(true){
if((i__26260__auto___31532 < len__26259__auto___31531)){
args__26266__auto__.push((arguments[i__26260__auto___31532]));

var G__31533 = (i__26260__auto___31532 + (1));
i__26260__auto___31532 = G__31533;
continue;
} else {
}
break;
}

var argseq__26267__auto__ = ((((0) < args__26266__auto__.length))?(new cljs.core.IndexedSeq(args__26266__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__26267__auto__);
});})(g__31416__auto___31530))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31416__auto___31530){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31416__auto___31530),args);
});})(g__31416__auto___31530))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__31416__auto___31530){
return (function (seq31469){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31469));
});})(g__31416__auto___31530))
;


var g__31416__auto___31534 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__31416__auto___31534){
return (function cljs$spec$impl$gen$return(var_args){
var args__26266__auto__ = [];
var len__26259__auto___31535 = arguments.length;
var i__26260__auto___31536 = (0);
while(true){
if((i__26260__auto___31536 < len__26259__auto___31535)){
args__26266__auto__.push((arguments[i__26260__auto___31536]));

var G__31537 = (i__26260__auto___31536 + (1));
i__26260__auto___31536 = G__31537;
continue;
} else {
}
break;
}

var argseq__26267__auto__ = ((((0) < args__26266__auto__.length))?(new cljs.core.IndexedSeq(args__26266__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__26267__auto__);
});})(g__31416__auto___31534))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31416__auto___31534){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31416__auto___31534),args);
});})(g__31416__auto___31534))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__31416__auto___31534){
return (function (seq31470){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31470));
});})(g__31416__auto___31534))
;


var g__31416__auto___31538 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__31416__auto___31538){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__26266__auto__ = [];
var len__26259__auto___31539 = arguments.length;
var i__26260__auto___31540 = (0);
while(true){
if((i__26260__auto___31540 < len__26259__auto___31539)){
args__26266__auto__.push((arguments[i__26260__auto___31540]));

var G__31541 = (i__26260__auto___31540 + (1));
i__26260__auto___31540 = G__31541;
continue;
} else {
}
break;
}

var argseq__26267__auto__ = ((((0) < args__26266__auto__.length))?(new cljs.core.IndexedSeq(args__26266__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__26267__auto__);
});})(g__31416__auto___31538))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31416__auto___31538){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31416__auto___31538),args);
});})(g__31416__auto___31538))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__31416__auto___31538){
return (function (seq31471){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31471));
});})(g__31416__auto___31538))
;


var g__31416__auto___31542 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__31416__auto___31542){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__26266__auto__ = [];
var len__26259__auto___31543 = arguments.length;
var i__26260__auto___31544 = (0);
while(true){
if((i__26260__auto___31544 < len__26259__auto___31543)){
args__26266__auto__.push((arguments[i__26260__auto___31544]));

var G__31545 = (i__26260__auto___31544 + (1));
i__26260__auto___31544 = G__31545;
continue;
} else {
}
break;
}

var argseq__26267__auto__ = ((((0) < args__26266__auto__.length))?(new cljs.core.IndexedSeq(args__26266__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__26267__auto__);
});})(g__31416__auto___31542))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31416__auto___31542){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31416__auto___31542),args);
});})(g__31416__auto___31542))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__31416__auto___31542){
return (function (seq31472){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31472));
});})(g__31416__auto___31542))
;


var g__31416__auto___31546 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.impl.gen.frequency = ((function (g__31416__auto___31546){
return (function cljs$spec$impl$gen$frequency(var_args){
var args__26266__auto__ = [];
var len__26259__auto___31547 = arguments.length;
var i__26260__auto___31548 = (0);
while(true){
if((i__26260__auto___31548 < len__26259__auto___31547)){
args__26266__auto__.push((arguments[i__26260__auto___31548]));

var G__31549 = (i__26260__auto___31548 + (1));
i__26260__auto___31548 = G__31549;
continue;
} else {
}
break;
}

var argseq__26267__auto__ = ((((0) < args__26266__auto__.length))?(new cljs.core.IndexedSeq(args__26266__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__26267__auto__);
});})(g__31416__auto___31546))
;

cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31416__auto___31546){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31416__auto___31546),args);
});})(g__31416__auto___31546))
;

cljs.spec.impl.gen.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.frequency.cljs$lang$applyTo = ((function (g__31416__auto___31546){
return (function (seq31473){
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31473));
});})(g__31416__auto___31546))
;

var g__31429__auto___31571 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__31429__auto___31571){
return (function cljs$spec$impl$gen$any(var_args){
var args__26266__auto__ = [];
var len__26259__auto___31572 = arguments.length;
var i__26260__auto___31573 = (0);
while(true){
if((i__26260__auto___31573 < len__26259__auto___31572)){
args__26266__auto__.push((arguments[i__26260__auto___31573]));

var G__31574 = (i__26260__auto___31573 + (1));
i__26260__auto___31573 = G__31574;
continue;
} else {
}
break;
}

var argseq__26267__auto__ = ((((0) < args__26266__auto__.length))?(new cljs.core.IndexedSeq(args__26266__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__26267__auto__);
});})(g__31429__auto___31571))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31429__auto___31571){
return (function (args){
return cljs.core.deref.call(null,g__31429__auto___31571);
});})(g__31429__auto___31571))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__31429__auto___31571){
return (function (seq31550){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31550));
});})(g__31429__auto___31571))
;


var g__31429__auto___31575 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__31429__auto___31575){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__26266__auto__ = [];
var len__26259__auto___31576 = arguments.length;
var i__26260__auto___31577 = (0);
while(true){
if((i__26260__auto___31577 < len__26259__auto___31576)){
args__26266__auto__.push((arguments[i__26260__auto___31577]));

var G__31578 = (i__26260__auto___31577 + (1));
i__26260__auto___31577 = G__31578;
continue;
} else {
}
break;
}

var argseq__26267__auto__ = ((((0) < args__26266__auto__.length))?(new cljs.core.IndexedSeq(args__26266__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__26267__auto__);
});})(g__31429__auto___31575))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31429__auto___31575){
return (function (args){
return cljs.core.deref.call(null,g__31429__auto___31575);
});})(g__31429__auto___31575))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__31429__auto___31575){
return (function (seq31551){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31551));
});})(g__31429__auto___31575))
;


var g__31429__auto___31579 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__31429__auto___31579){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__26266__auto__ = [];
var len__26259__auto___31580 = arguments.length;
var i__26260__auto___31581 = (0);
while(true){
if((i__26260__auto___31581 < len__26259__auto___31580)){
args__26266__auto__.push((arguments[i__26260__auto___31581]));

var G__31582 = (i__26260__auto___31581 + (1));
i__26260__auto___31581 = G__31582;
continue;
} else {
}
break;
}

var argseq__26267__auto__ = ((((0) < args__26266__auto__.length))?(new cljs.core.IndexedSeq(args__26266__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__26267__auto__);
});})(g__31429__auto___31579))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31429__auto___31579){
return (function (args){
return cljs.core.deref.call(null,g__31429__auto___31579);
});})(g__31429__auto___31579))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__31429__auto___31579){
return (function (seq31552){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31552));
});})(g__31429__auto___31579))
;


var g__31429__auto___31583 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__31429__auto___31583){
return (function cljs$spec$impl$gen$char(var_args){
var args__26266__auto__ = [];
var len__26259__auto___31584 = arguments.length;
var i__26260__auto___31585 = (0);
while(true){
if((i__26260__auto___31585 < len__26259__auto___31584)){
args__26266__auto__.push((arguments[i__26260__auto___31585]));

var G__31586 = (i__26260__auto___31585 + (1));
i__26260__auto___31585 = G__31586;
continue;
} else {
}
break;
}

var argseq__26267__auto__ = ((((0) < args__26266__auto__.length))?(new cljs.core.IndexedSeq(args__26266__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__26267__auto__);
});})(g__31429__auto___31583))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31429__auto___31583){
return (function (args){
return cljs.core.deref.call(null,g__31429__auto___31583);
});})(g__31429__auto___31583))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__31429__auto___31583){
return (function (seq31553){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31553));
});})(g__31429__auto___31583))
;


var g__31429__auto___31587 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__31429__auto___31587){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__26266__auto__ = [];
var len__26259__auto___31588 = arguments.length;
var i__26260__auto___31589 = (0);
while(true){
if((i__26260__auto___31589 < len__26259__auto___31588)){
args__26266__auto__.push((arguments[i__26260__auto___31589]));

var G__31590 = (i__26260__auto___31589 + (1));
i__26260__auto___31589 = G__31590;
continue;
} else {
}
break;
}

var argseq__26267__auto__ = ((((0) < args__26266__auto__.length))?(new cljs.core.IndexedSeq(args__26266__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__26267__auto__);
});})(g__31429__auto___31587))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31429__auto___31587){
return (function (args){
return cljs.core.deref.call(null,g__31429__auto___31587);
});})(g__31429__auto___31587))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__31429__auto___31587){
return (function (seq31554){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31554));
});})(g__31429__auto___31587))
;


var g__31429__auto___31591 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__31429__auto___31591){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__26266__auto__ = [];
var len__26259__auto___31592 = arguments.length;
var i__26260__auto___31593 = (0);
while(true){
if((i__26260__auto___31593 < len__26259__auto___31592)){
args__26266__auto__.push((arguments[i__26260__auto___31593]));

var G__31594 = (i__26260__auto___31593 + (1));
i__26260__auto___31593 = G__31594;
continue;
} else {
}
break;
}

var argseq__26267__auto__ = ((((0) < args__26266__auto__.length))?(new cljs.core.IndexedSeq(args__26266__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__26267__auto__);
});})(g__31429__auto___31591))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31429__auto___31591){
return (function (args){
return cljs.core.deref.call(null,g__31429__auto___31591);
});})(g__31429__auto___31591))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__31429__auto___31591){
return (function (seq31555){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31555));
});})(g__31429__auto___31591))
;


var g__31429__auto___31595 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__31429__auto___31595){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__26266__auto__ = [];
var len__26259__auto___31596 = arguments.length;
var i__26260__auto___31597 = (0);
while(true){
if((i__26260__auto___31597 < len__26259__auto___31596)){
args__26266__auto__.push((arguments[i__26260__auto___31597]));

var G__31598 = (i__26260__auto___31597 + (1));
i__26260__auto___31597 = G__31598;
continue;
} else {
}
break;
}

var argseq__26267__auto__ = ((((0) < args__26266__auto__.length))?(new cljs.core.IndexedSeq(args__26266__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__26267__auto__);
});})(g__31429__auto___31595))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31429__auto___31595){
return (function (args){
return cljs.core.deref.call(null,g__31429__auto___31595);
});})(g__31429__auto___31595))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__31429__auto___31595){
return (function (seq31556){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31556));
});})(g__31429__auto___31595))
;


var g__31429__auto___31599 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__31429__auto___31599){
return (function cljs$spec$impl$gen$double(var_args){
var args__26266__auto__ = [];
var len__26259__auto___31600 = arguments.length;
var i__26260__auto___31601 = (0);
while(true){
if((i__26260__auto___31601 < len__26259__auto___31600)){
args__26266__auto__.push((arguments[i__26260__auto___31601]));

var G__31602 = (i__26260__auto___31601 + (1));
i__26260__auto___31601 = G__31602;
continue;
} else {
}
break;
}

var argseq__26267__auto__ = ((((0) < args__26266__auto__.length))?(new cljs.core.IndexedSeq(args__26266__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__26267__auto__);
});})(g__31429__auto___31599))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31429__auto___31599){
return (function (args){
return cljs.core.deref.call(null,g__31429__auto___31599);
});})(g__31429__auto___31599))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__31429__auto___31599){
return (function (seq31557){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31557));
});})(g__31429__auto___31599))
;


var g__31429__auto___31603 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__31429__auto___31603){
return (function cljs$spec$impl$gen$int(var_args){
var args__26266__auto__ = [];
var len__26259__auto___31604 = arguments.length;
var i__26260__auto___31605 = (0);
while(true){
if((i__26260__auto___31605 < len__26259__auto___31604)){
args__26266__auto__.push((arguments[i__26260__auto___31605]));

var G__31606 = (i__26260__auto___31605 + (1));
i__26260__auto___31605 = G__31606;
continue;
} else {
}
break;
}

var argseq__26267__auto__ = ((((0) < args__26266__auto__.length))?(new cljs.core.IndexedSeq(args__26266__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__26267__auto__);
});})(g__31429__auto___31603))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31429__auto___31603){
return (function (args){
return cljs.core.deref.call(null,g__31429__auto___31603);
});})(g__31429__auto___31603))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__31429__auto___31603){
return (function (seq31558){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31558));
});})(g__31429__auto___31603))
;


var g__31429__auto___31607 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__31429__auto___31607){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__26266__auto__ = [];
var len__26259__auto___31608 = arguments.length;
var i__26260__auto___31609 = (0);
while(true){
if((i__26260__auto___31609 < len__26259__auto___31608)){
args__26266__auto__.push((arguments[i__26260__auto___31609]));

var G__31610 = (i__26260__auto___31609 + (1));
i__26260__auto___31609 = G__31610;
continue;
} else {
}
break;
}

var argseq__26267__auto__ = ((((0) < args__26266__auto__.length))?(new cljs.core.IndexedSeq(args__26266__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__26267__auto__);
});})(g__31429__auto___31607))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31429__auto___31607){
return (function (args){
return cljs.core.deref.call(null,g__31429__auto___31607);
});})(g__31429__auto___31607))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__31429__auto___31607){
return (function (seq31559){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31559));
});})(g__31429__auto___31607))
;


var g__31429__auto___31611 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__31429__auto___31611){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__26266__auto__ = [];
var len__26259__auto___31612 = arguments.length;
var i__26260__auto___31613 = (0);
while(true){
if((i__26260__auto___31613 < len__26259__auto___31612)){
args__26266__auto__.push((arguments[i__26260__auto___31613]));

var G__31614 = (i__26260__auto___31613 + (1));
i__26260__auto___31613 = G__31614;
continue;
} else {
}
break;
}

var argseq__26267__auto__ = ((((0) < args__26266__auto__.length))?(new cljs.core.IndexedSeq(args__26266__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__26267__auto__);
});})(g__31429__auto___31611))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31429__auto___31611){
return (function (args){
return cljs.core.deref.call(null,g__31429__auto___31611);
});})(g__31429__auto___31611))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__31429__auto___31611){
return (function (seq31560){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31560));
});})(g__31429__auto___31611))
;


var g__31429__auto___31615 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__31429__auto___31615){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__26266__auto__ = [];
var len__26259__auto___31616 = arguments.length;
var i__26260__auto___31617 = (0);
while(true){
if((i__26260__auto___31617 < len__26259__auto___31616)){
args__26266__auto__.push((arguments[i__26260__auto___31617]));

var G__31618 = (i__26260__auto___31617 + (1));
i__26260__auto___31617 = G__31618;
continue;
} else {
}
break;
}

var argseq__26267__auto__ = ((((0) < args__26266__auto__.length))?(new cljs.core.IndexedSeq(args__26266__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__26267__auto__);
});})(g__31429__auto___31615))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31429__auto___31615){
return (function (args){
return cljs.core.deref.call(null,g__31429__auto___31615);
});})(g__31429__auto___31615))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__31429__auto___31615){
return (function (seq31561){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31561));
});})(g__31429__auto___31615))
;


var g__31429__auto___31619 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__31429__auto___31619){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__26266__auto__ = [];
var len__26259__auto___31620 = arguments.length;
var i__26260__auto___31621 = (0);
while(true){
if((i__26260__auto___31621 < len__26259__auto___31620)){
args__26266__auto__.push((arguments[i__26260__auto___31621]));

var G__31622 = (i__26260__auto___31621 + (1));
i__26260__auto___31621 = G__31622;
continue;
} else {
}
break;
}

var argseq__26267__auto__ = ((((0) < args__26266__auto__.length))?(new cljs.core.IndexedSeq(args__26266__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__26267__auto__);
});})(g__31429__auto___31619))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31429__auto___31619){
return (function (args){
return cljs.core.deref.call(null,g__31429__auto___31619);
});})(g__31429__auto___31619))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__31429__auto___31619){
return (function (seq31562){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31562));
});})(g__31429__auto___31619))
;


var g__31429__auto___31623 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__31429__auto___31623){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__26266__auto__ = [];
var len__26259__auto___31624 = arguments.length;
var i__26260__auto___31625 = (0);
while(true){
if((i__26260__auto___31625 < len__26259__auto___31624)){
args__26266__auto__.push((arguments[i__26260__auto___31625]));

var G__31626 = (i__26260__auto___31625 + (1));
i__26260__auto___31625 = G__31626;
continue;
} else {
}
break;
}

var argseq__26267__auto__ = ((((0) < args__26266__auto__.length))?(new cljs.core.IndexedSeq(args__26266__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__26267__auto__);
});})(g__31429__auto___31623))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31429__auto___31623){
return (function (args){
return cljs.core.deref.call(null,g__31429__auto___31623);
});})(g__31429__auto___31623))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__31429__auto___31623){
return (function (seq31563){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31563));
});})(g__31429__auto___31623))
;


var g__31429__auto___31627 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__31429__auto___31627){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__26266__auto__ = [];
var len__26259__auto___31628 = arguments.length;
var i__26260__auto___31629 = (0);
while(true){
if((i__26260__auto___31629 < len__26259__auto___31628)){
args__26266__auto__.push((arguments[i__26260__auto___31629]));

var G__31630 = (i__26260__auto___31629 + (1));
i__26260__auto___31629 = G__31630;
continue;
} else {
}
break;
}

var argseq__26267__auto__ = ((((0) < args__26266__auto__.length))?(new cljs.core.IndexedSeq(args__26266__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__26267__auto__);
});})(g__31429__auto___31627))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31429__auto___31627){
return (function (args){
return cljs.core.deref.call(null,g__31429__auto___31627);
});})(g__31429__auto___31627))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__31429__auto___31627){
return (function (seq31564){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31564));
});})(g__31429__auto___31627))
;


var g__31429__auto___31631 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__31429__auto___31631){
return (function cljs$spec$impl$gen$string(var_args){
var args__26266__auto__ = [];
var len__26259__auto___31632 = arguments.length;
var i__26260__auto___31633 = (0);
while(true){
if((i__26260__auto___31633 < len__26259__auto___31632)){
args__26266__auto__.push((arguments[i__26260__auto___31633]));

var G__31634 = (i__26260__auto___31633 + (1));
i__26260__auto___31633 = G__31634;
continue;
} else {
}
break;
}

var argseq__26267__auto__ = ((((0) < args__26266__auto__.length))?(new cljs.core.IndexedSeq(args__26266__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__26267__auto__);
});})(g__31429__auto___31631))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31429__auto___31631){
return (function (args){
return cljs.core.deref.call(null,g__31429__auto___31631);
});})(g__31429__auto___31631))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__31429__auto___31631){
return (function (seq31565){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31565));
});})(g__31429__auto___31631))
;


var g__31429__auto___31635 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__31429__auto___31635){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__26266__auto__ = [];
var len__26259__auto___31636 = arguments.length;
var i__26260__auto___31637 = (0);
while(true){
if((i__26260__auto___31637 < len__26259__auto___31636)){
args__26266__auto__.push((arguments[i__26260__auto___31637]));

var G__31638 = (i__26260__auto___31637 + (1));
i__26260__auto___31637 = G__31638;
continue;
} else {
}
break;
}

var argseq__26267__auto__ = ((((0) < args__26266__auto__.length))?(new cljs.core.IndexedSeq(args__26266__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__26267__auto__);
});})(g__31429__auto___31635))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31429__auto___31635){
return (function (args){
return cljs.core.deref.call(null,g__31429__auto___31635);
});})(g__31429__auto___31635))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__31429__auto___31635){
return (function (seq31566){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31566));
});})(g__31429__auto___31635))
;


var g__31429__auto___31639 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__31429__auto___31639){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__26266__auto__ = [];
var len__26259__auto___31640 = arguments.length;
var i__26260__auto___31641 = (0);
while(true){
if((i__26260__auto___31641 < len__26259__auto___31640)){
args__26266__auto__.push((arguments[i__26260__auto___31641]));

var G__31642 = (i__26260__auto___31641 + (1));
i__26260__auto___31641 = G__31642;
continue;
} else {
}
break;
}

var argseq__26267__auto__ = ((((0) < args__26266__auto__.length))?(new cljs.core.IndexedSeq(args__26266__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__26267__auto__);
});})(g__31429__auto___31639))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31429__auto___31639){
return (function (args){
return cljs.core.deref.call(null,g__31429__auto___31639);
});})(g__31429__auto___31639))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__31429__auto___31639){
return (function (seq31567){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31567));
});})(g__31429__auto___31639))
;


var g__31429__auto___31643 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__31429__auto___31643){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__26266__auto__ = [];
var len__26259__auto___31644 = arguments.length;
var i__26260__auto___31645 = (0);
while(true){
if((i__26260__auto___31645 < len__26259__auto___31644)){
args__26266__auto__.push((arguments[i__26260__auto___31645]));

var G__31646 = (i__26260__auto___31645 + (1));
i__26260__auto___31645 = G__31646;
continue;
} else {
}
break;
}

var argseq__26267__auto__ = ((((0) < args__26266__auto__.length))?(new cljs.core.IndexedSeq(args__26266__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__26267__auto__);
});})(g__31429__auto___31643))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31429__auto___31643){
return (function (args){
return cljs.core.deref.call(null,g__31429__auto___31643);
});})(g__31429__auto___31643))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__31429__auto___31643){
return (function (seq31568){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31568));
});})(g__31429__auto___31643))
;


var g__31429__auto___31647 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__31429__auto___31647){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__26266__auto__ = [];
var len__26259__auto___31648 = arguments.length;
var i__26260__auto___31649 = (0);
while(true){
if((i__26260__auto___31649 < len__26259__auto___31648)){
args__26266__auto__.push((arguments[i__26260__auto___31649]));

var G__31650 = (i__26260__auto___31649 + (1));
i__26260__auto___31649 = G__31650;
continue;
} else {
}
break;
}

var argseq__26267__auto__ = ((((0) < args__26266__auto__.length))?(new cljs.core.IndexedSeq(args__26266__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__26267__auto__);
});})(g__31429__auto___31647))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31429__auto___31647){
return (function (args){
return cljs.core.deref.call(null,g__31429__auto___31647);
});})(g__31429__auto___31647))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__31429__auto___31647){
return (function (seq31569){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31569));
});})(g__31429__auto___31647))
;


var g__31429__auto___31651 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__31429__auto___31651){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__26266__auto__ = [];
var len__26259__auto___31652 = arguments.length;
var i__26260__auto___31653 = (0);
while(true){
if((i__26260__auto___31653 < len__26259__auto___31652)){
args__26266__auto__.push((arguments[i__26260__auto___31653]));

var G__31654 = (i__26260__auto___31653 + (1));
i__26260__auto___31653 = G__31654;
continue;
} else {
}
break;
}

var argseq__26267__auto__ = ((((0) < args__26266__auto__.length))?(new cljs.core.IndexedSeq(args__26266__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__26267__auto__);
});})(g__31429__auto___31651))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31429__auto___31651){
return (function (args){
return cljs.core.deref.call(null,g__31429__auto___31651);
});})(g__31429__auto___31651))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__31429__auto___31651){
return (function (seq31570){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31570));
});})(g__31429__auto___31651))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__26266__auto__ = [];
var len__26259__auto___31657 = arguments.length;
var i__26260__auto___31658 = (0);
while(true){
if((i__26260__auto___31658 < len__26259__auto___31657)){
args__26266__auto__.push((arguments[i__26260__auto___31658]));

var G__31659 = (i__26260__auto___31658 + (1));
i__26260__auto___31658 = G__31659;
continue;
} else {
}
break;
}

var argseq__26267__auto__ = ((((0) < args__26266__auto__.length))?(new cljs.core.IndexedSeq(args__26266__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__26267__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__31655_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__31655_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq31656){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31656));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__31660_SHARP_){
return (new Date(p1__31660_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map?rel=1490330691468