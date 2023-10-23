import { NextResponse } from 'next/server';
import { Car, allCars } from './data';

export async function GET() {
    return NextResponse.json(allCars)
}

export type { Car }