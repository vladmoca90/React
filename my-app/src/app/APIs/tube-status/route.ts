import { NextResponse } from 'next/server';
import { LineStatus, tubeLines } from './data';

export async function GET() {
    return NextResponse.json(tubeLines);
}

export { LineStatus, tubeLines }
