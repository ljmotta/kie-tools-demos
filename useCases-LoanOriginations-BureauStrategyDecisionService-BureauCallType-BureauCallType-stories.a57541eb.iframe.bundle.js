"use strict";(self.webpackChunk_kie_tools_boxed_expression_component=self.webpackChunk_kie_tools_boxed_expression_component||[]).push([[274],{"./stories/useCases/LoanOriginations/BureauStrategyDecisionService/BureauCallType/BureauCallType.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Expression:()=>Expression,__namedExportsOrder:()=>__namedExportsOrder,bureauCallTypeExpression:()=>bureauCallTypeExpression,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _src_api__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/api/index.ts"),_boxedExpressionStoriesWrapper__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./stories/boxedExpressionStoriesWrapper.tsx"),_src_expressions__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/expressions/index.ts"),_boxedExpressionEditorBase__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./stories/useCases/LoanOriginations/boxedExpressionEditorBase.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Use cases/Loan Originations/Bureau Strategy Decision Service/Bureau call type",component:_src_expressions__WEBPACK_IMPORTED_MODULE_2__.ym,includeStories:/^[A-Z]/},bureauCallTypeExpression={id:"_7FB4A019-EC04-4153-86C1-C90A8BA8E6C3",name:"Bureau call type",dataType:"t.BureauCallType",logicType:_src_api__WEBPACK_IMPORTED_MODULE_0__.ExpressionDefinitionLogicType.DecisionTable,hitPolicy:_src_api__WEBPACK_IMPORTED_MODULE_0__.DecisionTableExpressionDefinitionHitPolicy.Unique,aggregation:_src_api__WEBPACK_IMPORTED_MODULE_0__.DecisionTableExpressionDefinitionBuiltInAggregation["<None>"],annotations:[{name:"annotation-1",width:145}],input:[{id:"_EDEB6C03-3FD1-4845-A18F-1463314BB5FB",name:"Pre-bureau risk category",dataType:"t.BureauRiskCategory",width:210,idLiteralExpression:"_72DD65BD-56CA-4429-B5FD-2EBDEEE01B9B"}],output:[{id:"_BC216B66-6B93-47B7-8F37-8B03D392D653",name:"Bureau call type",dataType:"t.BureauCallType",width:175}],rules:[{id:"_BCF175DE-81A0-428C-BC28-4D12605ACBE8",inputEntries:[{id:"_C3306F98-0B9A-482C-8951-72F58C101FE3",content:'"High", "Medium"'}],outputEntries:[{id:"_5D1A4638-1023-44B2-9FD3-47862126935F",content:'"Full"'}],annotationEntries:[""]},{id:"_B1C67777-2868-471F-98DE-C634BC3FBD90",inputEntries:[{id:"_53EEAFDA-1F59-49A6-A347-9F37F8FCD9E4",content:'"Low"'}],outputEntries:[{id:"_F22833EE-A811-428B-979B-EE1F2E7FAF96",content:'"Mini"'}],annotationEntries:[""]},{id:"_E7F703F9-08E3-4B35-AFF5-F6F5F2AE5640",inputEntries:[{id:"_9E274DD9-73C1-4D06-B97A-C0112D33AB8A",content:'"Very Low", "Decline"'}],outputEntries:[{id:"_AB3E865D-1AB4-4E49-9B5B-BD328190BBA8",content:'"None"'}],annotationEntries:[""]}]},Expression={render:args=>(0,_boxedExpressionStoriesWrapper__WEBPACK_IMPORTED_MODULE_1__.$J)(),args:{decisionNodeId:"_00000000-0000-0000-0000-000000000000",expressionDefinition:bureauCallTypeExpression,dataTypes:_boxedExpressionEditorBase__WEBPACK_IMPORTED_MODULE_3__.p,beeGwtService:_boxedExpressionStoriesWrapper__WEBPACK_IMPORTED_MODULE_1__.mJ,pmmlParams:_boxedExpressionStoriesWrapper__WEBPACK_IMPORTED_MODULE_1__.TW,isResetSupportedOnRootExpression:!1}};Expression.parameters={...Expression.parameters,docs:{...Expression.parameters?.docs,source:{originalSource:'{\n  render: args => BoxedExpressionEditorWrapper(),\n  args: {\n    decisionNodeId: "_00000000-0000-0000-0000-000000000000",\n    expressionDefinition: bureauCallTypeExpression,\n    dataTypes: loanOriginationsDataTypes,\n    beeGwtService,\n    pmmlParams,\n    isResetSupportedOnRootExpression: false\n  }\n}',...Expression.parameters?.docs?.source}}};const __namedExportsOrder=["bureauCallTypeExpression","Expression"]}}]);