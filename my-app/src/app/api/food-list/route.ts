import { NextResponse } from 'next/server';
import { allFoods } from './data';

export async function GET() {
    return NextResponse.json(allFoods);
}