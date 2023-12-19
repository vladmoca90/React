import { NextResponse } from 'next/server';
import { allWines } from './data';

export async function GET() {
    return NextResponse.json(allWines)
}

export { allWines }
