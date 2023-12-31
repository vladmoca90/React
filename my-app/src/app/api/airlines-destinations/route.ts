import { NextResponse } from 'next/server';
import { allFlights } from './data';

export async function GET() {
    return NextResponse.json(allFlights)
}