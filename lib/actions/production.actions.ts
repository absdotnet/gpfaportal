'use server'

import {prisma} from '@/db/prisma'
import { convertToPlainObject } from "../utils";
import { LATEST_PRODUCTION_LIMIT } from "../constants";

//Get latest Productions
export async function getLatestProductions() {

    const data = await prisma.production.findMany( {
        take: LATEST_PRODUCTION_LIMIT,
        orderBy:  { createdAt: 'desc'}
    });

    return convertToPlainObject(data);
}