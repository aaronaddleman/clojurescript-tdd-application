// Compiled by ClojureScript 1.9.494 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args27401 = [];
var len__26259__auto___27407 = arguments.length;
var i__26260__auto___27408 = (0);
while(true){
if((i__26260__auto___27408 < len__26259__auto___27407)){
args27401.push((arguments[i__26260__auto___27408]));

var G__27409 = (i__26260__auto___27408 + (1));
i__26260__auto___27408 = G__27409;
continue;
} else {
}
break;
}

var G__27403 = args27401.length;
switch (G__27403) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args27401.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async27404 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27404 = (function (f,blockable,meta27405){
this.f = f;
this.blockable = blockable;
this.meta27405 = meta27405;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27404.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27406,meta27405__$1){
var self__ = this;
var _27406__$1 = this;
return (new cljs.core.async.t_cljs$core$async27404(self__.f,self__.blockable,meta27405__$1));
});

cljs.core.async.t_cljs$core$async27404.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27406){
var self__ = this;
var _27406__$1 = this;
return self__.meta27405;
});

cljs.core.async.t_cljs$core$async27404.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27404.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27404.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async27404.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async27404.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta27405","meta27405",-478933377,null)], null);
});

cljs.core.async.t_cljs$core$async27404.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27404.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27404";

cljs.core.async.t_cljs$core$async27404.cljs$lang$ctorPrWriter = (function (this__25757__auto__,writer__25758__auto__,opt__25759__auto__){
return cljs.core._write.call(null,writer__25758__auto__,"cljs.core.async/t_cljs$core$async27404");
});

cljs.core.async.__GT_t_cljs$core$async27404 = (function cljs$core$async$__GT_t_cljs$core$async27404(f__$1,blockable__$1,meta27405){
return (new cljs.core.async.t_cljs$core$async27404(f__$1,blockable__$1,meta27405));
});

}

return (new cljs.core.async.t_cljs$core$async27404(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args27413 = [];
var len__26259__auto___27416 = arguments.length;
var i__26260__auto___27417 = (0);
while(true){
if((i__26260__auto___27417 < len__26259__auto___27416)){
args27413.push((arguments[i__26260__auto___27417]));

var G__27418 = (i__26260__auto___27417 + (1));
i__26260__auto___27417 = G__27418;
continue;
} else {
}
break;
}

var G__27415 = args27413.length;
switch (G__27415) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args27413.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buffer must be supplied when transducer is"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args27420 = [];
var len__26259__auto___27423 = arguments.length;
var i__26260__auto___27424 = (0);
while(true){
if((i__26260__auto___27424 < len__26259__auto___27423)){
args27420.push((arguments[i__26260__auto___27424]));

var G__27425 = (i__26260__auto___27424 + (1));
i__26260__auto___27424 = G__27425;
continue;
} else {
}
break;
}

var G__27422 = args27420.length;
switch (G__27422) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args27420.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args27427 = [];
var len__26259__auto___27430 = arguments.length;
var i__26260__auto___27431 = (0);
while(true){
if((i__26260__auto___27431 < len__26259__auto___27430)){
args27427.push((arguments[i__26260__auto___27431]));

var G__27432 = (i__26260__auto___27431 + (1));
i__26260__auto___27431 = G__27432;
continue;
} else {
}
break;
}

var G__27429 = args27427.length;
switch (G__27429) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args27427.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_27434 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27434);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27434,ret){
return (function (){
return fn1.call(null,val_27434);
});})(val_27434,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args27435 = [];
var len__26259__auto___27438 = arguments.length;
var i__26260__auto___27439 = (0);
while(true){
if((i__26260__auto___27439 < len__26259__auto___27438)){
args27435.push((arguments[i__26260__auto___27439]));

var G__27440 = (i__26260__auto___27439 + (1));
i__26260__auto___27439 = G__27440;
continue;
} else {
}
break;
}

var G__27437 = args27435.length;
switch (G__27437) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args27435.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__26069__auto___27442 = n;
var x_27443 = (0);
while(true){
if((x_27443 < n__26069__auto___27442)){
(a[x_27443] = (0));

var G__27444 = (x_27443 + (1));
x_27443 = G__27444;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__27445 = (i + (1));
i = G__27445;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async27449 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27449 = (function (flag,meta27450){
this.flag = flag;
this.meta27450 = meta27450;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27449.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27451,meta27450__$1){
var self__ = this;
var _27451__$1 = this;
return (new cljs.core.async.t_cljs$core$async27449(self__.flag,meta27450__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async27449.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27451){
var self__ = this;
var _27451__$1 = this;
return self__.meta27450;
});})(flag))
;

cljs.core.async.t_cljs$core$async27449.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27449.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async27449.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27449.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27449.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27450","meta27450",790197464,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async27449.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27449.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27449";

cljs.core.async.t_cljs$core$async27449.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25757__auto__,writer__25758__auto__,opt__25759__auto__){
return cljs.core._write.call(null,writer__25758__auto__,"cljs.core.async/t_cljs$core$async27449");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async27449 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27449(flag__$1,meta27450){
return (new cljs.core.async.t_cljs$core$async27449(flag__$1,meta27450));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async27449(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async27455 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27455 = (function (flag,cb,meta27456){
this.flag = flag;
this.cb = cb;
this.meta27456 = meta27456;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27455.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27457,meta27456__$1){
var self__ = this;
var _27457__$1 = this;
return (new cljs.core.async.t_cljs$core$async27455(self__.flag,self__.cb,meta27456__$1));
});

cljs.core.async.t_cljs$core$async27455.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27457){
var self__ = this;
var _27457__$1 = this;
return self__.meta27456;
});

cljs.core.async.t_cljs$core$async27455.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27455.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async27455.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27455.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async27455.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27456","meta27456",-448323657,null)], null);
});

cljs.core.async.t_cljs$core$async27455.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27455.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27455";

cljs.core.async.t_cljs$core$async27455.cljs$lang$ctorPrWriter = (function (this__25757__auto__,writer__25758__auto__,opt__25759__auto__){
return cljs.core._write.call(null,writer__25758__auto__,"cljs.core.async/t_cljs$core$async27455");
});

cljs.core.async.__GT_t_cljs$core$async27455 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27455(flag__$1,cb__$1,meta27456){
return (new cljs.core.async.t_cljs$core$async27455(flag__$1,cb__$1,meta27456));
});

}

