/* globals $ */
/* eslint-env node, dirigible */
(function(){
"use strict";

exports.get = function(){
	return require('daoism/dao').get({
			"dbName": "BO_PROPERTY",
			"properties": [{
				"name": "id",
				"dbName": "BOP_ID",
				"type": "Long",
				"id": true
			},{
				"name": "entityName",
				"dbName": "BOP_BOH_NAME",
				"type": "String",
				"size": 100,
				"required": true
			},{
				"name": "name",
				"dbName": "BOP_NAME",
				"type": "String",
				"size": 250,
				"required": true
			},{
				"name": "column",
				"dbName": "BOP_COLUMN",
				"type": "String",
				"size": 250,
				"required": true
			},{
				"name": "type",
				"dbName": "BOP_TYPE",
				"type": "String",
				"size": 250,
				"required": true
			},{
				"name": "pk",
				"dbName": "BOP_PK",
				"type": "Short",
				"dbValue": function(value){
					return value === null || value === true ? 1 : 0;
				},
				"value": function(dbValue){
					return dbValue < 1 ?  false : true;
				}				
			},{
				"name": "typeLabel",
				"dbName": "BOP_TYPE_NAME",
				"type": "String",
				"size": 250,
				"required": true
			},{
				"name": "size",
				"dbName": "BOP_LENGTH",
				"type": "Int",
				"dbValue": function(value){
					return value === undefined ? 0 : value;
				},
				"value": function(dbValue){
					return dbValue < 1 ?  undefined : dbValue;
				}			
			},{
				"name": "required",
				"dbName": "BOP_NULL",
				"type": "Short",
				"dbValue": function(value){
					return value === null || value === true ? 1 : 0;
				},
				"value": function(dbValue){
					return dbValue < 1 ?  false : true;
				}				
			},{
				"name": "defaultValue",
				"dbName": "BOP_DEFAULT",
				"type": "String",
				"size": 250
			}]
		}, "BIZ_PropertyDAO");
};

})();