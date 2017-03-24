// Compiled by ClojureScript 1.9.494 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__32797){
var map__32822 = p__32797;
var map__32822__$1 = ((((!((map__32822 == null)))?((((map__32822.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32822.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32822):map__32822);
var m = map__32822__$1;
var n = cljs.core.get.call(null,map__32822__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__32822__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__32824_32846 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32825_32847 = null;
var count__32826_32848 = (0);
var i__32827_32849 = (0);
while(true){
if((i__32827_32849 < count__32826_32848)){
var f_32850 = cljs.core._nth.call(null,chunk__32825_32847,i__32827_32849);
cljs.core.println.call(null,"  ",f_32850);

var G__32851 = seq__32824_32846;
var G__32852 = chunk__32825_32847;
var G__32853 = count__32826_32848;
var G__32854 = (i__32827_32849 + (1));
seq__32824_32846 = G__32851;
chunk__32825_32847 = G__32852;
count__32826_32848 = G__32853;
i__32827_32849 = G__32854;
continue;
} else {
var temp__4657__auto___32855 = cljs.core.seq.call(null,seq__32824_32846);
if(temp__4657__auto___32855){
var seq__32824_32856__$1 = temp__4657__auto___32855;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32824_32856__$1)){
var c__25965__auto___32857 = cljs.core.chunk_first.call(null,seq__32824_32856__$1);
var G__32858 = cljs.core.chunk_rest.call(null,seq__32824_32856__$1);
var G__32859 = c__25965__auto___32857;
var G__32860 = cljs.core.count.call(null,c__25965__auto___32857);
var G__32861 = (0);
seq__32824_32846 = G__32858;
chunk__32825_32847 = G__32859;
count__32826_32848 = G__32860;
i__32827_32849 = G__32861;
continue;
} else {
var f_32862 = cljs.core.first.call(null,seq__32824_32856__$1);
cljs.core.println.call(null,"  ",f_32862);

var G__32863 = cljs.core.next.call(null,seq__32824_32856__$1);
var G__32864 = null;
var G__32865 = (0);
var G__32866 = (0);
seq__32824_32846 = G__32863;
chunk__32825_32847 = G__32864;
count__32826_32848 = G__32865;
i__32827_32849 = G__32866;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_32867 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__25146__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__25146__auto__)){
return or__25146__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_32867);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_32867)))?cljs.core.second.call(null,arglists_32867):arglists_32867));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/special_forms#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__32828_32868 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32829_32869 = null;
var count__32830_32870 = (0);
var i__32831_32871 = (0);
while(true){
if((i__32831_32871 < count__32830_32870)){
var vec__32832_32872 = cljs.core._nth.call(null,chunk__32829_32869,i__32831_32871);
var name_32873 = cljs.core.nth.call(null,vec__32832_32872,(0),null);
var map__32835_32874 = cljs.core.nth.call(null,vec__32832_32872,(1),null);
var map__32835_32875__$1 = ((((!((map__32835_32874 == null)))?((((map__32835_32874.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32835_32874.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32835_32874):map__32835_32874);
var doc_32876 = cljs.core.get.call(null,map__32835_32875__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_32877 = cljs.core.get.call(null,map__32835_32875__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_32873);

cljs.core.println.call(null," ",arglists_32877);

if(cljs.core.truth_(doc_32876)){
cljs.core.println.call(null," ",doc_32876);
} else {
}

var G__32878 = seq__32828_32868;
var G__32879 = chunk__32829_32869;
var G__32880 = count__32830_32870;
var G__32881 = (i__32831_32871 + (1));
seq__32828_32868 = G__32878;
chunk__32829_32869 = G__32879;
count__32830_32870 = G__32880;
i__32831_32871 = G__32881;
continue;
} else {
var temp__4657__auto___32882 = cljs.core.seq.call(null,seq__32828_32868);
if(temp__4657__auto___32882){
var seq__32828_32883__$1 = temp__4657__auto___32882;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32828_32883__$1)){
var c__25965__auto___32884 = cljs.core.chunk_first.call(null,seq__32828_32883__$1);
var G__32885 = cljs.core.chunk_rest.call(null,seq__32828_32883__$1);
var G__32886 = c__25965__auto___32884;
var G__32887 = cljs.core.count.call(null,c__25965__auto___32884);
var G__32888 = (0);
seq__32828_32868 = G__32885;
chunk__32829_32869 = G__32886;
count__32830_32870 = G__32887;
i__32831_32871 = G__32888;
continue;
} else {
var vec__32837_32889 = cljs.core.first.call(null,seq__32828_32883__$1);
var name_32890 = cljs.core.nth.call(null,vec__32837_32889,(0),null);
var map__32840_32891 = cljs.core.nth.call(null,vec__32837_32889,(1),null);
var map__32840_32892__$1 = ((((!((map__32840_32891 == null)))?((((map__32840_32891.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32840_32891.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32840_32891):map__32840_32891);
var doc_32893 = cljs.core.get.call(null,map__32840_32892__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_32894 = cljs.core.get.call(null,map__32840_32892__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_32890);

cljs.core.println.call(null," ",arglists_32894);

if(cljs.core.truth_(doc_32893)){
cljs.core.println.call(null," ",doc_32893);
} else {
}

var G__32895 = cljs.core.next.call(null,seq__32828_32883__$1);
var G__32896 = null;
var G__32897 = (0);
var G__32898 = (0);
seq__32828_32868 = G__32895;
chunk__32829_32869 = G__32896;
count__32830_32870 = G__32897;
i__32831_32871 = G__32898;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__32842 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__32843 = null;
var count__32844 = (0);
var i__32845 = (0);
while(true){
if((i__32845 < count__32844)){
var role = cljs.core._nth.call(null,chunk__32843,i__32845);
var temp__4657__auto___32899__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___32899__$1)){
var spec_32900 = temp__4657__auto___32899__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_32900));
} else {
}

var G__32901 = seq__32842;
var G__32902 = chunk__32843;
var G__32903 = count__32844;
var G__32904 = (i__32845 + (1));
seq__32842 = G__32901;
chunk__32843 = G__32902;
count__32844 = G__32903;
i__32845 = G__32904;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__32842);
if(temp__4657__auto____$1){
var seq__32842__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32842__$1)){
var c__25965__auto__ = cljs.core.chunk_first.call(null,seq__32842__$1);
var G__32905 = cljs.core.chunk_rest.call(null,seq__32842__$1);
var G__32906 = c__25965__auto__;
var G__32907 = cljs.core.count.call(null,c__25965__auto__);
var G__32908 = (0);
seq__32842 = G__32905;
chunk__32843 = G__32906;
count__32844 = G__32907;
i__32845 = G__32908;
continue;
} else {
var role = cljs.core.first.call(null,seq__32842__$1);
var temp__4657__auto___32909__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___32909__$2)){
var spec_32910 = temp__4657__auto___32909__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_32910));
} else {
}

var G__32911 = cljs.core.next.call(null,seq__32842__$1);
var G__32912 = null;
var G__32913 = (0);
var G__32914 = (0);
seq__32842 = G__32911;
chunk__32843 = G__32912;
count__32844 = G__32913;
i__32845 = G__32914;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1490330692824