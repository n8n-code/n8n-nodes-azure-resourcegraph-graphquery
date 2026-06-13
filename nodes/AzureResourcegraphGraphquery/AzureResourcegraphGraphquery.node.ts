import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureResourcegraphGraphquery implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Azure Resourcegraph Graphquery',
                name: 'N8nDevAzureResourcegraphGraphquery',
                icon: { light: 'file:./azure-resourcegraph-graphquery.png', dark: 'file:./azure-resourcegraph-graphquery.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Azure Resource Graph Query API Reference',
                defaults: { name: 'Azure Resourcegraph Graphquery' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevAzureResourcegraphGraphqueryApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
                ],
        };
}
