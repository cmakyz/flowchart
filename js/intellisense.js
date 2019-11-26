class Intellisense {
    constructor ($textarea, $autoComplete) {
        this.$body = document.querySelector("body");

        this.formulas = [
            {
                'formula': 'MOD',    
                'argumentCount':2,
                'example': 'MOD(a;b)'
            },
            {
                'formula': 'FLOOR',    
                'argumentCount':1,
                'example': 'FLOOR(a)',        
            },
            {
                'formula': 'CEIL',    
                'argumentCount':1,
                'example': 'CEIL(a)',        
            },
            {
                'formula': 'POWER',    
                'argumentCount':2,
                'example': 'POWER(a;b)'
            },
            {
                'formula': 'ROUND',    
                'argumentCount':2,
                'example': 'ROUND(a;b)'
            },
            {
                'formula': 'ROUND',    
                'argumentCount':1,
                'example': 'ROUND(a)'
            },
            {
                'formula': 'LOG',    
                'argumentCount':2,
                'example': 'LOG(a;b)'
            },
            {
                'formula': 'SQRT',    
                'argumentCount':2,
                'example': 'SQRT(a;b)'
            },
            {
                'formula': 'IF',    
                'argumentCount':3,
                'example': 'IF(logical_expression;value_true,value_false)'
            }
        ]
        this.customObject = [{
            "customObjectUid": "327288ec-f926-494f-89b3-c75535a91111",
            "customObjectName": "Cities of Turkey",
            "formulaName": "CITY",
            "isSystem": true,
            "fields": [{
                    "fieldTypeUid": "ee2c6c80-57fc-410e-ad16-47e21dc859cc",
                    "fieldTypeName": "Text",
                    "fieldUid": "f69611da-6174-4e1b-be52-cf48ac590811",
                    "fieldName": "Name",
                    "formulaName": "NAME",
                    "defaultValueFormula": "",
                    "infoText": ""
                },
                {
                    "fieldTypeUid": "ee2c6c80-57fc-410e-ad16-47e21dc859cc",
                    "fieldTypeName": "Text",
                    "fieldUid": "f69611da-6174-4e1b-be52-cf48ac590822",
                    "fieldName": "Postal Code",
                    "formulaName": "POSTAL_CODE",
                    "defaultValueFormula": "",
                    "infoText": ""
                }
            ]
        },
        {
            "customObjectUid": "327288ec-f926-494f-89b3-c75535a9ba97",
            "customObjectName": "Order Chat Message",
            "formulaName": "ORDER_CHAT_MESSAGE",
            "isSystem": true,
            "fields": [{
                    "fieldTypeUid": "d454eb63-3d44-4f5d-81fa-0dfe9db075cf",
                    "fieldTypeName": "LookupList",
                    "fieldUid": "ecb16ef7-2233-4052-a06b-6863b9a24a67",
                    "fieldName": "Channel Object",
                    "formulaName": "CHANNEL_OBJECT",
                    "defaultValueFormula": "",
                    "infoText": ""
                },
                {
                    "fieldTypeUid": "d4c0692f-d3c3-49d1-8000-c1c6bba41180",
                    "fieldTypeName": "Textarea",
                    "fieldUid": "9f6fa124-af62-43fb-91ad-100f6490231d",
                    "fieldName": "Message",
                    "formulaName": "MESSAGE",
                    "defaultValueFormula": "",
                    "infoText": ""
                },
                {
                    "fieldTypeUid": "26008849-c6d8-4d19-9e14-3b6a482244e6",
                    "fieldTypeName": "File",
                    "fieldUid": "e7462899-d95e-4bdc-9b8b-cc2524ab3695",
                    "fieldName": "File",
                    "formulaName": "FILE",
                    "defaultValueFormula": "",
                    "infoText": ""
                },
                {
                    "fieldTypeUid": "6fbe5de6-8d27-4848-9344-e30afeb1df24",
                    "fieldTypeName": "DateTime",
                    "fieldUid": "591b3729-491b-4195-b56f-81cc8220f337",
                    "fieldName": "Message Send Time",
                    "formulaName": "MESSAGE_SEND_TIME",
                    "defaultValueFormula": "Now",
                    "infoText": ""
                },
                {
                    "fieldTypeUid": "eab1e180-dbd0-470e-a683-8ab0214289b1",
                    "fieldTypeName": "OrganizationUnitList",
                    "fieldUid": "43c97872-38ba-4db5-91d0-fbfe7b9fd8d0",
                    "fieldName": "Sender",
                    "formulaName": "SENDER",
                    "defaultValueFormula": "",
                    "infoText": ""
                },
                {
                    "fieldTypeUid": "d454eb63-3d44-4f5d-81fa-0dfe9db075cf",
                    "fieldTypeName": "LookupList",
                    "fieldUid": "f841c0da-67c4-4f6f-9e74-323409ebd9f5",
                    "fieldName": "External Sender",
                    "formulaName": "EXTERNAL_SENDER",
                    "defaultValueFormula": "",
                    "infoText": ""
                }
            ]
        },
        {
            "customObjectUid": "a2800c43-75fe-427d-bce2-f80e92da3d54",
            "customObjectName": "Order",
            "formulaName": "ORDER",
            "isSystem": false,
            "fields": [{
                    "fieldTypeUid": "d4322f8b-d3e1-4792-b317-a4a563fe5ce1",
                    "fieldTypeName": "Sequence",
                    "fieldUid": "eaf79d1c-6cb8-4710-b5a1-1588748f1c52",
                    "fieldName": "No",
                    "formulaName": "NO",
                    "defaultValueFormula": "",
                    "infoText": ""
                },
                {
                    "fieldTypeUid": "6fbe5de6-8d27-4848-9344-e30afeb1df24",
                    "fieldTypeName": "DateTime",
                    "fieldUid": "a81df0fb-c01a-45db-a677-944fc79842d9",
                    "fieldName": "Ordered At",
                    "formulaName": "ORDERED_AT",
                    "defaultValueFormula": "NOW",
                    "infoText": ""
                },
                {
                    "fieldTypeUid": "d454eb63-3d44-4f5d-81fa-0dfe9db075cf",
                    "fieldTypeName": "LookupList",
                    "fieldUid": "5017e705-98a8-46e8-ae5f-ea7b763354c0",
                    "fieldName": "Customer",
                    "formulaName": "CUSTOMER",
                    "defaultValueFormula": "",
                    "infoText": ""
                },
                {
                    "fieldTypeUid": "d4c0692f-d3c3-49d1-8000-c1c6bba41180",
                    "fieldTypeName": "Textarea",
                    "fieldUid": "138f8cf8-93b3-4003-95c7-9d35a31e580c",
                    "fieldName": "Description",
                    "formulaName": "DESCRIPTION",
                    "defaultValueFormula": "",
                    "infoText": ""
                },
                {
                    "fieldTypeUid": "d4c0692f-d3c3-49d1-8000-c1c6bba41180",
                    "fieldTypeName": "Textarea",
                    "fieldUid": "739ef50e-d1b7-4017-a282-bc180c089548",
                    "fieldName": "Address",
                    "formulaName": "ADDRESS",
                    "defaultValueFormula": "",
                    "infoText": ""
                },
                {
                    "fieldTypeUid": "8e4baba0-b170-4842-86d2-07d13d2993ae",
                    "fieldTypeName": "SharedList",
                    "fieldUid": "1eaa591e-5f21-45e7-aaba-73aca0f49d02",
                    "fieldName": "City",
                    "formulaName": "CITY",
                    "lookupObjectUid": "327288ec-f926-494f-89b3-c75535a91111",
                    "lookupObjectFormulaName": "CITY",
                    "defaultValueFormula": "",
                    "infoText": ""
                },
                {
                    "fieldTypeUid": "c00a38bb-ac19-4459-bdb3-4d4e5fc9aa28",
                    "fieldTypeName": "LookupTable",
                    "fieldUid": "4a8e213f-c382-4f61-a0b7-4d053d7fa72d",
                    "fieldName": "Items",
                    "formulaName": "ITEMS",
                    "defaultValueFormula": "",
                    "infoText": ""
                },
                {
                    "fieldTypeUid": "fe56be92-7f53-4104-8aae-03d644a79cd9",
                    "fieldTypeName": "Formula",
                    "fieldUid": "7b467f1c-1b60-4498-869b-c41e7ddf8da3",
                    "fieldName": "Total",
                    "formulaName": "TOTAL",
                    "defaultValueFormula": "SUM(ITEMS.AMOUNT)",
                    "infoText": ""
                },
                {
                    "fieldTypeUid": "d4322f8b-d3e1-4792-b317-a4a563fe5ce1",
                    "fieldTypeName": "Sequence",
                    "fieldUid": "0245d652-b9ed-4ad1-b432-48ca65ecebe2",
                    "fieldName": "OrderId",
                    "formulaName": "ORDER_ID",
                    "defaultValueFormula": "",
                    "infoText": ""
                }
            ]
        },
        {
            "customObjectUid": "896c7a78-7c85-49f5-878d-77cded6c6126",
            "customObjectName": "Order Products Chat Message",
            "formulaName": "ORDER_PRODUCTS_CHAT_MESSAGE",
            "isSystem": true,
            "fields": [{
                    "fieldTypeUid": "d454eb63-3d44-4f5d-81fa-0dfe9db075cf",
                    "fieldTypeName": "LookupList",
                    "fieldUid": "7f674ef7-a31c-4310-bd4f-ccbae16479b0",
                    "fieldName": "Channel Object",
                    "formulaName": "CHANNEL_OBJECT",
                    "defaultValueFormula": "",
                    "infoText": ""
                },
                {
                    "fieldTypeUid": "d4c0692f-d3c3-49d1-8000-c1c6bba41180",
                    "fieldTypeName": "Textarea",
                    "fieldUid": "97e4e5f6-b18c-4efa-9465-148ddbfa8dce",
                    "fieldName": "Message",
                    "formulaName": "MESSAGE",
                    "defaultValueFormula": "",
                    "infoText": ""
                },
                {
                    "fieldTypeUid": "26008849-c6d8-4d19-9e14-3b6a482244e6",
                    "fieldTypeName": "File",
                    "fieldUid": "576cc76f-796d-4fbc-b81f-c7b44b536966",
                    "fieldName": "File",
                    "formulaName": "FILE",
                    "defaultValueFormula": "",
                    "infoText": ""
                },
                {
                    "fieldTypeUid": "6fbe5de6-8d27-4848-9344-e30afeb1df24",
                    "fieldTypeName": "DateTime",
                    "fieldUid": "f9639792-f978-4363-a13e-0d1f204cc5fa",
                    "fieldName": "Message Send Time",
                    "formulaName": "MESSAGE_SEND_TIME",
                    "defaultValueFormula": "Now",
                    "infoText": ""
                },
                {
                    "fieldTypeUid": "eab1e180-dbd0-470e-a683-8ab0214289b1",
                    "fieldTypeName": "OrganizationUnitList",
                    "fieldUid": "6b48620d-b933-464a-9f2e-4a8f9be92d55",
                    "fieldName": "Sender",
                    "formulaName": "SENDER",
                    "defaultValueFormula": "",
                    "infoText": ""
                },
                {
                    "fieldTypeUid": "d454eb63-3d44-4f5d-81fa-0dfe9db075cf",
                    "fieldTypeName": "LookupList",
                    "fieldUid": "f149e125-a85e-44b6-abcc-0c4e8f077fc0",
                    "fieldName": "External Sender",
                    "formulaName": "EXTERNAL_SENDER",
                    "defaultValueFormula": "",
                    "infoText": ""
                }
            ]
        },
        {
            "customObjectUid": "d22276a5-f2b9-4a2f-98e8-856aeb038454",
            "customObjectName": "Order Products",
            "formulaName": "ORDER_PRODUCTS",
            "isSystem": false,
            "fields": [{
                    "fieldTypeUid": "d454eb63-3d44-4f5d-81fa-0dfe9db075cf",
                    "fieldTypeName": "LookupList",
                    "fieldUid": "3264a774-6a64-4088-b8f6-5c985b233757",
                    "fieldName": "Order",
                    "formulaName": "ORDER",
                    "defaultValueFormula": "",
                    "infoText": ""
                },
                {
                    "fieldTypeUid": "d454eb63-3d44-4f5d-81fa-0dfe9db075cf",
                    "fieldTypeName": "LookupList",
                    "fieldUid": "674192ec-5b49-4ec4-b8ee-d0b5808979f3",
                    "fieldName": "Product",
                    "formulaName": "PRODUCT",
                    "defaultValueFormula": "",
                    "infoText": ""
                },
                {
                    "fieldTypeUid": "699e6778-9321-4620-95d2-0c15158c1efe",
                    "fieldTypeName": "Number",
                    "fieldUid": "8c08cb9b-6811-42d2-af2e-9cd6068380f3",
                    "fieldName": "Item",
                    "formulaName": "ITEM",
                    "defaultValueFormula": "1",
                    "infoText": ""
                },
                {
                    "fieldTypeUid": "699e6778-9321-4620-95d2-0c15158c1efe",
                    "fieldTypeName": "Number",
                    "fieldUid": "e1c66d1d-0358-4ed9-a2e1-3760d609265b",
                    "fieldName": "Price",
                    "formulaName": "PRICE",
                    "defaultValueFormula": "PRODUCT.PRICE",
                    "infoText": ""
                },
                {
                    "fieldTypeUid": "fe56be92-7f53-4104-8aae-03d644a79cd9",
                    "fieldTypeName": "Formula",
                    "fieldUid": "6bd92613-f3be-45bd-8184-4b0525020279",
                    "fieldName": "Amount",
                    "formulaName": "AMOUNT",
                    "defaultValueFormula": "ITEM * PRICE",
                    "infoText": ""
                },
                {
                    "fieldTypeUid": "d4322f8b-d3e1-4792-b317-a4a563fe5ce1",
                    "fieldTypeName": "Sequence",
                    "fieldUid": "ed67d84d-d24c-49c1-bc2a-d3a8f038047b",
                    "fieldName": "OrderProductsId",
                    "formulaName": "ORDER_PRODUCTS_ID",
                    "defaultValueFormula": "",
                    "infoText": ""
                }
            ]
        },
        {
            "customObjectUid": "af703ba9-336e-4f0b-b20a-9c0071835c2d",
            "customObjectName": "Market Place Chat Message",
            "formulaName": "MARKET_PLACE_CHAT_MESSAGE",
            "isSystem": true,
            "fields": [{
                    "fieldTypeUid": "d454eb63-3d44-4f5d-81fa-0dfe9db075cf",
                    "fieldTypeName": "LookupList",
                    "fieldUid": "5c701936-6b7a-4836-8faa-4e428398937e",
                    "fieldName": "Channel Object",
                    "formulaName": "CHANNEL_OBJECT",
                    "defaultValueFormula": "",
                    "infoText": ""
                },
                {
                    "fieldTypeUid": "d4c0692f-d3c3-49d1-8000-c1c6bba41180",
                    "fieldTypeName": "Textarea",
                    "fieldUid": "14a674db-0f1e-4912-a1c2-8b4719805d2b",
                    "fieldName": "Message",
                    "formulaName": "MESSAGE",
                    "defaultValueFormula": "",
                    "infoText": ""
                },
                {
                    "fieldTypeUid": "26008849-c6d8-4d19-9e14-3b6a482244e6",
                    "fieldTypeName": "File",
                    "fieldUid": "7bd90203-e96d-4f88-bad7-9a420c778f2d",
                    "fieldName": "File",
                    "formulaName": "FILE",
                    "defaultValueFormula": "",
                    "infoText": ""
                },
                {
                    "fieldTypeUid": "6fbe5de6-8d27-4848-9344-e30afeb1df24",
                    "fieldTypeName": "DateTime",
                    "fieldUid": "15129c1f-d8d7-4d09-b051-74ed2acdbb8e",
                    "fieldName": "Message Send Time",
                    "formulaName": "MESSAGE_SEND_TIME",
                    "defaultValueFormula": "Now",
                    "infoText": ""
                },
                {
                    "fieldTypeUid": "eab1e180-dbd0-470e-a683-8ab0214289b1",
                    "fieldTypeName": "OrganizationUnitList",
                    "fieldUid": "fa2b73ba-d807-4969-8edf-23fe66106e04",
                    "fieldName": "Sender",
                    "formulaName": "SENDER",
                    "defaultValueFormula": "",
                    "infoText": ""
                },
                {
                    "fieldTypeUid": "d454eb63-3d44-4f5d-81fa-0dfe9db075cf",
                    "fieldTypeName": "LookupList",
                    "fieldUid": "b57a409b-2664-473b-85de-164d0a34b121",
                    "fieldName": "External Sender",
                    "formulaName": "EXTERNAL_SENDER",
                    "defaultValueFormula": "",
                    "infoText": ""
                }
            ]
        },
        {
            "customObjectUid": "d055d103-a064-4786-b1f8-20239f4136bd",
            "customObjectName": "Market Place",
            "formulaName": "MARKET_PLACE",
            "isSystem": false,
            "fields": [{
                    "fieldTypeUid": "ee2c6c80-57fc-410e-ad16-47e21dc859cc",
                    "fieldTypeName": "Text",
                    "fieldUid": "f69611da-6174-4e1b-be52-cf48ac5908f3",
                    "fieldName": "Name",
                    "formulaName": "NAME",
                    "defaultValueFormula": "",
                    "infoText": ""
                },
                {
                    "fieldTypeUid": "d4c0692f-d3c3-49d1-8000-c1c6bba41180",
                    "fieldTypeName": "Textarea",
                    "fieldUid": "a44e34c4-b28b-4da6-afd7-5ffbe6b5d927",
                    "fieldName": "Description",
                    "formulaName": "DESCRIPTION",
                    "defaultValueFormula": "",
                    "infoText": ""
                },
                {
                    "fieldTypeUid": "0c245d61-ba1a-40ce-bf13-b6e5b4a76f92",
                    "fieldTypeName": "Url",
                    "fieldUid": "46c412a6-3e8c-4e4b-a8aa-a33e0cc03554",
                    "fieldName": "Url",
                    "formulaName": "URL",
                    "defaultValueFormula": "",
                    "infoText": ""
                },
                {
                    "fieldTypeUid": "ee2c6c80-57fc-410e-ad16-47e21dc859cc",
                    "fieldTypeName": "Text",
                    "fieldUid": "b7957e43-b810-4438-b31f-ca712d327813",
                    "fieldName": "Api Key",
                    "formulaName": "API_KEY",
                    "defaultValueFormula": "",
                    "infoText": ""
                },
                {
                    "fieldTypeUid": "ee2c6c80-57fc-410e-ad16-47e21dc859cc",
                    "fieldTypeName": "Text",
                    "fieldUid": "09f31314-04af-49e5-b9b3-11ffe159c1a2",
                    "fieldName": "Api Secret",
                    "formulaName": "API_SECRET",
                    "defaultValueFormula": "",
                    "infoText": ""
                },
                {
                    "fieldTypeUid": "9e895fd3-5368-4300-a13d-d25adaf862c1",
                    "fieldTypeName": "List",
                    "fieldUid": "e73f20b4-aaf7-4dfd-b7dd-1c3deae59c85",
                    "fieldName": "Api Type",
                    "formulaName": "API_TYPE",
                    "defaultValueFormula": "",
                    "infoText": ""
                },
                {
                    "fieldTypeUid": "d4322f8b-d3e1-4792-b317-a4a563fe5ce1",
                    "fieldTypeName": "Sequence",
                    "fieldUid": "a331a7d1-5501-4ea0-9bf4-6435cd1ade44",
                    "fieldName": "MarketPlaceId",
                    "formulaName": "MARKET_PLACE_ID",
                    "defaultValueFormula": "",
                    "infoText": ""
                }
            ]
        },
        {
            "customObjectUid": "fc2ef308-884e-4832-af03-b89e52125abf",
            "customObjectName": "Product Chat Message",
            "formulaName": "PRODUCT_CHAT_MESSAGE",
            "isSystem": true,
            "fields": [{
                    "fieldTypeUid": "d454eb63-3d44-4f5d-81fa-0dfe9db075cf",
                    "fieldTypeName": "LookupList",
                    "fieldUid": "88f9a417-caab-4cef-8d78-9954b0968f40",
                    "fieldName": "Channel Object",
                    "formulaName": "CHANNEL_OBJECT",
                    "defaultValueFormula": "",
                    "infoText": ""
                },
                {
                    "fieldTypeUid": "d4c0692f-d3c3-49d1-8000-c1c6bba41180",
                    "fieldTypeName": "Textarea",
                    "fieldUid": "df876bcf-3fb7-4440-b280-1cd34468dccc",
                    "fieldName": "Message",
                    "formulaName": "MESSAGE",
                    "defaultValueFormula": "",
                    "infoText": ""
                },
                {
                    "fieldTypeUid": "26008849-c6d8-4d19-9e14-3b6a482244e6",
                    "fieldTypeName": "File",
                    "fieldUid": "6b24e728-4cab-4814-9886-77a5b3aaafda",
                    "fieldName": "File",
                    "formulaName": "FILE",
                    "defaultValueFormula": "",
                    "infoText": ""
                },
                {
                    "fieldTypeUid": "6fbe5de6-8d27-4848-9344-e30afeb1df24",
                    "fieldTypeName": "DateTime",
                    "fieldUid": "669482b3-3989-47fd-ae17-5e1ad1d6b5da",
                    "fieldName": "Message Send Time",
                    "formulaName": "MESSAGE_SEND_TIME",
                    "defaultValueFormula": "Now",
                    "infoText": ""
                },
                {
                    "fieldTypeUid": "eab1e180-dbd0-470e-a683-8ab0214289b1",
                    "fieldTypeName": "OrganizationUnitList",
                    "fieldUid": "b4412308-7244-408d-acd9-a40880c1f6c6",
                    "fieldName": "Sender",
                    "formulaName": "SENDER",
                    "defaultValueFormula": "",
                    "infoText": ""
                },
                {
                    "fieldTypeUid": "d454eb63-3d44-4f5d-81fa-0dfe9db075cf",
                    "fieldTypeName": "LookupList",
                    "fieldUid": "857d2d58-6560-4fbe-b707-34a9d841fdb8",
                    "fieldName": "External Sender",
                    "formulaName": "EXTERNAL_SENDER",
                    "defaultValueFormula": "",
                    "infoText": ""
                }
            ]
        },
        {
            "customObjectUid": "ec25d564-b1e2-44c6-99a5-269d18a64946",
            "customObjectName": "Product",
            "formulaName": "PRODUCT",
            "isSystem": false,
            "fields": [{
                    "fieldTypeUid": "ee2c6c80-57fc-410e-ad16-47e21dc859cc",
                    "fieldTypeName": "Text",
                    "fieldUid": "a2223c8f-ebd6-4faa-92ed-01b05ae82be2",
                    "fieldName": "Name",
                    "formulaName": "NAME",
                    "defaultValueFormula": "",
                    "infoText": ""
                },
                {
                    "fieldTypeUid": "d4c0692f-d3c3-49d1-8000-c1c6bba41180",
                    "fieldTypeName": "Textarea",
                    "fieldUid": "8575bf2e-6f39-490f-8527-f69a15b58564",
                    "fieldName": "Description",
                    "formulaName": "DESCRIPTION",
                    "defaultValueFormula": "",
                    "infoText": ""
                },
                {
                    "fieldTypeUid": "ee2c6c80-57fc-410e-ad16-47e21dc859cc",
                    "fieldTypeName": "Text",
                    "fieldUid": "7160d0b8-d3dc-475d-a5df-82d0cfb2acc4",
                    "fieldName": "Barcode",
                    "formulaName": "BARCODE",
                    "defaultValueFormula": "",
                    "infoText": ""
                },
                {
                    "fieldTypeUid": "6e68f102-be4a-48d4-82d2-eb6d4ad143de",
                    "fieldTypeName": "Money",
                    "fieldUid": "9b55d708-69f9-4bc9-8a46-3f8119c53f6e",
                    "fieldName": "Price",
                    "formulaName": "PRICE",
                    "defaultValueFormula": "",
                    "infoText": ""
                },
                {
                    "fieldTypeUid": "699e6778-9321-4620-95d2-0c15158c1efe",
                    "fieldTypeName": "Number",
                    "fieldUid": "c4355e01-83e7-4ca0-80ec-45375ee1bfab",
                    "fieldName": "Stock",
                    "formulaName": "STOCK",
                    "defaultValueFormula": "",
                    "infoText": ""
                },
                {
                    "fieldTypeUid": "d454eb63-3d44-4f5d-81fa-0dfe9db075cf",
                    "fieldTypeName": "LookupList",
                    "fieldUid": "f60e29b3-ee1d-4b2b-9ad8-0afcea7987c4",
                    "fieldName": "Category",
                    "formulaName": "CATEGORY",
                    "defaultValueFormula": "",
                    "infoText": ""
                },
                {
                    "fieldTypeUid": "d4322f8b-d3e1-4792-b317-a4a563fe5ce1",
                    "fieldTypeName": "Sequence",
                    "fieldUid": "01f63537-1473-46e5-9f7e-3e64f375cf5a",
                    "fieldName": "ProductId",
                    "formulaName": "PRODUCT_ID",
                    "defaultValueFormula": "",
                    "infoText": ""
                }
            ]
        },
        {
            "customObjectUid": "81a81f2e-f454-4a05-bbef-261a9d027288",
            "customObjectName": "Product Category Chat Message",
            "formulaName": "PRODUCT_CATEGORY_CHAT_MESSAGE",
            "isSystem": true,
            "fields": [{
                    "fieldTypeUid": "d454eb63-3d44-4f5d-81fa-0dfe9db075cf",
                    "fieldTypeName": "LookupList",
                    "fieldUid": "af26c96a-00cc-403d-b093-86e0dee91c31",
                    "fieldName": "Channel Object",
                    "formulaName": "CHANNEL_OBJECT",
                    "defaultValueFormula": "",
                    "infoText": ""
                },
                {
                    "fieldTypeUid": "d4c0692f-d3c3-49d1-8000-c1c6bba41180",
                    "fieldTypeName": "Textarea",
                    "fieldUid": "80fc0999-a055-4719-839f-9083b9b96100",
                    "fieldName": "Message",
                    "formulaName": "MESSAGE",
                    "defaultValueFormula": "",
                    "infoText": ""
                },
                {
                    "fieldTypeUid": "26008849-c6d8-4d19-9e14-3b6a482244e6",
                    "fieldTypeName": "File",
                    "fieldUid": "2ba3fca2-353b-452c-bff3-c9a63d080836",
                    "fieldName": "File",
                    "formulaName": "FILE",
                    "defaultValueFormula": "",
                    "infoText": ""
                },
                {
                    "fieldTypeUid": "6fbe5de6-8d27-4848-9344-e30afeb1df24",
                    "fieldTypeName": "DateTime",
                    "fieldUid": "f04e8f80-9385-471b-86d7-fc6cf36180f8",
                    "fieldName": "Message Send Time",
                    "formulaName": "MESSAGE_SEND_TIME",
                    "defaultValueFormula": "Now",
                    "infoText": ""
                },
                {
                    "fieldTypeUid": "eab1e180-dbd0-470e-a683-8ab0214289b1",
                    "fieldTypeName": "OrganizationUnitList",
                    "fieldUid": "505a318f-8e97-4a31-b8de-5a3b15452ea6",
                    "fieldName": "Sender",
                    "formulaName": "SENDER",
                    "defaultValueFormula": "",
                    "infoText": ""
                },
                {
                    "fieldTypeUid": "d454eb63-3d44-4f5d-81fa-0dfe9db075cf",
                    "fieldTypeName": "LookupList",
                    "fieldUid": "352cfa39-7941-4cef-8888-4e8771209383",
                    "fieldName": "External Sender",
                    "formulaName": "EXTERNAL_SENDER",
                    "defaultValueFormula": "",
                    "infoText": ""
                }
            ]
        },
        {
            "customObjectUid": "580bed9d-0177-4ef3-bf2e-2c9829f88469",
            "customObjectName": "Product Category",
            "formulaName": "PRODUCT_CATEGORY",
            "isSystem": false,
            "fields": [{
                    "fieldTypeUid": "ee2c6c80-57fc-410e-ad16-47e21dc859cc",
                    "fieldTypeName": "Text",
                    "fieldUid": "a379d199-9248-40ca-87fb-5174456a4c55",
                    "fieldName": "Name",
                    "formulaName": "NAME",
                    "defaultValueFormula": "",
                    "infoText": ""
                },
                {
                    "fieldTypeUid": "d4c0692f-d3c3-49d1-8000-c1c6bba41180",
                    "fieldTypeName": "Textarea",
                    "fieldUid": "f325bb2a-3402-4c14-bd5c-9a398639db3e",
                    "fieldName": "Description",
                    "formulaName": "DESCRIPTION",
                    "defaultValueFormula": "",
                    "infoText": ""
                },
                {
                    "fieldTypeUid": "699e6778-9321-4620-95d2-0c15158c1efe",
                    "fieldTypeName": "Number",
                    "fieldUid": "c23e6b17-aa6e-4429-bdcc-7a5867c76c12",
                    "fieldName": "Product Count",
                    "formulaName": "PRODUCT_COUNT",
                    "defaultValueFormula": "COUNT(PRODUCT.ID; PRODUCT.CATEGORY = ID)",
                    "infoText": ""
                },
                {
                    "fieldTypeUid": "d4322f8b-d3e1-4792-b317-a4a563fe5ce1",
                    "fieldTypeName": "Sequence",
                    "fieldUid": "eda79c4b-22d2-41cd-b64b-3d8dcf52a573",
                    "fieldName": "ProductCategoryId",
                    "formulaName": "PRODUCT_CATEGORY_ID",
                    "defaultValueFormula": "",
                    "infoText": ""
                }
            ]
        },
        {
            "customObjectUid": "d9ce0466-ba8e-49af-acaa-c988d6e98580",
            "customObjectName": "Customer Chat Message",
            "formulaName": "CUSTOMER_CHAT_MESSAGE",
            "isSystem": true,
            "fields": [{
                    "fieldTypeUid": "d454eb63-3d44-4f5d-81fa-0dfe9db075cf",
                    "fieldTypeName": "LookupList",
                    "fieldUid": "10f67a8e-5ddc-459a-af72-7eec88bf55e8",
                    "fieldName": "Channel Object",
                    "formulaName": "CHANNEL_OBJECT",
                    "defaultValueFormula": "",
                    "infoText": ""
                },
                {
                    "fieldTypeUid": "d4c0692f-d3c3-49d1-8000-c1c6bba41180",
                    "fieldTypeName": "Textarea",
                    "fieldUid": "16bb9fa8-9ee1-4ac9-898c-8bbc2ba4e868",
                    "fieldName": "Message",
                    "formulaName": "MESSAGE",
                    "defaultValueFormula": "",
                    "infoText": ""
                },
                {
                    "fieldTypeUid": "26008849-c6d8-4d19-9e14-3b6a482244e6",
                    "fieldTypeName": "File",
                    "fieldUid": "d7d92015-b9fe-4980-8552-8cb5dc8479be",
                    "fieldName": "File",
                    "formulaName": "FILE",
                    "defaultValueFormula": "",
                    "infoText": ""
                },
                {
                    "fieldTypeUid": "6fbe5de6-8d27-4848-9344-e30afeb1df24",
                    "fieldTypeName": "DateTime",
                    "fieldUid": "360b36d5-92c0-4725-976e-9e031052cc89",
                    "fieldName": "Message Send Time",
                    "formulaName": "MESSAGE_SEND_TIME",
                    "defaultValueFormula": "Now",
                    "infoText": ""
                },
                {
                    "fieldTypeUid": "eab1e180-dbd0-470e-a683-8ab0214289b1",
                    "fieldTypeName": "OrganizationUnitList",
                    "fieldUid": "fa65cdee-8f00-4363-a033-6d1eef394d2d",
                    "fieldName": "Sender",
                    "formulaName": "SENDER",
                    "defaultValueFormula": "",
                    "infoText": ""
                },
                {
                    "fieldTypeUid": "d454eb63-3d44-4f5d-81fa-0dfe9db075cf",
                    "fieldTypeName": "LookupList",
                    "fieldUid": "0875f866-f6ec-409f-918e-632f91ae983f",
                    "fieldName": "External Sender",
                    "formulaName": "EXTERNAL_SENDER",
                    "defaultValueFormula": "",
                    "infoText": ""
                }
            ]
        },
        {
            "customObjectUid": "4f98be74-4676-4361-8f67-d72ea6ffc14c",
            "customObjectName": "Customer",
            "formulaName": "CUSTOMER",
            "isSystem": false,
            "fields": [{
                    "fieldTypeUid": "ee2c6c80-57fc-410e-ad16-47e21dc859cc",
                    "fieldTypeName": "Text",
                    "fieldUid": "72be483e-02dc-4692-8142-4de7fa1f10a2",
                    "fieldName": "First Name",
                    "formulaName": "FIRST_NAME",
                    "defaultValueFormula": "",
                    "infoText": ""
                },
                {
                    "fieldTypeUid": "ee2c6c80-57fc-410e-ad16-47e21dc859cc",
                    "fieldTypeName": "Text",
                    "fieldUid": "421fd694-751b-4f6d-b03f-1089ff64e968",
                    "fieldName": "Last Name",
                    "formulaName": "LAST_NAME",
                    "defaultValueFormula": "",
                    "infoText": ""
                },
                {
                    "fieldTypeUid": "6a08cd9f-d294-49bd-983d-0f163d4d6164",
                    "fieldTypeName": "Email",
                    "fieldUid": "727d9188-c697-4c5f-9919-9922f9c38422",
                    "fieldName": "Email",
                    "formulaName": "EMAIL",
                    "defaultValueFormula": "",
                    "infoText": ""
                },
                {
                    "fieldTypeUid": "1f20c953-598a-4bbe-96d7-4fa1b98f00bd",
                    "fieldTypeName": "Phone",
                    "fieldUid": "4fd5121c-0da8-486c-a183-e19c37129c19",
                    "fieldName": "Phone",
                    "formulaName": "PHONE",
                    "defaultValueFormula": "",
                    "infoText": ""
                },
                {
                    "fieldTypeUid": "d4c0692f-d3c3-49d1-8000-c1c6bba41180",
                    "fieldTypeName": "Textarea",
                    "fieldUid": "e75c9db5-751f-43f2-9cd8-4c8bceb97360",
                    "fieldName": "Description",
                    "formulaName": "DESCRIPTION",
                    "defaultValueFormula": "",
                    "infoText": ""
                },
                {
                    "fieldTypeUid": "f75dcc64-24ba-4844-9e3e-f827e89dccf8",
                    "fieldTypeName": "Checkbox",
                    "fieldUid": "b8376df6-7967-4f73-97df-983c31c3ad2c",
                    "fieldName": "Is Individual",
                    "formulaName": "IS_INDIVIDUAL",
                    "defaultValueFormula": "",
                    "infoText": ""
                },
                {
                    "fieldTypeUid": "ee2c6c80-57fc-410e-ad16-47e21dc859cc",
                    "fieldTypeName": "Text",
                    "fieldUid": "39ba787a-00c3-412a-bfad-ebb5a6553ffb",
                    "fieldName": "Company Name",
                    "formulaName": "COMPANY_NAME",
                    "defaultValueFormula": "",
                    "infoText": ""
                },
                {
                    "fieldTypeUid": "d4322f8b-d3e1-4792-b317-a4a563fe5ce1",
                    "fieldTypeName": "Sequence",
                    "fieldUid": "3375da46-950e-4099-ba69-1b26b84dd2f3",
                    "fieldName": "CustomerId",
                    "formulaName": "CUSTOMER_ID",
                    "defaultValueFormula": "",
                    "infoText": ""
                }
            ]
        },
        {
            "customObjectUid": "4bba0001-d355-4539-9189-fd9ba301eded",
            "customObjectName": "Group Field",
            "formulaName": "GROUP_FIELD",
            "isSystem": true,
            "fields": [{
                "fieldTypeUid": "d4c0692f-d3c3-49d1-8000-c1c6bba41180",
                "fieldTypeName": "Textarea",
                "fieldUid": "fc04387d-47c2-46fe-a924-413ed8216a0b",
                "fieldName": "Description",
                "formulaName": "DESCRIPTION",
                "defaultValueFormula": "",
                "infoText": ""
            }]
        },
        {
            "customObjectUid": "2dfa80fe-2152-41c2-a9af-125aefbdf01a",
            "customObjectName": "User Field",
            "formulaName": "USER_FIELD",
            "isSystem": true,
            "fields": [{
                    "fieldTypeUid": "ee2c6c80-57fc-410e-ad16-47e21dc859cc",
                    "fieldTypeName": "Text",
                    "fieldUid": "ae60ca53-13fe-47d1-9a6c-793f8e28c854",
                    "fieldName": "First Name",
                    "formulaName": "FIRST_NAME",
                    "defaultValueFormula": "",
                    "infoText": ""
                },
                {
                    "fieldTypeUid": "ee2c6c80-57fc-410e-ad16-47e21dc859cc",
                    "fieldTypeName": "Text",
                    "fieldUid": "21e002bf-647c-4609-aaee-40aaa2b19b56",
                    "fieldName": "Middle Name",
                    "formulaName": "MIDDLE_NAME",
                    "defaultValueFormula": "",
                    "infoText": ""
                },
                {
                    "fieldTypeUid": "ee2c6c80-57fc-410e-ad16-47e21dc859cc",
                    "fieldTypeName": "Text",
                    "fieldUid": "d176b695-bf80-4c89-b078-1fed25b00588",
                    "fieldName": "Last Name",
                    "formulaName": "LAST_NAME",
                    "defaultValueFormula": "",
                    "infoText": ""
                },
                {
                    "fieldTypeUid": "fe56be92-7f53-4104-8aae-03d644a79cd9",
                    "fieldTypeName": "Formula",
                    "fieldUid": "5e287211-6e39-4ce8-a6b1-f3c8338f6dad",
                    "fieldName": "Name",
                    "formulaName": "NAME",
                    "defaultValueFormula": "FIRST_NAME + \" \" + LAST_NAME",
                    "infoText": ""
                },
                {
                    "fieldTypeUid": "ee2c6c80-57fc-410e-ad16-47e21dc859cc",
                    "fieldTypeName": "Text",
                    "fieldUid": "c0f716db-a129-48dc-9838-e4c7b0b8a66b",
                    "fieldName": "Identity Number",
                    "formulaName": "IDENTITY_NUMBER",
                    "defaultValueFormula": "",
                    "infoText": ""
                },
                {
                    "fieldTypeUid": "ee2c6c80-57fc-410e-ad16-47e21dc859cc",
                    "fieldTypeName": "Text",
                    "fieldUid": "329c600c-83c7-4914-86e0-029860707d29",
                    "fieldName": "Position Title",
                    "formulaName": "POSITION _TITLE",
                    "defaultValueFormula": "",
                    "infoText": ""
                },
                {
                    "fieldTypeUid": "ee2c6c80-57fc-410e-ad16-47e21dc859cc",
                    "fieldTypeName": "Text",
                    "fieldUid": "a9245192-97cc-4594-802f-3961794f6643",
                    "fieldName": "Department",
                    "formulaName": "DEPARTMENT",
                    "defaultValueFormula": "",
                    "infoText": ""
                },
                {
                    "fieldTypeUid": "eab1e180-dbd0-470e-a683-8ab0214289b1",
                    "fieldTypeName": "OrganizationUnitList",
                    "fieldUid": "2c2e16d4-a0b1-47be-b91d-9aaf89c34473",
                    "fieldName": "Manager",
                    "formulaName": "MANAGER",
                    "defaultValueFormula": "",
                    "infoText": ""
                },
                {
                    "fieldTypeUid": "eab1e180-dbd0-470e-a683-8ab0214289b1",
                    "fieldTypeName": "OrganizationUnitList",
                    "fieldUid": "5b7293f6-d236-4bdb-974f-877c5702b9b6",
                    "fieldName": "Buddy",
                    "formulaName": "BUDDY",
                    "defaultValueFormula": "",
                    "infoText": ""
                },
                {
                    "fieldTypeUid": "6fbe5de6-8d27-4848-9344-e30afeb1df24",
                    "fieldTypeName": "DateTime",
                    "fieldUid": "7a2e3157-1fa4-4057-8afc-078ba2960f6f",
                    "fieldName": "Born At",
                    "formulaName": "BORN_AT",
                    "defaultValueFormula": "",
                    "infoText": ""
                },
                {
                    "fieldTypeUid": "6fbe5de6-8d27-4848-9344-e30afeb1df24",
                    "fieldTypeName": "DateTime",
                    "fieldUid": "22ca63ca-8856-49de-82da-0caceeea7798",
                    "fieldName": "Employee Started At",
                    "formulaName": "EMPLOYEE_STARTED_AT",
                    "defaultValueFormula": "",
                    "infoText": ""
                },
                {
                    "fieldTypeUid": "6fbe5de6-8d27-4848-9344-e30afeb1df24",
                    "fieldTypeName": "DateTime",
                    "fieldUid": "90cc6798-4428-4747-adec-bd299064e21a",
                    "fieldName": "Employee Terminated At",
                    "formulaName": "EMPLOYEE_TERMINATED_AT",
                    "defaultValueFormula": "",
                    "infoText": ""
                },
                {
                    "fieldTypeUid": "c00a38bb-ac19-4459-bdb3-4d4e5fc9aa28",
                    "fieldTypeName": "LookupTable",
                    "fieldUid": "9854f7f6-5584-4ab1-9bed-756f06ef0885",
                    "fieldName": "User Addresses",
                    "formulaName": "USER_ADDRESSES",
                    "defaultValueFormula": "",
                    "infoText": ""
                },
                {
                    "fieldTypeUid": "c00a38bb-ac19-4459-bdb3-4d4e5fc9aa28",
                    "fieldTypeName": "LookupTable",
                    "fieldUid": "9179fce4-fed9-40ac-98bd-bb95434718e6",
                    "fieldName": "User Phones",
                    "formulaName": "USER_PHONES",
                    "defaultValueFormula": "",
                    "infoText": ""
                },
                {
                    "fieldTypeUid": "c00a38bb-ac19-4459-bdb3-4d4e5fc9aa28",
                    "fieldTypeName": "LookupTable",
                    "fieldUid": "60cf52a9-e3a0-4a61-870a-585b09457ffd",
                    "fieldName": "User Emails",
                    "formulaName": "USER_Emails",
                    "defaultValueFormula": "",
                    "infoText": ""
                },
                {
                    "fieldTypeUid": "d4c0692f-d3c3-49d1-8000-c1c6bba41180",
                    "fieldTypeName": "Textarea",
                    "fieldUid": "56f383e6-d32f-4246-9de8-5ef4f9669181",
                    "fieldName": "Description",
                    "formulaName": "DESCRIPTION",
                    "defaultValueFormula": "",
                    "infoText": ""
                }
            ]
        },
        {
            "customObjectUid": "a6bdc691-c10e-4a5d-8301-0edd58f71045",
            "customObjectName": "User Address",
            "formulaName": "USER_ADDRESS",
            "isSystem": true,
            "fields": [{
                    "fieldTypeUid": "d4c0692f-d3c3-49d1-8000-c1c6bba41180",
                    "fieldTypeName": "Textarea",
                    "fieldUid": "6ed65715-fe70-4952-8280-e96ebd0e334d",
                    "fieldName": "Description",
                    "formulaName": "DESCRIPTION",
                    "defaultValueFormula": "",
                    "infoText": ""
                },
                {
                    "fieldTypeUid": "8e4baba0-b170-4842-86d2-07d13d2993ae",
                    "fieldTypeName": "SharedList",
                    "fieldUid": "6b3cbf78-3695-466d-a841-46f3100930dd",
                    "fieldName": "City",
                    "formulaName": "CITY",
                    "defaultValueFormula": "",
                    "infoText": ""
                },
                {
                    "fieldTypeUid": "eab1e180-dbd0-470e-a683-8ab0214289b1",
                    "fieldTypeName": "OrganizationUnitList",
                    "fieldUid": "ca2a4e73-f39a-4440-9490-5d04eb8778a4",
                    "fieldName": "User",
                    "formulaName": "USER",
                    "defaultValueFormula": "",
                    "infoText": ""
                },
                {
                    "fieldTypeUid": "ee2c6c80-57fc-410e-ad16-47e21dc859cc",
                    "fieldTypeName": "Text",
                    "fieldUid": "7b87f62f-32b5-4739-8ef0-3325c841b369",
                    "fieldName": "Name",
                    "formulaName": "NAME",
                    "defaultValueFormula": "",
                    "infoText": ""
                },
                {
                    "fieldTypeUid": "d4c0692f-d3c3-49d1-8000-c1c6bba41180",
                    "fieldTypeName": "Textarea",
                    "fieldUid": "3c986bf6-38cd-4b41-b5ac-586eaf96b58f",
                    "fieldName": "Address",
                    "formulaName": "ADDRESS",
                    "defaultValueFormula": "",
                    "infoText": ""
                },
                {
                    "fieldTypeUid": "8e4baba0-b170-4842-86d2-07d13d2993ae",
                    "fieldTypeName": "SharedList",
                    "fieldUid": "aca82ada-8052-4952-ace4-41402421a6cb",
                    "fieldName": "Country",
                    "formulaName": "COUNTRY",
                    "defaultValueFormula": "",
                    "infoText": ""
                },
                {
                    "fieldTypeUid": "8e4baba0-b170-4842-86d2-07d13d2993ae",
                    "fieldTypeName": "SharedList",
                    "fieldUid": "6ae630ac-e913-4218-9ddd-f1a76c00a46c",
                    "fieldName": "County",
                    "formulaName": "COUNTY",
                    "defaultValueFormula": "",
                    "infoText": ""
                },
                {
                    "fieldTypeUid": "8e4baba0-b170-4842-86d2-07d13d2993ae",
                    "fieldTypeName": "SharedList",
                    "fieldUid": "087021a6-156d-403d-bfd6-789ac0a1d674",
                    "fieldName": "District",
                    "formulaName": "DISTRICT",
                    "defaultValueFormula": "",
                    "infoText": ""
                }
            ]
        },
        {
            "customObjectUid": "09f602cb-7a45-4992-8ca0-2d2e56bb1e3d",
            "customObjectName": "User Phone",
            "formulaName": "USER_PHONE",
            "isSystem": true,
            "fields": [{
                    "fieldTypeUid": "eab1e180-dbd0-470e-a683-8ab0214289b1",
                    "fieldTypeName": "OrganizationUnitList",
                    "fieldUid": "8dd8f084-dc75-43b0-b3fa-fc18226c30e7",
                    "fieldName": "User",
                    "formulaName": "USER",
                    "defaultValueFormula": "",
                    "infoText": ""
                },
                {
                    "fieldTypeUid": "ee2c6c80-57fc-410e-ad16-47e21dc859cc",
                    "fieldTypeName": "Text",
                    "fieldUid": "1e9e574b-d606-498d-91e3-4ed20848a1cb",
                    "fieldName": "Name",
                    "formulaName": "NAME",
                    "defaultValueFormula": "",
                    "infoText": ""
                },
                {
                    "fieldTypeUid": "1f20c953-598a-4bbe-96d7-4fa1b98f00bd",
                    "fieldTypeName": "Phone",
                    "fieldUid": "f8bc0ab9-ab04-43bf-9285-c472b6cda444",
                    "fieldName": "Phone",
                    "formulaName": "PHONE",
                    "defaultValueFormula": "",
                    "infoText": ""
                },
                {
                    "fieldTypeUid": "699e6778-9321-4620-95d2-0c15158c1efe",
                    "fieldTypeName": "Number",
                    "fieldUid": "4623b0f4-17a3-455f-bca4-ef12a9a6614e",
                    "fieldName": "Extension",
                    "formulaName": "EXTENSION",
                    "defaultValueFormula": "",
                    "infoText": ""
                },
                {
                    "fieldTypeUid": "d4c0692f-d3c3-49d1-8000-c1c6bba41180",
                    "fieldTypeName": "Textarea",
                    "fieldUid": "971a9681-1a9e-48e8-b004-e074378aadf9",
                    "fieldName": "Description",
                    "formulaName": "DESCRIPTION",
                    "defaultValueFormula": "",
                    "infoText": ""
                }
            ]
        },
        {
            "customObjectUid": "53687684-a959-48bd-8a53-5688a58fa254",
            "customObjectName": "User Email",
            "formulaName": "USER_EMAILS",
            "isSystem": true,
            "fields": [{
                    "fieldTypeUid": "d4c0692f-d3c3-49d1-8000-c1c6bba41180",
                    "fieldTypeName": "Textarea",
                    "fieldUid": "f7f36746-0fde-4294-8973-c4467db04e99",
                    "fieldName": "Description",
                    "formulaName": "DESCRIPTION",
                    "defaultValueFormula": "",
                    "infoText": ""
                },
                {
                    "fieldTypeUid": "eab1e180-dbd0-470e-a683-8ab0214289b1",
                    "fieldTypeName": "OrganizationUnitList",
                    "fieldUid": "44233f77-ba57-4236-9acb-372801b947b0",
                    "fieldName": "User",
                    "formulaName": "USER",
                    "defaultValueFormula": "",
                    "infoText": ""
                },
                {
                    "fieldTypeUid": "6a08cd9f-d294-49bd-983d-0f163d4d6164",
                    "fieldTypeName": "Email",
                    "fieldUid": "109363b9-3ffd-4ea5-a836-4e0a8d33f0c6",
                    "fieldName": "Email",
                    "formulaName": "EMAIL",
                    "defaultValueFormula": "",
                    "infoText": ""
                }
            ]
        },
        {
            "customObjectUid": "94006ffd-28c2-4bec-b08d-49e98f88d3ad",
            "customObjectName": "System Admin Chat Message",
            "formulaName": "SYSTEMADMIN_CHAT_MESSAGE",
            "isSystem": true,
            "fields": [{
                    "fieldTypeUid": "d454eb63-3d44-4f5d-81fa-0dfe9db075cf",
                    "fieldTypeName": "LookupList",
                    "fieldUid": "a531846b-6f06-4b39-8c08-9e18b03626e1",
                    "fieldName": "Channel Object",
                    "formulaName": "CHANNEL_OBJECT",
                    "defaultValueFormula": "",
                    "infoText": ""
                },
                {
                    "fieldTypeUid": "d4c0692f-d3c3-49d1-8000-c1c6bba41180",
                    "fieldTypeName": "Textarea",
                    "fieldUid": "09468655-741c-4d52-8ca2-d4b58862a3c8",
                    "fieldName": "Message",
                    "formulaName": "MESSAGE",
                    "defaultValueFormula": "",
                    "infoText": ""
                },
                {
                    "fieldTypeUid": "26008849-c6d8-4d19-9e14-3b6a482244e6",
                    "fieldTypeName": "File",
                    "fieldUid": "63b3560d-8cc7-43e9-9e6b-44e51e6a5d2a",
                    "fieldName": "File",
                    "formulaName": "FILE",
                    "defaultValueFormula": "",
                    "infoText": ""
                },
                {
                    "fieldTypeUid": "6fbe5de6-8d27-4848-9344-e30afeb1df24",
                    "fieldTypeName": "DateTime",
                    "fieldUid": "16a18b43-d828-4399-832b-0d150ebb4dec",
                    "fieldName": "Message Send Time",
                    "formulaName": "MESSAGE_SEND_TIME",
                    "defaultValueFormula": "Now",
                    "infoText": ""
                },
                {
                    "fieldTypeUid": "eab1e180-dbd0-470e-a683-8ab0214289b1",
                    "fieldTypeName": "OrganizationUnitList",
                    "fieldUid": "84d7c86d-9592-4136-9ff6-3124cdcd9306",
                    "fieldName": "Sender",
                    "formulaName": "SENDER",
                    "defaultValueFormula": "",
                    "infoText": ""
                },
                {
                    "fieldTypeUid": "d454eb63-3d44-4f5d-81fa-0dfe9db075cf",
                    "fieldTypeName": "LookupList",
                    "fieldUid": "64d263e7-1fc6-4544-ba8a-93d7b25a6771",
                    "fieldName": "External Sender",
                    "formulaName": "EXTERNAL_SENDER",
                    "defaultValueFormula": "",
                    "infoText": ""
                }
            ]
        },
        {
            "customObjectUid": "bd3ed40b-2244-4ae5-90b8-ef5120578d93",
            "customObjectName": "Everyone Chat Message",
            "formulaName": "EVERYONE_CHAT_MESSAGE",
            "isSystem": true,
            "fields": [{
                    "fieldTypeUid": "d454eb63-3d44-4f5d-81fa-0dfe9db075cf",
                    "fieldTypeName": "LookupList",
                    "fieldUid": "3a1b2a3c-c907-4563-b425-97d53eba3060",
                    "fieldName": "Channel Object",
                    "formulaName": "CHANNEL_OBJECT",
                    "defaultValueFormula": "",
                    "infoText": ""
                },
                {
                    "fieldTypeUid": "d4c0692f-d3c3-49d1-8000-c1c6bba41180",
                    "fieldTypeName": "Textarea",
                    "fieldUid": "6ac92af4-295d-44f0-ac02-8497fa0c3699",
                    "fieldName": "Message",
                    "formulaName": "MESSAGE",
                    "defaultValueFormula": "",
                    "infoText": ""
                },
                {
                    "fieldTypeUid": "26008849-c6d8-4d19-9e14-3b6a482244e6",
                    "fieldTypeName": "File",
                    "fieldUid": "fc6155b9-4c9e-4444-83fa-db17a9d0eb3a",
                    "fieldName": "File",
                    "formulaName": "FILE",
                    "defaultValueFormula": "",
                    "infoText": ""
                },
                {
                    "fieldTypeUid": "6fbe5de6-8d27-4848-9344-e30afeb1df24",
                    "fieldTypeName": "DateTime",
                    "fieldUid": "24e8e1a8-7404-450b-9528-fe7f3a3f1eef",
                    "fieldName": "Message Send Time",
                    "formulaName": "MESSAGE_SEND_TIME",
                    "defaultValueFormula": "Now",
                    "infoText": ""
                },
                {
                    "fieldTypeUid": "eab1e180-dbd0-470e-a683-8ab0214289b1",
                    "fieldTypeName": "OrganizationUnitList",
                    "fieldUid": "0636864d-f0ad-4b7d-b093-ff02a58ce028",
                    "fieldName": "Sender",
                    "formulaName": "SENDER",
                    "defaultValueFormula": "",
                    "infoText": ""
                },
                {
                    "fieldTypeUid": "d454eb63-3d44-4f5d-81fa-0dfe9db075cf",
                    "fieldTypeName": "LookupList",
                    "fieldUid": "721cebf6-b458-48e3-9f3c-6a8f827addee",
                    "fieldName": "External Sender",
                    "formulaName": "EXTERNAL_SENDER",
                    "defaultValueFormula": "",
                    "infoText": ""
                }
            ]
        }
        ]
        
        this.customObjects = [];
        this._parseCustomObjects();

        this.$textarea = $textarea;
        this.$autoComplete = $autoComplete;
        this.$hiddenInput = this.createElement("input");
        this.$hiddenInput.style.opacity = "0";
        this.$hiddenTextarea = this.createElement("div", {id: "hiddenTextarea"});
        this.$hiddenTextarea.style.opacity = "0";
        this.$body.appendChild(this.$hiddenInput);
        this.$body.appendChild(this.$hiddenTextarea);

        
        this._enableTextareaEvents();
        this._enableAutoCompleteEvents();

        this.parsed_customObjects = this.customObjects;
        this.parsed_formulas = this.formulas;
        this.customObjectList = [];
        
        for (let i = 0; i < this.parsed_customObjects.length; i++) {
        
            this.customObjectList.push(this.parsed_customObjects[i].formulaName);
        
        }
    }
    
    _enableAutoCompleteEvents() {
        let $list = this.$autoComplete.querySelector("#list");
        $list.addEventListener("click", (event) => {
            this.clickedAutoComplete(event);
        });

        let $tabs_1 = this.$autoComplete.querySelector(".tabs li:nth-child(1)");
        let $tabs_2 = this.$autoComplete.querySelector(".tabs li:nth-child(2)");
        let $tabs_3 = this.$autoComplete.querySelector(".tabs li:nth-child(3)");
        let $tabs_4 = this.$autoComplete.querySelector(".tabs li:nth-child(4)");

        $tabs_1.addEventListener("click", () => { this.custObjClicked() });
        $tabs_2.addEventListener("click", () => { this.fieldsClicked() });
        $tabs_3.addEventListener("click", () => { this.formulasClicked() });
        $tabs_4.addEventListener("click", () => { this.operatorsClicked() });
    }

    _enableTextareaEvents() {
        this.$textarea.addEventListener('mousedown', () => {
            this.closeAutoComplete();
        });

        this.$textarea.addEventListener('keyup', (event) => {
            this.ctrlSpace(event);
            this.getArrowEnterBackspaceKeys(event);
            this.inputControl();
        });

        this.$hiddenInput.addEventListener('keyup', (event) => {
            this.getArrowEnterBackspaceKeys(event);
        });

        this.$textarea.addEventListener('mouseup', () => {
            this.getCursorPosition();
            this.inputControl();
        });
        
        this.$textarea.addEventListener('input', () => {
            this.searchInput();
        });
        
        this.$textarea.addEventListener('focus', () => {
            this.inputControl();
        });

        this.$body.addEventListener("keydown", (event) => {
            this.escClicked(event);
        });
    }

    _parseCustomObjects () {
        let isSystemTrueList = [];
        let isSystemFalseList = [];
        for (let i = 0; i < this.customObject.length; i++) {
            if (this.customObject[i].isSystem === true) {
                isSystemTrueList.push(this.customObject[i]);
            } else {
                isSystemFalseList.push(this.customObject[i]);
            }
        }
        this.customObjects = isSystemFalseList.concat(isSystemTrueList);
    }

    createElement(tag, probs = {}, innerHTML = false) {
        let $el = document.createElement(tag);
        
        for (let key in probs) {
            $el.setAttribute(key, probs[key]);
        }

        if (innerHTML) {
            $el.innerHTML = innerHTML;
        }

        return $el;
    }

    getCursorPosition() {
        let cursor_index = this.$textarea.selectionStart;
        return cursor_index;
    }

    getArrowEnterBackspaceKeys(event) {
        let keyCode_arrow_left = 37;
        let keyCode_arrow_up = 38;
        let keyCode_arrow_right = 39;
        let keyCode_arrow_down = 40;
        let keyCode_enter = 13;
        let keyCode_backSpace = 8;
        let activeElementTagName = document.activeElement.tagName;
        let ul = this.$autoComplete.querySelector("#list");
        let ul_items = ul.getElementsByTagName("li");
        let a_list = this.$autoComplete.getElementsByTagName("a");
        let tmp_inputText = this.$textarea.value;
    
        if(event.keyCode == keyCode_arrow_left
            && activeElementTagName == "INPUT"){
                let ActiveTabId;
                for (let i=0;i<a_list.length;i++) {
                    if(a_list[i].classList.contains("activated")===true){
                        ActiveTabId = a_list[i].id;
                        break;
                    }
                }
                switch(ActiveTabId){
                    case "customObjects":
                        this.operatorsClicked();
                        break;
                    case "fields":
                        this.custObjClicked();
                        break;
                    case "formulas":
                        this.fieldsClicked();
                        break;
                    case "operators":
                        this.formulasClicked();
                        break;
                }
            }
    
        if(event.keyCode == keyCode_arrow_right
            && activeElementTagName == "INPUT"){
                let ActiveTabId;
                for (let i=0;i<a_list.length;i++) {
                    if(a_list[i].classList.contains("activated")===true){
                        ActiveTabId = a_list[i].id;
                    }
                }
                switch(ActiveTabId){
                    case "customObjects":
                        this.fieldsClicked();
                        break;
                    case "fields":
                        this.formulasClicked();
                        break;
                    case "formulas":
                        this.operatorsClicked();
                        break;
                    case "operators":
                        this.custObjClicked();
                        break;
                }
            }
    
        if (event.keyCode == keyCode_arrow_up
            &&activeElementTagName == "INPUT") { //arrow up'a basıldığında , autocompleterdaki list itemin aktifliğinin değişmesi
    
            for (let i = 0; i < ul_items.length; i++) {
    
                if (ul_items[i].classList.contains("active")
                    &&i == 0) {
    
                    ul_items[ul_items.length - 1].classList.add("active");
                    ul_items[i].classList.remove("active");
                    break;
    
                }
                else if(ul_items[i].classList.contains("active")
                        &&i != 0) {
    
                        ul_items[i].classList.remove("active");
                        ul_items[i - 1].classList.add("active");
                        break;
    
                }
            }
        }
    
        if (event.keyCode == keyCode_arrow_down //arrow down'a basıldığında , autocompleterdaki list itemin aktifliğinin değişmesi
            &&activeElementTagName == "INPUT") {
    
            for (var i = 0; i < ul_items.length; i++) {
    
                if(ul_items[i].classList.contains("active")
                    &&i != (ul_items.length - 1)) {
    
                    ul_items[i].classList.remove("active");
                    ul_items[i + 1].classList.add("active");
                    break;
    
                }
                else if(i == (ul_items.length - 1)
                        &&ul_items[i].classList.contains("active")){ 
    
                        ul_items[i].classList.remove("active");
                        ul_items[0].classList.add("active");
                        break;
    
                }
            }
        }
    
        if(event.keyCode == keyCode_enter
            &&activeElementTagName == "INPUT") { //enter'a basıldığında aktif tabdeki aktif li-itemin textarea'ya eklenmesi
            let cursor_index = this.getCursorPosition();
    
            for (let i = 0; i < ul_items.length; i++) {
    
                for (let j = 0; j < a_list.length; j++) {
    
                    if(ul_items[i].classList.contains("active")
                        &&a_list[j].classList.contains("activated")
                        &&a_list[j].id=="customObjects"){
    
                        this.$textarea.value = tmp_inputText.slice(0, cursor_index) + ul_items[i].innerHTML + "." + tmp_inputText.slice(cursor_index);
                        this.$hiddenTextarea.innerText = tmp_inputText.slice(0, cursor_index) + ul_items[i].innerHTML + "." + tmp_inputText.slice(cursor_index);
                        this.$textarea.focus();
                        this.$textarea.setSelectionRange(cursor_index + ul_items[i].innerHTML.length + 1, cursor_index + ul_items[i].innerHTML.length + 1);
                        this.fieldsClicked();
                        break;
                    }
    
                    else if(ul_items[i].classList.contains("active")
                            &&a_list[j].classList.contains("activated")
                            &&a_list[j].id == "formulas") {
                                
                        for (let k = 0; k < this.parsed_formulas.length; k++) {
    
                            if (this.parsed_formulas[k].example == ul_items[i].innerHTML) {
    
                                this.$textarea.value = tmp_inputText.slice(0, cursor_index) + this.parsed_formulas[k].formula + '()' + tmp_inputText.slice(cursor_index);
                                this.$hiddenTextarea.innerHTML = tmp_inputText.slice(0, cursor_index) + this.parsed_formulas[k].formula + '()' + tmp_inputText.slice(cursor_index);
                                this.$textarea.focus();
                                this.$textarea.setSelectionRange(cursor_index + this.parsed_formulas[k].formula.length + 2, cursor_index + this.parsed_formulas[k].formula.length + 2);
                                this.$autoComplete.style.visibility = "hidden";
                                break;
                            }
                        }
                    }
    
                    else if(ul_items[i].classList.contains("active")
                            &&a_list[j].classList.contains("activated")
                            &&a_list[j].id == "operators") {
    
                                if (ul_items[i].textContent === "AND"
                                    ||ul_items[i].textContent === "OR"
                                    ||ul_items[i].textContent === "NOT"
                                    ||ul_items[i].textContent === "IN") {  
    
                                        this.$textarea.value = tmp_inputText.slice(0, cursor_index) + " " + ul_items[i].textContent + " " + tmp_inputText.slice(cursor_index);
                                        this.$hiddenTextarea.innerText = tmp_inputText.slice(0, cursor_index) + ul_items[i].textContent + tmp_inputText.slice(cursor_index);
                                        this.$textarea.focus();
                                        this.$textarea.setSelectionRange(cursor_index + ul_items[i].textContent.length + 2, cursor_index + ul_items[i].textContent.length + 2); 
                                        this.$autoComplete.style.visibility = "hidden"; 
                                        break;
                                }
                                else{
    
                                    this.$textarea.value = tmp_inputText.slice(0, cursor_index) + ul_items[i].textContent + tmp_inputText.slice(cursor_index);
                                    this.$hiddenTextarea.innerText = tmp_inputText.slice(0, cursor_index) + ul_items[i].textContent + tmp_inputText.slice(cursor_index);
                                    this.$textarea.focus();
                                    this.$textarea.setSelectionRange(cursor_index + ul_items[i].textContent.length, cursor_index + ul_items[i].textContent.length);
                                    this.$autoComplete.style.visibility = "hidden";
                                    break;
                                }
    
                    }
                    
                    else if(ul_items[i].classList.contains("active")
                            &&a_list[j].classList.contains("activated")
                            &&a_list[j].id == "fields") {
                                
                                let reverseCustObjName = this.getFieldsFromCustObj();
                                for (let x = 0; x < this.parsed_customObjects.length; x++) {
                                    if(this.parsed_customObjects[x].formulaName==reverseCustObjName){
    
                                        for (let y = 0; y < this.parsed_customObjects[x].fields.length; y++) {
                                            if(this.parsed_customObjects[x].fields[y].formulaName==ul_items[i].innerHTML){
                                                if(this.parsed_customObjects[x].fields[y].fieldTypeName=="LookupList"
                                                    ||this.parsed_customObjects[x].fields[y].fieldTypeName=="SharedList"){
                
                                                    this.$textarea.value = tmp_inputText.slice(0, cursor_index) + ul_items[i].innerHTML + "." + tmp_inputText.slice(cursor_index);
                                                    this.$textarea.focus();
                                                    this.$autoComplete.style.visibility = "hidden";
                                                    this.fieldsClicked();
                                                    break;
                                                }
                                                else{
    
                                                    this.$textarea.value = tmp_inputText.slice(0, cursor_index) + ul_items[i].innerHTML + " " + tmp_inputText.slice(cursor_index);
                                                    this.$textarea.focus();
                                                    this.$autoComplete.style.visibility = "hidden";
                                                    break;
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
    
    inputControl() { //autocomplete pozisyonu
        let visibleTextAreaInput = this.$textarea.value;
        let cursor_index = this.getCursorPosition();
        let reverseCustomObjectName = "";
    
        for (let i = cursor_index-1; i > -1; i--) {
    
            if(visibleTextAreaInput[i] == '\n') {
                break;
            }
            else{
                reverseCustomObjectName += visibleTextAreaInput[i];
            }
        }
    
        reverseCustomObjectName = this.reverse(reverseCustomObjectName);
        this.$hiddenTextarea.innerText = reverseCustomObjectName;
    
        let distanceX = this.$hiddenTextarea.clientWidth+10;
        let distanceY = this.$hiddenTextarea.clientHeight;
        let getLineNumber = visibleTextAreaInput.substr(0, cursor_index).split("\n").length;
    
        if(distanceY==0){
            distanceY = 15*getLineNumber+10;
        }
        else{
            distanceY = distanceY*getLineNumber+10;
        }
    
        this.$autoComplete.style.left=distanceX+"px";
        this.$autoComplete.style.top=distanceY+"px";
    }

    ctrlSpace(event) {
        let keyCode_space = 32;
    
        if (event.ctrlKey
            &&event.keyCode == keyCode_space){
            
            this.custObjClicked();
    
        }
    }

    custObjClicked() {
        let ul = this.$autoComplete.querySelector("#list");
        ul.innerHTML = "";
        let a_list = this.$autoComplete.getElementsByTagName("a");
    
        for (let i = 0; i < a_list.length; i++) {
    
            if(a_list[i].id == "customObjects"){
                a_list[i].classList.add("activated");
            }
            else{
                a_list[i].classList.remove("activated");
            }
        }
    
        for (let i = 0; i < this.parsed_customObjects.length; i++) {
            let ul_item = document.createElement("li");
    
            if(i == 0) {
                ul_item.classList.add("active");
            }
            if (this.parsed_customObjects[i].isSystem === true) {
                ul_item.classList.add("system-true");
            }
    
            ul_item.appendChild(document.createTextNode(this.parsed_customObjects[i].formulaName));
            ul.appendChild(ul_item);
        }
    
        this.$autoComplete.style.visibility = "visible";
        this.$hiddenInput.focus();
    }

    fieldsClicked() {
        let cursor_index = this.getCursorPosition();
        let ul = this.$autoComplete.querySelector("#list");
        ul.innerHTML = "";
        let fieldsList = [];
        let reverseCustObjName = "";
        let inpTextArea = this.$textarea.value;
        let a_list = this.$autoComplete.getElementsByTagName("a");
    
        for (let i = 0; i < a_list.length; i++) {
    
            if(a_list[i].id == "fields"){
                a_list[i].classList.add("activated");
            }
            else{
                a_list[i].classList.remove("activated");
            }
    
        }
        if (inpTextArea[cursor_index - 1] == ".") {
    
            for (let i = cursor_index - 2; i > -1; i--) {
    
                if(inpTextArea[i] == ' '
                    ||inpTextArea[i] == '\n'
                    ||inpTextArea[i] == "."
                    ||inpTextArea[i] == ")"
                    ||inpTextArea[i] == "(") {
                    break;
                }
                else{
                    reverseCustObjName += inpTextArea[i];
                }
    
            }
        }
    
        reverseCustObjName = this.reverse(reverseCustObjName);
        if (this.$textarea.value[cursor_index - 1] == "." &&
            this.customObjectList.indexOf(reverseCustObjName) > -1) {
    
            for (let i = 0; i < this.customObjectList.length; i++) {
    
                if (this.customObjectList[i] == reverseCustObjName) {
    
                    for (let j = 0; j < this.parsed_customObjects[i].fields.length; j++) {
    
                        fieldsList.push(this.parsed_customObjects[i].fields[j].formulaName);
                    }
                }
            }
        }
    
        for (let i = 0; i < fieldsList.length; i++) {
            let ul_item = document.createElement("li");
            ul_item.appendChild(document.createTextNode(fieldsList[i]));
    
            if (i == 0) {
                ul_item.classList.add("active");
            }
    
            ul.appendChild(ul_item);
        }
    
        this.$autoComplete.style.visibility = "visible";
        this.$hiddenInput.focus();
    }

    formulasClicked() {
        let ul = this.$autoComplete.querySelector("#list");
        ul.innerHTML = "";
        let a_list = this.$autoComplete.getElementsByTagName("a");
    
        for (let i = 0; i < a_list.length; i++) {
    
            if (a_list[i].id == "formulas"){
                a_list[i].classList.add("activated");
            }
            else{
                a_list[i].classList.remove("activated");
            }
    
        }
    
        for (let i = 0; i < this.parsed_formulas.length; i++) {
    
            let ul_item = document.createElement("li");
    
            if (i == 0) {
                ul_item.classList.add("active");
            }
    
            ul_item.appendChild(document.createTextNode(this.parsed_formulas[i].example));
            ul.appendChild(ul_item);
    
        }
    
        this.$autoComplete.style.visibility = "visible";
        this.$hiddenInput.focus();
    }

    operatorsClicked() {
        let ul = this.$autoComplete.querySelector("#list");
        let array_operators = ["AND", "OR", "NOT", "IN", "<", ">", "<=", ">=", "+", "-", "*", "/"];
        let a_list = this.$autoComplete.getElementsByTagName("a");
        ul.innerHTML = "";
    
        for (let i = 0; i < a_list.length; i++) {
    
            if (a_list[i].id == "operators") {
                a_list[i].classList.add("activated");
            }
            else{
                a_list[i].classList.remove("activated");
            }
    
        }
    
        for (let i = 0; i < array_operators.length; i++) {
            let ul_item = document.createElement("li");
    
            if (i == 0) {
                ul_item.classList.add("active");
            }
    
            ul_item.appendChild(document.createTextNode(array_operators[i]));
            ul.appendChild(ul_item);
        }
    
        this.$autoComplete.style.visibility = "visible";
        this.$hiddenInput.focus();
    }

    escClicked(event) {
        let keyCode_esc = 27;
    
        if (event.keyCode == keyCode_esc) {
            this.$hiddenInput.focus();
            this.$autoComplete.style.visibility = "hidden";
            this.$textarea.focus();
        }
    }

    reverse(str) {
        return str.split("").reverse().join("");
    }

    getEventTarget(e) {
        e = e || window.event;
        return e.target || e.srcElement;
    }

    clickedAutoComplete(event) { //autocomplete e tıklanması olayı
        let cursor_index = this.getCursorPosition();
        let tmp_inputText = this.$textarea.value;
        let inputTextArea = this.$textarea;
        let target = this.getEventTarget(event);
        let a_list = this.$autoComplete.getElementsByTagName("a");
        let hiddenTextArea = this.$hiddenTextarea;
        let ul = this.$autoComplete.querySelector("#list");
        let ul_items = ul.getElementsByTagName("li");
    
        for (let i = 0; i < a_list.length; i++) {
    
            if (a_list[i].classList.contains("activated")
                &&a_list[i].id == "customObjects") {
                
                this.$textarea.value = tmp_inputText.slice(0, cursor_index) + target.innerText + "." + tmp_inputText.slice(cursor_index);
                hiddenTextArea.innerText = tmp_inputText.slice(0, cursor_index) + target.innerText + "." + tmp_inputText.slice(cursor_index);
                inputTextArea.focus();
                this.$textarea.setSelectionRange(cursor_index + target.innerText.length+1, cursor_index + target.innerText.length+1);
                this.$autoComplete.style.visibility = "hidden";
                this.fieldsClicked();
                break;
            
            }
            else if(a_list[i].classList.contains("activated")
                    &&a_list[i].id == "formulas") {
    
                for (let j = 0; j < this.parsed_formulas.length; j++) {
                
                    if (this.parsed_formulas[j].example == target.innerText) {
                
                        this.$textarea.value = tmp_inputText.slice(0, cursor_index) + this.parsed_formulas[j].formula + '()' + tmp_inputText.slice(cursor_index);
                        hiddenTextArea.innerText = tmp_inputText.slice(0, cursor_index) + this.parsed_formulas[j].formula + '()' + tmp_inputText.slice(cursor_index);
                        inputTextArea.focus();
                        textArea.setSelectionRange(cursor_index + this.parsed_formulas[j].formula.length + 2, cursor_index + this.parsed_formulas[j].formula.length + 2);
                        this.$autoComplete.style.visibility = "hidden";
                        break;
                
                    }
                }
            }
            else if(a_list[i].classList.contains("activated")
                    &&a_list[i].id == "operators") {
                    
                    if(target.innerText=="AND"
                        ||target.innerText=="NOT"
                        ||target.innerText=="IN"
                        ||target.innerText=="OR"){
    
                        this.$textarea.value = tmp_inputText.slice(0, cursor_index) +" "+ target.innerText +" "+tmp_inputText.slice(cursor_index);
                        hiddenTextArea.innerText = tmp_inputText.slice(0, cursor_index) +" "+ target.innerText +" "+tmp_inputText.slice(cursor_index);
                        inputTextArea.focus();
                        textArea.setSelectionRange(cursor_index + ul_items[i].textContent.length+3, cursor_index + ul_items[i].textContent.length+3);
                        this.$autoComplete.style.visibility = "hidden";
                        break;
    
                    }
                    else{
    
                        this.$textarea.value = tmp_inputText.slice(0, cursor_index) + target.innerText + tmp_inputText.slice(cursor_index);
                        hiddenTextArea.innerText = tmp_inputText.slice(0, cursor_index) + target.innerText + tmp_inputText.slice(cursor_index); 
                        inputTextArea.focus();
                        textArea.setSelectionRange(cursor_index + ul_items[i].textContent.length, cursor_index + ul_items[i].textContent.length);
                        this.$autoComplete.style.visibility = "hidden";
                        break;
                    }
    
            }
            else if (a_list[i].classList.contains("activated")
                    &&a_list[i].id == "fields"){
    
                    let reverseCustObjName = this.getFieldsFromCustObj();
    
                    for (let i = 0; i < this.parsed_customObjects.length; i++) {
    
                        if(this.parsed_customObjects[i].formulaName==reverseCustObjName){
    
                            for (let j = 0; j < this.parsed_customObjects[i].fields.length; j++) {
    
                                if(this.parsed_customObjects[i].fields[j].formulaName==target.innerText){
    
                                    if(this.parsed_customObjects[i].fields[j].fieldTypeName==("LookupList")
                                        ||this.parsed_customObjects[i].fields[j].fieldTypeName=="SharedList"){
    
                                        this.$textarea.value = tmp_inputText.slice(0, cursor_index) + target.innerText + "." + tmp_inputText.slice(cursor_index);
                                        this.$autoComplete.style.visibility = "hidden";
                                        inputTextArea.setSelectionRange(cursor_index + parsed_formulas[j].formula.length, cursor_index + parsed_formulas[j].formula.length);
                                        inputTextArea.focus();
                                        this.fieldsClicked();
                                        break;
                                    }
                                    else{
    
                                        this.$textarea.value = tmp_inputText.slice(0, cursor_index) + target.innerText + " " + tmp_inputText.slice(cursor_index);
                                        this.$autoComplete.style.visibility = "hidden";
                                        this.$textarea.setSelectionRange(cursor_index + parsed_formulas[j].formula.length + 1, cursor_index + parsed_formulas[j].formula.length + 1);
                                        inputTextArea.focus();
                                        break;
    
                                    }
                                }
                            }
                        }
                    }
            }
        }
    }

    closeAutoComplete(){
        if(this.$autoComplete.style.visibility==="visible"){
            this.$autoComplete.style.visibility = "hidden";
        }
    }

    getFieldsFromCustObj(){
        let reverseCustObjName = "";
        let cursor_index = this.getCursorPosition();
        if (this.$textarea.value[cursor_index-1] == ".") {
    
            for (let i = cursor_index - 2; i > -1; i--) {
    
                if(this.$textarea.value[i] === ' '
                    ||this.$textarea.value[i] === '\n'
                    ||this.$textarea.value[i] === "."
                    ||this.$textarea.value[i] === ")"
                    ||this.$textarea.value[i] === "("){
    
                    break;
                }
                else{
                    reverseCustObjName += this.$textarea.value[i];
                }
    
            }
        }
        reverseCustObjName = this.reverse(reverseCustObjName);
        return reverseCustObjName;
    }

    searchInput(){ //yazılırken arama , tamamlanmadı
        let inputTextArea = this.getFieldsFromCustObj();
        //console.log(inputTextArea);
    }
}