return (new cljs.core.async.t_cljs$core$async27455(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27458_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27458_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27459_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27459_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__25146__auto__ = wport;
if(cljs.core.truth_(or__25146__auto__)){
return or__25146__auto__;
} else {
return port;
}
})()], null));
} else {
var G__27460 = (i + (1));
i = G__27460;
continue;
}
} else {
return null;
}
break;
}
})();
var or__25146__auto__ = ret;
if(cljs.core.truth_(or__25146__auto__)){
return or__25146__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__25134__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__25134__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__25134__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__26266__auto__ = [];
var len__26259__auto___27466 = arguments.length;
var i__26260__auto___27467 = (0);
while(true){
if((i__26260__auto___27467 < len__26259__auto___27466)){
args__26266__auto__.push((arguments[i__26260__auto___27467]));

var G__27468 = (i__26260__auto___27467 + (1));
i__26260__auto___27467 = G__27468;
continue;
} else {
}
break;
}

var argseq__26267__auto__ = ((((1) < args__26266__auto__.length))?(new cljs.core.IndexedSeq(args__26266__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26267__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27463){
var map__27464 = p__27463;
var map__27464__$1 = ((((!((map__27464 == null)))?((((map__27464.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27464.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27464):map__27464);
var opts = map__27464__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27461){
var G__27462 = cljs.core.first.call(null,seq27461);
var seq27461__$1 = cljs.core.next.call(null,seq27461);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27462,seq27461__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args27469 = [];
var len__26259__auto___27519 = arguments.length;
var i__26260__auto___27520 = (0);
while(true){
if((i__26260__auto___27520 < len__26259__auto___27519)){
args27469.push((arguments[i__26260__auto___27520]));

var G__27521 = (i__26260__auto___27520 + (1));
i__26260__auto___27520 = G__27521;
continue;
} else {
}
break;
}

var G__27471 = args27469.length;
switch (G__27471) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args27469.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__27356__auto___27523 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27356__auto___27523){
return (function (){
var f__27357__auto__ = (function (){var switch__27244__auto__ = ((function (c__27356__auto___27523){
return (function (state_27495){
var state_val_27496 = (state_27495[(1)]);
if((state_val_27496 === (7))){
var inst_27491 = (state_27495[(2)]);
var state_27495__$1 = state_27495;
var statearr_27497_27524 = state_27495__$1;
(statearr_27497_27524[(2)] = inst_27491);

(statearr_27497_27524[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27496 === (1))){
var state_27495__$1 = state_27495;
var statearr_27498_27525 = state_27495__$1;
(statearr_27498_27525[(2)] = null);

(statearr_27498_27525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27496 === (4))){
var inst_27474 = (state_27495[(7)]);
var inst_27474__$1 = (state_27495[(2)]);
var inst_27475 = (inst_27474__$1 == null);
var state_27495__$1 = (function (){var statearr_27499 = state_27495;
(statearr_27499[(7)] = inst_27474__$1);

return statearr_27499;
})();
if(cljs.core.truth_(inst_27475)){
var statearr_27500_27526 = state_27495__$1;
(statearr_27500_27526[(1)] = (5));

} else {
var statearr_27501_27527 = state_27495__$1;
(statearr_27501_27527[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27496 === (13))){
var state_27495__$1 = state_27495;
var statearr_27502_27528 = state_27495__$1;
(statearr_27502_27528[(2)] = null);

(statearr_27502_27528[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27496 === (6))){
var inst_27474 = (state_27495[(7)]);
var state_27495__$1 = state_27495;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27495__$1,(11),to,inst_27474);
} else {
if((state_val_27496 === (3))){
var inst_27493 = (state_27495[(2)]);
var state_27495__$1 = state_27495;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27495__$1,inst_27493);
} else {
if((state_val_27496 === (12))){
var state_27495__$1 = state_27495;
var statearr_27503_27529 = state_27495__$1;
(statearr_27503_27529[(2)] = null);

(statearr_27503_27529[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27496 === (2))){
var state_27495__$1 = state_27495;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27495__$1,(4),from);
} else {
if((state_val_27496 === (11))){
var inst_27484 = (state_27495[(2)]);
var state_27495__$1 = state_27495;
if(cljs.core.truth_(inst_27484)){
var statearr_27504_27530 = state_27495__$1;
(statearr_27504_27530[(1)] = (12));

} else {
var statearr_27505_27531 = state_27495__$1;
(statearr_27505_27531[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27496 === (9))){
var state_27495__$1 = state_27495;
var statearr_27506_27532 = state_27495__$1;
(statearr_27506_27532[(2)] = null);

(statearr_27506_27532[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27496 === (5))){
var state_27495__$1 = state_27495;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27507_27533 = state_27495__$1;
(statearr_27507_27533[(1)] = (8));

} else {
var statearr_27508_27534 = state_27495__$1;
(statearr_27508_27534[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27496 === (14))){
var inst_27489 = (state_27495[(2)]);
var state_27495__$1 = state_27495;
var statearr_27509_27535 = state_27495__$1;
(statearr_27509_27535[(2)] = inst_27489);

(statearr_27509_27535[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27496 === (10))){
var inst_27481 = (state_27495[(2)]);
var state_27495__$1 = state_27495;
var statearr_27510_27536 = state_27495__$1;
(statearr_27510_27536[(2)] = inst_27481);

(statearr_27510_27536[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27496 === (8))){
var inst_27478 = cljs.core.async.close_BANG_.call(null,to);
var state_27495__$1 = state_27495;
var statearr_27511_27537 = state_27495__$1;
(statearr_27511_27537[(2)] = inst_27478);

(statearr_27511_27537[(1)] = (10));


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
});})(c__27356__auto___27523))
;
return ((function (switch__27244__auto__,c__27356__auto___27523){
return (function() {
var cljs$core$async$state_machine__27245__auto__ = null;
var cljs$core$async$state_machine__27245__auto____0 = (function (){
var statearr_27515 = [null,null,null,null,null,null,null,null];
(statearr_27515[(0)] = cljs$core$async$state_machine__27245__auto__);

(statearr_27515[(1)] = (1));

return statearr_27515;
});
var cljs$core$async$state_machine__27245__auto____1 = (function (state_27495){
while(true){
var ret_value__27246__auto__ = (function (){try{while(true){
var result__27247__auto__ = switch__27244__auto__.call(null,state_27495);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27247__auto__;
}
break;
}
}catch (e27516){if((e27516 instanceof Object)){
var ex__27248__auto__ = e27516;
var statearr_27517_27538 = state_27495;
(statearr_27517_27538[(5)] = ex__27248__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27495);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27516;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27539 = state_27495;
state_27495 = G__27539;
continue;
} else {
return ret_value__27246__auto__;
}
break;
}
});
cljs$core$async$state_machine__27245__auto__ = function(state_27495){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27245__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27245__auto____1.call(this,state_27495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27245__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27245__auto____0;
cljs$core$async$state_machine__27245__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27245__auto____1;
return cljs$core$async$state_machine__27245__auto__;
})()
;})(switch__27244__auto__,c__27356__auto___27523))
})();
var state__27358__auto__ = (function (){var statearr_27518 = f__27357__auto__.call(null);
(statearr_27518[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27356__auto___27523);

return statearr_27518;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27358__auto__);
});})(c__27356__auto___27523))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__27727){
var vec__27728 = p__27727;
var v = cljs.core.nth.call(null,vec__27728,(0),null);
var p = cljs.core.nth.call(null,vec__27728,(1),null);
var job = vec__27728;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__27356__auto___27914 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27356__auto___27914,res,vec__27728,v,p,job,jobs,results){
return (function (){
var f__27357__auto__ = (function (){var switch__27244__auto__ = ((function (c__27356__auto___27914,res,vec__27728,v,p,job,jobs,results){
return (function (state_27735){
var state_val_27736 = (state_27735[(1)]);
if((state_val_27736 === (1))){
var state_27735__$1 = state_27735;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27735__$1,(2),res,v);
} else {
if((state_val_27736 === (2))){
var inst_27732 = (state_27735[(2)]);
var inst_27733 = cljs.core.async.close_BANG_.call(null,res);
var state_27735__$1 = (function (){var statearr_27737 = state_27735;
(statearr_27737[(7)] = inst_27732);

return statearr_27737;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27735__$1,inst_27733);
} else {
return null;
}
}
});})(c__27356__auto___27914,res,vec__27728,v,p,job,jobs,results))
;
return ((function (switch__27244__auto__,c__27356__auto___27914,res,vec__27728,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27245__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27245__auto____0 = (function (){
var statearr_27741 = [null,null,null,null,null,null,null,null];
(statearr_27741[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27245__auto__);

(statearr_27741[(1)] = (1));

return statearr_27741;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27245__auto____1 = (function (state_27735){
while(true){
var ret_value__27246__auto__ = (function (){try{while(true){
var result__27247__auto__ = switch__27244__auto__.call(null,state_27735);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27247__auto__;
}
break;
}
}catch (e27742){if((e27742 instanceof Object)){
var ex__27248__auto__ = e27742;
var statearr_27743_27915 = state_27735;
(statearr_27743_27915[(5)] = ex__27248__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27735);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27742;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27916 = state_27735;
state_27735 = G__27916;
continue;
} else {
return ret_value__27246__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27245__auto__ = function(state_27735){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27245__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27245__auto____1.call(this,state_27735);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27245__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27245__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27245__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27245__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27245__auto__;
})()
;})(switch__27244__auto__,c__27356__auto___27914,res,vec__27728,v,p,job,jobs,results))
})();
var state__27358__auto__ = (function (){var statearr_27744 = f__27357__auto__.call(null);
(statearr_27744[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27356__auto___27914);

return statearr_27744;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27358__auto__);
});})(c__27356__auto___27914,res,vec__27728,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27745){
var vec__27746 = p__27745;
var v = cljs.core.nth.call(null,vec__27746,(0),null);
var p = cljs.core.nth.call(null,vec__27746,(1),null);
var job = vec__27746;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__26069__auto___27917 = n;
var __27918 = (0);
while(true){
if((__27918 < n__26069__auto___27917)){
var G__27749_27919 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__27749_27919) {
case "compute":
var c__27356__auto___27921 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27918,c__27356__auto___27921,G__27749_27919,n__26069__auto___27917,jobs,results,process,async){
return (function (){
var f__27357__auto__ = (function (){var switch__27244__auto__ = ((function (__27918,c__27356__auto___27921,G__27749_27919,n__26069__auto___27917,jobs,results,process,async){
return (function (state_27762){
var state_val_27763 = (state_27762[(1)]);
if((state_val_27763 === (1))){
var state_27762__$1 = state_27762;
var statearr_27764_27922 = state_27762__$1;
(statearr_27764_27922[(2)] = null);

(statearr_27764_27922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27763 === (2))){
var state_27762__$1 = state_27762;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27762__$1,(4),jobs);
} else {
if((state_val_27763 === (3))){
var inst_27760 = (state_27762[(2)]);
var state_27762__$1 = state_27762;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27762__$1,inst_27760);
} else {
if((state_val_27763 === (4))){
var inst_27752 = (state_27762[(2)]);
var inst_27753 = process.call(null,inst_27752);
var state_27762__$1 = state_27762;
if(cljs.core.truth_(inst_27753)){
var statearr_27765_27923 = state_27762__$1;
(statearr_27765_27923[(1)] = (5));

} else {
var statearr_27766_27924 = state_27762__$1;
(statearr_27766_27924[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27763 === (5))){
var state_27762__$1 = state_27762;
var statearr_27767_27925 = state_27762__$1;
(statearr_27767_27925[(2)] = null);

(statearr_27767_27925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27763 === (6))){
var state_27762__$1 = state_27762;
var statearr_27768_27926 = state_27762__$1;
(statearr_27768_27926[(2)] = null);

(statearr_27768_27926[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27763 === (7))){
var inst_27758 = (state_27762[(2)]);
var state_27762__$1 = state_27762;
var statearr_27769_27927 = state_27762__$1;
(statearr_27769_27927[(2)] = inst_27758);

(statearr_27769_27927[(1)] = (3));


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
});})(__27918,c__27356__auto___27921,G__27749_27919,n__26069__auto___27917,jobs,results,process,async))
;
return ((function (__27918,switch__27244__auto__,c__27356__auto___27921,G__27749_27919,n__26069__auto___27917,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27245__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27245__auto____0 = (function (){
var statearr_27773 = [null,null,null,null,null,null,null];
(statearr_27773[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27245__auto__);

(statearr_27773[(1)] = (1));

return statearr_27773;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27245__auto____1 = (function (state_27762){
while(true){
var ret_value__27246__auto__ = (function (){try{while(true){
var result__27247__auto__ = switch__27244__auto__.call(null,state_27762);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27247__auto__;
}
break;
}
}catch (e27774){if((e27774 instanceof Object)){
var ex__27248__auto__ = e27774;
var statearr_27775_27928 = state_27762;
(statearr_27775_27928[(5)] = ex__27248__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27762);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27774;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27929 = state_27762;
state_27762 = G__27929;
continue;
} else {
return ret_value__27246__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27245__auto__ = function(state_27762){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27245__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27245__auto____1.call(this,state_27762);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27245__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27245__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27245__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27245__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27245__auto__;
})()
;})(__27918,switch__27244__auto__,c__27356__auto___27921,G__27749_27919,n__26069__auto___27917,jobs,results,process,async))
})();
var state__27358__auto__ = (function (){var statearr_27776 = f__27357__auto__.call(null);
(statearr_27776[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27356__auto___27921);

return statearr_27776;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27358__auto__);
});})(__27918,c__27356__auto___27921,G__27749_27919,n__26069__auto___27917,jobs,results,process,async))
);


break;
case "async":
var c__27356__auto___27930 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27918,c__27356__auto___27930,G__27749_27919,n__26069__auto___27917,jobs,results,process,async){
return (function (){
var f__27357__auto__ = (function (){var switch__27244__auto__ = ((function (__27918,c__27356__auto___27930,G__27749_27919,n__26069__auto___27917,jobs,results,process,async){
return (function (state_27789){
var state_val_27790 = (state_27789[(1)]);
if((state_val_27790 === (1))){
var state_27789__$1 = state_27789;
var statearr_27791_27931 = state_27789__$1;
(statearr_27791_27931[(2)] = null);

(statearr_27791_27931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27790 === (2))){
var state_27789__$1 = state_27789;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27789__$1,(4),jobs);
} else {
if((state_val_27790 === (3))){
var inst_27787 = (state_27789[(2)]);
var state_27789__$1 = state_27789;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27789__$1,inst_27787);
} else {
if((state_val_27790 === (4))){
var inst_27779 = (state_27789[(2)]);
var inst_27780 = async.call(null,inst_27779);
var state_27789__$1 = state_27789;
if(cljs.core.truth_(inst_27780)){
var statearr_27792_27932 = state_27789__$1;
(statearr_27792_27932[(1)] = (5));

} else {
var statearr_27793_27933 = state_27789__$1;
(statearr_27793_27933[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27790 === (5))){
var state_27789__$1 = state_27789;
var statearr_27794_27934 = state_27789__$1;
(statearr_27794_27934[(2)] = null);

(statearr_27794_27934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27790 === (6))){
var state_27789__$1 = state_27789;
var statearr_27795_27935 = state_27789__$1;
(statearr_27795_27935[(2)] = null);

(statearr_27795_27935[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27790 === (7))){
var inst_27785 = (state_27789[(2)]);
var state_27789__$1 = state_27789;
var statearr_27796_27936 = state_27789__$1;
(statearr_27796_27936[(2)] = inst_27785);

(statearr_27796_27936[(1)] = (3));


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
});})(__27918,c__27356__auto___27930,G__27749_27919,n__26069__auto___27917,jobs,results,process,async))
;
return ((function (__27918,switch__27244__auto__,c__27356__auto___27930,G__27749_27919,n__26069__auto___27917,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27245__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27245__auto____0 = (function (){
var statearr_27800 = [null,null,null,null,null,null,null];
(statearr_27800[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27245__auto__);

(statearr_27800[(1)] = (1));

return statearr_27800;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27245__auto____1 = (function (state_27789){
while(true){
var ret_value__27246__auto__ = (function (){try{while(true){
var result__27247__auto__ = switch__27244__auto__.call(null,state_27789);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27247__auto__;
}
break;
}
}catch (e27801){if((e27801 instanceof Object)){
var ex__27248__auto__ = e27801;
var statearr_27802_27937 = state_27789;
(statearr_27802_27937[(5)] = ex__27248__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27789);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27801;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27938 = state_27789;
state_27789 = G__27938;
continue;
} else {
return ret_value__27246__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27245__auto__ = function(state_27789){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27245__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27245__auto____1.call(this,state_27789);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27245__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27245__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27245__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27245__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27245__auto__;
})()
;})(__27918,switch__27244__auto__,c__27356__auto___27930,G__27749_27919,n__26069__auto___27917,jobs,results,process,async))
})();
var state__27358__auto__ = (function (){var statearr_27803 = f__27357__auto__.call(null);
(statearr_27803[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27356__auto___27930);

return statearr_27803;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27358__auto__);
});})(__27918,c__27356__auto___27930,G__27749_27919,n__26069__auto___27917,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')));

}

var G__27939 = (__27918 + (1));
__27918 = G__27939;
continue;
} else {
}
break;
}

var c__27356__auto___27940 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27356__auto___27940,jobs,results,process,async){
return (function (){
var f__27357__auto__ = (function (){var switch__27244__auto__ = ((function (c__27356__auto___27940,jobs,results,process,async){
return (function (state_27825){
var state_val_27826 = (state_27825[(1)]);
if((state_val_27826 === (1))){
var state_27825__$1 = state_27825;
var statearr_27827_27941 = state_27825__$1;
(statearr_27827_27941[(2)] = null);

(statearr_27827_27941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27826 === (2))){
var state_27825__$1 = state_27825;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27825__$1,(4),from);
} else {
if((state_val_27826 === (3))){
var inst_27823 = (state_27825[(2)]);
var state_27825__$1 = state_27825;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27825__$1,inst_27823);
} else {
if((state_val_27826 === (4))){
var inst_27806 = (state_27825[(7)]);
var inst_27806__$1 = (state_27825[(2)]);
var inst_27807 = (inst_27806__$1 == null);
var state_27825__$1 = (function (){var statearr_27828 = state_27825;
(statearr_27828[(7)] = inst_27806__$1);

return statearr_27828;
})();
if(cljs.core.truth_(inst_27807)){
var statearr_27829_27942 = state_27825__$1;
(statearr_27829_27942[(1)] = (5));

} else {
var statearr_27830_27943 = state_27825__$1;
(statearr_27830_27943[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27826 === (5))){
var inst_27809 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27825__$1 = state_27825;
var statearr_27831_27944 = state_27825__$1;
(statearr_27831_27944[(2)] = inst_27809);

(statearr_27831_27944[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27826 === (6))){
var inst_27811 = (state_27825[(8)]);
var inst_27806 = (state_27825[(7)]);
var inst_27811__$1 = cljs.core.async.chan.call(null,(1));
var inst_27812 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27813 = [inst_27806,inst_27811__$1];
var inst_27814 = (new cljs.core.PersistentVector(null,2,(5),inst_27812,inst_27813,null));
var state_27825__$1 = (function (){var statearr_27832 = state_27825;
(statearr_27832[(8)] = inst_27811__$1);

return statearr_27832;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27825__$1,(8),jobs,inst_27814);
} else {
if((state_val_27826 === (7))){
var inst_27821 = (state_27825[(2)]);
var state_27825__$1 = state_27825;
var statearr_27833_27945 = state_27825__$1;
(statearr_27833_27945[(2)] = inst_27821);

(statearr_27833_27945[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27826 === (8))){
var inst_27811 = (state_27825[(8)]);
var inst_27816 = (state_27825[(2)]);
var state_27825__$1 = (function (){var statearr_27834 = state_27825;
(statearr_27834[(9)] = inst_27816);

return statearr_27834;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27825__$1,(9),results,inst_27811);
} else {
if((state_val_27826 === (9))){
var inst_27818 = (state_27825[(2)]);
var state_27825__$1 = (function (){var statearr_27835 = state_27825;
(statearr_27835[(10)] = inst_27818);

return statearr_27835;
})();
var statearr_27836_27946 = state_27825__$1;
(statearr_27836_27946[(2)] = null);

(statearr_27836_27946[(1)] = (2));


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
});})(c__27356__auto___27940,jobs,results,process,async))
;
return ((function (switch__27244__auto__,c__27356__auto___27940,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27245__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27245__auto____0 = (function (){
var statearr_27840 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27840[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27245__auto__);

(statearr_27840[(1)] = (1));

return statearr_27840;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27245__auto____1 = (function (state_27825){
while(true){
var ret_value__27246__auto__ = (function (){try{while(true){
var result__27247__auto__ = switch__27244__auto__.call(null,state_27825);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27247__auto__;
}
break;
}
}catch (e27841){if((e27841 instanceof Object)){
var ex__27248__auto__ = e27841;
var statearr_27842_27947 = state_27825;
(statearr_27842_27947[(5)] = ex__27248__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27825);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27841;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27948 = state_27825;
state_27825 = G__27948;
continue;
} else {
return ret_value__27246__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27245__auto__ = function(state_27825){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27245__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27245__auto____1.call(this,state_27825);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27245__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27245__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27245__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27245__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27245__auto__;
})()
;})(switch__27244__auto__,c__27356__auto___27940,jobs,results,process,async))
})();
var state__27358__auto__ = (function (){var statearr_27843 = f__27357__auto__.call(null);
(statearr_27843[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27356__auto___27940);

return statearr_27843;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27358__auto__);
});})(c__27356__auto___27940,jobs,results,process,async))
);


var c__27356__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27356__auto__,jobs,results,process,async){
return (function (){
var f__27357__auto__ = (function (){var switch__27244__auto__ = ((function (c__27356__auto__,jobs,results,process,async){
return (function (state_27881){
var state_val_27882 = (state_27881[(1)]);
if((state_val_27882 === (7))){
var inst_27877 = (state_27881[(2)]);
var state_27881__$1 = state_27881;
var statearr_27883_27949 = state_27881__$1;
(statearr_27883_27949[(2)] = inst_27877);

(statearr_27883_27949[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27882 === (20))){
var state_27881__$1 = state_27881;
var statearr_27884_27950 = state_27881__$1;
(statearr_27884_27950[(2)] = null);

(statearr_27884_27950[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27882 === (1))){
var state_27881__$1 = state_27881;
var statearr_27885_27951 = state_27881__$1;
(statearr_27885_27951[(2)] = null);

(statearr_27885_27951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27882 === (4))){
var inst_27846 = (state_27881[(7)]);
var inst_27846__$1 = (state_27881[(2)]);
var inst_27847 = (inst_27846__$1 == null);
var state_27881__$1 = (function (){var statearr_27886 = state_27881;
(statearr_27886[(7)] = inst_27846__$1);

return statearr_27886;
})();
if(cljs.core.truth_(inst_27847)){
var statearr_27887_27952 = state_27881__$1;
(statearr_27887_27952[(1)] = (5));

} else {
var statearr_27888_27953 = state_27881__$1;
(statearr_27888_27953[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27882 === (15))){
var inst_27859 = (state_27881[(8)]);
var state_27881__$1 = state_27881;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27881__$1,(18),to,inst_27859);
} else {
if((state_val_27882 === (21))){
var inst_27872 = (state_27881[(2)]);
var state_27881__$1 = state_27881;
var statearr_27889_27954 = state_27881__$1;
(statearr_27889_27954[(2)] = inst_27872);

(statearr_27889_27954[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27882 === (13))){
var inst_27874 = (state_27881[(2)]);
var state_27881__$1 = (function (){var statearr_27890 = state_27881;
(statearr_27890[(9)] = inst_27874);

return statearr_27890;
})();
var statearr_27891_27955 = state_27881__$1;
(statearr_27891_27955[(2)] = null);

(statearr_27891_27955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27882 === (6))){
var inst_27846 = (state_27881[(7)]);
var state_27881__$1 = state_27881;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27881__$1,(11),inst_27846);
} else {
if((state_val_27882 === (17))){
var inst_27867 = (state_27881[(2)]);
var state_27881__$1 = state_27881;
if(cljs.core.truth_(inst_27867)){
var statearr_27892_27956 = state_27881__$1;
(statearr_27892_27956[(1)] = (19));

} else {
var statearr_27893_27957 = state_27881__$1;
(statearr_27893_27957[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27882 === (3))){
var inst_27879 = (state_27881[(2)]);
var state_27881__$1 = state_27881;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27881__$1,inst_27879);
} else {
if((state_val_27882 === (12))){
var inst_27856 = (state_27881[(10)]);
var state_27881__$1 = state_27881;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27881__$1,(14),inst_27856);
} else {
if((state_val_27882 === (2))){
var state_27881__$1 = state_27881;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27881__$1,(4),results);
} else {
if((state_val_27882 === (19))){
var state_27881__$1 = state_27881;
var statearr_27894_27958 = state_27881__$1;
(statearr_27894_27958[(2)] = null);

(statearr_27894_27958[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27882 === (11))){
var inst_27856 = (state_27881[(2)]);
var state_27881__$1 = (function (){var statearr_27895 = state_27881;
(statearr_27895[(10)] = inst_27856);

return statearr_27895;
})();
var statearr_27896_27959 = state_27881__$1;
(statearr_27896_27959[(2)] = null);

(statearr_27896_27959[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27882 === (9))){
var state_27881__$1 = state_27881;
var statearr_27897_27960 = state_27881__$1;
(statearr_27897_27960[(2)] = null);

(statearr_27897_27960[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27882 === (5))){
var state_27881__$1 = state_27881;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27898_27961 = state_27881__$1;
(statearr_27898_27961[(1)] = (8));

} else {
var statearr_27899_27962 = state_27881__$1;
(statearr_27899_27962[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27882 === (14))){
var inst_27861 = (state_27881[(11)]);
var inst_27859 = (state_27881[(8)]);
var inst_27859__$1 = (state_27881[(2)]);
var inst_27860 = (inst_27859__$1 == null);
var inst_27861__$1 = cljs.core.not.call(null,inst_27860);
var state_27881__$1 = (function (){var statearr_27900 = state_27881;
(statearr_27900[(11)] = inst_27861__$1);

(statearr_27900[(8)] = inst_27859__$1);

return statearr_27900;
})();
if(inst_27861__$1){
var statearr_27901_27963 = state_27881__$1;
(statearr_27901_27963[(1)] = (15));

} else {
var statearr_27902_27964 = state_27881__$1;
(statearr_27902_27964[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27882 === (16))){
var inst_27861 = (state_27881[(11)]);
var state_27881__$1 = state_27881;
var statearr_27903_27965 = state_27881__$1;
(statearr_27903_27965[(2)] = inst_27861);

(statearr_27903_27965[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27882 === (10))){
var inst_27853 = (state_27881[(2)]);
var state_27881__$1 = state_27881;
var statearr_27904_27966 = state_27881__$1;
(statearr_27904_27966[(2)] = inst_27853);

(statearr_27904_27966[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27882 === (18))){
var inst_27864 = (state_27881[(2)]);
var state_27881__$1 = state_27881;
var statearr_27905_27967 = state_27881__$1;
(statearr_27905_27967[(2)] = inst_27864);

(statearr_27905_27967[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27882 === (8))){
var inst_27850 = cljs.core.async.close_BANG_.call(null,to);
var state_27881__$1 = state_27881;
var statearr_27906_27968 = state_27881__$1;
(statearr_27906_27968[(2)] = inst_27850);

(statearr_27906_27968[(1)] = (10));


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
});})(c__27356__auto__,jobs,results,process,async))
;
return ((function (switch__27244__auto__,c__27356__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27245__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27245__auto____0 = (function (){
var statearr_27910 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27910[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27245__auto__);

(statearr_27910[(1)] = (1));

return statearr_27910;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27245__auto____1 = (function (state_27881){
while(true){
var ret_value__27246__auto__ = (function (){try{while(true){
var result__27247__auto__ = switch__27244__auto__.call(null,state_27881);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27247__auto__;
}
break;
}
}catch (e27911){if((e27911 instanceof Object)){
var ex__27248__auto__ = e27911;
var statearr_27912_27969 = state_27881;
(statearr_27912_27969[(5)] = ex__27248__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27881);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27911;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27970 = state_27881;
state_27881 = G__27970;
continue;
} else {
return ret_value__27246__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27245__auto__ = function(state_27881){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27245__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27245__auto____1.call(this,state_27881);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27245__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27245__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27245__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27245__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27245__auto__;
})()
;})(switch__27244__auto__,c__27356__auto__,jobs,results,process,async))
})();
var state__27358__auto__ = (function (){var statearr_27913 = f__27357__auto__.call(null);
(statearr_27913[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27356__auto__);

return statearr_27913;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27358__auto__);
});})(c__27356__auto__,jobs,results,process,async))
);

return c__27356__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args27971 = [];
var len__26259__auto___27974 = arguments.length;
var i__26260__auto___27975 = (0);
while(true){
if((i__26260__auto___27975 < len__26259__auto___27974)){
args27971.push((arguments[i__26260__auto___27975]));

var G__27976 = (i__26260__auto___27975 + (1));
i__26260__auto___27975 = G__27976;
continue;
} else {
}
break;
}

var G__27973 = args27971.length;
switch (G__27973) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args27971.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args27978 = [];
var len__26259__auto___27981 = arguments.length;
var i__26260__auto___27982 = (0);
while(true){
if((i__26260__auto___27982 < len__26259__auto___27981)){
args27978.push((arguments[i__26260__auto___27982]));

var G__27983 = (i__26260__auto___27982 + (1));
i__26260__auto___27982 = G__27983;
continue;
} else {
}
break;
}

var G__27980 = args27978.length;
switch (G__27980) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args27978.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args27985 = [];
var len__26259__auto___28038 = arguments.length;
var i__26260__auto___28039 = (0);
while(true){
if((i__26260__auto___28039 < len__26259__auto___28038)){
args27985.push((arguments[i__26260__auto___28039]));

var G__28040 = (i__26260__auto___28039 + (1));
i__26260__auto___28039 = G__28040;
continue;
} else {
}
break;
}

var G__27987 = args27985.length;
switch (G__27987) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args27985.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__27356__auto___28042 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27356__auto___28042,tc,fc){
return (function (){
var f__27357__auto__ = (function (){var switch__27244__auto__ = ((function (c__27356__auto___28042,tc,fc){
return (function (state_28013){
var state_val_28014 = (state_28013[(1)]);
if((state_val_28014 === (7))){
var inst_28009 = (state_28013[(2)]);
var state_28013__$1 = state_28013;
var statearr_28015_28043 = state_28013__$1;
(statearr_28015_28043[(2)] = inst_28009);

(statearr_28015_28043[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28014 === (1))){
var state_28013__$1 = state_28013;
var statearr_28016_28044 = state_28013__$1;
(statearr_28016_28044[(2)] = null);

(statearr_28016_28044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28014 === (4))){
var inst_27990 = (state_28013[(7)]);
var inst_27990__$1 = (state_28013[(2)]);
var inst_27991 = (inst_27990__$1 == null);
var state_28013__$1 = (function (){var statearr_28017 = state_28013;
(statearr_28017[(7)] = inst_27990__$1);

return statearr_28017;
})();
if(cljs.core.truth_(inst_27991)){
var statearr_28018_28045 = state_28013__$1;
(statearr_28018_28045[(1)] = (5));

} else {
var statearr_28019_28046 = state_28013__$1;
(statearr_28019_28046[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28014 === (13))){
var state_28013__$1 = state_28013;
var statearr_28020_28047 = state_28013__$1;
(statearr_28020_28047[(2)] = null);

(statearr_28020_28047[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28014 === (6))){
var inst_27990 = (state_28013[(7)]);
var inst_27996 = p.call(null,inst_27990);
var state_28013__$1 = state_28013;
if(cljs.core.truth_(inst_27996)){
var statearr_28021_28048 = state_28013__$1;
(statearr_28021_28048[(1)] = (9));

} else {
var statearr_28022_28049 = state_28013__$1;
(statearr_28022_28049[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28014 === (3))){
var inst_28011 = (state_28013[(2)]);
var state_28013__$1 = state_28013;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28013__$1,inst_28011);
} else {
if((state_val_28014 === (12))){
var state_28013__$1 = state_28013;
var statearr_28023_28050 = state_28013__$1;
(statearr_28023_28050[(2)] = null);

(statearr_28023_28050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28014 === (2))){
var state_28013__$1 = state_28013;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28013__$1,(4),ch);
} else {
if((state_val_28014 === (11))){
var inst_27990 = (state_28013[(7)]);
var inst_28000 = (state_28013[(2)]);
var state_28013__$1 = state_28013;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28013__$1,(8),inst_28000,inst_27990);
} else {
if((state_val_28014 === (9))){
var state_28013__$1 = state_28013;
var statearr_28024_28051 = state_28013__$1;
(statearr_28024_28051[(2)] = tc);

(statearr_28024_28051[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28014 === (5))){
var inst_27993 = cljs.core.async.close_BANG_.call(null,tc);
var inst_27994 = cljs.core.async.close_BANG_.call(null,fc);
var state_28013__$1 = (function (){var statearr_28025 = state_28013;
(statearr_28025[(8)] = inst_27993);

return statearr_28025;
})();
var statearr_28026_28052 = state_28013__$1;
(statearr_28026_28052[(2)] = inst_27994);

(statearr_28026_28052[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28014 === (14))){
var inst_28007 = (state_28013[(2)]);
var state_28013__$1 = state_28013;
var statearr_28027_28053 = state_28013__$1;
(statearr_28027_28053[(2)] = inst_28007);

(statearr_28027_28053[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28014 === (10))){
var state_28013__$1 = state_28013;
var statearr_28028_28054 = state_28013__$1;
(statearr_28028_28054[(2)] = fc);

(statearr_28028_28054[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28014 === (8))){
var inst_28002 = (state_28013[(2)]);
var state_28013__$1 = state_28013;
if(cljs.core.truth_(inst_28002)){
var statearr_28029_28055 = state_28013__$1;
(statearr_28029_28055[(1)] = (12));

} else {
var statearr_28030_28056 = state_28013__$1;
(statearr_28030_28056[(1)] = (13));

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
});})(c__27356__auto___28042,tc,fc))
;
return ((function (switch__27244__auto__,c__27356__auto___28042,tc,fc){
return (function() {
var cljs$core$async$state_machine__27245__auto__ = null;
var cljs$core$async$state_machine__27245__auto____0 = (function (){
var statearr_28034 = [null,null,null,null,null,null,null,null,null];
(statearr_28034[(0)] = cljs$core$async$state_machine__27245__auto__);

(statearr_28034[(1)] = (1));

return statearr_28034;
});
var cljs$core$async$state_machine__27245__auto____1 = (function (state_28013){
while(true){
var ret_value__27246__auto__ = (function (){try{while(true){
var result__27247__auto__ = switch__27244__auto__.call(null,state_28013);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27247__auto__;
}
break;
}
}catch (e28035){if((e28035 instanceof Object)){
var ex__27248__auto__ = e28035;
var statearr_28036_28057 = state_28013;
(statearr_28036_28057[(5)] = ex__27248__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28013);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28035;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28058 = state_28013;
state_28013 = G__28058;
continue;
} else {
return ret_value__27246__auto__;
}
break;
}
});
cljs$core$async$state_machine__27245__auto__ = function(state_28013){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27245__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27245__auto____1.call(this,state_28013);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27245__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27245__auto____0;
cljs$core$async$state_machine__27245__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27245__auto____1;
return cljs$core$async$state_machine__27245__auto__;
})()
;})(switch__27244__auto__,c__27356__auto___28042,tc,fc))
})();
var state__27358__auto__ = (function (){var statearr_28037 = f__27357__auto__.call(null);
(statearr_28037[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27356__auto___28042);

return statearr_28037;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27358__auto__);
});})(c__27356__auto___28042,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__27356__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27356__auto__){
return (function (){
var f__27357__auto__ = (function (){var switch__27244__auto__ = ((function (c__27356__auto__){
return (function (state_28122){
var state_val_28123 = (state_28122[(1)]);
if((state_val_28123 === (7))){
var inst_28118 = (state_28122[(2)]);
var state_28122__$1 = state_28122;
var statearr_28124_28145 = state_28122__$1;
(statearr_28124_28145[(2)] = inst_28118);

(statearr_28124_28145[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28123 === (1))){
var inst_28102 = init;
var state_28122__$1 = (function (){var statearr_28125 = state_28122;
(statearr_28125[(7)] = inst_28102);

return statearr_28125;
})();
var statearr_28126_28146 = state_28122__$1;
(statearr_28126_28146[(2)] = null);

(statearr_28126_28146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28123 === (4))){
var inst_28105 = (state_28122[(8)]);
var inst_28105__$1 = (state_28122[(2)]);
var inst_28106 = (inst_28105__$1 == null);
var state_28122__$1 = (function (){var statearr_28127 = state_28122;
(statearr_28127[(8)] = inst_28105__$1);

return statearr_28127;
})();
if(cljs.core.truth_(inst_28106)){
var statearr_28128_28147 = state_28122__$1;
(statearr_28128_28147[(1)] = (5));

} else {
var statearr_28129_28148 = state_28122__$1;
(statearr_28129_28148[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28123 === (6))){
var inst_28102 = (state_28122[(7)]);
var inst_28109 = (state_28122[(9)]);
var inst_28105 = (state_28122[(8)]);
var inst_28109__$1 = f.call(null,inst_28102,inst_28105);
var inst_28110 = cljs.core.reduced_QMARK_.call(null,inst_28109__$1);
var state_28122__$1 = (function (){var statearr_28130 = state_28122;
(statearr_28130[(9)] = inst_28109__$1);

return statearr_28130;
})();
if(inst_28110){
var statearr_28131_28149 = state_28122__$1;
(statearr_28131_28149[(1)] = (8));

} else {
var statearr_28132_28150 = state_28122__$1;
(statearr_28132_28150[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28123 === (3))){
var inst_28120 = (state_28122[(2)]);
var state_28122__$1 = state_28122;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28122__$1,inst_28120);
} else {
if((state_val_28123 === (2))){
var state_28122__$1 = state_28122;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28122__$1,(4),ch);
} else {
if((state_val_28123 === (9))){
var inst_28109 = (state_28122[(9)]);
var inst_28102 = inst_28109;
var state_28122__$1 = (function (){var statearr_28133 = state_28122;
(statearr_28133[(7)] = inst_28102);

return statearr_28133;
})();
var statearr_28134_28151 = state_28122__$1;
(statearr_28134_28151[(2)] = null);

(statearr_28134_28151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28123 === (5))){
var inst_28102 = (state_28122[(7)]);
var state_28122__$1 = state_28122;
var statearr_28135_28152 = state_28122__$1;
(statearr_28135_28152[(2)] = inst_28102);

(statearr_28135_28152[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28123 === (10))){
var inst_28116 = (state_28122[(2)]);
var state_28122__$1 = state_28122;
var statearr_28136_28153 = state_28122__$1;
(statearr_28136_28153[(2)] = inst_28116);

(statearr_28136_28153[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28123 === (8))){
var inst_28109 = (state_28122[(9)]);
var inst_28112 = cljs.core.deref.call(null,inst_28109);
var state_28122__$1 = state_28122;
var statearr_28137_28154 = state_28122__$1;
(statearr_28137_28154[(2)] = inst_28112);

(statearr_28137_28154[(1)] = (10));


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
});})(c__27356__auto__))
;
return ((function (switch__27244__auto__,c__27356__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__27245__auto__ = null;
var cljs$core$async$reduce_$_state_machine__27245__auto____0 = (function (){
var statearr_28141 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28141[(0)] = cljs$core$async$reduce_$_state_machine__27245__auto__);

(statearr_28141[(1)] = (1));

return statearr_28141;
});
var cljs$core$async$reduce_$_state_machine__27245__auto____1 = (function (state_28122){
while(true){
var ret_value__27246__auto__ = (function (){try{while(true){
var result__27247__auto__ = switch__27244__auto__.call(null,state_28122);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27247__auto__;
}
break;
}
}catch (e28142){if((e28142 instanceof Object)){
var ex__27248__auto__ = e28142;
var statearr_28143_28155 = state_28122;
(statearr_28143_28155[(5)] = ex__27248__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28122);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28142;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28156 = state_28122;
state_28122 = G__28156;
continue;
} else {
return ret_value__27246__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__27245__auto__ = function(state_28122){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__27245__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__27245__auto____1.call(this,state_28122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__27245__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__27245__auto____0;
cljs$core$async$reduce_$_state_machine__27245__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__27245__auto____1;
return cljs$core$async$reduce_$_state_machine__27245__auto__;
})()
;})(switch__27244__auto__,c__27356__auto__))
})();
var state__27358__auto__ = (function (){var statearr_28144 = f__27357__auto__.call(null);
(statearr_28144[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27356__auto__);

return statearr_28144;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27358__auto__);
});})(c__27356__auto__))
);

return c__27356__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args28157 = [];
var len__26259__auto___28209 = arguments.length;
var i__26260__auto___28210 = (0);
while(true){
if((i__26260__auto___28210 < len__26259__auto___28209)){
args28157.push((arguments[i__26260__auto___28210]));

var G__28211 = (i__26260__auto___28210 + (1));
i__26260__auto___28210 = G__28211;
continue;
} else {
}
break;
}

var G__28159 = args28157.length;
switch (G__28159) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28157.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__27356__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27356__auto__){
return (function (){
var f__27357__auto__ = (function (){var switch__27244__auto__ = ((function (c__27356__auto__){
return (function (state_28184){
var state_val_28185 = (state_28184[(1)]);
if((state_val_28185 === (7))){
var inst_28166 = (state_28184[(2)]);
var state_28184__$1 = state_28184;
var statearr_28186_28213 = state_28184__$1;
(statearr_28186_28213[(2)] = inst_28166);

(statearr_28186_28213[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28185 === (1))){
var inst_28160 = cljs.core.seq.call(null,coll);
var inst_28161 = inst_28160;
var state_28184__$1 = (function (){var statearr_28187 = state_28184;
(statearr_28187[(7)] = inst_28161);

return statearr_28187;
})();
var statearr_28188_28214 = state_28184__$1;
(statearr_28188_28214[(2)] = null);

(statearr_28188_28214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28185 === (4))){
var inst_28161 = (state_28184[(7)]);
var inst_28164 = cljs.core.first.call(null,inst_28161);
var state_28184__$1 = state_28184;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28184__$1,(7),ch,inst_28164);
} else {
if((state_val_28185 === (13))){
var inst_28178 = (state_28184[(2)]);
var state_28184__$1 = state_28184;
var statearr_28189_28215 = state_28184__$1;
(statearr_28189_28215[(2)] = inst_28178);

(statearr_28189_28215[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28185 === (6))){
var inst_28169 = (state_28184[(2)]);
var state_28184__$1 = state_28184;
if(cljs.core.truth_(inst_28169)){
var statearr_28190_28216 = state_28184__$1;
(statearr_28190_28216[(1)] = (8));

} else {
var statearr_28191_28217 = state_28184__$1;
(statearr_28191_28217[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28185 === (3))){
var inst_28182 = (state_28184[(2)]);
var state_28184__$1 = state_28184;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28184__$1,inst_28182);
} else {
if((state_val_28185 === (12))){
var state_28184__$1 = state_28184;
var statearr_28192_28218 = state_28184__$1;
(statearr_28192_28218[(2)] = null);

(statearr_28192_28218[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28185 === (2))){
var inst_28161 = (state_28184[(7)]);
var state_28184__$1 = state_28184;
if(cljs.core.truth_(inst_28161)){
var statearr_28193_28219 = state_28184__$1;
(statearr_28193_28219[(1)] = (4));

} else {
var statearr_28194_28220 = state_28184__$1;
(statearr_28194_28220[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28185 === (11))){
var inst_28175 = cljs.core.async.close_BANG_.call(null,ch);
var state_28184__$1 = state_28184;
var statearr_28195_28221 = state_28184__$1;
(statearr_28195_28221[(2)] = inst_28175);

(statearr_28195_28221[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28185 === (9))){
var state_28184__$1 = state_28184;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28196_28222 = state_28184__$1;
(statearr_28196_28222[(1)] = (11));

} else {
var statearr_28197_28223 = state_28184__$1;
(statearr_28197_28223[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28185 === (5))){
var inst_28161 = (state_28184[(7)]);
var state_28184__$1 = state_28184;
var statearr_28198_28224 = state_28184__$1;
(statearr_28198_28224[(2)] = inst_28161);

(statearr_28198_28224[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28185 === (10))){
var inst_28180 = (state_28184[(2)]);
var state_28184__$1 = state_28184;
var statearr_28199_28225 = state_28184__$1;
(statearr_28199_28225[(2)] = inst_28180);

(statearr_28199_28225[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28185 === (8))){
var inst_28161 = (state_28184[(7)]);
var inst_28171 = cljs.core.next.call(null,inst_28161);
var inst_28161__$1 = inst_28171;
var state_28184__$1 = (function (){var statearr_28200 = state_28184;
(statearr_28200[(7)] = inst_28161__$1);

return statearr_28200;
})();
var statearr_28201_28226 = state_28184__$1;
(statearr_28201_28226[(2)] = null);

(statearr_28201_28226[(1)] = (2));


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
});})(c__27356__auto__))
;
return ((function (switch__27244__auto__,c__27356__auto__){
return (function() {
var cljs$core$async$state_machine__27245__auto__ = null;
var cljs$core$async$state_machine__27245__auto____0 = (function (){
var statearr_28205 = [null,null,null,null,null,null,null,null];
(statearr_28205[(0)] = cljs$core$async$state_machine__27245__auto__);

(statearr_28205[(1)] = (1));

return statearr_28205;
});
var cljs$core$async$state_machine__27245__auto____1 = (function (state_28184){
while(true){
var ret_value__27246__auto__ = (function (){try{while(true){
var result__27247__auto__ = switch__27244__auto__.call(null,state_28184);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27247__auto__;
}
break;
}
}catch (e28206){if((e28206 instanceof Object)){
var ex__27248__auto__ = e28206;
var statearr_28207_28227 = state_28184;
(statearr_28207_28227[(5)] = ex__27248__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28184);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28206;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28228 = state_28184;
state_28184 = G__28228;
continue;
} else {
return ret_value__27246__auto__;
}
break;
}
});
cljs$core$async$state_machine__27245__auto__ = function(state_28184){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27245__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27245__auto____1.call(this,state_28184);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27245__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27245__auto____0;
cljs$core$async$state_machine__27245__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27245__auto____1;
return cljs$core$async$state_machine__27245__auto__;
})()
;})(switch__27244__auto__,c__27356__auto__))
})();
var state__27358__auto__ = (function (){var statearr_28208 = f__27357__auto__.call(null);
(statearr_28208[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27356__auto__);

return statearr_28208;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27358__auto__);
});})(c__27356__auto__))
);

return c__27356__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__25814__auto__ = (((_ == null))?null:_);
var m__25815__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__25814__auto__)]);
if(!((m__25815__auto__ == null))){
return m__25815__auto__.call(null,_);
} else {
var m__25815__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__25815__auto____$1 == null))){
return m__25815__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__25814__auto__ = (((m == null))?null:m);
var m__25815__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__25814__auto__)]);
if(!((m__25815__auto__ == null))){
return m__25815__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__25815__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__25815__auto____$1 == null))){
return m__25815__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__25814__auto__ = (((m == null))?null:m);
var m__25815__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__25814__auto__)]);
if(!((m__25815__auto__ == null))){
return m__25815__auto__.call(null,m,ch);
} else {
var m__25815__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__25815__auto____$1 == null))){
return m__25815__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__25814__auto__ = (((m == null))?null:m);
var m__25815__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__25814__auto__)]);
if(!((m__25815__auto__ == null))){
return m__25815__auto__.call(null,m);
} else {
var m__25815__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__25815__auto____$1 == null))){
return m__25815__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async28454 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28454 = (function (ch,cs,meta28455){
this.ch = ch;
this.cs = cs;
this.meta28455 = meta28455;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28454.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28456,meta28455__$1){
var self__ = this;
var _28456__$1 = this;
return (new cljs.core.async.t_cljs$core$async28454(self__.ch,self__.cs,meta28455__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async28454.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28456){
var self__ = this;
var _28456__$1 = this;
return self__.meta28455;
});})(cs))
;

cljs.core.async.t_cljs$core$async28454.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28454.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async28454.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28454.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28454.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28454.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28454.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28455","meta28455",-709389197,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async28454.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28454.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28454";

cljs.core.async.t_cljs$core$async28454.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25757__auto__,writer__25758__auto__,opt__25759__auto__){
return cljs.core._write.call(null,writer__25758__auto__,"cljs.core.async/t_cljs$core$async28454");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async28454 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async28454(ch__$1,cs__$1,meta28455){
return (new cljs.core.async.t_cljs$core$async28454(ch__$1,cs__$1,meta28455));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async28454(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__27356__auto___28679 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27356__auto___28679,cs,m,dchan,dctr,done){
return (function (){
var f__27357__auto__ = (function (){var switch__27244__auto__ = ((function (c__27356__auto___28679,cs,m,dchan,dctr,done){
return (function (state_28591){
var state_val_28592 = (state_28591[(1)]);
if((state_val_28592 === (7))){
var inst_28587 = (state_28591[(2)]);
var state_28591__$1 = state_28591;
var statearr_28593_28680 = state_28591__$1;
(statearr_28593_28680[(2)] = inst_28587);

(statearr_28593_28680[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28592 === (20))){
var inst_28490 = (state_28591[(7)]);
var inst_28502 = cljs.core.first.call(null,inst_28490);
var inst_28503 = cljs.core.nth.call(null,inst_28502,(0),null);
var inst_28504 = cljs.core.nth.call(null,inst_28502,(1),null);
var state_28591__$1 = (function (){var statearr_28594 = state_28591;
(statearr_28594[(8)] = inst_28503);

return statearr_28594;
})();
if(cljs.core.truth_(inst_28504)){
var statearr_28595_28681 = state_28591__$1;
(statearr_28595_28681[(1)] = (22));

} else {
var statearr_28596_28682 = state_28591__$1;
(statearr_28596_28682[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28592 === (27))){
var inst_28459 = (state_28591[(9)]);
var inst_28539 = (state_28591[(10)]);
var inst_28532 = (state_28591[(11)]);
var inst_28534 = (state_28591[(12)]);
var inst_28539__$1 = cljs.core._nth.call(null,inst_28532,inst_28534);
var inst_28540 = cljs.core.async.put_BANG_.call(null,inst_28539__$1,inst_28459,done);
var state_28591__$1 = (function (){var statearr_28597 = state_28591;
(statearr_28597[(10)] = inst_28539__$1);

return statearr_28597;
})();
if(cljs.core.truth_(inst_28540)){
var statearr_28598_28683 = state_28591__$1;
(statearr_28598_28683[(1)] = (30));

} else {
var statearr_28599_28684 = state_28591__$1;
(statearr_28599_28684[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28592 === (1))){
var state_28591__$1 = state_28591;
var statearr_28600_28685 = state_28591__$1;
(statearr_28600_28685[(2)] = null);

(statearr_28600_28685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28592 === (24))){
var inst_28490 = (state_28591[(7)]);
var inst_28509 = (state_28591[(2)]);
var inst_28510 = cljs.core.next.call(null,inst_28490);
var inst_28468 = inst_28510;
var inst_28469 = null;
var inst_28470 = (0);
var inst_28471 = (0);
var state_28591__$1 = (function (){var statearr_28601 = state_28591;
(statearr_28601[(13)] = inst_28471);

(statearr_28601[(14)] = inst_28509);

(statearr_28601[(15)] = inst_28470);

(statearr_28601[(16)] = inst_28469);

(statearr_28601[(17)] = inst_28468);

return statearr_28601;
})();
var statearr_28602_28686 = state_28591__$1;
(statearr_28602_28686[(2)] = null);

(statearr_28602_28686[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28592 === (39))){
var state_28591__$1 = state_28591;
var statearr_28606_28687 = state_28591__$1;
(statearr_28606_28687[(2)] = null);

(statearr_28606_28687[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28592 === (4))){
var inst_28459 = (state_28591[(9)]);
var inst_28459__$1 = (state_28591[(2)]);
var inst_28460 = (inst_28459__$1 == null);
var state_28591__$1 = (function (){var statearr_28607 = state_28591;
(statearr_28607[(9)] = inst_28459__$1);

return statearr_28607;
})();
if(cljs.core.truth_(inst_28460)){
var statearr_28608_28688 = state_28591__$1;
(statearr_28608_28688[(1)] = (5));

} else {
var statearr_28609_28689 = state_28591__$1;
(statearr_28609_28689[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28592 === (15))){
var inst_28471 = (state_28591[(13)]);
var inst_28470 = (state_28591[(15)]);
var inst_28469 = (state_28591[(16)]);
var inst_28468 = (state_28591[(17)]);
var inst_28486 = (state_28591[(2)]);
var inst_28487 = (inst_28471 + (1));
var tmp28603 = inst_28470;
var tmp28604 = inst_28469;
var tmp28605 = inst_28468;
var inst_28468__$1 = tmp28605;
var inst_28469__$1 = tmp28604;
var inst_28470__$1 = tmp28603;
var inst_28471__$1 = inst_28487;
var state_28591__$1 = (function (){var statearr_28610 = state_28591;
(statearr_28610[(13)] = inst_28471__$1);

(statearr_28610[(15)] = inst_28470__$1);

(statearr_28610[(16)] = inst_28469__$1);

(statearr_28610[(17)] = inst_28468__$1);

(statearr_28610[(18)] = inst_28486);

return statearr_28610;
})();
var statearr_28611_28690 = state_28591__$1;
(statearr_28611_28690[(2)] = null);

(statearr_28611_28690[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28592 === (21))){
var inst_28513 = (state_28591[(2)]);
var state_28591__$1 = state_28591;
var statearr_28615_28691 = state_28591__$1;
(statearr_28615_28691[(2)] = inst_28513);

(statearr_28615_28691[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28592 === (31))){
var inst_28539 = (state_28591[(10)]);
var inst_28543 = done.call(null,null);
var inst_28544 = cljs.core.async.untap_STAR_.call(null,m,inst_28539);
var state_28591__$1 = (function (){var statearr_28616 = state_28591;
(statearr_28616[(19)] = inst_28543);

return statearr_28616;
})();
var statearr_28617_28692 = state_28591__$1;
(statearr_28617_28692[(2)] = inst_28544);

(statearr_28617_28692[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28592 === (32))){
var inst_28532 = (state_28591[(11)]);
var inst_28531 = (state_28591[(20)]);
var inst_28534 = (state_28591[(12)]);
var inst_28533 = (state_28591[(21)]);
var inst_28546 = (state_28591[(2)]);
var inst_28547 = (inst_28534 + (1));
var tmp28612 = inst_28532;
var tmp28613 = inst_28531;
var tmp28614 = inst_28533;
var inst_28531__$1 = tmp28613;
var inst_28532__$1 = tmp28612;
var inst_28533__$1 = tmp28614;
var inst_28534__$1 = inst_28547;
var state_28591__$1 = (function (){var statearr_28618 = state_28591;
(statearr_28618[(11)] = inst_28532__$1);

(statearr_28618[(20)] = inst_28531__$1);

(statearr_28618[(22)] = inst_28546);

(statearr_28618[(12)] = inst_28534__$1);

(statearr_28618[(21)] = inst_28533__$1);

return statearr_28618;
})();
var statearr_28619_28693 = state_28591__$1;
(statearr_28619_28693[(2)] = null);

(statearr_28619_28693[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28592 === (40))){
var inst_28559 = (state_28591[(23)]);
var inst_28563 = done.call(null,null);
var inst_28564 = cljs.core.async.untap_STAR_.call(null,m,inst_28559);
var state_28591__$1 = (function (){var statearr_28620 = state_28591;
(statearr_28620[(24)] = inst_28563);

return statearr_28620;
})();
var statearr_28621_28694 = state_28591__$1;
(statearr_28621_28694[(2)] = inst_28564);

(statearr_28621_28694[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28592 === (33))){
var inst_28550 = (state_28591[(25)]);
var inst_28552 = cljs.core.chunked_seq_QMARK_.call(null,inst_28550);
var state_28591__$1 = state_28591;
if(inst_28552){
var statearr_28622_28695 = state_28591__$1;
(statearr_28622_28695[(1)] = (36));

} else {
var statearr_28623_28696 = state_28591__$1;
(statearr_28623_28696[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28592 === (13))){
var inst_28480 = (state_28591[(26)]);
var inst_28483 = cljs.core.async.close_BANG_.call(null,inst_28480);
var state_28591__$1 = state_28591;
var statearr_28624_28697 = state_28591__$1;
(statearr_28624_28697[(2)] = inst_28483);

(statearr_28624_28697[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28592 === (22))){
var inst_28503 = (state_28591[(8)]);
var inst_28506 = cljs.core.async.close_BANG_.call(null,inst_28503);
var state_28591__$1 = state_28591;
var statearr_28625_28698 = state_28591__$1;
(statearr_28625_28698[(2)] = inst_28506);

(statearr_28625_28698[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28592 === (36))){
var inst_28550 = (state_28591[(25)]);
var inst_28554 = cljs.core.chunk_first.call(null,inst_28550);
var inst_28555 = cljs.core.chunk_rest.call(null,inst_28550);
var inst_28556 = cljs.core.count.call(null,inst_28554);
var inst_28531 = inst_28555;
var inst_28532 = inst_28554;
var inst_28533 = inst_28556;
var inst_28534 = (0);
var state_28591__$1 = (function (){var statearr_28626 = state_28591;
(statearr_28626[(11)] = inst_28532);

(statearr_28626[(20)] = inst_28531);

(statearr_28626[(12)] = inst_28534);

(statearr_28626[(21)] = inst_28533);

return statearr_28626;
})();
var statearr_28627_28699 = state_28591__$1;
(statearr_28627_28699[(2)] = null);

(statearr_28627_28699[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28592 === (41))){
var inst_28550 = (state_28591[(25)]);
var inst_28566 = (state_28591[(2)]);
var inst_28567 = cljs.core.next.call(null,inst_28550);
var inst_28531 = inst_28567;
var inst_28532 = null;
var inst_28533 = (0);
var inst_28534 = (0);
var state_28591__$1 = (function (){var statearr_28628 = state_28591;
(statearr_28628[(11)] = inst_28532);

(statearr_28628[(20)] = inst_28531);

(statearr_28628[(27)] = inst_28566);

(statearr_28628[(12)] = inst_28534);

(statearr_28628[(21)] = inst_28533);

return statearr_28628;
})();
var statearr_28629_28700 = state_28591__$1;
(statearr_28629_28700[(2)] = null);

(statearr_28629_28700[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28592 === (43))){
var state_28591__$1 = state_28591;
var statearr_28630_28701 = state_28591__$1;
(statearr_28630_28701[(2)] = null);

(statearr_28630_28701[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28592 === (29))){
var inst_28575 = (state_28591[(2)]);
var state_28591__$1 = state_28591;
var statearr_28631_28702 = state_28591__$1;
(statearr_28631_28702[(2)] = inst_28575);

(statearr_28631_28702[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28592 === (44))){
var inst_28584 = (state_28591[(2)]);
var state_28591__$1 = (function (){var statearr_28632 = state_28591;
(statearr_28632[(28)] = inst_28584);

return statearr_28632;
})();
var statearr_28633_28703 = state_28591__$1;
(statearr_28633_28703[(2)] = null);

(statearr_28633_28703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28592 === (6))){
var inst_28523 = (state_28591[(29)]);
var inst_28522 = cljs.core.deref.call(null,cs);
var inst_28523__$1 = cljs.core.keys.call(null,inst_28522);
var inst_28524 = cljs.core.count.call(null,inst_28523__$1);
var inst_28525 = cljs.core.reset_BANG_.call(null,dctr,inst_28524);
var inst_28530 = cljs.core.seq.call(null,inst_28523__$1);
var inst_28531 = inst_28530;
var inst_28532 = null;
var inst_28533 = (0);
var inst_28534 = (0);
var state_28591__$1 = (function (){var statearr_28634 = state_28591;
(statearr_28634[(11)] = inst_28532);

(statearr_28634[(20)] = inst_28531);

(statearr_28634[(12)] = inst_28534);

(statearr_28634[(30)] = inst_28525);

(statearr_28634[(29)] = inst_28523__$1);

(statearr_28634[(21)] = inst_28533);

return statearr_28634;
})();
var statearr_28635_28704 = state_28591__$1;
(statearr_28635_28704[(2)] = null);

(statearr_28635_28704[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28592 === (28))){
var inst_28531 = (state_28591[(20)]);
var inst_28550 = (state_28591[(25)]);
var inst_28550__$1 = cljs.core.seq.call(null,inst_28531);
var state_28591__$1 = (function (){var statearr_28636 = state_28591;
(statearr_28636[(25)] = inst_28550__$1);

return statearr_28636;
})();
if(inst_28550__$1){
var statearr_28637_28705 = state_28591__$1;
(statearr_28637_28705[(1)] = (33));

} else {
var statearr_28638_28706 = state_28591__$1;
(statearr_28638_28706[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28592 === (25))){
var inst_28534 = (state_28591[(12)]);
var inst_28533 = (state_28591[(21)]);
var inst_28536 = (inst_28534 < inst_28533);
var inst_28537 = inst_28536;
var state_28591__$1 = state_28591;
if(cljs.core.truth_(inst_28537)){
var statearr_28639_28707 = state_28591__$1;
(statearr_28639_28707[(1)] = (27));

} else {
var statearr_28640_28708 = state_28591__$1;
(statearr_28640_28708[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28592 === (34))){
var state_28591__$1 = state_28591;
var statearr_28641_28709 = state_28591__$1;
(statearr_28641_28709[(2)] = null);

(statearr_28641_28709[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28592 === (17))){
var state_28591__$1 = state_28591;
var statearr_28642_28710 = state_28591__$1;
(statearr_28642_28710[(2)] = null);

(statearr_28642_28710[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28592 === (3))){
var inst_28589 = (state_28591[(2)]);
var state_28591__$1 = state_28591;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28591__$1,inst_28589);
} else {
if((state_val_28592 === (12))){
var inst_28518 = (state_28591[(2)]);
var state_28591__$1 = state_28591;
var statearr_28643_28711 = state_28591__$1;
(statearr_28643_28711[(2)] = inst_28518);

(statearr_28643_28711[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28592 === (2))){
var state_28591__$1 = state_28591;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28591__$1,(4),ch);
} else {
if((state_val_28592 === (23))){
var state_28591__$1 = state_28591;
var statearr_28644_28712 = state_28591__$1;
(statearr_28644_28712[(2)] = null);

(statearr_28644_28712[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28592 === (35))){
var inst_28573 = (state_28591[(2)]);
var state_28591__$1 = state_28591;
var statearr_28645_28713 = state_28591__$1;
(statearr_28645_28713[(2)] = inst_28573);

(statearr_28645_28713[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28592 === (19))){
var inst_28490 = (state_28591[(7)]);
var inst_28494 = cljs.core.chunk_first.call(null,inst_28490);
var inst_28495 = cljs.core.chunk_rest.call(null,inst_28490);
var inst_28496 = cljs.core.count.call(null,inst_28494);
var inst_28468 = inst_28495;
var inst_28469 = inst_28494;
var inst_28470 = inst_28496;
var inst_28471 = (0);
var state_28591__$1 = (function (){var statearr_28646 = state_28591;
(statearr_28646[(13)] = inst_28471);

(statearr_28646[(15)] = inst_28470);

(statearr_28646[(16)] = inst_28469);

(statearr_28646[(17)] = inst_28468);

return statearr_28646;
})();
var statearr_28647_28714 = state_28591__$1;
(statearr_28647_28714[(2)] = null);

(statearr_28647_28714[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28592 === (11))){
var inst_28490 = (state_28591[(7)]);
var inst_28468 = (state_28591[(17)]);
var inst_28490__$1 = cljs.core.seq.call(null,inst_28468);
var state_28591__$1 = (function (){var statearr_28648 = state_28591;
(statearr_28648[(7)] = inst_28490__$1);

return statearr_28648;
})();
if(inst_28490__$1){
var statearr_28649_28715 = state_28591__$1;
(statearr_28649_28715[(1)] = (16));

} else {
var statearr_28650_28716 = state_28591__$1;
(statearr_28650_28716[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28592 === (9))){
var inst_28520 = (state_28591[(2)]);
var state_28591__$1 = state_28591;
var statearr_28651_28717 = state_28591__$1;
(statearr_28651_28717[(2)] = inst_28520);

(statearr_28651_28717[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28592 === (5))){
var inst_28466 = cljs.core.deref.call(null,cs);
var inst_28467 = cljs.core.seq.call(null,inst_28466);
var inst_28468 = inst_28467;
var inst_28469 = null;
var inst_28470 = (0);
var inst_28471 = (0);
var state_28591__$1 = (function (){var statearr_28652 = state_28591;
(statearr_28652[(13)] = inst_28471);

(statearr_28652[(15)] = inst_28470);

(statearr_28652[(16)] = inst_28469);

(statearr_28652[(17)] = inst_28468);

return statearr_28652;
})();
var statearr_28653_28718 = state_28591__$1;
(statearr_28653_28718[(2)] = null);

(statearr_28653_28718[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28592 === (14))){
var state_28591__$1 = state_28591;
var statearr_28654_28719 = state_28591__$1;
(statearr_28654_28719[(2)] = null);

(statearr_28654_28719[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28592 === (45))){
var inst_28581 = (state_28591[(2)]);
var state_28591__$1 = state_28591;
var statearr_28655_28720 = state_28591__$1;
(statearr_28655_28720[(2)] = inst_28581);

(statearr_28655_28720[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28592 === (26))){
var inst_28523 = (state_28591[(29)]);
var inst_28577 = (state_28591[(2)]);
var inst_28578 = cljs.core.seq.call(null,inst_28523);
var state_28591__$1 = (function (){var statearr_28656 = state_28591;
(statearr_28656[(31)] = inst_28577);

return statearr_28656;
})();
if(inst_28578){
var statearr_28657_28721 = state_28591__$1;
(statearr_28657_28721[(1)] = (42));

} else {
var statearr_28658_28722 = state_28591__$1;
(statearr_28658_28722[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28592 === (16))){
var inst_28490 = (state_28591[(7)]);
var inst_28492 = cljs.core.chunked_seq_QMARK_.call(null,inst_28490);
var state_28591__$1 = state_28591;
if(inst_28492){
var statearr_28659_28723 = state_28591__$1;
(statearr_28659_28723[(1)] = (19));

} else {
var statearr_28660_28724 = state_28591__$1;
(statearr_28660_28724[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28592 === (38))){
var inst_28570 = (state_28591[(2)]);
var state_28591__$1 = state_28591;
var statearr_28661_28725 = state_28591__$1;
(statearr_28661_28725[(2)] = inst_28570);

(statearr_28661_28725[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28592 === (30))){
var state_28591__$1 = state_28591;
var statearr_28662_28726 = state_28591__$1;
(statearr_28662_28726[(2)] = null);

(statearr_28662_28726[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28592 === (10))){
var inst_28471 = (state_28591[(13)]);
var inst_28469 = (state_28591[(16)]);
var inst_28479 = cljs.core._nth.call(null,inst_28469,inst_28471);
var inst_28480 = cljs.core.nth.call(null,inst_28479,(0),null);
var inst_28481 = cljs.core.nth.call(null,inst_28479,(1),null);
var state_28591__$1 = (function (){var statearr_28663 = state_28591;
(statearr_28663[(26)] = inst_28480);

return statearr_28663;
})();
if(cljs.core.truth_(inst_28481)){
var statearr_28664_28727 = state_28591__$1;
(statearr_28664_28727[(1)] = (13));

} else {
var statearr_28665_28728 = state_28591__$1;
(statearr_28665_28728[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28592 === (18))){
var inst_28516 = (state_28591[(2)]);
var state_28591__$1 = state_28591;
var statearr_28666_28729 = state_28591__$1;
(statearr_28666_28729[(2)] = inst_28516);

(statearr_28666_28729[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28592 === (42))){
var state_28591__$1 = state_28591;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28591__$1,(45),dchan);
} else {
if((state_val_28592 === (37))){
var inst_28459 = (state_28591[(9)]);
var inst_28550 = (state_28591[(25)]);
var inst_28559 = (state_28591[(23)]);
var inst_28559__$1 = cljs.core.first.call(null,inst_28550);
var inst_28560 = cljs.core.async.put_BANG_.call(null,inst_28559__$1,inst_28459,done);
var state_28591__$1 = (function (){var statearr_28667 = state_28591;
(statearr_28667[(23)] = inst_28559__$1);

return statearr_28667;
})();
if(cljs.core.truth_(inst_28560)){
var statearr_28668_28730 = state_28591__$1;
(statearr_28668_28730[(1)] = (39));

} else {
var statearr_28669_28731 = state_28591__$1;
(statearr_28669_28731[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28592 === (8))){
var inst_28471 = (state_28591[(13)]);
var inst_28470 = (state_28591[(15)]);
var inst_28473 = (inst_28471 < inst_28470);
var inst_28474 = inst_28473;
var state_28591__$1 = state_28591;
if(cljs.core.truth_(inst_28474)){
var statearr_28670_28732 = state_28591__$1;
(statearr_28670_28732[(1)] = (10));

} else {
var statearr_28671_28733 = state_28591__$1;
(statearr_28671_28733[(1)] = (11));

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
});})(c__27356__auto___28679,cs,m,dchan,dctr,done))
;
return ((function (switch__27244__auto__,c__27356__auto___28679,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__27245__auto__ = null;
var cljs$core$async$mult_$_state_machine__27245__auto____0 = (function (){
var statearr_28675 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28675[(0)] = cljs$core$async$mult_$_state_machine__27245__auto__);

(statearr_28675[(1)] = (1));

return statearr_28675;
});
var cljs$core$async$mult_$_state_machine__27245__auto____1 = (function (state_28591){
while(true){
var ret_value__27246__auto__ = (function (){try{while(true){
var result__27247__auto__ = switch__27244__auto__.call(null,state_28591);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27247__auto__;
}
break;
}
}catch (e28676){if((e28676 instanceof Object)){
var ex__27248__auto__ = e28676;
var statearr_28677_28734 = state_28591;
(statearr_28677_28734[(5)] = ex__27248__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28591);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28676;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28735 = state_28591;
state_28591 = G__28735;
continue;
} else {
return ret_value__27246__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__27245__auto__ = function(state_28591){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__27245__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__27245__auto____1.call(this,state_28591);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__27245__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__27245__auto____0;
cljs$core$async$mult_$_state_machine__27245__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__27245__auto____1;
return cljs$core$async$mult_$_state_machine__27245__auto__;
})()
;})(switch__27244__auto__,c__27356__auto___28679,cs,m,dchan,dctr,done))
})();
var state__27358__auto__ = (function (){var statearr_28678 = f__27357__auto__.call(null);
(statearr_28678[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27356__auto___28679);

return statearr_28678;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27358__auto__);
});})(c__27356__auto___28679,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args28736 = [];
var len__26259__auto___28739 = arguments.length;
var i__26260__auto___28740 = (0);
while(true){
if((i__26260__auto___28740 < len__26259__auto___28739)){
args28736.push((arguments[i__26260__auto___28740]));

var G__28741 = (i__26260__auto___28740 + (1));
i__26260__auto___28740 = G__28741;
continue;
} else {
}
break;
}

var G__28738 = args28736.length;
switch (G__28738) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28736.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__25814__auto__ = (((m == null))?null:m);
var m__25815__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__25814__auto__)]);
if(!((m__25815__auto__ == null))){
return m__25815__auto__.call(null,m,ch);
} else {
var m__25815__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__25815__auto____$1 == null))){
return m__25815__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__25814__auto__ = (((m == null))?null:m);
var m__25815__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__25814__auto__)]);
if(!((m__25815__auto__ == null))){
return m__25815__auto__.call(null,m,ch);
} else {
var m__25815__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__25815__auto____$1 == null))){
return m__25815__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__25814__auto__ = (((m == null))?null:m);
var m__25815__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__25814__auto__)]);
if(!((m__25815__auto__ == null))){
return m__25815__auto__.call(null,m);
} else {
var m__25815__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__25815__auto____$1 == null))){
return m__25815__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__25814__auto__ = (((m == null))?null:m);
var m__25815__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__25814__auto__)]);
if(!((m__25815__auto__ == null))){
return m__25815__auto__.call(null,m,state_map);
} else {
var m__25815__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__25815__auto____$1 == null))){
return m__25815__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__25814__auto__ = (((m == null))?null:m);
var m__25815__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__25814__auto__)]);
if(!((m__25815__auto__ == null))){
return m__25815__auto__.call(null,m,mode);
} else {
var m__25815__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__25815__auto____$1 == null))){
return m__25815__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__26266__auto__ = [];
var len__26259__auto___28753 = arguments.length;
var i__26260__auto___28754 = (0);
while(true){
if((i__26260__auto___28754 < len__26259__auto___28753)){
args__26266__auto__.push((arguments[i__26260__auto___28754]));

var G__28755 = (i__26260__auto___28754 + (1));
i__26260__auto___28754 = G__28755;
continue;
} else {
}
break;
}

var argseq__26267__auto__ = ((((3) < args__26266__auto__.length))?(new cljs.core.IndexedSeq(args__26266__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26267__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28747){
var map__28748 = p__28747;
var map__28748__$1 = ((((!((map__28748 == null)))?((((map__28748.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28748.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28748):map__28748);
var opts = map__28748__$1;
var statearr_28750_28756 = state;
(statearr_28750_28756[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__28748,map__28748__$1,opts){
return (function (val){
var statearr_28751_28757 = state;
(statearr_28751_28757[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__28748,map__28748__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_28752_28758 = state;
(statearr_28752_28758[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28743){
var G__28744 = cljs.core.first.call(null,seq28743);
var seq28743__$1 = cljs.core.next.call(null,seq28743);
var G__28745 = cljs.core.first.call(null,seq28743__$1);
var seq28743__$2 = cljs.core.next.call(null,seq28743__$1);
var G__28746 = cljs.core.first.call(null,seq28743__$2);
var seq28743__$3 = cljs.core.next.call(null,seq28743__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28744,G__28745,G__28746,seq28743__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async28926 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28926 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta28927){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta28927 = meta28927;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28926.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28928,meta28927__$1){
var self__ = this;
var _28928__$1 = this;
return (new cljs.core.async.t_cljs$core$async28926(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta28927__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28926.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28928){
var self__ = this;
var _28928__$1 = this;
return self__.meta28927;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28926.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28926.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28926.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28926.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28926.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28926.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28926.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28926.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("mode must be one of: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28926.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta28927","meta28927",-1651467621,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28926.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28926.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28926";

cljs.core.async.t_cljs$core$async28926.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25757__auto__,writer__25758__auto__,opt__25759__auto__){
return cljs.core._write.call(null,writer__25758__auto__,"cljs.core.async/t_cljs$core$async28926");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async28926 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async28926(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta28927){
return (new cljs.core.async.t_cljs$core$async28926(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta28927));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async28926(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27356__auto___29093 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27356__auto___29093,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__27357__auto__ = (function (){var switch__27244__auto__ = ((function (c__27356__auto___29093,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_29030){
var state_val_29031 = (state_29030[(1)]);
if((state_val_29031 === (7))){
var inst_28945 = (state_29030[(2)]);
var state_29030__$1 = state_29030;
var statearr_29032_29094 = state_29030__$1;
(statearr_29032_29094[(2)] = inst_28945);

(statearr_29032_29094[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29031 === (20))){
var inst_28957 = (state_29030[(7)]);
var state_29030__$1 = state_29030;
var statearr_29033_29095 = state_29030__$1;
(statearr_29033_29095[(2)] = inst_28957);

(statearr_29033_29095[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29031 === (27))){
var state_29030__$1 = state_29030;
var statearr_29034_29096 = state_29030__$1;
(statearr_29034_29096[(2)] = null);

(statearr_29034_29096[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29031 === (1))){
var inst_28932 = (state_29030[(8)]);
var inst_28932__$1 = calc_state.call(null);
var inst_28934 = (inst_28932__$1 == null);
var inst_28935 = cljs.core.not.call(null,inst_28934);
var state_29030__$1 = (function (){var statearr_29035 = state_29030;
(statearr_29035[(8)] = inst_28932__$1);

return statearr_29035;
})();
if(inst_28935){
var statearr_29036_29097 = state_29030__$1;
(statearr_29036_29097[(1)] = (2));

} else {
var statearr_29037_29098 = state_29030__$1;
(statearr_29037_29098[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29031 === (24))){
var inst_29004 = (state_29030[(9)]);
var inst_28990 = (state_29030[(10)]);
var inst_28981 = (state_29030[(11)]);
var inst_29004__$1 = inst_28981.call(null,inst_28990);
var state_29030__$1 = (function (){var statearr_29038 = state_29030;
(statearr_29038[(9)] = inst_29004__$1);

return statearr_29038;
})();
if(cljs.core.truth_(inst_29004__$1)){
var statearr_29039_29099 = state_29030__$1;
(statearr_29039_29099[(1)] = (29));

} else {
var statearr_29040_29100 = state_29030__$1;
(statearr_29040_29100[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29031 === (4))){
var inst_28948 = (state_29030[(2)]);
var state_29030__$1 = state_29030;
if(cljs.core.truth_(inst_28948)){
var statearr_29041_29101 = state_29030__$1;
(statearr_29041_29101[(1)] = (8));

} else {
var statearr_29042_29102 = state_29030__$1;
(statearr_29042_29102[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29031 === (15))){
var inst_28975 = (state_29030[(2)]);
var state_29030__$1 = state_29030;
if(cljs.core.truth_(inst_28975)){
var statearr_29043_29103 = state_29030__$1;
(statearr_29043_29103[(1)] = (19));

} else {
var statearr_29044_29104 = state_29030__$1;
(statearr_29044_29104[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29031 === (21))){
var inst_28980 = (state_29030[(12)]);
var inst_28980__$1 = (state_29030[(2)]);
var inst_28981 = cljs.core.get.call(null,inst_28980__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28982 = cljs.core.get.call(null,inst_28980__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28983 = cljs.core.get.call(null,inst_28980__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_29030__$1 = (function (){var statearr_29045 = state_29030;
(statearr_29045[(13)] = inst_28982);

(statearr_29045[(12)] = inst_28980__$1);

(statearr_29045[(11)] = inst_28981);

return statearr_29045;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_29030__$1,(22),inst_28983);
} else {
if((state_val_29031 === (31))){
var inst_29012 = (state_29030[(2)]);
var state_29030__$1 = state_29030;
if(cljs.core.truth_(inst_29012)){
var statearr_29046_29105 = state_29030__$1;
(statearr_29046_29105[(1)] = (32));

} else {
var statearr_29047_29106 = state_29030__$1;
(statearr_29047_29106[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29031 === (32))){
var inst_28989 = (state_29030[(14)]);
var state_29030__$1 = state_29030;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29030__$1,(35),out,inst_28989);
} else {
if((state_val_29031 === (33))){
var inst_28980 = (state_29030[(12)]);
var inst_28957 = inst_28980;
var state_29030__$1 = (function (){var statearr_29048 = state_29030;
(statearr_29048[(7)] = inst_28957);

return statearr_29048;
})();
var statearr_29049_29107 = state_29030__$1;
(statearr_29049_29107[(2)] = null);

(statearr_29049_29107[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29031 === (13))){
var inst_28957 = (state_29030[(7)]);
var inst_28964 = inst_28957.cljs$lang$protocol_mask$partition0$;
var inst_28965 = (inst_28964 & (64));
var inst_28966 = inst_28957.cljs$core$ISeq$;
var inst_28967 = (cljs.core.PROTOCOL_SENTINEL === inst_28966);
var inst_28968 = (inst_28965) || (inst_28967);
var state_29030__$1 = state_29030;
if(cljs.core.truth_(inst_28968)){
var statearr_29050_29108 = state_29030__$1;
(statearr_29050_29108[(1)] = (16));

} else {
var statearr_29051_29109 = state_29030__$1;
(statearr_29051_29109[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29031 === (22))){
var inst_28989 = (state_29030[(14)]);
var inst_28990 = (state_29030[(10)]);
var inst_28988 = (state_29030[(2)]);
var inst_28989__$1 = cljs.core.nth.call(null,inst_28988,(0),null);
var inst_28990__$1 = cljs.core.nth.call(null,inst_28988,(1),null);
var inst_28991 = (inst_28989__$1 == null);
var inst_28992 = cljs.core._EQ_.call(null,inst_28990__$1,change);
var inst_28993 = (inst_28991) || (inst_28992);
var state_29030__$1 = (function (){var statearr_29052 = state_29030;
(statearr_29052[(14)] = inst_28989__$1);

(statearr_29052[(10)] = inst_28990__$1);

return statearr_29052;
})();
if(cljs.core.truth_(inst_28993)){
var statearr_29053_29110 = state_29030__$1;
(statearr_29053_29110[(1)] = (23));

} else {
var statearr_29054_29111 = state_29030__$1;
(statearr_29054_29111[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29031 === (36))){
var inst_28980 = (state_29030[(12)]);
var inst_28957 = inst_28980;
var state_29030__$1 = (function (){var statearr_29055 = state_29030;
(statearr_29055[(7)] = inst_28957);

return statearr_29055;
})();
var statearr_29056_29112 = state_29030__$1;
(statearr_29056_29112[(2)] = null);

(statearr_29056_29112[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29031 === (29))){
var inst_29004 = (state_29030[(9)]);
var state_29030__$1 = state_29030;
var statearr_29057_29113 = state_29030__$1;
(statearr_29057_29113[(2)] = inst_29004);

(statearr_29057_29113[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29031 === (6))){
var state_29030__$1 = state_29030;
var statearr_29058_29114 = state_29030__$1;
(statearr_29058_29114[(2)] = false);

(statearr_29058_29114[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29031 === (28))){
var inst_29000 = (state_29030[(2)]);
var inst_29001 = calc_state.call(null);
var inst_28957 = inst_29001;
var state_29030__$1 = (function (){var statearr_29059 = state_29030;
(statearr_29059[(15)] = inst_29000);

(statearr_29059[(7)] = inst_28957);

return statearr_29059;
})();
var statearr_29060_29115 = state_29030__$1;
(statearr_29060_29115[(2)] = null);

(statearr_29060_29115[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29031 === (25))){
var inst_29026 = (state_29030[(2)]);
var state_29030__$1 = state_29030;
var statearr_29061_29116 = state_29030__$1;
(statearr_29061_29116[(2)] = inst_29026);

(statearr_29061_29116[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29031 === (34))){
var inst_29024 = (state_29030[(2)]);
var state_29030__$1 = state_29030;
var statearr_29062_29117 = state_29030__$1;
(statearr_29062_29117[(2)] = inst_29024);

(statearr_29062_29117[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29031 === (17))){
var state_29030__$1 = state_29030;
var statearr_29063_29118 = state_29030__$1;
(statearr_29063_29118[(2)] = false);

(statearr_29063_29118[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29031 === (3))){
var state_29030__$1 = state_29030;
var statearr_29064_29119 = state_29030__$1;
(statearr_29064_29119[(2)] = false);

(statearr_29064_29119[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29031 === (12))){
var inst_29028 = (state_29030[(2)]);
var state_29030__$1 = state_29030;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29030__$1,inst_29028);
} else {
if((state_val_29031 === (2))){
var inst_28932 = (state_29030[(8)]);
var inst_28937 = inst_28932.cljs$lang$protocol_mask$partition0$;
var inst_28938 = (inst_28937 & (64));
var inst_28939 = inst_28932.cljs$core$ISeq$;
var inst_28940 = (cljs.core.PROTOCOL_SENTINEL === inst_28939);
var inst_28941 = (inst_28938) || (inst_28940);
var state_29030__$1 = state_29030;
if(cljs.core.truth_(inst_28941)){
var statearr_29065_29120 = state_29030__$1;
(statearr_29065_29120[(1)] = (5));

} else {
var statearr_29066_29121 = state_29030__$1;
(statearr_29066_29121[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29031 === (23))){
var inst_28989 = (state_29030[(14)]);
var inst_28995 = (inst_28989 == null);
var state_29030__$1 = state_29030;
if(cljs.core.truth_(inst_28995)){
var statearr_29067_29122 = state_29030__$1;
(statearr_29067_29122[(1)] = (26));

} else {
var statearr_29068_29123 = state_29030__$1;
(statearr_29068_29123[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29031 === (35))){
var inst_29015 = (state_29030[(2)]);
var state_29030__$1 = state_29030;
if(cljs.core.truth_(inst_29015)){
var statearr_29069_29124 = state_29030__$1;
(statearr_29069_29124[(1)] = (36));

} else {
var statearr_29070_29125 = state_29030__$1;
(statearr_29070_29125[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29031 === (19))){
var inst_28957 = (state_29030[(7)]);
var inst_28977 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28957);
var state_29030__$1 = state_29030;
var statearr_29071_29126 = state_29030__$1;
(statearr_29071_29126[(2)] = inst_28977);

(statearr_29071_29126[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29031 === (11))){
var inst_28957 = (state_29030[(7)]);
var inst_28961 = (inst_28957 == null);
var inst_28962 = cljs.core.not.call(null,inst_28961);
var state_29030__$1 = state_29030;
if(inst_28962){
var statearr_29072_29127 = state_29030__$1;
(statearr_29072_29127[(1)] = (13));

} else {
var statearr_29073_29128 = state_29030__$1;
(statearr_29073_29128[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29031 === (9))){
var inst_28932 = (state_29030[(8)]);
var state_29030__$1 = state_29030;
var statearr_29074_29129 = state_29030__$1;
(statearr_29074_29129[(2)] = inst_28932);

(statearr_29074_29129[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29031 === (5))){
var state_29030__$1 = state_29030;
var statearr_29075_29130 = state_29030__$1;
(statearr_29075_29130[(2)] = true);

(statearr_29075_29130[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29031 === (14))){
var state_29030__$1 = state_29030;
var statearr_29076_29131 = state_29030__$1;
(statearr_29076_29131[(2)] = false);

(statearr_29076_29131[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29031 === (26))){
var inst_28990 = (state_29030[(10)]);
var inst_28997 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28990);
var state_29030__$1 = state_29030;
var statearr_29077_29132 = state_29030__$1;
(statearr_29077_29132[(2)] = inst_28997);

(statearr_29077_29132[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29031 === (16))){
var state_29030__$1 = state_29030;
var statearr_29078_29133 = state_29030__$1;
(statearr_29078_29133[(2)] = true);

(statearr_29078_29133[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29031 === (38))){
var inst_29020 = (state_29030[(2)]);
var state_29030__$1 = state_29030;
var statearr_29079_29134 = state_29030__$1;
(statearr_29079_29134[(2)] = inst_29020);

(statearr_29079_29134[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29031 === (30))){
var inst_28982 = (state_29030[(13)]);
var inst_28990 = (state_29030[(10)]);
var inst_28981 = (state_29030[(11)]);
var inst_29007 = cljs.core.empty_QMARK_.call(null,inst_28981);
var inst_29008 = inst_28982.call(null,inst_28990);
var inst_29009 = cljs.core.not.call(null,inst_29008);
var inst_29010 = (inst_29007) && (inst_29009);
var state_29030__$1 = state_29030;
var statearr_29080_29135 = state_29030__$1;
(statearr_29080_29135[(2)] = inst_29010);

(statearr_29080_29135[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29031 === (10))){
var inst_28932 = (state_29030[(8)]);
var inst_28953 = (state_29030[(2)]);
var inst_28954 = cljs.core.get.call(null,inst_28953,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28955 = cljs.core.get.call(null,inst_28953,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28956 = cljs.core.get.call(null,inst_28953,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28957 = inst_28932;
var state_29030__$1 = (function (){var statearr_29081 = state_29030;
(statearr_29081[(16)] = inst_28955);

(statearr_29081[(7)] = inst_28957);

(statearr_29081[(17)] = inst_28954);

(statearr_29081[(18)] = inst_28956);

return statearr_29081;
})();
var statearr_29082_29136 = state_29030__$1;
(statearr_29082_29136[(2)] = null);

(statearr_29082_29136[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29031 === (18))){
var inst_28972 = (state_29030[(2)]);
var state_29030__$1 = state_29030;
var statearr_29083_29137 = state_29030__$1;
(statearr_29083_29137[(2)] = inst_28972);

(statearr_29083_29137[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29031 === (37))){
var state_29030__$1 = state_29030;
var statearr_29084_29138 = state_29030__$1;
(statearr_29084_29138[(2)] = null);

(statearr_29084_29138[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29031 === (8))){
var inst_28932 = (state_29030[(8)]);
var inst_28950 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28932);
var state_29030__$1 = state_29030;
var statearr_29085_29139 = state_29030__$1;
(statearr_29085_29139[(2)] = inst_28950);

(statearr_29085_29139[(1)] = (10));


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
});})(c__27356__auto___29093,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__27244__auto__,c__27356__auto___29093,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__27245__auto__ = null;
var cljs$core$async$mix_$_state_machine__27245__auto____0 = (function (){
var statearr_29089 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29089[(0)] = cljs$core$async$mix_$_state_machine__27245__auto__);

(statearr_29089[(1)] = (1));

return statearr_29089;
});
var cljs$core$async$mix_$_state_machine__27245__auto____1 = (function (state_29030){
while(true){
var ret_value__27246__auto__ = (function (){try{while(true){
var result__27247__auto__ = switch__27244__auto__.call(null,state_29030);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27247__auto__;
}
break;
}
}catch (e29090){if((e29090 instanceof Object)){
var ex__27248__auto__ = e29090;
var statearr_29091_29140 = state_29030;
(statearr_29091_29140[(5)] = ex__27248__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29030);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29090;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29141 = state_29030;
state_29030 = G__29141;
continue;
} else {
return ret_value__27246__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__27245__auto__ = function(state_29030){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__27245__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__27245__auto____1.call(this,state_29030);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__27245__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__27245__auto____0;
cljs$core$async$mix_$_state_machine__27245__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__27245__auto____1;
return cljs$core$async$mix_$_state_machine__27245__auto__;
})()
;})(switch__27244__auto__,c__27356__auto___29093,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__27358__auto__ = (function (){var statearr_29092 = f__27357__auto__.call(null);
(statearr_29092[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27356__auto___29093);

return statearr_29092;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27358__auto__);
});})(c__27356__auto___29093,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__25814__auto__ = (((p == null))?null:p);
var m__25815__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__25814__auto__)]);
if(!((m__25815__auto__ == null))){
return m__25815__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__25815__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__25815__auto____$1 == null))){
return m__25815__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__25814__auto__ = (((p == null))?null:p);
var m__25815__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__25814__auto__)]);
if(!((m__25815__auto__ == null))){
return m__25815__auto__.call(null,p,v,ch);
} else {
var m__25815__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__25815__auto____$1 == null))){
return m__25815__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args29142 = [];
var len__26259__auto___29145 = arguments.length;
var i__26260__auto___29146 = (0);
while(true){
if((i__26260__auto___29146 < len__26259__auto___29145)){
args29142.push((arguments[i__26260__auto___29146]));

var G__29147 = (i__26260__auto___29146 + (1));
i__26260__auto___29146 = G__29147;
continue;
} else {
}
break;
}

var G__29144 = args29142.length;
switch (G__29144) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29142.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__25814__auto__ = (((p == null))?null:p);
var m__25815__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25814__auto__)]);
if(!((m__25815__auto__ == null))){
return m__25815__auto__.call(null,p);
} else {
var m__25815__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25815__auto____$1 == null))){
return m__25815__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__25814__auto__ = (((p == null))?null:p);
var m__25815__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25814__auto__)]);
if(!((m__25815__auto__ == null))){
return m__25815__auto__.call(null,p,v);
} else {
var m__25815__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25815__auto____$1 == null))){
return m__25815__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args29150 = [];
var len__26259__auto___29275 = arguments.length;
var i__26260__auto___29276 = (0);
while(true){
if((i__26260__auto___29276 < len__26259__auto___29275)){
args29150.push((arguments[i__26260__auto___29276]));

var G__29277 = (i__26260__auto___29276 + (1));
i__26260__auto___29276 = G__29277;
continue;
} else {
}
break;
}

var G__29152 = args29150.length;
switch (G__29152) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29150.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__25146__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__25146__auto__)){
return or__25146__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__25146__auto__,mults){
return (function (p1__29149_SHARP_){
if(cljs.core.truth_(p1__29149_SHARP_.call(null,topic))){
return p1__29149_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__29149_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__25146__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async29153 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29153 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta29154){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta29154 = meta29154;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29153.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_29155,meta29154__$1){
var self__ = this;
var _29155__$1 = this;
return (new cljs.core.async.t_cljs$core$async29153(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta29154__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29153.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_29155){
var self__ = this;
var _29155__$1 = this;
return self__.meta29154;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29153.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29153.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29153.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29153.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29153.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29153.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29153.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29153.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta29154","meta29154",248414602,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29153.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29153.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29153";

cljs.core.async.t_cljs$core$async29153.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25757__auto__,writer__25758__auto__,opt__25759__auto__){
return cljs.core._write.call(null,writer__25758__auto__,"cljs.core.async/t_cljs$core$async29153");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async29153 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async29153(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29154){
return (new cljs.core.async.t_cljs$core$async29153(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29154));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async29153(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27356__auto___29279 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27356__auto___29279,mults,ensure_mult,p){
return (function (){
var f__27357__auto__ = (function (){var switch__27244__auto__ = ((function (c__27356__auto___29279,mults,ensure_mult,p){
return (function (state_29227){
var state_val_29228 = (state_29227[(1)]);
if((state_val_29228 === (7))){
var inst_29223 = (state_29227[(2)]);
var state_29227__$1 = state_29227;
var statearr_29229_29280 = state_29227__$1;
(statearr_29229_29280[(2)] = inst_29223);

(statearr_29229_29280[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29228 === (20))){
var state_29227__$1 = state_29227;
var statearr_29230_29281 = state_29227__$1;
(statearr_29230_29281[(2)] = null);

(statearr_29230_29281[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29228 === (1))){
var state_29227__$1 = state_29227;
var statearr_29231_29282 = state_29227__$1;
(statearr_29231_29282[(2)] = null);

(statearr_29231_29282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29228 === (24))){
var inst_29206 = (state_29227[(7)]);
var inst_29215 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_29206);
var state_29227__$1 = state_29227;
var statearr_29232_29283 = state_29227__$1;
(statearr_29232_29283[(2)] = inst_29215);

(statearr_29232_29283[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29228 === (4))){
var inst_29158 = (state_29227[(8)]);
var inst_29158__$1 = (state_29227[(2)]);
var inst_29159 = (inst_29158__$1 == null);
var state_29227__$1 = (function (){var statearr_29233 = state_29227;
(statearr_29233[(8)] = inst_29158__$1);

return statearr_29233;
})();
if(cljs.core.truth_(inst_29159)){
var statearr_29234_29284 = state_29227__$1;
(statearr_29234_29284[(1)] = (5));

} else {
var statearr_29235_29285 = state_29227__$1;
(statearr_29235_29285[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29228 === (15))){
var inst_29200 = (state_29227[(2)]);
var state_29227__$1 = state_29227;
var statearr_29236_29286 = state_29227__$1;
(statearr_29236_29286[(2)] = inst_29200);

(statearr_29236_29286[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29228 === (21))){
var inst_29220 = (state_29227[(2)]);
var state_29227__$1 = (function (){var statearr_29237 = state_29227;
(statearr_29237[(9)] = inst_29220);

return statearr_29237;
})();
var statearr_29238_29287 = state_29227__$1;
(statearr_29238_29287[(2)] = null);

(statearr_29238_29287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29228 === (13))){
var inst_29182 = (state_29227[(10)]);
var inst_29184 = cljs.core.chunked_seq_QMARK_.call(null,inst_29182);
var state_29227__$1 = state_29227;
if(inst_29184){
var statearr_29239_29288 = state_29227__$1;
(statearr_29239_29288[(1)] = (16));

} else {
var statearr_29240_29289 = state_29227__$1;
(statearr_29240_29289[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29228 === (22))){
var inst_29212 = (state_29227[(2)]);
var state_29227__$1 = state_29227;
if(cljs.core.truth_(inst_29212)){
var statearr_29241_29290 = state_29227__$1;
(statearr_29241_29290[(1)] = (23));

} else {
var statearr_29242_29291 = state_29227__$1;
(statearr_29242_29291[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29228 === (6))){
var inst_29158 = (state_29227[(8)]);
var inst_29206 = (state_29227[(7)]);
var inst_29208 = (state_29227[(11)]);
var inst_29206__$1 = topic_fn.call(null,inst_29158);
var inst_29207 = cljs.core.deref.call(null,mults);
var inst_29208__$1 = cljs.core.get.call(null,inst_29207,inst_29206__$1);
var state_29227__$1 = (function (){var statearr_29243 = state_29227;
(statearr_29243[(7)] = inst_29206__$1);

(statearr_29243[(11)] = inst_29208__$1);

return statearr_29243;
})();
if(cljs.core.truth_(inst_29208__$1)){
var statearr_29244_29292 = state_29227__$1;
(statearr_29244_29292[(1)] = (19));

} else {
var statearr_29245_29293 = state_29227__$1;
(statearr_29245_29293[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29228 === (25))){
var inst_29217 = (state_29227[(2)]);
var state_29227__$1 = state_29227;
var statearr_29246_29294 = state_29227__$1;
(statearr_29246_29294[(2)] = inst_29217);

(statearr_29246_29294[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29228 === (17))){
var inst_29182 = (state_29227[(10)]);
var inst_29191 = cljs.core.first.call(null,inst_29182);
var inst_29192 = cljs.core.async.muxch_STAR_.call(null,inst_29191);
var inst_29193 = cljs.core.async.close_BANG_.call(null,inst_29192);
var inst_29194 = cljs.core.next.call(null,inst_29182);
var inst_29168 = inst_29194;
var inst_29169 = null;
var inst_29170 = (0);
var inst_29171 = (0);
var state_29227__$1 = (function (){var statearr_29247 = state_29227;
(statearr_29247[(12)] = inst_29171);

(statearr_29247[(13)] = inst_29193);

(statearr_29247[(14)] = inst_29168);

(statearr_29247[(15)] = inst_29170);

(statearr_29247[(16)] = inst_29169);

return statearr_29247;
})();
var statearr_29248_29295 = state_29227__$1;
(statearr_29248_29295[(2)] = null);

(statearr_29248_29295[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29228 === (3))){
var inst_29225 = (state_29227[(2)]);
var state_29227__$1 = state_29227;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29227__$1,inst_29225);
} else {
if((state_val_29228 === (12))){
var inst_29202 = (state_29227[(2)]);
var state_29227__$1 = state_29227;
var statearr_29249_29296 = state_29227__$1;
(statearr_29249_29296[(2)] = inst_29202);

(statearr_29249_29296[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29228 === (2))){
var state_29227__$1 = state_29227;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29227__$1,(4),ch);
} else {
if((state_val_29228 === (23))){
var state_29227__$1 = state_29227;
var statearr_29250_29297 = state_29227__$1;
(statearr_29250_29297[(2)] = null);

(statearr_29250_29297[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29228 === (19))){
var inst_29158 = (state_29227[(8)]);
var inst_29208 = (state_29227[(11)]);
var inst_29210 = cljs.core.async.muxch_STAR_.call(null,inst_29208);
var state_29227__$1 = state_29227;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29227__$1,(22),inst_29210,inst_29158);
} else {
if((state_val_29228 === (11))){
var inst_29182 = (state_29227[(10)]);
var inst_29168 = (state_29227[(14)]);
var inst_29182__$1 = cljs.core.seq.call(null,inst_29168);
var state_29227__$1 = (function (){var statearr_29251 = state_29227;
(statearr_29251[(10)] = inst_29182__$1);

return statearr_29251;
})();
if(inst_29182__$1){
var statearr_29252_29298 = state_29227__$1;
(statearr_29252_29298[(1)] = (13));

} else {
var statearr_29253_29299 = state_29227__$1;
(statearr_29253_29299[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29228 === (9))){
var inst_29204 = (state_29227[(2)]);
var state_29227__$1 = state_29227;
var statearr_29254_29300 = state_29227__$1;
(statearr_29254_29300[(2)] = inst_29204);

(statearr_29254_29300[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29228 === (5))){
var inst_29165 = cljs.core.deref.call(null,mults);
var inst_29166 = cljs.core.vals.call(null,inst_29165);
var inst_29167 = cljs.core.seq.call(null,inst_29166);
var inst_29168 = inst_29167;
var inst_29169 = null;
var inst_29170 = (0);
var inst_29171 = (0);
var state_29227__$1 = (function (){var statearr_29255 = state_29227;
(statearr_29255[(12)] = inst_29171);

(statearr_29255[(14)] = inst_29168);

(statearr_29255[(15)] = inst_29170);

(statearr_29255[(16)] = inst_29169);

return statearr_29255;
})();
var statearr_29256_29301 = state_29227__$1;
(statearr_29256_29301[(2)] = null);

(statearr_29256_29301[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29228 === (14))){
var state_29227__$1 = state_29227;
var statearr_29260_29302 = state_29227__$1;
(statearr_29260_29302[(2)] = null);

(statearr_29260_29302[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29228 === (16))){
var inst_29182 = (state_29227[(10)]);
var inst_29186 = cljs.core.chunk_first.call(null,inst_29182);
var inst_29187 = cljs.core.chunk_rest.call(null,inst_29182);
var inst_29188 = cljs.core.count.call(null,inst_29186);
var inst_29168 = inst_29187;
var inst_29169 = inst_29186;
var inst_29170 = inst_29188;
var inst_29171 = (0);
var state_29227__$1 = (function (){var statearr_29261 = state_29227;
(statearr_29261[(12)] = inst_29171);

(statearr_29261[(14)] = inst_29168);

(statearr_29261[(15)] = inst_29170);

(statearr_29261[(16)] = inst_29169);

return statearr_29261;
})();
var statearr_29262_29303 = state_29227__$1;
(statearr_29262_29303[(2)] = null);

(statearr_29262_29303[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29228 === (10))){
var inst_29171 = (state_29227[(12)]);
var inst_29168 = (state_29227[(14)]);
var inst_29170 = (state_29227[(15)]);
var inst_29169 = (state_29227[(16)]);
var inst_29176 = cljs.core._nth.call(null,inst_29169,inst_29171);
var inst_29177 = cljs.core.async.muxch_STAR_.call(null,inst_29176);
var inst_29178 = cljs.core.async.close_BANG_.call(null,inst_29177);
var inst_29179 = (inst_29171 + (1));
var tmp29257 = inst_29168;
var tmp29258 = inst_29170;
var tmp29259 = inst_29169;
var inst_29168__$1 = tmp29257;
var inst_29169__$1 = tmp29259;
var inst_29170__$1 = tmp29258;
var inst_29171__$1 = inst_29179;
var state_29227__$1 = (function (){var statearr_29263 = state_29227;
(statearr_29263[(17)] = inst_29178);

(statearr_29263[(12)] = inst_29171__$1);

(statearr_29263[(14)] = inst_29168__$1);

(statearr_29263[(15)] = inst_29170__$1);

(statearr_29263[(16)] = inst_29169__$1);

return statearr_29263;
})();
var statearr_29264_29304 = state_29227__$1;
(statearr_29264_29304[(2)] = null);

(statearr_29264_29304[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29228 === (18))){
var inst_29197 = (state_29227[(2)]);
var state_29227__$1 = state_29227;
var statearr_29265_29305 = state_29227__$1;
(statearr_29265_29305[(2)] = inst_29197);

(statearr_29265_29305[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29228 === (8))){
var inst_29171 = (state_29227[(12)]);
var inst_29170 = (state_29227[(15)]);
var inst_29173 = (inst_29171 < inst_29170);
var inst_29174 = inst_29173;
var state_29227__$1 = state_29227;
if(cljs.core.truth_(inst_29174)){
var statearr_29266_29306 = state_29227__$1;
(statearr_29266_29306[(1)] = (10));

} else {
var statearr_29267_29307 = state_29227__$1;
(statearr_29267_29307[(1)] = (11));

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
});})(c__27356__auto___29279,mults,ensure_mult,p))
;
return ((function (switch__27244__auto__,c__27356__auto___29279,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__27245__auto__ = null;
var cljs$core$async$state_machine__27245__auto____0 = (function (){
var statearr_29271 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29271[(0)] = cljs$core$async$state_machine__27245__auto__);

(statearr_29271[(1)] = (1));

return statearr_29271;
});
var cljs$core$async$state_machine__27245__auto____1 = (function (state_29227){
while(true){
var ret_value__27246__auto__ = (function (){try{while(true){
var result__27247__auto__ = switch__27244__auto__.call(null,state_29227);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27247__auto__;
}
break;
}
}catch (e29272){if((e29272 instanceof Object)){
var ex__27248__auto__ = e29272;
var statearr_29273_29308 = state_29227;
(statearr_29273_29308[(5)] = ex__27248__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29227);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29272;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29309 = state_29227;
state_29227 = G__29309;
continue;
} else {
return ret_value__27246__auto__;
}
break;
}
});
cljs$core$async$state_machine__27245__auto__ = function(state_29227){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27245__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27245__auto____1.call(this,state_29227);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27245__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27245__auto____0;
cljs$core$async$state_machine__27245__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27245__auto____1;
return cljs$core$async$state_machine__27245__auto__;
})()
;})(switch__27244__auto__,c__27356__auto___29279,mults,ensure_mult,p))
})();
var state__27358__auto__ = (function (){var statearr_29274 = f__27357__auto__.call(null);
(statearr_29274[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27356__auto___29279);

return statearr_29274;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27358__auto__);
});})(c__27356__auto___29279,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args29310 = [];
var len__26259__auto___29313 = arguments.length;
var i__26260__auto___29314 = (0);
while(true){
if((i__26260__auto___29314 < len__26259__auto___29313)){
args29310.push((arguments[i__26260__auto___29314]));

var G__29315 = (i__26260__auto___29314 + (1));
i__26260__auto___29314 = G__29315;
continue;
} else {
}
break;
}

var G__29312 = args29310.length;
switch (G__29312) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29310.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args29317 = [];
var len__26259__auto___29320 = arguments.length;
var i__26260__auto___29321 = (0);
while(true){
if((i__26260__auto___29321 < len__26259__auto___29320)){
args29317.push((arguments[i__26260__auto___29321]));

var G__29322 = (i__26260__auto___29321 + (1));
i__26260__auto___29321 = G__29322;
continue;
} else {
}
break;
}

var G__29319 = args29317.length;
switch (G__29319) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29317.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args29324 = [];
var len__26259__auto___29395 = arguments.length;
var i__26260__auto___29396 = (0);
while(true){
if((i__26260__auto___29396 < len__26259__auto___29395)){
args29324.push((arguments[i__26260__auto___29396]));

var G__29397 = (i__26260__auto___29396 + (1));
i__26260__auto___29396 = G__29397;
continue;
} else {
}
break;
}

var G__29326 = args29324.length;
switch (G__29326) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29324.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__27356__auto___29399 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27356__auto___29399,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__27357__auto__ = (function (){var switch__27244__auto__ = ((function (c__27356__auto___29399,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_29365){
var state_val_29366 = (state_29365[(1)]);
if((state_val_29366 === (7))){
var state_29365__$1 = state_29365;
var statearr_29367_29400 = state_29365__$1;
(statearr_29367_29400[(2)] = null);

(statearr_29367_29400[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (1))){
var state_29365__$1 = state_29365;
var statearr_29368_29401 = state_29365__$1;
(statearr_29368_29401[(2)] = null);

(statearr_29368_29401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (4))){
var inst_29329 = (state_29365[(7)]);
var inst_29331 = (inst_29329 < cnt);
var state_29365__$1 = state_29365;
if(cljs.core.truth_(inst_29331)){
var statearr_29369_29402 = state_29365__$1;
(statearr_29369_29402[(1)] = (6));

} else {
var statearr_29370_29403 = state_29365__$1;
(statearr_29370_29403[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (15))){
var inst_29361 = (state_29365[(2)]);
var state_29365__$1 = state_29365;
var statearr_29371_29404 = state_29365__$1;
(statearr_29371_29404[(2)] = inst_29361);

(statearr_29371_29404[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (13))){
var inst_29354 = cljs.core.async.close_BANG_.call(null,out);
var state_29365__$1 = state_29365;
var statearr_29372_29405 = state_29365__$1;
(statearr_29372_29405[(2)] = inst_29354);

(statearr_29372_29405[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (6))){
var state_29365__$1 = state_29365;
var statearr_29373_29406 = state_29365__$1;
(statearr_29373_29406[(2)] = null);

(statearr_29373_29406[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (3))){
var inst_29363 = (state_29365[(2)]);
var state_29365__$1 = state_29365;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29365__$1,inst_29363);
} else {
if((state_val_29366 === (12))){
var inst_29351 = (state_29365[(8)]);
var inst_29351__$1 = (state_29365[(2)]);
var inst_29352 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29351__$1);
var state_29365__$1 = (function (){var statearr_29374 = state_29365;
(statearr_29374[(8)] = inst_29351__$1);

return statearr_29374;
})();
if(cljs.core.truth_(inst_29352)){
var statearr_29375_29407 = state_29365__$1;
(statearr_29375_29407[(1)] = (13));

} else {
var statearr_29376_29408 = state_29365__$1;
(statearr_29376_29408[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (2))){
var inst_29328 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_29329 = (0);
var state_29365__$1 = (function (){var statearr_29377 = state_29365;
(statearr_29377[(9)] = inst_29328);

(statearr_29377[(7)] = inst_29329);

return statearr_29377;
})();
var statearr_29378_29409 = state_29365__$1;
(statearr_29378_29409[(2)] = null);

(statearr_29378_29409[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (11))){
var inst_29329 = (state_29365[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29365,(10),Object,null,(9));
var inst_29338 = chs__$1.call(null,inst_29329);
var inst_29339 = done.call(null,inst_29329);
var inst_29340 = cljs.core.async.take_BANG_.call(null,inst_29338,inst_29339);
var state_29365__$1 = state_29365;
var statearr_29379_29410 = state_29365__$1;
(statearr_29379_29410[(2)] = inst_29340);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29365__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (9))){
var inst_29329 = (state_29365[(7)]);
var inst_29342 = (state_29365[(2)]);
var inst_29343 = (inst_29329 + (1));
var inst_29329__$1 = inst_29343;
var state_29365__$1 = (function (){var statearr_29380 = state_29365;
(statearr_29380[(7)] = inst_29329__$1);

(statearr_29380[(10)] = inst_29342);

return statearr_29380;
})();
var statearr_29381_29411 = state_29365__$1;
(statearr_29381_29411[(2)] = null);

(statearr_29381_29411[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (5))){
var inst_29349 = (state_29365[(2)]);
var state_29365__$1 = (function (){var statearr_29382 = state_29365;
(statearr_29382[(11)] = inst_29349);

return statearr_29382;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29365__$1,(12),dchan);
} else {
if((state_val_29366 === (14))){
var inst_29351 = (state_29365[(8)]);
var inst_29356 = cljs.core.apply.call(null,f,inst_29351);
var state_29365__$1 = state_29365;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29365__$1,(16),out,inst_29356);
} else {
if((state_val_29366 === (16))){
var inst_29358 = (state_29365[(2)]);
var state_29365__$1 = (function (){var statearr_29383 = state_29365;
(statearr_29383[(12)] = inst_29358);

return statearr_29383;
})();
var statearr_29384_29412 = state_29365__$1;
(statearr_29384_29412[(2)] = null);

(statearr_29384_29412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (10))){
var inst_29333 = (state_29365[(2)]);
var inst_29334 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_29365__$1 = (function (){var statearr_29385 = state_29365;
(statearr_29385[(13)] = inst_29333);

return statearr_29385;
})();
var statearr_29386_29413 = state_29365__$1;
(statearr_29386_29413[(2)] = inst_29334);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29365__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (8))){
var inst_29347 = (state_29365[(2)]);
var state_29365__$1 = state_29365;
var statearr_29387_29414 = state_29365__$1;
(statearr_29387_29414[(2)] = inst_29347);

(statearr_29387_29414[(1)] = (5));


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
});})(c__27356__auto___29399,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__27244__auto__,c__27356__auto___29399,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__27245__auto__ = null;
var cljs$core$async$state_machine__27245__auto____0 = (function (){
var statearr_29391 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29391[(0)] = cljs$core$async$state_machine__27245__auto__);

(statearr_29391[(1)] = (1));

return statearr_29391;
});
var cljs$core$async$state_machine__27245__auto____1 = (function (state_29365){
while(true){
var ret_value__27246__auto__ = (function (){try{while(true){
var result__27247__auto__ = switch__27244__auto__.call(null,state_29365);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27247__auto__;
}
break;
}
}catch (e29392){if((e29392 instanceof Object)){
var ex__27248__auto__ = e29392;
var statearr_29393_29415 = state_29365;
(statearr_29393_29415[(5)] = ex__27248__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29365);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29392;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29416 = state_29365;
state_29365 = G__29416;
continue;
} else {
return ret_value__27246__auto__;
}
break;
}
});
cljs$core$async$state_machine__27245__auto__ = function(state_29365){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27245__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27245__auto____1.call(this,state_29365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27245__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27245__auto____0;
cljs$core$async$state_machine__27245__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27245__auto____1;
return cljs$core$async$state_machine__27245__auto__;
})()
;})(switch__27244__auto__,c__27356__auto___29399,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__27358__auto__ = (function (){var statearr_29394 = f__27357__auto__.call(null);
(statearr_29394[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27356__auto___29399);

return statearr_29394;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27358__auto__);
});})(c__27356__auto___29399,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args29418 = [];
var len__26259__auto___29476 = arguments.length;
var i__26260__auto___29477 = (0);
while(true){
if((i__26260__auto___29477 < len__26259__auto___29476)){
args29418.push((arguments[i__26260__auto___29477]));

var G__29478 = (i__26260__auto___29477 + (1));
i__26260__auto___29477 = G__29478;
continue;
} else {
}
break;
}

var G__29420 = args29418.length;
switch (G__29420) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29418.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27356__auto___29480 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27356__auto___29480,out){
return (function (){
var f__27357__auto__ = (function (){var switch__27244__auto__ = ((function (c__27356__auto___29480,out){
return (function (state_29452){
var state_val_29453 = (state_29452[(1)]);
if((state_val_29453 === (7))){
var inst_29431 = (state_29452[(7)]);
var inst_29432 = (state_29452[(8)]);
var inst_29431__$1 = (state_29452[(2)]);
var inst_29432__$1 = cljs.core.nth.call(null,inst_29431__$1,(0),null);
var inst_29433 = cljs.core.nth.call(null,inst_29431__$1,(1),null);
var inst_29434 = (inst_29432__$1 == null);
var state_29452__$1 = (function (){var statearr_29454 = state_29452;
(statearr_29454[(7)] = inst_29431__$1);

(statearr_29454[(9)] = inst_29433);

(statearr_29454[(8)] = inst_29432__$1);

return statearr_29454;
})();
if(cljs.core.truth_(inst_29434)){
var statearr_29455_29481 = state_29452__$1;
(statearr_29455_29481[(1)] = (8));

} else {
var statearr_29456_29482 = state_29452__$1;
(statearr_29456_29482[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29453 === (1))){
var inst_29421 = cljs.core.vec.call(null,chs);
var inst_29422 = inst_29421;
var state_29452__$1 = (function (){var statearr_29457 = state_29452;
(statearr_29457[(10)] = inst_29422);

return statearr_29457;
})();
var statearr_29458_29483 = state_29452__$1;
(statearr_29458_29483[(2)] = null);

(statearr_29458_29483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29453 === (4))){
var inst_29422 = (state_29452[(10)]);
var state_29452__$1 = state_29452;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29452__$1,(7),inst_29422);
} else {
if((state_val_29453 === (6))){
var inst_29448 = (state_29452[(2)]);
var state_29452__$1 = state_29452;
var statearr_29459_29484 = state_29452__$1;
(statearr_29459_29484[(2)] = inst_29448);

(statearr_29459_29484[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29453 === (3))){
var inst_29450 = (state_29452[(2)]);
var state_29452__$1 = state_29452;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29452__$1,inst_29450);
} else {
if((state_val_29453 === (2))){
var inst_29422 = (state_29452[(10)]);
var inst_29424 = cljs.core.count.call(null,inst_29422);
var inst_29425 = (inst_29424 > (0));
var state_29452__$1 = state_29452;
if(cljs.core.truth_(inst_29425)){
var statearr_29461_29485 = state_29452__$1;
(statearr_29461_29485[(1)] = (4));

} else {
var statearr_29462_29486 = state_29452__$1;
(statearr_29462_29486[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29453 === (11))){
var inst_29422 = (state_29452[(10)]);
var inst_29441 = (state_29452[(2)]);
var tmp29460 = inst_29422;
var inst_29422__$1 = tmp29460;
var state_29452__$1 = (function (){var statearr_29463 = state_29452;
(statearr_29463[(11)] = inst_29441);

(statearr_29463[(10)] = inst_29422__$1);

return statearr_29463;
})();
var statearr_29464_29487 = state_29452__$1;
(statearr_29464_29487[(2)] = null);

(statearr_29464_29487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29453 === (9))){
var inst_29432 = (state_29452[(8)]);
var state_29452__$1 = state_29452;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29452__$1,(11),out,inst_29432);
} else {
if((state_val_29453 === (5))){
var inst_29446 = cljs.core.async.close_BANG_.call(null,out);
var state_29452__$1 = state_29452;
var statearr_29465_29488 = state_29452__$1;
(statearr_29465_29488[(2)] = inst_29446);

(statearr_29465_29488[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29453 === (10))){
var inst_29444 = (state_29452[(2)]);
var state_29452__$1 = state_29452;
var statearr_29466_29489 = state_29452__$1;
(statearr_29466_29489[(2)] = inst_29444);

(statearr_29466_29489[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29453 === (8))){
var inst_29431 = (state_29452[(7)]);
var inst_29433 = (state_29452[(9)]);
var inst_29432 = (state_29452[(8)]);
var inst_29422 = (state_29452[(10)]);
var inst_29436 = (function (){var cs = inst_29422;
var vec__29427 = inst_29431;
var v = inst_29432;
var c = inst_29433;
return ((function (cs,vec__29427,v,c,inst_29431,inst_29433,inst_29432,inst_29422,state_val_29453,c__27356__auto___29480,out){
return (function (p1__29417_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29417_SHARP_);
});
;})(cs,vec__29427,v,c,inst_29431,inst_29433,inst_29432,inst_29422,state_val_29453,c__27356__auto___29480,out))
})();
var inst_29437 = cljs.core.filterv.call(null,inst_29436,inst_29422);
var inst_29422__$1 = inst_29437;
var state_29452__$1 = (function (){var statearr_29467 = state_29452;
(statearr_29467[(10)] = inst_29422__$1);

return statearr_29467;
})();
var statearr_29468_29490 = state_29452__$1;
(statearr_29468_29490[(2)] = null);

(statearr_29468_29490[(1)] = (2));


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
});})(c__27356__auto___29480,out))
;
return ((function (switch__27244__auto__,c__27356__auto___29480,out){
return (function() {
var cljs$core$async$state_machine__27245__auto__ = null;
var cljs$core$async$state_machine__27245__auto____0 = (function (){
var statearr_29472 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29472[(0)] = cljs$core$async$state_machine__27245__auto__);

(statearr_29472[(1)] = (1));

return statearr_29472;
});
var cljs$core$async$state_machine__27245__auto____1 = (function (state_29452){
while(true){
var ret_value__27246__auto__ = (function (){try{while(true){
var result__27247__auto__ = switch__27244__auto__.call(null,state_29452);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27247__auto__;
}
break;
}
}catch (e29473){if((e29473 instanceof Object)){
var ex__27248__auto__ = e29473;
var statearr_29474_29491 = state_29452;
(statearr_29474_29491[(5)] = ex__27248__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29452);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29473;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29492 = state_29452;
state_29452 = G__29492;
continue;
} else {
return ret_value__27246__auto__;
}
break;
}
});
cljs$core$async$state_machine__27245__auto__ = function(state_29452){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27245__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27245__auto____1.call(this,state_29452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27245__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27245__auto____0;
cljs$core$async$state_machine__27245__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27245__auto____1;
return cljs$core$async$state_machine__27245__auto__;
})()
;})(switch__27244__auto__,c__27356__auto___29480,out))
})();
var state__27358__auto__ = (function (){var statearr_29475 = f__27357__auto__.call(null);
(statearr_29475[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27356__auto___29480);

return statearr_29475;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27358__auto__);
});})(c__27356__auto___29480,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args29493 = [];
var len__26259__auto___29542 = arguments.length;
var i__26260__auto___29543 = (0);
while(true){
if((i__26260__auto___29543 < len__26259__auto___29542)){
args29493.push((arguments[i__26260__auto___29543]));

var G__29544 = (i__26260__auto___29543 + (1));
i__26260__auto___29543 = G__29544;
continue;
} else {
}
break;
}

var G__29495 = args29493.length;
switch (G__29495) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29493.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27356__auto___29546 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27356__auto___29546,out){
return (function (){
var f__27357__auto__ = (function (){var switch__27244__auto__ = ((function (c__27356__auto___29546,out){
return (function (state_29519){
var state_val_29520 = (state_29519[(1)]);
if((state_val_29520 === (7))){
var inst_29501 = (state_29519[(7)]);
var inst_29501__$1 = (state_29519[(2)]);
var inst_29502 = (inst_29501__$1 == null);
var inst_29503 = cljs.core.not.call(null,inst_29502);
var state_29519__$1 = (function (){var statearr_29521 = state_29519;
(statearr_29521[(7)] = inst_29501__$1);

return statearr_29521;
})();
if(inst_29503){
var statearr_29522_29547 = state_29519__$1;
(statearr_29522_29547[(1)] = (8));

} else {
var statearr_29523_29548 = state_29519__$1;
(statearr_29523_29548[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29520 === (1))){
var inst_29496 = (0);
var state_29519__$1 = (function (){var statearr_29524 = state_29519;
(statearr_29524[(8)] = inst_29496);

return statearr_29524;
})();
var statearr_29525_29549 = state_29519__$1;
(statearr_29525_29549[(2)] = null);

(statearr_29525_29549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29520 === (4))){
var state_29519__$1 = state_29519;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29519__$1,(7),ch);
} else {
if((state_val_29520 === (6))){
var inst_29514 = (state_29519[(2)]);
var state_29519__$1 = state_29519;
var statearr_29526_29550 = state_29519__$1;
(statearr_29526_29550[(2)] = inst_29514);

(statearr_29526_29550[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29520 === (3))){
var inst_29516 = (state_29519[(2)]);
var inst_29517 = cljs.core.async.close_BANG_.call(null,out);
var state_29519__$1 = (function (){var statearr_29527 = state_29519;
(statearr_29527[(9)] = inst_29516);

return statearr_29527;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29519__$1,inst_29517);
} else {
if((state_val_29520 === (2))){
var inst_29496 = (state_29519[(8)]);
var inst_29498 = (inst_29496 < n);
var state_29519__$1 = state_29519;
if(cljs.core.truth_(inst_29498)){
var statearr_29528_29551 = state_29519__$1;
(statearr_29528_29551[(1)] = (4));

} else {
var statearr_29529_29552 = state_29519__$1;
(statearr_29529_29552[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29520 === (11))){
var inst_29496 = (state_29519[(8)]);
var inst_29506 = (state_29519[(2)]);
var inst_29507 = (inst_29496 + (1));
var inst_29496__$1 = inst_29507;
var state_29519__$1 = (function (){var statearr_29530 = state_29519;
(statearr_29530[(10)] = inst_29506);

(statearr_29530[(8)] = inst_29496__$1);

return statearr_29530;
})();
var statearr_29531_29553 = state_29519__$1;
(statearr_29531_29553[(2)] = null);

(statearr_29531_29553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29520 === (9))){
var state_29519__$1 = state_29519;
var statearr_29532_29554 = state_29519__$1;
(statearr_29532_29554[(2)] = null);

(statearr_29532_29554[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29520 === (5))){
var state_29519__$1 = state_29519;
var statearr_29533_29555 = state_29519__$1;
(statearr_29533_29555[(2)] = null);

(statearr_29533_29555[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29520 === (10))){
var inst_29511 = (state_29519[(2)]);
var state_29519__$1 = state_29519;
var statearr_29534_29556 = state_29519__$1;
(statearr_29534_29556[(2)] = inst_29511);

(statearr_29534_29556[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29520 === (8))){
var inst_29501 = (state_29519[(7)]);
var state_29519__$1 = state_29519;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29519__$1,(11),out,inst_29501);
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
});})(c__27356__auto___29546,out))
;
return ((function (switch__27244__auto__,c__27356__auto___29546,out){
return (function() {
var cljs$core$async$state_machine__27245__auto__ = null;
var cljs$core$async$state_machine__27245__auto____0 = (function (){
var statearr_29538 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29538[(0)] = cljs$core$async$state_machine__27245__auto__);

(statearr_29538[(1)] = (1));

return statearr_29538;
});
var cljs$core$async$state_machine__27245__auto____1 = (function (state_29519){
while(true){
var ret_value__27246__auto__ = (function (){try{while(true){
var result__27247__auto__ = switch__27244__auto__.call(null,state_29519);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27247__auto__;
}
break;
}
}catch (e29539){if((e29539 instanceof Object)){
var ex__27248__auto__ = e29539;
var statearr_29540_29557 = state_29519;
(statearr_29540_29557[(5)] = ex__27248__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29519);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29539;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29558 = state_29519;
state_29519 = G__29558;
continue;
} else {
return ret_value__27246__auto__;
}
break;
}
});
cljs$core$async$state_machine__27245__auto__ = function(state_29519){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27245__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27245__auto____1.call(this,state_29519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27245__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27245__auto____0;
cljs$core$async$state_machine__27245__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27245__auto____1;
return cljs$core$async$state_machine__27245__auto__;
})()
;})(switch__27244__auto__,c__27356__auto___29546,out))
})();
var state__27358__auto__ = (function (){var statearr_29541 = f__27357__auto__.call(null);
(statearr_29541[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27356__auto___29546);

return statearr_29541;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27358__auto__);
});})(c__27356__auto___29546,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29566 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29566 = (function (f,ch,meta29567){
this.f = f;
this.ch = ch;
this.meta29567 = meta29567;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29566.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29568,meta29567__$1){
var self__ = this;
var _29568__$1 = this;
return (new cljs.core.async.t_cljs$core$async29566(self__.f,self__.ch,meta29567__$1));
});

cljs.core.async.t_cljs$core$async29566.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29568){
var self__ = this;
var _29568__$1 = this;
return self__.meta29567;
});

cljs.core.async.t_cljs$core$async29566.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29566.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29566.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29566.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29566.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async29569 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29569 = (function (f,ch,meta29567,_,fn1,meta29570){
this.f = f;
this.ch = ch;
this.meta29567 = meta29567;
this._ = _;
this.fn1 = fn1;
this.meta29570 = meta29570;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29569.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29571,meta29570__$1){
var self__ = this;
var _29571__$1 = this;
return (new cljs.core.async.t_cljs$core$async29569(self__.f,self__.ch,self__.meta29567,self__._,self__.fn1,meta29570__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async29569.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29571){
var self__ = this;
var _29571__$1 = this;
return self__.meta29570;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29569.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29569.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29569.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29569.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__29559_SHARP_){
return f1.call(null,(((p1__29559_SHARP_ == null))?null:self__.f.call(null,p1__29559_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async29569.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29567","meta29567",-643576214,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async29566","cljs.core.async/t_cljs$core$async29566",1052189356,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta29570","meta29570",-411959432,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29569.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29569.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29569";

cljs.core.async.t_cljs$core$async29569.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25757__auto__,writer__25758__auto__,opt__25759__auto__){
return cljs.core._write.call(null,writer__25758__auto__,"cljs.core.async/t_cljs$core$async29569");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async29569 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29569(f__$1,ch__$1,meta29567__$1,___$2,fn1__$1,meta29570){
return (new cljs.core.async.t_cljs$core$async29569(f__$1,ch__$1,meta29567__$1,___$2,fn1__$1,meta29570));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async29569(self__.f,self__.ch,self__.meta29567,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__25134__auto__ = ret;
if(cljs.core.truth_(and__25134__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__25134__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async29566.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29566.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async29566.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29567","meta29567",-643576214,null)], null);
});

cljs.core.async.t_cljs$core$async29566.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29566.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29566";

cljs.core.async.t_cljs$core$async29566.cljs$lang$ctorPrWriter = (function (this__25757__auto__,writer__25758__auto__,opt__25759__auto__){
return cljs.core._write.call(null,writer__25758__auto__,"cljs.core.async/t_cljs$core$async29566");
});

cljs.core.async.__GT_t_cljs$core$async29566 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29566(f__$1,ch__$1,meta29567){
return (new cljs.core.async.t_cljs$core$async29566(f__$1,ch__$1,meta29567));
});

}

return (new cljs.core.async.t_cljs$core$async29566(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29575 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29575 = (function (f,ch,meta29576){
this.f = f;
this.ch = ch;
this.meta29576 = meta29576;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29575.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29577,meta29576__$1){
var self__ = this;
var _29577__$1 = this;
return (new cljs.core.async.t_cljs$core$async29575(self__.f,self__.ch,meta29576__$1));
});

cljs.core.async.t_cljs$core$async29575.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29577){
var self__ = this;
var _29577__$1 = this;
return self__.meta29576;
});

cljs.core.async.t_cljs$core$async29575.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29575.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29575.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29575.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29575.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29575.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async29575.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29576","meta29576",1012996552,null)], null);
});

cljs.core.async.t_cljs$core$async29575.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29575.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29575";

cljs.core.async.t_cljs$core$async29575.cljs$lang$ctorPrWriter = (function (this__25757__auto__,writer__25758__auto__,opt__25759__auto__){
return cljs.core._write.call(null,writer__25758__auto__,"cljs.core.async/t_cljs$core$async29575");
});

cljs.core.async.__GT_t_cljs$core$async29575 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async29575(f__$1,ch__$1,meta29576){
return (new cljs.core.async.t_cljs$core$async29575(f__$1,ch__$1,meta29576));
});

}

return (new cljs.core.async.t_cljs$core$async29575(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async29581 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29581 = (function (p,ch,meta29582){
this.p = p;
this.ch = ch;
this.meta29582 = meta29582;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29581.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29583,meta29582__$1){
var self__ = this;
var _29583__$1 = this;
return (new cljs.core.async.t_cljs$core$async29581(self__.p,self__.ch,meta29582__$1));
});

cljs.core.async.t_cljs$core$async29581.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29583){
var self__ = this;
var _29583__$1 = this;
return self__.meta29582;
});

cljs.core.async.t_cljs$core$async29581.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29581.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29581.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29581.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29581.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29581.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29581.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async29581.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29582","meta29582",768753485,null)], null);
});

cljs.core.async.t_cljs$core$async29581.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29581.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29581";

cljs.core.async.t_cljs$core$async29581.cljs$lang$ctorPrWriter = (function (this__25757__auto__,writer__25758__auto__,opt__25759__auto__){
return cljs.core._write.call(null,writer__25758__auto__,"cljs.core.async/t_cljs$core$async29581");
});

cljs.core.async.__GT_t_cljs$core$async29581 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async29581(p__$1,ch__$1,meta29582){
return (new cljs.core.async.t_cljs$core$async29581(p__$1,ch__$1,meta29582));
});

}

return (new cljs.core.async.t_cljs$core$async29581(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args29584 = [];
var len__26259__auto___29628 = arguments.length;
var i__26260__auto___29629 = (0);
while(true){
if((i__26260__auto___29629 < len__26259__auto___29628)){
args29584.push((arguments[i__26260__auto___29629]));

var G__29630 = (i__26260__auto___29629 + (1));
i__26260__auto___29629 = G__29630;
continue;
} else {
}
break;
}

var G__29586 = args29584.length;
switch (G__29586) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29584.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27356__auto___29632 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27356__auto___29632,out){
return (function (){
var f__27357__auto__ = (function (){var switch__27244__auto__ = ((function (c__27356__auto___29632,out){
return (function (state_29607){
var state_val_29608 = (state_29607[(1)]);
if((state_val_29608 === (7))){
var inst_29603 = (state_29607[(2)]);
var state_29607__$1 = state_29607;
var statearr_29609_29633 = state_29607__$1;
(statearr_29609_29633[(2)] = inst_29603);

(statearr_29609_29633[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29608 === (1))){
var state_29607__$1 = state_29607;
var statearr_29610_29634 = state_29607__$1;
(statearr_29610_29634[(2)] = null);

(statearr_29610_29634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29608 === (4))){
var inst_29589 = (state_29607[(7)]);
var inst_29589__$1 = (state_29607[(2)]);
var inst_29590 = (inst_29589__$1 == null);
var state_29607__$1 = (function (){var statearr_29611 = state_29607;
(statearr_29611[(7)] = inst_29589__$1);

return statearr_29611;
})();
if(cljs.core.truth_(inst_29590)){
var statearr_29612_29635 = state_29607__$1;
(statearr_29612_29635[(1)] = (5));

} else {
var statearr_29613_29636 = state_29607__$1;
(statearr_29613_29636[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29608 === (6))){
var inst_29589 = (state_29607[(7)]);
var inst_29594 = p.call(null,inst_29589);
var state_29607__$1 = state_29607;
if(cljs.core.truth_(inst_29594)){
var statearr_29614_29637 = state_29607__$1;
(statearr_29614_29637[(1)] = (8));

} else {
var statearr_29615_29638 = state_29607__$1;
(statearr_29615_29638[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29608 === (3))){
var inst_29605 = (state_29607[(2)]);
var state_29607__$1 = state_29607;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29607__$1,inst_29605);
} else {
if((state_val_29608 === (2))){
var state_29607__$1 = state_29607;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29607__$1,(4),ch);
} else {
if((state_val_29608 === (11))){
var inst_29597 = (state_29607[(2)]);
var state_29607__$1 = state_29607;
var statearr_29616_29639 = state_29607__$1;
(statearr_29616_29639[(2)] = inst_29597);

(statearr_29616_29639[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29608 === (9))){
var state_29607__$1 = state_29607;
var statearr_29617_29640 = state_29607__$1;
(statearr_29617_29640[(2)] = null);

(statearr_29617_29640[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29608 === (5))){
var inst_29592 = cljs.core.async.close_BANG_.call(null,out);
var state_29607__$1 = state_29607;
var statearr_29618_29641 = state_29607__$1;
(statearr_29618_29641[(2)] = inst_29592);

(statearr_29618_29641[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29608 === (10))){
var inst_29600 = (state_29607[(2)]);
var state_29607__$1 = (function (){var statearr_29619 = state_29607;
(statearr_29619[(8)] = inst_29600);

return statearr_29619;
})();
var statearr_29620_29642 = state_29607__$1;
(statearr_29620_29642[(2)] = null);

(statearr_29620_29642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29608 === (8))){
var inst_29589 = (state_29607[(7)]);
var state_29607__$1 = state_29607;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29607__$1,(11),out,inst_29589);
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
});})(c__27356__auto___29632,out))
;
return ((function (switch__27244__auto__,c__27356__auto___29632,out){
return (function() {
var cljs$core$async$state_machine__27245__auto__ = null;
var cljs$core$async$state_machine__27245__auto____0 = (function (){
var statearr_29624 = [null,null,null,null,null,null,null,null,null];
(statearr_29624[(0)] = cljs$core$async$state_machine__27245__auto__);

(statearr_29624[(1)] = (1));

return statearr_29624;
});
var cljs$core$async$state_machine__27245__auto____1 = (function (state_29607){
while(true){
var ret_value__27246__auto__ = (function (){try{while(true){
var result__27247__auto__ = switch__27244__auto__.call(null,state_29607);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27247__auto__;
}
break;
}
}catch (e29625){if((e29625 instanceof Object)){
var ex__27248__auto__ = e29625;
var statearr_29626_29643 = state_29607;
(statearr_29626_29643[(5)] = ex__27248__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29607);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29625;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29644 = state_29607;
state_29607 = G__29644;
continue;
} else {
return ret_value__27246__auto__;
}
break;
}
});
cljs$core$async$state_machine__27245__auto__ = function(state_29607){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27245__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27245__auto____1.call(this,state_29607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27245__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27245__auto____0;
cljs$core$async$state_machine__27245__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27245__auto____1;
return cljs$core$async$state_machine__27245__auto__;
})()
;})(switch__27244__auto__,c__27356__auto___29632,out))
})();
var state__27358__auto__ = (function (){var statearr_29627 = f__27357__auto__.call(null);
(statearr_29627[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27356__auto___29632);

return statearr_29627;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27358__auto__);
});})(c__27356__auto___29632,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args29645 = [];
var len__26259__auto___29648 = arguments.length;
var i__26260__auto___29649 = (0);
while(true){
if((i__26260__auto___29649 < len__26259__auto___29648)){
args29645.push((arguments[i__26260__auto___29649]));

var G__29650 = (i__26260__auto___29649 + (1));
i__26260__auto___29649 = G__29650;
continue;
} else {
}
break;
}

var G__29647 = args29645.length;
switch (G__29647) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29645.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__27356__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27356__auto__){
return (function (){
var f__27357__auto__ = (function (){var switch__27244__auto__ = ((function (c__27356__auto__){
return (function (state_29817){
var state_val_29818 = (state_29817[(1)]);
if((state_val_29818 === (7))){
var inst_29813 = (state_29817[(2)]);
var state_29817__$1 = state_29817;
var statearr_29819_29860 = state_29817__$1;
(statearr_29819_29860[(2)] = inst_29813);

(statearr_29819_29860[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29818 === (20))){
var inst_29783 = (state_29817[(7)]);
var inst_29794 = (state_29817[(2)]);
var inst_29795 = cljs.core.next.call(null,inst_29783);
var inst_29769 = inst_29795;
var inst_29770 = null;
var inst_29771 = (0);
var inst_29772 = (0);
var state_29817__$1 = (function (){var statearr_29820 = state_29817;
(statearr_29820[(8)] = inst_29771);

(statearr_29820[(9)] = inst_29769);

(statearr_29820[(10)] = inst_29772);

(statearr_29820[(11)] = inst_29794);

(statearr_29820[(12)] = inst_29770);

return statearr_29820;
})();
var statearr_29821_29861 = state_29817__$1;
(statearr_29821_29861[(2)] = null);

(statearr_29821_29861[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29818 === (1))){
var state_29817__$1 = state_29817;
var statearr_29822_29862 = state_29817__$1;
(statearr_29822_29862[(2)] = null);

(statearr_29822_29862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29818 === (4))){
var inst_29758 = (state_29817[(13)]);
var inst_29758__$1 = (state_29817[(2)]);
var inst_29759 = (inst_29758__$1 == null);
var state_29817__$1 = (function (){var statearr_29823 = state_29817;
(statearr_29823[(13)] = inst_29758__$1);

return statearr_29823;
})();
if(cljs.core.truth_(inst_29759)){
var statearr_29824_29863 = state_29817__$1;
(statearr_29824_29863[(1)] = (5));

} else {
var statearr_29825_29864 = state_29817__$1;
(statearr_29825_29864[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29818 === (15))){
var state_29817__$1 = state_29817;
var statearr_29829_29865 = state_29817__$1;
(statearr_29829_29865[(2)] = null);

(statearr_29829_29865[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29818 === (21))){
var state_29817__$1 = state_29817;
var statearr_29830_29866 = state_29817__$1;
(statearr_29830_29866[(2)] = null);

(statearr_29830_29866[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29818 === (13))){
var inst_29771 = (state_29817[(8)]);
var inst_29769 = (state_29817[(9)]);
var inst_29772 = (state_29817[(10)]);
var inst_29770 = (state_29817[(12)]);
var inst_29779 = (state_29817[(2)]);
var inst_29780 = (inst_29772 + (1));
var tmp29826 = inst_29771;
var tmp29827 = inst_29769;
var tmp29828 = inst_29770;
var inst_29769__$1 = tmp29827;
var inst_29770__$1 = tmp29828;
var inst_29771__$1 = tmp29826;
var inst_29772__$1 = inst_29780;
var state_29817__$1 = (function (){var statearr_29831 = state_29817;
(statearr_29831[(14)] = inst_29779);

(statearr_29831[(8)] = inst_29771__$1);

(statearr_29831[(9)] = inst_29769__$1);

(statearr_29831[(10)] = inst_29772__$1);

(statearr_29831[(12)] = inst_29770__$1);

return statearr_29831;
})();
var statearr_29832_29867 = state_29817__$1;
(statearr_29832_29867[(2)] = null);

(statearr_29832_29867[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29818 === (22))){
var state_29817__$1 = state_29817;
var statearr_29833_29868 = state_29817__$1;
(statearr_29833_29868[(2)] = null);

(statearr_29833_29868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29818 === (6))){
var inst_29758 = (state_29817[(13)]);
var inst_29767 = f.call(null,inst_29758);
var inst_29768 = cljs.core.seq.call(null,inst_29767);
var inst_29769 = inst_29768;
var inst_29770 = null;
var inst_29771 = (0);
var inst_29772 = (0);
var state_29817__$1 = (function (){var statearr_29834 = state_29817;
(statearr_29834[(8)] = inst_29771);

(statearr_29834[(9)] = inst_29769);

(statearr_29834[(10)] = inst_29772);

(statearr_29834[(12)] = inst_29770);

return statearr_29834;
})();
var statearr_29835_29869 = state_29817__$1;
(statearr_29835_29869[(2)] = null);

(statearr_29835_29869[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29818 === (17))){
var inst_29783 = (state_29817[(7)]);
var inst_29787 = cljs.core.chunk_first.call(null,inst_29783);
var inst_29788 = cljs.core.chunk_rest.call(null,inst_29783);
var inst_29789 = cljs.core.count.call(null,inst_29787);
var inst_29769 = inst_29788;
var inst_29770 = inst_29787;
var inst_29771 = inst_29789;
var inst_29772 = (0);
var state_29817__$1 = (function (){var statearr_29836 = state_29817;
(statearr_29836[(8)] = inst_29771);

(statearr_29836[(9)] = inst_29769);

(statearr_29836[(10)] = inst_29772);

(statearr_29836[(12)] = inst_29770);

return statearr_29836;
})();
var statearr_29837_29870 = state_29817__$1;
(statearr_29837_29870[(2)] = null);

(statearr_29837_29870[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29818 === (3))){
var inst_29815 = (state_29817[(2)]);
var state_29817__$1 = state_29817;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29817__$1,inst_29815);
} else {
if((state_val_29818 === (12))){
var inst_29803 = (state_29817[(2)]);
var state_29817__$1 = state_29817;
var statearr_29838_29871 = state_29817__$1;
(statearr_29838_29871[(2)] = inst_29803);

(statearr_29838_29871[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29818 === (2))){
var state_29817__$1 = state_29817;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29817__$1,(4),in$);
} else {
if((state_val_29818 === (23))){
var inst_29811 = (state_29817[(2)]);
var state_29817__$1 = state_29817;
var statearr_29839_29872 = state_29817__$1;
(statearr_29839_29872[(2)] = inst_29811);

(statearr_29839_29872[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29818 === (19))){
var inst_29798 = (state_29817[(2)]);
var state_29817__$1 = state_29817;
var statearr_29840_29873 = state_29817__$1;
(statearr_29840_29873[(2)] = inst_29798);

(statearr_29840_29873[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29818 === (11))){
var inst_29769 = (state_29817[(9)]);
var inst_29783 = (state_29817[(7)]);
var inst_29783__$1 = cljs.core.seq.call(null,inst_29769);
var state_29817__$1 = (function (){var statearr_29841 = state_29817;
(statearr_29841[(7)] = inst_29783__$1);

return statearr_29841;
})();
if(inst_29783__$1){
var statearr_29842_29874 = state_29817__$1;
(statearr_29842_29874[(1)] = (14));

} else {
var statearr_29843_29875 = state_29817__$1;
(statearr_29843_29875[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29818 === (9))){
var inst_29805 = (state_29817[(2)]);
var inst_29806 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_29817__$1 = (function (){var statearr_29844 = state_29817;
(statearr_29844[(15)] = inst_29805);

return statearr_29844;
})();
if(cljs.core.truth_(inst_29806)){
var statearr_29845_29876 = state_29817__$1;
(statearr_29845_29876[(1)] = (21));

} else {
var statearr_29846_29877 = state_29817__$1;
(statearr_29846_29877[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29818 === (5))){
var inst_29761 = cljs.core.async.close_BANG_.call(null,out);
var state_29817__$1 = state_29817;
var statearr_29847_29878 = state_29817__$1;
(statearr_29847_29878[(2)] = inst_29761);

(statearr_29847_29878[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29818 === (14))){
var inst_29783 = (state_29817[(7)]);
var inst_29785 = cljs.core.chunked_seq_QMARK_.call(null,inst_29783);
var state_29817__$1 = state_29817;
if(inst_29785){
var statearr_29848_29879 = state_29817__$1;
(statearr_29848_29879[(1)] = (17));

} else {
var statearr_29849_29880 = state_29817__$1;
(statearr_29849_29880[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29818 === (16))){
var inst_29801 = (state_29817[(2)]);
var state_29817__$1 = state_29817;
var statearr_29850_29881 = state_29817__$1;
(statearr_29850_29881[(2)] = inst_29801);

(statearr_29850_29881[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29818 === (10))){
var inst_29772 = (state_29817[(10)]);
var inst_29770 = (state_29817[(12)]);
var inst_29777 = cljs.core._nth.call(null,inst_29770,inst_29772);
var state_29817__$1 = state_29817;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29817__$1,(13),out,inst_29777);
} else {
if((state_val_29818 === (18))){
var inst_29783 = (state_29817[(7)]);
var inst_29792 = cljs.core.first.call(null,inst_29783);
var state_29817__$1 = state_29817;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29817__$1,(20),out,inst_29792);
} else {
if((state_val_29818 === (8))){
var inst_29771 = (state_29817[(8)]);
var inst_29772 = (state_29817[(10)]);
var inst_29774 = (inst_29772 < inst_29771);
var inst_29775 = inst_29774;
var state_29817__$1 = state_29817;
if(cljs.core.truth_(inst_29775)){
var statearr_29851_29882 = state_29817__$1;
(statearr_29851_29882[(1)] = (10));

} else {
var statearr_29852_29883 = state_29817__$1;
(statearr_29852_29883[(1)] = (11));

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
});})(c__27356__auto__))
;
return ((function (switch__27244__auto__,c__27356__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__27245__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__27245__auto____0 = (function (){
var statearr_29856 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29856[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__27245__auto__);

(statearr_29856[(1)] = (1));

return statearr_29856;
});
var cljs$core$async$mapcat_STAR__$_state_machine__27245__auto____1 = (function (state_29817){
while(true){
var ret_value__27246__auto__ = (function (){try{while(true){
var result__27247__auto__ = switch__27244__auto__.call(null,state_29817);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27247__auto__;
}
break;
}
}catch (e29857){if((e29857 instanceof Object)){
var ex__27248__auto__ = e29857;
var statearr_29858_29884 = state_29817;
(statearr_29858_29884[(5)] = ex__27248__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29817);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29857;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29885 = state_29817;
state_29817 = G__29885;
continue;
} else {
return ret_value__27246__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__27245__auto__ = function(state_29817){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__27245__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__27245__auto____1.call(this,state_29817);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__27245__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__27245__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__27245__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__27245__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__27245__auto__;
})()
;})(switch__27244__auto__,c__27356__auto__))
})();
var state__27358__auto__ = (function (){var statearr_29859 = f__27357__auto__.call(null);
(statearr_29859[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27356__auto__);

return statearr_29859;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27358__auto__);
});})(c__27356__auto__))
);

return c__27356__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args29886 = [];
var len__26259__auto___29889 = arguments.length;
var i__26260__auto___29890 = (0);
while(true){
if((i__26260__auto___29890 < len__26259__auto___29889)){
args29886.push((arguments[i__26260__auto___29890]));

var G__29891 = (i__26260__auto___29890 + (1));
i__26260__auto___29890 = G__29891;
continue;
} else {
}
break;
}

var G__29888 = args29886.length;
switch (G__29888) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29886.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args29893 = [];
var len__26259__auto___29896 = arguments.length;
var i__26260__auto___29897 = (0);
while(true){
if((i__26260__auto___29897 < len__26259__auto___29896)){
args29893.push((arguments[i__26260__auto___29897]));

var G__29898 = (i__26260__auto___29897 + (1));
i__26260__auto___29897 = G__29898;
continue;
} else {
}
break;
}

var G__29895 = args29893.length;
switch (G__29895) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29893.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args29900 = [];
var len__26259__auto___29951 = arguments.length;
var i__26260__auto___29952 = (0);
while(true){
if((i__26260__auto___29952 < len__26259__auto___29951)){
args29900.push((arguments[i__26260__auto___29952]));

var G__29953 = (i__26260__auto___29952 + (1));
i__26260__auto___29952 = G__29953;
continue;
} else {
}
break;
}

var G__29902 = args29900.length;
switch (G__29902) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29900.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27356__auto___29955 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27356__auto___29955,out){
return (function (){
var f__27357__auto__ = (function (){var switch__27244__auto__ = ((function (c__27356__auto___29955,out){
return (function (state_29926){
var state_val_29927 = (state_29926[(1)]);
if((state_val_29927 === (7))){
var inst_29921 = (state_29926[(2)]);
var state_29926__$1 = state_29926;
var statearr_29928_29956 = state_29926__$1;
(statearr_29928_29956[(2)] = inst_29921);

(statearr_29928_29956[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29927 === (1))){
var inst_29903 = null;
var state_29926__$1 = (function (){var statearr_29929 = state_29926;
(statearr_29929[(7)] = inst_29903);

return statearr_29929;
})();
var statearr_29930_29957 = state_29926__$1;
(statearr_29930_29957[(2)] = null);

(statearr_29930_29957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29927 === (4))){
var inst_29906 = (state_29926[(8)]);
var inst_29906__$1 = (state_29926[(2)]);
var inst_29907 = (inst_29906__$1 == null);
var inst_29908 = cljs.core.not.call(null,inst_29907);
var state_29926__$1 = (function (){var statearr_29931 = state_29926;
(statearr_29931[(8)] = inst_29906__$1);

return statearr_29931;
})();
if(inst_29908){
var statearr_29932_29958 = state_29926__$1;
(statearr_29932_29958[(1)] = (5));

} else {
var statearr_29933_29959 = state_29926__$1;
(statearr_29933_29959[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29927 === (6))){
var state_29926__$1 = state_29926;
var statearr_29934_29960 = state_29926__$1;
(statearr_29934_29960[(2)] = null);

(statearr_29934_29960[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29927 === (3))){
var inst_29923 = (state_29926[(2)]);
var inst_29924 = cljs.core.async.close_BANG_.call(null,out);
var state_29926__$1 = (function (){var statearr_29935 = state_29926;
(statearr_29935[(9)] = inst_29923);

return statearr_29935;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29926__$1,inst_29924);
} else {
if((state_val_29927 === (2))){
var state_29926__$1 = state_29926;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29926__$1,(4),ch);
} else {
if((state_val_29927 === (11))){
var inst_29906 = (state_29926[(8)]);
var inst_29915 = (state_29926[(2)]);
var inst_29903 = inst_29906;
var state_29926__$1 = (function (){var statearr_29936 = state_29926;
(statearr_29936[(7)] = inst_29903);

(statearr_29936[(10)] = inst_29915);

return statearr_29936;
})();
var statearr_29937_29961 = state_29926__$1;
(statearr_29937_29961[(2)] = null);

(statearr_29937_29961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29927 === (9))){
var inst_29906 = (state_29926[(8)]);
var state_29926__$1 = state_29926;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29926__$1,(11),out,inst_29906);
} else {
if((state_val_29927 === (5))){
var inst_29903 = (state_29926[(7)]);
var inst_29906 = (state_29926[(8)]);
var inst_29910 = cljs.core._EQ_.call(null,inst_29906,inst_29903);
var state_29926__$1 = state_29926;
if(inst_29910){
var statearr_29939_29962 = state_29926__$1;
(statearr_29939_29962[(1)] = (8));

} else {
var statearr_29940_29963 = state_29926__$1;
(statearr_29940_29963[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29927 === (10))){
var inst_29918 = (state_29926[(2)]);
var state_29926__$1 = state_29926;
var statearr_29941_29964 = state_29926__$1;
(statearr_29941_29964[(2)] = inst_29918);

(statearr_29941_29964[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29927 === (8))){
var inst_29903 = (state_29926[(7)]);
var tmp29938 = inst_29903;
var inst_29903__$1 = tmp29938;
var state_29926__$1 = (function (){var statearr_29942 = state_29926;
(statearr_29942[(7)] = inst_29903__$1);

return statearr_29942;
})();
var statearr_29943_29965 = state_29926__$1;
(statearr_29943_29965[(2)] = null);

(statearr_29943_29965[(1)] = (2));


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
});})(c__27356__auto___29955,out))
;
return ((function (switch__27244__auto__,c__27356__auto___29955,out){
return (function() {
var cljs$core$async$state_machine__27245__auto__ = null;
var cljs$core$async$state_machine__27245__auto____0 = (function (){
var statearr_29947 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29947[(0)] = cljs$core$async$state_machine__27245__auto__);

(statearr_29947[(1)] = (1));

return statearr_29947;
});
var cljs$core$async$state_machine__27245__auto____1 = (function (state_29926){
while(true){
var ret_value__27246__auto__ = (function (){try{while(true){
var result__27247__auto__ = switch__27244__auto__.call(null,state_29926);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27247__auto__;
}
break;
}
}catch (e29948){if((e29948 instanceof Object)){
var ex__27248__auto__ = e29948;
var statearr_29949_29966 = state_29926;
(statearr_29949_29966[(5)] = ex__27248__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29926);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29948;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29967 = state_29926;
state_29926 = G__29967;
continue;
} else {
return ret_value__27246__auto__;
}
break;
}
});
cljs$core$async$state_machine__27245__auto__ = function(state_29926){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27245__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27245__auto____1.call(this,state_29926);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27245__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27245__auto____0;
cljs$core$async$state_machine__27245__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27245__auto____1;
return cljs$core$async$state_machine__27245__auto__;
})()
;})(switch__27244__auto__,c__27356__auto___29955,out))
})();
var state__27358__auto__ = (function (){var statearr_29950 = f__27357__auto__.call(null);
(statearr_29950[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27356__auto___29955);

return statearr_29950;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27358__auto__);
});})(c__27356__auto___29955,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args29968 = [];
var len__26259__auto___30038 = arguments.length;
var i__26260__auto___30039 = (0);
while(true){
if((i__26260__auto___30039 < len__26259__auto___30038)){
args29968.push((arguments[i__26260__auto___30039]));

var G__30040 = (i__26260__auto___30039 + (1));
i__26260__auto___30039 = G__30040;
continue;
} else {
}
break;
}

var G__29970 = args29968.length;
switch (G__29970) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29968.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27356__auto___30042 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27356__auto___30042,out){
return (function (){
var f__27357__auto__ = (function (){var switch__27244__auto__ = ((function (c__27356__auto___30042,out){
return (function (state_30008){
var state_val_30009 = (state_30008[(1)]);
if((state_val_30009 === (7))){
var inst_30004 = (state_30008[(2)]);
var state_30008__$1 = state_30008;
var statearr_30010_30043 = state_30008__$1;
(statearr_30010_30043[(2)] = inst_30004);

(statearr_30010_30043[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30009 === (1))){
var inst_29971 = (new Array(n));
var inst_29972 = inst_29971;
var inst_29973 = (0);
var state_30008__$1 = (function (){var statearr_30011 = state_30008;
(statearr_30011[(7)] = inst_29972);

(statearr_30011[(8)] = inst_29973);

return statearr_30011;
})();
var statearr_30012_30044 = state_30008__$1;
(statearr_30012_30044[(2)] = null);

(statearr_30012_30044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30009 === (4))){
var inst_29976 = (state_30008[(9)]);
var inst_29976__$1 = (state_30008[(2)]);
var inst_29977 = (inst_29976__$1 == null);
var inst_29978 = cljs.core.not.call(null,inst_29977);
var state_30008__$1 = (function (){var statearr_30013 = state_30008;
(statearr_30013[(9)] = inst_29976__$1);

return statearr_30013;
})();
if(inst_29978){
var statearr_30014_30045 = state_30008__$1;
(statearr_30014_30045[(1)] = (5));

} else {
var statearr_30015_30046 = state_30008__$1;
(statearr_30015_30046[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30009 === (15))){
var inst_29998 = (state_30008[(2)]);
var state_30008__$1 = state_30008;
var statearr_30016_30047 = state_30008__$1;
(statearr_30016_30047[(2)] = inst_29998);

(statearr_30016_30047[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30009 === (13))){
var state_30008__$1 = state_30008;
var statearr_30017_30048 = state_30008__$1;
(statearr_30017_30048[(2)] = null);

(statearr_30017_30048[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30009 === (6))){
var inst_29973 = (state_30008[(8)]);
var inst_29994 = (inst_29973 > (0));
var state_30008__$1 = state_30008;
if(cljs.core.truth_(inst_29994)){
var statearr_30018_30049 = state_30008__$1;
(statearr_30018_30049[(1)] = (12));

} else {
var statearr_30019_30050 = state_30008__$1;
(statearr_30019_30050[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30009 === (3))){
var inst_30006 = (state_30008[(2)]);
var state_30008__$1 = state_30008;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30008__$1,inst_30006);
} else {
if((state_val_30009 === (12))){
var inst_29972 = (state_30008[(7)]);
var inst_29996 = cljs.core.vec.call(null,inst_29972);
var state_30008__$1 = state_30008;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30008__$1,(15),out,inst_29996);
} else {
if((state_val_30009 === (2))){
var state_30008__$1 = state_30008;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30008__$1,(4),ch);
} else {
if((state_val_30009 === (11))){
var inst_29988 = (state_30008[(2)]);
var inst_29989 = (new Array(n));
var inst_29972 = inst_29989;
var inst_29973 = (0);
var state_30008__$1 = (function (){var statearr_30020 = state_30008;
(statearr_30020[(7)] = inst_29972);

(statearr_30020[(10)] = inst_29988);

(statearr_30020[(8)] = inst_29973);

return statearr_30020;
})();
var statearr_30021_30051 = state_30008__$1;
(statearr_30021_30051[(2)] = null);

(statearr_30021_30051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30009 === (9))){
var inst_29972 = (state_30008[(7)]);
var inst_29986 = cljs.core.vec.call(null,inst_29972);
var state_30008__$1 = state_30008;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30008__$1,(11),out,inst_29986);
} else {
if((state_val_30009 === (5))){
var inst_29976 = (state_30008[(9)]);
var inst_29981 = (state_30008[(11)]);
var inst_29972 = (state_30008[(7)]);
var inst_29973 = (state_30008[(8)]);
var inst_29980 = (inst_29972[inst_29973] = inst_29976);
var inst_29981__$1 = (inst_29973 + (1));
var inst_29982 = (inst_29981__$1 < n);
var state_30008__$1 = (function (){var statearr_30022 = state_30008;
(statearr_30022[(12)] = inst_29980);

(statearr_30022[(11)] = inst_29981__$1);

return statearr_30022;
})();
if(cljs.core.truth_(inst_29982)){
var statearr_30023_30052 = state_30008__$1;
(statearr_30023_30052[(1)] = (8));

} else {
var statearr_30024_30053 = state_30008__$1;
(statearr_30024_30053[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30009 === (14))){
var inst_30001 = (state_30008[(2)]);
var inst_30002 = cljs.core.async.close_BANG_.call(null,out);
var state_30008__$1 = (function (){var statearr_30026 = state_30008;
(statearr_30026[(13)] = inst_30001);

return statearr_30026;
})();
var statearr_30027_30054 = state_30008__$1;
(statearr_30027_30054[(2)] = inst_30002);

(statearr_30027_30054[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30009 === (10))){
var inst_29992 = (state_30008[(2)]);
var state_30008__$1 = state_30008;
var statearr_30028_30055 = state_30008__$1;
(statearr_30028_30055[(2)] = inst_29992);

(statearr_30028_30055[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30009 === (8))){
var inst_29981 = (state_30008[(11)]);
var inst_29972 = (state_30008[(7)]);
var tmp30025 = inst_29972;
var inst_29972__$1 = tmp30025;
var inst_29973 = inst_29981;
var state_30008__$1 = (function (){var statearr_30029 = state_30008;
(statearr_30029[(7)] = inst_29972__$1);

(statearr_30029[(8)] = inst_29973);

return statearr_30029;
})();
var statearr_30030_30056 = state_30008__$1;
(statearr_30030_30056[(2)] = null);

(statearr_30030_30056[(1)] = (2));


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
});})(c__27356__auto___30042,out))
;
return ((function (switch__27244__auto__,c__27356__auto___30042,out){
return (function() {
var cljs$core$async$state_machine__27245__auto__ = null;
var cljs$core$async$state_machine__27245__auto____0 = (function (){
var statearr_30034 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30034[(0)] = cljs$core$async$state_machine__27245__auto__);

(statearr_30034[(1)] = (1));

return statearr_30034;
});
var cljs$core$async$state_machine__27245__auto____1 = (function (state_30008){
while(true){
var ret_value__27246__auto__ = (function (){try{while(true){
var result__27247__auto__ = switch__27244__auto__.call(null,state_30008);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27247__auto__;
}
break;
}
}catch (e30035){if((e30035 instanceof Object)){
var ex__27248__auto__ = e30035;
var statearr_30036_30057 = state_30008;
(statearr_30036_30057[(5)] = ex__27248__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30008);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30035;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30058 = state_30008;
state_30008 = G__30058;
continue;
} else {
return ret_value__27246__auto__;
}
break;
}
});
cljs$core$async$state_machine__27245__auto__ = function(state_30008){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27245__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27245__auto____1.call(this,state_30008);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27245__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27245__auto____0;
cljs$core$async$state_machine__27245__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27245__auto____1;
return cljs$core$async$state_machine__27245__auto__;
})()
;})(switch__27244__auto__,c__27356__auto___30042,out))
})();
var state__27358__auto__ = (function (){var statearr_30037 = f__27357__auto__.call(null);
(statearr_30037[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27356__auto___30042);

return statearr_30037;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27358__auto__);
});})(c__27356__auto___30042,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args30059 = [];
var len__26259__auto___30133 = arguments.length;
var i__26260__auto___30134 = (0);
while(true){
if((i__26260__auto___30134 < len__26259__auto___30133)){
args30059.push((arguments[i__26260__auto___30134]));

var G__30135 = (i__26260__auto___30134 + (1));
i__26260__auto___30134 = G__30135;
continue;
} else {
}
break;
}

var G__30061 = args30059.length;
switch (G__30061) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30059.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27356__auto___30137 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27356__auto___30137,out){
return (function (){
var f__27357__auto__ = (function (){var switch__27244__auto__ = ((function (c__27356__auto___30137,out){
return (function (state_30103){
var state_val_30104 = (state_30103[(1)]);
if((state_val_30104 === (7))){
var inst_30099 = (state_30103[(2)]);
var state_30103__$1 = state_30103;
var statearr_30105_30138 = state_30103__$1;
(statearr_30105_30138[(2)] = inst_30099);

(statearr_30105_30138[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30104 === (1))){
var inst_30062 = [];
var inst_30063 = inst_30062;
var inst_30064 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_30103__$1 = (function (){var statearr_30106 = state_30103;
(statearr_30106[(7)] = inst_30063);

(statearr_30106[(8)] = inst_30064);

return statearr_30106;
})();
var statearr_30107_30139 = state_30103__$1;
(statearr_30107_30139[(2)] = null);

(statearr_30107_30139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30104 === (4))){
var inst_30067 = (state_30103[(9)]);
var inst_30067__$1 = (state_30103[(2)]);
var inst_30068 = (inst_30067__$1 == null);
var inst_30069 = cljs.core.not.call(null,inst_30068);
var state_30103__$1 = (function (){var statearr_30108 = state_30103;
(statearr_30108[(9)] = inst_30067__$1);

return statearr_30108;
})();
if(inst_30069){
var statearr_30109_30140 = state_30103__$1;
(statearr_30109_30140[(1)] = (5));

} else {
var statearr_30110_30141 = state_30103__$1;
(statearr_30110_30141[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30104 === (15))){
var inst_30093 = (state_30103[(2)]);
var state_30103__$1 = state_30103;
var statearr_30111_30142 = state_30103__$1;
(statearr_30111_30142[(2)] = inst_30093);

(statearr_30111_30142[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30104 === (13))){
var state_30103__$1 = state_30103;
var statearr_30112_30143 = state_30103__$1;
(statearr_30112_30143[(2)] = null);

(statearr_30112_30143[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30104 === (6))){
var inst_30063 = (state_30103[(7)]);
var inst_30088 = inst_30063.length;
var inst_30089 = (inst_30088 > (0));
var state_30103__$1 = state_30103;
if(cljs.core.truth_(inst_30089)){
var statearr_30113_30144 = state_30103__$1;
(statearr_30113_30144[(1)] = (12));

} else {
var statearr_30114_30145 = state_30103__$1;
(statearr_30114_30145[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30104 === (3))){
var inst_30101 = (state_30103[(2)]);
var state_30103__$1 = state_30103;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30103__$1,inst_30101);
} else {
if((state_val_30104 === (12))){
var inst_30063 = (state_30103[(7)]);
var inst_30091 = cljs.core.vec.call(null,inst_30063);
var state_30103__$1 = state_30103;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30103__$1,(15),out,inst_30091);
} else {
if((state_val_30104 === (2))){
var state_30103__$1 = state_30103;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30103__$1,(4),ch);
} else {
if((state_val_30104 === (11))){
var inst_30071 = (state_30103[(10)]);
var inst_30067 = (state_30103[(9)]);
var inst_30081 = (state_30103[(2)]);
var inst_30082 = [];
var inst_30083 = inst_30082.push(inst_30067);
var inst_30063 = inst_30082;
var inst_30064 = inst_30071;
var state_30103__$1 = (function (){var statearr_30115 = state_30103;
(statearr_30115[(7)] = inst_30063);

(statearr_30115[(11)] = inst_30083);

(statearr_30115[(12)] = inst_30081);

(statearr_30115[(8)] = inst_30064);

return statearr_30115;
})();
var statearr_30116_30146 = state_30103__$1;
(statearr_30116_30146[(2)] = null);

(statearr_30116_30146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30104 === (9))){
var inst_30063 = (state_30103[(7)]);
var inst_30079 = cljs.core.vec.call(null,inst_30063);
var state_30103__$1 = state_30103;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30103__$1,(11),out,inst_30079);
} else {
if((state_val_30104 === (5))){
var inst_30071 = (state_30103[(10)]);
var inst_30067 = (state_30103[(9)]);
var inst_30064 = (state_30103[(8)]);
var inst_30071__$1 = f.call(null,inst_30067);
var inst_30072 = cljs.core._EQ_.call(null,inst_30071__$1,inst_30064);
var inst_30073 = cljs.core.keyword_identical_QMARK_.call(null,inst_30064,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_30074 = (inst_30072) || (inst_30073);
var state_30103__$1 = (function (){var statearr_30117 = state_30103;
(statearr_30117[(10)] = inst_30071__$1);

return statearr_30117;
})();
if(cljs.core.truth_(inst_30074)){
var statearr_30118_30147 = state_30103__$1;
(statearr_30118_30147[(1)] = (8));

} else {
var statearr_30119_30148 = state_30103__$1;
(statearr_30119_30148[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30104 === (14))){
var inst_30096 = (state_30103[(2)]);
var inst_30097 = cljs.core.async.close_BANG_.call(null,out);
var state_30103__$1 = (function (){var statearr_30121 = state_30103;
(statearr_30121[(13)] = inst_30096);

return statearr_30121;
})();
var statearr_30122_30149 = state_30103__$1;
(statearr_30122_30149[(2)] = inst_30097);

(statearr_30122_30149[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30104 === (10))){
var inst_30086 = (state_30103[(2)]);
var state_30103__$1 = state_30103;
var statearr_30123_30150 = state_30103__$1;
(statearr_30123_30150[(2)] = inst_30086);

(statearr_30123_30150[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30104 === (8))){
var inst_30063 = (state_30103[(7)]);
var inst_30071 = (state_30103[(10)]);
var inst_30067 = (state_30103[(9)]);
var inst_30076 = inst_30063.push(inst_30067);
var tmp30120 = inst_30063;
var inst_30063__$1 = tmp30120;
var inst_30064 = inst_30071;
var state_30103__$1 = (function (){var statearr_30124 = state_30103;
(statearr_30124[(7)] = inst_30063__$1);

(statearr_30124[(8)] = inst_30064);

(statearr_30124[(14)] = inst_30076);

return statearr_30124;
})();
var statearr_30125_30151 = state_30103__$1;
(statearr_30125_30151[(2)] = null);

(statearr_30125_30151[(1)] = (2));


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
});})(c__27356__auto___30137,out))
;
return ((function (switch__27244__auto__,c__27356__auto___30137,out){
return (function() {
var cljs$core$async$state_machine__27245__auto__ = null;
var cljs$core$async$state_machine__27245__auto____0 = (function (){
var statearr_30129 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30129[(0)] = cljs$core$async$state_machine__27245__auto__);

(statearr_30129[(1)] = (1));

return statearr_30129;
});
var cljs$core$async$state_machine__27245__auto____1 = (function (state_30103){
while(true){
var ret_value__27246__auto__ = (function (){try{while(true){
var result__27247__auto__ = switch__27244__auto__.call(null,state_30103);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27247__auto__;
}
break;
}
}catch (e30130){if((e30130 instanceof Object)){
var ex__27248__auto__ = e30130;
var statearr_30131_30152 = state_30103;
(statearr_30131_30152[(5)] = ex__27248__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30103);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30130;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30153 = state_30103;
state_30103 = G__30153;
continue;
} else {
return ret_value__27246__auto__;
}
break;
}
});
cljs$core$async$state_machine__27245__auto__ = function(state_30103){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27245__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27245__auto____1.call(this,state_30103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27245__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27245__auto____0;
cljs$core$async$state_machine__27245__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27245__auto____1;
return cljs$core$async$state_machine__27245__auto__;
})()
;})(switch__27244__auto__,c__27356__auto___30137,out))
})();
var state__27358__auto__ = (function (){var statearr_30132 = f__27357__auto__.call(null);
(statearr_30132[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27356__auto___30137);

return statearr_30132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27358__auto__);
});})(c__27356__auto___30137,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1490330690329