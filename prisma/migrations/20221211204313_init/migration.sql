-- CreateTable
CREATE TABLE "Quote" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "text" TEXT NOT NULL,
    "originator" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Quote_text_key" ON "Quote"("text");
