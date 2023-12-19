import { NextResponse } from 'next/server';
import { Line, LineStatus, tubeLines } from './data';

export async function GET() {
    return NextResponse.json(tubeLines);
}

export { LineStatus, tubeLines }
