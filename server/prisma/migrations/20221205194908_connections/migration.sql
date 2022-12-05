-- CreateTable
CREATE TABLE "Connection" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "number" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "stops" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Stop" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "label" TEXT NOT NULL,
    "connections" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Connection_number_key" ON "Connection"("number");

-- CreateIndex
CREATE UNIQUE INDEX "Stop_label_key" ON "Stop"("label");
