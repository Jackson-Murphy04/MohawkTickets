-- CreateTable
CREATE TABLE `Ticket` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `job_number` INTEGER NOT NULL,
    `ticket_number` INTEGER NOT NULL,
    `project_name` VARCHAR(191) NOT NULL,
    `customer_name` VARCHAR(191) NOT NULL,
    `prototype` BOOLEAN NOT NULL,
    `proto_name` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Ticket_job_number_key`(`job_number`),
    UNIQUE INDEX `Ticket_ticket_number_key`(`ticket_number`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pattern` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `job_number` INTEGER NOT NULL,
    `area` VARCHAR(191) NOT NULL,
    `floor_type` VARCHAR(191) NOT NULL,
    `floor_pattern` VARCHAR(191) NOT NULL,
    `base_type` VARCHAR(191) NOT NULL,
    `base_pattern` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `note` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `job_number` INTEGER NOT NULL,
    `note` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Pattern` ADD CONSTRAINT `Pattern_job_number_fkey` FOREIGN KEY (`job_number`) REFERENCES `Ticket`(`job_number`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `note` ADD CONSTRAINT `note_job_number_fkey` FOREIGN KEY (`job_number`) REFERENCES `Ticket`(`job_number`) ON DELETE RESTRICT ON UPDATE CASCADE;
