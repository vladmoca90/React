import { NextResponse } from 'next/server';
import { allCars } from './data';

export async function GET() {
    return NextResponse.json(allCars)
}