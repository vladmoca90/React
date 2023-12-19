import { NextResponse } from 'next/server';
import { Wine, WineCategory, allWines } from './data';

export async function GET() {
    return NextResponse.json(allWines)
}

export { allWines, WineCategory }
export type { Wine }