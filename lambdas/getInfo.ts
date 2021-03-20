import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';

export const organization: APIGatewayProxyHandler = async (event, _context) => {

    const information = event.pathParameters?.info;
    if (!information || !organizationData[information]) {
        return apiResponses._400({
            message: "no information of this organization."
        })
    }

    return apiResponses._200(organizationData[information]);
  
}

const apiResponses = {
    _200: (body: { [key: string]: any }) => {
        return {
            statusCode: 200,
            body: JSON.stringify(body, null, 2),
        };    
    },
    _400: (body: { [key: string]: any }) => {
        return {
            statusCode: 200,
            body: JSON.stringify(body, null, 2),
        };    
    }
}

interface OrganizationData {
    name: string,
    status: string,
    contact: number,
}

const organizationData: { [key: string ]: OrganizationData } = {
    software: {
        name: "superiority software",
        status: "private",
        contact: 9429929149
    },
    hardware: {
        name: "superiority hardware pvt.Ltd.",
        status: "private",
        contact: 9429929149,
    },
    information: {
        name: "superiority information pvt.Ltd.",
        status: "private",
        contact: 9429929149,
    }
}