import { NextResponse } from 'next/server';
import { Flight, allFlights } from './data';

export async function GET() {
    return NextResponse.json(allFlights)
}

export type { Flight }