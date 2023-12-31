import { NextResponse } from 'next/server';
import { tubeLines } from './data';

export async function GET() {
    return NextResponse.json(tubeLines);
}