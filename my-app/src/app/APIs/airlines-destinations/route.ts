import { NextResponse } from 'next/server';
import { Flight, allFlights } from './data';

export type { Flight }

export async function GET() {
    return NextResponse.json(allFlights)
}