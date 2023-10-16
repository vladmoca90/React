import { NextResponse } from 'next/server';
import { Car, allCars } from './data';

export type { Car }

export async function GET() {
    return NextResponse.json(allCars)
}

export { allCars };
