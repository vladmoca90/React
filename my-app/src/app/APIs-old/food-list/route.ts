import { NextResponse } from 'next/server';
import { allFoods, Food } from './foods';

export async function GET() {
    return NextResponse.json(allFoods);
}

export type { Food };