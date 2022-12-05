/*
  Warnings:

  - Added the required column `exclusion` to the `Connection` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Connection" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "number" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "stops" TEXT NOT NULL,
    "exclusion" TEXT NOT NULL
);
INSERT INTO "new_Connection" ("id", "number", "stops", "type") SELECT "id", "number", "stops", "type" FROM "Connection";
DROP TABLE "Connection";
ALTER TABLE "new_Connection" RENAME TO "Connection";
CREATE UNIQUE INDEX "Connection_number_key" ON "Connection"("number");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
