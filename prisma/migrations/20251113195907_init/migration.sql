-- CreateTable
CREATE TABLE "Production" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "productType" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "targetTotal" DECIMAL(12,2) NOT NULL DEFAULT 0,
    "policyNumber" TEXT NOT NULL,
    "InsuredName" TEXT NOT NULL,
    "SplitPercentage" DECIMAL(12,2) NOT NULL DEFAULT 0,
    "splitWithID" TEXT NOT NULL,
    "AgentNumber" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "issuedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Production_pkey" PRIMARY KEY ("id")
);
