import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ projectId: string; filename: string }> }
) {
  try {
    const { projectId, filename } = await params;
    
    // Security: prevent path traversal
    if (projectId.includes("..") || filename.includes("..")) {
      return new NextResponse("Invalid path", { status: 400 });
    }

    const filePath = path.join(
      process.cwd(),
      "data",
      "projects",
      projectId,
      filename
    );

    // Check if file exists
    if (!fs.existsSync(filePath)) {
      return new NextResponse("File not found", { status: 404 });
    }

    // Read file
    const fileBuffer = fs.readFileSync(filePath);
    
    // Determine content type based on file extension
    const ext = path.extname(filename).toLowerCase();
    const contentTypes: Record<string, string> = {
      ".jpg": "image/jpeg",
      ".jpeg": "image/jpeg",
      ".png": "image/png",
      ".webp": "image/webp",
      ".svg": "image/svg+xml",
    };

    const contentType = contentTypes[ext] || "application/octet-stream";

    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=0, must-revalidate",
      },
    });
  } catch (error) {
    console.error("Error serving project image:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

