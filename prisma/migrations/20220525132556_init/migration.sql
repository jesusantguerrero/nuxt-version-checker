-- CreateTable
CREATE TABLE "Selectors" (
    "id" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "cssSelector" STRING NOT NULL,
    "url" STRING,
    "selector" STRING,
    "title" STRING NOT NULL,
    "description" STRING,
    "actions" JSONB NOT NULL DEFAULT '{}',
    "results" JSONB NOT NULL DEFAULT '{}',
    "active" BOOL NOT NULL DEFAULT false,
    "siteId" UUID NOT NULL,

    CONSTRAINT "primary" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Site" (
    "id" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" STRING NOT NULL,
    "url" STRING,
    "selector" STRING,
    "actions" JSONB NOT NULL DEFAULT '{}',
    "results" JSONB NOT NULL DEFAULT '{}',
    "published" BOOL NOT NULL DEFAULT false,

    CONSTRAINT "primary" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notifications" (
    "id" UUID NOT NULL,
    "entity" STRING NOT NULL,
    "entityId" INT4 NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "handlers" JSONB NOT NULL,
    "subject" STRING NOT NULL,
    "message" STRING NOT NULL,
    "data" JSONB NOT NULL,
    "channel" STRING NOT NULL DEFAULT E'email',
    "status" STRING NOT NULL,

    CONSTRAINT "primary" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Selectors" ADD CONSTRAINT "Selectors_siteId_fkey" FOREIGN KEY ("siteId") REFERENCES "Site"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
