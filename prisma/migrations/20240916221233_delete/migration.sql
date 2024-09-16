-- DropForeignKey
ALTER TABLE "entries" DROP CONSTRAINT "entries_product_id_fkey";

-- DropForeignKey
ALTER TABLE "outputs" DROP CONSTRAINT "outputs_product_id_fkey";

-- AddForeignKey
ALTER TABLE "entries" ADD CONSTRAINT "entries_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "outputs" ADD CONSTRAINT "outputs_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE;
