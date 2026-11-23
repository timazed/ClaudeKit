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
var chunk_qkq8jy2e_exports = {};
__export(chunk_qkq8jy2e_exports, {
  full: () => c,
  simple: () => l
});
module.exports = __toCommonJS(chunk_qkq8jy2e_exports);
function c(e, s) {
  new i(s).one(e);
}
function l(e, s) {
  let t = s;
  new i((a, r, n) => {
    if ("params" in a) s.Function?.(a, r);
    let o = n && a.type === "Identifier" ? "VariablePattern" : a.type;
    t[o]?.(a, r);
  }).one(e);
}
class i {
  visit;
  ancestors = [];
  constructor(e) {
    this.visit = e;
  }
  all(e = [], s = false) {
    for (let t of e) this.one(t, s);
  }
  one(e, s = false) {
    if (!e) return;
    switch (this.ancestors.push(e), e.type) {
      case "Identifier":
      case "Literal":
      case "ThisExpression":
      case "Super":
      case "PrivateIdentifier":
      case "MetaProperty":
      case "TemplateElement":
      case "EmptyStatement":
      case "DebuggerStatement":
      case "BreakStatement":
      case "ContinueStatement":
      case "ImportSpecifier":
      case "ImportDefaultSpecifier":
      case "ImportNamespaceSpecifier":
        break;
      case "AwaitExpression":
      case "UnaryExpression":
      case "UpdateExpression":
      case "YieldExpression":
      case "SpreadElement":
      case "RestElement":
      case "ReturnStatement":
      case "ThrowStatement":
        this.one(e.argument, e.type === "RestElement");
        break;
      case "ChainExpression":
      case "ExpressionStatement":
        this.one(e.expression);
        break;
      case "BinaryExpression":
      case "LogicalExpression":
        this.one(e.left), this.one(e.right);
        break;
      case "AssignmentExpression":
      case "AssignmentPattern":
        this.one(e.left, true), this.one(e.right);
        break;
      case "MemberExpression":
        this.one(e.object), this.one(e.computed ? e.property : null);
        break;
      case "CallExpression":
      case "NewExpression":
        this.one(e.callee), this.all(e.arguments);
        break;
      case "ConditionalExpression":
      case "IfStatement":
        this.one(e.test), this.one(e.consequent), this.one(e.alternate);
        break;
      case "ArrayExpression":
      case "ArrayPattern":
        this.all(e.elements, e.type === "ArrayPattern");
        break;
      case "ObjectExpression":
        this.all(e.properties);
        break;
      case "ObjectPattern":
        for (let t of e.properties) if (t.type === "RestElement") this.one(t.argument, true);
        else this.one(t.computed ? t.key : null), this.one(t.value, true);
        break;
      case "Property":
      case "PropertyDefinition":
      case "MethodDefinition":
        this.one(e.computed ? e.key : null), this.one(e.value);
        break;
      case "SequenceExpression":
        this.all(e.expressions);
        break;
      case "TemplateLiteral":
        this.all(e.quasis), this.all(e.expressions);
        break;
      case "TaggedTemplateExpression":
        this.one(e.tag), this.one(e.quasi);
        break;
      case "ArrowFunctionExpression":
      case "FunctionExpression":
      case "FunctionDeclaration":
        this.one(e.id, true), this.all(e.params, true), this.one(e.body);
        break;
      case "ClassExpression":
      case "ClassDeclaration":
        this.one(e.id, true), this.one(e.superClass), this.one(e.body);
        break;
      case "Program":
      case "BlockStatement":
      case "StaticBlock":
      case "ClassBody":
        this.all(e.body);
        break;
      case "VariableDeclaration":
        this.all(e.declarations);
        break;
      case "VariableDeclarator":
        this.one(e.id, true), this.one(e.init);
        break;
      case "LabeledStatement":
        this.one(e.body);
        break;
      case "WithStatement":
        this.one(e.object), this.one(e.body);
        break;
      case "WhileStatement":
      case "DoWhileStatement":
        this.one(e.test), this.one(e.body);
        break;
      case "ForStatement":
        this.one(e.init), this.one(e.test), this.one(e.update), this.one(e.body);
        break;
      case "ForInStatement":
      case "ForOfStatement":
        this.one(e.left), this.one(e.right), this.one(e.body);
        break;
      case "SwitchStatement":
        this.one(e.discriminant), this.all(e.cases);
        break;
      case "SwitchCase":
        this.one(e.test), this.all(e.consequent);
        break;
      case "TryStatement":
        this.one(e.block), this.one(e.handler), this.one(e.finalizer);
        break;
      case "CatchClause":
        this.one(e.param, true), this.one(e.body);
        break;
      case "ImportExpression":
        this.one(e.source), this.one(e.options);
        break;
      case "ImportDeclaration":
        this.all(e.specifiers), this.one(e.source), this.all(e.attributes);
        break;
      case "ImportAttribute":
        this.one(e.value);
        break;
      case "ExportDefaultDeclaration":
        this.one(e.declaration);
        break;
      case "ExportNamedDeclaration":
        this.one(e.declaration), this.one(e.source), this.all(e.attributes);
        break;
      case "ExportAllDeclaration":
        this.one(e.exported), this.one(e.source), this.all(e.attributes);
        break;
      default:
        throw Error("No walker function defined for node type");
    }
    this.visit(e, this.ancestors, s), this.ancestors.pop();
  }
}
