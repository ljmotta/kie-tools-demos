"use strict";(self.webpackChunk_kie_tools_boxed_expression_component=self.webpackChunk_kie_tools_boxed_expression_component||[]).push([[582],{"./stories/useCases/LoanOriginations/BureauStrategyDecisionService/Eligibility/Eligibility.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Expression:()=>Expression,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__,eligibilityExpression:()=>eligibilityExpression});var _src_api__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/api/index.ts"),_boxedExpressionStoriesWrapper__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./stories/boxedExpressionStoriesWrapper.tsx"),_src_expressions__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/expressions/index.ts"),_boxedExpressionEditorBase__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./stories/useCases/LoanOriginations/boxedExpressionEditorBase.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Use cases/Loan Originations/Bureau Strategy Decision Service/Eligibility",component:_src_expressions__WEBPACK_IMPORTED_MODULE_2__.ym,includeStories:/^[A-Z]/},eligibilityExpression={id:"_830C9FEF-FA57-4245-8FFF-1E7F305F4536",name:"Eligibility",dataType:"t.Eligibility",logicType:_src_api__WEBPACK_IMPORTED_MODULE_0__.ExpressionDefinitionLogicType.DecisionTable,hitPolicy:_src_api__WEBPACK_IMPORTED_MODULE_0__.DecisionTableExpressionDefinitionHitPolicy.First,aggregation:_src_api__WEBPACK_IMPORTED_MODULE_0__.DecisionTableExpressionDefinitionBuiltInAggregation["<None>"],annotations:[{name:"annotation-1",width:100}],input:[{id:"_60976225-DA1D-4C7E-A910-E341D763C218",name:"Applicant data.Age",dataType:_src_api__WEBPACK_IMPORTED_MODULE_0__.DmnBuiltInDataType.Number,width:150,idLiteralExpression:"_7F37D542-44A4-41CF-8FB1-A28846FB9733"},{id:"_82E34039-BBE7-46C8-91BF-B2BB0E8EE905",name:"Pre-bureau affordabillity",dataType:_src_api__WEBPACK_IMPORTED_MODULE_0__.DmnBuiltInDataType.Boolean,width:180,idLiteralExpression:"_8037BDB5-E08B-4E4B-8BFB-86ECBB0C8E19"},{id:"_1D329E96-6CF6-46DD-A9EA-3478C5F39704",name:"Pre-bureau risk category",dataType:"t.BureauRiskCategory",width:180,idLiteralExpression:"_335DFCA2-2C76-4D72-9534-DF3F1453F405"}],output:[{id:"_AAEB91CE-F337-4071-A9F9-8D225C0013C8",name:"Eligibility",dataType:"t.Eligibility",width:150}],rules:[{id:"_A248202B-E33B-40E9-99E7-1259AD34AC98",inputEntries:[{id:"_D2A538BE-A6AE-469A-8A63-A8826A90FCE2",content:"<18"},{id:"_146D0D81-1AFD-4BA7-93E4-A0F62D39C1B0",content:"-"},{id:"_F374FE00-72B8-43AC-818E-0791FA7B0B1F",content:"-"}],outputEntries:[{id:"_2A1B4461-1291-4ECE-903D-01127D1A1C87",content:'"Ineligible"'}],annotationEntries:[""]},{id:"_EA508F7C-4858-4AAD-B32B-DB34D920D1F9",inputEntries:[{id:"_1C08CC38-579D-4C48-981C-8F0E8EEFD066",content:"-"},{id:"_2DCB24FA-D34B-49F4-B93E-E88495D20DB0",content:"false"},{id:"_FB259E0D-3568-41DC-9C60-0843623B83AE",content:"-"}],outputEntries:[{id:"_CDC56FA2-FF08-44BB-8A5F-83FE7CECE62E",content:'"Ineligible"'}],annotationEntries:[""]},{id:"_F1586A1F-9263-400B-BD5A-2054DE7237B4",inputEntries:[{id:"_992575D4-9337-4500-B95E-0B52FACABECE",content:"-"},{id:"_1E5D4C7B-2FBB-4382-B776-6F4FCE24F04C",content:"-"},{id:"_94C4B06B-D58D-492D-80FC-BC7177D83951",content:'"Decline"'}],outputEntries:[{id:"_68120756-8AEA-4946-A8B6-45D4CF27B793",content:'"Ineligible"'}],annotationEntries:[""]},{id:"_FF7FFE97-DF00-442F-B3E3-E3C66C95160F",inputEntries:[{id:"_7AE9C2AB-2148-42F7-AC02-B465B844541A",content:"-"},{id:"_6BCDF325-5A65-4C50-97B6-D907938B31D7",content:"-"},{id:"_1B17B6E8-BCC7-46E6-8EA7-45CB3EDE3DBF",content:"-"}],outputEntries:[{id:"_17CCED2E-3B24-4CC3-B4E9-1DBE6EC74871",content:'"Eligible"'}],annotationEntries:[""]}]},Expression={render:args=>(0,_boxedExpressionStoriesWrapper__WEBPACK_IMPORTED_MODULE_1__.$J)(),args:{decisionNodeId:"_00000000-0000-0000-0000-000000000000",expressionDefinition:eligibilityExpression,dataTypes:_boxedExpressionEditorBase__WEBPACK_IMPORTED_MODULE_3__.p,beeGwtService:_boxedExpressionStoriesWrapper__WEBPACK_IMPORTED_MODULE_1__.mJ,pmmlParams:_boxedExpressionStoriesWrapper__WEBPACK_IMPORTED_MODULE_1__.TW,isResetSupportedOnRootExpression:!1}};Expression.parameters={...Expression.parameters,docs:{...Expression.parameters?.docs,source:{originalSource:'{\n  render: args => BoxedExpressionEditorWrapper(),\n  args: {\n    decisionNodeId: "_00000000-0000-0000-0000-000000000000",\n    expressionDefinition: eligibilityExpression,\n    dataTypes: loanOriginationsDataTypes,\n    beeGwtService,\n    pmmlParams,\n    isResetSupportedOnRootExpression: false\n  }\n}',...Expression.parameters?.docs?.source}}};const __namedExportsOrder=["eligibilityExpression","Expression"]}}]);