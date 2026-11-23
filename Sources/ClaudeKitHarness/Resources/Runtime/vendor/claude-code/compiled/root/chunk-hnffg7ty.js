const __prototypeModuleURL = require("node:url").pathToFileURL(__filename).href;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var chunk_hnffg7ty_exports = {};
__export(chunk_hnffg7ty_exports, {
  E$n: () => E$n,
  U8e: () => U8e,
  k$n: () => k$n,
  yre: () => yre
});
module.exports = __toCommonJS(chunk_hnffg7ty_exports);
var N = D("altGlyph altGlyphDef altGlyphItem animateColor animateMotion animateTransform clipPath feBlend feColorMatrix feComponentTransfer feComposite feConvolveMatrix feDiffuseLighting feDisplacementMap feDistantLight feFlood feFuncA feFuncB feFuncG feFuncR feGaussianBlur feImage feMerge feMergeNode feMorphology feOffset fePointLight feSpecularLighting feSpotLight feTile feTurbulence foreignObject glyphRef linearGradient radialGradient textPath"), R = D("attributeName attributeType baseFrequency baseProfile calcMode clipPathUnits diffuseConstant edgeMode filterUnits glyphRef gradientTransform gradientUnits kernelMatrix kernelUnitLength keyPoints keySplines keyTimes lengthAdjust limitingConeAngle markerHeight markerUnits markerWidth maskContentUnits maskUnits numOctaves pathLength patternContentUnits patternTransform patternUnits pointsAtX pointsAtY pointsAtZ preserveAlpha preserveAspectRatio primitiveUnits refX refY repeatCount repeatDur requiredExtensions requiredFeatures specularConstant specularExponent spreadMethod startOffset stdDeviation stitchTiles surfaceScale systemLanguage tableValues targetX targetY textLength viewBox viewTarget xChannelSelector yChannelSelector zoomAndPan"), C = yre("xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type xml:lang xml:space xmlns:xlink");
class U8e {
  nodeName;
  data;
  attributes;
  namespace;
  parentNode = null;
  childNodes = [];
  isOpen = false;
  tally;
  stops = 0;
  likeness = 0;
  constructor(r, t = "", a, e) {
    this.nodeName = r;
    this.data = t;
    this.attributes = a;
    this.namespace = e;
  }
  get children() {
    return this.childNodes.filter((r) => r.namespace);
  }
  get tagName() {
    return this.namespace === "html" ? k$n(this.nodeName) : this.namespace && (this.namespace === "svg" && N.get(this.nodeName) || this.nodeName);
  }
  get attrs() {
    let r = [];
    return this.attributes?.forEach((t, a) => r.push({ name: this.namespace === "html" ? a : this.#r(a), value: t })), r;
  }
  #r(r) {
    return C.has(r) ? r.slice(r.indexOf(":") + 1) : (this.namespace === "svg" ? R.get(r) : r === "definitionurl" && "definitionURL") || r;
  }
  get isAllSpace() {
    return this.spaceAtStart === this.end - this.start;
  }
  getAttribute(r) {
    return this.attributes?.get(r) ?? null;
  }
}
function k$n(r) {
  return /[^!-~]/.test(r) ? r.replace(/[A-Z]+/g, (t) => t.toLowerCase()) : r.toLowerCase();
}
function yre(r) {
  return new Set(r.split(" "));
}
function D(r) {
  return new Map(r.split(" ").map((t) => [t.toLowerCase(), t]));
}
var L = `9:Tab NewLine n:excl QUOT!,quot! num dollar percnt AMP!,amp! apos lpar rpar ast,midast plus comma 2:period sol
b:colon semi LT!,lt! 0+6he:nvlt equals 0+6hx:bne GT!,gt! 0+6he:nvgt quest commat r:lbrack,lsqb bsol rbrack,rsqb
Hat UnderBar,lowbar DiacriticalGrave,grave 6+2y:fjlig l:lbrace,lcub VerticalLine,verbar,vert rbrace,rcub
z:NonBreakingSpace,nbsp! iexcl! cent! pound! curren! yen! brvbar! sect! Dot,DoubleDot,die,uml! COPY!,copy!
ordf! laquo! not! shy! REG!,circledR,reg! macr!,strns deg! PlusMinus,plusmn!,pm sup2! sup3!
DiacriticalAcute,acute! micro! para! CenterDot,centerdot,middot! Cedilla,cedil! sup1! ordm! raquo! frac14!
frac12!,half frac34! iquest! Agrave! Aacute! Acirc! Atilde! Auml! Aring!,angst AElig! Ccedil! Egrave! Eacute!
Ecirc! Euml! Igrave! Iacute! Icirc! Iuml! ETH! Ntilde! Ograve! Oacute! Ocirc! Otilde! Ouml! times! Oslash!
Ugrave! Uacute! Ucirc! Uuml! Yacute! THORN! szlig! agrave! aacute! acirc! atilde! auml! aring! aelig! ccedil!
egrave! eacute! ecirc! euml! igrave! iacute! icirc! iuml! eth! ntilde! ograve! oacute! ocirc! otilde! ouml!
div,divide! oslash! ugrave! uacute! ucirc! uuml! yacute! thorn! yuml! Amacr amacr Abreve abreve Aogon aogon
Cacute cacute Ccirc ccirc Cdot cdot Ccaron ccaron Dcaron dcaron Dstrok dstrok Emacr emacr 3:Edot edot Eogon
eogon Ecaron ecaron Gcirc gcirc Gbreve gbreve Gdot gdot Gcedil 2:Hcirc hcirc Hstrok hstrok Itilde itilde Imacr
imacr 3:Iogon iogon Idot imath,inodot IJlig ijlig Jcirc jcirc Kcedil kcedil kgreen Lacute lacute Lcedil lcedil
Lcaron lcaron Lmidot lmidot Lstrok lstrok Nacute nacute Ncedil ncedil Ncaron ncaron napos ENG eng Omacr omacr
3:Odblac odblac OElig oelig Racute racute Rcedil rcedil Rcaron rcaron Sacute sacute Scirc scirc Scedil scedil
Scaron scaron Tcedil tcedil Tcaron tcaron Tstrok tstrok Utilde utilde Umacr umacr Ubreve ubreve Uring uring
Udblac udblac Uogon uogon Wcirc wcirc Ycirc ycirc Yuml Zacute zacute Zdot zdot Zcaron zcaron k:fnof z:imped
1s:gacute 1u:jmath 3z:circ Hacek,caron h:Breve,breve DiacriticalDot,dot ring ogon DiacriticalTilde,tilde
DiacriticalDoubleAcute,dblac 1g:DownBreve 3k:Alpha Beta Gamma Delta Epsilon Zeta Eta Theta Iota Kappa Lambda Mu
Nu Xi Omicron Pi Rho 2:Sigma Tau Upsilon Phi Chi Psi Omega,ohm 8:alpha beta gamma delta epsi,epsilon zeta eta
theta iota kappa lambda mu nu xi omicron pi rho sigmaf,sigmav,varsigma sigma tau upsi,upsilon phi chi psi omega
8:thetasym,thetav,vartheta Upsi,upsih 3:phiv,straightphi,varphi piv,varpi 6:Gammad digamma,gammad
j:kappav,varkappa rhov,varrho 4:epsiv,straightepsilon,varepsilon backepsilon,bepsi b:IOcy DJcy GJcy Jukcy DScy
Iukcy YIcy Jsercy LJcy NJcy TSHcy KJcy 2:Ubrcy DZcy Acy Bcy Vcy Gcy Dcy IEcy ZHcy Zcy Icy Jcy Kcy Lcy Mcy Ncy
Ocy Pcy Rcy Scy Tcy Ucy Fcy KHcy TScy CHcy SHcy SHCHcy HARDcy Ycy SOFTcy Ecy YUcy YAcy acy bcy vcy gcy dcy iecy
zhcy zcy icy jcy kcy lcy mcy ncy ocy pcy rcy scy tcy ucy fcy khcy tscy chcy shcy shchcy hardcy ycy softcy ecy
yucy yacy 2:iocy djcy gjcy jukcy dscy iukcy yicy jsercy ljcy njcy tshcy kjcy 2:ubrcy dzcy 5gj:ensp emsp emsp13
emsp14 2:numsp puncsp ThinSpace,thinsp VeryThinSpace,hairsp
NegativeMediumSpace,NegativeThickSpace,NegativeThinSpace,NegativeVeryThinSpace,ZeroWidthSpace zwnj zwj lrm rlm
dash,hyphen 3:ndash mdash horbar Verbar,Vert 2:OpenCurlyQuote,lsquo CloseCurlyQuote,rsquo,rsquor lsquor,sbquo
2:OpenCurlyDoubleQuote,ldquo CloseCurlyDoubleQuote,rdquo,rdquor bdquo,ldquor 2:dagger Dagger,ddagger
bull,bullet 3:nldr hellip,mldr a:permil pertenk prime Prime tprime backprime,bprime 4:lsaquo rsaquo
4:OverBar,oline 3:caret 2:hybull frasl b:bsemi 8:qprime 8:MediumSpace 0+6bu:ThickSpace NoBreak ApplyFunction,af
InvisibleTimes,it InvisibleComma,ic 21:euro 1b:TripleDot,tdot DotDot 12:Copf,complexes 3:incare 5:gscr
HilbertSpace,Hscr,hamilt Hfr,Poincareplane Hopf,quaternions planckh hbar,hslash,planck,plankv Iscr,imagline
Ifr,Im,image,imagpart Laplacetrf,Lscr,lagran ell 2:Nopf,naturals numero copysr weierp,wp Popf,primes
Qopf,rationals Rscr,realine Re,Rfr,real,realpart Ropf,reals rx 4:TRADE,trade 2:Zopf,integers 3:mho Zfr,zeetrf
iiota 3:Bernoullis,Bscr,bernou Cayleys,Cfr 2:escr Escr,expectation Fouriertrf,Fscr 2:Mellintrf,Mscr,phmmat
order,orderof,oscr alefsym,aleph beth gimel daleth d:CapitalDifferentialD,DD DifferentialD,dd
ExponentialE,ee,exponentiale ImaginaryI,ii b:frac13 frac23 frac15 frac25 frac35 frac45 frac16 frac56 frac18
frac38 frac58 frac78 1e:LeftArrow,ShortLeftArrow,larr,leftarrow,slarr ShortUpArrow,UpArrow,uarr,uparrow
RightArrow,ShortRightArrow,rarr,rightarrow,srarr DownArrow,ShortDownArrow,darr,downarrow
LeftRightArrow,harr,leftrightarrow UpDownArrow,updownarrow,varr UpperLeftArrow,nwarr,nwarrow
UpperRightArrow,nearr,nearrow LowerRightArrow,searr,searrow LowerLeftArrow,swarr,swarrow nlarr,nleftarrow
nrarr,nrightarrow 2:rarrw,rightsquigarrow 0+mw:nrarrw Larr,twoheadleftarrow Uarr Rarr,twoheadrightarrow Darr
larrtl,leftarrowtail rarrtl,rightarrowtail LeftTeeArrow,mapstoleft UpTeeArrow,mapstoup RightTeeArrow,map,mapsto
DownTeeArrow,mapstodown 2:hookleftarrow,larrhk hookrightarrow,rarrhk larrlp,looparrowleft looparrowright,rarrlp
harrw,leftrightsquigarrow nharr,nleftrightarrow 2:Lsh,lsh Rsh,rsh ldsh rdsh 2:crarr cularr,curvearrowleft
curarr,curvearrowright 3:circlearrowleft,olarr circlearrowright,orarr LeftVector,leftharpoonup,lharu
DownLeftVector,leftharpoondown,lhard RightUpVector,uharr,upharpoonright LeftUpVector,uharl,upharpoonleft
RightVector,rharu,rightharpoonup DownRightVector,rhard,rightharpoondown RightDownVector,dharr,downharpoonright
LeftDownVector,dharl,downharpoonleft RightArrowLeftArrow,rightleftarrows,rlarr UpArrowDownArrow,udarr
LeftArrowRightArrow,leftrightarrows,lrarr leftleftarrows,llarr upuparrows,uuarr rightrightarrows,rrarr
ddarr,downdownarrows ReverseEquilibrium,leftrightharpoons,lrhar Equilibrium,rightleftharpoons,rlhar
nLeftarrow,nlArr nLeftrightarrow,nhArr nRightarrow,nrArr DoubleLeftArrow,Leftarrow,lArr
DoubleUpArrow,Uparrow,uArr DoubleRightArrow,Implies,Rightarrow,rArr DoubleDownArrow,Downarrow,dArr
DoubleLeftRightArrow,Leftrightarrow,hArr,iff DoubleUpDownArrow,Updownarrow,vArr nwArr neArr seArr swArr
Lleftarrow,lAarr Rrightarrow,rAarr 2:zigrarr 7:LeftArrowBar,larrb RightArrowBar,rarrb g:DownArrowUpArrow,duarr
8:loarr roarr hoarr ForAll,forall comp,complement PartialD,part 0+mw:npart Exists,exist
NotExists,nexist,nexists empty,emptyset,emptyv,varnothing 2:Del,nabla Element,in,isin,isinv
NotElement,notin,notinva 2:ReverseElement,SuchThat,ni,niv NotReverseElement,notni,notniva 3:Product,prod
Coproduct,coprod Sum,sum minus MinusPlus,mnplus,mp dotplus,plusdo
2:Backslash,setminus,setmn,smallsetminus,ssetmn lowast SmallCircle,compfn 2:Sqrt,radic
3:Proportional,prop,propto,varpropto,vprop infin angrt ang,angle 0+6he:nang angmsd,measuredangle angsph
VerticalBar,mid,shortmid,smid NotVerticalBar,nmid,nshortmid,nsmid
DoubleVerticalBar,par,parallel,shortparallel,spar NotDoubleVerticalBar,npar,nparallel,nshortparallel,nspar
and,wedge or,vee cap 0+1e68:caps cup 0+1e68:cups Integral,int Int iiint,tint ContourIntegral,conint,oint
Conint,DoubleContourIntegral Cconint cwint ClockwiseContourIntegral,cwconint
CounterClockwiseContourIntegral,awconint Therefore,there4,therefore Because,becaus,because ratio
Colon,Proportion dotminus,minusd 2:mDDot homtht Tilde,sim,thicksim,thksim 0+6he:nvsim backsim,bsim 0+mp:race
ac,mstpos 0+mr:acE acd VerticalTilde,wr,wreath NotTilde,nsim EqualTilde,eqsim,esim 0+mw:NotEqualTilde,nesim
TildeEqual,sime,simeq NotTildeEqual,nsime,nsimeq TildeFullEqual,cong simne NotTildeFullEqual,ncong
TildeTilde,ap,approx,asymp,thickapprox,thkap NotTildeTilde,nap,napprox ape,approxeq apid 0+mw:napid
backcong,bcong CupCap,asympeq 0+6he:nvap Bumpeq,HumpDownHump,bump 0+mw:NotHumpDownHump,nbump
HumpEqual,bumpe,bumpeq 0+mw:NotHumpEqual,nbumpe DotEqual,doteq,esdot 0+mw:nedot doteqdot,eDot
efDot,fallingdotseq erDot,risingdotseq Assign,colone,coloneq ecolon,eqcolon ecir,eqcirc circeq,cire 2:wedgeq
veeeq 2:triangleq,trie 3:equest,questeq NotEqual,ne Congruent,equiv 0+6hx:bnequiv NotCongruent,nequiv 2:le,leq
0+6he:nvle GreaterEqual,ge,geq 0+6he:nvge LessFullEqual,lE,leqq 0+mw:nlE,nleqq GreaterFullEqual,gE,geqq
0+mw:NotGreaterFullEqual,ngE,ngeqq lnE,lneqq 0+1e68:lvertneqq,lvnE gnE,gneqq 0+1e68:gvertneqq,gvnE
Lt,NestedLessLess,ll 0+mw:NotLessLess,nLtv 0+6he:nLt Gt,NestedGreaterGreater,gg 0+mw:NotGreaterGreater,nGtv
0+6he:nGt between,twixt NotCupCap NotLess,nless,nlt NotGreater,ngt,ngtr NotLessEqual,nle,nleq
NotGreaterEqual,nge,ngeq LessTilde,lesssim,lsim GreaterTilde,gsim,gtrsim NotLessTilde,nlsim
NotGreaterTilde,ngsim LessGreater,lessgtr,lg GreaterLess,gl,gtrless NotLessGreater,ntlg NotGreaterLess,ntgl
Precedes,pr,prec Succeeds,sc,succ PrecedesSlantEqual,prcue,preccurlyeq SucceedsSlantEqual,sccue,succcurlyeq
PrecedesTilde,precsim,prsim SucceedsTilde,scsim,succsim 0+mw:NotSucceedsTilde NotPrecedes,npr,nprec
NotSucceeds,nsc,nsucc sub,subset 0+6he:NotSubset,nsubset,vnsub Superset,sup,supset
0+6he:NotSuperset,nsupset,vnsup nsub nsup SubsetEqual,sube,subseteq SupersetEqual,supe,supseteq
NotSubsetEqual,nsube,nsubseteq NotSupersetEqual,nsupe,nsupseteq subne,subsetneq 0+1e68:varsubsetneq,vsubne
supne,supsetneq 0+1e68:varsupsetneq,vsupne 2:cupdot UnionPlus,uplus SquareSubset,sqsub,sqsubset
0+mw:NotSquareSubset SquareSuperset,sqsup,sqsupset 0+mw:NotSquareSuperset SquareSubsetEqual,sqsube,sqsubseteq
SquareSupersetEqual,sqsupe,sqsupseteq SquareIntersection,sqcap 0+1e68:sqcaps SquareUnion,sqcup 0+1e68:sqcups
CirclePlus,oplus CircleMinus,ominus CircleTimes,otimes osol CircleDot,odot circledcirc,ocir circledast,oast
2:circleddash,odash boxplus,plusb boxminus,minusb boxtimes,timesb dotsquare,sdotb RightTee,vdash LeftTee,dashv
DownTee,top UpTee,bot,bottom,perp 2:models DoubleRightTee,vDash Vdash Vvdash VDash nvdash nvDash nVdash nVDash
prurel 2:LeftTriangle,vartriangleleft,vltri RightTriangle,vartriangleright,vrtri
LeftTriangleEqual,ltrie,trianglelefteq 0+6he:nvltrie RightTriangleEqual,rtrie,trianglerighteq 0+6he:nvrtrie
origof imof multimap,mumap hercon intcal,intercal veebar 2:barvee angrtvb lrtri Wedge,bigwedge,xwedge
Vee,bigvee,xvee Intersection,bigcap,xcap Union,bigcup,xcup Diamond,diam,diamond sdot Star,sstarf
divideontimes,divonx bowtie ltimes rtimes leftthreetimes,lthree rightthreetimes,rthree backsimeq,bsime
curlyvee,cuvee curlywedge,cuwed Sub,Subset Sup,Supset Cap Cup fork,pitchfork epar lessdot,ltdot gtdot,gtrdot Ll
0+mw:nLl Gg,ggg 0+mw:nGg LessEqualGreater,leg,lesseqgtr 0+1e68:lesg GreaterEqualLess,gel,gtreqless 0+1e68:gesl
3:cuepr,curlyeqprec cuesc,curlyeqsucc NotPrecedesSlantEqual,nprcue NotSucceedsSlantEqual,nsccue
NotSquareSubsetEqual,nsqsube NotSquareSupersetEqual,nsqsupe 3:lnsim gnsim precnsim,prnsim scnsim,succnsim
NotLeftTriangle,nltri,ntriangleleft NotRightTriangle,nrtri,ntriangleright
NotLeftTriangleEqual,nltrie,ntrianglelefteq NotRightTriangleEqual,nrtrie,ntrianglerighteq vellip ctdot utdot
dtdot disin isinsv isins isindot 0+mw:notindot notinvc notinvb 2:isinE 0+mw:notinE nisd xnis nis notnivc
notnivb 7:barwed,barwedge Barwed,doublebarwedge 2:LeftCeiling,lceil RightCeiling,rceil LeftFloor,lfloor
RightFloor,rfloor drcrop dlcrop urcrop ulcrop bnot 2:profline profsurf 2:telrec target 6:ulcorn,ulcorner
urcorn,urcorner dlcorn,llcorner drcorn,lrcorner 3:frown,sfrown smile,ssmile a:cylcty profalar 8:topbot 7:ovbar
2:solbar 1p:angzarr 1g:lmoust,lmoustache rmoust,rmoustache 3:OverBracket,tbrk UnderBracket,bbrk bbrktbrk
12:OverParenthesis UnderParenthesis OverBrace UnderBrace 3:trpezium 5:elinters 1o:blank 4l:circledS,oS
1k:HorizontalLine,boxh 2:boxv a:boxdr 4:boxdl 4:boxur 4:boxul 4:boxvr 8:boxvl 8:boxhd 8:boxhu 8:boxvh k:boxH
boxV boxdR boxDr boxDR boxdL boxDl boxDL boxuR boxUr boxUR boxuL boxUl boxUL boxvR boxVr boxVR boxvL boxVl
boxVL boxHd boxhD boxHD boxHu boxhU boxHU boxvH boxVh boxVH k:uhblk 4:lhblk 4:block 9:blk14 blk12 blk34
e:Square,squ,square 9:FilledVerySmallSquare,blacksquare,squarf,squf EmptyVerySmallSquare 2:rect marker 3:fltns
2:bigtriangleup,xutri blacktriangle,utrif triangle,utri 3:blacktriangleright,rtrif rtri,triangleright
4:bigtriangledown,xdtri blacktriangledown,dtrif dtri,triangledown 3:blacktriangleleft,ltrif ltri,triangleleft
7:loz,lozenge cir x:tridot 3:bigcirc,xcirc 9:ultri urtri lltri EmptySmallSquare FilledSmallSquare
9:bigstar,starf star 8:phone 1e:female 2:male u:spades,spadesuit 3:clubs,clubsuit 2:hearts,heartsuit
diamondsuit,diams 4:sung 3:flat natur,natural sharp 4k:check,checkmark 4:cross 9:malt,maltese m:sext
y:VerticalSeparator q:lbbrk rbbrk 2d:bsolhsub suphsol t:LeftDoubleBracket,lobrk RightDoubleBracket,robrk
LeftAngleBracket,lang,langle RightAngleBracket,rang,rangle Lang Rang loang roang
8:LongLeftArrow,longleftarrow,xlarr LongRightArrow,longrightarrow,xrarr
LongLeftRightArrow,longleftrightarrow,xharr DoubleLongLeftArrow,Longleftarrow,xlArr
DoubleLongRightArrow,Longrightarrow,xrArr DoubleLongLeftRightArrow,Longleftrightarrow,xhArr 2:longmapsto,xmap
3:dzigrarr 77:nvlArr nvrArr nvHarr Map 7:lbarr bkarow,rbarr lBarr dbkarow,rBarr RBarr,drbkarow DDotrahd
UpArrowBar DownArrowBar 3:Rarrtl 3:latail ratail lAtail rAtail larrfs rarrfs larrbfs rarrbfs 3:nwarhk nearhk
hksearow,searhk hkswarow,swarhk nwnear nesear,toea seswar,tosa swnwar 9:rarrc 0+mw:nrarrc 2:cudarrr ldca rdca
cudarrl larrpl 3:curarrm cularrp 8:rarrpl 3:harrcir Uarrocir lurdshar ldrushar 3:LeftRightVector
RightUpDownVector DownLeftRightVector LeftUpDownVector LeftVectorBar RightVectorBar RightUpVectorBar
RightDownVectorBar DownLeftVectorBar DownRightVectorBar LeftUpVectorBar LeftDownVectorBar LeftTeeVector
RightTeeVector RightUpTeeVector RightDownTeeVector DownLeftTeeVector DownRightTeeVector LeftUpTeeVector
LeftDownTeeVector lHar uHar rHar dHar luruhar ldrdhar ruluhar rdldhar lharul llhard rharul lrhard
UpEquilibrium,udhar ReverseUpEquilibrium,duhar RoundImplies erarr simrarr larrsim rarrsim rarrap ltlarr
2:gtrarr subrarr 2:suplarr lfisht rfisht ufisht dfisht 6:lopar ropar 5:lbrke rbrke lbrkslu rbrksld lbrksld
rbrkslu langd rangd lparlt rpargt gtlPar ltrPar 4:vzigzag 2:vangrt angrtvbd 7:ange range dwangle uwangle
angmsdaa angmsdab angmsdac angmsdad angmsdae angmsdaf angmsdag angmsdah bemptyv demptyv cemptyv raemptyv
laemptyv ohbar omid opar 2:operp 2:olcross odsold 2:olcir ofcir olt ogt cirscir cirE solb bsolb 4:boxbox
4:trisb rtriltri LeftTriangleBar 0+mw:NotLeftTriangleBar RightTriangleBar 0+mw:NotRightTriangleBar c:iinfin
infintie nvinfin 5:eparsl smeparsl eqvparsl 6:blacklozenge,lozf 9:RuleDelayed 2:dsol a:bigodot,xodot
bigoplus,xoplus bigotimes,xotime 2:biguplus,xuplus 2:bigsqcup,xsqcup 6:iiiint,qint fpartint 3:cirfnint awint
rppolint scpolint npolint pointint quatint intlarhk b:pluscir plusacir simplus plusdu plussim plustwo 2:mcomma
minusdu 3:loplus roplus Cross timesd timesbar 2:smashp lotimes rotimes otimesas Otimes odiv triplus triminus
tritime intprod,iprod 3:amalg capdot 2:ncup ncap capand cupor cupcap capcup cupbrcap capbrcup cupcup capcap
ccups ccaps 3:ccupssm 3:And Or andand oror orslope andslope 2:andv orv andd ord 2:wedbar 7:sdote 4:simdot
3:congdot 0+mw:ncongdot easter apacir apE 0+mw:napE eplus pluse Esim Colone Equal 2:ddotseq,eDDot equivDD ltcir
gtcir ltquest gtquest LessSlantEqual,leqslant,les 0+mw:NotLessSlantEqual,nleqslant,nles
GreaterSlantEqual,geqslant,ges 0+mw:NotGreaterSlantEqual,ngeqslant,nges lesdot gesdot lesdoto gesdoto lesdotor
gesdotol lap,lessapprox gap,gtrapprox lne,lneq gne,gneq lnap,lnapprox gnap,gnapprox lEg,lesseqqgtr
gEl,gtreqqless lsime gsime lsimg gsiml lgE glE lesges gesles els,eqslantless egs,eqslantgtr elsdot egsdot el eg
3:siml simg simlE simgE LessLess 0+mw:NotNestedLessLess GreaterGreater 0+mw:NotNestedGreaterGreater 2:glj gla
ltcc gtcc lescc gescc smt lat smte 0+1e68:smtes late 0+1e68:lates bumpE PrecedesEqual,pre,preceq
0+mw:NotPrecedesEqual,npre,npreceq SucceedsEqual,sce,succeq 0+mw:NotSucceedsEqual,nsce,nsucceq 3:prE scE
precneqq,prnE scnE,succneqq prap,precapprox scap,succapprox precnapprox,prnap scnap,succnapprox Pr Sc subdot
supdot subplus supplus submult supmult subedot supedot subE,subseteqq 0+mw:nsubE,nsubseteqq supE,supseteqq
0+mw:nsupE,nsupseteqq subsim supsim 3:subnE,subsetneqq 0+1e68:varsubsetneqq,vsubnE supnE,supsetneqq
0+1e68:varsupsetneqq,vsupnE 3:csub csup csube csupe subsup supsub subsub supsup suphsub supdsub forkv topfork
mlcp 9:Dashv,DoubleLeftTee 2:Vdashl Barv vBar vBarv 2:Vbar Not bNot rnmid cirmid midcir topcir nhpar parsim
a:parsl 0+6hx:nparsl 1537:fflig filig fllig ffilig ffllig 16zc:Ascr 2:Cscr Dscr 3:Gscr 3:Jscr Kscr 3:Nscr Oscr
Pscr Qscr 2:Sscr Tscr Uscr Vscr Wscr Xscr Yscr Zscr ascr bscr cscr dscr 2:fscr 2:hscr iscr jscr kscr lscr mscr
nscr 2:pscr qscr rscr sscr tscr uscr vscr wscr xscr yscr zscr 1h:Afr Bfr 2:Dfr Efr Ffr Gfr 3:Jfr Kfr Lfr Mfr
Nfr Ofr Pfr Qfr 2:Sfr Tfr Ufr Vfr Wfr Xfr Yfr 2:afr bfr cfr dfr efr ffr gfr hfr ifr jfr kfr lfr mfr nfr ofr pfr
qfr rfr sfr tfr ufr vfr wfr xfr yfr zfr Aopf Bopf 2:Dopf Eopf Fopf Gopf 2:Iopf Jopf Kopf Lopf Mopf 2:Oopf
4:Sopf Topf Uopf Vopf Wopf Xopf Yopf 2:aopf bopf copf dopf eopf fopf gopf hopf iopf jopf kopf lopf mopf nopf
oopf popf qopf ropf sopf topf uopf vopf wopf xopf yopf zopf`;
var U = /&(?:#(?:x[\da-f]+|\d+);?|[\da-z]+[;=]?)/gi, V = "\u20AC\x81\u201A\u0192\u201E\u2026\u2020\u2021\u02C6\u2030\u0160\u2039\u0152\x8D\u017D\x8F\x90\u2018\u2019\u201C\u201D\u2022\u2013\u2014\u02DC\u2122\u0161\u203A\u0153\x9D\u017E\u0178", B = 6, S;
function h(r, t = false) {
  if (!r.includes("&")) return r;
  S ??= M();
  let a = S;
  return r.replace(U, (e) => a.get(e) ?? (e[1] !== "#" ? G(e, a, t) : I(e[2] > "9" ? parseInt(e.slice(3), 16) : parseInt(e.slice(2), 10))));
}
function I(r) {
  return r === 0 || r > 1114111 || r >= 55296 && r <= 57343 ? "\uFFFD" : V[r - 128] ?? String.fromCodePoint(r);
}
function G(r, t, a) {
  let e = Math.min(r.length - 1, B + 1);
  for (; e > 2; e--) {
    let n = t.get(r.slice(0, e));
    if (n) return a ? r : n + r.slice(e);
  }
  return r;
}
function M() {
  let r = /* @__PURE__ */ new Map(), t = 0;
  for (let [, a = "1", e, n] of L.matchAll(/(?:(\w+)(?:\+(\w+))?:)?(\S+)/g)) {
    t += parseInt(a, 36);
    let i = String.fromCodePoint(t) + (e ? String.fromCodePoint(parseInt(e, 36)) : "");
    for (let s of n.split(",")) {
      let o = s.replace("!", "");
      if (r.set(`&${o};`, i), o !== s) r.set(`&${o}`, i);
    }
  }
  return r;
}
var P = /<[a-z!?/]/gi, O = /[^\t\n\f\r />]*/y, H = /[\t\n\f\r /]*/y, z = /[^][^\t\n\f\r />=]*/y, F = /[\t\n\f\r ]*=[\t\n\f\r ]*/y, j = /[^\t\n\f\r >]*/y, Y = /--!?>/g;
function E$n(r, t, a = false) {
  let e = 0, n = "", i = /* @__PURE__ */ new Map(), s = { name: "", lowerName: "", attributes: void 0, closesItself: false, start: 0, end: 0 };
  while (e < r.length && !t.isDone) {
    let o = (l(P, r, e) || r.length + 2) - 2;
    if (!a && o === r.length - 2 && r.endsWith("</")) o = r.length;
    if (o !== e) t.text?.(h(w(r, e, o)));
    if (o === r.length) return;
    let c = r[o + 1] === "/", q = o + (c ? 2 : 1), A = r.charCodeAt(q) | 32;
    if (A < 97 || A > 122) {
      e = J(r, o, t);
      continue;
    }
    e = l(O, r, q);
    let b = T(r, q, e), p = i.get(b);
    if (!p) p = [W(b), k$n(m(b))], i.set(b, p);
    let g, v = false;
    for (; ; ) {
      let d = e;
      if (r[e] !== ">") e = l(H, r, e);
      if (t.isDone || e === r.length && !a) return;
      if (e === r.length) break;
      if (r[e] === ">") {
        v = e > d && r[e - 1] === "/", e++;
        break;
      }
      let f = e;
      e = l(z, r, e), g ??= /* @__PURE__ */ new Map(), t.attributeName?.(r.slice(f, e), g.size);
      let k = k$n(m(T(r, f, e))), x = "", u = l(F, r, e);
      if (u > 0) {
        let E = r[u];
        if (E === '"' || E === "'") {
          if (e = r.indexOf(E, u + 1) + 1, e === 0) return;
          x = w(r, u + 1, e - 1);
        } else e = l(j, r, u), x = r.slice(u, e);
      }
      if (!g.has(k)) g.set(k, h(m(x), true));
    }
    if (s.name = p[0], s.lowerName = p[1], s.attributes = g, s.closesItself = v, s.start = o, s.end = e, c) {
      t.endTag(s);
      continue;
    }
    if (!v || !a) n = s.name;
    let y = t.startTag(s);
    if (y !== "markup") {
      let d = Z(r, e, y, [s.name, n]);
      if (d > e) {
        let f = m(w(r, e, d));
        t.text?.(y === "escapable" ? h(f) : f);
      }
      e = d;
    }
  }
}
function J(r, t, a) {
  if (r.startsWith("<!--", t)) {
    let s = l(/-?>/y, r, t + 4), o = s || l(Y, r, t + 4) || r.length;
    return a.comment(s ? "" : r.slice(t + 4, o).replace(/--!?>$/, ""), o), o;
  }
  if (r.startsWith("<![CDATA[", t) && a.readsCdata()) {
    let s = r.indexOf("]]>", t + 9), o = w(r, t + 9, s < 0 ? r.length : s);
    if (o) a.text?.(o);
    return s < 0 ? r.length : s + 3;
  }
  let e = r.indexOf(">", t + 2), n = e + 1 || r.length, i = r.slice(t + 2, e < 0 ? n : e);
  if (r[t + 1] === "!" && /^doctype/i.test(i)) a.doctype(i.slice(7), e >= 0);
  else if (!r.startsWith("</>", t)) a.comment(r[t + 1] === "?" ? `?${i}` : i, n);
  return n;
}
function Z(r, t, a, e) {
  if (a === "plain") return r.length;
  let n = 0, i = /<!--|-->|<\/?[a-z]+[\t\n\f\r />]/gi;
  i.lastIndex = t;
  for (let s; s = i.exec(r); ) {
    let o = s[0], c = o.slice(1, -1).toUpperCase();
    if (n < 2 && c[0] === "/" && e.includes(c.slice(1))) return s.index;
    if (a !== "script") continue;
    if (o === "<!--") n ||= 1, i.lastIndex -= 2;
    else if (o === "-->") n = 0;
    else if (c === (n === 1 ? "SCRIPT" : n === 2 && "/SCRIPT")) n = 3 - n;
  }
  return r.length;
}
function T(r, t, a) {
  return r.slice(t, a) + (a === r.length ? "<" : "");
}
function w(r, t, a) {
  let e = r.slice(t, a);
  return e.includes("\r") ? e.replace(/\r\n?/g, `
`) : e;
}
function l(r, t, a) {
  return r.lastIndex = a, r.test(t), r.lastIndex;
}
function W(r) {
  return /^[!-~]*$/.test(r) ? r.toUpperCase() : m(r.replace(/[a-z]+/g, (t) => t.toUpperCase()));
}
function m(r) {
  return r.includes("\0") ? r.replaceAll("\0", "\uFFFD") : r;
}
