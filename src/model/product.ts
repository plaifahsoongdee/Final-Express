import { RowDataPacket,ResultSetHeader } from "mysql2";
import { promisePool } from "../config/db";
// export interface Product {
//     id: number;
//     name: string;
//     price: number;
//}

const selectAll = async () => {
    try {
      const [rows]: [RowDataPacket[], any] = await promisePool.query(
        "SELECT * FROM product"
      );
      return rows;
    } catch (err) {
      console.error("Database query error:", err);
    }
  };
// // Function to delete a product by ID
 const deleteProductById = async (id: number): Promise<void> => {
   try {
     console.log(`Attempting to delete product with ID: ${id}`);
     const [result] = await promisePool.query<ResultSetHeader>(
       "DELETE FROM product WHERE id = ?",
       [id]
     );
     console.log("Delete result:", result);
//     // Optionally, you can check if the affectedRows property is 0 to handle the case where no rows were deleted
     if ((result as ResultSetHeader).affectedRows === 0) {
       console.warn(`No product found with ID: ${id}`);
     }
   } catch (err) {
     console.error("Database deletion error:", err);
     throw err; // It's good practice to throw the error after logging it
   }
 };
 export default {}